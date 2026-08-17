// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import ReverseButton from "../../Components/ButtonsFolder/ReverseButton/ReverseButton.jsx";
import Footer from "../../Components/FooterFolder/Footer.jsx";
import YouTubePlayer from "../../Components/YouTubeFolder/YouTubePlayer.jsx";
import "./SpecialEvent.css";
import VanSlideIn from "../../Components/VanSlideInFolder/VanSlideIn.jsx";
import { FaRegCopyright } from "react-icons/fa";
import { IoMdArrowDropright } from "react-icons/io";

const messages = [
  <>
    <span className="inline-block whitespace-nowrap">✨ High‑vibe</span>{" "}
    stitching for{" "}
    <span className="inline-block whitespace-nowrap">creative souls 🧵</span>
  </>,

  <>
    <span className="inline-block whitespace-nowrap">🌙 Psychedelic</span>{" "}
    chill zone{" "}
    <span className="inline-block whitespace-nowrap">awaits 🌈</span>
  </>,

  <>
    <span className="inline-block whitespace-nowrap">🔥 Limited</span>{" "}
    seats —{" "}
    <span className="inline-block whitespace-nowrap">tap in ⚡️</span>
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

export default function SpecialEventPage() {
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
      <div className="page-content relative z-10 min-h-screen w-full overflow-x-hidden overflow-y-auto">
        <ReverseButton />

        <div className="specialEventPage">
          <div className="specialEventContent relative flex flex-col items-center">
            <VanSlideIn />

            <p className="dreamyLanding hidden xxs:flex m-auto mb-4 mt-0 max-w-md font-Itim-Regular whitespace-nowrap sm:whitespace-wrap text-xs xs:text-xl md:text-2xl">
              <span
                className={`smokeText ${exiting ? "exitUpRight" : "enterCenter"}`}
                style={{ color: rainbowColors[index % rainbowColors.length] }}
              >
                {messages[index]}
              </span>
            </p>

            <YouTubePlayer />
          </div>

          <Footer />
        </div>
      </div>

      <div className="fixed z-10 bottom-2 left-5 text-[aliceblue] tracking-wide select-none hidden sm:block hover:scale-125">
        <a href="https://mybabb.com">
          <div className="flex flex-col px-8 py-4 items-center justify-center">
            <span className="inline-block text-orange-300/40"></span>

            <span className="absolute left-4 top-[50%] transform -translate-y-1/2 text-orange-300/80">
              <FaRegCopyright size={11} />
            </span>

            <span className="inline-block font-Itim-Regular text-[8px] text-white/80">
              Brett&apos;s&nbsp;Web&nbsp;Development
            </span>

            <span className="absolute right-3 top-[50%] transform -translate-y-1/2 text-orange-300/80">
              <IoMdArrowDropright size={20} />
            </span>
          </div>
        </a>
      </div>
    </>
  );
}
