import { useEffect, useRef, useState } from "react";
import { GiFootprint, GiCorkHat } from "react-icons/gi";
import { BsCup } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import "./HippieFootprints.css";

export default function HippieFootprints() {
  const startTime = useRef(null);
  const [elapsed, setElapsed] = useState(0);
  const [puffs, setPuffs] = useState([]);
  const [musicOn, setMusicOn] = useState(false);

  const navigate = useNavigate();

  // Restart animation
  const restartEverything = () => {
    startTime.current = performance.now();
    setElapsed(0);
    setPuffs([]);
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
  }, []);

  // Toggle music → now acts as navigation trigger
  const toggleMusic = () => {
    const newState = !musicOn;
    setMusicOn(newState);

    if (newState) {
      restartEverything();
      navigate("/specialevent");
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
          padding: "5px 5px",
          background: "rgba(32, 20, 12, 0.55)",
          borderRadius: "8px",
          fontFamily: "'Courier New', monospace",
          color: "#fdf6e3",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
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
            {musicOn ? " Groovin’ " : ""}
          </span>
        </div>
      </div>
    </>
  );
}
