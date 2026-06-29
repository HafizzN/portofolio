"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "@/components/portfolio/navbar";
import Hero from "@/components/portfolio/hero";
import About from "@/components/portfolio/about";
import Awards from "@/components/portfolio/awards";
import Projects from "@/components/portfolio/projects";
import ExperienceSection from "@/components/portfolio/experience";
import Skills from "@/components/portfolio/skills";
import Contact from "@/components/portfolio/contact";
import Footer from "@/components/portfolio/footer";
import ScrollProgress from "@/components/portfolio/scroll-progress";

// Load intro only on client (it uses framer-motion's useMotionValueEvent)
const GreetingsIntro = dynamic(
  () => import("@/components/portfolio/greetings-intro"),
  { ssr: false }
);

export default function Home() {
  const [introDone, setIntroDone] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("light");

  // Lock scroll while intro is playing
  useEffect(() => {
    if (!introDone) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [introDone]);

  const toggleTheme = () => {
    const next = theme === "light" ? "dark" : "light";
    setTheme(next);
    if (next === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <>
      <ScrollProgress />

      <AnimatePresence>
        {!introDone && <GreetingsIntro onComplete={() => setIntroDone(true)} />}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: introDone ? 1 : 0 }}
        transition={{ duration: 0.8, delay: introDone ? 0.2 : 0 }}
      >
        <Navbar theme={theme} onToggleTheme={toggleTheme} />

        <main className="min-h-screen">
          <Hero />
          <About />
          <Awards />
          <Projects />
          <ExperienceSection />
          <Skills />
          <Contact />
        </main>

        <Footer />
      </motion.div>
    </>
  );
}
