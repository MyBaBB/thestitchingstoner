// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-router-dom";
import HippieFootprints from "../../Components/HippieFootprintsFolder/HippieFootprints.jsx";
import NotRobot from "../../Components/NotRobotFolder/NotRobot.jsx";

import "./Footer.css";

const Footer = () => {
  return (
    <>
      <div className="specialEventFooter">
        <div className="footer-left">
          <HippieFootprints />
        </div>

        <Link to="/localartist">
          <div className="footer-right flex flex-col opacity-80">
            <NotRobot />
          </div>
        </Link>
      </div>
    </>
  );
};

export default Footer;
