"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Preloader from "@/components/portfolio/preloader";
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
import SnowEffect from "@/components/portfolio/snow-effect";

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
      {introDone && <SnowEffect />}

      {!introDone && <Preloader onFinish={() => setIntroDone(true)} />}

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
