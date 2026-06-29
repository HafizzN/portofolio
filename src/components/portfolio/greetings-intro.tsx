"use client";

import {
  motion,
  AnimatePresence,
  useMotionValue,
  useTransform,
  useSpring,
} from "framer-motion";
import { useEffect, useState, useRef, useCallback } from "react";
import { Sparkles, ChevronDown, Globe } from "lucide-react";
import { useLanguage } from "@/lib/portfolio/language-context";

interface GreetingsIntroProps {
  onComplete: () => void;
}

// Greetings in many languages — each with its own accent color
const GREETINGS = [
  { text: "Hello", lang: "English", color: "#c44569" },
  { text: "Salam", lang: "Indonesia", color: "#f8b500" },
  { text: "Bonjour", lang: "Français", color: "#3a6ea5" },
  { text: "Hola", lang: "Español", color: "#10b981" },
  { text: "Konnichiwa", lang: "日本語", color: "#ef4444" },
  { text: "Namaste", lang: "हिन्दी", color: "#8b5cf6" },
  { text: "Ciao", lang: "Italiano", color: "#06b6d4" },
  { text: "Annyeong", lang: "한국어", color: "#ec4899" },
  { text: "Marhaba", lang: "العربية", color: "#f59e0b" },
  { text: "Privet", lang: "Русский", color: "#84cc16" },
];

type Phase = "greetings" | "reveal" | "exiting";

// Lazy initializer for particles — runs once on first client render
function initParticles() {
  const colors = [
    "#c44569",
    "#f8b500",
    "#3a6ea5",
    "#10b981",
    "#8b5cf6",
    "#ec4899",
  ];
  return Array.from({ length: 50 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 4 + 2,
    color: colors[i % colors.length],
    delay: Math.random() * 4,
    duration: Math.random() * 6 + 6,
  }));
}

