// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import ReverseButton from "../../Components/ButtonsFolder/ReverseButton/ReverseButton.jsx";
import Footer from "../../Components/FooterFolder/Footer.jsx";
import YouTubePlayer from "../../Components/YouTubeFolder/YouTubePlayer.jsx";
import "./SpecialEvent.css";
import VanSlideIn from "../../Components/VanSlideInFolder/VanSlideIn.jsx";
import { FaRegCopyright } from "react-icons/fa";
import { IoMdArrowDropright } from "react-icons/io";

export default function SpecialEventPage() {
  return (
    <>
      <div className="page-content relative z-10 min-h-screen w-full overflow-y-auto overflow-x-hidden">
        <ReverseButton />

        <div className="specialEventPage">
          <div className="specialEventContent relative flex flex-col items-center">
            <VanSlideIn />

            <div className="flex flex-col items-center text-center font-Itim-Regular leading-relaxed">
              <span className="inline-block font-semibold text-red-400">
                <span className="inline-block whitespace-nowrap">
                  ✨ High‑vibe&nbsp;
                </span>
                stitching for creative souls{" "}
                <span className="whitespace-nowrap">🧵</span>
              </span>

              <span className="mt-2 inline-block font-semibold text-orange-400">
                <span className="inline-block whitespace-nowrap">
                  🌙 Psychedelic&nbsp;
                </span>
                chill zone <span className="whitespace-nowrap">awaits 🌈</span>
              </span>

              <span className="mt-2 inline-block font-semibold text-yellow-400">
                <span className="inline-block whitespace-nowrap">
                  🔥 Limited&nbsp;
                </span>
                seats — <span className="whitespace-nowrap">tap in ⚡️</span>
              </span>

              <span className="mt-2 inline-block font-semibold text-green-400">
                <span className="inline-block whitespace-nowrap">
                  🌼 Creative&nbsp;
                </span>
                flow session{" "}
                <span className="whitespace-nowrap">begins soon ✨</span>
              </span>
            </div>

            <YouTubePlayer />
          </div>

          <Footer />
        </div>
      </div>

      <div className="fixed bottom-2 left-5 z-10 hidden select-none tracking-wide text-[aliceblue] hover:scale-125 sm:block">
        <a href="https://mybabb.com">
          <div className="flex flex-col items-center justify-center px-8 py-4">
            <span className="inline-block text-orange-300/40"></span>

            <span className="absolute left-4 top-[50%] -translate-y-1/2 transform text-orange-300/80">
              <FaRegCopyright size={11} />
            </span>

            <span className="inline-block font-Itim-Regular text-[8px] text-white/80">
              Brett&apos;s&nbsp;Web&nbsp;Development
            </span>

            <span className="absolute right-3 top-[50%] -translate-y-1/2 transform text-orange-300/80">
              <IoMdArrowDropright size={20} />
            </span>
          </div>
        </a>
      </div>
    </>
  );
}
