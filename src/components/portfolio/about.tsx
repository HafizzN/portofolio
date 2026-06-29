"use client";

import { motion } from "framer-motion";
import { GraduationCap, Target, Eye, Heart } from "lucide-react";
import SectionTitle from "./section-title";
import { profile, education } from "@/lib/portfolio/cv-data";

export default function About() {
  return (
    <section id="about" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <SectionTitle
          eyebrow="Profile"
          title={
            <>
              About <span className="text-gradient-accent">Me</span>
            </>
          }
          subtitle="Business Strategist turned Laravel Craftsman — bridging data-driven decision making with full-stack engineering."
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
                <Target className="w-5 h-5 text-accent-c" />
              </div>
              <h3 className="text-xl font-bold">Who I Am</h3>
            </div>
            <p className="text-sm sm:text-base leading-relaxed text-foreground/90 mb-4">
              {profile.about}
            </p>
            <p className="text-sm sm:text-base leading-relaxed text-muted-c">
              I blend analytical rigor from business simulation championships
              with technical depth from building production Laravel
              applications. Whether it's optimizing a virtual company's revenue
              in a 6-hour MonsoonSIM session, or architecting an HRIS system
              consumed by a Flutter mobile app — I thrive at the intersection of
              strategy and execution.
            </p>

            {/* Mini highlights */}
            <div className="grid sm:grid-cols-3 gap-3 mt-6">
              {[
                { label: "Strategy", icon: Target },
                { label: "Engineering", icon: GraduationCap },
                { label: "Leadership", icon: Heart },
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
                  <item.icon className="w-5 h-5 text-accent-c" />
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
                  <GraduationCap className="w-4 h-4 text-accent-c" />
                </div>
                <h3 className="font-bold">Education</h3>
              </div>
              {education.map((edu, i) => (
                <div key={i} className="space-y-2">
                  <p className="font-semibold text-sm">{edu.institution}</p>
                  <p className="text-xs text-muted-c">{edu.degree}</p>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-muted-c">{edu.period}</span>
                    <span className="neo-inset-sm px-2.5 py-1 rounded-full font-bold text-accent-c">
                      GPA {edu.gpa}
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
                  <Eye className="w-4 h-4 text-accent-c" />
                </div>
                <h3 className="font-bold">My Vision</h3>
              </div>
              <p className="text-sm leading-relaxed text-muted-c">
                To become a versatile digital leader who builds scalable
                software products while driving strategic business decisions —
                combining the precision of an engineer with the mindset of a
                CEO.
              </p>
              {/* Mini progress indicator */}
              <div className="mt-4 space-y-2">
                {[
                  { label: "Engineering", value: 85 },
                  { label: "Strategy", value: 92 },
                ].map((item, i) => (
                  <div key={i}>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-muted-c">{item.label}</span>
                      <span className="font-bold text-accent-c">
                        {item.value}%
                      </span>
                    </div>
                    <div className="neo-inset-sm h-2 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${item.value}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.3 + i * 0.2 }}
                        className="h-full neo-accent-bg rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
