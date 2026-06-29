"use client";

import {
  motion,
  AnimatePresence,
  useMotionValue,
  useTransform,
  useSpring,
} from "framer-motion";
import { useRef, useState } from "react";
import {
  Code2,
  ExternalLink,
  ArrowUpRight,
  Sparkles,
  Star,
  Layers,
} from "lucide-react";
import Image from "next/image";
import SectionTitle from "./section-title";
import { useLanguage } from "@/lib/portfolio/language-context";
import { projects, type Project } from "@/lib/portfolio/cv-data";

// Local image mapping for projects
const PROJECT_IMAGES: Record<string, string> = {
  "VALRYSE – Smart HR Portal & Attendance Management System": 
    "/project/valryze.png",
  "Enterprise Resource Planning (ERP) System": 
    "/project/erp_system.webp",
  "ContentAnalyzer AI": 
    "/project/ecommerce_3d.webp",
  "VisitSolok – Tourism Information Platform": 
    "/project/visitsolok.webp",
  "HijabPin House – E-Commerce Website": 
    "/project/hijabpin_house.webp",
  "Social Media Content Management Dashboard": 
    "/project/birthday_netflix.webp",
  "Business Analytics Dashboard": 
    "/project/commerce_erp.webp",
  "REST API Development": 
    "/project/skywave_racing.webp",
};

// Devicon Devicon logo mapping
const getTechIcon = (tag: string) => {
  const normalized = tag.toLowerCase().trim();
  const icons: Record<string, string> = {
    laravel: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg",
    "laravel api": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg",
    "blade template": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg",
    blade: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg",
    reactjs: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
    react: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
    "tailwind css": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
    tailwindcss: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
    mysql: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg",
    postgresql: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
    nextjs: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
    typescript: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
    figma: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg",
    wordpress: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/wordpress/wordpress-plain.svg",
    php: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg",
    bootstrap: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg",
    html: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
    html5: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
    css: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
    css3: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
    js: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
    javascript: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
    "three.js": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/threejs/threejs-original.svg",
    threejs: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/threejs/threejs-original.svg",
    flutter: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg",
    "rest api": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg",
  };
  return icons[normalized];
};

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const { t, lang } = useLanguage();
  const ref = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);
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
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    setHovered(false);
  };

  const image = PROJECT_IMAGES[project.name] || "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop";

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
      className="perspective-1000 h-full"
    >
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className={`neo-xl p-3.5 h-full relative cursor-pointer group flex flex-col justify-between ${
          project.highlight ? "neo-border-glow" : "neo-hover"
        }`}
      >
        <div className="w-full flex flex-col flex-1" style={{ transform: "translateZ(20px)", transformStyle: "preserve-3d" }}>
          
          {/* Highlight badge */}
          {project.highlight && (
            <motion.div
              style={{ transform: "translateZ(50px)" }}
              className="absolute top-6 right-6 z-10"
            >
              <div className="bg-amber-500 text-white px-2.5 py-1 rounded-full flex items-center gap-1 shadow-[0_0_12px_rgba(245,158,11,0.5)] border border-amber-400/30">
                <Sparkles className="w-3 h-3 text-white" />
                <span className="text-[9px] font-black tracking-wider uppercase">
                  {t.projects.featured}
                </span>
              </div>
            </motion.div>
          )}

          {/* Project Preview Image */}
          <div 
            className="relative aspect-video w-full rounded-[20px] overflow-hidden bg-brand-text/5 border border-border/10"
            style={{ transform: "translateZ(30px)" }}
          >
            <Image
              src={image}
              alt={project.name}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              priority={index < 3}
            />
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/5 transition-colors duration-300 pointer-events-none" />
          </div>

          {/* Project Details */}
          <div className="flex flex-col flex-1 px-2.5 pt-5 text-left" style={{ transform: "translateZ(25px)" }}>
            <h3 className="text-lg font-black tracking-tight mb-3 group-hover:text-accent-c transition-colors duration-300 line-clamp-2 leading-snug">
              {project.name}
            </h3>

            {/* Bullets */}
            <ul className="space-y-2 mb-6 flex-1">
              {project.bullets.map((b, i) => (
                <li
                  key={i}
                  className="flex gap-2 text-xs text-muted-c leading-relaxed"
                >
                  <ArrowUpRight className="w-3.5 h-3.5 mt-0.5 flex-shrink-0 text-accent-c" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Tech Stack and CTA Footer */}
        <div className="w-full mt-auto px-2.5" style={{ transform: "translateZ(35px)" }}>
          {/* Tech stack chips */}
          <div
            className="flex flex-wrap gap-1.5 pt-4 border-t border-dashed"
            style={{ borderColor: "var(--border)" }}
          >
            {project.tech.slice(0, 3).map((techName, i) => (
              <motion.span
                key={i}
                whileHover={{ scale: 1.05, y: -1 }}
                className="flex items-center gap-1.5 neo-inset-sm px-2.5 py-1.5 rounded-full text-[10px] font-semibold text-muted-c"
              >
                {getTechIcon(techName) && (
                  <img
                    src={getTechIcon(techName)}
                    alt={techName}
                    className="w-3.5 h-3.5 object-contain"
                  />
                )}
                {techName}
              </motion.span>
            ))}
            {project.tech.length > 3 && (
              <span className="flex items-center px-2.5 py-1.5 neo-inset-sm text-muted-c/60 text-[10px] font-semibold rounded-full">
                +{project.tech.length - 3}
              </span>
            )}
          </div>

          {/* Live demo button */}
          {project.liveDemo && (
            <motion.a
              href={project.liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={(e) => e.stopPropagation()}
              className="mt-4 neo-sm neo-hover neo-press w-full px-4 py-2.5 rounded-xl text-xs font-bold flex items-center justify-center gap-2 group/btn cursor-pointer"
            >
              <ExternalLink className="w-3.5 h-3.5 text-rose-600 dark:text-rose-400 group-hover/btn:rotate-12 transition-transform" />
              <span>{t.projects.liveDemo}</span>
              <Star className="w-3 h-3 text-accent-2-c ml-auto" />
            </motion.a>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Projects() {
  const { t } = useLanguage();
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? projects : projects.slice(0, 6);

  return (
    <section id="projects" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <SectionTitle
          eyebrow={t.projects.eyebrow}
          title={
            <>
              {t.projects.title1} <span className="text-rose-600 dark:text-rose-400">{t.projects.title2}</span>
            </>
          }
          subtitle={t.projects.subtitle}
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <AnimatePresence mode="popLayout">
            {visible.map((project, i) => (
              <ProjectCard key={project.name} project={project} index={i} />
            ))}
          </AnimatePresence>
        </div>

        {/* Show more button */}
        {projects.length > 6 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex justify-center mt-10"
          >
            <motion.button
              onClick={() => setShowAll((s) => !s)}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="neo neo-hover neo-press px-6 py-3 rounded-2xl font-semibold text-sm flex items-center gap-2"
            >
              <Layers className="w-4 h-4 text-rose-600 dark:text-rose-400" />
              {showAll
                ? t.projects.showLess
                : `${t.projects.showAll} (${projects.length})`}
            </motion.button>
          </motion.div>
        )}
      </div>
    </section>
  );
}
