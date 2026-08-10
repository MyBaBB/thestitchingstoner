import { useEffect, useRef, useState } from "react";
import { GiFootprint, GiCorkHat } from "react-icons/gi";
import { BsCup } from "react-icons/bs";
import "./HippieFootprints.css";
import bgMusic from "./bgMusic.mp3"; // ← your music file

export default function HippieFootprints() {
  const startTime = useRef(null);
  const audioRef = useRef(null);

  const [elapsed, setElapsed] = useState(0);
  const [puffs, setPuffs] = useState([]);

  const [musicOn, setMusicOn] = useState(false);
  const [volume, setVolume] = useState(0.5);

  // Initialize audio
  useEffect(() => {
    audioRef.current = new Audio(bgMusic);
    audioRef.current.loop = true;
    audioRef.current.volume = volume;
  }, []);

  // Handle volume changes
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  // Restart animation + music when toggled ON
  const restartEverything = () => {
    startTime.current = performance.now();
    setElapsed(0);
    setPuffs([]);

    if (musicOn && audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play();
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
      restartEverything();
    } else {
      audioRef.current.pause();
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
      <div
        style={{
          position: "fixed",
          bottom: "20px",
          left: "20px",
          zIndex: 10000,
          background: "rgba(0,0,0,0.4)",
          padding: "10px 14px",
          borderRadius: "10px",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        <label style={{ cursor: "pointer" }}>
          <input
            type="checkbox"
            checked={musicOn}
            onChange={toggleMusic}
            style={{ marginRight: "8px" }}
          />
          Music
        </label>

        {musicOn && (
          <div style={{ marginTop: "10px" }}>
            <input
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={volume}
              onChange={(e) => setVolume(Number(e.target.value))}
            />
          </div>
        )}
      </div>
    </>
  );
}

 