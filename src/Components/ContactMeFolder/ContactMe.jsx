// eslint-disable-next-line no-unused-vars
import React from "react";

import BatSignal from "../../Images/BatButton.webp";
import "./ContactMe.css";

const ContactMe = () => {
  return (
    <div className="ContactButtonHide relative z-50 m-auto mb-[.5rem] hidden h-full w-full items-center justify-center md:flex">
      <div
        id="contact"
        className="buttonsAllWrapper m-auto mb-4 w-fit cursor-pointer px-1 pb-2 duration-500 ease-in-out hover:scale-[100.8%]"
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
              <div className="absolute h-10 w-10 rounded-full bg-black/30"></div>
              <img
                src={BatSignal}
                alt="Bat Signal"
                className="imgBatSignal h-10 w-10"
              />
            </div>
          </button>
        </a>
      </div>
    </div>
  );
};

export default ContactMe;
