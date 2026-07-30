import { PiSpiralLight } from "react-icons/pi";
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
      <div className="reverseButtonWrapper absolute left-2 top-2 z-50 hidden w-fit xs:block">
        <button
          className={`reverseButton z-50 transform ${
            noHistory ? "noHistoryOpacity" : ""
          }`}
          onClick={() => window.history.back()}
          title="Reverse"
        >
          <span className='spiralRotate'>
            <PiSpiralLight size={50} />
          </span>
          <span className="absolute right-[-8px] bottom-[-8px]">
            <PiRewindBold />
          </span>
        </button>
      </div>
    </>
  );
};

export default ReverseButton;
