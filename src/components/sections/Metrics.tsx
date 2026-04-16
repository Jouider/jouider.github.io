"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { TrendingUp } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";

const metrics = [
  { value: 2400, suffix: "+", label: "Leads found" },
  { value: 93, suffix: "%", label: "Deduplication rate" },
  { value: 150, suffix: "+", label: "WhatsApp campaigns" },
  { value: 8, suffix: "+", label: "Projects delivered" },
];

function AnimatedCounter({
  value,
  suffix,
  inView,
}: {
  value: number;
  suffix: string;
  inView: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const increment = value / (2000 / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, value]);

  return (
    <span className="text-4xl md:text-5xl font-bold font-mono gradient-text">
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

export default function Metrics() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 px-6" id="metrics">
      <div className="max-w-6xl mx-auto">
        <SectionLabel
          label="Results"
          title="Numbers, not promises"
          description="Real metrics from the Prospecting Agent running in production."
        />

        <div ref={ref} className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className="card-glow rounded-2xl border border-border bg-gradient-to-br from-white to-surface p-6 text-center transition-shadow hover:shadow-lg hover:border-brand/20"
            >
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-brand/5 text-brand mb-4">
                <TrendingUp size={18} />
              </div>
              <AnimatedCounter value={m.value} suffix={m.suffix} inView={inView} />
              <p className="text-secondary text-sm mt-2">{m.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
