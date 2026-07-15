import "./Cover.css";
import MermaidOgImage from "../../Images/StitchingStoner.Og1180x517.webp";
export default function LandingPage() {
  return (
    <main className="bg-neutral-900 text-neutral-100 h-screen overflow-hidden relative">

      {/* SINGLE SCREEN CONTENT */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">

        {/* TITLE */}
        <h1 className="text-4xl md:text-6xl font-black stoner-gradient bg-clip-text text-transparent">
          The Stitching Stoner
        </h1>

        {/* TAGLINE */}
        <p className="mt-3 text-lg md:text-xl opacity-90 max-w-md">
          Handcrafted embroidery for elevated minds.
        </p>

        {/* MINI ABOUT */}
        <p className="mt-4 text-sm md:text-base opacity-70 max-w-lg">
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
          className="mt-8 px-8 py-3 rounded-full bg-neutral-100 text-neutral-900 font-bold hover:bg-neutral-300 transition"
        >
          Visit the Shop
        </a>
      </div>
    </main>
  );
}
