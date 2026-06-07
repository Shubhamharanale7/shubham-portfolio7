"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, ArrowUpRight } from "lucide-react";
import { PROJECTS } from "@/lib/data";
import { getDiagram } from "@/components/ui/ArchDiagrams";
import SectionHeader from "@/components/ui/SectionHeader";
import type { Project } from "@/lib/types";

const CATEGORIES = [
  { id: "all",       label: "All"          },
  { id: "mlops",     label: "MLOps"        },
  { id: "devops",    label: "DevOps/Cloud" },
  { id: "ai-agents", label: "AI Agents"   },
] as const;

const CAT_LABEL: Record<string, string> = {
  mlops:       "MLOps",
  devops:      "DevOps",
  "ai-agents": "AI Agents",
};

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 36 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.94 }}
      transition={{ duration: 0.5, delay: index * 0.07, ease: [0.16, 1, 0.3, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group relative rounded-2xl overflow-hidden flex flex-col"
      style={{
        background: "linear-gradient(165deg, #0D1A32 0%, #080C18 100%)",
        border: `1px solid ${hovered ? "rgba(47,107,255,0.45)" : "rgba(47,107,255,0.13)"}`,
        boxShadow: hovered
          ? "0 24px 64px rgba(47,107,255,0.13), 0 8px 24px rgba(0,0,0,0.5)"
          : "0 4px 20px rgba(0,0,0,0.35)",
        transform: hovered ? "translateY(-4px)" : "translateY(0)",
        transition: "all 0.32s cubic-bezier(0.16,1,0.3,1)",
      }}
    >
      {/* ── Diagram area ── */}
      <div className="relative overflow-hidden bg-[#060A14]" style={{ height: "220px" }}>

        {/* Diagram with zoom */}
        <div
          className="absolute inset-0 transition-transform duration-700 ease-out"
          style={{ transform: hovered ? "scale(1.06)" : "scale(1)" }}
        >
          {getDiagram(project.diagramType)}
        </div>

        {/* Bottom gradient fade into card body */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D1A32] via-[rgba(8,12,20,0.3)] to-transparent" />

        {/* Hover tint overlay */}
        <div
          className="absolute inset-0 transition-opacity duration-300"
          style={{
            background: "rgba(47,107,255,0.05)",
            opacity: hovered ? 1 : 0,
          }}
        />

        {/* Category chip */}
        <div className="absolute top-3.5 left-3.5 z-10">
          <span className="inline-flex items-center gap-1.5 text-[10px] font-mono tracking-wider px-2.5 py-1 rounded-full border backdrop-blur-md"
            style={{ background: "rgba(8,12,24,0.82)", borderColor: "rgba(47,107,255,0.32)", color: "#A9D6FF" }}>
            {CAT_LABEL[project.category] ?? project.category.toUpperCase()}
          </span>
        </div>

        {/* Metric badge */}
        <div className="absolute top-3.5 right-3.5 z-10">
          <span className="metric-badge backdrop-blur-md">{project.badge}</span>
        </div>

        {/* GitHub hover reveal */}
        <motion.div
          className="absolute bottom-3.5 right-3.5 z-10"
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: hovered ? 1 : 0, scale: hovered ? 1 : 0.85 }}
          transition={{ duration: 0.2 }}
        >
          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="flex items-center gap-1.5 text-[10px] font-mono px-3 py-1.5 rounded-full border backdrop-blur-md text-white transition-colors"
            style={{ background: "rgba(47,107,255,0.85)", borderColor: "rgba(47,107,255,0.6)" }}>
            <Github size={11} />
            View Code
          </a>
        </motion.div>
      </div>

      {/* ── Card body ── */}
      <div className="flex flex-col flex-1 p-5 pt-4">

        {/* Title */}
        <h3 className="font-semibold text-[1rem] leading-snug mb-2 transition-colors duration-200"
          style={{ color: hovered ? "#A9D6FF" : "#F0F6FF" }}>
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-[0.8125rem] text-[#8B95A8] leading-[1.6] mb-4 line-clamp-2">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-auto">
          {project.tags.slice(0, 5).map((tag) => (
            <span key={tag}
              className="text-[10px] font-mono px-2 py-0.5 rounded border"
              style={{ background: "rgba(47,107,255,0.06)", borderColor: "rgba(47,107,255,0.14)", color: "#5A6478" }}>
              {tag}
            </span>
          ))}
        </div>

        {/* Footer link */}
        <div className="flex items-center justify-between mt-4 pt-3.5 border-t border-[rgba(47,107,255,0.09)]">
          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-[0.75rem] font-mono text-[#8B95A8] hover:text-[#A9D6FF] transition-colors duration-200">
            <Github size={13} />
            Source Code
          </a>
          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-1 text-[0.75rem] font-mono text-[#8B95A8] hover:text-[#A9D6FF] transition-colors duration-200">
            Details
            <ArrowUpRight size={13} />
          </a>
        </div>
      </div>
    </motion.article>
  );
}

export default function Projects() {
  const [active, setActive] = useState<string>("all");

  const filtered = active === "all" ? PROJECTS : PROJECTS.filter((p) => p.category === active);

  return (
    <section id="projects" className="py-28 px-6 lg:px-10 relative"
      style={{ background: "linear-gradient(180deg, rgba(13,26,50,0.4) 0%, #080C18 100%)" }}>

      {/* Faint grid bg */}
      <div className="absolute inset-0 grid-bg opacity-60 pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.7 }}>
          <SectionHeader
            label="projects"
            title={<>Production-grade <br /><span className="text-gradient-blue">engineering systems</span></>}
            subtitle="Real architecture diagrams, real metrics — MLOps pipelines, Kubernetes platforms, AI agents, and cloud-native infrastructure."
          />
        </motion.div>

        {/* Filter tabs */}
        <motion.div className="flex flex-wrap items-center gap-2 mt-10 mb-11"
          initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.15 }}>
          {CATEGORIES.map(({ id, label }) => (
            <button key={id} onClick={() => setActive(id)}
              className="text-[11px] font-mono px-4 py-2 rounded-lg border transition-all duration-200"
              style={{
                background:   active === id ? "#2F6BFF"                       : "transparent",
                borderColor:  active === id ? "#2F6BFF"                       : "rgba(47,107,255,0.2)",
                color:        active === id ? "white"                          : "#8B95A8",
                boxShadow:    active === id ? "0 4px 16px rgba(47,107,255,0.3)" : "none",
              }}>
              {label}
            </button>
          ))}
          <span className="ml-auto text-[11px] font-mono text-[#5A6478]">
            {filtered.length} / {PROJECTS.length}
          </span>
        </motion.div>

        {/* Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <AnimatePresence mode="popLayout">
            {filtered.map((p, i) => <ProjectCard key={p.id} project={p} index={i} />)}
          </AnimatePresence>
        </motion.div>

        {/* GitHub CTA */}
        <motion.div className="mt-14 flex justify-center"
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
          viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3 }}>
          <a href="https://github.com/Shubhamharanale7" target="_blank" rel="noopener noreferrer"
            className="group flex items-center gap-2.5 text-[0.875rem] font-mono text-[#8B95A8] hover:text-[#A9D6FF] border border-[rgba(47,107,255,0.2)] hover:border-[rgba(47,107,255,0.5)] px-6 py-3 rounded-xl transition-all duration-200 hover:bg-[rgba(47,107,255,0.06)]">
            <Github size={15} />
            View all repositories on GitHub
            <ArrowUpRight size={14} className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
