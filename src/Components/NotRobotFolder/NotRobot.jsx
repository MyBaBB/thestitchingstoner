import React from "react";
import "./NotRobot.css";
import NotRobotArt from "./Not-Robot-Art.svg";

const NotRobot = () => {
  return (
    <>
      <a href="/localartist ">
        <div className="not-robot">
          <img
            src={NotRobotArt}
            alt="Not Robot Art"
            className="not-robot-img"
          />
        </div>
      </a>
    </>
  );
};

export default NotRobot;
