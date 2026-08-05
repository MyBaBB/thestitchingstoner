import { useEffect, useRef, useState } from "react";
import { GiFootprint, GiCorkHat } from "react-icons/gi";
import { BsCup } from "react-icons/bs";
import "./HippieFootprints.css";

export default function HippieFootprints() {
  const startTime = useRef(null);
  const [elapsed, setElapsed] = useState(0);
  const [puffs, setPuffs] = useState([]);

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
  const step = Math.floor(elapsed / 2.5); // every 2.5s
  const isLeft = step % 2 === 0;

  const leftPx = step * 60;
  const bottomPx = 64;

  // EXACT walker speed: 24px/sec
  const cupX = elapsed * 24;

  // Swing frequency stays the same
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

  // Reset the animation every 7.5 seconds (2.5s cycle + 5s pause)
  useEffect(() => {
    const cycleDuration = 180000; // ms

    const interval = setInterval(() => {
      startTime.current = performance.now(); // reset animation clock
      setPuffs([]); // clear smoke puffs
    }, cycleDuration);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <GiFootprint
        key={step} // keep this so each footprint fades separately
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
    </>
  );
}
