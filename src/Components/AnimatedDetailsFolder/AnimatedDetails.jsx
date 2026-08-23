// AnimatedDetails.jsx
import React, { useState, useEffect } from "react";
import "./AnimatedDetails.css";

const IMAGES = [
  "https://picsum.photos/600/400?random=1",
  "https://picsum.photos/600/400?random=2",
  "https://picsum.photos/600/400?random=3",
  "https://picsum.photos/600/400?random=4"
];

const AnimatedDetails = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(null);

  useEffect(() => {
    // Cycles through each image: 2s visible + 3s text-only pause = 5s total per step
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev === null ? 0 : (prev + 1) % IMAGES.length));
    }, 5000);

    // Initial trigger delay
    const initialTimeout = setTimeout(() => setCurrentImageIndex(0), 1000);

    return () => {
      clearInterval(interval);
      clearTimeout(initialTimeout);
    };
  }, []);

  return (
    <div className="trippy-stage">
      <div className="trippy-card flex flex-col items-center text-center font-Itim-Regular leading-relaxed">
        
        {/* Dynamic Trippy Image Display Area */}
        <div className="image-display-wrapper">
          {currentImageIndex !== null && (
            <img
              key={currentImageIndex}
              src={IMAGES[currentImageIndex]}
              alt="Trippy Session Preview"
              className="trippy-pop-image"
            />
          )}
        </div>

        <p className="stonerLine line1 font-semibold" data-text="High‑vibe Stitching for Classes">
          <span className="inline-block whitespace-nowrap"><span className="emoji">🧘🏼‍♂️</span> High‑vibe&nbsp;</span>
          Stitching <span>Classes <span className="emoji">🧶</span></span>
        </p>

        <p className="stonerLine line2 font-semibold" data-text="Psychedelic chill zone">
          <span className="inline-block whitespace-nowrap"><span className="emoji">🌈</span> Psychedelic&nbsp;</span>
          chill zone <span className="whitespace-nowrap"><span className="emoji rotate-[45deg]">🌚</span></span>
        </p>

        <p className="stonerLine line3 font-semibold" data-text="Tap in — Before Full">
          <span className="inline-block whitespace-nowrap"><span className="emoji scale-x-[-1] rotate-[-15deg]">🚐</span> Tap in&nbsp;</span>
           — <span className="whitespace-nowrap">Before Full <span className="emoji">🛖</span></span>
        </p>

        <p className="stonerLine line4 font-semibold" data-text="Creative Yarn Sessions">
          <span className="inline-block whitespace-nowrap"><span className="emoji">🧶</span> Creative&nbsp;</span>
          <span className="whitespace-nowrap">Yarn Sessions <span className="emoji">🌻</span></span>
        </p>

      </div>
    </div>
  );
};

export default AnimatedDetails;