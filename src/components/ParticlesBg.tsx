"use client";
import { useEffect, useRef } from "react";

export default function ParticlesBg() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight * 0.6;
    const dpr = window.devicePixelRatio || 1;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    ctx.scale(dpr, dpr);

    const PARTICLE_COUNT = 36;
    const particles = Array.from({ length: PARTICLE_COUNT }).map(() => ({
      x: Math.random() * width,
      y: Math.random() * height,
      r: Math.random() * 18 + 8,
      dx: (Math.random() - 0.5) * 0.4,
      dy: (Math.random() - 0.5) * 0.4,
      opacity: Math.random() * 0.3 + 0.2,
      color: [
        `rgba(200,16,46,0.15)`, // primary
        `rgba(0,107,84,0.12)`, // accent
        `rgba(242,169,0,0.10)` // gold
      ][Math.floor(Math.random() * 3)]
    }));

    let animationId: number;
    function animate() {
      if (!ctx) return;
      ctx.clearRect(0, 0, width, height);
      for (const p of particles) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, 2 * Math.PI);
        ctx.shadowColor = p.color;
        ctx.shadowBlur = 24;
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.opacity;
        ctx.fill();
        ctx.globalAlpha = 1;
        ctx.shadowBlur = 0;
        // Move
        p.x += p.dx;
        p.y += p.dy;
        // Bounce
        if (p.x < -p.r) p.x = width + p.r;
        if (p.x > width + p.r) p.x = -p.r;
        if (p.y < -p.r) p.y = height + p.r;
        if (p.y > height + p.r) p.y = -p.r;
      }
      animationId = requestAnimationFrame(animate);
    }
    animate();

    function handleResize() {
      if (!canvas || !ctx) return;
      width = window.innerWidth;
      height = window.innerHeight * 0.6;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
    }
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-0"
      style={{
        width: "100%",
        height: "100%",
        display: "block",
        opacity: 0.5,
      }}
      aria-hidden="true"
    />
  );
} 