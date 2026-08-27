// AnimatedDetails.jsx
import React, { useState, useEffect } from "react";
import "./AnimatedDetails.css";
import img1 from "./Zombies600x400.webp";
import img2 from "./Zombies5-600x400.webp";
import img3 from "./Zombies-4600x400.webp";
import img4 from "./Zombies3-600x400.webp";
import img5 from "./Zombies2-600x400.webp";
import VanSlideIn2 from "../../Components/VanSlideInFolder/VanSlideIn2.jsx";
const IMAGES = [img1, img2, img3, img4, img5];

const AnimatedDetails = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) =>
        prev === null ? 0 : (prev + 1) % IMAGES.length,
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
      <div className="trippy-card after: flex flex-col items-center text-center font-Itim-Regular leading-relaxed">
        <div className="image-display-wrapper">
          {currentImageIndex !== null && (
            <img
              key={currentImageIndex}
              src={IMAGES[currentImageIndex]}
              alt="Trippy Session Preview"
              className="trippy-pop-image overflow-visible"
            />
          )}
        </div>

        <a
          href="https://thestitchingstoner.square.site/product/crochet-101-the-basics/FR5XDEGDJ3HEPOUPPTVS2BNP"
          className="hover:scale-105 hover:opacity-90"
        >
          <div className="vanSlideInInstaller0">
            <VanSlideIn2 />
          </div>
        </a>

        <div className="stonerText border-4 border-blue-500">
          <p
            className="stonerLine line11"
            data-text="High‑vibe Stitching for Classes"
          >
            <span className="z-1 inline-block whitespace-nowrap">
              <span className="emoji">🧘🏼‍♂️</span> &nbsp;
            </span>
            Stitching{" "}
            <span className="whitespace-nowrap">
              Classes <span className="emoji">🧶</span>
            </span>
          </p>
          <br />
          <p className="stonerLine line2" data-text="Psychedelic chill zone">
            <span className="inline-block whitespace-nowrap">
              <span className="emoji">🌈</span> Psychedelic&nbsp;
            </span>

            <span className="whitespace-nowrap">
              {" "}
              chill zone
              <span className="emoji rotate-[45deg]">&nbsp;🌚</span>
            </span>
          </p>
          <br />
          <p className="stonerLine line3" data-text="Tap in — Before Full">
            <span className="inline-block whitespace-nowrap">
              <span className="emoji rotate-[-15deg] scale-x-[-1]">🚐</span> Tap
              in&nbsp;
            </span>
            —{" "}
            <span className="whitespace-nowrap">
              Before Full <span className="emoji">🛖</span>
            </span>
          </p>
          <br />
          <p className="stonerLine line4" data-text="Creative Yarn Sessions">
            <span className="inline-block whitespace-nowrap">
              <span className="emoji">🧶</span> Get&nbsp;
            </span>
            <span className="whitespace-nowrap">
              Hooked Up <span className="emoji">🌻</span>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AnimatedDetails;
