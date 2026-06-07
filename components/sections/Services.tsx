"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check, ArrowRight, Zap } from "lucide-react";
import { SERVICES } from "@/lib/data";
import SectionHeader from "@/components/ui/SectionHeader";
import CalendlyModal from "@/components/ui/CalendlyModal";

const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } } };
const cardAnim = {
  hidden: { opacity: 0, y: 32, filter: "blur(4px)" },
  show:   { opacity: 1, y: 0,  filter: "blur(0px)", transition: { duration: 0.65, ease: [0.16,1,0.3,1] } },
};

export default function Services() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <section id="services" className="py-28 px-6 lg:px-10 relative"
        style={{ background: "linear-gradient(180deg, #080C18 0%, rgba(13,26,50,0.5) 50%, #080C18 100%)" }}>

        {/* Dot grid texture */}
        <div className="absolute inset-0 dot-bg opacity-25 pointer-events-none" />

        <div className="relative z-10 max-w-6xl mx-auto">
          <motion.div initial={{ opacity:0, y:28 }} whileInView={{ opacity:1, y:0 }}
            viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <SectionHeader label="services"
              title={<>Packages built for <span className="text-gradient-blue">startup scale</span></>}
              subtitle="Three focused engagements — each with a clear outcome. No retainers without results." />
          </motion.div>

          {/* Cards */}
          <motion.div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-5"
            variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, margin:"-60px" }}>
            {SERVICES.map((svc, i) => {
              const featured = !!svc.featured;
              return (
                <motion.div key={svc.title} variants={cardAnim}
                  className="group relative rounded-2xl overflow-hidden flex flex-col cursor-default"
                  style={{
                    background: featured
                      ? "linear-gradient(155deg, #0D1A32 0%, rgba(47,107,255,0.07) 100%)"
                      : "linear-gradient(155deg, #0D1A32 0%, #080C18 100%)",
                    border: featured ? "1px solid rgba(47,107,255,0.45)" : "1px solid rgba(47,107,255,0.13)",
                    boxShadow: featured ? "0 0 48px rgba(47,107,255,0.08)" : "none",
                    transition: "all 0.32s cubic-bezier(0.16,1,0.3,1)",
                  }}
                  whileHover={{
                    y: -5,
                    borderColor: "rgba(47,107,255,0.55)",
                    boxShadow: "0 24px 64px rgba(47,107,255,0.13), 0 4px 20px rgba(0,0,0,0.5)",
                  } as any}
                >
                  {/* Top accent line */}
                  <div className="absolute top-0 left-0 right-0 h-[2px] rounded-t-2xl"
                    style={{ background: featured
                      ? "linear-gradient(90deg, #2F6BFF, #A9D6FF)"
                      : "linear-gradient(90deg, rgba(47,107,255,0.4), transparent)" }} />

                  {/* MOST POPULAR badge */}
                  {featured && (
                    <div className="absolute top-4 right-4">
                      <span className="inline-flex items-center gap-1.5 text-[10px] font-mono tracking-widest px-2.5 py-1 rounded-full"
                        style={{ background:"rgba(47,107,255,0.15)", border:"1px solid rgba(47,107,255,0.35)", color:"#A9D6FF" }}>
                        <Zap size={9} />MOST POPULAR
                      </span>
                    </div>
                  )}

                  <div className="p-7 flex flex-col flex-1">
                    {/* Emoji + title */}
                    <div className="mb-6">
                      <div className="text-3xl mb-3 select-none">{svc.emoji}</div>
                      <h3 className="text-[1.25rem] font-bold text-[#F0F6FF] leading-tight">{svc.title}</h3>
                      <p className="text-[0.8rem] font-mono mt-1"
                        style={{ color: featured ? "#A9D6FF" : "#5A6478" }}>{svc.subtitle}</p>
                    </div>

                    {/* Best for */}
                    <div className="mb-5 p-3.5 rounded-xl border border-[rgba(47,107,255,0.1)] bg-[rgba(47,107,255,0.04)]">
                      <p className="text-[10px] font-mono text-[#5A6478] tracking-widest uppercase mb-1">Best For</p>
                      <p className="text-[0.8125rem] text-[#8B95A8] leading-relaxed">{svc.bestFor}</p>
                    </div>

                    {/* Included */}
                    <div className="mb-6 flex-1">
                      <p className="text-[10px] font-mono text-[#5A6478] tracking-widest uppercase mb-3">What&apos;s Included</p>
                      <ul className="space-y-2.5">
                        {svc.items.map((item) => (
                          <li key={item} className="flex items-start gap-2.5">
                            <div className="mt-0.5 flex-shrink-0 w-4 h-4 rounded-full flex items-center justify-center border border-[rgba(47,107,255,0.3)] bg-[rgba(47,107,255,0.1)]">
                              <Check size={9} className="text-[#2F6BFF]" />
                            </div>
                            <span className="text-[0.8125rem] text-[#8B95A8] leading-relaxed">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Outcome */}
                    <div className="mb-6 p-4 rounded-xl border-l-2 border-[#2F6BFF] bg-[rgba(47,107,255,0.05)]">
                      <p className="text-[10px] font-mono text-[#2F6BFF] tracking-widest uppercase mb-1.5">Outcome</p>
                      <p className="text-[0.875rem] text-[#F0F6FF] font-medium leading-relaxed">
                        👉 {svc.outcome}
                      </p>
                    </div>

                    {/* CTA */}
                    <button onClick={() => setOpen(true)}
                      className="group/btn relative overflow-hidden w-full flex items-center justify-center gap-2 py-3.5 rounded-xl text-[0.875rem] font-semibold transition-all duration-250"
                      style={{
                        background:   featured ? "#2F6BFF"                     : "transparent",
                        border:       featured ? "1px solid #2F6BFF"           : "1px solid rgba(47,107,255,0.25)",
                        color:        featured ? "white"                        : "#8B95A8",
                        boxShadow:    featured ? "0 4px 20px rgba(47,107,255,0.25)" : "none",
                      }}
                      onMouseEnter={(e) => {
                        const el = e.currentTarget;
                        if (!featured) { el.style.borderColor="rgba(47,107,255,0.55)"; el.style.color="#F0F6FF"; el.style.background="rgba(47,107,255,0.08)"; }
                        else           { el.style.background="#2456D3"; el.style.boxShadow="0 8px 32px rgba(47,107,255,0.4)"; }
                      }}
                      onMouseLeave={(e) => {
                        const el = e.currentTarget;
                        if (!featured) { el.style.borderColor="rgba(47,107,255,0.25)"; el.style.color="#8B95A8"; el.style.background="transparent"; }
                        else           { el.style.background="#2F6BFF"; el.style.boxShadow="0 4px 20px rgba(47,107,255,0.25)"; }
                      }}
                    >
                      {featured && <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.1] to-transparent translate-x-[-100%] skew-x-[-15deg] group-hover/btn:translate-x-[220%] transition-transform duration-700" />}
                      Book a Call
                      <ArrowRight size={15} className="transition-transform duration-200 group-hover/btn:translate-x-1" />
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Ongoing support strip */}
          <motion.div
            className="mt-5 rounded-2xl p-6 flex flex-col md:flex-row items-start md:items-center gap-5 justify-between border border-[rgba(47,107,255,0.12)]"
            style={{ background: "linear-gradient(145deg, #0D1A32, #080C18)" }}
            initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }}
            viewport={{ once: true }} transition={{ duration:0.6, delay:0.4 }}>
            <div className="flex gap-4 items-start">
              <span className="text-2xl flex-shrink-0 select-none">🔁</span>
              <div>
                <h4 className="text-[0.9375rem] font-semibold text-[#F0F6FF] mb-1">
                  Ongoing Support
                  <span className="ml-2 text-[10px] font-mono text-[#5A6478] border border-[rgba(47,107,255,0.18)] px-2 py-0.5 rounded-full">Optional Add-on</span>
                </h4>
                <p className="text-[0.8125rem] text-[#8B95A8] leading-relaxed max-w-xl">
                  Continuous monitoring · CI/CD maintenance · Scaling &amp; performance support · Incident handling —
                  a dedicated DevOps/MLOps partner without hiring full-time.
                </p>
              </div>
            </div>
            <button onClick={() => setOpen(true)}
              className="flex-shrink-0 text-[11px] font-mono px-5 py-2.5 rounded-xl border border-[rgba(47,107,255,0.25)] text-[#A9D6FF] hover:border-[rgba(47,107,255,0.55)] hover:bg-[rgba(47,107,255,0.08)] transition-all duration-200 whitespace-nowrap">
              Discuss add-on →
            </button>
          </motion.div>
        </div>
      </section>

      <CalendlyModal isOpen={open} onClose={() => setOpen(false)} />
    </>
  );
}
