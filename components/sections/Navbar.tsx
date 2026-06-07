"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import CalendlyModal from "@/components/ui/CalendlyModal";

const NAV_LINKS = [
  { href:"#about",    label:"About"    },
  { href:"#skills",   label:"Skills"   },
  { href:"#projects", label:"Projects" },
  { href:"#services", label:"Services" },
  { href:"#cta",      label:"Contact"  },
];

export default function Navbar() {
  const [scrolled,   setScrolled]   = useState(false);
  const [open,       setOpen]       = useState(false);
  const [menuOpen,   setMenuOpen]   = useState(false);
  const [activeLink, setActiveLink] = useState("");

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn, { passive:true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <>
      {/* ── Top accent line — always visible ── */}
      <div className="fixed top-0 left-0 right-0 z-50 h-[2px]"
        style={{ background:"linear-gradient(90deg, transparent 0%, #2F6BFF 30%, #A9D6FF 50%, #2F6BFF 70%, transparent 100%)" }} />

      <motion.nav
        className="fixed top-[2px] left-0 right-0 z-40 px-6 lg:px-10"
        style={{
          paddingTop:"14px",
          paddingBottom:"14px",
          background:    scrolled ? "rgba(8,12,24,0.92)" : "transparent",
          backdropFilter:scrolled ? "blur(24px)"          : "none",
          borderBottom:  scrolled ? "1px solid rgba(47,107,255,0.1)" : "1px solid transparent",
          transition:"all 0.4s ease",
        }}
        initial={{ y:-80, opacity:0 }}
        animate={{ y:0,   opacity:1 }}
        transition={{ duration:0.75, ease:[0.16,1,0.3,1] }}
      >
        <div className="max-w-6xl mx-auto flex items-center justify-between">

          {/* ── Logo ── */}
          <motion.a href="#hero"
            className="flex items-center gap-2 group"
            whileHover={{ scale:1.02 } as any}
            transition={{ type:"spring", stiffness:400, damping:20 }}>
            {/* Logo mark */}
            <div className="w-8 h-8 rounded-lg flex items-center justify-center text-xs font-black font-mono text-white"
              style={{
                background:"linear-gradient(135deg, #2F6BFF 0%, #1B4FCC 100%)",
                boxShadow:"0 0 16px rgba(47,107,255,0.35)",
              }}>
              SH
            </div>
            <span className="font-mono font-bold text-[1.05rem] tracking-tight hidden sm:block">
              <span className="text-[#2F6BFF]">SH</span>
              <span className="text-[#A9D6FF]">.dev</span>
            </span>
          </motion.a>

          {/* ── Desktop nav links ── */}
          <ul className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map(({ href, label }) => (
              <li key={href}>
                <a href={href}
                  onMouseEnter={() => setActiveLink(label)}
                  onMouseLeave={() => setActiveLink("")}
                  className="relative px-4 py-2 rounded-lg text-[0.8125rem] font-medium transition-all duration-200 block"
                  style={{ color: activeLink === label ? "#F0F6FF" : "#8B95A8" }}>
                  {/* Hover bg */}
                  <AnimatePresence>
                    {activeLink === label && (
                      <motion.span className="absolute inset-0 rounded-lg"
                        style={{ background:"rgba(47,107,255,0.08)", border:"1px solid rgba(47,107,255,0.15)" }}
                        initial={{ opacity:0, scale:0.9 }}
                        animate={{ opacity:1, scale:1 }}
                        exit={{ opacity:0, scale:0.9 }}
                        transition={{ duration:0.15 }}
                        layoutId="nav-hover" />
                    )}
                  </AnimatePresence>
                  <span className="relative z-10">{label}</span>
                </a>
              </li>
            ))}
          </ul>

          {/* ── CTA button ── */}
          <div className="hidden md:flex items-center gap-3">
            {/* Status dot */}
            <div className="flex items-center gap-1.5 text-[10px] font-mono text-[#5A6478]">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" style={{ animation:"pulse-dot 2s ease-in-out infinite" }} />
              Available
            </div>

            <button onClick={() => setOpen(true)}
              className="group relative overflow-hidden flex items-center gap-2 text-white text-[0.8125rem] font-bold px-5 py-2.5 rounded-xl transition-all duration-250"
              style={{
                background:"linear-gradient(135deg, #2F6BFF 0%, #1B4FCC 100%)",
                boxShadow:"0 0 0 1px rgba(47,107,255,0.45), 0 4px 16px rgba(47,107,255,0.25)",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.boxShadow="0 0 0 1px rgba(47,107,255,0.8), 0 8px 32px rgba(47,107,255,0.45)"; e.currentTarget.style.transform="translateY(-1px)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.boxShadow="0 0 0 1px rgba(47,107,255,0.45), 0 4px 16px rgba(47,107,255,0.25)"; e.currentTarget.style.transform="translateY(0)"; }}>
              {/* shimmer */}
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.12] to-transparent -translate-x-full skew-x-[-15deg] group-hover:translate-x-full transition-transform duration-700" />
              <span className="relative">Book a Call</span>
              <span className="relative">→</span>
            </button>
          </div>

          {/* ── Mobile hamburger ── */}
          <button
            className="md:hidden w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-200"
            style={{ background:"rgba(47,107,255,0.08)", border:"1px solid rgba(47,107,255,0.18)", color:"#8B95A8" }}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            onMouseEnter={(e) => { e.currentTarget.style.color="#F0F6FF"; e.currentTarget.style.borderColor="rgba(47,107,255,0.4)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.color="#8B95A8"; e.currentTarget.style.borderColor="rgba(47,107,255,0.18)"; }}>
            {menuOpen ? <X size={17} /> : <Menu size={17} />}
          </button>
        </div>
      </motion.nav>

      {/* ── Mobile full-screen menu ── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-30 flex flex-col items-center justify-center gap-6"
            style={{ background:"rgba(8,12,24,0.97)", backdropFilter:"blur(24px)" }}
            initial={{ opacity:0, y:-20 }}
            animate={{ opacity:1, y:0 }}
            exit={{ opacity:0, y:-20 }}
            transition={{ duration:0.3 }}>
            {/* Logo in mobile menu */}
            <div className="absolute top-6 left-6 font-mono font-bold text-lg">
              <span className="text-[#2F6BFF]">SH</span><span className="text-[#A9D6FF]">.dev</span>
            </div>
            {/* Close */}
            <button className="absolute top-5 right-5 w-9 h-9 rounded-xl flex items-center justify-center text-[#8B95A8]"
              style={{ background:"rgba(47,107,255,0.08)", border:"1px solid rgba(47,107,255,0.2)" }}
              onClick={() => setMenuOpen(false)}>
              <X size={17} />
            </button>

            {NAV_LINKS.map(({ href, label }, i) => (
              <motion.a key={href} href={href}
                onClick={() => setMenuOpen(false)}
                className="text-2xl font-bold text-[#F0F6FF] hover:text-[#A9D6FF] transition-colors"
                initial={{ opacity:0, y:20 }}
                animate={{ opacity:1, y:0 }}
                transition={{ delay: i * 0.06 }}>
                {label}
              </motion.a>
            ))}

            <motion.button
              onClick={() => { setMenuOpen(false); setOpen(true); }}
              className="mt-4 text-white font-bold px-8 py-3.5 rounded-xl"
              style={{ background:"linear-gradient(135deg, #2F6BFF, #1B4FCC)", boxShadow:"0 4px 24px rgba(47,107,255,0.4)" }}
              initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }}
              transition={{ delay:0.3 }}>
              Book a Discovery Call →
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      <CalendlyModal isOpen={open} onClose={() => setOpen(false)} />
    </>
  );
}
