// eslint-disable-next-line no-unused-vars
import React from "react";

import BatSignal from "../../Images/BatButton.webp";
import "./ContactMe.css";

const ContactMe = () => {
  return (
    <div className="ContactButtonHide m-auto -mb-5 h-full w-full items-center justify-center">
      <div
        id="contact"
        className="buttonsAllWrapper z-20 m-auto w-fit cursor-pointer px-1 pb-2 duration-500 ease-in-out hover:scale-[100.8%]"
      >
        <a
          href="https://mybabb.com "
          className="relative flex-row justify-center"
        >
          <button
            className="rootsButton w-fit whitespace-nowrap font-extrabold"
            title="Rescue Button"
          >
            <div className="batSignal flex items-center justify-center">
              <div className="absolute h-[3.5rem] w-[3.5rem] rounded-full bg-black/30"></div>
              <img
                src={BatSignal}
                alt="Bat Signal"
                className="imgBatSignal h-[3.5rem] w-[3.5rem]"
              />
            </div>
          </button>
        </a>
      </div>
    </div>
  );
};

export default ContactMe;
