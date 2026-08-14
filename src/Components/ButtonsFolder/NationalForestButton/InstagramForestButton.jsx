// eslint-disable-next-line no-unused-vars
import React from "react";
import "./NationalForestButton.css";
import { FaInstagram } from "react-icons/fa";

const InstagramForestButton = () => {
  return (
    <div className="m-auto flex h-[3rem] w-fit flex-row items-center justify-center">
      <a
        href="https://www.instagram.com/thestitchingstoner/"
        target="_blank"
        rel="noopener noreferrer"
        className="nationalForest_FB_Wrapper mt-8 inline-block px-4 py-2"
      >
        <div className="flex items-center justify-center gap-4 px-1 bg-transparent">
          <span className="inline-block text-[hotpink] bg-transparent">
            <FaInstagram size={21} />
          </span>
        </div>
      </a>
    </div>
  );
};

export default InstagramForestButton;
