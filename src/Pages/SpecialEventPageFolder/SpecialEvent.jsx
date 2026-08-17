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
 

  <div className="page-content relative z-10 min-h-screen w-full overflow-x-hidden overflow-y-auto">

    <ReverseButton />

    <div className="specialEventPage">
      <div className="specialEventContent relative flex flex-col items-center">
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

  {/* FOOTER MOVED OUTSIDE */}
  
</>

  );
}
