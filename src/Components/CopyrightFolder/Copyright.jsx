// eslint-disable-next-line no-unused-vars
import React from "react";
import { FaRegCopyright } from "react-icons/fa";
import "./Copyright.css";
const Copyright = () => {
  return (
    <>
      <section className="copyRightWrapper1 fixed bottom-2 left-5 z-10 hidden tracking-wide sm:block">
        <div
          className="copyRightAnchorTag1 hybridTooltip1"
          data-tooltip="⚡ Instinct in the Mind — Tech in the Hands  "
        >
          <div className="copyRightContainer flex flex-col items-center justify-center px-8 py-4">
            <span className="copyRightCool1 absolute left-4 top-[50%] -translate-y-1/2 transform">
              <FaRegCopyright />
            </span>

            <span className="noLeftBorder1 inline-block font-Itim-Regular">
              <span className="webDevFancyWords whitespace-nowrap">
                Hybrid&nbsp;Web-Craft&nbsp;
              </span>
            </span>
          </div>
        </div>
      </section>
    </>
  );
};

export default Copyright;
