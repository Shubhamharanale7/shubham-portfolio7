"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Calendar, Clock, Zap } from "lucide-react";

interface CalendlyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CalendlyModal({ isOpen, onClose }: CalendlyModalProps) {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [onClose]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {/* Modal */}
          <motion.div
            className="relative z-10 w-full max-w-md bg-[#0F1E3A] border border-[rgba(47,107,255,0.25)] rounded-2xl p-6 shadow-2xl"
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-[#1B2F52] flex items-center justify-center text-gray-400 hover:text-white transition-colors"
            >
              <X size={16} />
            </button>

            <div className="mb-1 text-xs text-[#2F6BFF] font-mono tracking-widest uppercase">
              Schedule a call
            </div>
            <h3 className="text-xl font-bold mb-1">Book a 30-min Discovery Call</h3>
            <p className="text-sm text-[#9CA3AF] mb-5">
              Let&apos;s discuss your infrastructure challenges and how I can help build scalable production systems.
            </p>

            <div className="grid grid-cols-3 gap-3 mb-5">
              {[
                { icon: Clock, label: "Duration", value: "30 mins" },
                { icon: Zap, label: "Response", value: "Same day" },
                { icon: Calendar, label: "Booking", value: "Instant" },
              ].map(({ icon: Icon, label, value }) => (
                <div
                  key={label}
                  className="bg-[#1B2F52] border border-[rgba(47,107,255,0.15)] rounded-xl p-3 text-center"
                >
                  <Icon size={16} className="text-[#2F6BFF] mx-auto mb-1" />
                  <div className="text-[10px] text-[#6B7280] font-mono uppercase tracking-wider">{label}</div>
                  <div className="text-xs font-semibold mt-0.5">{value}</div>
                </div>
              ))}
            </div>

            <a
              href="https://calendly.com/shubhaminfosoft7/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center bg-[#2F6BFF] hover:bg-[#2456D3] text-white font-semibold py-3 rounded-xl transition-colors duration-200"
            >
              Open Calendly →
            </a>

            <p className="text-center text-xs text-[#6B7280] mt-3">
              Or email directly:{" "}
              <a href="mailto:shubhaminfosoft7@gmail.com" className="text-[#A9D6FF] hover:underline">
                shubhaminfosoft7@gmail.com
              </a>
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
