"use client";

import { motion } from "framer-motion";

interface SectionLabelProps {
  label: string;
  title: string;
  description?: string;
  center?: boolean;
}

export default function SectionLabel({
  label,
  title,
  description,
  center = false,
}: SectionLabelProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`mb-12 ${center ? "text-center" : ""}`}
    >
      <span className="inline-block px-4 py-1.5 rounded-full bg-brand/5 border border-brand/10 text-brand text-sm font-medium mb-4">
        {label}
      </span>
      <h2 className="text-3xl md:text-4xl font-bold text-primary">{title}</h2>
      {description && (
        <p className="mt-3 text-secondary text-lg max-w-2xl">
          {description}
        </p>
      )}
    </motion.div>
  );
}
