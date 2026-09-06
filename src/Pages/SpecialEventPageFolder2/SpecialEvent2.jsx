// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import ReverseButton from "../../Components/ButtonsFolder/ReverseButton/ReverseButton.jsx";
import HippieFootprints from "../../Components/HippieFootprintsFolder/HippieFootprints.jsx";
import { Link } from "react-router-dom";
import AnimatedDetails2 from "../../Components/AnimatedDetailsFolder/AnimatedDetails2.jsx";
import StonerLogo from "../../Images/300x300-r.webp";
import Copyright from "../../Components/CopyrightFolder/Copyright.jsx";
import Banner2 from "../../Images/1207px1212banner.webp";

import "./SpecialEvent2.css";

export default function SpecialEvent2() {
  return (
    <> 
      <div
        className="special-event2-bg-wrapper"
        style={{
          backgroundImage: `url(${Banner2})`,
          backgroundSize: "cover",
          backgroundPosition: "center -1.75rem",
          backgroundRepeat: "no-repeat",
        }}
      >
        <HippieFootprints />
        <div className="three-column-layout2">
          {/* LEFT COLUMN */}
          <div className="side-column2 left-column2">
            <div className="absolute left-4 top-4 z-20">
              <ReverseButton />
            </div>
            <a href="https://mybabb.com" className="absolute bottom-4 left-4 z-20">
              <Copyright />
            </a>
          </div>

          {/* MIDDLE COLUMN */}
          <div className="middle-content2">
            <div className="specialEvent2Content w-full flex flex-col items-center text-white">
              <AnimatedDetails2 />
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="side-column2 right-column2">
            <Link to="/coverpage" className="absolute top-4 right-4 z-20">
              <img 
                src={StonerLogo} 
                alt="Stoner Logo" 
                className="h-[120px] w-[120px] object-contain" 
              />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}