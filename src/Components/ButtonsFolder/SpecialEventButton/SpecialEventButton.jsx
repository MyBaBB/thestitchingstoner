import React from "react";
import { Link } from "react-router-dom";
import "./SpecialEventButton.css";

const SpecialEventButton = () => {
  return (
    <Link
      to="/specialevent"
      className="special-event-btn"
      data-tool-tip="🌈 Hookahville 62 Crochet Classes ✌🏼"
    >
      Special Event
    </Link>
  );
};

export default SpecialEventButton;
