"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Rocket,
  Palette,
  BarChart3,
  Trophy,
  Sparkles,
  Languages,
} from "lucide-react";
import SectionTitle from "./section-title";
import { skillGroups, languages } from "@/lib/portfolio/cv-data";

const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  code: Code2,
  rocket: Rocket,
  palette: Palette,
  chart: BarChart3,
  trophy: Trophy,
  sparkles: Sparkles,
};

function SkillBar({
  name,
  level,
  delay,
  color,
}: {
  name: string;
  level: number;
  delay: number;
  color: string;
}) {
  return (
    <div>
      <div className="flex justify-between text-xs mb-1.5">
        <span className="font-semibold">{name}</span>
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: delay + 0.5 }}
          className="font-bold"
          style={{ color }}
        >
          {level}%
        </motion.span>
      </div>
      <div className="neo-inset-sm h-2.5 rounded-full overflow-hidden relative">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true, margin: "-30px" }}
          transition={{ duration: 1.2, delay, ease: "easeOut" }}
          className="h-full rounded-full relative"
          style={{
            background: `linear-gradient(90deg, ${color}, var(--neo-accent-2))`,
            boxShadow: `0 0 12px ${color}`,
          }}
        >
          {/* Shimmer */}
          <motion.div
            className="absolute inset-0 rounded-full"
            style={{
              background:
                "linear-gradient(90deg, transparent, rgba(255,255,255,0.6), transparent)",
              backgroundSize: "200% 100%",
            }}
            animate={{ backgroundPosition: ["0% 0%", "200% 0%"] }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          />
        </motion.div>
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <SectionTitle
          eyebrow="Capabilities"
          title={
            <>
              Skills & <span className="text-gradient-accent">Expertise</span>
            </>
          }
          subtitle="A diverse toolkit spanning full-stack engineering, business strategy, design, and leadership."
        />

        {/* Skills grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillGroups.map((group, gi) => {
            const Icon = ICON_MAP[group.icon] || Code2;
            const colorPalette = [
              "var(--neo-accent)",
              "var(--neo-accent-2)",
              "var(--neo-accent-3)",
              "#10b981",
              "#8b5cf6",
              "#ef4444",
            ];
            const color = colorPalette[gi % colorPalette.length];
            return (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: (gi % 3) * 0.1 }}
                whileHover={{ y: -4 }}
                className="neo neo-hover p-6 group"
              >
                {/* Header */}
                <div className="flex items-center gap-3 mb-5">
                  <motion.div
                    whileHover={{ scale: 1.15, rotate: 8 }}
                    className="neo-inset-sm w-12 h-12 rounded-2xl flex items-center justify-center"
                    style={{ boxShadow: `0 0 16px ${color}55` }}
                  >
                    <Icon className="w-5 h-5" style={{ color }} />
                  </motion.div>
                  <div>
                    <h3 className="font-bold text-sm">{group.category}</h3>
                    <p className="text-[10px] text-muted-c tracking-wider uppercase">
                      {group.skills.length} skills
                    </p>
                  </div>
                </div>

                {/* Skill bars */}
                <div className="space-y-3">
                  {group.skills.map((skill, si) => (
                    <SkillBar
                      key={skill.name}
                      name={skill.name}
                      level={skill.level}
                      delay={gi * 0.1 + si * 0.05}
                      color={color}
                    />
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Languages & Soft skills row */}
        <div className="grid md:grid-cols-2 gap-5 mt-6">
          {/* Languages */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -4 }}
            className="neo neo-hover p-6"
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="neo-inset-sm w-12 h-12 rounded-2xl flex items-center justify-center">
                <Languages className="w-5 h-5 text-accent-c" />
              </div>
              <h3 className="font-bold text-sm">Languages</h3>
            </div>
            <div className="space-y-4">
              {languages.map((lang, i) => (
                <div key={i}>
                  <div className="flex justify-between items-baseline mb-2">
                    <div>
                      <span className="font-bold text-sm">{lang.name}</span>
                      <span className="text-xs text-muted-c ml-2">
                        {lang.level}
                      </span>
                    </div>
                    <span className="text-xs font-bold text-accent-c">
                      {lang.value}%
                    </span>
                  </div>
                  <div className="neo-inset-sm h-3 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${lang.value}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, delay: i * 0.2 }}
                      className="h-full neo-accent-bg rounded-full"
                      style={{ boxShadow: "0 0 12px var(--neo-glow)" }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Certifications card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            whileHover={{ y: -4 }}
            className="neo neo-hover p-6"
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="neo-inset-sm w-12 h-12 rounded-2xl flex items-center justify-center">
                <Trophy className="w-5 h-5 text-accent-2-c" />
              </div>
              <h3 className="font-bold text-sm">Certifications</h3>
            </div>
            <div className="space-y-3">
              {[
                {
                  title: "Certified MonsoonSIM Facilitator",
                  issuer: "MonsoonSIM",
                },
                {
                  title: "SAP01 ERP Fundamental Training",
                  issuer: "SAP",
                },
              ].map((cert, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.02, x: 4 }}
                  className="neo-inset-sm p-4 rounded-2xl"
                >
                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 rounded-full bg-accent-c mt-1.5 flex-shrink-0 animate-pulse" />
                    <div>
                      <p className="font-bold text-sm leading-tight">
                        {cert.title}
                      </p>
                      <p className="text-xs text-muted-c mt-1">{cert.issuer}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
