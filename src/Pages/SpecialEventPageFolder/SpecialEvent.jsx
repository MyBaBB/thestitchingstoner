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
      <div className="page-content relative z-10 min-h-screen w-full overflow-x-hidden overflow-y-auto">
        <ReverseButton />

        <div className="specialEventPage">
          <div className="specialEventContent relative flex flex-col items-center">
            <VanSlideIn />
 
   <div className="flex flex-col items-center text-center leading-relaxed font-Itim-Regular">

  <span className="inline-block font-bold text-red-400">
    <span className="inline-block whitespace-nowrap">✨ High‑vibe&nbsp;</span>
    stitching for creative souls <span className="whitespace-nowrap">🧵</span>
  </span>

  <span className="inline-block font-bold text-orange-400 mt-2">
    <span className="inline-block whitespace-nowrap">🌙 Psychedelic&nbsp;</span>
    chill zone <span className="whitespace-nowrap">awaits 🌈</span>
  </span>

  <span className="inline-block font-bold text-yellow-400 mt-2">
    <span className="inline-block whitespace-nowrap">🔥 Limited&nbsp;</span>
    seats — <span className="whitespace-nowrap">tap in ⚡️</span>
  </span>

  <span className="inline-block font-bold text-green-400 mt-2">
    <span className="inline-block whitespace-nowrap">🌼 Creative&nbsp;</span>
    flow session <span className="whitespace-nowrap">begins soon ✨</span>
  </span>

</div>

 
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
