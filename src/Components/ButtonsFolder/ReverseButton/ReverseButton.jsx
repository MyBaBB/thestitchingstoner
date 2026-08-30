import { SiDreamstime } from "react-icons/si";

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
          <span className="absolute left-[50px] top-[42.5px] opacity-70">
            <span className="spiralRotate">
              <SiDreamstime size={53} />
            </span>
          </span>

          {/* REAL JSX TOOLTIP */}
          <div className="tooltipReact absolute left-[50px] top-[35px]">
            <span className="spiralRotate">
              <SiDreamstime size={53} />
            </span>
          </div>
        </button>
      </div>
    </>
  );
};

export default ReverseButton;
