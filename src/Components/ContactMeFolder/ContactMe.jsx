// eslint-disable-next-line no-unused-vars
import React from "react";
import { PiTree } from "react-icons/pi";
import "./ContactMe.css";

const ContactMe = () => {
  return (
    <div className="ContactButtonHide relative z-50 m-auto mb-[.5rem] flex h-full w-full items-center justify-center">
      <div
        id="contact"
        className="buttonsAllWrapper m-auto mb-4 w-fit px-1 pb-2 cursor-pointer duration-500 ease-in-out hover:scale-[100.8%]"
      >
        <a href="https://mybabb.com "  className=" relative flex-row justify-center  
                 ">
         <button
  className="rootsButton w-fit whitespace-nowrap font-extrabold 
             relative   flex-col items-center justify-center
             hidden sm:flex  "
  title="Contact Me"
>
  <div className="piTree flex items-center justify-center ">
    <PiTree size={20} />
  </div>

  <span className="rootsText font-Itim-Regular">Roots</span>
   <hr className="relative flex rootsLine  h-[1px] w-10 bg-transparent border-[.2px] rounded-lg" />
</button>

         
          
        </a>
      </div>
    </div>
  );
};

export default ContactMe;
