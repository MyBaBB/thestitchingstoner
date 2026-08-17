import React, { useEffect, useRef } from "react";

const Super_BG_Cover = () => {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let t = 0;

    const draw = () => {
      const w = canvas.width;
      const h = canvas.height;

      // Slight fade for motion trails
      ctx.fillStyle = "rgba(0,0,0,0.15)";
      ctx.fillRect(0, 0, w, h);

      const cell = 12; // grid size

      for (let y = 0; y < h; y += cell) {
        for (let x = 0; x < w; x += cell) {
          // Psycho rainbow color
          const r = 128 + Math.sin((x + t) * 0.01) * 127;
          const g = 128 + Math.sin((y + t) * 0.015) * 127;
          const b = 128 + Math.sin((x + y + t) * 0.02) * 127;

          ctx.fillStyle = `rgb(${r},${g},${b})`;

          // Wavy distortion
          const offsetX = Math.sin((y * 0.03) + t * 0.02) * 10;
          const offsetY = Math.cos((x * 0.03) + t * 0.02) * 10;

          ctx.fillRect(x + offsetX, y + offsetY, cell, cell);
        }
      }

      t += 1.5;
      animationRef.current = requestAnimationFrame(draw);
    };

    draw();

    const handleResize = () => {
      cancelAnimationFrame(animationRef.current);
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      draw();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationRef.current);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: -1,
      }}
    />
  );
};

export default Super_BG_Cover;
