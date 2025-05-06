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

    const PARTICLE_COUNT = 50;
    const particles = Array.from({ length: PARTICLE_COUNT }).map(() => ({
      x: Math.random() * width,
      y: Math.random() * height,
      r: Math.random() * 15 + 5,
      dx: (Math.random() - 0.5) * 0.6,
      dy: (Math.random() - 0.5) * 0.6,
      opacity: Math.random() * 0.4 + 0.1,
      pulseSpeed: Math.random() * 0.02 + 0.01,
      pulsePhase: Math.random() * Math.PI * 2,
      color: [
        `rgba(200,16,46,0.2)`,
        `rgba(0,107,84,0.15)`,
        `rgba(242,169,0,0.12)`
      ][Math.floor(Math.random() * 3)]
    }));

    let animationId: number;
    let time = 0;
    function animate() {
      if (!ctx) return;
      ctx.clearRect(0, 0, width, height);
      time += 0.016;

      for (const p of particles) {
        const pulse = Math.sin(time * p.pulseSpeed + p.pulsePhase) * 0.2 + 1;
        const currentSize = p.r * pulse;

        ctx.beginPath();
        ctx.arc(p.x, p.y, currentSize, 0, 2 * Math.PI);
        ctx.shadowColor = p.color;
        ctx.shadowBlur = 30;
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.opacity * (0.8 + pulse * 0.2);
        ctx.fill();
        ctx.globalAlpha = 1;
        ctx.shadowBlur = 0;

        p.x += p.dx;
        p.y += p.dy;

        p.dy += (Math.random() - 0.5) * 0.01;

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