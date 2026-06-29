"use client";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import { Menu, X, Moon, Sun } from "lucide-react";
import { useLanguage } from "@/lib/portfolio/language-context";
import LanguageToggle from "./language-toggle";

export default function Navbar({
  theme,
  onToggleTheme,
}: {
  theme: "light" | "dark";
  onToggleTheme: () => void;
}) {
  const { t } = useLanguage();
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("hero");
  const [scrolled, setScrolled] = useState(false);

  const NAV_ITEMS = [
    { id: "hero", label: t.nav.home },
    { id: "about", label: t.nav.about },
    { id: "awards", label: t.nav.awards },
    { id: "projects", label: t.nav.projects },
    { id: "experience", label: t.nav.experience },
    { id: "skills", label: t.nav.skills },
    { id: "contact", label: t.nav.contact },
  ];

  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (v) => {
    setScrolled(v > 40);
    // section detection
    const offsets = NAV_ITEMS.map((it) => {
      const el = document.getElementById(it.id);
      if (!el) return { id: it.id, top: Infinity };
      const rect = el.getBoundingClientRect();
      return { id: it.id, top: Math.abs(rect.top - 120) };
    });
    offsets.sort((a, b) => a.top - b.top);
    if (offsets[0]) setActive(offsets[0].id);
  });

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setOpen(false);
  };

  return (
    <>
      {/* Floating navbar */}
      <motion.nav
        className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[min(1100px,94%)]"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div
          className={`neo-sm flex items-center justify-between gap-2 px-3 sm:px-6 py-3 transition-all duration-300 ${
            scrolled ? "neo-glow" : ""
          }`}
        >
          {/* Logo */}
          <motion.button
            onClick={() => scrollTo("hero")}
            className="flex items-center gap-2 group flex-shrink-0"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            <div className="w-9 h-9 rounded-xl neo-inset-sm flex items-center justify-center">
              <span className="text-accent-c font-black text-lg">H</span>
            </div>
            <div className="hidden sm:block">
              <p className="font-bold text-sm leading-tight">Hafizul Hanif</p>
              <p className="text-[10px] text-muted-c tracking-wider uppercase">
                {t.nav.portfolio}
              </p>
            </div>
          </motion.button>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <motion.button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="relative px-3 py-2 text-sm font-medium transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span
                  className={
                    active === item.id
                      ? "text-accent-c"
                      : "hover:text-accent-c transition-colors"
                  }
                >
                  {item.label}
                </span>
                {active === item.id && (
                  <motion.div
                    layoutId="nav-active"
                    className="absolute inset-0 neo-inset-sm -z-10 rounded-xl"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
              </motion.button>
            ))}
          </div>

          {/* Right actions */}
          <div className="flex items-center gap-1.5 sm:gap-2 flex-shrink-0">
            <LanguageToggle />

            <motion.button
              onClick={onToggleTheme}
              className="neo-sm neo-hover neo-press w-9 h-9 rounded-xl flex items-center justify-center"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Toggle theme"
            >
              {theme === "light" ? (
                <Moon className="w-4 h-4 text-accent-c" />
              ) : (
                <Sun className="w-4 h-4 text-accent-2-c" />
              )}
            </motion.button>

            {/* Mobile menu toggle */}
            <motion.button
              onClick={() => setOpen((o) => !o)}
              className="md:hidden neo-sm neo-hover neo-press w-9 h-9 rounded-xl flex items-center justify-center"
              whileTap={{ scale: 0.9 }}
              aria-label="Menu"
            >
              {open ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </motion.button>
          </div>
        </div>

        {/* Mobile dropdown */}
        <motion.div
          className="md:hidden mt-2 overflow-hidden"
          initial={false}
          animate={{
            height: open ? "auto" : 0,
            opacity: open ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
        >
          <div className="neo-sm p-3 flex flex-col gap-1">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`text-left px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                  active === item.id
                    ? "neo-inset-sm text-accent-c"
                    : "hover:neo-inset-sm"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </motion.div>
      </motion.nav>
    </>
  );
}
