import { useEffect } from "react";
import ReverseButton from "../../Components/ButtonsFolder/ReverseButton/ReverseButton.jsx";
import NotRobot from "../../Components/NotRobotFolder/NotRobot.jsx";
import BatSignal from "../../Components/ContactMeFolder/ContactMe.jsx";
import Weed from "../../Images/The_Stitching_Stoner/favicon.png";
import { TbCamper } from "react-icons/tb"; 
import { PiQuotes } from "react-icons/pi";

import "./LocalArtist.css";

const LocalArtistFolder = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="local-artist-wrapper ">

      {/* HEADER */}
      <header className="local-artist-header relative">

        {/* Home Link */}
        <a href="/" className="home-link">
          <img
            src={Weed}
            className="absolute left-8 top-8 scale-[175%] z-50"
            alt="Return to Home"
          />
        </a>

        {/* Reverse Button */}
        <ReverseButton />

        {/* No Zone Badge */}
        <div className="NotRobotGradient relative m-auto mb-2 mt-4 h-[100px] w-[100px]">
          
          <NotRobot />
        </div>
      </header>

      {/* MAIN CONTENT */}
      <main className="relative content-box mt-8">

        {/* <h1 className="groovy-title mb-4 whitespace-nowrap">
          🧑🏼‍🎨 Support Your Local Artist 🎨
        </h1> */}
  

             




       
<article className="groovy-title relative flex flex-col items-center justify-center text-center">

                  <p className="font-bold ">&nbsp;No Zone&nbsp;</p>
  <h2><span className="inline-block scale-x-[-1]" ><PiQuotes size={25} /></span>
                 
                <span className="inline-block whitespace-nowrap">
                  &nbsp;Hippie&nbsp;
                  <span className="inline-block"><TbCamper size={25} color="hotpink" /></span>
                  &nbsp;Friendly&nbsp;
                </span>
            <span className="inline-block  " ><PiQuotes size={25} /> </span>
            </h2>

  <p>Support your Local Artist</p>


 
</article>

      

        <ul className="groovy-list mt-4">
           <p className=" text-center">Everything you see comes from:</p>
          <li>🌼 Handmade art and illustration</li>
          <li>📸 Real photography shot by human eyes</li>
          <li>🖌️ Illustrator artwork and hand‑crafted vectors</li>
          <li>🔷 Custom SVGs drawn with intention</li>
          <li>🍄 Human produced 3D Art Graphics</li>
          <li>✨ Photoshop for the digital artist</li>
          <li>✨ Custom Written CSS Animations</li>
        </ul>

       <p className="groovy-title ">
          Digital art has been around for decades — long before AI — and it’s a real, 
          soulful art form made by actual humans with actual vibes. 
        </p> 
      </main>

      {/* CONTACT ASIDE */}
      <aside className="contact-aside relative">
        <span className="absolute right-4 bottom-[-.5rem]  z-50">
          <BatSignal />
        </span>
      </aside>

      {/* FOOTER */}
      <footer className="badge relative text-amber-200 w-fit m-auto mt-4">
        💛 Made by Human Hands 💛
      </footer>

    </div>
  );
};

export default LocalArtistFolder;
