import "./Cover.css";
import MermaidOgImage from "../../Images/StitchingStoner.Og1180x517.webp";
import Weed from "../../Components/WeedFolder/Weed.jsx";
import ContactMe from "../../Components/ContactMeFolder/ContactMe.jsx";
import { GiYarn } from "react-icons/gi";
import { PiPersonSimpleHike } from "react-icons/pi";

export default function LandingPage() {
  return (
    <main className="bg-black text-neutral-100 h-screen relative overflow-auto">
      
      <div className="">
        <Weed />
      </div>

      {/* SINGLE SCREEN CONTENT */}
      <div className="relative z-10 h-fit flex flex-col items-center justify-center text-center px-6">

        {/* TITLE */}
        <h1 className="font-Iceberg-Regular text-4xl md:text-6xl font-extrabold 
                       bg-clip-text text-[#5bba76]/80">
          <span className="stoner-cipher" data-text="The Stitching Stoner">
              The Stitching Stoner
          </span>
        </h1>

        {/* TAGLINE */}
        <p className="font-Iceberg-Regular mt-3 text-lg md:text-xl font-bold max-w-md text-white">
          Handcrafted Embroidery for elevated minds.
        </p>

        {/* MINI ABOUT */}
        <p className="font-Iceberg-Regular mt-4 text-sm md:text-base font-bold max-w-lg text-white">
          Psychedelic embroidery, custom patches, and handmade textile art —
          stitched with intention for creators, dreamers, and chill souls.
        </p>

        {/* FEATURED IMAGE */}
        <img
          src={MermaidOgImage}
          alt="Featured embroidered stoner art"
          className="mermaidFeaturedImage mt-6 object-cover rounded-xl shadow-lg border border-neutral-700"
        />

        {/* CTA BUTTON — FULLY UPGRADED */}
        <a
          href="https://thestitchingstoner.square.site"
          target="_blank"
          rel="noopener noreferrer"
          className="buttonWrapper
            font-Iceberg-Regular mt-8
                              /* Forest Sign Brown */
            text-[#F8D97A]                    /* Brighter Forest Yellow */
         font-bold
            px-4 py-2
           shadow-inner shadow-[#2E5A2C]/40
           
            inline-block
            
          "
        >
          <div className="  flex items-center justify-center gap-3 px-1
     ">
            <span className="inline-block text-[#F8D97A]">
              <PiPersonSimpleHike size={22} />
            </span>

            <span className="inline-block text-[#f8e098]">
              <u className="decoration-[#332319]  shadow-xl">Score Here</u>
            </span>

            <span className="inline-block scale-x-[-1] text-[#F8D97A]">
              
              <GiYarn size={20} />
            </span>
          </div>
        </a>

        <div className="absolute -bottom-4 right-4">
          <ContactMe />
        </div>
      </div>
    </main>
  );
}
