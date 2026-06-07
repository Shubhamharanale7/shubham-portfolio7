"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Calendar, ArrowRight, Github, Linkedin, Twitter, Mail } from "lucide-react";
import CalendlyModal from "@/components/ui/CalendlyModal";

const LINKS = [
  { href: "https://www.linkedin.com/in/shubhamharanale7", Icon: Linkedin, label: "LinkedIn",  handle: "/in/shubhamharanale7"       },
  { href: "https://github.com/Shubhamharanale7",          Icon: Github,   label: "GitHub",    handle: "/Shubhamharanale7"           },
  { href: "https://x.com/ShubhamHaranal1",                Icon: Twitter,  label: "Twitter",   handle: "@ShubhamHaranal1"            },
  { href: "mailto:shubhaminfosoft7@gmail.com",            Icon: Mail,     label: "Email",     handle: "shubhaminfosoft7@gmail.com"  },
];

const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } } };
const fadeUp  = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16,1,0.3,1] } } };

export default function CTA() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <>
      <section id="cta" ref={ref} className="relative py-36 px-6 lg:px-10 overflow-hidden bg-[#080C18]">

        {/* Radial glow */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <motion.div className="w-[900px] h-[500px] rounded-full"
            style={{ background: "radial-gradient(ellipse, rgba(47,107,255,0.1) 0%, transparent 65%)" }}
            animate={inView ? { scale: [1, 1.06, 1] } : {}}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }} />
        </div>

        {/* Grid overlay */}
        <div className="absolute inset-0 grid-bg opacity-70 pointer-events-none" />

        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <motion.div variants={stagger} initial="hidden" animate={inView ? "show" : "hidden"}>

            <motion.p variants={fadeUp} className="section-label mb-6">// ready to build</motion.p>

            <motion.h2 variants={fadeUp}
              className="font-bold tracking-tight leading-[1.08] mb-6 text-[#F0F6FF]"
              style={{ fontSize: "clamp(2.5rem, 6vw, 4rem)" }}>
              Let&apos;s build your<br />
              <span className="text-gradient-blue">production system</span>
            </motion.h2>

            <motion.p variants={fadeUp}
              className="text-[#8B95A8] leading-[1.75] max-w-xl mx-auto mb-12"
              style={{ fontSize: "1.0625rem" }}>
              Whether you&apos;re launching your first cloud setup, deploying AI to production, or
              scaling an existing platform — I can help you get there faster, reliably, and
              cost-effectively.
            </motion.p>

            {/* Primary CTA */}
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-3.5 justify-center mb-16">
              <button onClick={() => setOpen(true)}
                className="group relative overflow-hidden inline-flex items-center justify-center gap-2.5 bg-[#2F6BFF] hover:bg-[#2456D3] text-white font-semibold px-8 py-4 rounded-xl transition-all duration-250 hover:-translate-y-0.5 hover:shadow-[0_16px_56px_rgba(47,107,255,0.42)] text-[0.9375rem]">
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.12] to-transparent translate-x-[-100%] skew-x-[-15deg] group-hover:translate-x-[220%] transition-transform duration-700" />
                <Calendar size={18} />
                Book a 30-min Discovery Call
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
              </button>
              <a href="mailto:shubhaminfosoft7@gmail.com"
                className="inline-flex items-center justify-center gap-2 border border-[rgba(47,107,255,0.25)] text-[#8B95A8] hover:text-[#F0F6FF] hover:border-[rgba(47,107,255,0.55)] hover:bg-[rgba(47,107,255,0.07)] font-medium px-8 py-4 rounded-xl transition-all duration-200 hover:-translate-y-0.5 text-[0.9375rem]">
                <Mail size={17} />
                Send an Email
              </a>
            </motion.div>

            {/* Divider */}
            <motion.div variants={fadeUp} className="w-20 h-px bg-gradient-to-r from-transparent via-[rgba(47,107,255,0.5)] to-transparent mx-auto mb-12" />

            {/* Contact cards */}
            <motion.div variants={stagger} className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-2xl mx-auto">
              {LINKS.map(({ href, Icon, label, handle }) => (
                <motion.a key={label} variants={fadeUp}
                  href={href}
                  target={href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  className="group flex flex-col items-center gap-2 rounded-2xl p-4 border transition-all duration-250 hover:-translate-y-1"
                  style={{ background: "linear-gradient(145deg, #0D1A32, #0A1428)",
                    border: "1px solid rgba(47,107,255,0.12)" }}
                  whileHover={{ borderColor: "rgba(47,107,255,0.45)",
                    boxShadow: "0 12px 36px rgba(47,107,255,0.1)" } as any}>
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center border border-[rgba(47,107,255,0.18)] bg-[rgba(47,107,255,0.08)] text-[#5A6478] group-hover:text-[#A9D6FF] group-hover:border-[rgba(47,107,255,0.4)] transition-all duration-200">
                    <Icon size={17} />
                  </div>
                  <span className="text-[0.75rem] font-semibold text-[#F0F6FF]">{label}</span>
                  <span className="text-[9px] font-mono text-[#5A6478] group-hover:text-[#8B95A8] transition-colors text-center leading-tight">{handle}</span>
                </motion.a>
              ))}
            </motion.div>

            <motion.p variants={fadeUp} className="mt-10 text-[11px] text-[#5A6478] font-mono">
              Responds within 24h · Based in India · Works globally
            </motion.p>
          </motion.div>
        </div>
      </section>

      <CalendlyModal isOpen={open} onClose={() => setOpen(false)} />
    </>
  );
}
