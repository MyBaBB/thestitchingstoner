import React from "react";
import "./NationForestToolTips/GotoWebTooltip.css";
import { GiYarn } from "react-icons/gi";
import { PiPersonSimpleHike } from "react-icons/pi";
import { SlDirection } from "react-icons/sl";

const NationalForestButton = () => {
  return (
    <div
      className="GotoWebTooltip m-auto flex h-[3rem] w-fit flex-row items-center justify-center"
      data-tooltip="✌🏼 Welcome 🛖 "
    >
      <a
        href="https://thestitchingstoner.square.site"
        target="_blank"
        rel="noopener noreferrer"
        className="nationalForest_buttonWrapper mt-8 inline-block px-4 py-2"
      >
        <div className="flex items-center justify-center gap-4 px-1 bg-transparent">
          <span className="inline-block text-[#eece6c] bg-transparent">
            <PiPersonSimpleHike size={22} />
          </span>

          <span className="inline-block font-Itim-Regular text-xl text-[#eece6c] bg-transparent">
            <SlDirection size={18} />
          </span>

          <span className="inline-block scale-x-[-1] text-[#eece6c] bg-transparent">
            <GiYarn size={20} />
          </span>
        </div>
      </a>
    </div>
  );
};

export default NationalForestButton;
