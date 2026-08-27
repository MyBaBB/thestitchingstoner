// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import ReverseButton from "../../Components/ButtonsFolder/ReverseButton/ReverseButton.jsx";
import HippieFootprints from "../../Components/HippieFootprintsFolder/HippieFootprints.jsx";
import NotRobot from "../../Components/NotRobotFolder/NotRobot.jsx"; 
import YouTubePlayer from "../../Components/YouTubeFolder/YouTubePlayer.jsx";
import AnimatedDetails from "../../Components/AnimatedDetailsFolder/AnimatedDetails.jsx";
import { Link } from "react-router-dom";
import VanSlideIn from "../../Components/VanSlideInFolder/VanSlideIn.jsx";
import Copyright from "../../Components/CopyrightFolder/Copyright.jsx";
import "./SpecialEvent.css";

export default function SpecialEventPage() {
  const [showRobot, setShowRobot] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowRobot(false);
    }, 14000); //  seconds

    return () => clearTimeout(timer); // Clean up timer on unmount
  }, []);

  return (
    <>
      <div className="special-event-bg-wrapper ">
        <HippieFootprints />
        <div className="three-column-layout">

          {/* LEFT COLUMN */}
          <div className="side-column left-column">
            <div className="absolute top-4 left-4">
              <ReverseButton />
            </div>
            <a href="https://mybabb.com" className="absolute bottom-4 left-4">
              <Copyright />
            </a>
          </div>

          {/* MIDDLE COLUMN */}
          <div className="middle-content">
            <div className="specialEventContent relative flex flex-col items-center">
                <span  className="text-amber-200 mt-4 font-Iceberg-Regular text-2xl xs:text-3xl md:text-4xl  ">
                  ✌🏼 Hookahville 62 🌻
                </span>
              <AnimatedDetails />
              <YouTubePlayer />
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="side-column right-column">
            {showRobot && (
              <Link to="/localartist" className="absolute right-4 bottom-4">
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