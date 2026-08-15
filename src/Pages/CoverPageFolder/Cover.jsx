import "./Cover.css";
import { useState, useEffect } from "react";
import MermaidOgImage from "../../Images/shroom-site-version-2.webp";
import Weed from "../../Components/WeedFolder/Weed.jsx";
import ReverseButton from "../../Components/ButtonsFolder/ReverseButton/ReverseButton.jsx";
import { PiQuotesThin } from "react-icons/pi";
import StonerLogo from "../../Components/StonerLogoFolder/StonerLogo.jsx";
import NationalForestButton from "../../Components/ButtonsFolder/NationalForestButton/NationalForestButton..jsx";

import EkoostikEar from "../../Components/ButtonsFolder/EkoostikEarFolder/EkoostikEar.jsx";
import FacebookForestButton from "../../Components/ButtonsFolder/NationalForestButton/FaceBookForestButton.jsx";
import InstagramForestButton from "../../Components/ButtonsFolder/NationalForestButton/InstagramForestButton.jsx";

import SpecialEventButton from "../../Components/ButtonsFolder/SpecialEventButton/SpecialEventButton.jsx";
import Footer from "../../Components/FooterFolder/Footer.jsx";
// import { TbNeedleThread } from "react-icons/tb";
// import { GiYarn } from "react-icons/gi";

 
export default function LandingPage() {
  // ROTATING DREAMY TEXT
  const messages = [
    "🍄 Handmade Crochet for Elevated Minds 🧵",
    "🧶 Hook up your Hook at Hookahville 62 🌻",
    "💃🏻 Dreamy Crochet Lessons Available 💭 ",
    "✌🏼 Sign up for Hookahville Lessons! 🚌",
    "🌈 Perfect for Beginners through Experts 🧶  ",
  ];
  const rainbowColors = [
    "#FF0000", // red
    "#FF7F00", // orange
    "#FFFF00", // yellow
    "#baf9ba", // green
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
    <>
      <div className="relative flex-col  h-screen items-center justify-center text-2xl
        border-2 border-red-500 ">
        
          < EkoostikEar />
 


        <span className="reverseButtonInstaller absolute left-4 top-4">
          <ReverseButton />
        </span>

        <main className="relative min-h-screen overflow-visible bg-black text-neutral-100">
          <Weed />
          <div className="relative z-10 flex h-fit flex-col items-start justify-center text-center">
            {/* TITLE */}
            <h1 className="z-20 m-auto -mb-2 overflow-visible bg-clip-text font-Itim-Regular text-4xl md:text-6xl">
              <span
                className="stoner-cipher p-[.6rem]"
                data-text="The Stitching Stoner"
              >
                The Stitching Stoner
              </span>
            </h1>

            {/* SMOKE-DISSOLVE TAGLINE */}
            <p className="dreamyLanding m-auto mb-4 mt-0 max-w-md  
                        font-Itim-Regular text-xs xs:text-xl md:text-2xl">
              <span
                className={`smokeText ${exiting ? "exitUpRight" : "enterCenter"}`}
                style={{ color: rainbowColors[index % rainbowColors.length] }}
              >
                {messages[index]}
              </span>
            </p>

            {/* FEATURED IMAGE */}
            {/* FEATURED IMAGE */}
           
            <div className="mermaidImageWrapper  relative flex m-auto   ">
                <div className="specialEventInstaller  ">
                    <SpecialEventButton />
                </div>

              <img
                src={MermaidOgImage}
                alt="Featured embroidered stoner art"
                className="mermaidFeaturedImage relative flex m-auto rounded-xl border-2 border-transparent"
              />
             < StonerLogo />
            </div> 

            <p className="m-auto mt-4 max-w-lg font-Itim-Regular text-sm text-[#baf9ba] md:text-xl">
              <span className="inline-block ">
                <span className="inline-block scale-x-[-1]">
                  <PiQuotesThin />
                </span>
                &nbsp;Peace, Creativity, and Connection
              </span>
              <br className="inline-block sm:hidden" />
              <span className="inline-block ">
                &nbsp;all Woven Together&nbsp;
                <span className="inline-block">
                  <PiQuotesThin />
                </span>
              </span>
            </p>







<div
  className="
    nationalForestCollection
    w-[50%] m-auto
    items-center justify-between
    gap-4
    flex-col md:flex-row
    hidden md:flex
  "
>
  <FacebookForestButton />
  <NationalForestButton />
  <InstagramForestButton />
</div>
<div
  className="
    nationalForestCollection
    flex w-fit m-auto
    items-center justify-between
    gap-4
    flex-col
    md:hidden
    border-2 border-red-500
  "
  
>
  <NationalForestButton className="order-1 md:order-2" />
  <div className="flex flex-row gap-4 order-2 md:order-1 md:flex-col">
    <FacebookForestButton />
    <InstagramForestButton />
  </div>
</div>


            
          </div>
           <div className="relative w-full bg-black">
        <Footer />
         </div> 
        </main>
        
      </div>
        
    </>
  );
}
