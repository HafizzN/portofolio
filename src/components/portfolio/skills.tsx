"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Rocket,
  BarChart3,
  Trophy,
  Sparkles,
  Languages,
  Users,
  Cpu,
} from "lucide-react";
import SectionTitle from "./section-title";
import { useLanguage } from "@/lib/portfolio/language-context";
import { skillGroups, languages } from "@/lib/portfolio/cv-data";

const ICON_MAP: Record<string, React.ComponentType<any>> = {
  code: Code2,
  chart: BarChart3,
  rocket: Rocket,
  sparkles: Sparkles,
  trophy: Trophy,
  users: Users,
  cpu: Cpu,
};

const COLOR_PALETTE = [
  "#3b82f6", // Blue
  "#10b981", // Emerald
  "#f59e0b", // Amber
  "#8b5cf6", // Purple
  "#f43f5e", // Rose
  "#06b6d4", // Cyan
];

const getLocalized = (field: any, lang: "en" | "id") => {
  if (!field) return "";
  if (typeof field === "string") return field;
  return field[lang] || field["en"] || "";
};

export default function Skills() {
  const { t, lang } = useLanguage();

  return (
    <section id="skills" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <SectionTitle
          eyebrow={t.skills.eyebrow}
          title={
            <>
              {t.skills.title1} <span className="text-emerald-600 dark:text-emerald-400">{t.skills.title2}</span>
            </>
          }
          subtitle={t.skills.subtitle}
        />

        {/* Skills grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map((group, gi) => {
            const Icon = ICON_MAP[group.icon] || Code2;
            const color = COLOR_PALETTE[gi % COLOR_PALETTE.length];
            return (
              <motion.div
                key={gi}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: (gi % 3) * 0.1 }}
                whileHover={{ y: -4 }}
                className="neo neo-hover p-6 group flex flex-col justify-between"
              >
                <div>
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
                      <h3 className="font-bold text-sm text-foreground/90">
                        {getLocalized(group.category, lang)}
                      </h3>
                      <p className="text-[10px] text-muted-c tracking-wider uppercase font-semibold">
                        {group.skills.length} {t.skills.skillsCount}
                      </p>
                    </div>
                  </div>

                  {/* Skill Contents */}
                  {getLocalized(group.category, "en") === "Competitive Excellence" ? (
                    /* Competitive Excellence: Row List */
                    <div className="space-y-2">
                      {group.skills.map((skill, si) => (
                        <div
                          key={si}
                          className="neo-inset-sm p-2.5 px-3 rounded-xl flex items-center justify-between text-xs"
                        >
                          <span className="font-semibold text-foreground/90">
                            {getLocalized(skill.name, lang)}
                          </span>
                          {skill.badge && (
                            <span
                              className="font-bold text-[9px] tracking-wide ml-2 bg-white/20 dark:bg-black/20 px-2 py-0.5 rounded-full select-none"
                              style={{ color }}
                            >
                              {getLocalized(skill.badge, lang)}
                            </span>
                          )}
                        </div>
                      ))}
                    </div>
                  ) : getLocalized(group.category, "en") === "Professional Skills" ? (
                    /* Professional Skills: Bullet Lists & Descriptions */
                    <div className="space-y-3">
                      {group.skills.filter((s) => s.description).map((skill, si) => (
                        <div key={si} className="neo-inset-sm p-3 rounded-xl space-y-1">
                          <h4 className="font-bold text-xs" style={{ color }}>
                            {getLocalized(skill.name, lang)}
                          </h4>
                          <p className="text-[11px] leading-relaxed text-muted-c">
                            {getLocalized(skill.description, lang)}
                          </p>
                        </div>
                      ))}
                      {/* Items without description as mini badges */}
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {group.skills.filter((s) => !s.description).map((skill, si) => (
                          <span
                            key={si}
                            className="neo-inset-sm px-2.5 py-1.5 rounded-xl text-xs font-semibold text-foreground/80"
                          >
                            {getLocalized(skill.name, lang)}
                          </span>
                        ))}
                      </div>
                    </div>
                  ) : (
                    /* Default: Badges / Tags */
                    <div className="flex flex-wrap gap-1.5">
                      {group.skills.map((skill, si) => (
                        <span
                          key={si}
                          className="neo-inset-sm px-3 py-2 rounded-xl text-xs font-semibold flex flex-col items-start gap-0.5 select-none"
                        >
                          <span className="text-foreground/90">
                            {getLocalized(skill.name, lang)}
                          </span>
                          {skill.badge && (
                            <span
                              className="text-[9px] font-black opacity-80 tracking-wider uppercase mt-0.5"
                              style={{ color }}
                            >
                              {getLocalized(skill.badge, lang)}
                            </span>
                          )}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Languages & Certifications row */}
        <div className="grid md:grid-cols-2 gap-6 mt-6">
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
                <Languages className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
              </div>
              <h3 className="font-bold text-sm text-foreground/90">{t.skills.languages}</h3>
            </div>
            <div className="space-y-3">
              {languages.map((langItem, i) => (
                <div key={i} className="neo-inset-sm p-4 rounded-2xl flex items-center justify-between">
                  <div>
                    <span className="font-bold text-sm text-foreground/90">{langItem.name}</span>
                    <span className="text-xs text-muted-c ml-2">({langItem.level})</span>
                  </div>
                  <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 select-none">
                    {langItem.level === "Native" 
                      ? (lang === "en" ? "Native Speaker" : "Penutur Asli") 
                      : (lang === "en" ? "Professional" : "Menengah")}
                  </span>
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
                <Trophy className="w-5 h-5 text-amber-500" />
              </div>
              <h3 className="font-bold text-sm text-foreground/90">{t.skills.certifications}</h3>
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
                    <div className="w-2 h-2 rounded-full bg-emerald-500 mt-1.5 flex-shrink-0 animate-pulse" />
                    <div>
                      <p className="font-bold text-sm leading-tight text-foreground/90">
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
