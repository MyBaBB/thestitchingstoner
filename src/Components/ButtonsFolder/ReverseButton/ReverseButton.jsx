import { SiDreamstime } from "react-icons/si";
import { PiRewindBold } from "react-icons/pi";
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
      <div className="reverseButtonWrapper relative z-50 w-fit">
        <button
          className={`reverseButton dataToolTipTime z-50 hidden transform md:block ${
            noHistory ? "noHistoryOpacity" : ""
          }`}
          onClick={() => window.history.back()}
        >
          <span className="absolute left-[20px] top-[20px] opacity-70">
            <PiRewindBold size={30} />
          </span>

          {/* REAL JSX TOOLTIP */}
          <div className="tooltipReact">
            <span className="spiralRotate">
              <SiDreamstime size={50} />
            </span>
          </div>
        </button>
      </div>
    </>
  );
};

export default ReverseButton;
