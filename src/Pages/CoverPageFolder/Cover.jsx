import "./Cover.css";
import MermaidOgImage from "../../Images/StitchingStoner.Og1180x517.webp";
import Weed from "../../Components/Weed.jsx";

export default function LandingPage() {
  return (
    <main className="bg-neutral-900 text-neutral-100 h-screen overflow-hidden relative">
          
          
          <div className="">< Weed /></div>
      
      
      
      {/* SINGLE SCREEN CONTENT */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">

        {/* TITLE */}
        <h1 className="font-Iceberg-Regular text-4xl  md:text-6xl font-extrabold    bg-clip-text text-[#E370A8]">
          The Stitching Stoner
        </h1>

        {/* TAGLINE */}
        <p className="font-Iceberg-Regular mt-3 text-lg md:text-xl font-bold   max-w-md z-10   text-white">
          Handcrafted Embroidery for elevated minds.
        </p>

        {/* MINI ABOUT */}
        <p className="font-Iceberg-Regular mt-4 text-sm md:text-base font-bold  max-w-lg text-white">
          Psychedelic embroidery, custom patches, and handmade textile art —
          stitched with intention for creators, dreamers, and chill souls.
        </p>

        {/* FEATURED IMAGE */}
        <img
          src={MermaidOgImage}
          alt="Featured embroidered stoner art"
          className="mt-6 w-[945px] h-[415px] object-cover rounded-xl shadow-lg border border-neutral-700"
        />

        {/* CTA BUTTON */}
        <a
          href="https://thestitchingstoner.square.site"
          target="_blank"
          rel="noopener noreferrer"
          className="font-Iceberg-Regular mt-8 px-8 py-3 rounded-full bg-neutral-100 text-neutral-900 font-bold
                   hover:bg-neutral-300 transition"
        >
          Visit the Shop
        </a>
      </div>
    </main>
  );
}
