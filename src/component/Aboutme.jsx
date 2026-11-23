import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Briefcase,
  GraduationCap,
  Calendar,
  MapPin,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

export default function AboutMe() {
  const [activeTab, setActiveTab] = useState("experience");

  const experiences = [
    {
      role: "Frontend Developer",
      company: "Slusby Technologies Pvt Ltd (Crayonte)",
      location: "Dindigul, Tamil Nadu",
      period: "July 2025 – Oct 2026",
      type: "Full-time",
      points: [
        "Maintained 20+ production screens and engineered 3 core modules with Role-Based Access Control (RBAC) for a task tracker and ticketing platform.",
        "Owned the migration of the product website to SvelteKit with Server-Side Rendering (SSR), lifting search engine visibility and raising SEO rankings by 35%.",
        "Launched the official company website with reusable cross-page components, cutting development time by 50%.",
        "Led rebranding and refactoring of Crayonte Orchestrator, independently self-onboarding onto a legacy application and engineering a custom SQL editor.",
        "Fixed 100+ application bugs, optimized frontend rendering speed, and connected client interfaces to high-performance backend services.",
      ],
    },
    {
      role: "Project Trainee",
      company: "Slusby Technologies Pvt Ltd (Crayonte)",
      location: "Dindigul, Tamil Nadu",
      period: "Jan 2025 – Jun 2025",
      type: "Internship / Trainee",
      points: [
        "Developed mock and enterprise applications in Svelte and JavaScript, gaining hands-on frontend expertise.",
        "Completed a BookMyShow replica mock application (Svelte, JavaScript, Tailwind CSS, RBAC, JWT authentication) and 4+ small mock applications.",
        "Collaborated closely with agile engineering teammates to deliver client applications with a 100% success rate.",
        "Promoted to Frontend Developer for consistent feature delivery, rapid onboarding, and strong problem-solving skills.",
      ],
    },
  ];

  const education = [
    {
      degree: "Master of Computer Applications (MCA)",
      institution: "Gandhigram Rural Institute (Deemed University)",
      period: "Jun 2022 – May 2024",
      description:
        "Specialized in Advanced Web Technologies, Software Engineering, Database Management Systems, and Object-Oriented Programming.",
    },
    {
      degree: "Bachelor of Computer Applications (BCA)",
      institution: "Parvathy's Arts and Science College",
      period: "Sep 2019 – May 2022",
      description:
        "Core foundational studies in Computer Science, Data Structures, Algorithms, Java, Web Development, and Relational Databases.",
    },
  ];

  const keyAchievements = [
    {
      title: "Solo SSR & SEO Pioneer",
      desc: "Implemented Server-Side Rendering (SSR) and Search Engine Optimization (SEO) for the first time in the organization as a solo developer.",
    },
    {
      title: "SvelteKit Migration",
      desc: "Migrated the company website to SvelteKit as a solo developer, enabling dynamic content and image updates without manual rebuilds.",
    },
    {
      title: "50% Dev Time Reduction",
      desc: "Delivered and supported 20+ production screens and 15+ reusable components across platforms, halving development time.",
    },
    {
      title: "Workflow Repository Ownership",
      desc: "Managed the Workflow Repository application end-to-end as the sole frontend developer.",
    },
  ];

  return (
    <section className="min-h-screen bg-[#c4c4c4] py-16 md:py-24 px-4 overflow-hidden relative cursor-default">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-14 cursor-default select-none">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl md:text-5xl font-black text-[#0b0b0b] tracking-tight cursor-default">
              About Me
            </h2>
            <span className="block text-xs md:text-sm font-medium text-[#4b4b4b] mt-2 cursor-default select-none">
              Frontend Specialist & Java Full Stack Developer • 1 Year 10 Months Experience
            </span>
          </motion.div>
        </div>

        {/* ================= DESKTOP INTERACTIVE CIRCLES ================= */}
        <div className="w-full hidden lg:block mb-20 cursor-default">
          <div className="relative h-[850px] rounded-[40px] bg-[#040812] overflow-hidden border border-cyan-500/20 shadow-2xl">
            {/* Background Effects */}
            <div className="absolute left-1/2 top-1/2 w-[700px] h-[700px] bg-cyan-500/10 blur-[180px] rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
            <div className="absolute left-20 top-40 w-[300px] h-[300px] bg-orange-500/10 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute right-20 bottom-40 w-[300px] h-[300px] bg-purple-500/10 blur-[120px] rounded-full pointer-events-none" />

            {/* CIRCUIT LINES */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none"
              viewBox="0 0 1600 900"
              preserveAspectRatio="none"
            >
              <defs>
                <linearGradient id="pipeGlow">
                  <stop offset="0%" stopColor="#22d3ee" />
                  <stop offset="100%" stopColor="#60a5fa" />
                </linearGradient>

                <filter id="glow">
                  <feGaussianBlur stdDeviation="4" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              <path
                d="M 420 450 H 650"
                stroke="url(#pipeGlow)"
                strokeWidth="8"
                fill="none"
                filter="url(#glow)"
              />
              <path
                d="M 950 450 H 1180"
                stroke="url(#pipeGlow)"
                strokeWidth="8"
                fill="none"
                filter="url(#glow)"
              />
              <path
                d="M650 450 V180 H950 V450"
                stroke="url(#pipeGlow)"
                strokeWidth="6"
                fill="none"
                filter="url(#glow)"
              />
              <circle cx="650" cy="450" r="8" fill="#22d3ee" />
              <circle cx="950" cy="450" r="8" fill="#22d3ee" />
              <circle cx="800" cy="180" r="8" fill="#22d3ee" />
            </svg>

            {/* LEFT CIRCLE: ENTERPRISE EXPERIENCE */}
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="absolute left-10 top-1/2 -translate-y-1/2 cursor-default"
            >
              <div className="relative w-[380px] h-[380px] rounded-full border-[4px] border-orange-400 bg-black/60 backdrop-blur-xl shadow-[0_0_80px_rgba(251,146,60,0.4)]">
                <div className="absolute inset-4 rounded-full border border-orange-300/40 pointer-events-none" />
                <div className="absolute inset-8 rounded-full border border-orange-300/20 pointer-events-none" />

                <div className="h-full flex items-center justify-center text-center px-8">
                  <div>
                    <h2 className="text-2xl font-bold text-orange-300 mb-4 cursor-default select-none">
                      Enterprise Production
                    </h2>
                    <p className="text-gray-300 leading-relaxed text-sm cursor-text selection:bg-orange-500/30">
                      1 Year 10 Months delivering in Agile teams at Slusby Technologies. Built 20+ production screens, 3 core modules with RBAC, engineered custom SQL editors, and resolved 100+ application bugs.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* CENTER CIRCLE: DEVELOPER HIGHLIGHT */}
            <motion.div
              initial={{ opacity: 0, scale: 0.7 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 cursor-default"
            >
              <div className="relative w-[520px] h-[520px] rounded-full border-[6px] border-cyan-400 bg-[#07101f] shadow-[0_0_120px_rgba(34,211,238,0.7)]">
                <div className="absolute inset-4 rounded-full border border-cyan-400/50 animate-pulse pointer-events-none" />
                <div className="absolute inset-8 rounded-full border border-cyan-400/20 pointer-events-none" />
                <div className="absolute inset-12 rounded-full border border-cyan-400/10 pointer-events-none" />

                <div className="h-full flex items-center justify-center text-center px-12">
                  <div>
                    <h2 className="text-5xl font-black text-cyan-300 leading-tight cursor-default select-none">
                      FRONTEND &
                      <br />
                      FULL STACK
                    </h2>

                    <div className="mt-4 text-cyan-100 font-bold text-lg tracking-wider cursor-default select-none">
                      1 YEAR 10 MONTHS EXP
                    </div>

                    <div className="w-48 h-[2px] bg-cyan-400 mx-auto my-5 pointer-events-none" />

                    <p className="text-gray-300 leading-7 text-sm cursor-text selection:bg-cyan-500/30">
                      Specializing in React, Svelte, SvelteKit, and Tailwind CSS on the frontend, with robust full-stack capabilities in Java, Spring Boot, REST APIs, and PostgreSQL. Solo developer who pioneered SSR & SEO in the organization.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* RIGHT CIRCLE: FULL-STACK & SSR */}
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="absolute right-10 top-1/2 -translate-y-1/2 cursor-default"
            >
              <div className="relative w-[380px] h-[380px] rounded-full border-[4px] border-purple-400 bg-black/60 backdrop-blur-xl shadow-[0_0_80px_rgba(168,85,247,0.4)]">
                <div className="absolute inset-4 rounded-full border border-purple-300/40 pointer-events-none" />
                <div className="absolute inset-8 rounded-full border border-purple-300/20 pointer-events-none" />

                <div className="h-full flex items-center justify-center text-center px-8">
                  <div>
                    <h2 className="text-2xl font-bold text-purple-300 mb-4 cursor-default select-none">
                      SSR & Full-Stack Tech
                    </h2>
                    <p className="text-gray-300 leading-relaxed text-sm cursor-text selection:bg-purple-500/30">
                      Rebuilt product websites with SvelteKit SSR, lifting SEO by 35%. Architected personal full-stack applications like ShopEase (Spring Boot + React + PostgreSQL) with JWT auth and Redux Toolkit.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* ================= MOBILE CIRCLES REPLACEMENT ================= */}
        <div className="lg:hidden space-y-5 mb-16 cursor-default">
          <div className="rounded-3xl border-2 border-cyan-400 bg-[#07101f] p-6 text-center cursor-default">
            <h3 className="text-2xl font-black text-cyan-300 cursor-default select-none">
              FRONTEND & FULL STACK
            </h3>
            <p className="text-cyan-100 mt-1 font-semibold text-xs cursor-default select-none">
              1 Year 10 Months Experience
            </p>
            <div className="w-16 h-[2px] bg-cyan-400 mx-auto my-3 pointer-events-none" />
            <p className="text-gray-300 leading-relaxed text-xs cursor-text">
              Frontend specialist in React, SvelteKit, and Tailwind CSS with full-stack proficiencies in Java, Spring Boot, and PostgreSQL. Solo SSR pioneer delivering production results.
            </p>
          </div>

          <div className="rounded-3xl border-2 border-orange-400 bg-black/80 p-6 text-center cursor-default">
            <h3 className="text-xl font-bold text-orange-300 mb-2 cursor-default select-none">
              Enterprise Production
            </h3>
            <p className="text-gray-300 leading-relaxed text-xs cursor-text">
              Slusby Technologies (Crayonte): Maintained 20+ production screens, built 3 RBAC modules, created custom SQL editor, and resolved 100+ application bugs.
            </p>
          </div>

          <div className="rounded-3xl border-2 border-purple-400 bg-black/80 p-6 text-center cursor-default">
            <h3 className="text-xl font-bold text-purple-300 mb-2 cursor-default select-none">
              Full-Stack & SSR Tech
            </h3>
            <p className="text-gray-300 leading-relaxed text-xs cursor-text">
              SvelteKit SSR migration raising SEO by 35% without rebuild downtime, paired with robust full-stack Java Spring Boot & PostgreSQL projects.
            </p>
          </div>
        </div>

        {/* ================= KEY ACHIEVEMENTS ================= */}
        <div className="mb-16 cursor-default">
          <div className="text-center mb-8 cursor-default select-none">
            <h3 className="text-2xl md:text-3xl font-black text-[#0b0b0b] cursor-default">
              Key Career Achievements
            </h3>
            <p className="text-xs md:text-sm text-[#4b4b4b] mt-1 cursor-default select-none">
              Milestones delivered as an engineer at Slusby Technologies
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {keyAchievements.map((item, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -6, scale: 1.01 }}
                transition={{ duration: 0.3 }}
                className="
                  bg-[#D7D7D7]
                  rounded-3xl
                  p-6
                  border
                  border-[#b5b5b5]
                  shadow-lg
                  hover:shadow-[0_0_35px_rgba(11,11,11,0.18)]
                  transition-all
                  duration-300
                  flex
                  flex-col
                  justify-between
                  cursor-default
                "
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#0b0b0b] text-[#c4c4c4] flex items-center justify-center mb-4 shadow-sm pointer-events-none select-none">
                    <Sparkles className="w-5 h-5 text-[#82b7ef]" />
                  </div>
                  <h4 className="text-base md:text-lg font-bold text-[#0b0b0b] mb-2 leading-tight cursor-default">
                    {item.title}
                  </h4>
                  <p className="text-xs md:text-sm text-gray-700 leading-relaxed cursor-text selection:bg-[#0b0b0b]/15">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ================= WORK EXPERIENCE & EDUCATION ================= */}
        <div className="bg-[#D7D7D7] rounded-3xl p-6 md:p-10 border border-[#b5b5b5] shadow-lg cursor-default">
          {/* Header & Switcher */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8 pb-4 border-b border-[#c0c0c0]">
            <div>
              <h3 className="text-2xl md:text-3xl font-black text-[#0b0b0b] text-center sm:text-left cursor-default">
                Work Experience & Education
              </h3>
              <p className="text-xs md:text-sm text-[#4b4b4b] mt-1 text-center sm:text-left cursor-default select-none">
                Professional history, agile teamwork, and academic background
              </p>
            </div>

            <div className="flex p-1.5 rounded-2xl bg-[#c4c4c4] border border-[#b5b5b5] shadow-sm cursor-default select-none">
              <button
                onClick={() => setActiveTab("experience")}
                className={`
                  flex
                  items-center
                  gap-2
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
                    activeTab === "experience"
                      ? "bg-[#0b0b0b] text-white shadow"
                      : "text-[#333] hover:text-[#0b0b0b]"
                  }
                `}
              >
                <Briefcase className="w-4 h-4 pointer-events-none" />
                Experience
              </button>

              <button
                onClick={() => setActiveTab("education")}
                className={`
                  flex
                  items-center
                  gap-2
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
                    activeTab === "education"
                      ? "bg-[#0b0b0b] text-white shadow"
                      : "text-[#333] hover:text-[#0b0b0b]"
                  }
                `}
              >
                <GraduationCap className="w-4 h-4 pointer-events-none" />
                Education
              </button>
            </div>
          </div>

          {/* TAB 1: EXPERIENCE */}
          {activeTab === "experience" && (
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.08 }}
                  className="bg-[#EAEAEA] border border-[#b5b5b5] rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-md transition-all cursor-default"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4 pb-3 border-b border-[#c8c8c8] cursor-default select-none">
                    <div>
                      <div className="flex items-center gap-2.5">
                        <h4 className="text-xl md:text-2xl font-bold text-[#0b0b0b] cursor-default">
                          {exp.role}
                        </h4>
                        <span className="text-xs px-2.5 py-0.5 rounded-full bg-[#0b0b0b] text-white font-semibold cursor-default select-none">
                          {exp.type}
                        </span>
                      </div>
                      <p className="text-sm font-semibold text-[#0b0b0b] mt-1 cursor-default">
                        {exp.company}
                      </p>
                    </div>

                    <div className="flex sm:flex-col sm:items-end text-xs text-[#555] gap-3 sm:gap-1 font-medium cursor-default select-none">
                      <span className="flex items-center gap-1.5 font-mono">
                        <Calendar className="w-3.5 h-3.5 text-[#0b0b0b] pointer-events-none" />
                        {exp.period}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-[#0b0b0b] pointer-events-none" />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  <div className="space-y-2 cursor-text selection:bg-[#0b0b0b]/15">
                    {exp.points.map((pt, i) => (
                      <div key={i} className="flex items-start text-xs md:text-sm text-gray-700 leading-relaxed">
                        <CheckCircle2 className="w-4 h-4 text-[#0b0b0b] shrink-0 mt-0.5 mr-2.5 pointer-events-none" />
                        <span className="cursor-text">{pt}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          )}

          {/* TAB 2: EDUCATION */}
          {activeTab === "education" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.08 }}
                  className="bg-[#EAEAEA] border border-[#b5b5b5] rounded-2xl p-6 md:p-8 flex flex-col justify-between shadow-sm hover:shadow-md transition-all cursor-default"
                >
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-[#0b0b0b] text-white flex items-center justify-center mb-4 shadow-sm pointer-events-none select-none">
                      <GraduationCap className="w-6 h-6 text-[#c4c4c4]" />
                    </div>

                    <h4 className="text-lg md:text-xl font-bold text-[#0b0b0b] mb-1 cursor-default">
                      {edu.degree}
                    </h4>
                    <p className="text-sm font-semibold text-[#333] mb-3 cursor-default">
                      {edu.institution}
                    </p>
                    <p className="text-xs md:text-sm text-gray-700 leading-relaxed cursor-text selection:bg-[#0b0b0b]/15">
                      {edu.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-[#c8c8c8] flex items-center justify-between text-xs font-mono text-[#555] cursor-default select-none">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-[#0b0b0b] pointer-events-none" />
                      {edu.period}
                    </span>
                    <span className="bg-[#0b0b0b] text-white text-xs px-2.5 py-0.5 rounded-full font-semibold cursor-default select-none">
                      Completed
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
