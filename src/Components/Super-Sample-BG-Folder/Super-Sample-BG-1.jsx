import React, { useEffect, useRef } from "react";
import p5 from "p5";
import "./Super-Sample-BG-1.css";

const Super_BG_Cover = () => {
  const sketchRef = useRef(null);

  useEffect(() => {
    let myP5;

    const Sketch = (p) => {
      let threads = [];
      const num = 40;            // fewer threads, more elegance
      const noiseScale = 0.003;

      p.setup = () => {
        p.createCanvas(
          document.documentElement.clientWidth,
          document.documentElement.clientHeight
        );

        p.background(120, 0, 112);


        for (let i = 0; i < num; i++) {
          threads.push({
            x: p.random(p.width),
            y: p.random(p.height),

            speed: p.random(0.4, 1.4),
            offset: p.random(1000),
            wobble: p.random(0.02, 0.08),

            // VERY long threads
            length: p.random(180, 360),

            // curve randomness
            curveAmp: p.random(20, 60),

            weight: p.random(1.2, 2.8),
          });
        }
      };

      p.draw = () => {
        p.background(40, 0, 60, 12);

        for (let t of threads) {
          let n = p.noise(t.x * noiseScale, t.y * noiseScale, t.offset);
          let angle = n * p.TWO_PI;

          // organic hippie wobble
          angle += p.sin(p.frameCount * 0.01) * t.wobble;

          // move head
          t.x += p.cos(angle) * t.speed;
          t.y += p.sin(angle) * t.speed;

          // wrap edges
          if (t.x < 0) t.x = p.width;
          if (t.x > p.width) t.x = 0;
          if (t.y < 0) t.y = p.height;
          if (t.y > p.height) t.y = 0;

          // hippie crochet colors (no red)
          let g = p.map(n, 0, 1, 180, 255);
          let b = p.map(n, 0, 1, 160, 255);
          let r = 0;

          p.stroke(r, g, b, 220);
          p.strokeWeight(t.weight);
          p.noFill();

          // CURVED THREAD — Bezier curve
          let endX = t.x - p.cos(angle) * t.length;
          let endY = t.y - p.sin(angle) * t.length;

          let controlX = t.x + p.sin(angle) * t.curveAmp;
          let controlY = t.y - p.cos(angle) * t.curveAmp;

          p.bezier(
            t.x, t.y,
            controlX, controlY,
            controlX, controlY,
            endX, endY
          );
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
