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

export default function LandingPage() {
  // ROTATING DREAMY TEXT (now JSX, not plain strings)
  const messages = [
    <>
      <span className="inline-block whitespace-nowrap">
        🍄 Handmade
      </span>{" "}
        Crochet for Elevated{" "}
      <span className="inline-block whitespace-nowrap">
        Minds 🧵
      </span>
    </>,
    <>
      <span className="inline-block whitespace-nowrap">
        🧶 Hook
      </span>{" "}
      up your Hook at{" "}
      <span className="inline-block whitespace-nowrap">
        Hookahville 62 🌻
      </span>
    </>,
    <>
      <span className="inline-block whitespace-nowrap">
        💃🏻 Dreamy
      </span>{" "}
      Crochet Lessons{" "}
      <span className="inline-block whitespace-nowrap">
        Available 💭
      </span>
    </>,
    <>
      <span className="inline-block whitespace-nowrap">
        ✌🏼 Sign
      </span>{" "}
      up for Hookahville{" "}
      <span className="inline-block whitespace-nowrap">
        Lessons! 🚌
      </span>
    </>,
    <>
      <span className="inline-block whitespace-nowrap">
        🌈 Perfect
      </span>{" "}
      for Beginners through{" "}
      <span className="inline-block whitespace-nowrap">
        Experts 🧶
      </span>
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
      <div className="relative flex-col h-screen items-center justify-center text-2xl">
        <EkoostikEar />

        <span className="reverseButtonInstaller">
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
            <p className="dreamyLanding hidden xxs:flex m-auto mb-4 mt-0 max-w-md font-Itim-Regular text-xs xs:text-xl md:text-2xl">
              <span
                className={`smokeText ${exiting ? "exitUpRight" : "enterCenter"}`}
                style={{ color: rainbowColors[index % rainbowColors.length] }}
              >
                {messages[index]}
              </span>
            </p>

            {/* FEATURED IMAGE */}
            <div className="mermaidImageWrapper relative flex m-auto">
              <div className="specialEventInstaller">
                <SpecialEventButton />
              </div>

              <img
                src={MermaidOgImage}
                alt="Featured embroidered stoner art"
                className="mermaidFeaturedImage relative flex m-auto rounded-xl border-2 border-transparent"
              />
              <StonerLogo />
            </div>

            {/* QUOTE */}
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

            {/* FOREST BUTTONS — DESKTOP */}
            <div
              className="
                nationalForestCollection
                w-full max-w-[400px]
                m-auto
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

            {/* FOREST BUTTONS — MOBILE */}
            <div
              className="
                nationalForestCollection
                flex w-full max-w-[400px] m-auto
                items-center justify-between
                gap-4
                flex-col
                md:hidden
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
