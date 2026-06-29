"use client";

import {
  motion,
  useMotionValue,
  useTransform,
  useSpring,
} from "framer-motion";
import { useRef, useState, useEffect } from "react";
import {
  MapPin,
  Mail,
  Phone,
  Github,
  Linkedin,
  Globe,
  Award,
  Code2,
  Sparkles,
  ArrowDown,
} from "lucide-react";
import { useLanguage } from "@/lib/portfolio/language-context";
import { profile, getProfile, stats } from "@/lib/portfolio/cv-data";

export default function Hero() {
  const { t, lang } = useLanguage();
  const p = getProfile(lang);

  const ref = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [10, -10]), {
    stiffness: 200,
    damping: 20,
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-10, 10]), {
    stiffness: 200,
    damping: 20,
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
    setTilt({ x, y });
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    setTilt({ x: 0, y: 0 });
  };

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-28 pb-16 px-4 overflow-hidden"
    >
      {/* Floating background orbs */}
      <div
        className="absolute top-1/4 left-10 w-72 h-72 rounded-full blur-3xl opacity-25 animate-float-slow pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, var(--neo-accent), transparent 70%)",
        }}
      />
      <div
        className="absolute bottom-1/4 right-10 w-80 h-80 rounded-full blur-3xl opacity-20 animate-float pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, var(--neo-accent-2), transparent 70%)",
          animationDelay: "2s",
        }}
      />

      <div className="max-w-6xl w-full grid lg:grid-cols-[1.2fr_1fr] gap-8 lg:gap-12 items-center">
        {/* Left side — text */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center lg:text-left"
        >
          {/* Greeting pill */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 neo-inset-sm px-4 py-2 rounded-full mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-xs font-medium text-muted-c">
              {t.hero.available}
            </span>
          </motion.div>

          {/* Title */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-[0.95] tracking-tight mb-5">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="block"
            >
              {t.hero.greeting}
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45 }}
              className="block text-gradient-accent"
            >
              {profile.name}
            </motion.span>
          </h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-lg sm:text-xl font-semibold mb-3"
          >
            {p.title}
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="text-sm text-muted-c mb-8 max-w-xl mx-auto lg:mx-0"
          >
            {p.tagline}
          </motion.p>

          {/* Quick info pills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-wrap gap-2 justify-center lg:justify-start mb-8"
          >
            {[
              { icon: MapPin, text: profile.location },
              { icon: Mail, text: profile.email },
              { icon: Phone, text: profile.phone },
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05, y: -2 }}
                className="neo-sm px-3 py-1.5 rounded-full flex items-center gap-1.5 text-xs"
              >
                <item.icon className="w-3 h-3 text-accent-c" />
                <span className="text-muted-c truncate max-w-[180px]">
                  {item.text}
                </span>
              </motion.div>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="flex flex-wrap gap-3 justify-center lg:justify-start"
          >
            <motion.button
              onClick={() => scrollTo("projects")}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="neo neo-hover neo-press px-6 py-3 rounded-2xl font-semibold text-sm flex items-center gap-2 neo-glow"
            >
              <Code2 className="w-4 h-4 text-accent-c" />
              {t.hero.viewProjects}
            </motion.button>
            <motion.button
              onClick={() => scrollTo("awards")}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="neo-inset neo-hover px-6 py-3 rounded-2xl font-semibold text-sm flex items-center gap-2"
            >
              <Award className="w-4 h-4 text-accent-2-c" />
              {t.hero.seeAchievements}
            </motion.button>
          </motion.div>

          {/* Social icons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="flex gap-2 justify-center lg:justify-start mt-6"
          >
            {[Github, Linkedin, Globe].map((Icon, i) => (
              <motion.a
                key={i}
                href="#"
                whileHover={{ scale: 1.15, y: -3 }}
                whileTap={{ scale: 0.9 }}
                className="neo-sm neo-hover neo-press w-10 h-10 rounded-xl flex items-center justify-center cursor-pointer"
              >
                <Icon className="w-4 h-4 text-muted-c hover:text-accent-c transition-colors" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Right side — 3D tilt card with avatar & stats */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="perspective-1000"
        >
          <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
              rotateX,
              rotateY,
              transformStyle: "preserve-3d",
            }}
            className="neo-xl p-8 relative cursor-pointer"
          >
            {/* Animated badge top-right */}
            <motion.div
              style={{ transform: "translateZ(60px)" }}
              className="absolute -top-3 -right-3 neo-sm px-3 py-1.5 rounded-full"
            >
              <span className="text-[10px] font-bold tracking-wider uppercase text-accent-c flex items-center gap-1">
                <Sparkles className="w-3 h-3" /> {t.hero.championBadge}
              </span>
            </motion.div>

            {/* Avatar 3D circle */}
            <div
              style={{ transform: "translateZ(50px)" }}
              className="flex justify-center mb-6"
            >
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="w-32 h-32 rounded-full neo-inset-lg flex items-center justify-center relative"
              >
                <div className="w-24 h-24 rounded-full neo-accent-bg flex items-center justify-center text-white font-black text-4xl shadow-lg">
                  HH
                </div>
                {/* Orbital ring */}
                <motion.div
                  className="absolute inset-0 rounded-full border-2 border-dashed"
                  style={{ borderColor: "var(--neo-accent)" }}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                />
              </motion.div>
            </div>

            {/* Name & title */}
            <div
              style={{ transform: "translateZ(40px)" }}
              className="text-center mb-6"
            >
              <h3 className="text-xl font-bold mb-1">{profile.name}</h3>
              <p className="text-xs text-muted-c tracking-wider uppercase">
                {p.title}
              </p>
            </div>

            {/* Stats grid */}
            <div
              style={{ transform: "translateZ(30px)" }}
              className="grid grid-cols-2 gap-3"
            >
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + i * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="neo-inset-sm p-4 rounded-2xl text-center"
                >
                  <motion.p
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{
                      delay: 0.7 + i * 0.1,
                      type: "spring",
                      stiffness: 200,
                    }}
                    className="text-2xl font-black text-gradient-accent"
                  >
                    {stat.value}
                    {stat.suffix}
                  </motion.p>
                  <p className="text-[10px] text-muted-c tracking-wider uppercase mt-1">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] tracking-widest uppercase text-muted-c">
          {t.hero.scroll}
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="neo-sm w-8 h-8 rounded-full flex items-center justify-center"
        >
          <ArrowDown className="w-3 h-3 text-accent-c" />
        </motion.div>
      </motion.div>
    </section>
  );
}
