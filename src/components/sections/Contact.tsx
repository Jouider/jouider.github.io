"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin, Github, ArrowUpRight } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";

const links = [
  {
    icon: Mail,
    label: "Email",
    value: "jouider.abdellah@gmail.com",
    href: "mailto:jouider.abdellah@gmail.com",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "/in/abdellah-jouider",
    href: "https://www.linkedin.com/in/abdellah-jouider-5a2b7821a/",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "@Jouider",
    href: "https://github.com/Jouider",
  },
];

export default function Contact() {
  return (
    <section className="py-24 px-6 gradient-bg-section" id="contact">
      <div className="max-w-6xl mx-auto">
        <SectionLabel
          label="Contact"
          title="Let's work together"
          description="Got a project in mind? A full-time opportunity? Or just want to talk tech?"
        />

        <div className="grid sm:grid-cols-3 gap-4">
          {links.map((link, i) => (
            <motion.a
              key={link.label}
              href={link.href}
              target={link.label !== "Email" ? "_blank" : undefined}
              rel={link.label !== "Email" ? "noopener noreferrer" : undefined}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className="group card-glow flex items-center gap-4 p-6 rounded-2xl border border-border bg-gradient-to-br from-white to-surface transition-shadow hover:shadow-lg hover:border-brand/20"
            >
              <div className="p-3 rounded-xl bg-brand/5 text-brand group-hover:bg-brand group-hover:text-white transition-all">
                <link.icon size={20} />
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-xs font-mono text-secondary uppercase tracking-wider mb-0.5">
                  {link.label}
                </div>
                <div className="text-primary text-sm truncate font-medium">{link.value}</div>
              </div>
              <ArrowUpRight size={16} className="text-secondary/30 group-hover:text-brand transition-colors" />
            </motion.a>
          ))}
        </div>

        {/* CTA block */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 gradient-bg-cta rounded-2xl p-8 md:p-12 text-center"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
            Ready to launch your project?
          </h3>
          <p className="text-white/70 mb-6 max-w-lg mx-auto">
            Let&apos;s talk about how I can help you build the technical solution
            that will grow your business.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="mailto:jouider.abdellah@gmail.com"
              className="btn-gradient-accent px-7 py-3 rounded-full text-base"
            >
              Get in touch
            </a>
            <a
              href="https://www.linkedin.com/in/abdellah-jouider-5a2b7821a/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full border border-white/20 text-white hover:bg-white/10 transition-all inline-flex items-center gap-2"
            >
              <Linkedin size={16} />
              LinkedIn
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
