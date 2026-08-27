import React from "react";
import "./VanSlideIn.css";
const VanSlideIn = () => {
  return (
    <div>
      <h1 className="specialEventTitle2 whitespace-nowrap text-center text-xs xs:text-lg md:text-2xl">
        <span className="vanBounce scale-x-[-1]">🚐</span>
        &nbsp;
        <span className="sessionBump">
          <span className="crochetRotate">Yarn</span> Sessions
        </span>
        <span className="yarnWiggle">🧶</span>
      </h1>
    </div>
  );
};

export default VanSlideIn;
