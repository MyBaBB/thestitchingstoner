import React, { useEffect, useRef } from "react";
import "./YouTubePlayer.css";
export default function YouTubePlayer() {
  const playerRef = useRef(null);

  useEffect(() => {
    const tag = document.createElement("script");
    tag.src = "https://www.youtube.com/iframe_api";
    document.body.appendChild(tag);

    window.onYouTubeIframeAPIReady = () => {
      playerRef.current = new window.YT.Player("yt-player", {
        height: "360",
        width: "640",
        playerVars: {
          listType: "playlist",
          list: "RDEMjdSeYHieuJpyDgIfyFKW5A",
          autoplay: 0,
          controls: 1,
          modestbranding: 1,
          rel: 0,
        },
      });
    };
  }, []);

  return (
    <div className="youtubePlayerWrapper">
      <div id="yt-player"></div>
    </div>
  );
}
