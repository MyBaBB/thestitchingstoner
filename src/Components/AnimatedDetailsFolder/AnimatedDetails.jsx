// AnimatedDetails.jsx
import React from "react";
import "./AnimatedDetails.css";

const AnimatedDetails = () => {
  return (
    <div className="trippy-stage">
      <div className="trippy-card flex flex-col items-center text-center font-Itim-Regular leading-relaxed">
        
        <p 
          className="stonerLine line1 font-semibold" 
          data-text="✌🏼 High‑vibe stitching for creative souls 🧵"
        >
          <span className="inline-block whitespace-nowrap"><span className="emoji">🧘🏼‍♂️</span> High‑vibe&nbsp;</span>
          <span className="whitespace-nowrap">Stitching for Classes <span className="emoji">🧶</span></span>
        </p>

        <p 
          className="stonerLine line2 font-semibold" 
          data-text="🌙 Psychedelic chill zone awaits 🌈"
        >
          <span className="inline-block whitespace-nowrap"><span className="emoji">🌈</span>Psychedelic&nbsp;</span>
          chill zone <span className="whitespace-nowrap"><span className="emoji rotate-[45deg]">🌚</span></span>
        </p>

        <p 
          className="stonerLine line3 font-semibold" 
          data-text="🔥 Limited seats — tap in ⚡️"
        >
          <span className="inline-block whitespace-nowrap"><span className="emoji scale-x-[-1] rotate-[-15deg]">🚐</span> Tap in&nbsp;</span>
           — <span className="whitespace-nowrap">Before Full <span className="emoji">🛖</span></span>
        </p>

        <p 
          className="stonerLine line4 font-semibold" 
          data-text="🌼 Creative session begins soon ✨"
        >
          <span className="inline-block whitespace-nowrap"><span className="emoji">🧶</span> Creative&nbsp;</span>
          <span className="whitespace-nowrap">Yarn Sessions <span className="emoji ">🌻</span></span>
        </p>

      </div>
    </div>
  );
};

export default AnimatedDetails;