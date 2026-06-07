"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useCountUp } from "@/lib/useCountUp";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const METRICS = [
  { value:6,   suffix:"+",   label:"Years Experience",      sub:"DevOps · MLOps · AI"          },
  { value:99,  suffix:".9%", label:"Uptime Maintained",     sub:"Production SLA"               },
  { value:30,  suffix:"%",   label:"Cloud Cost Reduction",  sub:"Architecture optimization"    },
  { value:40,  suffix:"%",   label:"Faster Deployments",    sub:"CI/CD automation"             },
  { value:30,  suffix:"+",   label:"Projects Delivered",      sub:"Built & shipped to prod"     },
  { value:3,   suffix:"+",   label:"Certifications",        sub:"AWS · OCI · Kubernetes"       },
];

const SPECIALIZATIONS = [
  { icon:"☁️", title:"Cloud Architecture",   desc:"AWS multi-region, IaC-first, production-grade"    },
  { icon:"⚙️", title:"Kubernetes & GitOps",  desc:"EKS clusters, ArgoCD, service mesh, zero-downtime"},
  { icon:"🔁", title:"CI/CD Engineering",    desc:"GitHub Actions, Jenkins, security-gated pipelines" },
  { icon:"🤖", title:"MLOps Platforms",      desc:"MLflow, Seldon, DVC, automated retraining loops"   },
  { icon:"🧠", title:"AI / LLM Infra",       desc:"RAG pipelines, LangGraph agents, vLLM serving"     },
  { icon:"📡", title:"AIOps & Observability",desc:"Prometheus, Grafana, OTel, AI-driven alerting"     },
];

