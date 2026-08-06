import React from "react";
import "./SpecialEvent.css";

export default function SpecialEventPage() {
  return (
    <div className="specialEventPage">
      <div className="specialEventContent">
        <h1 className="specialEventTitle">
          🌼 Hookaville 62 — Special Crochet Classes 🌼
        </h1>

        <p className="specialEventParagraph">
          The Stitching Stoner is hosting a limited‑seat crochet experience at
          <span className="highlight"> Hookaville 62</span> — a dreamy,
          psychedelic, high‑vibe workshop where beginners and experts can
          stitch, chill, and connect.
          <br />
          <br />
          Seats fill fast, so make sure to{" "}
          <a
            className="specialEventLink"
            href="https://thestitchingstoner.square.site/#bottom"
          >
            <span className="highlight2">Contact Me</span>
          </a>
          and reserve your spot before the festival rush rolls in.
          <br />
          <br />
          Peace, creativity, and connection — all woven together. 🧶✨
        </p>
      </div>
    </div>
  );
}
