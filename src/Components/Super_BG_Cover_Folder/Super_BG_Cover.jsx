import React, { useEffect, useRef } from "react";
import p5 from "p5";
import "./Super_BG_Cover.css";

const Super_BG_Cover = () => {
  const sketchRef = useRef(null);

  useEffect(() => {
    let myP5;

    const Sketch = (p) => {
      let blowers = [];
      let particles = [];
      let t = 0;
      let abstandBlowers = 120;
      let nParticles = 1000;

      class Blower {
        constructor(posx, posy) {
          this.posx = posx;
          this.posy = posy;
          this.direction = 0;
        }

        update() {
          p.push();
          p.translate(this.posx, this.posy);
          this.direction =
            p.noise(
              this.posx / abstandBlowers,
              this.posy / abstandBlowers,
              p.frameCount / 200
            ) * 360;
          p.rotate(this.direction);
          p.pop();
        }
      }

      class Particle {
        constructor(posx, posy) {
          this.posX = posx;
          this.posY = posy;
          this.nextBlower = 0;
          this.speed = 2;
          this.speedX = 0;
          this.speedY = 0;
          this.rotation = 0;

          // chartreuse base color
          this.hue = 30; 
        }

        update() {
          let shortestDist = Infinity;

          for (let i = blowers.length - 1; i >= 0; i--) {
            let distance = p.dist(
              this.posX,
              this.posY,
              blowers[i].posx,
              blowers[i].posy
            );

            if (distance < shortestDist) {
              shortestDist = distance;
              this.nextBlower = blowers[i];
              this.rotation = p.lerp(
                this.rotation,
                this.nextBlower.direction + 90,
                0.4
              );
            }
          }

          this.speedX = p.sin(-this.rotation) * -this.speed;
          this.speedY = p.cos(-this.rotation) * -this.speed;

          this.posX += this.speedX;
          this.posY += this.speedY;

          if (this.posX < -10) this.posX = p.width;
          if (this.posX > p.width + 10) this.posX = 0;
          if (this.posY < -10) this.posY = p.height;
          if (this.posY > p.height + 10) this.posY = 0;

          p.noStroke();

          // slight hue wobble for organic feel
          this.hue = p.lerp(this.hue, 30 + p.sin(this.posX * 0.01) * 5, 0.05);

          // chartreuse fill
          p.fill(this.hue, 100, 100);

          p.circle(this.posX, this.posY, 10);
        }
      }

      p.setup = () => {
        p.angleMode(p.DEGREES);
        p.colorMode(p.HSB, 100);

        p.createCanvas(
          document.documentElement.clientWidth,
          document.documentElement.clientHeight
        );

        p.background(0);

        for (let j = 0; j < p.height / abstandBlowers; j++) {
          for (let i = 0; i < p.width / abstandBlowers; i++) {
            let posx = i * abstandBlowers + abstandBlowers / 2;
            let posy = j * abstandBlowers + abstandBlowers / 2;
            blowers.push(new Blower(posx, posy));
          }
        }

        for (let i = 0; i < nParticles; i++) {
          let posx = p.random(p.width);
          let posy = p.random(p.height);
          particles.push(new Particle(posx, posy));
        }
      };

      p.draw = () => {
        p.background(0, 5);
        t += 0.01;

        for (let b of blowers) b.update(t);
        for (let prt of particles) prt.update();
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
