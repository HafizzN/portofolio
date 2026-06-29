"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { Globe, Check, ChevronDown } from "lucide-react";
import { useLanguage } from "@/lib/portfolio/language-context";
import type { Lang } from "@/lib/portfolio/translations";

const LANGUAGES: { code: Lang; label: string; native: string; flag: string }[] =
  [
    { code: "en", label: "English", native: "English", flag: "🇬🇧" },
    { code: "id", label: "Indonesian", native: "Bahasa Indonesia", flag: "🇮🇩" },
  ];

export default function LanguageToggle() {
  const { lang, setLang, t } = useLanguage();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Close on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const current = LANGUAGES.find((l) => l.code === lang)!;

  return (
    <div ref={ref} className="relative">
      <motion.button
        onClick={() => setOpen((o) => !o)}
        whileHover={{ scale: 1.05, y: -1 }}
        whileTap={{ scale: 0.95 }}
        className="neo-sm neo-hover neo-press px-2.5 sm:px-3 h-9 rounded-xl flex items-center gap-1.5 text-xs font-bold"
        aria-label={t.language.label}
        aria-expanded={open}
      >
        <Globe className="w-4 h-4 text-accent-c" />
        <span className="hidden sm:inline uppercase">{current.code}</span>
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronDown className="w-3 h-3 text-muted-c" />
        </motion.span>
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            className="absolute right-0 top-full mt-2 neo p-2 min-w-[180px] z-50"
          >
            <p className="px-3 py-1.5 text-[10px] font-bold tracking-widest uppercase text-muted-c">
              {t.language.label}
            </p>
            {LANGUAGES.map((l) => (
              <motion.button
                key={l.code}
                onClick={() => {
                  setLang(l.code);
                  setOpen(false);
                }}
                whileHover={{ x: 2 }}
                className={`w-full px-3 py-2.5 rounded-xl flex items-center gap-3 text-left transition-all ${
                  lang === l.code
                    ? "neo-inset-sm"
                    : "hover:neo-inset-sm"
                }`}
              >
                <span className="text-lg leading-none">{l.flag}</span>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-bold leading-tight">
                    {l.native}
                  </p>
                  <p className="text-[10px] text-muted-c tracking-wider uppercase">
                    {l.label}
                  </p>
                </div>
                {lang === l.code && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Check className="w-4 h-4 text-accent-c" />
                  </motion.div>
                )}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
