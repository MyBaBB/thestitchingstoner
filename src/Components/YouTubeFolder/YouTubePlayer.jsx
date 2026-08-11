import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { GiHemp } from "react-icons/gi";
import { MdOutlineForest } from "react-icons/md";
import "./YouTubePlayer.css";

export default function RandomYouTubePlayer() {
  const playerRef = useRef(null);
  const navigate = useNavigate();

  const videoList = [
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
    "nhDHQQfrZug",
    "2z9aDUK7QFI",
  ];

  const [currentVideo, setCurrentVideo] = useState(
    videoList[Math.floor(Math.random() * videoList.length)],
  );

  // Load YouTube API
  useEffect(() => {
    if (!window.YT) {
      const tag = document.createElement("script");
      tag.src = "https://www.youtube.com/iframe_api";
      document.body.appendChild(tag);
    }

    window.onYouTubeIframeAPIReady = () => {
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
              navigate("/specialevent");
            }
          },
        },
      });
    };
  }, []);

  // Change video
  useEffect(() => {
    if (playerRef.current) {
      playerRef.current.loadVideoById(currentVideo);
    }
  }, [currentVideo]);

  const playAnother = () => {
    const next = videoList[Math.floor(Math.random() * videoList.length)];
    setCurrentVideo(next);
  };

  return (
    <div className="youtubePlayerWrapper">
      {/* Responsive YouTube container */}
      <div className="yt-responsive-container">
        <div id="random-yt-player"></div>
      </div>

      {/* NEXT SONG BUTTON */}
      <button className="spinAgainButton" onClick={playAnother}>
        <span className="inline-block text-xl text-amber-200">
          <MdOutlineForest />
        </span>
        <span className="inline-block text-amber-200">
          &nbsp;&nbsp;Spin Again&nbsp;&nbsp;
        </span>
        <span className="inline-block text-xl text-amber-200">
          <GiHemp />
        </span>
      </button>
    </div>
  );
}
