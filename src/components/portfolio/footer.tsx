"use client";

import { motion } from "framer-motion";
import { ArrowUp, Github, Linkedin, Mail, Globe } from "lucide-react";
import { useLanguage } from "@/lib/portfolio/language-context";
import { getProfile, profile } from "@/lib/portfolio/cv-data";

export default function Footer() {
  const { t, lang } = useLanguage();
  const p = getProfile(lang);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="mt-auto pt-12 pb-8 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="neo p-8 sm:p-10 relative overflow-hidden"
        >
          {/* Decorative blob */}
          <div
            className="absolute -bottom-20 -left-20 w-60 h-60 rounded-full blur-3xl opacity-20 pointer-events-none"
            style={{
              background:
                "radial-gradient(circle, var(--neo-accent), transparent)",
            }}
          />
          <div
            className="absolute -top-20 -right-20 w-60 h-60 rounded-full blur-3xl opacity-20 pointer-events-none"
            style={{
              background:
                "radial-gradient(circle, var(--neo-accent-2), transparent)",
            }}
          />

          <div className="grid md:grid-cols-3 gap-6 items-center relative z-10">
            {/* Left: Logo & tagline */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <div className="w-10 h-10 rounded-xl neo-inset-sm flex items-center justify-center">
                  <span className="text-accent-c font-black text-lg">H</span>
                </div>
                <div>
                  <p className="font-bold text-sm leading-tight">
                    {profile.name}
                  </p>
                  <p className="text-[10px] text-muted-c tracking-wider uppercase">
                    {p.title}
                  </p>
                </div>
              </div>
              <p className="text-xs text-muted-c leading-relaxed">
                {p.tagline}
              </p>
            </div>

            {/* Middle: Quick links */}
            <div className="flex flex-col items-center gap-2">
              <p className="text-[10px] text-muted-c tracking-wider uppercase font-semibold mb-2">
                {t.footer.quickLinks}
              </p>
              <div className="flex flex-wrap gap-2 justify-center">
                {([
                  { id: "hero", label: t.nav.home },
                  { id: "about", label: t.nav.about },
                  { id: "awards", label: t.nav.awards },
                  { id: "projects", label: t.nav.projects },
                  { id: "skills", label: t.nav.skills },
                  { id: "contact", label: t.nav.contact },
                ]).map((link) => (
                  <button
                    key={link.id}
                    onClick={() =>
                      document
                        .getElementById(link.id)
                        ?.scrollIntoView({ behavior: "smooth" })
                    }
                    className="neo-sm neo-hover px-3 py-1.5 rounded-full text-[11px] font-semibold"
                  >
                    {link.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Right: Social */}
            <div className="flex md:justify-end">
              <div className="flex gap-2">
                {[
                  { Icon: Mail, href: `mailto:${profile.email}`, title: "Email" },
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
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-8 pt-6 border-t flex flex-col sm:flex-row justify-between items-center gap-3 relative z-10" style={{ borderColor: "var(--border)" }}>
            <p className="text-xs text-muted-c">
              © {new Date().getFullYear()} {profile.name}. All rights reserved.
            </p>
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="neo-sm neo-hover neo-press px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5"
            >
              {t.footer.backToTop}
              <ArrowUp className="w-3 h-3 text-accent-c" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
