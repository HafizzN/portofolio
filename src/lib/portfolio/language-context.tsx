"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  type ReactNode,
} from "react";
import { translations, type Lang, type TranslationKeys } from "./translations";

type Translations = typeof translations[keyof typeof translations];

interface LanguageContextValue {
  lang: Lang;
  setLang: (l: Lang) => void;
  toggleLang: () => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("id");

  // Read saved language from localStorage on client-side mount to avoid hydration mismatch
  useEffect(() => {
    let timer: NodeJS.Timeout;
    try {
      const saved = localStorage.getItem("portfolio-lang") as Lang | null;
      if (saved === "en" || saved === "id") {
        timer = setTimeout(() => {
          setLangState(saved);
        }, 0);
      }
    } catch {
      // ignore
    }
    return () => {
      if (timer) clearTimeout(timer);
    };
  }, []);

  // Persist language change & update <html lang>
  const setLang = useCallback((l: Lang) => {
    setLangState(l);
    try {
      localStorage.setItem("portfolio-lang", l);
    } catch {
      // ignore
    }
    if (typeof document !== "undefined") {
      document.documentElement.lang = l;
    }
  }, []);

  const toggleLang = useCallback(() => {
    setLangState((prev) => {
      const next = prev === "en" ? "id" : "en";
      try {
        localStorage.setItem("portfolio-lang", next);
      } catch {
        // ignore
      }
      if (typeof document !== "undefined") {
        document.documentElement.lang = next;
      }
      return next;
    });
  }, []);

  // Update html lang attribute on mount/change
  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = lang;
    }
  }, [lang]);

  const value: LanguageContextValue = {
    lang,
    setLang,
    toggleLang,
    t: translations[lang],
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return ctx;
}
