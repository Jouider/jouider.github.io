# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm install          # Install dependencies
npm run dev          # Dev server at http://localhost:3000
npm run build        # Production build → out/ (static export)
npm run deploy       # Build and push to GitHub Pages (gh-pages branch)
```

## Architecture

Next.js 15 static-export SPA portfolio deployed to GitHub Pages at `jouider.dev`. Built with TypeScript, Tailwind CSS v4, and Framer Motion.

**Stack:** Next.js 15 (App Router, `output: "export"`), React 19, TypeScript, Tailwind v4 (configured via `@theme inline` in globals.css), Framer Motion, Lucide + react-icons.

**Data layer:** All portfolio content (featured project, projects list, skills, experience, tech logos) lives in `src/lib/data.ts`. Adding or updating content means editing that file.

**Component structure:**
- `src/app/page.tsx` composes all sections: Hero → Projects → About → Technologies → Metrics → Contact
- `src/app/layout.tsx` wraps with Header, Footer, FloatingActions
- `src/components/sections/` — page sections (Hero, Projects, About, Metrics, Technologies, Contact)
- `src/components/ui/` — reusable primitives (CardShell, SectionLabel, FloatingActions)
- `src/components/` — layout components (Header, Footer)

**Design system:** Light theme matching DigiToYou agency site. Colors defined as CSS custom properties in `src/app/globals.css` via `@theme inline`. Key tokens: `brand` (#1F4BFF blue), `accent` (#B8E26A lime), `primary` (#0B1B2B navy), `secondary` (#6B7280). Fonts: Geist (sans) + Geist Mono. Use utility classes like `text-brand`, `bg-accent`, `gradient-text`, `btn-gradient-accent`, `btn-gradient-brand`, `card-glow`, `glass`.

**Animations:** Framer Motion for scroll-triggered (`whileInView`), hover effects, canvas particle system in Hero, infinite tech carousel, animated counters. Canvas respects `prefers-reduced-motion`.

**Deployment:** `npm run deploy` builds to `out/` then pushes to `gh-pages` branch. The `CNAME` file in `public/` preserves the custom domain on deploy. Images are unoptimized (static export constraint).
