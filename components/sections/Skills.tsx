"use client";

import { motion } from "framer-motion";
import { SKILLS } from "@/lib/data";
import SectionHeader from "@/components/ui/SectionHeader";

const ICONS: Record<string, string> = {
  "Cloud Architecture & IaC":            "☁️",
  "Kubernetes & Container Orchestration": "⚙️",
  "CI/CD Pipeline Engineering":           "🔁",
  "MLOps & Model Deployment":             "🤖",
  "AI / LLM Infrastructure":             "🧠",
  "Observability & AIOps":               "📡",
};

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.1 } },
};
const cardAnim = {
  hidden: { opacity: 0, y: 28, filter: "blur(4px)" },
  show:   { opacity: 1, y: 0,  filter: "blur(0px)",
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

export default function Skills() {
  return (
    <section id="skills" className="py-28 px-6 lg:px-10 relative bg-[#080C18]">
      <div className="absolute inset-0 dot-bg opacity-30 pointer-events-none" />
      <div className="relative z-10 max-w-6xl mx-auto">

        <motion.div initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.7 }}>
          <SectionHeader label="core expertise"
            title={<>What I build <span className="text-gradient-blue">&amp; deliver</span></>}
            subtitle="Every capability maps directly to a production outcome — not just a stack of tools." />
        </motion.div>

        <motion.div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
          variants={container} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-60px" }}>
          {SKILLS.map((skill) => (
            <motion.div key={skill.title} variants={cardAnim}
              className="group relative rounded-2xl p-6 overflow-hidden cursor-default"
              style={{ background: "linear-gradient(150deg, #0D1A32 0%, #080C18 100%)",
                border: "1px solid rgba(47,107,255,0.12)", transition: "all 0.3s ease" }}
              whileHover={{ y: -4, borderColor: "rgba(47,107,255,0.45)",
                boxShadow: "0 20px 60px rgba(47,107,255,0.1), 0 4px 16px rgba(0,0,0,0.4)" } as any}
            >
              {/* Accent bar */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#2F6BFF] to-[#A9D6FF] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 rounded-t-2xl" />
              {/* Hover glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-[rgba(47,107,255,0.04)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />

              <div className="relative z-10">
                {/* Icon */}
                <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-5 text-xl border border-[rgba(47,107,255,0.18)] bg-[rgba(47,107,255,0.08)] transition-colors duration-300 group-hover:border-[rgba(47,107,255,0.4)]">
                  {ICONS[skill.title] ?? "⚡"}
                </div>

                <h3 className="text-[0.9375rem] font-semibold text-[#F0F6FF] mb-2 leading-snug">{skill.title}</h3>
                <p className="text-[0.8125rem] text-[#8B95A8] leading-[1.65] mb-4">{skill.description}</p>

                {/* Impact */}
                <div className="inline-block text-[10px] font-mono text-[#A9D6FF] bg-[rgba(169,214,255,0.06)] border border-[rgba(169,214,255,0.14)] px-3 py-1 rounded-full mb-4">
                  {skill.impact}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {skill.tags.map((tag) => (
                    <span key={tag}
                      className="text-[10px] font-mono px-2 py-0.5 rounded border transition-colors duration-200 group-hover:border-[rgba(47,107,255,0.25)] group-hover:text-[#8B95A8]"
                      style={{ background: "rgba(47,107,255,0.06)", borderColor: "rgba(47,107,255,0.12)", color: "#5A6478" }}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Tech marquee */}
        <div className="mt-20 relative overflow-hidden">
          <p className="text-[10px] text-[#5A6478] font-mono tracking-[0.18em] uppercase mb-6 text-center">Technologies &amp; Platforms</p>
          <div className="absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-[#080C18] to-transparent pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-[#080C18] to-transparent pointer-events-none" />
          <div className="flex gap-3 w-max" style={{ animation: "skills-marquee 40s linear infinite" }}>
            {["AWS","GCP","Azure","Kubernetes","Docker","Terraform","Helm","ArgoCD","Jenkins","GitHub Actions",
              "Prometheus","Grafana","MLflow","LangChain","FastAPI","PostgreSQL","Redis","Kafka","Vault","OpenTelemetry",
              "AWS","GCP","Azure","Kubernetes","Docker","Terraform","Helm","ArgoCD","Jenkins","GitHub Actions",
              "Prometheus","Grafana","MLflow","LangChain","FastAPI","PostgreSQL","Redis","Kafka","Vault","OpenTelemetry",
            ].map((tech, i) => (
              <div key={`${tech}-${i}`}
                className="flex-shrink-0 px-4 py-2 rounded-xl text-[11px] font-mono text-[#8B95A8] border border-[rgba(47,107,255,0.1)] whitespace-nowrap select-none"
                style={{ background: "rgba(13,26,50,0.6)" }}>
                {tech}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
