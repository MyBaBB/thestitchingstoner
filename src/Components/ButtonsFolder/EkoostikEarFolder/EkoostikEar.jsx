import React from 'react'
import { GiGuitar } from "react-icons/gi";
import { Link } from "react-router-dom";
import './EkoostikEar.css'
const EkoostikEar = () => {
  return (
    <div className="ekoostikEarButtonWrapper">
          <Link to="/specialevent">
            <button className="ekoostikEarTooltip ekoostikEarButton"
            data-tooltip="🔊 Hookahville 62 ✌🏼">

              <GiGuitar />
              
            </button>
          </Link>
        </div>
  )
}

export default EkoostikEar