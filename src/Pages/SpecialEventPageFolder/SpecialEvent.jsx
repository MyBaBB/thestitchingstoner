// eslint-disable-next-line no-unused-vars
import React from "react";
import ReverseButton from "../../Components/ButtonsFolder/ReverseButton/ReverseButton.jsx";
import Footer from "../../Components/FooterFolder/Footer.jsx";
import YouTubePlayer from "../../Components/YouTubeFolder/YouTubePlayer.jsx";
import "./SpecialEvent.css";
import VanSlideIn from "../../Components/VanSlideInFolder/VanSlideIn.jsx";

export default function SpecialEventPage() {
  return (
    <>
      <div className="min-h-screen w-full overflow-y-auto overflow-x-hidden">
        <ReverseButton />

        <div className="specialEventPage">
          <div className="specialEventContent relative flex flex-col items-center">

        {/* xxxxxxxxx H1 Animation  xxxxxxxx*/}
              <VanSlideIn />

            <p className="specialEventParagraph text-center">
              High‑vibe stitching.  
              Psychedelic chill zone.  
              Limited seats — tap in.
            </p>

            <YouTubePlayer />
          </div>

          <Footer />
        </div>
      </div>
    </>
  );
}
