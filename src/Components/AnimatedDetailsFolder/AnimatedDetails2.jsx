// AnimatedDetails.jsx
// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import "./AnimatedDetails2.css";
import img11 from "./Zombies600x400.webp";
import img22 from "./Zombies5-600x400.webp";
import img33 from "./Zombies-4600x400.webp";
import img44 from "./Zombies3-600x400.webp";
import img55 from "./Zombies2-600x400.webp";
import VanSlideIn2 from "../../Components/VanSlideInFolder/VanSlideIn2.jsx";
const IMAGES = [img11, img22, img33, img44, img55];

const AnimatedDetails = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) =>
        prev === null ? 0 : (prev + 1) % IMAGES.length,
      );
    }, 15000);

    const initialTimeout = setTimeout(() => setCurrentImageIndex(0), 1000);

    return () => {
      clearInterval(interval);
      clearTimeout(initialTimeout);
    };
  }, []);

  return (
    <>
      <div className="trippy-stage2">
        <div className="trippy-card2 flex flex-col items-center text-center font-Itim-Regular leading-relaxed">
          <div className="image-display-wrapper2">
            {currentImageIndex !== null && (
              <img
                key={currentImageIndex}
                src={IMAGES[currentImageIndex]}
                alt="Trippy Session Preview"
                className="trippy-pop-image2 z-50 overflow-visible"
              />
            )}
          </div>

          <a
            href="https://thestitchingstoner.square.site/product/crochet-101-the-basics/FR5XDEGDJ3HEPOUPPTVS2BNP"
            className="hover:scale-105 hover:opacity-90"
          >
            <VanSlideIn2 />
          </a>

          <div className="stonerText border-4 border-blue-500">
            <p
              className="stonerLine2 line11"
              data-text="High‑vibe Stitching for Classes"
            >
              <span className="z-1 inline-block whitespace-nowrap">
                <span className="emoji">🧘🏼‍♂️</span> &nbsp;
              </span>
              Stitching 
              <span className="whitespace-nowrap">
                Classes <span className="emoji">🧶</span>
              </span>
            </p>
            <br />
            <p
              className="stonerLine2 line22"
              data-text="Psychedelic chill zone"
            >
              <span className="inline-block whitespace-nowrap">
                <span className="emoji">✌🏼</span> Psychedelic&nbsp;
              </span>

              <span className="whitespace-nowrap">
             
                chill zone
                <span className="emoji2 ">&nbsp;🌚</span>
              </span>
            </p>
            <br />
            <p className="stonerLine2 line33" data-text="Tap in — Before Full">
              <span className="inline-block whitespace-nowrap">
                <span className="emoji2  ">🪷</span> 
                Tap in&nbsp;
              </span>
              —
              <span className="whitespace-nowrap">
                Before Full <span className="emoji2">🛖</span>
              </span>
            </p>
            <br />
            <p
              className="stonerLine2 line44"
              data-text="Creative Yarn Sessions"
            >
              <span className="inline-block whitespace-nowrap">
                <span className="emoji2">🧶</span> Get&nbsp;
              </span>
              <span className="whitespace-nowrap">
                Hooked Up <span className="emoji2">🌻</span>
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AnimatedDetails;
