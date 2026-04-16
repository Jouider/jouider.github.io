"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface CardShellProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export default function CardShell({
  children,
  className = "",
  delay = 0,
}: CardShellProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -4 }}
      className={`card-glow rounded-2xl border border-border bg-gradient-to-br from-white to-surface p-6 transition-shadow hover:shadow-lg hover:border-brand/20 ${className}`}
    >
      {children}
    </motion.div>
  );
}
