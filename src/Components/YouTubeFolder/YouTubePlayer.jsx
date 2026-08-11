import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function RandomYouTubePlayer() {
  const playerRef = useRef(null);
  const navigate = useNavigate();

  // Your YouTube video IDs
  const videoList = [
       "kH5oJYh6f8w",    //Hookaville
       "5xOZ43vdEUI",    //Roll the Dice
       "QwzT17V82UU",    //Music 
       "S2_u5-Nt6Tg",    //Springtime Again
       "l668SIWPZBo",    //Octofrye
       "nhDHQQfrZug",    //Dragonfly
       "OLCa-mS0SCY",    //Smile and Sing
       "3YQtEKiI124",    //Ecstasy
       "e9ZtQsviCz0",    //Raging River
       "r-zV_rUGku0",    //Mississippi Steamboat
       "79pyb_83FrY",    //Another Good Man Gone
       "y7hHyFk6xgk",    //Schwa 
       "im0vrCjzCTQ",    //BackwoodsRose
       "nhDHQQfrZug",    //Ohio Grown
       "2z9aDUK7QFI",    //Loner
     
  ];

  // State so we can change videos
  const [currentVideo, setCurrentVideo] = useState(
    videoList[Math.floor(Math.random() * videoList.length)]
  );

  // Load YouTube API
  useEffect(() => {
    const tag = document.createElement("script");
    tag.src = "https://www.youtube.com/iframe_api";
    document.body.appendChild(tag);

    window.onYouTubeIframeAPIReady = () => {
      playerRef.current = new window.YT.Player("random-yt-player", {
        height: "360",
        width: "640",
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

  // When currentVideo changes, load new video
  useEffect(() => {
    if (playerRef.current) {
      playerRef.current.loadVideoById(currentVideo);
    }
  }, [currentVideo]);

  // Pick a new random song
  const playAnother = () => {
    const next = videoList[Math.floor(Math.random() * videoList.length)];
    setCurrentVideo(next);
  };

  return (
    <div className="youtubePlayerWrapper">
      <div id="random-yt-player"></div>

      {/* NEXT SONG BUTTON */}
      <button
        onClick={playAnother}
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          background: "rgba(0, 0, 0, 0.5)",
          borderRadius: "8px",
          fontSize: "18px",
          color: "orange",
          cursor: "pointer",
          fontFamily: "Comic Sans MS, Chalkboard SE, sans-serif",
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
        }}
      >
        🚐 Spin Again 🎵
      </button>
    </div>
  );
}
