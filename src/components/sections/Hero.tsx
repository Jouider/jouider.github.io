"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring } from "framer-motion";
import { ArrowDown, Linkedin, Github } from "lucide-react";
import Image from "next/image";

const WORDS = ["Product Builder", "Full Stack Developer", "Automation Engineer"];

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const [wordIndex, setWordIndex] = useState(0);

  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);
  const springX = useSpring(cursorX, { damping: 25, stiffness: 150 });
  const springY = useSpring(cursorY, { damping: 25, stiffness: 150 });

  useEffect(() => {
    const timer = setInterval(() => {
      setWordIndex((i) => (i + 1) % WORDS.length);
    }, 2500);
    return () => clearInterval(timer);
  }, []);

  const initCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    let animId: number;
    const isMobile = window.innerWidth < 768;
    const PARTICLE_COUNT = isMobile ? 60 : 120;
    const CONNECTION_DIST = isMobile ? 100 : 150;

    const resize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };
    resize();
    window.addEventListener("resize", resize);

    const particles = Array.from({ length: PARTICLE_COUNT }, () => ({
      x: Math.random() * canvas.offsetWidth,
      y: Math.random() * canvas.offsetHeight,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      r: Math.random() * 2 + 1,
    }));

    const animate = () => {
      ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);
      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;

      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.offsetWidth) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.offsetHeight) p.vy *= -1;

        const dx = mx - p.x;
        const dy = my - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 200 && dist > 0) {
          p.vx += (dx / dist) * 0.015;
          p.vy += (dy / dist) * 0.015;
        }
        p.vx *= 0.999;
        p.vy *= 0.999;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(31, 75, 255, 0.3)";
        ctx.fill();
      }

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < CONNECTION_DIST) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(31, 75, 255, ${0.08 * (1 - d / CONNECTION_DIST)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      if (mx > 0 && my > 0) {
        const grd = ctx.createRadialGradient(mx, my, 0, mx, my, 150);
        grd.addColorStop(0, "rgba(31, 75, 255, 0.06)");
        grd.addColorStop(1, "rgba(31, 75, 255, 0)");
        ctx.fillStyle = grd;
        ctx.fillRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);
      }

      animId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  useEffect(() => {
    const cleanup = initCanvas();
    return cleanup;
  }, [initCanvas]);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = canvasRef.current?.getBoundingClientRect();
    if (rect) {
      mouseRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    }
  };

  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden gradient-bg-hero"
      onMouseMove={handleMouseMove}
    >
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />

      <motion.div
        className="hidden md:block fixed w-[300px] h-[300px] rounded-full pointer-events-none z-0"
        style={{
          x: springX,
          y: springY,
          translateX: "-50%",
          translateY: "-50%",
          background: "radial-gradient(circle, rgba(31,75,255,0.06) 0%, transparent 70%)",
        }}
      />

      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.15, 0.25, 0.15] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 -left-32 w-[500px] h-[500px] bg-brand/10 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute -bottom-20 -right-32 w-[400px] h-[400px] bg-accent/15 rounded-full blur-3xl"
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-24 pb-16 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <div>
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-50 border border-green-200 mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-green-700 text-sm font-medium">
                Open to new opportunities
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-5xl md:text-6xl font-extrabold tracking-tight mb-4"
            >
              <span className="gradient-text">Abdellah Jouider</span>
            </motion.h1>

            {/* Rotating subtitle */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="h-9 mb-6 flex items-center"
            >
              <AnimatePresence mode="wait">
                <motion.span
                  key={wordIndex}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="text-xl md:text-2xl font-mono text-brand font-medium"
                >
                  {WORDS[wordIndex]}
                </motion.span>
              </AnimatePresence>
            </motion.div>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-secondary text-lg md:text-xl max-w-xl mb-10 leading-relaxed"
            >
              I build tools that find your next clients.{" "}
              <span className="text-primary/80">
                From code to business — not just features.
              </span>
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap items-center gap-4 mb-12"
            >
              <a
                href="#projects"
                className="btn-gradient-accent px-7 py-3 rounded-full text-base inline-flex items-center gap-2"
              >
                View my projects
              </a>
              <a
                href="https://www.linkedin.com/in/abdellah-jouider-5a2b7821a/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gradient-brand px-6 py-3 rounded-full text-sm inline-flex items-center gap-2"
              >
                <Linkedin size={16} />
                LinkedIn
              </a>
              <a
                href="https://github.com/Jouider"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-full border border-border text-secondary hover:text-primary hover:border-brand/30 transition-all inline-flex items-center gap-2 bg-white"
              >
                <Github size={16} />
                GitHub
              </a>
            </motion.div>

            {/* Scroll indicator */}
            <motion.a
              href="#projects"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="inline-block text-secondary/40 hover:text-brand transition-colors"
            >
              <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity }}>
                <ArrowDown size={22} />
              </motion.div>
            </motion.a>
          </div>

          {/* Profile image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="hidden lg:flex justify-center items-center"
          >
            <div className="relative">
              {/* Glow ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-brand/20 to-accent/20 blur-2xl scale-110" />
              {/* Decorative ring */}
              <div className="absolute -inset-3 rounded-full border-2 border-dashed border-brand/20 animate-spin" style={{ animationDuration: "20s" }} />
              {/* Image container */}
              <div className="relative w-72 h-72 rounded-full overflow-hidden border-4 border-white shadow-2xl shadow-brand/10">
                <Image
                  src="/profile.jpg"
                  alt="Abdellah Jouider"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              {/* Floating badge */}
              <motion.div
                animate={{ y: [-4, 4, -4] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-2 -right-2 bg-white border border-border rounded-2xl px-4 py-2 shadow-lg"
              >
                <span className="text-sm font-semibold text-primary">Full Stack Dev</span>
                <div className="flex gap-1 mt-0.5">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="w-1.5 h-1.5 rounded-full bg-accent" />
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
