// SpecialEventPage.jsx
import React from "react";
import ReverseButton from "../../Components/ButtonsFolder/ReverseButton/ReverseButton.jsx";
import Footer from "../../Components/FooterFolder/Footer.jsx";
import YouTubePlayer from "../../Components/YouTubeFolder/YouTubePlayer.jsx";
import AnimatedDetails from "../../Components/AnimatedDetailsFolder/AnimatedDetails.jsx";
import VanSlideIn from "../../Components/VanSlideInFolder/VanSlideIn.jsx";
import Copyright from "../../Components/CopyrightFolder/Copyright.jsx";
import "./SpecialEvent.css";

export default function SpecialEventPage() {
  return (
    <div className="special-event-bg-wrapper">
      <div className="page-content">
        <ReverseButton />

        <div className="specialEventPage">
          <div className="specialEventContent relative flex flex-col items-center">
            <VanSlideIn />
            <AnimatedDetails />
            <YouTubePlayer />
          </div>

          <a href="https://mybabb.com/youtubepageserious" className="inline-block w-auto">
            <div className="tooltip-wrapper1">
              <Copyright />
            </div>
          </a>

          <Footer />
        </div>
      </div>
    </div>
  );
}