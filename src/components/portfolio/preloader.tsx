"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const words = [
  "Halo",        // Indonesia
  "Hello",        // Inggris
  "Bonjour",     // Prancis
  "Ciao",        // Italia
  "안녕하세요",    // Korea
  "你好",        // China
  "こんにちは",  // Jepang
  "Привет",        // Rusia
];

// Peta warna agar teksnya berganti warna secara dinamis
const colors = [
  "text-indigo-600 dark:text-indigo-400",
  "text-blue-600 dark:text-blue-400",
  "text-purple-600 dark:text-purple-400",
  "text-rose-600 dark:text-rose-400",
  "text-amber-500 dark:text-amber-400",
  "text-emerald-600 dark:text-emerald-400",
  "text-cyan-600 dark:text-cyan-400",
  "text-pink-600 dark:text-pink-400",
];

export default function Preloader({ onFinish }: { onFinish?: () => void }) {
  const [index, setIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Jika sudah sampai kata terakhir, hentikan loop dan tutup loading
    if (index === words.length - 1) {
      const timeout = setTimeout(() => {
        setIsVisible(false);
      }, 500); // Tahan kata terakhir selama 500ms
      return () => clearTimeout(timeout);
    }

    // Ganti kata setiap 200 milidetik
    const interval = setInterval(() => {
      setIndex((prev) => prev + 1);
    }, 200);

    return () => clearInterval(interval);
  }, [index]);

  useEffect(() => {
    // Kunci scrollbar browser selama loading aktif agar user tidak bisa scroll
    if (isVisible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
      if (onFinish) onFinish();
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isVisible, onFinish]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{
            y: "-100%", // Slide up ke atas layar seperti tirai
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.2 },
          }}
          className="fixed inset-0 bg-[#F3F0FF] z-[9999] flex items-center justify-center"
        >
          {/* Wrapper dengan overflow-hidden agar efek teks meluncur terlihat rapi */}
          <div className="overflow-hidden h-24 flex items-center justify-center">
            <motion.p
              key={index}
              initial={{ y: 60, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -60, opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className={`text-5xl md:text-7xl font-black tracking-tight ${colors[index]}`}
            >
              {words[index]}
              <span className="text-foreground/80">.</span>
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
