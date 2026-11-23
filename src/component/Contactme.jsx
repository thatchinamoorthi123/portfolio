import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, ArrowRight, MapPin, Globe } from "lucide-react";
import self from "../assets/self2.png";
import github from "../assets/github.svg";
import linkedin from "../assets/linkedin.svg";

export default function ContactMe() {
  return (
    <section className="relative min-h-screen bg-[#c4c4c4] overflow-hidden px-5 md:px-6 py-16 md:py-24 cursor-default">
      {/* Background Blur */}
      <div className="absolute top-0 left-0 w-60 md:w-80 h-60 md:h-80 bg-white/30 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-60 md:w-80 h-60 md:h-80 bg-black/5 blur-[100px] rounded-full pointer-events-none" />

      {/* Background Text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <h1
          className="
          text-[4rem]
          sm:text-[6rem]
          md:text-[10rem]
          lg:text-[12rem]
          font-black
          text-black/5
          select-none
          whitespace-nowrap
        "
        >
          CONTACT
        </h1>
      </div>

      <div className="max-w-7xl mx-auto relative z-10 cursor-default">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16 cursor-default"
        >
          <h2
            className="
            text-4xl
            sm:text-5xl
            md:text-6xl
            font-black
            bg-gradient-to-r
            from-[#0b0b0b]
            to-[#666]
            bg-clip-text
            text-transparent
            cursor-default
            select-none
          "
          >
            Contact Me
          </h2>

          <p className="text-[#4b4b4b] mt-3 text-sm sm:text-base md:text-lg cursor-text selection:bg-[#0b0b0b]/15">
            Let's build something exceptional together. Available for immediate joining.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-10 items-center">
          {/* LEFT SIDE: AVATAR & RINGS */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex justify-center order-1 cursor-default select-none"
          >
            <div className="relative">
              {/* Rotating Rings */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  duration: 25,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute inset-[-15px] rounded-full border border-black/20 pointer-events-none"
              />

              <motion.div
                animate={{ rotate: -360 }}
                transition={{
                  duration: 35,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute inset-[-30px] rounded-full border border-black/10 pointer-events-none"
              />

              {/* Image */}
              <div
                className="
                w-52 h-52
                sm:w-64 sm:h-64
                md:w-[280px] md:h-[280px]
                rounded-full
                overflow-hidden
                border-4
                border-[#0b0b0b]
                shadow-2xl
                cursor-default
                select-none
              "
              >
                <img
                  src={self}
                  alt="Thatchinamoorthi - Frontend & Java Full Stack Developer"
                  className="w-full h-full object-cover pointer-events-none"
                />
              </div>
            </div>
          </motion.div>

          {/* RIGHT SIDE: CONTACT DETAILS */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4 order-2 cursor-default"
          >
            {/* Status Badges */}
            <div className="flex flex-wrap items-center gap-2 cursor-default select-none">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0b0b0b] text-[#c4c4c4] text-xs sm:text-sm font-medium cursor-default select-none">
                <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                Immediate Joiner
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-black/30 bg-black/5 text-[#222] text-xs font-semibold cursor-default select-none">
                Open to Relocation
              </div>
            </div>

            {/* Intro */}
            <div>
              <h3
                className="
                text-3xl
                sm:text-4xl
                lg:text-5xl
                font-black
                text-[#0b0b0b]
                leading-tight
                cursor-default
              "
              >
                Let's Discuss
                <br />
                Your Next Project
              </h3>

              <p className="text-[#4b4b4b] mt-3 text-sm sm:text-base leading-relaxed cursor-text selection:bg-[#0b0b0b]/15">
                Looking for a dedicated Frontend Developer & Java Full Stack Engineer with proven production experience in React, SvelteKit, Spring Boot, and PostgreSQL. Let's connect!
              </p>
            </div>

            {/* EMAIL */}
            <a
              href="mailto:thatchinamoorthi578@gmail.com"
              className="group flex items-center gap-4 p-4 rounded-2xl bg-white/40 backdrop-blur-md border border-black/10 hover:border-black hover:-translate-y-1 transition-all shadow-sm cursor-pointer"
            >
              <Mail size={22} className="text-[#0b0b0b] shrink-0 pointer-events-none" />

              <div className="flex-1 min-w-0">
                <p className="text-xs text-[#555] font-semibold uppercase tracking-wider cursor-pointer">
                  Email
                </p>
                <p className="font-bold text-[#0b0b0b] text-sm break-all cursor-pointer">
                  thatchinamoorthi578@gmail.com
                </p>
              </div>

              <ArrowRight className="group-hover:translate-x-2 transition text-[#0b0b0b] shrink-0 pointer-events-none" />
            </a>

            {/* PHONE */}
            <a
              href="tel:+919789271517"
              className="group flex items-center gap-4 p-4 rounded-2xl bg-white/40 backdrop-blur-md border border-black/10 hover:border-black hover:-translate-y-1 transition-all shadow-sm cursor-pointer"
            >
              <Phone size={22} className="text-[#0b0b0b] shrink-0 pointer-events-none" />

              <div className="flex-1">
                <p className="text-xs text-[#555] font-semibold uppercase tracking-wider cursor-pointer">
                  Phone
                </p>
                <p className="font-bold text-[#0b0b0b] text-sm cursor-pointer">
                  +91 97892 71517
                </p>
              </div>

              <ArrowRight className="group-hover:translate-x-2 transition text-[#0b0b0b] shrink-0 pointer-events-none" />
            </a>

            {/* LOCATION */}
            <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/40 backdrop-blur-md border border-black/10 shadow-sm cursor-default">
              <MapPin size={22} className="text-[#0b0b0b] shrink-0 pointer-events-none" />

              <div className="flex-1">
                <p className="text-xs text-[#555] font-semibold uppercase tracking-wider cursor-default select-none">
                  Location
                </p>
                <p className="font-bold text-[#0b0b0b] text-sm cursor-text selection:bg-[#0b0b0b]/15">
                  Chennai, Tamil Nadu, India
                </p>
              </div>

              <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-black/10 text-[#0b0b0b] cursor-default select-none">
                Open to Relocate
              </span>
            </div>

            {/* SOCIALS & PORTFOLIO */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="https://linkedin.com/in/thatchinamoorthi"
                target="_blank"
                rel="noreferrer"
                title="LinkedIn Profile"
                className="flex items-center gap-2 bg-white/50 px-4 py-3 rounded-2xl hover:-translate-y-1 transition shadow-md border border-black/5 cursor-pointer"
              >
                <img src={linkedin} alt="LinkedIn" className="w-5 h-5 pointer-events-none" />
                <span className="text-xs font-bold text-[#0b0b0b] cursor-pointer">LinkedIn</span>
              </a>

              <a
                href="https://github.com/thatchinamoorthi123"
                target="_blank"
                rel="noreferrer"
                title="GitHub Profile"
                className="flex items-center gap-2 bg-white/50 px-4 py-3 rounded-2xl hover:-translate-y-1 transition shadow-md border border-black/5 cursor-pointer"
              >
                <img src={github} alt="GitHub" className="w-5 h-5 pointer-events-none" />
                <span className="text-xs font-bold text-[#0b0b0b] cursor-pointer">GitHub</span>
              </a>

              <a
                href="https://thatchinamoorthi123.github.io/portfolio"
                target="_blank"
                rel="noreferrer"
                title="Online Portfolio"
                className="flex items-center gap-2 bg-white/50 px-4 py-3 rounded-2xl hover:-translate-y-1 transition shadow-md border border-black/5 cursor-pointer"
              >
                <Globe size={18} className="text-[#0b0b0b] pointer-events-none" />
                <span className="text-xs font-bold text-[#0b0b0b] cursor-pointer">Portfolio</span>
              </a>
            </div>

            {/* CTA */}
            <motion.a
              whileHover={{
                scale: 1.03,
                boxShadow: "0 0 25px rgba(0,0,0,0.25)",
              }}
              whileTap={{ scale: 0.97 }}
              href="mailto:thatchinamoorthi578@gmail.com"
              className="
              inline-flex
              w-full
              justify-center
              items-center
              gap-3
              px-8
              py-4
              rounded-full
              bg-[#0b0b0b]
              text-[#c4c4c4]
              font-bold
              text-base
              mt-2
              cursor-pointer
            "
            >
              Send Me An Email
              <ArrowRight size={18} className="pointer-events-none" />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
