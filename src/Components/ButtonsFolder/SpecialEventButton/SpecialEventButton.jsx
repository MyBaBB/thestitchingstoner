import React from "react";
import { Link } from "react-router-dom";
import "./SpecialEventButton.css";

const SpecialEventButton = () => {
  return (
    <Link
      to="/specialevent2"
      className="special-event-btn"
      data-tool-tip="Good People ✌🏼 Good Times  "
    >
      Sep. 11th
    </Link>
  );
};

export default SpecialEventButton;
