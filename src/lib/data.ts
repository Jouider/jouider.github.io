export const featuredProject = {
  title: "Prospecting Agent",
  tagline: "From raw data to qualified leads, automatically.",
  description:
    "Monorepo bot that scrapes Google Maps to find SMBs without a website in Morocco and Belgium, deduplicates by E.164 phone number, and launches automated WhatsApp campaigns. Used in production for my own freelance prospecting.",
  tech: [
    "Node.js",
    "TypeScript",
    "Express",
    "Prisma",
    "Playwright",
    "React",
    "Vite",
    "Tailwind",
    "shadcn/ui",
  ],
  github: "https://github.com/Jouider",
  stats: [
    { value: "2,400+", label: "Leads found" },
    { value: "93%", label: "Deduplication rate" },
    { value: "150+", label: "Campaigns launched" },
  ],
};

export const projects = [
  // --- Projects from the agency (DigiToYou) ---
  {
    img: "/dekers.png",
    title: "Dekers Dépannage",
    description: "24/7 roadside assistance & towing service in Belgium.",
    tech: ["Next.js", "Tailwind"],
    href: "https://dekersdepannage.be/",
    isNew: true,
  },
  {
    img: "/move2you.png",
    title: "Move2You",
    description: "Premium private chauffeur service in Tesla — Belgium.",
    tech: ["Next.js", "Tailwind"],
    href: "https://move2you.be/",
    isNew: true,
  },
  {
    img: "/beautybarconcept.png",
    title: "Beauty Bar Concepts",
    description: "High-end beauty salon with online booking — Marrakech.",
    tech: ["Next.js", "Tailwind"],
    href: "https://beautybarconcepts.com/",
  },
  {
    img: "/verdia.png",
    title: "Verdia Garden",
    description: "Online plant shop with optimized purchase experience — Casablanca.",
    tech: ["Next.js", "Tailwind"],
    href: "https://verdiagarden.com/",
  },
  {
    img: "/muraldesign.png",
    title: "Mural Design",
    description: "Wall decoration agency with impactful visual showcase — Casablanca.",
    tech: ["Next.js", "Tailwind"],
    href: "https://muraldesign.ma/",
  },
  {
    img: "/garden.png",
    title: "Garden Concept",
    description: "Landscaping & outdoor design with an immersive portfolio.",
    tech: ["Next.js", "Tailwind"],
    href: "https://gardenconcept.ma/",
  },
  {
    img: "/storymedia-banner.png",
    title: "Story Media",
    description: "Audiovisual production agency — captivating project showcase.",
    tech: ["Laravel", "Bootstrap"],
    href: "https://www.storymedia.ma/",
  },
  {
    img: "/agile5s.png",
    title: "Agile5S",
    description: "IT services company website based in the US.",
    tech: ["JavaScript", "Bootstrap"],
    href: "https://agile5s.com/",
  },
  {
    img: "/miservice.png",
    title: "MI Services",
    description: "Industrial maintenance services — professional site, Belgium.",
    tech: ["Next.js", "Tailwind"],
    href: "https://miservice.info/",
  },
  {
    img: "/wgs-banner.png",
    title: "WGS.ma",
    description: "Security services company — reinforced online presence.",
    tech: ["Laravel", "Bootstrap"],
    href: "https://www.wgs.ma/",
  },
  {
    img: null,
    title: "Syndic AZ",
    description: "Property management company — clear and engaging site, Casablanca.",
    tech: ["Next.js", "Tailwind"],
    href: "https://syndicaz.com/",
  },

  // --- Personal / older projects ---
  {
    img: "/faciclean.png",
    title: "Faciclean",
    description: "Professional cleaning services company website.",
    tech: ["JavaScript", "Bootstrap"],
    href: "https://faciclean.ma/",
  },
  {
    img: "/groupsaz.png",
    title: "Group SAZ",
    description: "Multi-sector site: property management, IT consulting, aviation.",
    tech: ["React"],
    href: "https://groupsaz.com/",
  },
  {
    img: "/isicinema-banner.png",
    title: "ISI Cinema",
    description: "Graduation project — cinema projection management system.",
    tech: ["Laravel", "MySQL"],
    href: "https://github.com/Jouider/cinema-isi",
  },
  {
    img: "/bemestar-banner.png",
    title: "Bemestar",
    description: "Platform connecting clients with coaching experts.",
    tech: ["Laravel", "MySQL", "PHP"],
    href: "https://github.com/Jouider/Bemestar",
  },
  {
    img: "/stafflex-banner.png",
    title: "Stafflex Transport",
    description: "Personal and touristic transportation agency website.",
    tech: ["Laravel", "MySQL"],
    href: "https://github.com/Jouider/stafflextransport",
  },
];

export const skills = [
  { name: "React", category: "Frontend" },
  { name: "Next.js", category: "Frontend" },
  { name: "TypeScript", category: "Frontend" },
  { name: "Tailwind CSS", category: "Frontend" },
  { name: "Framer Motion", category: "Frontend" },
  { name: "Node.js", category: "Backend" },
  { name: "Express", category: "Backend" },
  { name: "Laravel", category: "Backend" },
  { name: "PHP", category: "Backend" },
  { name: "Python", category: "Backend" },
  { name: "MySQL", category: "Data" },
  { name: "Prisma", category: "Data" },
  { name: "MongoDB", category: "Data" },
  { name: "Playwright", category: "Tools" },
  { name: "Docker", category: "Tools" },
  { name: "Git", category: "Tools" },
  { name: "Figma", category: "Tools" },
];

export const experience = [
  {
    period: "2023 — Present",
    role: "Freelance Full Stack Developer",
    company: "",
    description:
      "Building custom solutions and automation tools. Created the Prospecting Agent used in production.",
  },
  {
    period: "2022 — 2023",
    role: "Web Developer",
    company: "moteur.ma (Avito Group)",
    description:
      "Laravel/Blade, MySQL, back-office and product features for Morocco's leading auto classifieds platform.",
  },
  {
    period: "2021 — 2022",
    role: "Web Development Intern",
    company: "Media Digital Invest",
    description: "Full stack web development, integration and maintenance.",
  },
];
