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
  Trophy,
  Download,
} from "lucide-react";
import Image from "next/image";
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
              className="block text-foreground"
            >
              Hafizul <span className="text-blue-600 dark:text-blue-400">Hanif</span>.
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
            <motion.a
              href="/CV_Hafizul_Hanif.pdf"
              download="CV_Hafizul_Hanif.pdf"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="neo-inset neo-hover px-6 py-3 rounded-2xl font-semibold text-sm flex items-center gap-2 cursor-pointer"
            >
              <Download className="w-4 h-4 text-accent-3-c" />
              {t.hero.downloadCV}
            </motion.a>
          </motion.div>

          {/* Social icons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="flex gap-2 justify-center lg:justify-start mt-6"
          >
            {[
              { Icon: Github, href: profile.github, title: "GitHub" },
              { Icon: Linkedin, href: profile.linkedin, title: "LinkedIn" },
              { Icon: Globe, href: profile.portfolio, title: "Portfolio" },
            ].map((item, i) => (
              <motion.a
                key={i}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.15, y: -3 }}
                whileTap={{ scale: 0.9 }}
                className="neo-sm neo-hover neo-press w-10 h-10 rounded-xl flex items-center justify-center cursor-pointer"
                title={item.title}
              >
                <item.Icon className="w-4 h-4 text-muted-c hover:text-accent-c transition-colors" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Right side — 3D tilt card with poster image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="perspective-1000 flex justify-center lg:justify-end"
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
            className="neo-xl p-3.5 w-full max-w-sm aspect-[3/4] relative cursor-pointer group"
          >
            {/* Poster Inner Container with 3D Depth */}
            <div 
              className="relative w-full h-full rounded-[24px] overflow-hidden"
              style={{ transform: "translateZ(30px)", transformStyle: "preserve-3d" }}
            >
              <Image
                src="/profile/hero-main.webp"
                alt="Hafizul Hanif"
                fill
                sizes="384px"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                priority
              />
              {/* Gradient Overlay for Text Readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-black/40 pointer-events-none" />

              {/* Card top-left label */}
              <div 
                style={{ transform: "translateZ(45px)" }}
                className="absolute top-8 left-8 text-white text-left z-10 pointer-events-none"
              >
                <h3 className="text-2xl sm:text-3xl font-black tracking-tight leading-tight">
                  Hafizul <span className="text-blue-500 dark:text-blue-400">Hanif</span>
                </h3>
                <p className="text-xs font-bold text-white/75 mt-1">
                  {lang === "en" ? "Award-Winning Champion" : "Juara Berprestasi"}
                </p>
              </div>

              {/* Floating trophy badge on card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.6 }}
                style={{ transform: "translateZ(50px)" }}
                className="absolute top-8 right-7 flex flex-col items-center gap-1 z-10"
              >
                <div className="w-11 h-11 rounded-2xl bg-amber-500 flex items-center justify-center shadow-[0_0_15px_rgba(245,158,11,0.6)] border border-amber-400/30">
                  <Trophy className="w-5 h-5 text-white" />
                </div>
                <span className="text-[10px] font-black text-white bg-black/40 backdrop-blur-md px-2 py-0.5 rounded-md mt-1">
                  11x
                </span>
              </motion.div>

              {/* Glassmorphism bottom bar */}
              <div 
                style={{ transform: "translateZ(40px)" }}
                className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-white p-3 bg-black/40 backdrop-blur-md rounded-[24px] border border-white/10 z-10"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full border border-white/20 overflow-hidden relative shrink-0">
                    <Image
                      src="/profile/hafizul-hanif.webp"
                      alt="Foto Profil HafizzN"
                      fill
                      sizes="40px"
                      className="object-cover"
                    />
                  </div>
                  <div className="text-left">
                    <p className="text-sm font-black text-white">@HafizzN</p>
                    <div className="flex items-center gap-1.5 mt-0.5">
                      <div className="w-2.5 h-2.5 bg-green-400 rounded-full shadow-[0_0_8px_rgba(74,222,128,0.8)] animate-pulse" />
                      <p className="text-[10px] font-bold text-white/80">Online</p>
                    </div>
                  </div>
                </div>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    scrollTo("contact");
                  }}
                  className="px-4 py-2 bg-white/15 hover:bg-white/25 text-white text-xs font-black rounded-full transition-all border border-white/10 backdrop-blur-sm shadow-sm cursor-pointer"
                >
                  {lang === "en" ? "Contact Me" : "Hubungi Saya"}
                </button>
              </div>
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
