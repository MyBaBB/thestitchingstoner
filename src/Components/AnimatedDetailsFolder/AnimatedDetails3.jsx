// AnimatedDetails.jsx
// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import "./AnimatedDetails2.css";
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";
import img11 from "./Zombies600x400.webp";
import img22 from "./Zombies5-600x400.webp";
import img33 from "./Zombies-4600x400.webp";
import img44 from "./Zombies3-600x400.webp";
import img55 from "./Zombies2-600x400.webp";
import { LiaHandPeace } from "react-icons/lia";
import { GiSurferVan } from "react-icons/gi";
const IMAGES = [img11, img22, img33, img44, img55];

// Reusable quote wrappers with custom class name for CSS styling
const QuoteLeft = () => (
  <span className="react-Icon-Span inline-block">
    <RiDoubleQuotesL />
  </span>
);

const QuoteRight = () => (
  <span className="react-Icon-Span inline-block ">
    <RiDoubleQuotesR />
  </span>
);

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

          {/* Groovy Hippie Event Status Badge */}
          <div className="event-over-badge my-4 transform rounded-full border-2 border-dashed border-[#2e5a2c] bg-black px-6 py-2 shadow-[0_0_15px_rgba(185,245,6,0.4)] transition-all hover:scale-105">
            <span className="bg-gradient-to-r from-[#ffea00] to-[#00f3ff] bg-clip-text text-xl font-bold tracking-wider text-transparent">
                 <span className="text-[#f5f0ba] inline-block">
                 <LiaHandPeace />
               </span>
                &nbsp;- Onward to the next groove.-&nbsp;
               <span className="text-[#f5f0ba] inline-block">
                 <GiSurferVan />
               </span>
            </span>
          </div>

          <div className="stonerText fancyDarkOuter">
            {/* Line 1 */}
            <p
              className="stonerLine2 line11"
              data-text="Good People Good Times was a freaking blast!"
            >
              <span className="inline-block whitespace-nowrap">
                <QuoteLeft /> Good People Good Times&nbsp;
              </span>
              <span className="whitespace-nowrap">
                was a freaking blast! <QuoteRight />
              </span>
            </p>
            <br />

            {/* Line 2 */}
            <p
              className="stonerLine2 line22"
              data-text="What a great time, venue, event & group!"
            >
              <span className="inline-block whitespace-nowrap">
                <QuoteLeft /> What a great time,&nbsp;
              </span>
              <span className="whitespace-nowrap">
                venue, event & group! <QuoteRight />
              </span>
            </p>
            <br />

            {/* Line 3 */}
            <p
              className="stonerLine2 line33"
              data-text="This festival really took care of everyone!"
            >
              <span className="inline-block whitespace-nowrap">
                <QuoteLeft /> This festival really&nbsp;
              </span>
              <span className="whitespace-nowrap">
                took care of everyone! <QuoteRight />
              </span>
            </p>
            <br />

            {/* Line 4 */}
            <p
              className="stonerLine2 line44"
              data-text="Seriously blown away — can't wait for the next!"
            >
              <span className="inline-block whitespace-nowrap">
                <QuoteLeft /> Seriously blown away&nbsp;
              </span>
              <span className="whitespace-nowrap">
                — can`t wait for the next! <QuoteRight />
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AnimatedDetails;