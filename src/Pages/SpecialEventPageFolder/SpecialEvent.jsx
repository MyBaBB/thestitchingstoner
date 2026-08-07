import React from "react";
import ReverseButton from "../../Components/ButtonsFolder/ReverseButton/ReverseButton.jsx";
import SimpleSpeaker from "../../Components/BackgroundMusicFolder/BackgroundMusic.jsx";
import NotRobot from "../../Components/NotRobotFolder/NotRobot.jsx";
import { Link } from "react-router-dom";
import "./SpecialEvent.css";

export default function SpecialEventPage() {
  return (
    <>
      <div className="w-screen min-h-screen overflow-x-hidden overflow-y-auto">
       <Link to="/localartist">
          <div className="not-robot absolute z-50 top-8 right-8">
          
            <div className="not-robot-wrapper-SpecialEvent p-4 flex flex-col items-center">
              <NotRobot />
              <span className="text-white font-bold font-Itim-Regular mt-4">
                No Zone
              </span>
            </div>
          </div>
        </Link>
        <ReverseButton />

       

        {/* Main psychedelic background section */}
        <div className="specialEventPage">
          <div className="specialEventContent">
            <h1 className="specialEventTitle text-base xs:text-2xl xl:text-3xl ">
              <span className="whitespace-nowrap"> 🌈 Hookaville 62 ✌🏼</span>
              <br /> 
              <span className="whitespace-nowrap">
                🚐 Special Crochet Classes 🧶
              </span>
            </h1>

            <p className="specialEventParagraph">
              The Stitching Stoner is hosting a limited‑seat crochet experience at
              <span className="text-green-400 text-bold font-Itim-Regular"> Hookaville 62</span> — a dreamy,
              psychedelic, high‑vibe workshop where beginners and experts can
              stitch, chill, and connect.
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
          </div>
          
        {/* </div> */}

        {/* Isolated badge section */}
      

      </div>
         <span className="z-50 absolute bottom-8 left-4 hidden sm:block">
          <SimpleSpeaker />
        </span>
    </>
  );
}
