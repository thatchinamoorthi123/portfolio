import React, { useEffect, useRef } from "react";

export default function CursorParticles() {
  const canvasRef = useRef(null);

  useEffect(() => {
    // Only enable on desktop pointer devices
    if (window.matchMedia && !window.matchMedia("(pointer: fine)").matches) {
      return;
    }

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let animationFrameId;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    const mouse = {
      x: -100,
      y: -100,
      targetX: -100,
      targetY: -100,
      prevX: -100,
      prevY: -100,
      vx: 0,
      vy: 0,
      speed: 0,
      active: false,
    };

    // Orbiting surrounding particles configuration
    const NUM_ORBIT_DOTS = 8;
    const orbitRadius = 22;
    const orbitDots = [];

    for (let i = 0; i < NUM_ORBIT_DOTS; i++) {
      const angle = (i / NUM_ORBIT_DOTS) * Math.PI * 2;
      orbitDots.push({
        angle,
        orbitSpeed: 0.04 + (i % 3) * 0.01,
        radius: orbitRadius + (i % 2) * 4,
        x: -100,
        y: -100,
        vx: 0,
        vy: 0,
        size: 2.5 + (i % 3) * 0.8,
        spring: 0.12 + (i % 4) * 0.03,
        friction: 0.78,
      });
    }

    // Trailing particles spawned on movement
    const trailParticles = [];
    const MAX_TRAIL = 24;

    const handleMouseMove = (e) => {
      mouse.active = true;
      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;

      // Initialize on first move
      if (mouse.x < 0) {
        mouse.x = e.clientX;
        mouse.y = e.clientY;
        orbitDots.forEach((dot) => {
          dot.x = e.clientX;
          dot.y = e.clientY;
        });
      }

      // Calculate speed
      const dx = e.clientX - mouse.prevX;
      const dy = e.clientY - mouse.prevY;
      mouse.speed = Math.sqrt(dx * dx + dy * dy);
      mouse.prevX = e.clientX;
      mouse.prevY = e.clientY;

      // Spawn small floating dust particles when moving
      if (mouse.speed > 2 && trailParticles.length < MAX_TRAIL) {
        const spread = 8;
        trailParticles.push({
          x: e.clientX + (Math.random() - 0.5) * spread,
          y: e.clientY + (Math.random() - 0.5) * spread,
          vx: (Math.random() - 0.5) * 1.5 - dx * 0.1,
          vy: (Math.random() - 0.5) * 1.5 - dy * 0.1,
          size: Math.random() * 2.5 + 1.2,
          alpha: 0.85,
          decay: Math.random() * 0.035 + 0.025,
        });
      }
    };

    const handleMouseLeave = () => {
      mouse.active = false;
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    // Animation Loop
    const render = () => {
      ctx.clearRect(0, 0, width, height);

      if (mouse.active) {
        // Smoothly interpolate mouse position
        mouse.x += (mouse.targetX - mouse.x) * 0.25;
        mouse.y += (mouse.targetY - mouse.y) * 0.25;

        // 1. Draw Central Cursor Core Dot
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, 3, 0, Math.PI * 2);
        ctx.fillStyle = "#ffffff";
        ctx.fill();

        // 2. Update and Draw Trailing Dispersing Particles
        for (let i = trailParticles.length - 1; i >= 0; i--) {
          const p = trailParticles[i];
          p.x += p.vx;
          p.y += p.vy;
          p.alpha -= p.decay;
          p.size *= 0.96;

          if (p.alpha <= 0 || p.size <= 0.4) {
            trailParticles.splice(i, 1);
            continue;
          }

          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(255, 255, 255, ${p.alpha})`;
          ctx.fill();
        }

        // 3. Update and Draw Orbiting Surrounding Dots
        orbitDots.forEach((dot) => {
          dot.angle += dot.orbitSpeed;

          // Target position orbiting around the cursor
          // Speed dynamically expands the orbit slightly
          const dynamicRadius = dot.radius + Math.min(mouse.speed * 0.35, 16);
          const targetX = mouse.x + Math.cos(dot.angle) * dynamicRadius;
          const targetY = mouse.y + Math.sin(dot.angle) * dynamicRadius;

          // Spring physics toward target
          const ax = (targetX - dot.x) * dot.spring;
          const ay = (targetY - dot.y) * dot.spring;

          dot.vx += ax;
          dot.vy += ay;
          dot.vx *= dot.friction;
          dot.vy *= dot.friction;

          dot.x += dot.vx;
          dot.y += dot.vy;

          // Draw the surrounding round dot
          ctx.beginPath();
          ctx.arc(dot.x, dot.y, dot.size, 0, Math.PI * 2);
          ctx.fillStyle = "rgba(255, 255, 255, 0.9)";
          ctx.fill();
        });
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-[99999]"
      style={{
        mixBlendMode: "difference",
      }}
    />
  );
}

