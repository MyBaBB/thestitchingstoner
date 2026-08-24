// eslint-disable-next-line no-unused-vars
import React, { useEffect, useRef, useState } from "react";
import { GiHemp } from "react-icons/gi";
import { MdOutlineForest, MdQueueMusic, MdClose } from "react-icons/md";
import "./YouTubePlayer.css";

const VIDEO_LIST = [
  { id: "kH5oJYh6f8w", title: "Hookahville" },
  { id: "2z9aDUK7QFI", title: "Loner" },
  { id: "5xOZ43vdEUI", title: "Roll The Dice" },
  { id: "QwzT17V82UU", title: "Music" },
  { id: "S2_u5-Nt6Tg", title: "SpringTime Again" },
  { id: "l668SIWPZBo", title: "Octofrye" },
  { id: "nhDHQQfrZug", title: "Dragonfly" },
  { id: "OLCa-mS0SCY", title: "Smile and Sing" },
  { id: "3YQtEKiI124", title: "Ecstasy" },
  { id: "e9ZtQsviCz0", title: "Ragin River" },
  { id: "r-zV_rUGku0", title: "Mississippi Steamboat" },
  { id: "79pyb_83FrY", title: "Another Good Man Gone" },
  { id: "y7hHyFk6xgk", title: "Schwa" },
  { id: "im0vrCjzCTQ", title: "Backwoods Rose" },
  { id: "wSqYybyib-A", title: "Pylons" },
];

const getRandomVideo = () =>
  VIDEO_LIST[Math.floor(Math.random() * VIDEO_LIST.length)].id;

export default function RandomYouTubePlayer() {
  const playerRef = useRef(null);
  const [currentVideo, setCurrentVideo] = useState(getRandomVideo);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  // Close drawer on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" || e.key === "Esc") {
        setIsDrawerOpen(false);
      }
    };

    if (isDrawerOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isDrawerOpen]);

  useEffect(() => {
    let isSubscribed = true;

    const initPlayer = () => {
      if (!isSubscribed || !window.YT || !window.YT.Player) return;

      if (playerRef.current) {
        playerRef.current.destroy();
      }

      playerRef.current = new window.YT.Player("random-yt-player", {
        host: "https://www.youtube-nocookie.com",
        videoId: currentVideo,
        playerVars: {
          autoplay: 0,
          controls: 1,
          modestbranding: 1,
          rel: 0,
        },
        events: {
          onReady: (event) => {
            event.target.setVolume(50);
          },
          onStateChange: (event) => {
            if (event.data === window.YT.PlayerState.ENDED) {
              window.location.href = "/specialevent";
            }
          },
        },
      });
    };

    if (window.YT && window.YT.Player) {
      initPlayer();
    } else {
      const previousCallback = window.onYouTubeIframeAPIReady;
      window.onYouTubeIframeAPIReady = () => {
        if (previousCallback) previousCallback();
        initPlayer();
      };

      if (!document.getElementById("youtube-iframe-api")) {
        const tag = document.createElement("script");
        tag.id = "youtube-iframe-api";
        tag.src = "https://www.youtube.com/iframe_api";
        document.body.appendChild(tag);
      }
    }

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
  }, []);

  const playVideo = (videoId) => {
    setCurrentVideo(videoId);
    if (
      playerRef.current &&
      typeof playerRef.current.loadVideoById === "function"
    ) {
      playerRef.current.loadVideoById(videoId);
    }
  };

  const playAnother = () => {
    let nextVideo = getRandomVideo();
    while (nextVideo === currentVideo && VIDEO_LIST.length > 1) {
      nextVideo = getRandomVideo();
    }
    playVideo(nextVideo);
  };

  return (
    <div className="youtubePlayerWrapper">
      <div className="yt-responsive-container">
        <div id="random-yt-player"></div>
      </div>

      {/* Button Controls */}
      <div className="flex flex-wrap items-center justify-center gap-3">
        <button
          className="spinAgainButton whitespace-nowrap"
          onClick={() => setIsDrawerOpen(true)}
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

      {/* Overlay */}
      {isDrawerOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-opacity"
          onClick={() => setIsDrawerOpen(false)}
        />
      )}

      {/* Centered 50% Width Drawer */}
      <div
        className={`fixed bottom-0 left-1/2 z-50 flex max-h-[70vh] w-[90%] -translate-x-1/2 flex-col rounded-t-2xl border-t border-amber-200/30 bg-neutral-900/95 p-5 text-amber-100 shadow-2xl transition-transform duration-300 ease-out md:w-[50%] ${
          isDrawerOpen ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <div className="mb-4 flex items-center justify-between border-b border-amber-200/20 pb-3">
          <div className="flex items-center gap-2">
            <MdQueueMusic className="text-2xl text-amber-200" />
            <h3 className="font-Itim-Regular text-lg font-semibold tracking-wide text-amber-200">
              Select a Track
            </h3>
          </div>
          <button
            onClick={() => setIsDrawerOpen(false)}
            className="rounded-lg p-1 text-amber-200 hover:bg-white/10"
            aria-label="Close Playlist"
          >
            <MdClose className="text-2xl" />
          </button>
        </div>

        <div className="overflow-y-auto pr-1">
          <ul className="flex flex-col gap-2">
            {VIDEO_LIST.map((video, index) => {
              const isSelected = video.id === currentVideo;
              return (
                <li key={video.id}>
                  <button
                    onClick={() => {
                      playVideo(video.id);
                      setIsDrawerOpen(false);
                    }}
                    className={`flex w-full items-center justify-between rounded-xl px-4 py-3 text-left transition-colors ${
                      isSelected
                        ? "border border-amber-300/40 bg-amber-400/20 font-bold text-amber-200"
                        : "bg-white/5 text-amber-100/80 hover:bg-white/10 hover:text-amber-200"
                    }`}
                  >
                    <span className="text-sm xs:text-base">
                      {index + 1}. {video.title}
                    </span>
                    {isSelected && (
                      <span className="text-xs uppercase tracking-wider text-amber-300">
                        Playing
                      </span>
                    )}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
