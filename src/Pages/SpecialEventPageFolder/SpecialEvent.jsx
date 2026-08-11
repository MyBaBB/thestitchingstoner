import React from "react";
import ReverseButton from "../../Components/ButtonsFolder/ReverseButton/ReverseButton.jsx";
import YouTubePlayer from "../../Components/YouTubeFolder/YouTubePlayer.jsx";
import NotRobot from "../../Components/NotRobotFolder/NotRobot.jsx";
import { Link } from "react-router-dom";
import "./SpecialEvent.css";

export default function SpecialEventPage() {
  return (
    <>
      <div className="min-h-screen w-screen overflow-y-auto overflow-x-hidden">
        <Link to="/localartist">
          <div className="not-robot absolute right-8 top-8 z-50">
            <div className="not-robot-wrapper-SpecialEvent flex flex-col items-center p-4">
              <NotRobot />
              <span className="mt-4 font-Itim-Regular font-bold text-white">
                Hippie Adapter
              </span>
            </div>
          </div>
        </Link>
        <ReverseButton />

        {/* Main psychedelic background section */}
        <div className="specialEventPage">
          <div className="specialEventContent">
            <h1 className="specialEventTitle text-base xs:text-2xl xl:text-3xl">
              <span className="whitespace-nowrap"> 🌈 Hookaville 62 ✌🏼</span>
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
                Hookaville 62
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
            {/* <div className="notrobot-zone w-screen h-fit bg-transparent overflow-y-auto"> */}
          </div>


         <div className="specialEventContent">
                       {/* existing text content */}
              <YouTubePlayer />
         </div>



        </div>

        {/* </div> */}

        {/* Isolated badge section */}
      </div>
      
    </>
  );
}
