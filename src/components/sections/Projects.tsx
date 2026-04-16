"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink, Terminal, Sparkles } from "lucide-react";
import { featuredProject, projects } from "@/lib/data";
import SectionLabel from "@/components/ui/SectionLabel";
import CardShell from "@/components/ui/CardShell";

function FeaturedCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6 }}
      className="relative rounded-2xl border-2 border-brand/20 bg-gradient-to-br from-white via-blue-50/30 to-white overflow-hidden mb-12 card-glow"
    >
      <div className="absolute top-4 right-4 z-10 flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent/20 border border-accent/30">
        <Sparkles size={12} className="text-primary" />
        <span className="text-primary text-xs font-semibold">Featured project</span>
      </div>

      <div className="p-6 md:p-10">
        <div className="flex items-start gap-4 mb-6">
          <div className="p-3 rounded-xl bg-brand/10 text-brand flex-shrink-0">
            <Terminal size={24} />
          </div>
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-primary mb-1">
              {featuredProject.title}
            </h3>
            <p className="text-brand font-medium text-sm mb-3">{featuredProject.tagline}</p>
            <p className="text-secondary text-base leading-relaxed max-w-2xl">
              {featuredProject.description}
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          {featuredProject.stats.map((stat) => (
            <div key={stat.label} className="rounded-xl bg-surface border border-border p-4 text-center">
              <div className="text-2xl font-bold font-mono text-brand mb-1">{stat.value}</div>
              <div className="text-secondary text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Tech */}
        <div className="flex flex-wrap gap-2 mb-6">
          {featuredProject.tech.map((t) => (
            <span key={t} className="px-3 py-1 rounded-full bg-brand/5 border border-brand/10 text-brand text-sm font-mono">
              {t}
            </span>
          ))}
        </div>

        <a
          href={featuredProject.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-secondary hover:text-brand transition-colors text-sm"
        >
          <Github size={16} />
          View on GitHub
        </a>
      </div>
    </motion.div>
  );
}

function ProjectCard({ project, index }: { project: (typeof projects)[0]; index: number }) {
  const isGithub = project.href.includes("github.com");

  return (
    <CardShell delay={index * 0.05}>
      <a href={project.href} target="_blank" rel="noopener noreferrer" className="block group">
        {/* Image or placeholder */}
        <div className="aspect-video rounded-xl overflow-hidden bg-surface mb-4 -mx-2 -mt-2">
          {project.img ? (
            <img
              src={project.img}
              alt={project.title}
              loading="lazy"
              className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-brand/5 to-accent/5 group-hover:from-brand/10 group-hover:to-accent/10 transition-all duration-500">
              <span className="text-2xl font-bold font-mono text-brand/30">
                {project.title.charAt(0)}
              </span>
            </div>
          )}
        </div>

        <div className="flex items-center justify-between mb-2">
          <h3 className="font-semibold text-primary group-hover:text-brand transition-colors">
            {project.title}
          </h3>
          <div className="flex items-center gap-1.5">
            {"isNew" in project && project.isNew && (
              <span className="text-xs px-2 py-0.5 rounded-full bg-accent/20 text-primary font-medium">
                New
              </span>
            )}
            {isGithub ? (
              <Github size={14} className="text-secondary" />
            ) : (
              <ExternalLink size={14} className="text-secondary" />
            )}
          </div>
        </div>
        <p className="text-secondary text-sm mb-3 line-clamp-2">{project.description}</p>
        <div className="flex flex-wrap gap-1.5">
          {project.tech.map((t) => (
            <span key={t} className="text-xs font-mono text-secondary/80 px-2 py-0.5 rounded-full bg-surface border border-border">
              {t}
            </span>
          ))}
        </div>
      </a>
    </CardShell>
  );
}

export default function Projects() {
  return (
    <section className="py-24 px-6" id="projects">
      <div className="max-w-6xl mx-auto">
        <SectionLabel
          label="Portfolio"
          title="My projects"
          description="From a production prospecting bot to delivered client websites."
        />
        <FeaturedCard />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <ProjectCard key={p.title} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
