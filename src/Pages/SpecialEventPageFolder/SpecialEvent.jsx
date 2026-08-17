import React from "react";
import ReverseButton from "../../Components/ButtonsFolder/ReverseButton/ReverseButton.jsx";
import Footer from "../../Components/FooterFolder/Footer.jsx";
import YouTubePlayer from "../../Components/YouTubeFolder/YouTubePlayer.jsx";
import "./SpecialEvent.css";

export default function SpecialEventPage() {
  return (
    <>
      <div className="min-h-screen w-full overflow-y-auto overflow-x-hidden">
        <ReverseButton />

        <div className="specialEventPage">
          <div className="specialEventContent relative flex flex-col items-center">

            <h1 className="specialEventTitle">
              🌈 Hookahville 62 ✌🏼
              <br />
              🚐 Crochet Sessions 🧶
            </h1>

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
