import React, { useState } from "react";
import { motion } from "framer-motion";

export const Projects = () => {
  const [activeTab, setActiveTab] = useState("all");

  const professionalProjects = [
    {
      id: "prof-1",
      title: "Corporate Brand Website",
      subtitle: "Figma to SSR Architecture",
      company: "Slusby Technologies (Crayonte)",
      badge: "Office Project",
      role: "Solo UI Developer",
      description:
        "Converted pixel-perfect Figma designs into the company’s official website with 95% layout accuracy and Server-Side Rendering (SSR). Architected reusable Card and Hero component libraries used across all pages, cutting subsequent development time by 50%.",
      highlights: [
        "95% Figma layout accuracy with SvelteKit SSR",
        "4 production screens & 5+ reusable components",
        "Halved development time for future company pages",
      ],
      tags: ["Figma", "SvelteKit", "SSR", "Tailwind CSS", "Responsive Design"],
    },
    {
      id: "prof-2",
      title: "Crayonte Orchestrator",
      subtitle: "Enterprise Rebranding & Refactoring",
      company: "Slusby Technologies (Crayonte)",
      badge: "Office Project",
      role: "Frontend Refactoring Lead",
      description:
        "Modernized the Orchestrator platform by independently self-onboarding onto a legacy application codebase. Standardized UI/UX styling across the platform, resolved 100+ critical bugs, and engineered a custom SQL Editor component with dynamic query parsing and tabular output.",
      highlights: [
        "Custom SQL Editor with real-time tabular execution",
        "Standardized UI/UX and resolved 100+ legacy bugs",
        "Self-onboarded onto third-party enterprise codebase",
      ],
      tags: ["Legacy Refactoring", "JavaScript", "SQL Editor", "UI/UX", "Data Grid"],
    },
    {
      id: "prof-3",
      title: "Product Website Migration",
      subtitle: "React to SvelteKit SSR Overhaul",
      company: "Slusby Technologies (Crayonte)",
      badge: "Office Project",
      role: "Solo Developer",
      description:
        "Rebuilt the product website in SvelteKit as the sole developer, replacing legacy React and adding custom animations. Implemented Server-Side Rendering (SSR) for the first time in the organization, lifting search visibility by 35%, and created Node.js endpoints for live database updates.",
      highlights: [
        "Raised organic SEO rankings by 35% via SSR",
        "Reduced delivery time by 60% with AI tooling",
        "Node.js endpoints for live updates with zero downtime",
      ],
      tags: ["SvelteKit", "React", "Node.js", "SSR", "SEO", "Tailwind CSS"],
    },
    {
      id: "prof-4",
      title: "Ticketing & Task Management",
      subtitle: "Enterprise In-House Workflow Platform",
      company: "Slusby Technologies (Crayonte)",
      badge: "Office Project",
      role: "Frontend Developer",
      description:
        "Maintained and built 20+ production screens for an in-house task tracker and ticketing platform serving 2+ client organizations. Designed 3 foundational modules (Work, Work Planner, Ticket Management) with Role-Based Access Control (RBAC) and user-specific button permissions.",
      highlights: [
        "Maintained 20+ production screens for 2+ client orgs",
        "Engineered 3 core modules with granular RBAC rules",
        "Resolved 100+ application bugs & improved speed",
      ],
      tags: ["Svelte", "JavaScript", "RBAC", "REST APIs", "Backend Integration"],
    },
  ];

  const personalProjects = [
    {
      id: "pers-1",
      title: "ShopEase – E-Commerce",
      subtitle: "Full-Stack Spring Boot & React App",
      company: "Self-Initiated Full-Stack",
      badge: "Personal Project",
      role: "Full-Stack Developer",
      description:
        "Built a complete full-stack e-commerce platform using React, Tailwind CSS, and a PostgreSQL-backed Spring Boot REST API. Features product catalog search, multi-criteria filtering, shopping cart, checkout, and role-based JWT authentication (Buyer, Seller, Admin) with Redux Toolkit state.",
      highlights: [
        "Full-stack Java Spring Boot REST API & PostgreSQL",
        "Role-based JWT authentication (Buyer, Seller, Admin)",
        "State management with Redux Toolkit & Axios",
      ],
      tags: ["Java", "Spring Boot", "PostgreSQL", "React", "Tailwind CSS", "Redux Toolkit", "JWT"],
      githubUrl: "https://github.com/thatchinamoorthi123",
    },
    {
      id: "pers-2",
      title: "BookMyShow Clone",
      subtitle: "Movie Ticket Booking Mock App",
      company: "Mock Enterprise Application",
      badge: "Personal Project",
      role: "Frontend Developer",
      description:
        "Built a high-fidelity replica of BookMyShow featuring authenticated login with JWT and RBAC. Developed an interactive visual seating layout with color-coded seat states (available, selected, booked) and an administrative portal to manage movies, theaters, screens, and showtimes.",
      highlights: [
        "Dynamic visual theater seat layout & interactive selection",
        "Secure role-based access for Admin vs Customer roles",
        "Stateful mock checkout and booking confirmation flow",
      ],
      tags: ["Svelte", "JavaScript", "Tailwind CSS", "JWT", "RBAC", "Mock APIs"],
      githubUrl: "https://github.com/thatchinamoorthi123",
    },
    {
      id: "pers-3",
      title: "To-Do Management Platform",
      subtitle: "Productivity & Task Tracker App",
      company: "Full-Stack Project",
      badge: "Personal Project",
      role: "Full-Stack Developer",
      description:
        "Full-stack task and productivity tracker built with a Java Spring Boot backend and responsive frontend. Implements CRUD operations, category filtering, priority markers, and persistent relational storage with PostgreSQL.",
      highlights: [
        "Spring Boot REST API with PostgreSQL integration",
        "Real-time task filtering, search, and status tracking",
        "Clean responsive UI with modular component hierarchy",
      ],
      tags: ["Java", "Spring Boot", "PostgreSQL", "React", "REST APIs", "Tailwind CSS"],
      githubUrl: "https://github.com/thatchinamoorthi123",
    },
  ];

  const renderCard = (project) => {
    const isProfessional = project.badge === "Office Project";

    return (
      <motion.div
        key={project.id}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        whileHover={{
          y: -8,
          boxShadow: "0 20px 40px rgba(11,11,11,0.22)",
        }}
        className="
          group
          bg-[#D7D7D7]
          rounded-3xl
          overflow-hidden
          border
          border-[#b5b5b5]
          shadow-lg
          flex
          flex-col
          transition-all
          duration-300
          relative
          cursor-default
        "
      >
        {/* Top Running Light Beam */}
        <div className="relative h-[2px] w-full overflow-hidden bg-white/10 z-20 pointer-events-none">
          <motion.div
            animate={{ x: ["-100%", "200%"] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear",
            }}
            className="h-full w-1/3 bg-gradient-to-r from-transparent via-[#82b7ef] to-transparent pointer-events-none"
          />
        </div>

        {/* Top Header Banner */}
        <div className="h-44 bg-[#0B0B0B] p-5 flex flex-col justify-between relative overflow-hidden cursor-default select-none">
          {/* Running Shimmer Background */}
          <motion.div
            animate={{ x: ["-120%", "260%"] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-0 left-0 h-full w-36 bg-gradient-to-r from-transparent via-white/[0.07] to-transparent skew-x-12 pointer-events-none"
          />

          {/* Subtle watermark in background */}
          <div className="absolute -right-3 -bottom-3 text-white/[0.06] font-black text-5xl select-none pointer-events-none">
            {isProfessional ? "OFFICE" : "PERSONAL"}
          </div>

          {/* Top meta tags & Spinning Orbit Dot */}
          <div className="flex items-center justify-between z-10 cursor-default select-none">
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-white/10 text-[#c4c4c4] border border-white/10 backdrop-blur-sm cursor-default select-none">
                {project.badge}
              </span>
            </div>

            <div className="flex items-center gap-2.5">
              <span className="text-[11px] font-mono text-[#82b7ef] cursor-default select-none">
                {project.role}
              </span>

              {/* Spinning Orbit Ring with Running Dot */}
              <div className="relative w-6 h-6 flex items-center justify-center pointer-events-none">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute inset-0 rounded-full border border-white/20 border-dashed"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-[#82b7ef] absolute -top-0.5 left-1/2 -translate-x-1/2 shadow-[0_0_6px_#82b7ef]" />
                </motion.div>

                {/* Pulsing Running Core Dot */}
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
                </span>
              </div>
            </div>
          </div>

          {/* Title & Subtitle */}
          <div className="z-10 cursor-default">
            <h3 className="text-lg md:text-xl font-bold text-white leading-tight cursor-default">
              {project.title}
            </h3>
            <p className="text-xs text-[#82b7ef] mt-1 font-medium cursor-default">
              {project.subtitle}
            </p>
          </div>
        </div>

        {/* Card Body */}
        <div className="p-5 md:p-6 flex flex-col justify-between flex-1 cursor-default">
          <div>
            <p className="text-xs md:text-sm text-gray-700 leading-relaxed mb-4 cursor-text selection:bg-[#0b0b0b]/15">
              {project.description}
            </p>

            {/* Highlights */}
            <div className="space-y-1.5 mb-5 cursor-text selection:bg-[#0b0b0b]/15">
              {project.highlights.map((item, i) => (
                <div key={i} className="flex items-center text-xs text-[#333]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0B0B0B] mr-2 shrink-0 pointer-events-none" />
                  <span className="font-medium cursor-text">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech tags & Footer action */}
          <div>
            <div className="flex flex-wrap gap-1.5 mb-5 pt-3 border-t border-[#c0c0c0] cursor-default select-none">
              {project.tags.map((tag, i) => (
                <span
                  key={i}
                  className="text-[11px] px-2 py-0.5 rounded-lg bg-white/70 text-[#222] font-medium border border-black/10 cursor-default select-none"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex items-center justify-between pt-1">
              <span className="text-xs font-semibold text-[#555] cursor-default select-none">
                {project.company}
              </span>

              {project.githubUrl ? (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-[#0B0B0B] text-white px-4 py-1.5 rounded-xl text-xs font-semibold hover:scale-105 transition-all cursor-pointer"
                >
                  View Code →
                </a>
              ) : (
                <span className="bg-[#0B0B0B] text-[#c4c4c4] px-4 py-1.5 rounded-xl text-xs font-semibold cursor-default select-none">
                  Office Production
                </span>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    );
  };

  return (
    <div className="w-full relative cursor-default">
      {/* Ambient Spinning Orbit Rings & Running Dots in Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Orbit Ring 1 with Spinning Dot */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute -top-12 -left-20 w-[380px] h-[380px] rounded-full border border-black/10 pointer-events-none"
        >
          <div className="w-2.5 h-2.5 rounded-full bg-[#0B0B0B] absolute -top-1.5 left-1/2 -translate-x-1/2 shadow-sm" />
          <div className="w-1.5 h-1.5 rounded-full bg-[#82b7ef] absolute -bottom-1 left-1/3" />
        </motion.div>

        {/* Orbit Ring 2 with Opposite Spinning Dot */}
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-16 -right-20 w-[450px] h-[450px] rounded-full border border-black/10 pointer-events-none"
        >
          <div className="w-3 h-3 rounded-full bg-[#0B0B0B] absolute top-1/4 -right-1.5 shadow-sm" />
          <div className="w-2 h-2 rounded-full bg-[#82b7ef] absolute bottom-1/4 -left-1" />
        </motion.div>
      </div>

      {/* Two-Part Tab Toggle */}
      <div className="flex justify-center mb-10 px-4 relative z-10">
        <div className="inline-flex p-1.5 rounded-2xl bg-[#D7D7D7] border border-[#b5b5b5] shadow-sm cursor-default select-none">
          <button
            onClick={() => setActiveTab("all")}
            className={`
              px-4
              md:px-5
              py-2
              rounded-xl
              text-xs
              md:text-sm
              font-bold
              transition-all
              duration-300
              cursor-pointer
              select-none
              ${
                activeTab === "all"
                  ? "bg-[#0B0B0B] text-white shadow"
                  : "text-[#333] hover:text-[#0B0B0B]"
              }
            `}
          >
            All Projects (7)
          </button>

          <button
            onClick={() => setActiveTab("professional")}
            className={`
              px-4
              md:px-5
              py-2
              rounded-xl
              text-xs
              md:text-sm
              font-bold
              transition-all
              duration-300
              cursor-pointer
              select-none
              ${
                activeTab === "professional"
                  ? "bg-[#0B0B0B] text-white shadow"
                  : "text-[#333] hover:text-[#0B0B0B]"
              }
            `}
          >
            Professional Projects (Office) (4)
          </button>

          <button
            onClick={() => setActiveTab("personal")}
            className={`
              px-4
              md:px-5
              py-2
              rounded-xl
              text-xs
              md:text-sm
              font-bold
              transition-all
              duration-300
              cursor-pointer
              select-none
              ${
                activeTab === "personal"
                  ? "bg-[#0B0B0B] text-white shadow"
                  : "text-[#333] hover:text-[#0B0B0B]"
              }
            `}
          >
            Personal Projects (3)
          </button>
        </div>
      </div>

      {/* Grid Display */}
      <div className="container mx-auto px-4 lg:px-8 space-y-12 relative z-10 cursor-default">
        {/* PART 1: PROFESSIONAL OFFICE PROJECTS */}
        {(activeTab === "all" || activeTab === "professional") && (
          <div>
            <div className="mb-6 pb-2 border-b border-[#b5b5b5] flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 cursor-default select-none">
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-[#0B0B0B] cursor-default">
                  Professional Projects (Office Work)
                </h3>
                <p className="text-xs text-[#555] mt-0.5 cursor-default">
                  Production enterprise applications delivered in-office at Slusby Technologies (Crayonte)
                </p>
              </div>
              <span className="text-xs font-semibold text-[#555] cursor-default select-none">
                4 Production Applications
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {professionalProjects.map((project) => renderCard(project))}
            </div>
          </div>
        )}

        {/* PART 2: PERSONAL FULL-STACK PROJECTS */}
        {(activeTab === "all" || activeTab === "personal") && (
          <div>
            <div className="mb-6 pb-2 border-b border-[#b5b5b5] flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 cursor-default select-none">
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-[#0B0B0B] cursor-default">
                  Personal Projects (Full-Stack & Mock)
                </h3>
                <p className="text-xs text-[#555] mt-0.5 cursor-default">
                  Self-initiated full-stack systems and mock applications demonstrating end-to-end architectures
                </p>
              </div>
              <span className="text-xs font-semibold text-[#555] cursor-default select-none">
                3 Applications
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {personalProjects.map((project) => renderCard(project))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;
