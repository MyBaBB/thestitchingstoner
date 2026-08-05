 
import { SiDreamstime } from "react-icons/si";
import { PiRewindBold } from "react-icons/pi";
import "./ReverseButton.css";
import { useEffect, useState } from "react";
import { BiTimer } from "react-icons/bi";
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

          <span className="absolute bottom-[-8px] right-[-8px]">
            <PiRewindBold />
          </span>

          {/* REAL JSX TOOLTIP */}
          <div className="tooltipReact">
            <BiTimer  size={18} className="inline-block mr-1 scale-x-[-1]" />
        
            Before  
            
          </div>
        </button>
      </div>
    </>
  );
};

export default ReverseButton;
