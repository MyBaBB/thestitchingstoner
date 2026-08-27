// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import ReverseButton from "../../Components/ButtonsFolder/ReverseButton/ReverseButton.jsx";
import HippieFootprints from "../../Components/HippieFootprintsFolder/HippieFootprints.jsx";
 
import AnimatedDetails2 from "../../Components/AnimatedDetailsFolder/AnimatedDetails2.jsx";
 
 
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
            <div className="absolute top-4 left-4">
              <ReverseButton />
            </div>
            <a href="https://mybabb.com" className="absolute bottom-4 left-4">
              <Copyright />
            </a>
             </div>
             
             
               

          {/* MIDDLE COLUMN */}
          <div className="middle-content2">
               

            <div className="specialEvent2Content relative flex flex-col items-center text-white ">
              
              <AnimatedDetails2 />
            </div>
          </div>

      
          <div className="side-column2 right-column2">
         
                  {/*Enter RIGHT COLUMN Stuff*/}
            
       
          </div>

        </div>
        
      </div>
    </>
  );
}