function MetricCard({ value, suffix, label, sub, delay }: {
  value:number; suffix:string; label:string; sub:string; delay:number;
}) {
  const { count, ref } = useCountUp(value, 1800);
  return (
    <motion.div
      ref={ref as React.RefObject<HTMLDivElement>}
      className="group relative rounded-2xl p-5 overflow-hidden cursor-default"
      style={{ background:"linear-gradient(145deg, #0D1A32 0%, #0A1428 100%)", border:"1px solid rgba(47,107,255,0.13)" }}
      initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }}
      viewport={{ once:true }} transition={{ duration:0.6, delay }}
      whileHover={{ y:-4, borderColor:"rgba(47,107,255,0.45)",
        boxShadow:"0 20px 60px rgba(47,107,255,0.12)" } as any}
    >
      <div className="absolute top-0 left-0 right-0 h-[2px] rounded-t-2xl bg-gradient-to-r from-[#2F6BFF] to-[#A9D6FF] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
      <div className="text-[2.1rem] font-black font-mono text-[#F0F6FF] leading-none mb-1.5">
        {count}<span className="text-[#2F6BFF]">{suffix}</span>
      </div>
      <p className="text-[0.8rem] font-semibold text-[#8B95A8] mb-0.5">{label}</p>
      <p className="text-[0.7rem] text-[#5A6478]">{sub}</p>
    </motion.div>
  );
}

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target:sectionRef, offset:["start end","end start"] });
  const bgX = useTransform(scrollYProgress, [0,1], ["-5%","5%"]);
  const inView = useInView(sectionRef, { once:true, margin:"-10%" });

  const stagger = { hidden:{}, show:{ transition:{ staggerChildren:0.08, delayChildren:0.1 } } };
  const fadeUp  = { hidden:{ opacity:0, y:24 }, show:{ opacity:1, y:0, transition:{ duration:0.65, ease:[0.16,1,0.3,1] } } };

  return (
    <section id="about" ref={sectionRef} className="relative py-32 px-6 lg:px-10 overflow-hidden">

      {/* Animated background gradient that shifts on scroll */}
      <motion.div className="absolute inset-0 pointer-events-none z-0" style={{ x: bgX }}>
        <div className="absolute inset-0"
          style={{ background:"linear-gradient(180deg, #080C18 0%, rgba(13,26,50,0.4) 50%, #080C18 100%)" }} />
        {/* Large subtle orbs */}
        <div className="absolute top-[10%] right-[5%] w-[500px] h-[500px] rounded-full"
          style={{ background:"radial-gradient(circle, rgba(47,107,255,0.04) 0%, transparent 70%)" }} />
        <div className="absolute bottom-[10%] left-[5%] w-[400px] h-[400px] rounded-full"
          style={{ background:"radial-gradient(circle, rgba(169,214,255,0.03) 0%, transparent 70%)" }} />
      </motion.div>

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* ── SECTION HEADER ── */}
        <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once:true }}>
          <motion.span variants={fadeUp} className="section-label">// about</motion.span>
          <motion.h2 variants={fadeUp}
            className="font-bold tracking-tight leading-[1.1] mb-5 text-[#F0F6FF]"
            style={{ fontSize:"clamp(2.2rem,4.5vw,3.25rem)" }}>
            The engineer behind<br />
            <span style={{
              background:"linear-gradient(135deg, #2F6BFF 0%, #A9D6FF 60%)",
              WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", backgroundClip:"text",
            }}>production systems</span>
          </motion.h2>
          <motion.p variants={fadeUp}
            className="text-[#8B95A8] leading-[1.78] max-w-2xl mb-14"
            style={{ fontSize:"1.0625rem" }}>
            I don&apos;t just know DevOps tools — I build the infrastructure that companies rely on to stay alive at scale.
          </motion.p>
        </motion.div>

        {/* ── TWO COLUMN ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-start mb-20">

          {/* Left — story + values */}
          <motion.div variants={stagger} initial="hidden" whileInView="show"
            viewport={{ once:true, margin:"-80px" }} className="space-y-5">

            {[
              <>I&apos;m <span className="text-[#F0F6FF] font-semibold">Shubham Haranale</span> — Senior DevOps, MLOps &amp; AI Infrastructure Engineer building production-grade systems for startups globally. Not prototypes. Real systems handling real traffic, with real SLAs.</>,
              <>Over the last <span className="text-[#F0F6FF] font-semibold">6+ years</span>, I&apos;ve architected and deployed Kubernetes platforms with <span className="text-[#F0F6FF] font-semibold">99.9% uptime</span>, cut cloud costs by <span className="text-[#F0F6FF] font-semibold">30%</span> through architecture-level optimization, and automated deployment pipelines that ship <span className="text-[#F0F6FF] font-semibold">40% faster</span>.</>,
              <>From <span className="text-[#F0F6FF] font-semibold">IaC and GitOps</span> to LLM deployment, RAG pipelines, and autonomous AI agents — I operate across the full engineering lifecycle. I&apos;m not a generalist. I&apos;m a specialist who has gone deep in each layer of the modern cloud-native stack.</>,
            ].map((text, i) => (
              <motion.p key={i} variants={fadeUp}
                className="text-[0.9375rem] text-[#8B95A8] leading-[1.78]">
                {text}
              </motion.p>
            ))}

            {/* Value props */}
            <motion.div variants={fadeUp} className="pt-4 space-y-3">
              {[
                "Build systems that scale reliably — not just demos",
                "Ship faster with automated, security-gated pipelines",
                "Optimize for performance and cost from day one",
                "Observability and AIOps wired in from the start",
              ].map((v) => (
                <div key={v} className="flex items-start gap-3">
                  <CheckCircle2 size={16} className="text-[#2F6BFF] flex-shrink-0 mt-0.5" />
                  <span className="text-[0.875rem] text-[#8B95A8]">{v}</span>
                </div>
              ))}
            </motion.div>

            {/* Core roles */}
            <motion.div variants={fadeUp}>
              <p className="text-[10px] text-[#5A6478] font-mono tracking-[0.18em] uppercase mb-3">Core Roles</p>
              <div className="flex flex-wrap gap-2">
                {["Senior DevOps Engineer","MLOps Architect","AIOps Engineer","AI Infra Engineer","Cloud Architect","Platform Engineer"].map((r) => (
                  <span key={r}
                    className="text-[11px] font-mono px-3 py-1.5 rounded-lg border transition-all duration-200 cursor-default hover:border-[rgba(47,107,255,0.4)] hover:text-[#A9D6FF]"
                    style={{ background:"rgba(47,107,255,0.06)", borderColor:"rgba(47,107,255,0.18)", color:"#8B95A8" }}>
                    {r}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Certs */}
            <motion.div variants={fadeUp} className="flex gap-2.5 flex-wrap">
              {[
                { label:"AWS SAA",    color:"#FF9900" },
                { label:"OCI DevOps", color:"#F80000" },
                { label:"Kubernetes", color:"#326CE5" },
              ].map(({ label, color }) => (
                <div key={label}
                  className="flex items-center gap-2 rounded-xl px-3.5 py-2 border border-[rgba(255,255,255,0.07)]"
                  style={{ background:"rgba(255,255,255,0.03)" }}>
                  <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ background:color }} />
                  <span className="text-[11px] font-mono text-[#8B95A8]">{label}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right — metrics */}
          <div>
            <p className="text-[10px] text-[#5A6478] font-mono tracking-[0.18em] uppercase mb-5">Impact &amp; Results</p>
            <div className="grid grid-cols-2 gap-3.5">
              {METRICS.map(({ value, suffix, label, sub }, i) => (
                <MetricCard key={label} value={value} suffix={suffix} label={label} sub={sub} delay={i * 0.07} />
              ))}
            </div>

            {/* Stack */}
            <motion.div
              className="mt-4 rounded-2xl p-5 border border-[rgba(47,107,255,0.13)]"
              style={{ background:"linear-gradient(145deg, #0D1A32, #0A1428)" }}
              initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }}
              viewport={{ once:true }} transition={{ duration:0.6, delay:0.5 }}>
              <p className="text-[10px] text-[#5A6478] font-mono tracking-[0.18em] uppercase mb-3.5">Core Stack</p>
              <div className="flex flex-wrap gap-1.5">
                {["AWS","Kubernetes","Terraform","Docker","ArgoCD","Helm","GitHub Actions","Python","MLflow","Prometheus","Grafana","LangChain","FastAPI","Redis","Kafka"].map((t) => (
                  <span key={t}
                    className="text-[10px] font-mono px-2.5 py-1 rounded-md border cursor-default transition-all duration-200 hover:text-[#A9D6FF] hover:border-[rgba(47,107,255,0.36)]"
                    style={{ background:"rgba(47,107,255,0.05)", borderColor:"rgba(47,107,255,0.13)", color:"#8B95A8" }}>
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* ── SPECIALIZATION CARDS — Silicon Valley section ── */}
        <div>
          <motion.div className="flex items-center justify-between mb-8"
            initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }}
            viewport={{ once:true }} transition={{ duration:0.6 }}>
            <div>
              <span className="section-label">// specializations</span>
              <h3 className="text-[1.5rem] font-bold text-[#F0F6FF] tracking-tight">Deep expertise across the stack</h3>
            </div>
            <a href="#skills"
              className="hidden md:flex items-center gap-1.5 text-[0.8rem] font-mono text-[#8B95A8] transition-all duration-200"
              onMouseEnter={(e) => { e.currentTarget.style.color="#A9D6FF"; }}
              onMouseLeave={(e) => { e.currentTarget.style.color="#8B95A8"; }}>
              View full skills <ArrowRight size={14} />
            </a>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
            initial="hidden" whileInView="show"
            viewport={{ once:true, margin:"-60px" }}
            variants={{ hidden:{}, show:{ transition:{ staggerChildren:0.08 } } }}>
            {SPECIALIZATIONS.map(({ icon, title, desc }) => (
              <motion.div key={title}
                variants={{ hidden:{ opacity:0, y:20 }, show:{ opacity:1, y:0, transition:{ duration:0.55, ease:[0.16,1,0.3,1] } } }}
                className="group flex gap-4 p-4 rounded-2xl border border-[rgba(47,107,255,0.1)] cursor-default transition-all duration-300"
                style={{ background:"linear-gradient(135deg, #0D1A32 0%, #080C18 100%)" }}
                whileHover={{ y:-3, borderColor:"rgba(47,107,255,0.38)", boxShadow:"0 16px 48px rgba(47,107,255,0.09)" } as any}>
                <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 border border-[rgba(47,107,255,0.18)] bg-[rgba(47,107,255,0.08)] text-lg transition-all duration-300 group-hover:border-[rgba(47,107,255,0.4)] group-hover:shadow-[0_0_20px_rgba(47,107,255,0.15)]">
                  {icon}
                </div>
                <div>
                  <h4 className="text-[0.875rem] font-semibold text-[#F0F6FF] mb-0.5">{title}</h4>
                  <p className="text-[0.78rem] text-[#8B95A8] leading-relaxed">{desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
}
