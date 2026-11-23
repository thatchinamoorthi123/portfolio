import React from "react";

import { Herosection } from "./component/Herosection";
import { Skillsction } from "./component/Skillsction";
import { Navbar } from "./Navbar";
import { motion } from "framer-motion";
import Aboutme from "./component/Aboutme";
import Contactme from "./component/Contactme";
import { SkillsMarquee } from "./component/SkillsMarquee";
import Projects from "./component/Projects";
import CursorParticles from "./component/CursorParticles";

import reactIcon from "./assets/react.svg";
import jsIcon from "./assets/js.svg";
import htmlIcon from "./assets/HTML.svg";
import svelteIcon from "./assets/svelte.svg";
import tsIcon from "./assets/ts.svg";

import cssIcon from "./assets/css.svg";
import tailwindIcon from "./assets/tailwind.svg";
import sassIcon from "./assets/sass.svg";
import bootstrapIcon from "./assets/bootstarp.svg";

import javaIcon from "./assets/java.svg";
import pythonIcon from "./assets/python.svg";
import sqlIcon from "./assets/sql.svg";

import nodeIcon from "./assets/node.svg";
import postgresIcon from "./assets/postgress.svg";
import jsonIcon from "./assets/json.svg";

import gitIcon from "./assets/git.svg";
import githubIcon from "./assets/github-bg.svg";
import postmanIcon from "./assets/postman.svg";
import figmaIcon from "./assets/figma.svg";

export const App = () => {
  const array = [
    "React.js",
    "Svelte",
    "SvelteKit",
    "Java",
    "Spring Boot",
    "PostgreSQL",
    "JavaScript (ES6+)",
    "TypeScript",
    "Tailwind CSS",
    "Next.js",
    "Server-Side Rendering (SSR)",
    "SEO Optimization",
    "Redux Toolkit",
    "REST APIs",
    "JWT Authentication",
    "Role-Based Access Control (RBAC)",
    "Hibernate",
    "Spring Data JPA",
    "Git & GitHub",
    "Postman",
    "Figma",
    "Agile Development",
    "Node.js",
  ];

  const skills = [
    {
      name: "Frontend Development",
      names: "React.js, Svelte, SvelteKit, Next.js, JavaScript (ES6+), TypeScript, HTML5",
      icons: [reactIcon, svelteIcon, jsIcon, tsIcon, htmlIcon],
      description:
        "Building modern, responsive, and high-performance user interfaces and SSR web applications using React, SvelteKit, and standard web technologies.",
    },

    {
      name: "UI Styling & Design",
      names: "Tailwind CSS, CSS3, Responsive Design, Sass, Figma, Bootstrap",
      icons: [tailwindIcon, cssIcon, sassIcon, bootstrapIcon, figmaIcon],
      description:
        "Translating Figma design systems into pixel-perfect responsive layouts with 95%+ accuracy, custom animations, and reusable component libraries.",
    },

    {
      name: "Backend & Server-Side",
      names: "Java, Spring Boot, Node.js, REST APIs, Axios, Fetch API",
      icons: [javaIcon, nodeIcon, postmanIcon],
      description:
        "Architecting clean RESTful services, handling business workflows, implementing authentication endpoints, and integrating frontends with backend APIs.",
    },

    {
      name: "Database & State Management",
      names: "PostgreSQL, SQL, JSON, Redux, Redux Toolkit, Svelte Stores, LocalStorage",
      icons: [postgresIcon, sqlIcon, jsonIcon],
      description:
        "Relational database modeling with PostgreSQL, entity relationships, query execution, and predictable client state management via Redux Toolkit and Svelte Stores.",
    },

    {
      name: "SSR & Modern Web Architecture",
      badge: [
        "Server-Side Rendering (SSR)",
        "SvelteKit SSR",
        "SEO (+35% Boost)",
        "Dynamic Updates",
        "Zero-Downtime APIs",
        "Cross-Page Reusability",
      ],
      description:
        "Solo developer who implemented Server-Side Rendering (SSR) and Search Engine Optimization (SEO) in the organization, elevating search visibility by 35%.",
    },

    {
      name: "Tools, Security & Architecture",
      badge: [
        "JWT Authentication",
        "Role-Based Access (RBAC)",
        "Spring Data JPA",
        "Hibernate",
        "Git & CI/CD",
        "Agile Development",
        "Dev Servers (RDC)",
        "100+ Bug Fixes",
      ],
      description:
        "Enterprise-grade security using JWT & granular RBAC permissions, robust data persistence with Hibernate and JPA, and collaborative Agile CI/CD workflows.",
    },
  ];

  return (
    <div className="relative min-h-screen bg-[#D7D7D7] cursor-default">
      {/* Interactive Cursor Particle Animation */}
      <CursorParticles />

      {/* Navbar */}
      <div className="lg:block hidden fixed top-0 right-0 w-[55%] z-[999]">
        <Navbar />
      </div>

      {/* Hero */}
      <section id="home">
        <Herosection />
      </section>

      {/* Skills */}
      <section id="skills">
        <SkillsMarquee array={array} />
        <Skillsction skills={skills} />
      </section>

      {/* Projects */}
      <section
        id="projects"
        className="min-h-screen bg-[#C4C4C4] py-16 md:py-24 overflow-hidden relative cursor-default"
      >
        {/* Subtle Background Watermark */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden select-none">
          <span className="text-[5rem] md:text-[10rem] font-black text-[#0b0b0b]/5 select-none whitespace-nowrap">
            PROJECTS
          </span>
        </div>

        <div className="container mx-auto px-4 mb-10 text-center relative z-10 cursor-default select-none">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl md:text-5xl font-black text-[#0B0B0B] tracking-tight cursor-default select-none">
              Projects
            </h2>
            <span className="block text-xs md:text-sm font-medium text-[#4b4b4b] mt-2 cursor-default select-none">
              See What I Developed
            </span>
          </motion.div>
        </div>

        <div className="relative z-10">
          <Projects />
        </div>
      </section>

      {/* About */}
      <section id="about">
        <Aboutme />
      </section>

      {/* Contact */}
      <section id="contact">
        <Contactme />
      </section>
    </div>
  );
};
