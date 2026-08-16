import React from 'react'
import './StonerLogo.css'
import StonerLogo from "../../Images/Logo300x300-2.webp";

const StonerLogo2 = () => {
  return (
    <div className="  "
       >
      
      
                    <a href="https://thestitchingstoner.square.site/the-stitching-who">
                      <div className="stonerLogo stonerLogoTooltip w-[80px] h-[80px] md:w-[120px] md:h-[120px] "
                           data-tooltip="❔The Stitching Who ">
                        <img
                          src={StonerLogo}
                          alt=""
                          className="h-[120px] w-[120px]  "
                        />
                      </div>
                    </a>
    </div>
  )
}

export default StonerLogo2
