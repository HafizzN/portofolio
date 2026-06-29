"use client";

import { motion } from "framer-motion";
import {
  Briefcase,
  Users,
  Camera,
  Palette,
  Package,
  Calendar,
  MapPin,
} from "lucide-react";
import SectionTitle from "./section-title";
import {
  internships,
  organizations,
  committees,
  type Experience,
  type Committee,
} from "@/lib/portfolio/cv-data";

function TimelineCard({
  item,
  index,
  type,
}: {
  item: Experience | Committee;
  index: number;
  type: "internship" | "org" | "committee";
}) {
  const isCommittee = type === "committee";
  const role = isCommittee
    ? (item as Committee).role
    : (item as Experience).role;
  const org = isCommittee
    ? (item as Committee).event
    : (item as Experience).organization;
  const period = isCommittee
    ? (item as Committee).year
    : (item as Experience).period;
  const location = !isCommittee
    ? (item as Experience).location
    : undefined;
  const bullets = item.bullets;

  const iconMap = {
    internship: Briefcase,
    org: Users,
    committee: Camera,
  };
  const Icon = iconMap[type];

  const colorMap = {
    internship: "var(--neo-accent)",
    org: "var(--neo-accent-3)",
    committee: "var(--neo-accent-2)",
  };
  const color = colorMap[type];

  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative pl-12 pb-8 group"
    >
      {/* Timeline dot */}
      <div className="absolute left-0 top-0">
        <motion.div
          whileHover={{ scale: 1.2 }}
          className="neo-inset-sm w-10 h-10 rounded-2xl flex items-center justify-center relative z-10"
          style={{
            boxShadow: `inset 3px 3px 6px var(--neo-dark), inset -3px -3px 6px var(--neo-light), 0 0 16px ${color}`,
          }}
        >
          <Icon className="w-4 h-4" style={{ color }} />
        </motion.div>
      </div>

      {/* Vertical line */}
      <div
        className="absolute left-[19px] top-12 bottom-0 w-0.5"
        style={{
          background: `linear-gradient(to bottom, ${color}, transparent)`,
          opacity: 0.4,
        }}
      />

      {/* Card */}
      <motion.div
        whileHover={{ y: -3, x: 3 }}
        className="neo neo-hover p-5 rounded-2xl"
      >
        <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
          <div className="flex-1 min-w-0">
            <h4 className="font-bold text-sm leading-tight mb-1">{org}</h4>
            <p
              className="text-xs font-semibold"
              style={{ color }}
            >
              {role}
            </p>
          </div>
          <div className="flex flex-col items-end gap-1 text-[10px] text-muted-c">
            <span className="flex items-center gap-1">
              <Calendar className="w-2.5 h-2.5" />
              {period}
            </span>
            {location && (
              <span className="flex items-center gap-1">
                <MapPin className="w-2.5 h-2.5" />
                {location}
              </span>
            )}
          </div>
        </div>

        <ul className="space-y-1.5 mt-3">
          {bullets.map((b, i) => (
            <li
              key={i}
              className="flex gap-2 text-xs text-muted-c leading-relaxed"
            >
              <span
                className="w-1 h-1 rounded-full mt-1.5 flex-shrink-0"
                style={{ background: color }}
              />
              <span>{b}</span>
            </li>
          ))}
        </ul>
      </motion.div>
    </motion.div>
  );
}

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <SectionTitle
          eyebrow="Journey"
          title={
            <>
              Beyond the <span className="text-gradient-accent">Code</span>
            </>
          }
          subtitle="Internship, organizational leadership, and committee roles that shaped my professional character."
        />

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Internship */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-6"
            >
              <div
                className="neo-inset-sm w-11 h-11 rounded-2xl flex items-center justify-center"
                style={{ boxShadow: "0 0 16px var(--neo-glow)" }}
              >
                <Briefcase className="w-5 h-5 text-accent-c" />
              </div>
              <div>
                <h3 className="font-bold text-base">Internship</h3>
                <p className="text-xs text-muted-c">
                  Hands-on business mentoring
                </p>
              </div>
            </motion.div>
            <div>
              {internships.map((item, i) => (
                <TimelineCard
                  key={i}
                  item={item}
                  index={i}
                  type="internship"
                />
              ))}
            </div>
          </div>

          {/* Organization */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-6"
            >
              <div
                className="neo-inset-sm w-11 h-11 rounded-2xl flex items-center justify-center"
                style={{ boxShadow: "0 0 16px rgba(58, 110, 165, 0.4)" }}
              >
                <Users className="w-5 h-5" style={{ color: "var(--neo-accent-3)" }} />
              </div>
              <div>
                <h3 className="font-bold text-base">Organization</h3>
                <p className="text-xs text-muted-c">Leadership roles</p>
              </div>
            </motion.div>
            <div>
              {organizations.map((item, i) => (
                <TimelineCard
                  key={i}
                  item={item}
                  index={i}
                  type="org"
                />
              ))}
            </div>
          </div>

          {/* Committee */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-6"
            >
              <div
                className="neo-inset-sm w-11 h-11 rounded-2xl flex items-center justify-center"
                style={{ boxShadow: "0 0 16px rgba(248, 181, 0, 0.4)" }}
              >
                <Camera className="w-5 h-5 text-accent-2-c" />
              </div>
              <div>
                <h3 className="font-bold text-base">Committee</h3>
                <p className="text-xs text-muted-c">5 event productions</p>
              </div>
            </motion.div>
            <div>
              {committees.map((item, i) => (
                <TimelineCard
                  key={i}
                  item={item}
                  index={i}
                  type="committee"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
