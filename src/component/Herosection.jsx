import React from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import email from "../assets/email.svg";
import self from "../assets/self2.png";
import github from "../assets/github.svg";
import linkedin from "../assets/linkedin.svg";

export const Herosection = () => {
  const firstName = "THATCHINAMOORTHI";

  // Opposite-side 3D tilt animation for the whole name
  const nameX = useMotionValue(0);
  const nameY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 260 };
  const tiltXSpring = useSpring(nameX, springConfig);
  const tiltYSpring = useSpring(nameY, springConfig);

  // Opposite tilt: cursor moving right (+X) tilts left forward and right away (-rotateY)
  // Cursor moving down (+Y) tilts bottom away and top forward (+rotateX)
  const rotateX = useTransform(tiltYSpring, [-0.5, 0.5], ["18deg", "-18deg"]);
  const rotateY = useTransform(tiltXSpring, [-0.5, 0.5], ["-18deg", "18deg"]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    nameX.set(xPct);
    nameY.set(yPct);
  };

  const handleMouseLeave = () => {
    nameX.set(0);
    nameY.set(0);
  };

  return (
    <>
      {/* ================= DESKTOP HERO ================= */}
      <section className="relative hidden sm:block w-full h-screen overflow-hidden bg-[#c4c4c4] cursor-default">
        {/* LEFT SIDE */}
        <div className="absolute left-0 top-0 w-1/2 h-full z-10">
          <div className="flex items-center h-full px-16">
            <div>
              <motion.p
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="text-xl font-medium text-[#4b4b4b] cursor-default select-none"
              >
                Hello, I'm
              </motion.p>

              {/* Animated Name with Opposite-Side Tilt */}
              <div
                className="mt-4 inline-block cursor-pointer"
                style={{ perspective: 1000 }}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
              >
                <motion.h1
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  style={{
                    rotateX,
                    rotateY,
                    transformStyle: "preserve-3d",
                  }}
                  className="
                    text-3xl
                    xl:text-5xl
                    font-black
                    text-[#0b0b0b]
                    cursor-pointer
                    select-none
                    nameshadow
                  "
                >
                  {firstName}
                </motion.h1>
              </div>

              {/* Typing Role */}
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "fit-content" }}
                transition={{ duration: 1.2 }}
                className="
                  overflow-hidden
                  whitespace-nowrap
                  border-r-2
                  border-[#0b0b0b]
                  mt-5
                  text-lg
                  font-bold
                  text-[#0b0b0b]
                  cursor-default
                  select-none
                "
              >
                Frontend Developer • Java Full Stack Developer
              </motion.div>

              {/* Status Badges */}
              <div className="flex flex-wrap items-center gap-2 mt-4 cursor-default select-none">
                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-[#0b0b0b] text-[#c4c4c4] cursor-default select-none">
                  Chennai, India
                </span>
                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-emerald-700 text-white cursor-default select-none">
                  Immediate Joiner
                </span>
                <span className="text-xs font-semibold px-3 py-1 rounded-full border border-[#0b0b0b] text-[#0b0b0b] cursor-default select-none">
                  Open to Relocation
                </span>
              </div>

              <div className="w-32 h-[3px] bg-[#0b0b0b] mt-6 mb-6" />

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="
                  max-w-xl
                  text-[#3e3e3e]
                  text-base
                  xl:text-lg
                  leading-7
                  xl:leading-8
                  cursor-text
                  selection:bg-[#0b0b0b]/20
                "
              >
                Building responsive web applications and Server-Side Rendering (SSR) websites with React, Svelte, and SvelteKit over 1 year 10 months in Agile teams. Experienced in building scalable full-stack applications with Java, Spring Boot, and PostgreSQL.
              </motion.p>

              {/* Buttons */}
              <div className="flex gap-5 mt-8">
                <motion.button
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 0 30px rgba(11,11,11,0.35)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    document
                      .getElementById("contact")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="
                    relative
                    overflow-hidden
                    px-10
                    py-4
                    rounded-full
                    bg-[#0b0b0b]
                    text-[#c4c4c4]
                    font-bold
                    cursor-pointer
                    group
                  "
                >
                  <span className="relative z-10 cursor-pointer">Hire Me</span>

                  <motion.div
                    animate={{
                      x: ["-100%", "250%"],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="
                      absolute
                      top-0
                      left-0
                      h-full
                      w-16
                      bg-white/20
                      skew-x-12
                      pointer-events-none
                    "
                  />
                </motion.button>

                <motion.button
                  onClick={() => {
                    document
                      .getElementById("projects")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                  whileHover={{
                    y: -5,
                    backgroundColor: "#0b0b0b",
                    color: "#c4c4c4",
                  }}
                  className="
                    px-10
                    py-4
                    rounded-full
                    border-2
                    border-[#0b0b0b]
                    font-bold
                    cursor-pointer
                    duration-300
                  "
                >
                  View Projects
                </motion.button>
              </div>

              {/* Socials */}
              <div className="flex gap-4 mt-8">
                <motion.a
                  whileHover={{ y: -8, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  href="mailto:thatchinamoorthi578@gmail.com"
                  title="thatchinamoorthi578@gmail.com"
                  className="bg-white p-3 rounded-xl shadow-lg cursor-pointer"
                >
                  <img src={email} alt="Email" className="w-6 h-6 pointer-events-none" />
                </motion.a>

                <motion.a
                  whileHover={{ y: -8, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  href="https://github.com/thatchinamoorthi123"
                  target="_blank"
                  rel="noreferrer"
                  title="GitHub"
                  className="bg-white p-3 rounded-xl shadow-lg cursor-pointer"
                >
                  <img src={github} alt="GitHub" className="w-6 h-6 pointer-events-none" />
                </motion.a>

                <motion.a
                  whileHover={{ y: -8, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  href="https://linkedin.com/in/thatchinamoorthi"
                  target="_blank"
                  rel="noreferrer"
                  title="LinkedIn"
                  className="bg-white p-3 rounded-xl shadow-lg cursor-pointer"
                >
                  <img src={linkedin} alt="LinkedIn" className="w-6 h-6 pointer-events-none" />
                </motion.a>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div
          className="
            absolute
            top-0
            right-0
            w-[58%]
            h-full
            bg-[#0b0b0b]
            cursor-default
            [clip-path:polygon(28%_0,100%_0,100%_100%,0%_100%)]
          "
        >
          <div className="relative w-full h-full overflow-hidden">
            {/* Developer Text */}
            <motion.div
              animate={{
                y: [0, -20, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                absolute
                top-1/2
                left-1/2
                -translate-x-1/2
                -translate-y-1/2
                text-[15rem]
                xl:text-[15rem]
                font-black
                text-white/[0.08]
                pointer-events-none
                select-none
                z-0
              "
            >
              Developer
            </motion.div>

            {/* Ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: "linear",
              }}
              className="
                absolute
                top-1/2
                left-[55%]
                -translate-x-1/2
                -translate-y-1/2
                w-[500px]
                h-[500px]
                rounded-full
                border
                border-white/10
                pointer-events-none
              "
            />

            {/* Image */}
            <motion.img
              src={self}
              alt="Profile"
              animate={{
                y: [0, -15, 0],
                rotate: [0, 1, 0, -1, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                absolute
                bottom-0
                right-[8%]
                h-[82%]
                z-20
                object-contain
                cursor-default
                select-none
              "
            />
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
          }}
          onClick={() => {
            document
              .getElementById("skills")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
          className="
            absolute
            bottom-8
            left-1/2
            -translate-x-1/2
            z-50
            cursor-pointer
          "
        >
          <div className="w-6 h-10 border-2 border-[#0b0b0b] rounded-full flex justify-center cursor-pointer">
            <div className="w-1 h-3 bg-[#0b0b0b] rounded-full mt-2" />
          </div>
        </motion.div>
      </section>

      {/* ================= MOBILE HERO ================= */}
      <section className="sm:hidden min-h-screen bg-[#c4c4c4] relative overflow-hidden cursor-default">
        {/* Background Developer Text */}
        <div
          className="
            absolute
            top-20
            left-1/2
            -translate-x-1/2
            text-[5rem]
            font-black
            text-[#0b0b0b]/5
            select-none
            whitespace-nowrap
            pointer-events-none
          "
        >
          Developer
        </div>

        {/* Background Glow */}
        <div
          className="
            absolute
            top-20
            left-1/2
            -translate-x-1/2
            w-[300px]
            h-[300px]
            rounded-full
            bg-black/5
            blur-[80px]
            pointer-events-none
          "
        />

        <div className="relative z-10 px-6 pt-20 pb-10 flex flex-col items-center text-center">
          {/* Profile */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative cursor-default select-none"
          >
            {/* Ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
              className="
                absolute
                inset-[-12px]
                rounded-full
                border
                border-[#0b0b0b]/20
                pointer-events-none
              "
            />

            <motion.img
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
              src={self}
              alt="Profile"
              className="
                w-64
                h-64
                object-cover
                rounded-full
                border-4
                border-[#0b0b0b]
                shadow-2xl
                cursor-default
                select-none
              "
            />
          </motion.div>

          {/* Hello */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-8 text-[#4b4b4b] font-medium cursor-default select-none"
          >
            Hello, I'm
          </motion.p>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="
              text-4xl
              font-black
              text-[#0b0b0b]
              leading-none
              mt-2
              nameshadow
              cursor-default
              select-none
            "
          >
            THATCHINA
            <br />
            MOORTHI
          </motion.h1>

          {/* Role */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "fit-content" }}
            transition={{ delay: 0.8, duration: 1 }}
            className="
              overflow-hidden
              whitespace-nowrap
              border-r-2
              border-[#0b0b0b]
              mt-4
              text-sm
              font-bold
              cursor-default
              select-none
            "
          >
            Frontend Developer • Java Full Stack
          </motion.div>

          {/* Badges */}
          <div className="flex flex-wrap justify-center gap-1.5 mt-3 cursor-default select-none">
            <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-[#0b0b0b] text-[#c4c4c4] cursor-default select-none">
              📍 Chennai
            </span>
            <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-emerald-700 text-white cursor-default select-none">
              Immediate Joiner
            </span>
            <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full border border-[#0b0b0b] text-[#0b0b0b] cursor-default select-none">
              Open to Relocation
            </span>
          </div>

          <div className="w-24 h-[3px] bg-[#0b0b0b] my-6 rounded-full" />

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="text-[#4b4b4b] leading-7 text-sm max-w-md cursor-text selection:bg-[#0b0b0b]/20"
          >
            Building responsive web applications with React, Svelte, and SvelteKit with 1 year 10 months experience in Agile teams. Also developed full-stack apps with Java, Spring Boot, and PostgreSQL.
          </motion.p>

          {/* Buttons */}
          <div className="flex flex-col w-full gap-3 mt-8">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="
                relative
                overflow-hidden
                py-3.5
                rounded-full
                bg-[#0b0b0b]
                text-[#c4c4c4]
                font-bold
                cursor-pointer
              "
            >
              Hire Me
            </motion.button>

            <motion.button
              onClick={() => {
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="
                py-3.5
                rounded-full
                border-2
                border-[#0b0b0b]
                text-[#0b0b0b]
                font-bold
                cursor-pointer
              "
            >
              View Projects
            </motion.button>
          </div>

          {/* Socials */}
          <div className="flex gap-4 mt-8">
            <motion.a
              whileHover={{ y: -5 }}
              href="mailto:thatchinamoorthi578@gmail.com"
              className="bg-white p-3 rounded-xl shadow-lg cursor-pointer"
            >
              <img src={email} alt="Email" className="w-5 h-5 pointer-events-none" />
            </motion.a>

            <motion.a
              whileHover={{ y: -5 }}
              href="https://github.com/thatchinamoorthi123"
              target="_blank"
              rel="noreferrer"
              className="bg-white p-3 rounded-xl shadow-lg cursor-pointer"
            >
              <img src={github} alt="GitHub" className="w-5 h-5 pointer-events-none" />
            </motion.a>

            <motion.a
              whileHover={{ y: -5 }}
              href="https://linkedin.com/in/thatchinamoorthi"
              target="_blank"
              rel="noreferrer"
              className="bg-white p-3 rounded-xl shadow-lg cursor-pointer"
            >
              <img src={linkedin} alt="LinkedIn" className="w-5 h-5 pointer-events-none" />
            </motion.a>
          </div>
        </div>
      </section>
    </>
  );
};
