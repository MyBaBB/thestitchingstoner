// import { GiReturnArrow } from "react-icons/gi";
import { PiSpiralLight } from "react-icons/pi";
import { PiRewindBold } from "react-icons/pi";
import "./ReverseButton.css";

const ReverseButton = () => {
  return (
    <>
      <div className="reverseButtonWrapper fixed left-2 top-2 z-50 w-fit hidden xs:block">
        <button
          className="reverseButton z-50   transform"
          onClick={() => window.history.back()}
          title="Reverse"
        >
          <span className="">
        
            < PiSpiralLight size={50} />
          
          </span>
          <span className="absolute  right-0">
             <PiRewindBold />
          </span>
        </button>
      </div>
    </>
  );
};

export default ReverseButton;
