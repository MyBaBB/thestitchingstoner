import React, { useEffect, useRef, useState } from "react";
import { GiHemp } from "react-icons/gi";
import { MdOutlineForest } from "react-icons/md";
import "./YouTubePlayer.css";

const VIDEO_LIST = [
  "kH5oJYh6f8w",
  "5xOZ43vdEUI",
  "QwzT17V82UU",
  "S2_u5-Nt6Tg",
  "l668SIWPZBo",
  "nhDHQQfrZug",
  "OLCa-mS0SCY",
  "3YQtEKiI124",
  "e9ZtQsviCz0",
  "r-zV_rUGku0",
  "79pyb_83FrY",
  "y7hHyFk6xgk",
  "im0vrCjzCTQ",
  "2z9aDUK7QFI",
  "wSqYybyib-A",
];

const getRandomVideo = () =>
  VIDEO_LIST[Math.floor(Math.random() * VIDEO_LIST.length)];

export default function RandomYouTubePlayer() {
  const playerRef = useRef(null);
  const containerRef = useRef(null);
  const [currentVideo, setCurrentVideo] = useState(getRandomVideo);

  useEffect(() => {
    let isSubscribed = true;

    // Helper to instantiate the player
    const initPlayer = () => {
      if (!isSubscribed || !window.YT || !window.YT.Player) return;

      // Destroy old instance if re-initializing
      if (playerRef.current) {
        playerRef.current.destroy();
      }

      playerRef.current = new window.YT.Player("random-yt-player", {
        videoId: currentVideo,
        playerVars: {
          autoplay: 1,
          controls: 1,
          modestbranding: 1,
          rel: 0,
        },
        events: {
          onStateChange: (event) => {
            if (event.data === window.YT.PlayerState.ENDED) {
              window.location.href = "/specialevent";
            }
          },
        },
      });
    };

    // Case 1: YT API is already fully loaded
    if (window.YT && window.YT.Player) {
      initPlayer();
    } else {
      // Case 2: Attach to global callback or chain onto existing one
      const previousCallback = window.onYouTubeIframeAPIReady;
      window.onYouTubeIframeAPIReady = () => {
        if (previousCallback) previousCallback();
        initPlayer();
      };

      // Case 3: Script tag isn't added yet
      if (!document.getElementById("youtube-iframe-api")) {
        const tag = document.createElement("script");
        tag.id = "youtube-iframe-api";
        tag.src = "https://www.youtube.com/iframe_api";
        document.body.appendChild(tag);
      }
    }

    // Cleanup when component unmounts
    return () => {
      isSubscribed = false;
      if (
        playerRef.current &&
        typeof playerRef.current.destroy === "function"
      ) {
        playerRef.current.destroy();
        playerRef.current = null;
      }
    };
  }, []); // Run once on mount

  // Handle switching videos when currentVideo state changes
  useEffect(() => {
    if (
      playerRef.current &&
      typeof playerRef.current.loadVideoById === "function"
    ) {
      playerRef.current.loadVideoById(currentVideo);
    }
  }, [currentVideo]);

  const playAnother = () => {
    let nextVideo = getRandomVideo();
    // Avoid picking the exact same video twice in a row
    while (nextVideo === currentVideo && VIDEO_LIST.length > 1) {
      nextVideo = getRandomVideo();
    }
    setCurrentVideo(nextVideo);
  };

  return (
    <div className="youtubePlayerWrapper">
      <div className="yt-responsive-container">
        <div id="random-yt-player"></div>
      </div>

      <button
        className="spinAgainButton whitespace-nowrap"
        onClick={playAnother}
      >
        <span className="inline-block text-sm text-amber-200 xs:text-xl">
          <MdOutlineForest />
        </span>
        <span className="inline-block font-Itim-Regular text-sm text-amber-200 xs:text-base">
          &nbsp;&nbsp;Spin Again&nbsp;&nbsp;
        </span>
        <span className="inline-block text-sm text-amber-200 xs:text-xl">
          <GiHemp />
        </span>
      </button>
    </div>
  );
}
