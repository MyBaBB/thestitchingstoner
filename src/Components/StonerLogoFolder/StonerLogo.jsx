import React from 'react'
import './StonerLogo.css'
import StonerLogo from "../../Images/Logo300x300-2.webp";

const StonerLogo2 = () => {
  return (
    <div className="  "
       >
      
      
                    <a href="https://thestitchingstoner.square.site/the-stitching-who">
                      <div className="stonerLogo stonerLogoTooltip overflow-visible  "
                           data-tooltip="❔The Stitching Who ">
                        <img
                          src={StonerLogo}
                          alt=""
                          className="h-[120px] w-[120px] scale-75 md:scale-100"
                        />
                      </div>
                    </a>
    </div>
  )
}

export default StonerLogo2
