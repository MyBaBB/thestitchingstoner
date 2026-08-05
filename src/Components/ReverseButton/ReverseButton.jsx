
import { GiRun } from "react-icons/gi";
import { SiDreamstime } from "react-icons/si";
 
import { BiSolidTimer } from "react-icons/bi";
import "./ReverseButton.css";
import { useEffect, useState } from "react";

const ReverseButton = () => {
  const [noHistory, setNoHistory] = useState(false);

  useEffect(() => {
    if (window.history.length <= 1) {
      setNoHistory(true);
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
          <div className="tooltipReact">
           
             < GiRun  size={18} className="inline-block mr-1 scale-x-[-1]"/>   
            Before 
              <BiSolidTimer  size={18} className="inline-block ml-1 scale-x-[-1]"/>
           
          </div>
        </button>
      </div>
    </>
  );
};

export default ReverseButton;
