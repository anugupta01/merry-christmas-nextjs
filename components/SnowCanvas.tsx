"use client";

import { useEffect, useRef } from "react";

export default function SnowCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = 0;
    let height = 0;

    interface Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      color: string;
    }

    const particles: Particle[] = [];

    const makeParticle = (): Particle => {
      const alpha = Math.random();
      return {
        x: Math.random() * width,
        y: Math.random() * height,
        vx: Math.random() * 1.3,
        vy: Math.random() * 1.2,
        radius: Math.random() * 3 + 2,
        color: `rgba(255,255,255,${alpha})`,
      };
    };

    const resize = () => {
      // Match the original: canvas covers ~65% x 73% of the viewport.
      width = window.innerWidth * 0.65;
      height = window.innerHeight * 0.73;
      canvas.width = width;
      canvas.height = height;
    };

    resize();

    // Seed 190 particles, same count as the original.
    for (let i = 0; i < 190; i++) particles.push(makeParticle());

    let rafId = 0;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (const p of particles) {
        ctx.beginPath();
        ctx.fillStyle = p.color;
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2, false);
        ctx.fill();

        p.x += p.vx;
        p.y += p.vy;

        // Wrap around the edges (uses viewport bounds, as the original did).
        const w = window.innerWidth;
        const h = window.innerHeight;
        if (p.x < -50) p.x = w + 50;
        if (p.y < -50) p.y = h + 50;
        if (p.x > w + 50) p.x = -50;
        if (p.y > h + 50) p.y = -50;
      }
      rafId = requestAnimationFrame(draw);
    };
    rafId = requestAnimationFrame(draw);

    window.addEventListener("resize", resize);
    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed left-[16%] top-0 z-[2] bg-transparent"
    />
  );
}
