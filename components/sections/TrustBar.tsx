"use client";

import { motion } from "framer-motion";
import { TRUST_ITEMS } from "@/lib/data";

const ITEMS = [...TRUST_ITEMS, ...TRUST_ITEMS];

export default function TrustBar() {
  return (
    <motion.div
      className="relative overflow-hidden py-5 border-y border-[rgba(47,107,255,0.1)]"
      style={{ background: "rgba(13,26,50,0.5)", backdropFilter: "blur(8px)" }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="absolute left-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-r from-[#080C18] to-transparent pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-l from-[#080C18] to-transparent pointer-events-none" />
      <div className="flex gap-10 w-max" style={{ animation: "marquee-fwd 32s linear infinite" }}>
        {ITEMS.map((item, i) => (
          <div key={`${item}-${i}`} className="flex items-center gap-3 whitespace-nowrap select-none">
            <span className="w-1 h-1 rounded-full bg-[#2F6BFF] flex-shrink-0" />
            <span className="text-[0.8125rem] font-medium text-[#8B95A8] tracking-wide">{item}</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
