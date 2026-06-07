"use client";

import { motion } from "framer-motion";
import { useCountUp } from "@/lib/useCountUp";

const METRICS = [
  { value: 30,  suffix: "+",   label: "Projects Delivered",       desc: "Built & shipped to production"       },
  { value: 99,  suffix: ".9%", label: "Uptime SLA",               desc: "Across all managed infrastructure"    },
  { value: 30,  suffix: "%",   label: "Cloud Cost Reduction",     desc: "Architecture-driven optimization"     },
  { value: 40,  suffix: "%",   label: "Faster Deployments",       desc: "Via CI/CD pipeline automation"        },
  { value: 6,   suffix: "+",   label: "Years Experience",         desc: "DevOps, Cloud & AI systems"           },
  { value: 100, suffix: "%",   label: "Project Success Rate",     desc: "On-time, on-spec delivery"            },
];

function Num({ value, suffix, label, desc, delay }: {
  value: number; suffix: string; label: string; desc: string; delay: number;
}) {
  const { count, ref } = useCountUp(value, 1900);
  return (
    <motion.div ref={ref as React.RefObject<HTMLDivElement>}
      className="text-center px-6 py-8 group cursor-default"
      initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }} transition={{ duration: 0.6, delay }}>
      <div className="text-[2.75rem] md:text-[3.25rem] font-bold font-mono leading-none mb-2 text-[#F0F6FF]">
        {count}<span className="text-[#2F6BFF]">{suffix}</span>
      </div>
      <p className="text-[0.875rem] font-semibold text-[#8B95A8] mb-1">{label}</p>
      <p className="text-[0.75rem] text-[#5A6478]">{desc}</p>
    </motion.div>
  );
}

export default function Impact() {
  return (
    <section className="py-28 px-6 lg:px-10 relative"
      style={{ background: "linear-gradient(180deg, rgba(13,26,50,0.4) 0%, #080C18 100%)" }}>
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
        <div className="w-[900px] h-[300px] rounded-full" style={{ background: "radial-gradient(ellipse, rgba(47,107,255,0.05) 0%, transparent 70%)" }} />
      </div>
      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div className="text-center mb-14"
          initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.7 }}>
          <span className="section-label">// impact</span>
          <h2 className="font-bold tracking-tight text-[#F0F6FF]" style={{ fontSize: "clamp(2rem,4vw,3rem)" }}>
            Numbers that <span className="text-gradient-blue">matter</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 divide-x divide-y divide-[rgba(47,107,255,0.09)] border border-[rgba(47,107,255,0.09)] rounded-3xl overflow-hidden"
          style={{ background: "linear-gradient(145deg, #0D1A32 0%, #080C18 100%)" }}>
          {METRICS.map((m, i) => <Num key={m.label} {...m} delay={i * 0.08} />)}
        </div>
      </div>
    </section>
  );
}
