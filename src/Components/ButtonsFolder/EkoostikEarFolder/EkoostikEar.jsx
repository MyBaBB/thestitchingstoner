import React from "react";
import { GiGuitar } from "react-icons/gi";
import { Link } from "react-router-dom";
import "./EkoostikEar.css";

export default function EkoostikEar() {
  return (
    <div className="ekoostikEarButtonWrapper">
      <Link 
        to="/specialevent" 
        tabIndex={-1} 
        aria-label="Hookahville 62 Special Event"
      >
        <button
          className="ekoostikEarTooltip ekoostikEarButton"
          data-tooltip="🔊 Hookahville 62 ✌🏼"
          type="button"
        >
          <GiGuitar />
        </button>
      </Link>
    </div>
  );
}