import React from "react";
import "./NotRobot.css";
import NotRobotArt from "./11am-NoAi_new-150x150.webp";

const NotRobot = () => {
  return (
    <>
      <div className="not-robot">
        <img src={NotRobotArt} alt="Not Robot Art" className="not-robot-img" />
      </div>
    </>
  );
};

export default NotRobot;
