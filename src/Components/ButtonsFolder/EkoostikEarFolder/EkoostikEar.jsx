import React from 'react'
import { LuEar } from "react-icons/lu";
import { Link } from "react-router-dom";
import './EkoostikEar.css'
const EkoostikEar = () => {
  return (
    <div className="ekoostikEarButtonWrapper">
          <Link to="/specialevent">
            <button className="ekoostikEarTooltip ekoostikEarButton"
            data-tooltip="🔊 Hookahville 62 ✌🏼">

              <LuEar />
              
            </button>
          </Link>
        </div>
  )
}

export default EkoostikEar