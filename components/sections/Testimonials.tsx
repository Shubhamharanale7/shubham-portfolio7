"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Star } from "lucide-react";
import { TESTIMONIALS } from "@/lib/data";
import SectionHeader from "@/components/ui/SectionHeader";
import type { Testimonial } from "@/lib/types";

const AVATAR_COLORS = ["#2F6BFF","#7C3AED","#0891B2","#059669","#D97706","#9333EA"];

const ROW_A = TESTIMONIALS;
const ROW_B = [...TESTIMONIALS].reverse();

function TestiCard({ t, colorIndex }: { t: Testimonial; colorIndex: number }) {
  const bg = AVATAR_COLORS[colorIndex % AVATAR_COLORS.length];
  return (
    <article className="flex-shrink-0 w-[320px] rounded-2xl p-5 flex flex-col gap-4 select-none"
      style={{
        background: "linear-gradient(150deg, #0D1A32 0%, #080C18 100%)",
        border: "1px solid rgba(47,107,255,0.13)",
      }}>
      {/* Stars */}
      <div className="flex gap-0.5">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} size={13} className="fill-amber-400 text-amber-400" />
        ))}
      </div>

      {/* Quote */}
      <p className="text-[0.8125rem] text-[#8B95A8] leading-[1.65] italic flex-1">
        &ldquo;{t.text}&rdquo;
      </p>

      {/* Result badge */}
      <div className="metric-badge">✓ {t.result}</div>

      {/* Author */}
      <div className="flex items-center gap-3 pt-3.5 border-t border-[rgba(47,107,255,0.09)]">
        <div className="w-9 h-9 rounded-full flex items-center justify-center text-[11px] font-bold text-white flex-shrink-0"
          style={{ background: bg }}>
          {t.initials}
        </div>
        <div>
          <p className="text-[0.8125rem] font-semibold text-[#F0F6FF] leading-tight">{t.name}</p>
          <p className="text-[10px] font-mono text-[#5A6478]">{t.role} · {t.company}</p>
        </div>
      </div>
    </article>
  );
}

function MarqueeRow({ items, reverse = false, duration = 45 }: { items: Testimonial[]; reverse?: boolean; duration?: number }) {
  const looped = [...items, ...items, ...items];
  const anim = reverse ? "testi-reverse" : "testi-forward";
  return (
    <div className="relative overflow-hidden">
      <div className="absolute left-0 top-0 bottom-0 w-28 z-10 bg-gradient-to-r from-[#080C18] to-transparent pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-28 z-10 bg-gradient-to-l from-[#080C18] to-transparent pointer-events-none" />
      <div className="flex gap-4 w-max" style={{ animation: `${anim} ${duration}s linear infinite` }}>
        {looped.map((t, i) => (
          <TestiCard key={`${t.name}-${i}`} t={t} colorIndex={i % AVATAR_COLORS.length} />
        ))}
      </div>
    </div>
  );
}

export default function Testimonials() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section id="testimonials" ref={ref} className="py-28 overflow-hidden bg-[#080C18]">
      <div className="px-6 lg:px-10 max-w-6xl mx-auto mb-14">
        <motion.div initial={{ opacity:0, y:28 }} animate={inView ? { opacity:1, y:0 } : {}}
          transition={{ duration:0.7 }}>
          <SectionHeader label="testimonials"
            title={<>What founders &amp; CTOs <br /><span className="text-gradient-blue">say about the work</span></>}
            subtitle="Results-focused feedback from startup leaders — not generic praise." />
        </motion.div>

        {/* Metric strip */}
        <motion.div className="flex flex-wrap gap-3 mt-10"
          initial={{ opacity:0, y:16 }} animate={inView ? { opacity:1, y:0 } : {}}
          transition={{ duration:0.6, delay:0.2 }}>
          {[
            { value:"6+",   label:"Satisfied Clients"    },
            { value:"100%", label:"Project Success Rate" },
            { value:"4.9★", label:"Average Rating"       },
          ].map(({ value, label }) => (
            <div key={label}
              className="flex items-center gap-3 px-5 py-2.5 rounded-xl border border-[rgba(47,107,255,0.13)]"
              style={{ background:"linear-gradient(145deg,#0D1A32,#080C18)" }}>
              <span className="text-[1.125rem] font-bold font-mono text-[#F0F6FF]">{value}</span>
              <span className="text-[0.75rem] text-[#8B95A8]">{label}</span>
            </div>
          ))}
        </motion.div>
      </div>

      <motion.div className="flex flex-col gap-4"
        initial={{ opacity:0 }} animate={inView ? { opacity:1 } : {}}
        transition={{ duration:0.7, delay:0.3 }}>
        <MarqueeRow items={ROW_A} reverse={false} duration={48} />
        <MarqueeRow items={ROW_B} reverse={true}  duration={40} />
      </motion.div>
    </section>
  );
}
