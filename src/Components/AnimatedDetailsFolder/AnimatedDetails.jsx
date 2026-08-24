// AnimatedDetails.jsx
import React, { useState, useEffect } from "react";
import "./AnimatedDetails.css"; 
import img1 from "./Zombies600x400.webp";
import img2 from "./Zombies5-600x400.webp";
import img3 from "./Zombies-4600x400.webp";
import img4 from "./Zombies3-600x400.webp";
import img5 from "./Zombies2-600x400.webp";

const IMAGES = [img1, img2, img3, img4, img5];

const AnimatedDetails = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) =>
        prev === null ? 0 : (prev + 1) % IMAGES.length
      );
    }, 5000);

    const initialTimeout = setTimeout(() => setCurrentImageIndex(0), 1000);

    return () => {
      clearInterval(interval);
      clearTimeout(initialTimeout);
    };
  }, []);

  return (
    <div className="trippy-stage">
      <div className="trippy-card flex flex-col items-center text-center font-Itim-Regular leading-relaxed ">

        <div className="image-display-wrapper">
          {currentImageIndex !== null && (
            <img
              key={currentImageIndex}
              src={IMAGES[currentImageIndex]}
              alt="Trippy Session Preview"
              className="trippy-pop-image overflow-visible z-50"
            />
          )}
        </div>

        <p className="stonerLine line1 font-semibold" data-text="High‑vibe Stitching for Classes">
          <span className="inline-block whitespace-nowrap z-1">
            <span className="emoji">🧘🏼‍♂️</span> High‑vibe&nbsp;
          </span>
          Stitching <span>Classes <span className="emoji">🧶</span></span>
        </p>

        <p className="stonerLine line2 font-semibold" data-text="Psychedelic chill zone">
          <span className="inline-block whitespace-nowrap">
            <span className="emoji">🌈</span> Psychedelic&nbsp;
          </span>
          chill zone{" "}
          <span className="whitespace-nowrap">
            <span className="emoji rotate-[45deg]">🌚</span>
          </span>
        </p>

        <p className="stonerLine line3 font-semibold" data-text="Tap in — Before Full">
          <span className="inline-block whitespace-nowrap">
            <span className="emoji scale-x-[-1] rotate-[-15deg]">🚐</span> Tap in&nbsp;
          </span>
          —{" "}
          <span className="whitespace-nowrap">
            Before Full <span className="emoji">🛖</span>
          </span>
        </p>

        <p className="stonerLine line4 font-semibold" data-text="Creative Yarn Sessions">
          <span className="inline-block whitespace-nowrap">
            <span className="emoji">🧶</span> Creative&nbsp;
          </span>
          <span className="whitespace-nowrap">
            Yarn Sessions <span className="emoji">🌻</span>
          </span>
        </p>

      </div>
    </div>
  );
};

export default AnimatedDetails;
