import React, { useEffect, useRef } from "react";
import p5 from "p5";
import "./Super-Sample-BG-1.css";

const Super_BG_Cover = () => {
  const sketchRef = useRef(null);

  useEffect(() => {
    let myP5;

    const Sketch = (p) => {
      let particles = [];
      const num = 1500;
      const noiseScale = 0.01;

      p.setup = () => {
        p.createCanvas(
          document.documentElement.clientWidth,
          document.documentElement.clientHeight
        );

        // DARK PURPLE BACKGROUND
        p.background(40, 0, 60); 
        p.stroke(255);

        for (let i = 0; i < num; i++) {
          particles.push(
            p.createVector(
              p.random(p.width),
              p.random(p.height)
            )
          );
        }
      };

      p.draw = () => {
        // DARK PURPLE FADE
        p.background(40, 0, 60, 10);

        for (let i = 0; i < num; i++) {
          let pt = particles[i];

          // ORIGINAL COLOR EFFECTS — unchanged
          let r = p.map(pt.x, 0, p.width, 50, 255);
          let g = p.map(pt.y, 0, p.height, 50, 255);
          let b = p.map(pt.x, 0, p.width, 255, 50);

          p.stroke(r, g, b);
          p.point(pt.x, pt.y);

          let n = p.noise(pt.x * noiseScale, pt.y * noiseScale);
          let angle = p.TAU * n;

          pt.x += p.cos(angle);
          pt.y += p.sin(angle);

          if (pt.x < 0 || pt.x > p.width || pt.y < 0 || pt.y > p.height) {
            pt.x = p.random(p.width);
            pt.y = p.random(p.height);
          }
        }
      };

      p.windowResized = () => {
        p.resizeCanvas(
          document.documentElement.clientWidth,
          document.documentElement.clientHeight
        );
      };
    };

    myP5 = new p5(Sketch, sketchRef.current);

    return () => {
      myP5.remove();
    };
  }, []);

  return <div className="super-bg-cover" ref={sketchRef}></div>;
};

export default Super_BG_Cover;
