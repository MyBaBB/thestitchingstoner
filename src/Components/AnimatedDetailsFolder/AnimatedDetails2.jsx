// AnimatedDetails.jsx
// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import "./AnimatedDetails2.css"; 
import img11 from "./Zombies600x400.webp";
import img22 from "./Zombies5-600x400.webp";
import img33 from "./Zombies-4600x400.webp";
import img44 from "./Zombies3-600x400.webp";
import img55 from "./Zombies2-600x400.webp";

const IMAGES = [img11, img22, img33, img44, img55];

const AnimatedDetails = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) =>
        prev === null ? 0 : (prev + 1) % IMAGES.length
      );
    }, 15000);   
 
    const initialTimeout = setTimeout(() => setCurrentImageIndex(0), 1000);

    return () => {
      clearInterval(interval);
      clearTimeout(initialTimeout);
    };
  }, []);

  return (
    <div className="trippy-stage2">
      <div className="trippy-card2 flex flex-col items-center text-center font-Itim-Regular leading-relaxed ">

        <div className="image-display-wrapper2">
          {currentImageIndex !== null && (
            <img
              key={currentImageIndex}
              src={IMAGES[currentImageIndex]}
              alt="Trippy Session Preview"
              className="trippy-pop-image2 overflow-visible z-50"
            />
          )}
        </div>

        <p className="stonerLine2 line1 font-semibold" data-text="High‑vibe Stitching for Classes">
          <span className="inline-block whitespace-nowrap z-1">
            <span className="emoji">🧘🏼‍♂️</span> High‑vibe&nbsp;
          </span>
          Stitching <span>Classes <span className="emoji">🧶</span></span>
        </p>

        <p className="stonerLine2 line2 font-semibold" data-text="Psychedelic chill zone">
          <span className="inline-block whitespace-nowrap">
            <span className="emoji">🌈</span> Psychedelic&nbsp;
          </span>
          chill zone{" "}
          <span className="whitespace-nowrap">
            <span className="emoji2 rotate-[45deg]">🌚</span>
          </span>
        </p>

        <p className="stonerLine2 line3 font-semibold" data-text="Tap in — Before Full">
          <span className="inline-block whitespace-nowrap">
            <span className="emoji2 scale-x-[-1] rotate-[-15deg]">🚐</span> Tap in&nbsp;
          </span>
          —{" "}
          <span className="whitespace-nowrap">
            Before Full <span className="emoji">🛖</span>
          </span>
        </p>

        <p className="stonerLine2 line4 font-semibold" data-text="Creative Yarn Sessions">
          <span className="inline-block whitespace-nowrap">
            <span className="emoji2">🧶</span> Creative&nbsp;
          </span>
          <span className="whitespace-nowrap">
            Yarn Sessions <span className="emoji2">🌻</span>
          </span>
        </p>

      </div>
    </div>
  );
};

export default AnimatedDetails;
