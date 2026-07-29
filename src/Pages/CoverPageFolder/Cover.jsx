import "./Cover.css";
import MermaidOgImage from "../../Images/StitchingStoner.Og1180x517.webp";
import Weed from "../../Components/WeedFolder/Weed.jsx";
import ContactMe from "../../Components/ContactMeFolder/ContactMe.jsx";
import ReverseButton from "../../Components/ReverseButton/ReverseButton.jsx";
import { GiYarn } from "react-icons/gi";
import { PiPersonSimpleHike } from "react-icons/pi";
import { GiFootprint } from "react-icons/gi";
import { BiSolidQuoteSingleRight } from "react-icons/bi";
import { SlDirection } from "react-icons/sl";
import { PiQuotesThin } from "react-icons/pi";

export default function LandingPage() {
  return (

<div className="relative ">
    <main className="relative h-screen overflow-auto bg-black text-neutral-100
    ">
      <ReverseButton />

      <div className="">
        <Weed />
      </div>

      {/* SINGLE SCREEN CONTENT */}
      <div className="relative z-10 flex h-fit flex-col items-center justify-center px-6 text-center
      ">
        {/* TITLE */}
        <h1 className="bg-clip-text font-EmilysCandy-Regular text-4xl font-extrabold md:text-6xl">
          <span className="stoner-cipher" data-text="The Stitching Stoner">
            The Stitching Stoner
          </span>
        </h1>

        {/* TAGLINE */}

        <p className="dreamyLanding mb-2 mt-3 max-w-md font-Itim-Regular text-lg font-bold md:text-xl">
          <span className=" ">Handcrafted Crochet</span>
          <br className="block xs:hidden" />
          <span className=" ">&nbsp;for Elevated Minds</span>
        </p>

        {/* MINI ABOUT */}

        <p className="mt-4 max-w-lg font-Itim-Regular text-sm
                      font-bold text-[#baf9ba] md:text-xl">
        

                <span className="inline-block whitespace-nowrap">
           <span className="inline-block scale-x-[-1] ">
             <PiQuotesThin />
           </span>      
                  &nbsp;Peace, Creativity, and Connection
                </span> 
                   
                <span className="inline-block whitespace-nowrap ">
                  all Woven Together&nbsp;
           <span className="inline-block">
             <PiQuotesThin />
           </span>
                </span> 
        
        </p>

        {/* FEATURED IMAGE */}
        <img
          src={MermaidOgImage}
          alt="Featured embroidered stoner art"
          className="mermaidFeaturedImage mt-6 rounded-xl border border-neutral-700 object-cover shadow-lg"
        />

        {/* CTA BUTTON — FULLY UPGRADED */}

        <div className="flex flex-row h-[3rem]  w-full items-center justify-center">
        <a
          href="https://thestitchingstoner.square.site"
          target="_blank"
          rel="noopener noreferrer"
          className="buttonWrapper mt-8 inline-block px-4 py-2"
        >
          <div className="flex items-center justify-center gap-4  px-1 ">
            <span className="inline-block text-[#eece6c]">
              <PiPersonSimpleHike size={22} />
            </span>

            <span className="inline-block font-Itim-Regular text-xl text-[#eece6c]">
              <SlDirection   size={18}/>
           
            </span>
              
            <span className="inline-block scale-x-[-1] text-[#eece6c]">
              <GiYarn size={20} />
            </span>
          </div>
        </a>
        
        </div>
      </div>

      
    </main>
        <div className="absolute right-4 bottom-4 ">
          <ContactMe />
       </div>
  </div>    
  );
}
