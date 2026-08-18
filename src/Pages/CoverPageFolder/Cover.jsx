
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
import CoolBG from "../../Components/Super_BG_Cover_Folder/Super_BG_Cover.jsx";
import HippieFootprints from "../../Components/HippieFootprintsFolder/HippieFootprints.jsx";
import Copyright from "../../Components/CopyrightFolder/Copyright.jsx";

 


 export default function LandingPage() {
  const messages = [
    
    
    
    <>
    
      <span className="inline-block whitespace-nowrap">🍄 Handmade</span>{" "}
      Crochet for Elevated{" "}
      <span className="inline-block whitespace-nowrap">Minds 🧵</span>
    </>,
    <>
      <span className="inline-block whitespace-nowrap">🧶 Hook</span>{" "}
      up your Hook at{" "}
      <span className="inline-block whitespace-nowrap">Hookahville 62 🌻</span>
    </>,
    <>
      <span className="inline-block whitespace-nowrap">💃🏻 Dreamy</span>{" "}
      Crochet Lessons{" "}
      <span className="inline-block whitespace-nowrap">Available 💭</span>
    </>,
    <>
      <span className="inline-block whitespace-nowrap">✌🏼 Sign</span>{" "}
      up for Hookahville{" "}
      <span className="inline-block whitespace-nowrap">Lessons! 🚌</span>
    </>,
    <>
      <span className="inline-block whitespace-nowrap">🌈 Perfect</span>{" "}
      for Beginners through{" "}
      <span className="inline-block whitespace-nowrap">Experts 🧶</span>
    </>,

  ];
  const rainbowColors = [
    "#FF0000",
    "#FF7F00",
    "#FFFF00",
    "#baf9ba",
    "skyblue",
    "#4B0082",
    "#9400D3",
  ]; 
  const [index, setIndex] = useState(0);
  const [exiting, setExiting] = useState(false);
  useEffect(() => {
    const interval = setInterval(() => {
      setExiting(true);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % messages.length);
        setExiting(false);
      }, 5000);
    }, 16000);
    return () => clearInterval(interval);
  }, []);
  return (
    <>

    <div className="coolBG"><CoolBG /></div>
      {/* FIX: use min-h-[100svh] instead of h-screen */}
      <div className="relative flex-col min-h-[100svh] items-center justify-center text-2xl overflow-hidden">
        <EkoostikEar />
        <span className="reverseButtonInstaller">
          <ReverseButton />
        </span>
        {/* FIX: remove overflow-visible */}
        <main className="relative min-h-[100svh] bg-black text-neutral-100 overflow-hidden">
          <Weed />
          <div className="relative z-10 flex flex-col items-start justify-center text-center w-full">
            <h1 className="z-20 m-auto -mb-2 bg-clip-text font-Itim-Regular text-4xl md:text-6xl">
              <span
                className="stoner-cipher p-[.6rem]"
                data-text="The Stitching Stoner"
              >
                The Stitching Stoner
              </span>
            </h1>
            <p className="dreamyLanding hidden xxs:flex m-auto mb-4 mt-0 max-w-md font-Itim-Regular whitespace-nowrap sm:whitespace-wrap text-xs xs:text-xl md:text-2xl">
              <span
                className={`smokeText ${exiting ? "exitUpRight" : "enterCenter"}`}
                style={{ color: rainbowColors[index % rainbowColors.length] }}
              >
                {messages[index]}
              </span>
            </p>
            {/* FIX: remove fixed height */}
            <div className="mermaidImageWrapper relative m-auto overflow-visible">

        <div className="specialEventInstaller">
          <SpecialEventButton />
        </div>

  <img
    src={MermaidOgImage}
    alt="Featured embroidered stoner art"
    className="mermaidFeaturedImage relative m-auto rounded-xl border-2 border-transparent"
  />
  <div className="logoWrapper   bottom-[-3rem] right-[-3rem] overflow-visible">
    <StonerLogo />
  </div>
</div>

            <p className="m-auto hidden xxs:flex mt-4 max-w-lg font-Itim-Regular text-sm text-[#baf9ba] md:text-xl">
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
            {/* DESKTOP BUTTONS */}
            <div className="nationalForestCollection w-full max-w-[400px] m-auto items-center justify-between gap-4 flex-col md:flex-row hidden md:flex">
              <FacebookForestButton />
              <NationalForestButton />
              <InstagramForestButton />
            </div>
            {/* MOBILE BUTTONS */}
            <div className="nationalForestCollection flex w-full max-w-[400px] m-auto items-center justify-between gap-4 flex-col md:hidden">
              <NationalForestButton className="order-1 md:order-2" />
              <div className="flex flex-row gap-4 order-2 md:order-1 md:flex-col">
                <FacebookForestButton />
                <InstagramForestButton />
              </div>
            </div>
          </div>
          {/* <div className="relative w-full bg-black">
            <Footer />
          </div> */}
          < HippieFootprints />
        </main>
      </div>

         < Copyright />
      
 
    </>
  );
}
        