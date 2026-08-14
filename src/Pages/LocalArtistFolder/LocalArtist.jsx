import { useEffect } from "react";
import ReverseButton from "../../Components/ButtonsFolder/ReverseButton/ReverseButton.jsx";
import NotRobot from "../../Components/NotRobotFolder/NotRobot.jsx";
import BatSignal from "../../Components/ContactMeFolder/ContactMe.jsx";
import Weed from "../../Images/The_Stitching_Stoner/favicon.png";
import { TbCamper } from "react-icons/tb";
import { ImEarth } from "react-icons/im";
import { GiCampCookingPot } from "react-icons/gi";
import { FaCampground } from "react-icons/fa";
import { GiOldWagon } from "react-icons/gi";
import HippieFootprints from "../../Components/HippieFootprintsFolder/HippieFootprints.jsx";

import "./LocalArtist.css";

const LocalArtistFolder = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="local-artist-wrapper">
      {/* HEADER */}

      <header className="local-artist-header relative">
        {/* Home Link */}
        <a href="/" className="home-link">
          <img
            src={Weed}
            className="absolute left-8 top-8 z-50 scale-[175%]"
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
      <main className="content-box relative mt-8">
        {/* <h1 className="groovy-title mb-4 whitespace-nowrap">
          🧑🏼‍🎨 Support Your Local Artist 🎨
        </h1> */}

        <article className="groovy-title relative flex flex-col items-center justify-center text-center">
          <h2>
            {" "}
            <span className="inline-block scale-x-[-1] text-base xs:text-lg md:text-2xl">
              <FaCampground color="limegreen" />
            </span>
            <span className="inline-block whitespace-nowrap">
              &nbsp;&nbsp;Hippie&nbsp;&nbsp;
              <span className="tbCamper inline-block text-base xs:text-lg md:text-2xl">
                <TbCamper color="limegreen" />
              </span>
              &nbsp;&nbsp;Style&nbsp;&nbsp;
            </span>
            <span className="inline-block text-base xs:text-lg md:text-2xl">
              <GiCampCookingPot color="limegreen" />
            </span>
          </h2>

          <p>Support your Local Artist</p>
        </article>

        <ul className="groovy-list mt-4">
          <div className="items-enter relative flex w-full justify-center">
            <p className="traditionalSwapBlock traditionalWord">
              <div className="quoteLeft absolute left-2 top-[50%] -translate-y-1/2 scale-x-[-1] transform text-base xs:text-lg md:text-2xl">
                <ImEarth color="limegreen " />
              </div>

              <span className="traditionalWordVapor"></span>

              <div className="quoteRight absolute right-2 top-[50%] -translate-y-1/2 transform text-base xs:text-lg md:text-2xl">
                <ImEarth color="limegreen" />
              </div>
            </p>
          </div>

          <li>🎨 Handmade art and illustration</li>
          <li>📸 Real photography shot by human eyes</li>
          <li>🖌️ Illustrator artwork and hand‑crafted vectors</li>
          <li>🔷 Custom SVGs drawn with intention</li>
          <li>🍄 Human produced 3D Art Graphics</li>
          <li>✨ Photoshop for the digital artist</li>
          <li>🧑🏼‍💻 Custom Written CSS Animations</li>
        </ul>

        <p className="groovy-title">
          Digital art has been around for decades — long before AI — and it’s a
          real, soulful art form made by actual humans with actual vibes.
        </p>
      </main>

      {/* CONTACT ASIDE */}
      <aside className="contact-aside relative">
        <span className="absolute bottom-[-3.5rem] right-4 z-50">
          <BatSignal />
        </span>
      </aside>

      {/* FOOTER */}
      {/* FOOTER */}
      <footer className="badge relative m-auto mb-4 mt-4 w-fit whitespace-nowrap text-amber-200">
        <button
          className="backToTopBtn"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <GiOldWagon size={50} />
          <span className="tooltip hidden sm:block">Back to Top</span>
        </button>
      </footer>
      <div className="absolute bottom-0 z-50"></div>
      <HippieFootprints />
    </div>
  );
};

export default LocalArtistFolder;
