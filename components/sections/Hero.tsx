"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import dynamic from "next/dynamic";
import { Linkedin, Twitter, ArrowRight, Calendar, Github, Shield, Zap, ChevronDown } from "lucide-react";
import Image from "next/image";
import CalendlyModal from "@/components/ui/CalendlyModal";

const HeroBackground = dynamic(() => import("@/components/ui/HeroBackground"), { ssr: false });

/* ─── Animated name: letters slide + typing cursor cycling ─── */
const NAME_ROLES = [
  "Senior DevOps Engineer",
  "MLOps Architect",
  "AIOps Engineer",
  "AI Infra Engineer",
  "Cloud Architect",
];

function AnimatedRoleText() {
  const [roleIdx, setRoleIdx]   = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [phase, setPhase]       = useState<"typing"|"pause"|"deleting">("typing");
  const role = NAME_ROLES[roleIdx];

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    if (phase === "typing") {
      if (displayed.length < role.length) {
        timeout = setTimeout(() => setDisplayed(role.slice(0, displayed.length + 1)), 55);
      } else {
        timeout = setTimeout(() => setPhase("pause"), 1800);
      }
    } else if (phase === "pause") {
      timeout = setTimeout(() => setPhase("deleting"), 200);
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 28);
      } else {
        setRoleIdx((i) => (i + 1) % NAME_ROLES.length);
        setPhase("typing");
      }
    }
    return () => clearTimeout(timeout);
  }, [displayed, phase, role]);

  return (
    <span className="font-mono font-semibold" style={{ color:"#A9D6FF" }}>
      {displayed}
      <motion.span
        animate={{ opacity:[1,0,1] }}
        transition={{ duration:0.9, repeat:Infinity, ease:"linear" }}
        className="inline-block ml-[1px] w-[2px] h-[1.1em] align-middle rounded-sm"
        style={{ background:"#2F6BFF", verticalAlign:"middle" }}
      />
    </span>
  );
}

/* ─── Big animated name — two words slide up as units, always one line ─── */
function AnimatedName() {
  const words = [
    { text: "Shubham",  gradient: "linear-gradient(135deg, #F0F6FF 0%, #C8D8F0 100%)" },
    { text: "Haranale", gradient: "linear-gradient(135deg, #2F6BFF 0%, #A9D6FF 55%, #6AABFF 100%)" },
  ];
  return (
    <div style={{ overflow:"hidden" }}>
      <motion.div
        className="font-black leading-[1.0] tracking-[-0.035em] whitespace-nowrap"
        style={{ fontSize:"clamp(2.5rem, 6vw, 5rem)", display:"flex", alignItems:"baseline", gap:"0.22em" }}
        initial="hidden"
        animate="show"
        variants={{ hidden:{}, show:{ transition:{ staggerChildren:0.2, delayChildren:0.25 } } }}
      >
        {words.map(({ text, gradient }) => (
          <motion.span
            key={text}
            variants={{
              hidden: { opacity:0, y:"100%", filter:"blur(10px)" },
              show:   { opacity:1, y:"0%",   filter:"blur(0px)",
                transition:{ duration:0.9, ease:[0.16,1,0.3,1] } },
            }}
            style={{
              display:"inline-block",
              background:gradient,
              WebkitBackgroundClip:"text",
              WebkitTextFillColor:"transparent",
              backgroundClip:"text",
            }}
          >
            {text}
          </motion.span>
        ))}
      </motion.div>
    </div>
  );
}

const PROOF_ITEMS = [
  { label:"AWS",        icon:"☁️"  },
  { label:"Kubernetes", icon:"⚙️"  },
  { label:"Terraform",  icon:"🏗️" },
  { label:"MLflow",     icon:"🤖"  },
  { label:"LangGraph",  icon:"🧠"  },
  { label:"ArgoCD",     icon:"🔁"  },
  { label:"Prometheus", icon:"📡"  },
  { label:"Docker",     icon:"📦"  },
];

const STATS = [
  { value:"6+",    label:"Years Exp."    },
  { value:"99.9%", label:"Uptime SLA"   },
  { value:"30%",   label:"Cost Savings" },
  { value:"30+",   label:"Projects Built" },
];

