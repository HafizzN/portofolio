"use client";

import {
  motion,
  useMotionValue,
  useTransform,
  useSpring,
} from "framer-motion";
import { useRef, useState } from "react";
import { Trophy, Medal, Crown, Star, Calendar, Building2 } from "lucide-react";
import SectionTitle from "./section-title";
import { useLanguage } from "@/lib/portfolio/language-context";
import { awards, type Award } from "@/lib/portfolio/cv-data";

const LEVEL_STYLES = {
  Internasional: {
    icon: Crown,
    color: "var(--neo-accent)",
    glow: "var(--neo-glow)",
  },
  Nasional: {
    icon: Trophy,
    color: "var(--neo-accent-2)",
    glow: "rgba(248, 181, 0, 0.4)",
  },
  Universitas: {
    icon: Medal,
    color: "var(--neo-accent-3)",
    glow: "rgba(58, 110, 165, 0.4)",
  },
} as const;

function AwardCard({ award, index }: { award: Award; index: number }) {
  const { t } = useLanguage();
  const ref = useRef<HTMLDivElement>(null);
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

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const style = LEVEL_STYLES[award.level];
  const Icon = style.icon;
  const levelLabel =
    award.level === "Internasional"
      ? t.awards.international
      : award.level === "Nasional"
      ? t.awards.national
      : t.awards.university;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
      className="perspective-1000"
    >
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        whileHover={{ y: -6 }}
        className="neo neo-hover p-6 h-full relative cursor-pointer overflow-hidden group"
      >
        {/* Hover glow overlay */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{
            background: `radial-gradient(circle at 50% 0%, ${style.glow}, transparent 70%)`,
          }}
        />

        {/* Top row: rank + level */}
        <div
          style={{ transform: "translateZ(40px)" }}
          className="flex items-start justify-between mb-4 relative z-10"
        >
          <motion.div
            whileHover={{ scale: 1.15, rotate: 10 }}
            className="neo-inset-sm w-14 h-14 rounded-2xl flex items-center justify-center"
            style={{
              boxShadow: `inset 3px 3px 6px var(--neo-dark), inset -3px -3px 6px var(--neo-light), 0 0 20px ${style.glow}`,
            }}
          >
            <Icon className="w-6 h-6" style={{ color: style.color }} />
          </motion.div>

          <span
            className="neo-inset-sm px-3 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase"
            style={{ color: style.color }}
          >
            {levelLabel}
          </span>
        </div>

        {/* Year */}
        <div
          style={{ transform: "translateZ(20px)" }}
          className="flex items-center gap-1.5 text-xs text-muted-c mb-2"
        >
          <Calendar className="w-3 h-3" />
          <span>{award.year}</span>
          <span className="mx-1">•</span>
          <Building2 className="w-3 h-3" />
          <span className="truncate">{award.organizer}</span>
        </div>

        {/* Title */}
        <h3
          style={{ transform: "translateZ(30px)" }}
          className="font-bold text-base mb-1 leading-tight"
        >
          {award.title}
        </h3>
        <p
          style={{ transform: "translateZ(25px)" }}
          className="text-xs text-muted-c mb-4"
        >
          {award.category}
        </p>

        {/* Rank banner */}
        <motion.div
          style={{ transform: "translateZ(35px)" }}
          whileHover={{ scale: 1.03 }}
          className="neo-inset-sm p-3 rounded-xl mb-4 flex items-center justify-between"
        >
          <span className="text-xs text-muted-c">{t.awards.achievement}</span>
          <span
            className="text-sm font-black"
            style={{ color: style.color }}
          >
            {award.rank}
          </span>
        </motion.div>

        {/* Bullets */}
        <ul
          style={{ transform: "translateZ(15px)" }}
          className="space-y-1.5 text-xs text-muted-c"
        >
          {award.bullets.slice(0, 2).map((b, i) => (
            <li key={i} className="flex gap-2">
              <Star
                className="w-3 h-3 mt-0.5 flex-shrink-0"
                style={{ color: style.color }}
              />
              <span className="leading-relaxed">{b}</span>
            </li>
          ))}
        </ul>

        {/* Bottom shimmer line */}
        <div
          className="absolute bottom-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity"
          style={{
            background: `linear-gradient(90deg, transparent, ${style.color}, transparent)`,
          }}
        />
      </motion.div>
    </motion.div>
  );
}

export default function Awards() {
  const { t } = useLanguage();
  const [filter, setFilter] = useState<"all" | "Internasional" | "Nasional">(
    "all"
  );

  const filtered = awards.filter((a) => {
    if (filter === "all") return true;
    return a.level === filter;
  });

  const counts = {
    all: awards.length,
    Internasional: awards.filter((a) => a.level === "Internasional").length,
    Nasional: awards.filter((a) => a.level === "Nasional").length,
  };

  return (
    <section id="awards" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <SectionTitle
          eyebrow={t.awards.eyebrow}
          title={
            <>
              {t.awards.title1} <span className="text-gradient-accent">{t.awards.title2}</span>
            </>
          }
          subtitle={t.awards.subtitle}
        />

        {/* Filter tabs */}
        <div className="flex justify-center gap-2 mb-10">
          {([
            { key: "all" as const, label: t.awards.all },
            { key: "Internasional" as const, label: t.awards.international },
            { key: "Nasional" as const, label: t.awards.national },
          ]).map((f) => (
            <motion.button
              key={f.key}
              onClick={() => setFilter(f.key)}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className={`px-4 py-2 rounded-full text-xs font-bold tracking-wider uppercase transition-all ${
                filter === f.key
                  ? "neo neo-glow text-accent-c"
                  : "neo-inset-sm text-muted-c hover:text-foreground"
              }`}
            >
              {f.label}
              <span className="ml-1.5 opacity-70">({counts[f.key]})</span>
            </motion.button>
          ))}
        </div>

        {/* Cards grid */}
        <motion.div
          layout
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {filtered.map((award, i) => (
            <AwardCard key={award.title} award={award} index={i} />
          ))}
        </motion.div>

        {/* Bottom stat strip */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-10 neo p-6 grid grid-cols-2 sm:grid-cols-4 gap-4"
        >
          {[
            { label: t.awards.bottomStats.intlWins, value: 6, icon: Crown },
            { label: t.awards.bottomStats.natWins, value: 4, icon: Trophy },
            { label: t.awards.bottomStats.total, value: 11, icon: Medal },
            { label: t.awards.bottomStats.years, value: 2, icon: Calendar },
          ].map((stat, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="text-center"
            >
              <div className="neo-inset-sm w-12 h-12 rounded-2xl flex items-center justify-center mx-auto mb-2">
                <stat.icon className="w-5 h-5 text-accent-c" />
              </div>
              <p className="text-2xl sm:text-3xl font-black text-gradient-accent">
                {stat.value}
              </p>
              <p className="text-[10px] text-muted-c tracking-wider uppercase mt-1">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
