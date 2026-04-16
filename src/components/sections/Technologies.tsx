"use client";

import {
  SiReact, SiNextdotjs, SiTypescript, SiNodedotjs, SiLaravel,
  SiTailwindcss, SiPrisma, SiMysql, SiMongodb, SiDocker,
  SiGit, SiPython, SiPhp, SiFigma, SiExpress,
} from "react-icons/si";

const icons = [
  { Icon: SiReact,       name: "React",      color: "#61DAFB" },
  { Icon: SiNextdotjs,   name: "Next.js",    color: "#111111" },
  { Icon: SiTypescript,  name: "TypeScript", color: "#3178C6" },
  { Icon: SiNodedotjs,   name: "Node.js",    color: "#339933" },
  { Icon: SiLaravel,     name: "Laravel",    color: "#FF2D20" },
  { Icon: SiTailwindcss, name: "Tailwind",   color: "#06B6D4" },
  { Icon: SiPrisma,      name: "Prisma",     color: "#2D3748" },
  { Icon: SiMysql,       name: "MySQL",      color: "#4479A1" },
  { Icon: SiMongodb,     name: "MongoDB",    color: "#47A248" },
  { Icon: SiDocker,      name: "Docker",     color: "#2496ED" },
  { Icon: SiGit,         name: "Git",        color: "#F05032" },
  { Icon: SiPython,      name: "Python",     color: "#3776AB" },
  { Icon: SiPhp,         name: "PHP",        color: "#777BB4" },
  { Icon: SiFigma,       name: "Figma",      color: "#F24E1E" },
  { Icon: SiExpress,     name: "Express",    color: "#111111" },
];

export default function Technologies() {
  return (
    <section className="py-16 overflow-hidden gradient-bg-section">
      <p className="text-center text-sm font-mono text-secondary uppercase tracking-wider mb-8 px-6">
        Technologies I work with daily
      </p>

      <div
        className="tech-track-wrapper relative"
        style={{
          maskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
          WebkitMaskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
        }}
      >
        <div className="tech-track flex gap-6">
          {[...icons, ...icons, ...icons].map((item, i) => (
            <div
              key={i}
              className="flex flex-col items-center gap-2 px-3 flex-shrink-0 group cursor-default"
            >
              <div className="w-14 h-14 rounded-xl border border-border bg-white flex items-center justify-center group-hover:border-brand/30 group-hover:shadow-md transition-all">
                <item.Icon size={24} style={{ color: item.color }} />
              </div>
              <span className="text-xs text-secondary group-hover:text-primary transition-colors whitespace-nowrap">
                {item.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(calc(-100% / 3)); }
        }
        .tech-track {
          animation: marquee 30s linear infinite;
        }
        .tech-track-wrapper:hover .tech-track {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
