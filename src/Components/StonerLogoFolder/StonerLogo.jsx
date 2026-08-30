import React from "react";
import "./StonerLogo.css";
import StonerLogo from "../../Images/300x300-r.webp";

const StonerLogo2 = () => {
  return (
    <div className=" ">
      <a href="https://thestitchingstoner.square.site/the-stitching-who">
        <div
          className="stonerLogo stonerLogoTooltip h-[80px] w-[80px] md:h-[120px] md:w-[120px]"
          data-tooltip="❔The Stitching Who "
        >
          <img src={StonerLogo} alt="" className="h-[120px] w-[120px]" />
        </div>
      </a>
    </div>
  );
};

export default StonerLogo2;
