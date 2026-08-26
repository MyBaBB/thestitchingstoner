import React from "react";
import { Link } from "react-router-dom";
import "./SpecialEventButton.css";

const SpecialEventButton = () => {
  return (
    <Link
      to="/specialevent2"
      className="special-event-btn"
      data-tool-tip="🌈 Hookahville 62 Crochet Classes ✌🏼"
    >
      Sep. 11th
    </Link>
  );
};

export default SpecialEventButton;
