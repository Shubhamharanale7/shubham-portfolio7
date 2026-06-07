"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { PROCESS_STEPS } from "@/lib/data";
import SectionHeader from "@/components/ui/SectionHeader";

const ICONS: Record<string, string> = {
  "01":"🔍","02":"🏗️","03":"⚙️","04":"🔁","05":"🚀","06":"📈",
};

function DesktopStep({ step, index, total }: { step: typeof PROCESS_STEPS[0]; index: number; total: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-15% 0px -15% 0px" });

  return (
    <div ref={ref} className="relative flex flex-col items-center">
      {/* Connector line to next step */}
      {index < total - 1 && (
        <div className="absolute top-[38px] left-[calc(50%+32px)] right-0 h-[1.5px] z-0" style={{ width:"calc(100% - 64px)" }}>
          <div className="absolute inset-0 rounded-full bg-[rgba(47,107,255,0.1)]" />
          <motion.div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#2F6BFF] to-[#A9D6FF] origin-left"
            initial={{ scaleX:0 }} animate={inView ? { scaleX:1 } : { scaleX:0 }}
            transition={{ duration:0.8, delay:0.4, ease:[0.16,1,0.3,1] }} />
        </div>
      )}

      <motion.div className="relative z-10 flex flex-col items-center gap-3 px-2"
        initial={{ opacity:0, y:24 }} animate={inView ? { opacity:1, y:0 } : { opacity:0, y:24 }}
        transition={{ duration:0.6, delay: index * 0.1, ease:[0.16,1,0.3,1] }}>

        {/* Node circle */}
        <motion.div className="relative w-[72px] h-[72px] rounded-full flex items-center justify-center border-2 bg-[#0D1A32]"
          animate={inView
            ? { borderColor:"rgba(47,107,255,0.85)", boxShadow:"0 0 28px rgba(47,107,255,0.3), 0 0 56px rgba(47,107,255,0.1)" }
            : { borderColor:"rgba(47,107,255,0.15)", boxShadow:"none" }}
          transition={{ duration:0.5, delay: index * 0.1 + 0.2 }}>
          {/* Pulse ring */}
          {inView && (
            <motion.div className="absolute inset-0 rounded-full border border-[#2F6BFF]"
              initial={{ scale:1, opacity:0.5 }}
              animate={{ scale:1.7, opacity:0 }}
              transition={{ duration:1.8, delay: index * 0.1 + 0.3, repeat:Infinity, repeatDelay:2.5 }} />
          )}
          <span className="text-xl select-none">{ICONS[step.step]}</span>
        </motion.div>

        <span className="text-[9px] font-mono text-[#2F6BFF] tracking-[0.22em]">STEP {step.step}</span>

        <motion.h3 className="text-[0.8125rem] font-semibold text-center leading-snug"
          animate={inView ? { color:"#F0F6FF" } : { color:"#5A6478" }}
          transition={{ duration:0.4, delay: index * 0.1 + 0.15 }}>
          {step.title}
        </motion.h3>

        <motion.p className="text-[0.72rem] text-center leading-relaxed max-w-[110px]"
          animate={inView ? { color:"#8B95A8" } : { color:"#374151" }}
          transition={{ duration:0.4, delay: index * 0.1 + 0.2 }}>
          {step.desc}
        </motion.p>
      </motion.div>
    </div>
  );
}

function MobileStep({ step, index }: { step: typeof PROCESS_STEPS[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px -10% 0px" });

  return (
    <div ref={ref} className="relative flex gap-5">
      <div className="flex flex-col items-center flex-shrink-0">
        <motion.div className="w-12 h-12 rounded-full border-2 bg-[#0D1A32] flex items-center justify-center relative z-10"
          animate={inView
            ? { borderColor:"rgba(47,107,255,0.85)", boxShadow:"0 0 20px rgba(47,107,255,0.28)" }
            : { borderColor:"rgba(47,107,255,0.15)", boxShadow:"none" }}
          transition={{ duration:0.5, delay:0.1 }}>
          <span className="text-sm select-none">{ICONS[step.step]}</span>
        </motion.div>
        {index < PROCESS_STEPS.length - 1 && (
          <div className="flex-1 w-[1.5px] my-2 bg-[rgba(47,107,255,0.08)] relative overflow-hidden min-h-[44px]">
            <motion.div className="absolute inset-0 bg-gradient-to-b from-[#2F6BFF] to-[#A9D6FF] origin-top"
              initial={{ scaleY:0 }} animate={inView ? { scaleY:1 } : { scaleY:0 }}
              transition={{ duration:0.7, delay:0.35 }} />
          </div>
        )}
      </div>
      <motion.div className="pb-9" initial={{ opacity:0, x:20 }}
        animate={inView ? { opacity:1, x:0 } : { opacity:0, x:20 }}
        transition={{ duration:0.55, delay:0.15 }}>
        <span className="text-[9px] font-mono text-[#2F6BFF] tracking-[0.22em] block mb-1">STEP {step.step}</span>
        <h3 className="text-[0.875rem] font-semibold text-[#F0F6FF] mb-1">{step.title}</h3>
        <p className="text-[0.8125rem] text-[#8B95A8] leading-relaxed">{step.desc}</p>
      </motion.div>
    </div>
  );
}

export default function Process() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset:["start end","end start"] });
  const bgOpacity = useTransform(scrollYProgress, [0,0.3,0.7,1], [0,1,1,0]);

  return (
    <section id="process" ref={sectionRef} className="relative py-28 px-6 lg:px-10 overflow-hidden bg-[#080C18]">
      {/* Animated ambient glow */}
      <motion.div className="pointer-events-none absolute inset-0 z-0" style={{ opacity: bgOpacity }}>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full"
          style={{ background:"radial-gradient(ellipse, rgba(47,107,255,0.05) 0%, transparent 70%)" }} />
      </motion.div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div initial={{ opacity:0, y:28 }} whileInView={{ opacity:1, y:0 }}
          viewport={{ once:true }} transition={{ duration:0.7 }}>
          <SectionHeader label="process"
            title={<>From idea to <span className="text-gradient-blue">live production</span></>}
            subtitle="A systematic, architecture-first approach — every engagement follows the same proven path to reliable, scalable systems." />
        </motion.div>

        {/* Desktop */}
        <div className="hidden lg:grid mt-16 grid-cols-6 gap-0">
          {PROCESS_STEPS.map((s, i) => (
            <DesktopStep key={s.step} step={s} index={i} total={PROCESS_STEPS.length} />
          ))}
        </div>

        {/* Mobile */}
        <div className="flex flex-col mt-12 lg:hidden">
          {PROCESS_STEPS.map((s, i) => <MobileStep key={s.step} step={s} index={i} />)}
        </div>

        {/* Principles */}
        <motion.div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-4"
          initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }}
          viewport={{ once:true }} transition={{ duration:0.6, delay:0.3 }}>
          {[
            { label:"IaC-First",         desc:"Every resource version-controlled in Terraform — zero manual clicks in the console." },
            { label:"GitOps Workflow",    desc:"ArgoCD-driven deployments — Git is the single source of truth for all environments." },
            { label:"Observability First",desc:"Metrics, logs, and traces wired from day one — not bolted on after production issues." },
          ].map(({ label, desc }) => (
            <div key={label}
              className="rounded-xl p-4 flex gap-3.5 border border-[rgba(47,107,255,0.12)]"
              style={{ background:"linear-gradient(145deg, #0D1A32, #080C18)" }}>
              <div className="w-1 rounded-full bg-gradient-to-b from-[#2F6BFF] to-[#A9D6FF] flex-shrink-0 self-stretch" />
              <div>
                <p className="text-[0.875rem] font-semibold text-[#F0F6FF] mb-1">{label}</p>
                <p className="text-[0.78rem] text-[#8B95A8] leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
