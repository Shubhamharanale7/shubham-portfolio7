"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const WORDS = ["DevOps Engineer", "Cloud Architect", "MLOps Engineer", "AI Infra Engineer"];

export default function Typewriter() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIndex((p) => (p + 1) % WORDS.length), 3000);
    return () => clearInterval(t);
  }, []);

  return (
    <span className="relative inline-block" style={{ perspective: "600px" }}>
      <AnimatePresence mode="wait">
        <motion.span
          key={WORDS[index]}
          className="inline-block font-mono text-[#A9D6FF]"
          initial={{ rotateX: -80, opacity: 0, y: 8, filter: "blur(4px)" }}
          animate={{ rotateX: 0,   opacity: 1, y: 0, filter: "blur(0px)" }}
          exit={  { rotateX:  80, opacity: 0, y: -8, filter: "blur(4px)" }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          style={{ transformStyle: "preserve-3d", display: "inline-block" }}
        >
          {WORDS[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
