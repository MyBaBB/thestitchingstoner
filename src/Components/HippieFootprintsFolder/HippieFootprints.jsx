import "./HippieFootprints.css";
import { GiFootprint } from "react-icons/gi";
import { BsCup } from "react-icons/bs";
import { GiCorkHat } from "react-icons/gi";
import { useState, useEffect } from "react";

export default function HippieFootprints() {
  const [step, setStep] = useState(0);
  const [cupX, setCupX] = useState(0);
  const [cupSwing, setCupSwing] = useState(0);

  // footprints step every 2.5s
  useEffect(() => {
    const interval = setInterval(() => {
      setStep((prev) => prev + 1);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  // cup + hat move smoothly at EXACT footprint speed
  useEffect(() => {
    const interval = setInterval(() => {
      setCupX((prev) => prev + 0.384);
      setCupSwing((prev) => prev + 0.05);
    }, 16);
    return () => clearInterval(interval);
  }, []);
  /* SMOKE PUFF TIMER */
  useEffect(() => {
    const interval = setInterval(() => {
      setPuffs((prev) => [...prev, Date.now()]);
    }, 4000);
    return () => clearInterval(interval);
  }, []);


  const isLeft = step % 2 === 0;

  const leftPx = step * 60;
  const bottomPx = 64;

  // cup height
  const cupBottomPx = bottomPx + 40;
  const [puffs, setPuffs] = useState([]);
  // hat height (head level)
  const hatBottomPx = bottomPx + 120;

  // swinging motion (sin wave)
  const swingAngle = Math.sin(cupSwing) * 12;

  return (
    <>
      {/* FOOTPRINT */}
      <GiFootprint
        key={`fp-${step}`}
        size={50}
        className={`footprint fade-step ${isLeft ? "left-foot" : "right-foot"}`}
        style={{
          position: "fixed",
          left: `${leftPx}px`,
          bottom: `${bottomPx}px`,
          zIndex: 9998,
          pointerEvents: "none",
        }}
      />

      {/* CUP — smooth, synced motion */}
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

      {/* HAT — smooth, synced motion */}
      <GiCorkHat
        size={50}
        className="hat"
        style={{
          position: "fixed",
          left: `${cupX + -12.5}px`,   // centered above walker
          bottom: `${hatBottomPx - 35}px`,
          zIndex: 9999,
          pointerEvents: "none",
          transform: `rotate(${swingAngle / 4}deg)`, // subtle hat sway
          transformOrigin: "center bottom",
        }}
      />
      
         
      {/* SMOKE PUFFS */}
      {puffs.map((id) => (
        <div
          key={id}
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
