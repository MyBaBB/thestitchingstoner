// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import ReverseButton from "../../Components/ButtonsFolder/ReverseButton/ReverseButton.jsx";
import HippieFootprints from "../../Components/HippieFootprintsFolder/HippieFootprints.jsx";
import NotRobot from "../../Components/NotRobotFolder/NotRobot.jsx";
import YouTubePlayer from "../../Components/YouTubeFolder/YouTubePlayer.jsx";
import AnimatedDetails from "../../Components/AnimatedDetailsFolder/AnimatedDetails.jsx";
import { Link } from "react-router-dom";
import HookahCamp from "./hookahville-Camp-600x400.webp";
import HookahConcert from "./hookahville-600x400.webp";
import Copyright from "../../Components/CopyrightFolder/Copyright.jsx";
import StonerLogo from "../../Images/Logo300x300-2.webp";
import "./SpecialEvent.css";

export default function SpecialEventPage() {
  const [showRobot, setShowRobot] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowRobot(false);
    }, 14000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className="special-event-bg-wrapper">
        <HippieFootprints />
        <div className="three-column-layout">
          
          {/* LEFT COLUMN */}
          <div className="side-column left-column">
            <div className="absolute left-4 top-4 z-10">
              <ReverseButton />
            </div>

            <img
              src={HookahConcert}
              alt="Left Placeholder"
              className="side-column-img"
            />

            <a href="https://mybabb.com" className="absolute bottom-4 left-4 z-10">
              <Copyright />
            </a>
          </div>

          {/* MIDDLE COLUMN */}
          <div className="middle-content">
            <div className="specialEventContent relative flex flex-col items-center">
              <span className="mt-4 font-MetalMania-Regular text-2xl text-green-400 xs:text-3xl md:text-4xl whitespace-nowrap">
                ✌🏼 Hookahville 62 🛖
              </span>
              <AnimatedDetails />
              <YouTubePlayer />
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="side-column right-column">
               <Link to="/coverpage" className="absolute top-4 right-4 z-10" >
                <img src={StonerLogo}
                 alt="" className="h-[120px] w-[120px] " />
               </Link>

            <img
              src={HookahCamp}
              alt="Right Placeholder"
              className="side-column-img"
            />

            {showRobot && (
              <Link to="/localartist" className="absolute bottom-4 right-4 z-10">
                <div
                  className="footer-right_Tooltip"
                  data-tool-tip=" 🌈 This Website Chooses Real Art 🎨 "
                >
                  <NotRobot />
                </div>
              </Link>
            )}
          </div>

        </div>
      </div>
    </>
  );
}