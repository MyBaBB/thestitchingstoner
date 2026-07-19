// eslint-disable-next-line no-unused-vars
import React from "react";
 
import BatSignal from "../../Images/BatButton.webp";
import "./ContactMe.css";

const ContactMe = () => {
  return (
    <div className="ContactButtonHide relative z-50 m-auto mb-[.5rem]   h-full w-full items-center justify-center hidden md:flex
               ">
      <div
        id="contact"
        className="buttonsAllWrapper m-auto mb-4 w-fit px-1 pb-2 cursor-pointer 
                   duration-500 ease-in-out hover:scale-[100.8%]"
      >
        <a href="https://mybabb.com "  className=" relative flex-row justify-center  
                 ">
<button
  className="rootsButton w-fit whitespace-nowrap font-extrabold 
   "
  title="Rescue Button"
>



    <div className="batSignal flex items-center justify-center
                     ">
              <div className="absolute w-10 h-10 bg-black/30 rounded-full "></div>        
             <img src={BatSignal} alt="Bat Signal" className="imgBatSignal w-10 h-10" />
    </div>




</button>

         
          
        </a>
      </div>
    </div>
  );
};

export default ContactMe;
