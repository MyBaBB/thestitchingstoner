import "./Cover.css";
import { useState, useEffect } from "react";

import MermaidOgImage from "../../Images/The_Stitching_Stoner/A8-01-FB-puppets.webp";
import Weed from "../../Components/WeedFolder/Weed.jsx";
import ContactMe from "../../Components/ContactMeFolder/ContactMe.jsx";
import ReverseButton from "../../Components/ReverseButton/ReverseButton.jsx";

import { GiYarn } from "react-icons/gi";
import { PiPersonSimpleHike } from "react-icons/pi";
import { SlDirection } from "react-icons/sl";
import { PiQuotesThin } from "react-icons/pi";
import HippieFootprints from "../../Components/HippieFootprintsFolder/HippieFootprints.jsx";
export default function LandingPage() {
  // ROTATING DREAMY TEXT
  const messages = [
    "Handcrafted Crochet for Elevated Minds",
    "Hook up your Hook at Hookaville 62",
    "Dreamy Crochet Lessons Available ",
  ];

  const [index, setIndex] = useState(0);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      // Start exit animation (up-right)
      setExiting(true);

      setTimeout(() => {
        // Switch to next paragraph
        setIndex((prev) => (prev + 1) % messages.length);

        // Reset to entry animation (centered)
        setExiting(false);
      }, 5000); // EXIT DURATION — change this to pause longer
    }, 16000); // FULL CYCLE — do NOT change

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative">
      <main className="relative h-screen bg-black text-neutral-100 overflow-visible">

  <HippieFootprints />   {/* ← ADD THIS */}

  <ReverseButton />
  <Weed />

      <div className="relative z-10 flex h-fit flex-col items-start justify-center
                      text-center">

          {/* TITLE */}
          <h1 className="z-20 overflow-visible -mb-2 font-EmilysCandy-Regular
                         bg-clip-text  text-4xl md:text-6xl m-auto">
            <span
              className="stoner-cipher p-[.6rem]"
              data-text="The Stitching Stoner"
            >
              The Stitching Stoner
            </span>
          </h1>

          {/* SMOKE-DISSOLVE TAGLINE */}
          <p className="dreamyLanding mb-4 mt-0 m-auto max-w-md font-Itim-Regular text-lg md:text-2xl">
            <span
              className={`smokeText ${exiting ? "exitUpRight" : "enterCenter"}`}
            >
              {messages[index]}
            </span>
          </p>

          {/* FEATURED IMAGE */}
         {/* FEATURED IMAGE */}
<div className="mermaidImageWrapper mt-0 m-auto">
  <img
    src={MermaidOgImage}
    alt="Featured embroidered stoner art"
    className="mermaidFeaturedImage m-auto"
  />
</div>


          <p className="mt-4 m-auto max-w-lg font-Itim-Regular text-sm text-[#baf9ba] md:text-xl">
            <span className="inline-block whitespace-nowrap">
              <span className="inline-block scale-x-[-1]">
                <PiQuotesThin />
              </span>
              &nbsp;Peace, Creativity, and Connection
            </span>
            <br className="inline-block sm:hidden" />
            <span className="inline-block whitespace-nowrap">
              &nbsp;all Woven Together&nbsp;
              <span className="inline-block">
                <PiQuotesThin />
              </span>
            </span>
          </p>

          {/* CTA BUTTON */}
          <div className="flex h-[3rem] w-fit m-auto flex-row items-center justify-center ">
            <a
              href="https://thestitchingstoner.square.site"
              target="_blank"
              rel="noopener noreferrer"
              className="buttonWrapper mt-8 inline-block px-4 py-2"
            >
              <div className="flex items-center justify-center gap-4 px-1">
                <span className="inline-block text-[#eece6c]">
                  <PiPersonSimpleHike size={22} />
                </span>

                <span className="inline-block font-Itim-Regular text-xl text-[#eece6c]">
                  <SlDirection size={18} />
                </span>

                <span className="inline-block scale-x-[-1] text-[#eece6c]">
                  <GiYarn size={20} />
                </span>
              </div>
            </a>
          </div>
        </div>
      </main>

      <div className="absolute bottom-8 right-4">
        <ContactMe />
      </div>
    </div>
  );
}
