import React from "react";
import "./Weed.css";
import weedGif from "../../Images/Weed.gif"; // adjust path as needed

const Weed = () => {
  return (
    <>
      <div className="weed-leaf">
        <img src={weedGif} alt="weed gif" className="object-contain" />
        <div className="pointer-events-none absolute inset-0 bg-black/40"></div>
      </div>
      <div></div>
    </>
  );
};

export default Weed;
