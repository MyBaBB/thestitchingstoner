import { SiDreamstime } from "react-icons/si";
import { PiRewindBold } from "react-icons/pi";
import "./ReverseButton.css";
import { useEffect, useState } from "react";
import { BiTimer } from "react-icons/bi";
const ReverseButton = () => {
  const [noHistory, setNoHistory] = useState(false);

  useEffect(() => {
    if (window.history.length <= 1) {
      setNoHistory(true);
    }
  }, []);

  return (
    <>
      <div className="reverseButtonWrapper relative z-50 w-fit ">
        <button
          className={`reverseButton dataToolTipTime hidden md:block z-50 transform ${
            noHistory ? "noHistoryOpacity" : ""
          }`}
          onClick={() => window.history.back()}
        >
          <span className="spiralRotate">
            <SiDreamstime size={50} />
          </span>

          <span className="absolute bottom-[-8px] right-[-8px]">
            <PiRewindBold />
          </span>

          {/* REAL JSX TOOLTIP */}
          <div className="tooltipReact">
            <BiTimer size={18} className="mr-1 inline-block scale-x-[-1]" />
            Before
          </div>
        </button>
      </div>
    </>
  );
};

export default ReverseButton;
