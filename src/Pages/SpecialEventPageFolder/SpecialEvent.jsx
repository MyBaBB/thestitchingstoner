import React from "react";
import ReverseButton from "../../Components/ButtonsFolder/ReverseButton/ReverseButton.jsx";
import HippieFootprints from "../../Components/HippieFootprintsFolder/HippieFootprints.jsx";
import NotRobot from "../../Components/NotRobotFolder/NotRobot.jsx";
import { Link } from "react-router-dom";
import YouTubePlayer from "../../Components/YouTubeFolder/YouTubePlayer.jsx";
import "./SpecialEvent.css";

export default function SpecialEventPage() {
  return (
    <>
      <div className="min-h-screen w-full overflow-y-auto overflow-x-hidden">
        <ReverseButton />

        {/* Main psychedelic background section */}
        <div className="specialEventPage">
          <div className="specialEventContent relative flex flex-col items-center">
            <h1 className="specialEventTitle">
              <span className="whitespace-nowrap"> 🌈 Hookahville 62 ✌🏼</span>
              <br />
              <span className="whitespace-nowrap">
                🚐 Special Crochet Classes 🧶
              </span>
            </h1>

            <p className="specialEventParagraph">
              The Stitching Stoner is hosting a limited‑seat crochet experience
              at
              <span className="text-bold font-Itim-Regular text-green-400">
                {" "}
                Hookahville 62
              </span>{" "}
              — a dreamy, psychedelic, high‑vibe workshop where beginners and
              experts can stitch, chill, and connect.
              <br />
              <br />
              Seats fill fast, so make sure to{" "}
              <a
                className="specialEventLink"
                href="https://thestitchingstoner.square.site/#bottom"
              >
                <span className="highlight2">Contact Me</span>
              </a>
              and reserve your spot before the festival rush rolls in.
              <br />
              <br />
              Peace, creativity, and connection — all woven together. 🧶✨
            </p>

            {/* YOUTUBE PLAYER */}
            <YouTubePlayer />
          </div>
        </div>
        <div className="specialEventFooter">
          <div className="footer-left">
            <HippieFootprints />
          </div>

          <Link to="/localartist">
            <div className="footer-right flex flex-col">
              <NotRobot />
              <span className="footer-label">Hippie Adapter</span>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
