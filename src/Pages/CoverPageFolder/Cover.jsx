import React, { useEffect, useRef } from "react";
import p5 from "p5";
import "./Super_BG_Cover.css";

const Super_BG_Cover = () => {
  const sketchRef = useRef(null);

  useEffect(() => {
    let myP5;

    const Sketch = (p) => {
      let particles = [];

      p.setup = () => {
        p.createCanvas(p.windowWidth, p.windowHeight);
        p.noStroke();

        // create 100 soft drifting dots
        for (let i = 0; i < 100; i++) {
          particles.push({
            x: p.random(p.width),
            y: p.random(p.height),
            r: p.random(2, 4),
            dx: p.random(-0.4, 0.4),
            dy: p.random(-0.4, 0.4),
          });
        }
      };

      p.draw = () => {
        // soft fade background
        p.background(0, 0, 0, 25);

        particles.forEach((pt) => {
          pt.x += pt.dx;
          pt.y += pt.dy;

          if (pt.x < 0 || pt.x > p.width) pt.dx *= -1;
          if (pt.y < 0 || pt.y > p.height) pt.dy *= -1;

          p.fill(255, 255, 255, 180);
          p.circle(pt.x, pt.y, pt.r);

          // subtle linking lines
          particles.forEach((other) => {
            const d = p.dist(pt.x, pt.y, other.x, other.y);
            if (d < 120) {
              p.stroke(255, 255, 255, 40);
              p.line(pt.x, pt.y, other.x, other.y);
            }
          });
        });
      };

      p.windowResized = () => {
        p.resizeCanvas(p.windowWidth, p.windowHeight);
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
