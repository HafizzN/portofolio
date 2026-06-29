"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  type ReactNode,
} from "react";
import { usePathname, useRouter } from "next/navigation";
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
  const pathname = usePathname();
  const router = useRouter();

  // Helper to extract language from URL pathname
  const getLangFromPath = (path: string): Lang => {
    if (path.startsWith("/in") || path.startsWith("/id")) {
      return "id";
    }
    return "en"; // Default is English
  };

  const [lang, setLangState] = useState<Lang>(() => {
    if (typeof window !== "undefined") {
      return getLangFromPath(window.location.pathname);
    }
    return "en"; // Default is English
  });

  // Sync state when pathname changes
  useEffect(() => {
    let timer: NodeJS.Timeout;
    const nextLang = getLangFromPath(pathname);
    timer = setTimeout(() => {
      setLangState(nextLang);
    }, 0);
    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [pathname]);

  const setLang = useCallback((l: Lang) => {
    const newPath = l === "en" ? "/en" : "/in";
    router.push(newPath);
  }, [router]);

  const toggleLang = useCallback(() => {
    setLangState((prev) => {
      const next = prev === "en" ? "id" : "en";
      const newPath = next === "en" ? "/en" : "/in";
      router.push(newPath);
      return next;
    });
  }, [router]);

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
