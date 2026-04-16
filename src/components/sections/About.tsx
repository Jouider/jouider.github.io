"use client";

import { motion } from "framer-motion";
import { skills, experience } from "@/lib/data";
import SectionLabel from "@/components/ui/SectionLabel";

const categories = ["Frontend", "Backend", "Data", "Tools"];

export default function About() {
  return (
    <section className="py-24 px-6 gradient-bg-section" id="about">
      <div className="max-w-6xl mx-auto">
        <SectionLabel
          label="About"
          title="Builder, not just a coder"
          description="I don't just write features — I solve business problems."
        />

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Bio + Timeline */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-secondary text-lg leading-relaxed mb-8">
              Full Stack developer based in Casablanca, Morocco. Formerly at{" "}
              <span className="text-primary font-medium">moteur.ma (Avito Group)</span>.
              My main project is a prospecting bot I run in production to find SMBs
              without a web presence and reach them automatically via WhatsApp.
            </p>

            <div className="space-y-0">
              {experience.map((exp, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="relative pl-8 pb-8 last:pb-0 border-l-2 border-border"
                >
                  <div className="absolute -left-[7px] top-1 w-3 h-3 rounded-full bg-brand border-2 border-white" />
                  <span className="text-xs font-mono text-brand mb-1 block">{exp.period}</span>
                  <h3 className="font-semibold text-primary">
                    {exp.role}
                    {exp.company && (
                      <span className="text-secondary font-normal"> — {exp.company}</span>
                    )}
                  </h3>
                  <p className="text-secondary text-sm mt-1">{exp.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {categories.map((cat) => (
              <div key={cat} className="mb-8 last:mb-0">
                <h3 className="text-sm font-mono text-brand uppercase tracking-wider mb-3">
                  {cat}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skills
                    .filter((s) => s.category === cat)
                    .map((skill, i) => (
                      <motion.span
                        key={skill.name}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.03 }}
                        whileHover={{ scale: 1.05 }}
                        className="px-4 py-2 rounded-xl border border-border bg-white text-sm font-medium text-primary cursor-default transition-colors hover:text-brand hover:border-brand/20"
                      >
                        {skill.name}
                      </motion.span>
                    ))}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
