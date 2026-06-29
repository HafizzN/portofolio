"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface Snowflake {
  id: number;
  size: number;
  x: number;
  duration: number;
  delay: number;
}

export default function SnowEffect() {
  const [snowflakes, setSnowflakes] = useState<Snowflake[]>([]);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    // Generate 15 snowflakes (more subtle and elegant)
    const flakes = Array.from({ length: 15 }).map((_, i) => ({
      id: i,
      size: Math.random() * 10 + 4,      // Size from 4px to 14px
      x: Math.random() * 100,           // Starting X position (%)
      duration: Math.random() * 15 + 12, // Float speed (12s to 27s)
      delay: Math.random() * -20,       // Negative delay so they start pre-distributed
    }));
    timer = setTimeout(() => {
      setSnowflakes(flakes);
    }, 0);
    return () => {
      if (timer) clearTimeout(timer);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-[45]">
      {snowflakes.map((flake) => (
        <motion.div
          key={flake.id}
          drag
          dragElastic={0.6}
          dragMomentum={true}
          whileDrag={{ scale: 1.8, cursor: "grabbing" }}
          className="absolute rounded-full bg-white/80 dark:bg-white/40 shadow-[0_0_10px_2px_rgba(255,255,255,0.65)] dark:shadow-[0_0_8px_1px_rgba(255,255,255,0.3)] pointer-events-auto cursor-grab"
          style={{
            width: flake.size,
            height: flake.size,
            left: `${flake.x}%`,
          }}
          initial={{ y: "-10vh" }}
          animate={{
            y: "110vh",
            x: [`${flake.x}%`, `${flake.x + (Math.random() * 15 - 7.5)}%`],
          }}
          transition={{
            y: {
              duration: flake.duration,
              repeat: Infinity,
              ease: "linear",
              delay: flake.delay,
            },
            x: {
              duration: flake.duration / 3,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            },
          }}
        />
      ))}
    </div>
  );
}
