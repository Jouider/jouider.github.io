"use client";

import { Github, Linkedin, Mail } from "lucide-react";

const socials = [
  { icon: Github, href: "https://github.com/Jouider", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/abdellah-jouider-5a2b7821a/", label: "LinkedIn" },
  { icon: Mail, href: "mailto:jouider.abdellah@gmail.com", label: "Email" },
];

export default function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <span className="font-mono font-bold text-xl text-brand">
              AJ<span className="text-accent">.</span>
            </span>
            <p className="text-secondary text-sm mt-1">
              Full Stack Developer & Product Builder
            </p>
          </div>

          <div className="flex items-center gap-6">
            {["Projects", "About", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm text-secondary hover:text-brand transition-colors"
              >
                {item}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target={s.label !== "Email" ? "_blank" : undefined}
                rel={s.label !== "Email" ? "noopener noreferrer" : undefined}
                aria-label={s.label}
                className="p-2.5 rounded-full border border-border bg-white text-secondary hover:text-brand hover:border-brand/30 transition-all"
              >
                <s.icon size={16} />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs text-secondary">
            &copy; {new Date().getFullYear()} Abdellah Jouider. All rights reserved.
          </p>
          <p className="text-xs text-secondary/60">
            Built with Next.js, Tailwind CSS & Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
}
