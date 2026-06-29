"use client";

import { motion, AnimatePresence, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useState, useCallback } from "react";
import { ChevronDown, Sparkles } from "lucide-react";
import { useLanguage } from "@/lib/portfolio/language-context";

interface SwordIntroProps {
  onComplete: () => void;
}

export default function SwordIntro({ onComplete }: SwordIntroProps) {
  const { t } = useLanguage();
  const [phase, setPhase] = useState<
    "idle" | "drawing" | "revealed" | "exiting"
  >("idle");
  const [particles, setParticles] = useState<
    { id: number; x: number; y: number; tx: number; delay: number }[]
  >([]);

  // ---- particle generation when blade is drawn ----
  useEffect(() => {
    if (phase !== "drawing") return;
    const arr = Array.from({ length: 36 }, (_, i) => ({
      id: i,
      x: 50 + (Math.random() - 0.5) * 30,
      y: 50,
      tx: (Math.random() - 0.5) * 400,
      delay: Math.random() * 0.6,
    }));
    setParticles(arr);
  }, [phase]);

  // ---- auto-start after mount ----
  useEffect(() => {
    const t1 = setTimeout(() => setPhase("drawing"), 800);
    const t2 = setTimeout(() => setPhase("revealed"), 2800);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  const handleEnter = useCallback(() => {
    setPhase("exiting");
    setTimeout(() => onComplete(), 900);
  }, [onComplete]);

  // Auto-scroll/exit after revealed for a moment
  useEffect(() => {
    if (phase !== "revealed") return;
    const t = setTimeout(() => {
      // wait for user click, but auto-advance after 6s if no interaction
    }, 6000);
    return () => clearTimeout(t);
  }, [phase]);

  return (
    <AnimatePresence>
      {phase !== "exiting" && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center overflow-hidden"
          style={{ background: "var(--neo-bg)" }}
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05, filter: "blur(20px)" }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          {/* Ambient gradient blobs */}
          <div
            className="absolute -top-32 -left-32 w-96 h-96 rounded-full blur-3xl opacity-30 animate-float-slow"
            style={{
              background:
                "radial-gradient(circle, var(--neo-accent), transparent 70%)",
            }}
          />
          <div
            className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full blur-3xl opacity-30 animate-float"
            style={{
              background:
                "radial-gradient(circle, var(--neo-accent-2), transparent 70%)",
              animationDelay: "2s",
            }}
          />

          {/* Hint text above */}
          <motion.div
            className="absolute top-[18%] left-1/2 -translate-x-1/2 text-center px-4"
            initial={{ opacity: 0, y: -20 }}
            animate={
              phase === "idle" || phase === "drawing"
                ? { opacity: 1, y: 0 }
                : { opacity: 0, y: -20 }
            }
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs tracking-[0.4em] uppercase text-muted-c font-medium">
              {t.intro.forgingLegacy}
            </p>
          </motion.div>

          {/* The Sword Stage */}
          <div
            className="relative flex items-center justify-center"
            style={{ width: "min(420px, 90vw)", height: "min(420px, 70vh)" }}
          >
            {/* Glow circle behind */}
            <motion.div
              className="absolute inset-0 rounded-full blur-2xl"
              initial={{ opacity: 0, scale: 0.6 }}
              animate={
                phase === "drawing" || phase === "revealed"
                  ? { opacity: 0.6, scale: 1.1 }
                  : { opacity: 0, scale: 0.6 }
              }
              transition={{ duration: 1 }}
              style={{
                background:
                  "radial-gradient(circle, var(--neo-glow), transparent 70%)",
              }}
            />

            {/* Particles */}
            {(phase === "drawing" || phase === "revealed") &&
              particles.map((p) => (
                <motion.div
                  key={p.id}
                  className="absolute w-1.5 h-1.5 rounded-full pointer-events-none"
                  style={{
                    left: `${p.x}%`,
                    top: `${p.y}%`,
                    background:
                      p.id % 2 === 0
                        ? "var(--neo-accent-2)"
                        : "var(--neo-accent)",
                  }}
                  initial={{ opacity: 1, scale: 1, x: 0, y: 0 }}
                  animate={{
                    opacity: 0,
                    scale: 0,
                    x: p.tx,
                    y: -150 - Math.random() * 100,
                  }}
                  transition={{ duration: 1.2, delay: p.delay, ease: "easeOut" }}
                />
              ))}

            {/* The Sheath + Sword (CSS/SVG based) */}
            <div className="relative" style={{ width: 220, height: 420 }}>
              {/* Sheath (scabbard) */}
              <motion.div
                className="absolute left-1/2 -translate-x-1/2"
                style={{ bottom: 0, width: 90, height: 280, zIndex: 2 }}
                initial={{ y: 60, opacity: 0, rotate: -8 }}
                animate={{
                  y: phase === "idle" ? 60 : 0,
                  opacity: 1,
                  rotate:
                    phase === "drawing"
                      ? -20
                      : phase === "revealed"
                      ? -30
                      : -8,
                  x: phase === "revealed" ? -50 : 0,
                }}
                transition={{ duration: 1, ease: "easeOut" }}
              >
                <Sheath />
              </motion.div>

              {/* The Sword - rises out of the sheath */}
              <motion.div
                className="absolute left-1/2 -translate-x-1/2"
                style={{
                  bottom: 60,
                  width: 60,
                  height: 360,
                  zIndex: 3,
                  transformOrigin: "bottom center",
                }}
                initial={{ y: 200, opacity: 0, rotate: -8 }}
                animate={{
                  y: phase === "idle" ? 200 : phase === "drawing" ? 0 : -40,
                  opacity: 1,
                  rotate:
                    phase === "drawing"
                      ? -10
                      : phase === "revealed"
                      ? -30
                      : -8,
                  x: phase === "revealed" ? 40 : 0,
                }}
                transition={{
                  duration: phase === "drawing" ? 1.2 : 0.8,
                  ease: phase === "drawing" ? [0.16, 1, 0.3, 1] : "easeOut",
                }}
              >
                <Sword />
              </motion.div>

              {/* Light sweep on blade */}
              {phase === "drawing" && (
                <motion.div
                  className="absolute left-1/2 -translate-x-1/2 pointer-events-none"
                  style={{
                    top: 0,
                    width: 80,
                    height: 360,
                    background:
                      "linear-gradient(180deg, transparent, rgba(255,255,255,0.9), transparent)",
                    zIndex: 4,
                    filter: "blur(2px)",
                  }}
                  initial={{ y: 200, opacity: 0 }}
                  animate={{ y: -40, opacity: [0, 1, 0] }}
                  transition={{ duration: 1.2, ease: "easeInOut" }}
                />
              )}

              {/* Ground shadow */}
              <motion.div
                className="absolute left-1/2 -translate-x-1/2 rounded-full"
                style={{
                  bottom: -10,
                  width: 120,
                  height: 18,
                  background: "var(--neo-dark)",
                  filter: "blur(8px)",
                  zIndex: 1,
                }}
                initial={{ opacity: 0.3, scaleX: 0.6 }}
                animate={{
                  opacity: phase === "revealed" ? 0.5 : 0.3,
                  scaleX: phase === "drawing" ? 1.1 : 1,
                }}
                transition={{ duration: 0.8 }}
              />
            </div>
          </div>

          {/* Title below */}
          <motion.div
            className="absolute bottom-[14%] left-1/2 -translate-x-1/2 text-center px-4 w-full"
            initial={{ opacity: 0, y: 30 }}
            animate={
              phase === "revealed"
                ? { opacity: 1, y: 0 }
                : { opacity: 0, y: 30 }
            }
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h1
              className="text-4xl sm:text-6xl font-black tracking-tight mb-3"
              style={{ color: "var(--neo-text)" }}
            >
              HAFIZUL{" "}
              <span className="text-gradient-accent">HANIF</span>
            </h1>
            <p
              className="text-xs sm:text-sm tracking-[0.35em] uppercase mb-6"
              style={{ color: "var(--neo-text-muted)" }}
            >
              {t.intro.subtitle}
            </p>
            <motion.button
              onClick={handleEnter}
              className="neo neo-hover neo-press px-7 py-3 inline-flex items-center gap-2 font-medium text-sm group cursor-pointer"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
            >
              <Sparkles className="w-4 h-4 text-accent-c" />
              <span>{t.intro.cta}</span>
              <ChevronDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
            </motion.button>
          </motion.div>

          {/* Skip button */}
          <motion.button
            onClick={handleEnter}
            className="absolute top-6 right-6 neo-sm px-4 py-2 text-xs font-medium neo-hover"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
          >
            {t.intro.skip}
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// ============== SHEATH (Sarung Pedang) ==============
function Sheath() {
  return (
    <svg
      viewBox="0 0 90 280"
      width="100%"
      height="100%"
      style={{ filter: "drop-shadow(4px 6px 8px var(--neo-dark))" }}
    >
      <defs>
        <linearGradient id="sheathBody" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#3a2a1a" />
          <stop offset="30%" stopColor="#7a4a2a" />
          <stop offset="50%" stopColor="#a85a30" />
          <stop offset="70%" stopColor="#7a4a2a" />
          <stop offset="100%" stopColor="#3a2a1a" />
        </linearGradient>
        <linearGradient id="sheathGold" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#8a6a20" />
          <stop offset="50%" stopColor="#ffd166" />
          <stop offset="100%" stopColor="#8a6a20" />
        </linearGradient>
        <linearGradient id="sheathAccent" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="var(--neo-accent)" />
          <stop offset="100%" stopColor="var(--neo-accent-2)" />
        </linearGradient>
      </defs>

      {/* Top opening (mouth of sheath) */}
      <ellipse cx="45" cy="14" rx="38" ry="8" fill="#1a0a05" />
      <ellipse cx="45" cy="12" rx="36" ry="6" fill="url(#sheathGold)" />

      {/* Body */}
      <path
        d="M 9 14 Q 9 12, 14 12 L 76 12 Q 81 12, 81 14 L 81 250 Q 81 270, 45 270 Q 9 270, 9 250 Z"
        fill="url(#sheathBody)"
      />

      {/* Highlight strip */}
      <path
        d="M 20 16 L 20 250 Q 20 260, 30 262"
        stroke="rgba(255,200,150,0.4)"
        strokeWidth="2"
        fill="none"
      />

      {/* Gold bands */}
      <rect x="6" y="60" width="78" height="6" fill="url(#sheathGold)" />
      <rect x="6" y="120" width="78" height="6" fill="url(#sheathGold)" />
      <rect x="6" y="180" width="78" height="6" fill="url(#sheathGold)" />

      {/* Diamond ornaments between bands */}
      {[40, 100, 160, 220].map((y, i) => (
        <g key={i}>
          <path
            d={`M 45 ${y} L 55 ${y + 8} L 45 ${y + 16} L 35 ${y + 8} Z`}
            fill="url(#sheathAccent)"
            opacity="0.9"
          />
          <circle cx="45" cy={y + 8} r="2.5" fill="#fff8e0" />
        </g>
      ))}

      {/* Tip cap */}
      <path
        d="M 9 250 Q 9 270, 45 274 Q 81 270, 81 250 L 81 252 Q 81 274, 45 278 Q 9 274, 9 252 Z"
        fill="url(#sheathGold)"
      />
    </svg>
  );
}

// ============== SWORD ==============
function Sword() {
  return (
    <svg
      viewBox="0 0 60 360"
      width="100%"
      height="100%"
      style={{ filter: "drop-shadow(0 6px 10px var(--neo-dark))" }}
    >
      <defs>
        <linearGradient id="bladeGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#7a7a8a" />
          <stop offset="20%" stopColor="#d8d8e8" />
          <stop offset="50%" stopColor="#ffffff" />
          <stop offset="80%" stopColor="#d8d8e8" />
          <stop offset="100%" stopColor="#7a7a8a" />
        </linearGradient>
        <linearGradient id="bladeEdge" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#a8a8b8" />
        </linearGradient>
        <linearGradient id="guardGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ffd166" />
          <stop offset="50%" stopColor="#c8941a" />
          <stop offset="100%" stopColor="#8a6a20" />
        </linearGradient>
        <linearGradient id="handleGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#3a2a1a" />
          <stop offset="50%" stopColor="#5a3a2a" />
          <stop offset="100%" stopColor="#3a2a1a" />
        </linearGradient>
        <linearGradient id="pommelGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#ffd166" />
          <stop offset="100%" stopColor="#8a6a20" />
        </linearGradient>
      </defs>

      {/* Pommel (bottom) */}
      <circle cx="30" cy="345" r="11" fill="url(#pommelGrad)" />
      <circle cx="30" cy="345" r="6" fill="#fff8e0" opacity="0.4" />

      {/* Handle */}
      <rect x="24" y="295" width="12" height="50" fill="url(#handleGrad)" />
      {/* Handle wraps */}
      {[300, 310, 320, 330, 340].map((y, i) => (
        <path
          key={i}
          d={`M 23 ${y} Q 30 ${y + 3}, 37 ${y}`}
          stroke="#1a0a05"
          strokeWidth="1.5"
          fill="none"
          opacity="0.6"
        />
      ))}

      {/* Guard (crosspiece) */}
      <path
        d="M 5 290 L 55 290 L 55 300 Q 55 305, 50 305 L 10 305 Q 5 305, 5 300 Z"
        fill="url(#guardGrad)"
      />
      <rect x="2" y="293" width="56" height="3" fill="#ffd166" opacity="0.6" />
      {/* Guard decoration */}
      <circle cx="30" cy="297" r="3" fill="var(--neo-accent)" />
      <circle cx="30" cy="297" r="1.5" fill="#fff" />

      {/* Blade */}
      <path
        d="M 24 285 L 36 285 L 36 30 L 30 5 L 24 30 Z"
        fill="url(#bladeGrad)"
        stroke="#5a5a6a"
        strokeWidth="0.5"
      />
      {/* Fuller (central groove) */}
      <path
        d="M 28 30 L 28 280 L 32 280 L 32 30 L 30 12 Z"
        fill="url(#bladeEdge)"
        opacity="0.7"
      />
      <line
        x1="30"
        y1="15"
        x2="30"
        y2="280"
        stroke="#ffffff"
        strokeWidth="0.8"
        opacity="0.9"
      />
      {/* Blade highlight */}
      <path
        d="M 25 40 L 25 280"
        stroke="#ffffff"
        strokeWidth="1.5"
        opacity="0.6"
      />

      {/* Engraving near guard */}
      <circle cx="30" cy="270" r="3" fill="var(--neo-accent)" opacity="0.8" />
      <circle cx="30" cy="270" r="1.5" fill="#fff" />

      {/* Tip glint */}
      <circle cx="30" cy="6" r="2" fill="#fff" opacity="0.9">
        <animate
          attributeName="opacity"
          values="0.4;1;0.4"
          dur="2s"
          repeatCount="indefinite"
        />
      </circle>
    </svg>
  );
}
