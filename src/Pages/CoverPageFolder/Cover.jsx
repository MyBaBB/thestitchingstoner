import "./Cover.css";

export default function LandingPage() {
  return (
    <main className="bg-neutral-900 text-neutral-100">

      {/* SMOKE BACKGROUND */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden opacity-40" aria-hidden="true">
        <div className="smoke"></div>
        <div className="smoke delay-1"></div>
        <div className="smoke delay-2"></div>
      </div>

      {/* HERO */}
      <header
        role="banner"
        className="relative h-[90vh] flex items-center justify-center text-center overflow-hidden"
      >
        <img
          src="https://picsum.photos/1600/900?blur=3"
          alt="Psychedelic smoke background representing stoner creativity"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />

        <div className="relative z-10 px-6">
          <h1 className="text-6xl font-black tracking-tight stoner-gradient bg-clip-text text-transparent">
            The Stitching Stoner
          </h1>

          <p className="mt-4 text-xl opacity-90">
            Handcrafted embroidery for elevated minds.
          </p>

          <a
            href="https://thestitchingstoner.square.site"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-block px-8 py-3 rounded-full bg-neutral-100 text-neutral-900 font-bold hover:bg-neutral-300 transition"
          >
            Visit the Shop
          </a>
        </div>
      </header>

      {/* VIBE SECTION */}
      <section
        aria-labelledby="vibe-title"
        className="py-20 px-6 max-w-5xl mx-auto text-center"
      >
        <h2 id="vibe-title" className="text-4xl font-bold mb-6">
          High‑Vibe Textile Art & Psychedelic Embroidery
        </h2>

        <p className="opacity-80 text-lg leading-relaxed">
          Every piece is stitched with intention — blending psychedelic color palettes,
          chill stoner energy, and handmade craftsmanship. Whether you're a creator, a
          dreamer, or just vibing through life, our embroidered art is made to elevate
          your space and your style.
        </p>
      </section>

      {/* FEATURED PATCHES */}
      <section
        aria-labelledby="featured-title"
        className="py-20 px-6 bg-neutral-800"
      >
        <h2 id="featured-title" className="text-4xl font-bold text-center mb-12">
          Featured Embroidered Stoner Drops
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {[
            "https://picsum.photos/500?random=1",
            "https://picsum.photos/500?random=2",
            "https://picsum.photos/500?random=3",
            "https://picsum.photos/500?random=4",
            "https://picsum.photos/500?random=5",
            "https://picsum.photos/500?random=6",
          ].map((img, i) => (
            <article
              key={i}
              className="rounded-xl overflow-hidden shadow-lg bg-neutral-900 border border-neutral-700"
            >
              <img
                src={img}
                alt={`Handmade embroidered stoner patch number ${i + 1}`}
                className="w-full h-64 object-cover"
              />

              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">
                  Stoner Patch #{i + 1}
                </h3>

                <p className="opacity-70 text-sm">
                  A trippy embroidered piece crafted for chill minds and creative souls.
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section
        aria-labelledby="about-title"
        className="py-20 px-6 max-w-5xl mx-auto"
      >
        <h2 id="about-title" className="text-4xl font-bold mb-6 text-center">
          Made With Intention — Handmade Stoner Art
        </h2>

        <div className="flex flex-col lg:flex-row gap-10 items-center">
          <img
            src="https://picsum.photos/600/600?random=7"
            alt="Handcrafted embroidery artwork with psychedelic stoner aesthetic"
            className="rounded-xl w-full lg:w-1/2 object-cover shadow-xl"
          />

          <p className="opacity-80 text-lg leading-relaxed lg:w-1/2">
            The Stitching Stoner blends craftsmanship with creativity — embroidered art,
            custom patches, and apparel made with intention. Every piece is designed to
            feel personal, expressive, and elevated. Whether you're chilling, creating,
            or exploring, our work is here to amplify your vibe.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section
        aria-labelledby="cta-title"
        className="py-24 text-center bg-neutral-800"
      >
        <h2 id="cta-title" className="text-4xl font-bold mb-4">
          Stay Lifted. Stay Inspired.
        </h2>

        <p className="opacity-80 mb-10 text-lg">
          New embroidered drops coming soon.
        </p>

        <a
          href="https://thestitchingstoner.square.site"
          target="_blank"
          rel="noopener noreferrer"
          className="px-10 py-4 rounded-full bg-neutral-100 text-neutral-900 font-bold hover:bg-neutral-300 transition"
        >
          Visit the Shop
        </a>
      </section>

    </main>
  );
}
