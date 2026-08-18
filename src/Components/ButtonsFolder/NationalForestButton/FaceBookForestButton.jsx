// eslint-disable-next-line no-unused-vars
import React from "react";
import "./NationalForestButton.css";
import { FaFacebookF } from "react-icons/fa";

const FacebookForestButton = () => {
  return (
    <div className="m-auto flex h-[3rem] w-fit flex-row items-center justify-center">
      <a
        href="https://www.facebook.com/TheStitchingStoner420"
        target="_blank"
        rel="noopener noreferrer"
        className="nationalForest_FB_Wrapper mt-8 inline-block px-4 py-2"
      >
        <div className="flex items-center justify-center gap-4 bg-transparent px-1">
          <span className="inline-block bg-transparent text-[skyblue]">
            <FaFacebookF size={21} />
          </span>
        </div>
      </a>
    </div>
  );
};

export default FacebookForestButton;
