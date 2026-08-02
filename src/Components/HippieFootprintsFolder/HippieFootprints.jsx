import { GiFootprint } from "react-icons/gi";
import { useState, useEffect } from "react";
import "./HippieFootprints.css";

export default function HippieFootprints() {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setStep((prev) => prev + 1);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const isLeft = step % 2 === 0;

  // movement: straight across bottom
  const leftPx = step * 60; // each step moves 60px to the right
  const bottomPx = 64; // 4rem ≈ 64px

  return (
    <GiFootprint
      key={step}
      size={50}
      className={`footprint fade-step ${isLeft ? "left-foot" : "right-foot"}`}
      style={{
        position: "fixed",
        left: `${leftPx}px`,
        bottom: `${bottomPx}px`,
        zIndex: 9999,
        pointerEvents: "none",
      }}
    />
  );
}
