"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles, GraduationCap, MapPin } from "lucide-react";

const techs = ["React", "Next.js", "Angular", "Ionic", "Django", "Figma"];

const quickFacts = [
  { icon: GraduationCap, label: "Ingeniería Informática, Duoc UC" },
  { icon: MapPin, label: "Independencia - Región Metropólitana" },
];

export default function Hero() {
  return (
    <section
      id="inicio"
      className="
      relative
      min-h-screen
      flex
      items-center
      px-6
      pt-32
      pb-20
      overflow-hidden
      bg-white
      "
    >
      {/* Blobs decorativos de fondo */}
      <div
        className="
        absolute
        -top-32
        -left-32
        w-[26rem]
        h-[26rem]
        rounded-full
        bg-[#F29BC4]/30
        blur-3xl
        "
      />
      <div
        className="
        absolute
        bottom-0
        right-0
        w-[30rem]
        h-[30rem]
        rounded-full
        bg-[#04D9D9]/20
        blur-3xl
        "
      />

      <div className="relative max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-16 items-center">
        {/* Texto principal */}
        <div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="
            inline-flex
            items-center
            gap-2
            uppercase
            tracking-[0.25em]
            text-xs
            font-semibold
            text-[#F2529D]
            bg-[#F2529D]/10
            border
            border-[#F2529D]/30
            rounded-full
            px-4
            py-2
            "
          >
            <Sparkles size={14} />
            Frontend & UI/UX
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-6 text-[#401F34]"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            <span className="block text-5xl md:text-6xl font-bold leading-[1.05]">
              Construyo interfaces
            </span>
            <span
              className="block text-6xl md:text-7xl leading-[1.05] text-[#F2529D] -mt-1 -rotate-2 origin-left"
              style={{ fontFamily: "var(--font-caveat)" }}
            >
              que se sienten bien
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-6 text-lg text-[#401F34]/70 max-w-xl leading-relaxed"
          >
            Desarrolladora frontend enfocada en experiencia de usuario, diseño
            y rendimiento. Combino código y creatividad para transformar
            ideas en productos digitales que la gente disfruta usar.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex flex-wrap gap-4 mt-8"
          >
            <a
              href="#portafolio"
              className="
              flex
              items-center
              gap-2
              px-6
              py-3
              rounded-full
              bg-[#F2529D]
              text-white
              font-semibold
              hover:scale-105
              transition
              shadow-md
              "
            >
              Ver proyectos
              <ArrowRight size={18} />
            </a>

            <a
              href="#sobre-mi"
              className="
              px-6
              py-3
              rounded-full
              border-2
              border-[#04D9D9]
              text-[#097C89]
              font-semibold
              hover:bg-[#04D9D9]
              hover:text-white
              hover:border-[#04D9D9]
              transition
              "
            >
              Sobre mí
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="flex flex-wrap gap-x-6 gap-y-2 mt-10"
          >
            {quickFacts.map((fact) => (
              <div
                key={fact.label}
                className="flex items-center gap-2 text-sm text-[#401F34]/60"
              >
                <fact.icon size={16} className="text-[#097C89]" />
                {fact.label}
              </div>
            ))}
          </motion.div>
        </div>

        {/* Composición visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative flex items-center justify-center"
        >
          {/* Marco de foto */}
          <div
            className="
            relative
            w-full
            max-w-sm
            aspect-[4/5]
            rounded-[3rem]
            p-2
            bg-gradient-to-br
            from-[#F2529D]
            via-[#F29BC4]
            to-[#04D9D9]
            shadow-2xl
            "
          >
            <div className="w-full h-full rounded-[2.5rem] overflow-hidden">
              <img
                src="/images/yo1.png"
                alt="María Yeguez"
                className="w-full h-full object-[center_5%] object-cover scale-135"
              />
            </div>
          </div>

          {/* Badge circular giratorio (elemento firma) */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
            className="
            absolute
            -top-6
            -right-6
            md:top-2
            md:-right-10
            w-28
            h-28
            "
          >
            <svg viewBox="0 0 112 112" className="w-full h-full">
              <circle cx="56" cy="56" r="55" fill="#401F34" />
              <path
                id="badgeCircle"
                d="M 56,56 m -40,0 a 40,40 0 1,1 80,0 a 40,40 0 1,1 -80,0"
                fill="none"
              />
              <text fontSize="9.2" fill="#ffffff" letterSpacing="1.5">
                <textPath href="#badgeCircle" startOffset="0%">
                  DISEÑO • CÓDIGO • UX • DISEÑO • CÓDIGO • UX •
                </textPath>
              </text>
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <Sparkles className="text-[#F2529D]" size={22} />
            </div>
          </motion.div>

          {/* Tarjeta flotante de stack */}
          <motion.div
            initial={{ opacity: 0, y: 20, rotate: -6 }}
            animate={{ opacity: 1, y: 0, rotate: -6 }}
            whileHover={{ rotate: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="
            absolute
            -bottom-6
            -left-6
            md:-left-12
            bg-white
            rounded-2xl
            shadow-xl
            border
            border-[#C9EBF2]
            p-4
            max-w-[180px]
            "
          >
            <p className="text-xs font-semibold text-[#401F34]/50 uppercase tracking-wide mb-2">
              Stack
            </p>
            <div className="flex flex-wrap gap-1.5">
              {techs.map((tech) => (
                <span
                  key={tech}
                  className="
                  px-2.5
                  py-1
                  rounded-full
                  bg-[#F0F0F2]
                  text-[#401F34]
                  text-[11px]
                  font-medium
                  "
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}