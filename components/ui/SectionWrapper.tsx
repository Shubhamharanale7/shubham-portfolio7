"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export default function SectionWrapper({ children, className, id }: SectionWrapperProps) {
  return (
    <motion.section id={id} className={cn("py-28 px-6 lg:px-10", className)}
      initial={{ opacity:0, y:40 }}
      whileInView={{ opacity:1, y:0 }}
      viewport={{ once:true, margin:"-80px" }}
      transition={{ duration:0.7, ease:[0.16,1,0.3,1] }}>
      {children}
    </motion.section>
  );
}
