// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import ReverseButton from "../../Components/ButtonsFolder/ReverseButton/ReverseButton.jsx";
import HippieFootprints from "../../Components/HippieFootprintsFolder/HippieFootprints.jsx";
import { Link } from "react-router-dom";
import AnimatedDetails2 from "../../Components/AnimatedDetailsFolder/AnimatedDetails2.jsx";
import StonerLogo from "../../Images/300x300-r.webp";
import Copyright from "../../Components/CopyrightFolder/Copyright.jsx";
import Banner3 from "../../Images/goodPeople-goodTimes.webp";

import "./SpecialEvent3.css";

export default function SpecialEvent3() {
  return (
    <>
    
     <div className="special-event3-bg-wrapper relative">
  <div className="bg-layer3" style={{ backgroundImage: `url(${Banner3})` }} />
  <div className="bg-overlay3" />

  {/* ALL your content stays bright */}
  <HippieFootprints />
  <div className="three-column-layout3 relative z-10">
          {/* LEFT COLUMN */}
          <div className="side-column3 left-column3">
            <div className="absolute left-4 top-4 z-20">
              <ReverseButton />
            </div>
            <a href="https://mybabb.com" className="absolute bottom-4 left-4 z-20">
              <Copyright />
            </a>
          </div>

          {/* MIDDLE COLUMN */}
          <div className="middle-content3">
            <div className="specialEvent3Content w-full flex flex-col items-center text-white">
              <AnimatedDetails2 />
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="side-column3 right-column3">
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