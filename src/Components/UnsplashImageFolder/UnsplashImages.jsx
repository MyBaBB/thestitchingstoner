import React from "react";
import WhiteVan from "../UnsplashImageFolder/bwVan1820x1080.webp";
const hippieImages = [
  {
    src: WhiteVan,
    alt: "White Van",
  },
];

const randomImage =
  hippieImages[Math.floor(Math.random() * hippieImages.length)];

function LocalArtistFolder() {
  return (
    <div
      className="local-artist-wrapper"
      style={{
        position: "fixed",
        width: "100%",
        height: "100%",
        backgroundImage: `url(${randomImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        zIndex: 99999999,
      }}
    >
      {/* your content goes here */}
    </div>
  );
}

export default LocalArtistFolder;
