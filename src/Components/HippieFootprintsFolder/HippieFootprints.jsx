import { useEffect, useRef, useState } from "react";
import { GiFootprint, GiCorkHat } from "react-icons/gi";
import { BsCup } from "react-icons/bs";
import "./HippieFootprints.css";
import bgMusic from "./GarciaIntro_01.mp3";

export default function HippieFootprints() {
  const startTime = useRef(null);
  const audioRef = useRef(null);

  const [elapsed, setElapsed] = useState(0);
  const [puffs, setPuffs] = useState([]);

  const [musicOn, setMusicOn] = useState(false);
  const [volume, setVolume] = useState(0.5);

  // Handle volume changes
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  // Restart animation + music
  const restartEverything = () => {
    startTime.current = performance.now();
    setElapsed(0);
    setPuffs([]);

    if (musicOn && audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play().catch((err) => {
        console.log("Autoplay blocked:", err);
      });
    }
  };

  // Animation loop
  useEffect(() => {
    let frame;

    const tick = (t) => {
      if (!startTime.current) startTime.current = t;
      const e = (t - startTime.current) / 1000;
      setElapsed(e);
      frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, []);

  // Derived animation values
  const step = Math.floor(elapsed / 2.5);
  const isLeft = step % 2 === 0;

  const leftPx = step * 60;
  const bottomPx = 64;

  const cupX = elapsed * 24;
  const cupSwing = elapsed * 3;
  const swingAngle = Math.sin(cupSwing) * 12;

  // Smoke every 4 seconds
  useEffect(() => {
    const nextPuff = Math.floor(elapsed / 4);

    setPuffs((prev) => {
      if (prev.some((p) => p.id === nextPuff)) return prev;
      return [...prev, { id: nextPuff, uid: crypto.randomUUID() }];
    });
  }, [elapsed]);

  const cupBottomPx = bottomPx + 40;
  const hatBottomPx = bottomPx + 120;

  // Reset animation every 3 minutes
  useEffect(() => {
    const cycleDuration = 180000;

    const interval = setInterval(() => restartEverything(), cycleDuration);
    return () => clearInterval(interval);
  }, [musicOn]);

  // Toggle music
  const toggleMusic = () => {
    const newState = !musicOn;
    setMusicOn(newState);

    if (newState) {
      // Create audio ONLY when user clicks
      if (!audioRef.current) {
        audioRef.current = new Audio(bgMusic);
        audioRef.current.loop = true;
        audioRef.current.volume = volume;
      }

      audioRef.current.currentTime = 0;

      audioRef.current
        .play()
        .catch((err) => console.log("Autoplay blocked:", err));

      restartEverything();
    } else {
      audioRef.current?.pause();
    }
  };







  
  return (
    <>
      {/* FOOTPRINT */}
      <GiFootprint
        key={step}
        size={40}
        className={`footprint fade-step ${isLeft ? "left-foot" : "right-foot"}`}
        style={{
          position: "fixed",
          left: `${leftPx + 10}px`,
          bottom: `${bottomPx}px`,
          zIndex: 9998,
          pointerEvents: "none",
        }}
      />

      {/* CUP */}
      <BsCup
        size={30}
        className="cup"
        style={{
          position: "fixed",
          left: `${cupX + 70}px`,
          bottom: `${cupBottomPx}px`,
          zIndex: 9999,
          pointerEvents: "none",
          transform: `scaleX(-1) rotate(${swingAngle}deg)`,
          transformOrigin: "center bottom",
        }}
      />

      {/* HAT */}
      <GiCorkHat
        size={50}
        className="hat"
        style={{
          position: "fixed",
          left: `${cupX - 12.5}px`,
          bottom: `${hatBottomPx - 35}px`,
          zIndex: 9999,
          pointerEvents: "none",
          transform: `rotate(${swingAngle / 4}deg)`,
          transformOrigin: "center bottom",
        }}
      />

      {/* SMOKE */}
      {puffs.map((puff) => (
        <div
          key={puff.uid}
          className="smoke-puff"
          style={{
            position: "fixed",
            left: `${cupX + 35}px`,
            bottom: `${hatBottomPx + 40}px`,
            pointerEvents: "none",
            zIndex: 9999,
          }}
        />
      ))}

      {/* MUSIC CONTROL UI */}
      {/* MUSIC CONTROL UI */}
<div
  style={{
    position: "fixed",
    bottom: "20px",
    left: "20px",
    zIndex: 10000,
  
    background: "rgba(32, 20, 12, 0.55)",
   
    fontFamily: "'Courier New', monospace",
    color: "#fdf6e3",
  }}
>
  <div
    style={{
      display: "flex",
      alignItems: "center",
      gap: "10px",
      cursor: "pointer",
    }}
    onClick={toggleMusic}
  >
    <div
      style={{
        width: "34px",
        height: "34px",
        borderRadius: "50%",
        background: musicOn
          ? "radial-gradient(circle, #ffdd99 0%, #ff9933 70%)"
          : "radial-gradient(circle, #666 0%, #333 70%)",
        boxShadow: musicOn
          ? "0 0 12px #ffdd99"
          : "0 0 6px rgba(0,0,0,0.4)",
        transition: "all 0.3s ease",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginLeft: "7px",
        fontSize: "18px",
        paddingRight: "3px",
        paddingTop: "3px",
      }}
    >
      🎵
    </div>

    <span
      style={{
        fontSize: "18px",
        letterSpacing: "1px",
        textShadow: "0 0 4px rgba(255,255,255,0.4)",
      }}
    >
      {musicOn ? "Groovin’" : ""}
    </span>
  </div>

  {musicOn && (
    <div
      style={{
        marginTop: "14px",
        display: "flex",
        flexDirection: "column",
        gap: "6px",
      }}
    >
      <span
        style={{
          fontSize: "14px",
          opacity: 0.8,
          marginBottom: "4px",
        }}
      >
        Volume
      </span>

      <input
        type="range"
        min="0"
        max="1"
        step="0.01"
        value={volume}
        onChange={(e) => setVolume(Number(e.target.value))}
        style={{
          width: "140px",
          accentColor: "#ffdd99",
          filter: "drop-shadow(0 0 4px #ffdd99)",
        }}
      />
    </div>
  )}
</div>

    </>
  );
}
