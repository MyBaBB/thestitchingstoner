import "./Cover.css";
import { useState, useEffect } from "react";
import MermaidOgImage from "../../Images/8-05-FB_National_Forest-3.webp";
import Weed from "../../Components/WeedFolder/Weed.jsx";
import ContactMe from "../../Components/ContactMeFolder/ContactMe.jsx";
import ReverseButton from "../../Components/ReverseButton/ReverseButton.jsx";
import { PiQuotesThin } from "react-icons/pi";
import HippieFootprints from "../../Components/HippieFootprintsFolder/HippieFootprints.jsx";
import HippieRefreshBubble from "../../Components/HippieRefreshBubble/HippieRefreshBubble.jsx";
import NationalForestButton from "../../Components/NationalForestButton/NationalForestButton..jsx";
import FacebookForestButton from "../../Components/NationalForestButton/FaceBookForestButton.jsx";
import InstagramForestButton from "../../Components/NationalForestButton/InstagramForestButton.jsx";
import StonerLogo from "../../Images/Logo300x300-2.webp";

export default function LandingPage() {
  // ROTATING DREAMY TEXT
  const messages = [
    "🍄 Handmade Crochet for Elevated Minds 🧵",
    "🧶 Hook up your Hook at Hookaville 62 🌻",
    "💃🏻 Dreamy Crochet Lessons Available 💭 ",
    "✌🏼 Sign up for Hookaville Lessons! 🚌",
    "🌈 Perfect for Beginners through Experts 🧶  ",
  ];
  const rainbowColors = [
    "#FF0000", // red
    "#FF7F00", // orange
    "#FFFF00", // yellow
    "#00FF00", // green
    "skyblue", // blue
    "#4B0082", // indigo
    "#9400D3", // green
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
    <div className="relative mb-[22rem] flex h-screen items-center justify-center bg-black">
      <span className="reverseButtonInstaller absolute left-4 top-4">
        <ReverseButton />
      </span>

      <main className="relative h-screen overflow-visible bg-black text-neutral-100">
        <HippieFootprints /> {/* ← ADD THIS */}

        <Weed />

        
        <div className="relative z-10 flex h-fit flex-col items-start justify-center text-center">
          {/* TITLE */}
          <h1 className="z-20 m-auto -mb-2 overflow-visible bg-clip-text font-EmilysCandy-Regular text-4xl md:text-6xl">
            <span
              className="stoner-cipher p-[.6rem]"
              data-text="The Stitching Stoner"
            >
              The Stitching Stoner
            </span>
          </h1>

          {/* SMOKE-DISSOLVE TAGLINE */}
          <p className="dreamyLanding m-auto mb-4 mt-0 max-w-md whitespace-nowrap font-Itim-Regular text-xs xs:text-xl md:text-2xl">
            <span
              className={`smokeText ${exiting ? "exitUpRight" : "enterCenter"}`}
              style={{ color: rainbowColors[index % rainbowColors.length] }}
            >
              {messages[index]}
            </span>
          </p>

          {/* FEATURED IMAGE */}
          {/* FEATURED IMAGE */}
          <div className="mermaidImageWrapper m-auto mt-0">
            <div id="image  " className="relative">
              <HippieRefreshBubble />
              {/* your image here */}
            </div>

            <img
              src={MermaidOgImage}
              alt="Featured embroidered stoner art"
              className="mermaidFeaturedImage m-auto"
            />
            {/* <span className="absolute top-[7.95rem] left-[.5rem]"> */}
            
            <a href="https://thestitchingstoner.square.site/the-stitching-who">
            <span className="stonerLogo ">
              <img src={StonerLogo} alt="" className="h-[120px] w-[120px] scale-75 md:scale-100" 
                  />
            </span>
           </a>
          </div>
          

          <p className="m-auto mt-4 max-w-lg font-Itim-Regular text-sm text-[#baf9ba] md:text-xl">
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
          <div className="nationalForestCollection flex w-full flex-col items-center justify-between gap-4 pr-2 xxs:flex-row xxs:pr-0">
            <FacebookForestButton />
            <NationalForestButton />
            <InstagramForestButton />
          </div>
        </div>
      </main>

      <div className="fixed bottom-[1.25rem] right-[1.25rem]">
        <ContactMe />
      </div>
    </div>
  );
}
