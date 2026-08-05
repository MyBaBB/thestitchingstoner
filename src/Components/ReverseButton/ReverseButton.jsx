
import { GiRun } from "react-icons/gi";
import { SiDreamstime } from "react-icons/si";
 
import { BiSolidTimer } from "react-icons/bi";
import "./ReverseButton.css";
import { useEffect, useState } from "react";

const ReverseButton = () => {
  const [noHistory, setNoHistory] = useState(false);

  useEffect(() => {
    if (window.history.length <= 1) {
      setNoHistory(false);
    }
  }, []);

  return (
    <>
      <div className="reverseButtonWrapper relative z-50 hidden w-fit xs:block">
        <button
          className={`reverseButton dataToolTipTime z-50 transform ${
            noHistory ? "noHistoryOpacity" : ""
          }`}
          onClick={() => window.history.back()}
        >
          <span className="spiralRotate">
          
            <SiDreamstime  size={50} />
          </span>

        

          {/* REAL JSX TOOLTIP */}
          <div className="tooltipReact ">
            <div className="relative flex items-center justify-center w-full h-full">
              <p>< GiRun  size={18} className="block mr-1 scale-x-[-1]"/></p>   
                
              <p><BiSolidTimer  size={18} className="block ml-1 scale-x-[-1]"/></p>
           </div>
          </div>
        </button>
      </div>
    </>
  );
};

export default ReverseButton;
