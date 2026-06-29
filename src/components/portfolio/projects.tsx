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
import SectionTitle from "./section-title";
import { projects, type Project } from "@/lib/portfolio/cv-data";

function ProjectCard({ project, index }: { project: Project; index: number }) {
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

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
      className={`perspective-1000 ${project.highlight ? "lg:col-span-1" : ""}`}
    >
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        whileHover={{ y: -6 }}
        className={`neo neo-hover p-6 h-full relative cursor-pointer overflow-hidden group ${
          project.highlight ? "neo-border-glow" : ""
        }`}
      >
        {/* Highlight badge */}
        {project.highlight && (
          <motion.div
            style={{ transform: "translateZ(50px)" }}
            className="absolute top-3 right-3 z-10"
          >
            <div className="neo-inset-sm px-2.5 py-1 rounded-full flex items-center gap-1">
              <Sparkles className="w-3 h-3 text-accent-2-c" />
              <span className="text-[9px] font-bold tracking-wider uppercase text-accent-2-c">
                Featured
              </span>
            </div>
          </motion.div>
        )}

        {/* Header icon */}
        <motion.div
          style={{ transform: "translateZ(40px)" }}
          whileHover={{ scale: 1.15, rotate: 5 }}
          className={`neo-inset-sm ${
            project.highlight ? "w-16 h-16" : "w-14 h-14"
          } rounded-2xl flex items-center justify-center mb-5`}
        >
          <Code2
            className={project.highlight ? "w-7 h-7" : "w-6 h-6"}
            style={{ color: "var(--neo-accent)" }}
          />
        </motion.div>

        {/* Title */}
        <h3
          style={{ transform: "translateZ(30px)" }}
          className={`font-bold mb-3 leading-tight ${
            project.highlight ? "text-lg" : "text-base"
          }`}
        >
          {project.name}
        </h3>

        {/* Bullets */}
        <ul
          style={{ transform: "translateZ(20px)" }}
          className="space-y-1.5 mb-5"
        >
          {project.bullets.map((b, i) => (
            <li
              key={i}
              className="flex gap-2 text-xs text-muted-c leading-relaxed"
            >
              <ArrowUpRight className="w-3 h-3 mt-0.5 flex-shrink-0 text-accent-c" />
              <span>{b}</span>
            </li>
          ))}
        </ul>

        {/* Tech stack chips */}
        <div
          style={{ transform: "translateZ(25px)" }}
          className="flex flex-wrap gap-1.5 mb-4"
        >
          {project.tech.map((t, i) => (
            <motion.span
              key={i}
              whileHover={{ scale: 1.1, y: -2 }}
              className="neo-inset-sm px-2.5 py-1 rounded-full text-[10px] font-semibold"
            >
              {t}
            </motion.span>
          ))}
        </div>

        {/* Live demo button */}
        {project.liveDemo && (
          <motion.a
            href={project.liveDemo}
            target="_blank"
            rel="noopener noreferrer"
            style={{ transform: "translateZ(35px)" }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={(e) => e.stopPropagation()}
            className="neo-sm neo-hover neo-press w-full px-4 py-2.5 rounded-xl text-xs font-bold flex items-center justify-center gap-2 group/btn"
          >
            <ExternalLink className="w-3.5 h-3.5 text-accent-c group-hover/btn:rotate-12 transition-transform" />
            <span>Live Demo</span>
            <Star className="w-3 h-3 text-accent-2-c ml-auto" />
          </motion.a>
        )}

        {/* Animated corner accent */}
        <motion.div
          className="absolute bottom-0 right-0 w-24 h-24 rounded-tl-3xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
          style={{
            background:
              "linear-gradient(135deg, transparent 50%, var(--neo-glow) 100%)",
            filter: "blur(8px)",
          }}
        />
      </motion.div>
    </motion.div>
  );
}

export default function Projects() {
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? projects : projects.slice(0, 6);

  return (
    <section id="projects" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <SectionTitle
          eyebrow="Engineering Work"
          title={
            <>
              Technical <span className="text-gradient-accent">Projects</span>
            </>
          }
          subtitle="Production-ready Laravel applications — from ERP systems to AI-powered content platforms, all built and deployed live."
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
              <Layers className="w-4 h-4 text-accent-c" />
              {showAll
                ? "Show Less"
                : `Show All Projects (${projects.length})`}
            </motion.button>
          </motion.div>
        )}
      </div>
    </section>
  );
}