const FLOATING = [
  { text:"$ terraform apply ✓",        delay:0,   top:"12%",  left:"-5%"  },
  { text:"kubectl: all pods running",   delay:1.9, top:"52%",  left:"96%"  },
  { text:"pipeline: success ✓",        delay:1.1, top:"82%",  left:"2%"   },
];

const fadeUp = {
  hidden:{ opacity:0, y:28, filter:"blur(6px)" },
  show:  { opacity:1, y:0,  filter:"blur(0px)", transition:{ duration:0.75, ease:[0.16,1,0.3,1] } },
};
const stagger = { hidden:{}, show:{ transition:{ staggerChildren:0.1, delayChildren:0.85 } } };

export default function Hero() {
  const [open, setOpen] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollY } = useScroll();
  const rawY = useTransform(scrollY, [0, 600], [0, -120]);
  const parallaxY = useSpring(rawY, { stiffness:80, damping:20 });

  return (
    <>
      <section id="hero" ref={sectionRef}
        className="relative min-h-screen flex items-center overflow-hidden px-6 lg:px-10"
        style={{ paddingTop:"5.5rem", paddingBottom:"5rem" }}>

        <HeroBackground />

        {/* Depth layers */}
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#080C18] via-transparent to-[#080C18] pointer-events-none" />
        <div className="absolute inset-0 z-0 bg-gradient-to-r from-[#080C18] via-transparent to-[#080C18] opacity-55 pointer-events-none" />
        {/* Spotlight */}
        <div className="absolute top-[30%] left-[20%] w-[900px] h-[600px] rounded-full pointer-events-none z-0"
          style={{ background:"radial-gradient(ellipse, rgba(47,107,255,0.09) 0%, transparent 60%)" }} />
        {/* Grid */}
        <div className="absolute inset-0 z-0 grid-bg pointer-events-none" />

        <div className="relative z-10 max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-16 items-center">

          {/* ── LEFT ── */}
          <div>
            {/* Badges row */}
            <motion.div className="flex flex-wrap items-center gap-2.5 mb-7"
              initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }}
              transition={{ duration:0.6, delay:0.1 }}>
              <span className="inline-flex items-center gap-2 text-[11px] font-mono tracking-[0.12em] uppercase px-3.5 py-1.5 rounded-full"
                style={{ background:"rgba(47,107,255,0.08)", border:"1px solid rgba(47,107,255,0.22)", color:"#A9D6FF" }}>
                <span className="w-2 h-2 rounded-full bg-emerald-400 flex-shrink-0" style={{ animation:"pulse-dot 2s ease-in-out infinite" }} />
                Available for new projects
              </span>
              <span className="inline-flex items-center gap-1.5 text-[10px] font-mono px-3 py-1.5 rounded-full"
                style={{ background:"rgba(255,153,0,0.08)", border:"1px solid rgba(255,153,0,0.22)", color:"#FF9900" }}>
                <Shield size={10} /> AWS Certified SAA
              </span>
              <span className="inline-flex items-center gap-1.5 text-[10px] font-mono px-3 py-1.5 rounded-full"
                style={{ background:"rgba(50,108,229,0.08)", border:"1px solid rgba(50,108,229,0.22)", color:"#7BA3F5" }}>
                <Zap size={10} /> OCI DevOps
              </span>
            </motion.div>

            {/* Animated name */}
            <div className="mb-5" style={{ perspective:"1000px" }}>
              <AnimatedName />
            </div>

            {/* Role typewriter */}
            <motion.div initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ delay:1.2, duration:0.6 }}
              className="flex items-baseline gap-3 mb-7" style={{ fontSize:"1.2rem" }}>
              <span className="text-[#5A6478] font-medium">Senior</span>
              <AnimatedRoleText />
            </motion.div>

            {/* Positioning statement */}
            <motion.p
              initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }}
              transition={{ delay:1.4, duration:0.7, ease:[0.16,1,0.3,1] }}
              className="text-[#8B95A8] leading-[1.78] max-w-[520px] mb-9"
              style={{ fontSize:"1rem" }}>
              AWS-certified engineer with{" "}
              <span className="text-[#F0F6FF] font-semibold">6+ years</span> delivering
              production-grade cloud infrastructure, MLOps pipelines, and AI systems for startups globally.
              From <span className="text-[#F0F6FF] font-semibold">Kubernetes clusters and Terraform IaC</span> to
              LLM deployments and AIOps automation — I build systems that actually scale.
            </motion.p>

            {/* CTAs */}
            <motion.div initial={{ opacity:0, y:16 }} animate={{ opacity:1, y:0 }}
              transition={{ delay:1.55, duration:0.65, ease:[0.16,1,0.3,1] }}
              className="flex flex-wrap gap-3 mb-12">
              <button onClick={() => setOpen(true)}
                className="group relative overflow-hidden flex items-center gap-2.5 text-white font-bold px-7 py-3.5 rounded-xl transition-all duration-300"
                style={{
                  background:"linear-gradient(135deg, #2F6BFF 0%, #1B4FCC 100%)",
                  boxShadow:"0 0 0 1px rgba(47,107,255,0.5), 0 4px 24px rgba(47,107,255,0.32)",
                  fontSize:"0.9375rem",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.boxShadow="0 0 0 1px rgba(47,107,255,0.9), 0 8px 48px rgba(47,107,255,0.55), 0 0 80px rgba(47,107,255,0.15)"; e.currentTarget.style.transform="translateY(-2px) scale(1.02)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.boxShadow="0 0 0 1px rgba(47,107,255,0.5), 0 4px 24px rgba(47,107,255,0.32)"; e.currentTarget.style.transform="translateY(0) scale(1)"; }}>
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.14] to-transparent -translate-x-full skew-x-[-15deg] group-hover:translate-x-full transition-transform duration-700" />
                <Calendar size={17} />
                Book a Discovery Call
                <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-1" />
              </button>

              <a href="#projects"
                className="flex items-center gap-2 font-semibold px-7 py-3.5 rounded-xl transition-all duration-250"
                style={{ border:"1px solid rgba(47,107,255,0.25)", color:"#F0F6FF", fontSize:"0.9375rem" }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor="rgba(47,107,255,0.6)"; e.currentTarget.style.background="rgba(47,107,255,0.08)"; e.currentTarget.style.transform="translateY(-2px)"; e.currentTarget.style.boxShadow="0 8px 28px rgba(47,107,255,0.14)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor="rgba(47,107,255,0.25)"; e.currentTarget.style.background="transparent"; e.currentTarget.style.transform="translateY(0)"; e.currentTarget.style.boxShadow="none"; }}>
                View Projects →
              </a>
            </motion.div>

            {/* Stats strip */}
            <motion.div initial={{ opacity:0, y:16 }} animate={{ opacity:1, y:0 }}
              transition={{ delay:1.7, duration:0.6 }}
              className="flex items-center w-fit divide-x divide-[rgba(47,107,255,0.1)] rounded-2xl overflow-hidden border border-[rgba(47,107,255,0.12)] backdrop-blur-sm"
              style={{ background:"rgba(13,26,50,0.65)" }}>
              {STATS.map((s) => (
                <div key={s.label} className="text-center px-6 py-4">
                  <div className="text-[1.5rem] font-black font-mono text-[#F0F6FF] leading-none mb-0.5">{s.value}</div>
                  <div className="text-[10px] text-[#5A6478] uppercase tracking-[0.1em]">{s.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* ── RIGHT — profile card ── */}
          <motion.div className="relative flex justify-center lg:justify-end"
            style={{ y: parallaxY }}
            initial={{ opacity:0, x:50, filter:"blur(10px)" }}
            animate={{ opacity:1, x:0,  filter:"blur(0px)"  }}
            transition={{ duration:1.0, delay:0.5, ease:[0.16,1,0.3,1] }}>

            {/* Glow orb */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full pointer-events-none"
              style={{ background:"radial-gradient(circle, rgba(47,107,255,0.22) 0%, transparent 68%)", animation:"glow-breathe 4s ease-in-out infinite" }} />

            {/* Card */}
            <div className="relative w-[340px] rounded-3xl overflow-hidden"
              style={{
                background:"linear-gradient(165deg, #0D1A32 0%, #080C18 100%)",
                border:"1px solid rgba(47,107,255,0.25)",
                boxShadow:"0 32px 90px rgba(0,0,0,0.55), 0 0 0 1px rgba(47,107,255,0.09), 0 0 70px rgba(47,107,255,0.07)",
              }}>

              {/* Profile photo area */}
              <div className="relative h-56 overflow-hidden"
                style={{ background:"linear-gradient(160deg, #162544 0%, #0D1A32 100%)" }}>
                <div className="absolute inset-0 dot-bg opacity-30" />
                {/* Blue radial top-right */}
                <div className="absolute top-0 right-0 w-60 h-60 rounded-full pointer-events-none"
                  style={{ background:"radial-gradient(circle, rgba(47,107,255,0.2) 0%, transparent 65%)" }} />

                {/* ACTUAL PROFILE PHOTO */}
                <div className="absolute inset-0 flex items-end justify-start px-6 pb-0">
                  <motion.div
                    className="relative w-36 h-44 rounded-t-2xl overflow-hidden"
                    style={{
                      border:"2px solid rgba(47,107,255,0.4)",
                      borderBottom:"none",
                      boxShadow:"0 0 40px rgba(47,107,255,0.3), 0 20px 40px rgba(0,0,0,0.5)",
                    }}
                    initial={{ y:20, opacity:0 }}
                    animate={{ y:0, opacity:1 }}
                    transition={{ delay:0.8, duration:0.8, ease:[0.16,1,0.3,1] }}>
                    <Image
                      src="/shubham-profile.png"
                      alt="Shubham Haranale"
                      fill
                      className="object-cover object-top"
                      priority
                    />
                    {/* Subtle blue overlay for brand consistency */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0D1A32] via-transparent to-transparent opacity-40" />
                  </motion.div>
                </div>

                {/* Online badge */}
                <div className="absolute top-4 right-4 flex items-center gap-1.5 text-[10px] font-mono text-[#8B95A8] px-3 py-1.5 rounded-full backdrop-blur-sm z-10"
                  style={{ background:"rgba(8,12,24,0.75)", border:"1px solid rgba(47,107,255,0.18)" }}>
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" style={{ animation:"pulse-dot 2s ease-in-out infinite" }} />
                  Online
                </div>
              </div>

              {/* Card body */}
              <div className="px-6 pt-4 pb-6">
                <h2 className="text-[1.05rem] font-bold text-[#F0F6FF] mb-0.5">Shubham Haranale</h2>
                <p className="text-[0.76rem] font-mono text-[#5A6478] mb-4">Senior DevOps · MLOps · AIOps · AI Infra</p>

                {/* Cert chips */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {[
                    { label:"AWS SAA",    color:"#FF9900" },
                    { label:"OCI DevOps", color:"#F80000" },
                    { label:"Kubernetes", color:"#326CE5" },
                  ].map(({ label, color }) => (
                    <span key={label}
                      className="inline-flex items-center gap-1.5 text-[10px] font-mono px-2.5 py-1 rounded-full"
                      style={{ background:"rgba(255,255,255,0.04)", border:"1px solid rgba(255,255,255,0.09)", color:"#8B95A8" }}>
                      <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background:color }} />
                      {label}
                    </span>
                  ))}
                </div>

                {/* Mini metrics */}
                <div className="grid grid-cols-3 gap-2 mb-4">
                  {[{ v:"6+", l:"Years" },{ v:"30+", l:"Projects" },{ v:"99%", l:"Uptime" }].map(({ v, l }) => (
                    <div key={l} className="text-center py-2.5 rounded-xl border border-[rgba(47,107,255,0.1)] bg-[rgba(47,107,255,0.04)]">
                      <div className="text-[0.875rem] font-bold font-mono text-[#F0F6FF]">{v}</div>
                      <div className="text-[9px] text-[#5A6478] uppercase tracking-wider mt-0.5">{l}</div>
                    </div>
                  ))}
                </div>

                {/* Socials */}
                <div className="flex gap-2 pt-4 border-t border-[rgba(47,107,255,0.1)]">
                  {[
                    { href:"https://github.com/Shubhamharanale7",          Icon:Github,   label:"GitHub"   },
                    { href:"https://www.linkedin.com/in/shubhamharanale7", Icon:Linkedin, label:"LinkedIn" },
                    { href:"https://x.com/ShubhamHaranal1",                Icon:Twitter,  label:"Twitter"  },
                  ].map(({ href, Icon, label }) => (
                    <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                      className="flex-1 flex items-center justify-center h-9 rounded-xl transition-all duration-200"
                      style={{ background:"rgba(47,107,255,0.06)", border:"1px solid rgba(47,107,255,0.14)", color:"#5A6478" }}
                      onMouseEnter={(e) => { e.currentTarget.style.color="#A9D6FF"; e.currentTarget.style.borderColor="rgba(47,107,255,0.45)"; e.currentTarget.style.background="rgba(47,107,255,0.14)"; e.currentTarget.style.boxShadow="0 4px 20px rgba(47,107,255,0.2)"; }}
                      onMouseLeave={(e) => { e.currentTarget.style.color="#5A6478"; e.currentTarget.style.borderColor="rgba(47,107,255,0.14)"; e.currentTarget.style.background="rgba(47,107,255,0.06)"; e.currentTarget.style.boxShadow="none"; }}>
                      <Icon size={15} />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Floating terminal tags */}
            {FLOATING.map(({ text, delay, top, left }, i) => (
              <motion.div key={i}
                className="absolute hidden lg:flex items-center gap-2 text-[#A9D6FF] text-[10px] font-mono px-3 py-1.5 rounded-full pointer-events-none select-none"
                style={{ top, left, background:"rgba(8,12,24,0.9)", border:"1px solid rgba(47,107,255,0.25)", backdropFilter:"blur(12px)", boxShadow:"0 4px 20px rgba(0,0,0,0.4)" }}
                animate={{ y:[0,-10,0] }}
                transition={{ duration:4, delay, repeat:Infinity, ease:"easeInOut" }}>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 flex-shrink-0" />
                {text}
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* ── Proof / Core Stack strip (bottom of hero) ── */}
        <div className="absolute bottom-0 left-0 right-0 z-10 border-t border-[rgba(47,107,255,0.1)]"
          style={{ background:"rgba(8,12,24,0.8)", backdropFilter:"blur(20px)" }}>
          <div className="max-w-6xl mx-auto px-6 lg:px-10 py-3.5 flex flex-wrap items-center gap-3 lg:gap-0">
            <span className="text-[10px] font-mono text-[#5A6478] tracking-[0.18em] uppercase mr-6 hidden sm:block flex-shrink-0">Core Stack</span>
            <div className="flex items-center flex-wrap gap-x-5 gap-y-2 flex-1">
              {PROOF_ITEMS.map(({ label, icon }) => (
                <div key={label} className="flex items-center gap-1.5 text-[0.78rem] text-[#8B95A8] font-medium whitespace-nowrap select-none">
                  <span className="text-[0.875rem]">{icon}</span>
                  {label}
                </div>
              ))}
            </div>
            <button onClick={() => setOpen(true)}
              className="hidden lg:flex items-center gap-1.5 text-[11px] font-mono px-4 py-2 rounded-lg transition-all duration-200 flex-shrink-0"
              style={{ background:"rgba(47,107,255,0.12)", border:"1px solid rgba(47,107,255,0.28)", color:"#A9D6FF" }}
              onMouseEnter={(e) => { e.currentTarget.style.background="rgba(47,107,255,0.22)"; e.currentTarget.style.boxShadow="0 4px 16px rgba(47,107,255,0.2)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.background="rgba(47,107,255,0.12)"; e.currentTarget.style.boxShadow="none"; }}>
              Book a call →
            </button>
          </div>
        </div>

        {/* Scroll cue */}
        <motion.div className="absolute bottom-20 left-1/2 -translate-x-1/2 z-10 hidden lg:flex flex-col items-center gap-1.5"
          initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ delay:2.5, duration:0.8 }}>
          <span className="text-[9px] font-mono text-[#5A6478] uppercase tracking-[0.18em]">Scroll</span>
          <ChevronDown size={16} className="text-[#2F6BFF]"
            style={{ animation:"float-y 1.8s ease-in-out infinite" }} />
        </motion.div>
      </section>

      <CalendlyModal isOpen={open} onClose={() => setOpen(false)} />
    </>
  );
}
