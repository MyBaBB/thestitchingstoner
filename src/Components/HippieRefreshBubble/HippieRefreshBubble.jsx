import React, { useState } from "react";
import "./HippieRefreshBubble.css";
import { GiPineTree } from "react-icons/gi";
const HippieRefreshBubble = () => {
  const params = new URLSearchParams(window.location.search);
  const clean = params.get("clean");

  if (clean) return null;

  const [showBubble, setShowBubble] = useState(true);
  const [bubbleExit, setBubbleExit] = useState(false);
  const [showRefreshMessage, setShowRefreshMessage] = useState(false);

  const handleRefresh = () => {
    setBubbleExit(true);

    setTimeout(() => {
      setShowBubble(false);
      setShowRefreshMessage(true);

      setTimeout(() => {
        const cleanUrl =
          window.location.origin +
          window.location.pathname +
          "?clean=true";

        window.open(cleanUrl, "_blank");
        setShowRefreshMessage(false);
      }, 3000);
    }, 800);
  };

  return (
    <>
      {showBubble && (
        <div className={`hippie-bubble ${bubbleExit ? "puff-away" : ""}`}>
          <p>Still weaving this page…</p>

          <div className="revibe-row">

             {/* Animated pointer */}
            {!bubbleExit && (
              <div className="pointer-anim  ">
              👉🏼</div>
            )}
            <button className="hippie-refresh-btn" onClick={handleRefresh}>
              Re‑vibe
            </button>

            {!bubbleExit && (
              <div className="pointer  ">
              🌻</div>
            )}
           
          </div>
        </div>
      )}

       {showRefreshMessage && (
        <div className="hippie-fade-msg ">
             <p>
             <span className="pineTreeIcon inline-block ">
                   <GiPineTree /> 
             </span>  
                ...Harmonizing... 
             <span className="pineTreeIcon inline-block ">
                   <GiPineTree /> 
             </span>
             </p>
        </div>
      )}
    </>
  );
};

export default HippieRefreshBubble;
