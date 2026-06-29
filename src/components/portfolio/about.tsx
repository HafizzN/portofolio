"use client";

import { motion } from "framer-motion";
import { GraduationCap, Target, Eye, Heart } from "lucide-react";
import SectionTitle from "./section-title";
import { useLanguage } from "@/lib/portfolio/language-context";
import { getProfile, education } from "@/lib/portfolio/cv-data";

export default function About() {
  const { t, lang } = useLanguage();
  const p = getProfile(lang);

  return (
    <section id="about" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <SectionTitle
          eyebrow={t.about.eyebrow}
          title={
            <>
              {t.about.title1} <span className="text-indigo-600 dark:text-indigo-400">{t.about.title2}</span>
            </>
          }
          subtitle={t.about.subtitle}
        />

        <div className="grid lg:grid-cols-[1.4fr_1fr] gap-6">
          {/* Main bio card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -4 }}
            className="neo neo-hover p-8 lg:p-10 relative overflow-hidden"
          >
            {/* Decorative orb */}
            <div
              className="absolute -top-10 -right-10 w-40 h-40 rounded-full blur-2xl opacity-30 pointer-events-none"
              style={{
                background:
                  "radial-gradient(circle, var(--neo-accent), transparent)",
              }}
            />
            <div className="flex items-center gap-3 mb-5">
              <div className="neo-inset-sm w-12 h-12 rounded-2xl flex items-center justify-center">
                <Target className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
              </div>
              <h3 className="text-xl font-bold">{t.about.whoIam}</h3>
            </div>
            <p className="text-sm sm:text-base leading-relaxed text-foreground/90 mb-4">
              {p.about}
            </p>
            <p className="text-sm sm:text-base leading-relaxed text-muted-c">
              {lang === "en"
                ? "I blend analytical rigor from business simulation championships with technical depth from building production Laravel applications. Whether it's optimizing a virtual company's revenue in a 6-hour MonsoonSIM session, or architecting an HRIS system consumed by a Flutter mobile app — I thrive at the intersection of strategy and execution."
                : "Saya menggabungkan ketelitian analitis dari kejuaraan simulasi bisnis dengan kedalaman teknis dari membangun aplikasi Laravel produksi. Baik mengoptimalkan pendapatan perusahaan virtual dalam sesi MonsoonSIM 6 jam, atau merancang sistem HRIS yang dikonsumsi aplikasi mobile Flutter — saya berkembang di persimpangan strategi dan eksekusi."}
            </p>

            {/* Mini highlights */}
            <div className="grid sm:grid-cols-3 gap-3 mt-6">
              {[
                { label: t.about.strategy, icon: Target },
                { label: t.about.engineering, icon: GraduationCap },
                { label: t.about.leadership, icon: Heart },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="neo-inset-sm p-3 rounded-2xl flex flex-col items-center gap-2 text-center"
                >
                  <item.icon className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                  <span className="text-xs font-semibold tracking-wider uppercase">
                    {item.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right column - Education + Vision */}
          <div className="flex flex-col gap-6">
            {/* Education card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              whileHover={{ y: -4 }}
              className="neo neo-hover p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="neo-inset-sm w-10 h-10 rounded-xl flex items-center justify-center">
                  <GraduationCap className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                </div>
                <h3 className="font-bold">{t.about.education}</h3>
              </div>
              {education.map((edu, i) => (
                <div key={i} className="space-y-2">
                  <p className="font-semibold text-sm">{edu.institution}</p>
                  <p className="text-xs text-muted-c">{edu.degree}</p>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-muted-c">{edu.period}</span>
                    <span className="neo-inset-sm px-2.5 py-1 rounded-full font-bold text-indigo-600 dark:text-indigo-400">
                      {t.about.gpa} {edu.gpa}
                    </span>
                  </div>
                  <p className="text-xs text-muted-c">{edu.location}</p>
                </div>
              ))}
            </motion.div>

            {/* Vision card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ y: -4 }}
              className="neo neo-hover p-6 relative overflow-hidden"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="neo-inset-sm w-10 h-10 rounded-xl flex items-center justify-center">
                  <Eye className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                </div>
                <h3 className="font-bold">{t.about.visionTitle}</h3>
              </div>
              <p className="text-sm leading-relaxed text-muted-c">
                {t.about.visionText}
              </p>
              {/* Localized expertise pills */}
              <div className="mt-5 flex flex-wrap gap-2">
                {(t.about.visionSkills || [
                  "Business Strategy",
                  "Product Development",
                  "Data Analytics",
                  "Digital Marketing",
                  "Software Engineering"
                ]).map((skill: string, i: number) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.1 + i * 0.05 }}
                    whileHover={{ scale: 1.05 }}
                    className="neo-inset-sm px-3.5 py-2 rounded-xl text-xs font-semibold text-indigo-600 dark:text-indigo-400 select-none"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