export default function GreetingsIntro({ onComplete }: GreetingsIntroProps) {
  const { t } = useLanguage();
  const [phase, setPhase] = useState<Phase>("greetings");
  const [greetingIdx, setGreetingIdx] = useState(0);
  const [particles] = useState(initParticles);

  // Mouse tilt for the central card (used in reveal phase)
  const cardRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [8, -8]), {
    stiffness: 200,
    damping: 20,
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-8, 8]), {
    stiffness: 200,
    damping: 20,
  });

  // Generate floating particles once
  // (initialized via useState lazy initializer above)

  // Cycle greetings
  useEffect(() => {
    if (phase !== "greetings") return;
    const interval = setInterval(() => {
      setGreetingIdx((prev) => {
        if (prev >= GREETINGS.length - 1) {
          clearInterval(interval);
          setTimeout(() => setPhase("reveal"), 600);
          return prev;
        }
        return prev + 1;
      });
    }, 520);
    return () => clearInterval(interval);
  }, [phase]);

  const handleEnter = useCallback(() => {
    setPhase("exiting");
    setTimeout(() => onComplete(), 900);
  }, [onComplete]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const current = GREETINGS[greetingIdx];

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
          {/* ============ Ambient gradient orbs ============ */}
          <motion.div
            className="absolute -top-32 -left-32 w-[28rem] h-[28rem] rounded-full blur-3xl opacity-30 pointer-events-none"
            animate={{
              background: phase === "greetings"
                ? `radial-gradient(circle, ${current.color}, transparent 70%)`
                : "radial-gradient(circle, var(--neo-accent), transparent 70%)",
              scale: [1, 1.15, 1],
            }}
            transition={{
              background: { duration: 0.6 },
              scale: { duration: 6, repeat: Infinity, ease: "easeInOut" },
            }}
          />
          <motion.div
            className="absolute -bottom-32 -right-32 w-[28rem] h-[28rem] rounded-full blur-3xl opacity-25 pointer-events-none"
            animate={{
              background: phase === "greetings"
                ? `radial-gradient(circle, ${GREETINGS[(greetingIdx + 3) % GREETINGS.length].color}, transparent 70%)`
                : "radial-gradient(circle, var(--neo-accent-2), transparent 70%)",
            }}
            transition={{ duration: 0.6 }}
          />

          {/* ============ Floating particles ============ */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {particles.map((p) => (
              <motion.div
                key={p.id}
                className="absolute rounded-full"
                style={{
                  left: `${p.x}%`,
                  top: `${p.y}%`,
                  width: p.size,
                  height: p.size,
                  background: p.color,
                  boxShadow: `0 0 ${p.size * 2}px ${p.color}`,
                }}
                animate={{
                  y: [0, -40, 0],
                  x: [0, p.size * 4, 0],
                  opacity: [0, 0.8, 0],
                }}
                transition={{
                  duration: p.duration,
                  delay: p.delay,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            ))}
          </div>

          {/* ============ Globe icon decoration (top) ============ */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="absolute top-[14%] left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="neo-sm w-14 h-14 rounded-2xl flex items-center justify-center"
            >
              <Globe className="w-6 h-6 text-accent-c" />
            </motion.div>
            <p className="text-[10px] tracking-[0.4em] uppercase text-muted-c font-semibold">
              {t.intro.forgingLegacy}
            </p>
          </motion.div>

          {/* ============ Main content area ============ */}
          <div className="relative z-10 flex flex-col items-center justify-center px-4 w-full">
            <AnimatePresence mode="wait">
              {phase === "greetings" ? (
                /* ---------- GREETINGS PHASE ---------- */
                <motion.div
                  key="greetings"
                  className="flex flex-col items-center text-center"
                  exit={{ opacity: 0, scale: 0.92, filter: "blur(8px)" }}
                  transition={{ duration: 0.4 }}
                >
                  {/* Greeting text */}
                  <div className="relative h-[180px] sm:h-[220px] flex items-center justify-center mb-4">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={greetingIdx}
                        initial={{ opacity: 0, y: 60, rotateX: -90, scale: 0.6 }}
                        animate={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -60, rotateX: 90, scale: 0.6 }}
                        transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                        className="flex flex-col items-center"
                        style={{ transformStyle: "preserve-3d" }}
                      >
                        <motion.h1
                          className="text-6xl sm:text-7xl md:text-8xl font-black tracking-tight leading-none"
                          style={{
                            background: `linear-gradient(135deg, ${current.color}, var(--neo-accent-2))`,
                            WebkitBackgroundClip: "text",
                            backgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            filter: `drop-shadow(0 0 24px ${current.color}55)`,
                          }}
                        >
                          {current.text}
                        </motion.h1>
                        <motion.p
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.15 }}
                          className="text-xs tracking-[0.5em] uppercase mt-3 font-semibold"
                          style={{ color: current.color }}
                        >
                          {current.lang}
                        </motion.p>
                      </motion.div>
                    </AnimatePresence>
                  </div>

                  {/* Progress dots */}
                  <div className="flex gap-1.5 mt-2">
                    {GREETINGS.map((_, i) => (
                      <motion.div
                        key={i}
                        className="h-1.5 rounded-full"
                        animate={{
                          width: i === greetingIdx ? 24 : 6,
                          backgroundColor:
                            i <= greetingIdx
                              ? current.color
                              : "var(--neo-dark)",
                        }}
                        transition={{ duration: 0.3 }}
                      />
                    ))}
                  </div>

                  {/* Counter */}
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="text-[10px] text-muted-c tracking-widest mt-4 font-mono"
                  >
                    {String(greetingIdx + 1).padStart(2, "0")} / {String(GREETINGS.length).padStart(2, "0")}
                  </motion.p>
                </motion.div>
              ) : (
                /* ---------- REVEAL PHASE ---------- */
                <motion.div
                  key="reveal"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="flex flex-col items-center text-center"
                >
                  {/* 3D tilt card with name */}
                  <motion.div
                    ref={cardRef}
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseLeave}
                    style={{
                      rotateX,
                      rotateY,
                      transformStyle: "preserve-3d",
                    }}
                    className="neo-xl p-8 sm:p-12 max-w-2xl relative"
                  >
                    {/* Floating mini greetings around the card */}
                    {GREETINGS.slice(0, 6).map((g, i) => {
                      const angle = (i / 6) * Math.PI * 2;
                      const radius = 180;
                      const x = Math.cos(angle) * radius;
                      const y = Math.sin(angle) * radius;
                      return (
                        <motion.div
                          key={i}
                          className="absolute hidden sm:block text-xs font-bold opacity-60 pointer-events-none"
                          style={{
                            left: "50%",
                            top: "50%",
                            x,
                            y,
                            color: g.color,
                            transform: "translate(-50%, -50%)",
                          }}
                          animate={{
                            opacity: [0.3, 0.8, 0.3],
                            scale: [0.9, 1.1, 0.9],
                          }}
                          transition={{
                            duration: 3,
                            delay: i * 0.3,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                        >
                          {g.text}
                        </motion.div>
                      );
                    })}

                    {/* Sparkle icon */}
                    <motion.div
                      style={{ transform: "translateZ(40px)" }}
                      className="neo-inset-sm w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-6"
                    >
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                      >
                        <Sparkles className="w-6 h-6 text-accent-c" />
                      </motion.div>
                    </motion.div>

                    {/* Greeting line */}
                    <motion.p
                      style={{ transform: "translateZ(30px)" }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                      className="text-xs sm:text-sm tracking-[0.4em] uppercase text-muted-c mb-3"
                    >
                      {t.hero.greeting}
                    </motion.p>

                    {/* Name */}
                    <motion.h1
                      style={{ transform: "translateZ(50px)" }}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.3, type: "spring", stiffness: 150 }}
                      className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tight mb-3"
                    >
                      <span className="block">HAFIZUL</span>
                      <span className="block text-gradient-accent">HANIF</span>
                    </motion.h1>

                    {/* Subtitle */}
                    <motion.p
                      style={{ transform: "translateZ(25px)" }}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                      className="text-xs sm:text-sm tracking-[0.3em] uppercase text-muted-c mb-7"
                    >
                      {t.intro.subtitle}
                    </motion.p>

                    {/* CTA button */}
                    <motion.button
                      style={{ transform: "translateZ(35px)" }}
                      onClick={handleEnter}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.7 }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.97 }}
                      className="neo neo-hover neo-press px-7 py-3.5 inline-flex items-center gap-2 font-bold text-sm neo-glow mx-auto"
                    >
                      <Sparkles className="w-4 h-4 text-accent-c" />
                      <span>{t.intro.cta}</span>
                      <ChevronDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
                    </motion.button>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* ============ Skip button ============ */}
          <motion.button
            onClick={handleEnter}
            className="absolute top-6 right-6 neo-sm px-4 py-2 text-xs font-medium neo-hover z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
          >
            {t.intro.skip}
          </motion.button>

          {/* ============ Bottom hint ============ */}
          {phase === "greetings" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2 }}
              className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center"
            >
              <motion.p
                animate={{ opacity: [0.4, 1, 0.4] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-[10px] tracking-widest uppercase text-muted-c"
              >
                {t.intro.greetingsHint}
              </motion.p>
            </motion.div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
