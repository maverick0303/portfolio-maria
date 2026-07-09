"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail, Sparkles } from "lucide-react";

export default function CTA() {
  return (
    <section id="contacto" className="py-24 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="
          relative
          rounded-[3rem]
          bg-[#401F34]
          px-6
          py-16
          md:px-16
          md:py-20
          text-center
          overflow-hidden
          "
        >
          {/* Blobs decorativos dentro de la tarjeta */}
          <div className="absolute -top-20 -left-20 w-72 h-72 rounded-full bg-[#F2529D]/20 blur-3xl" />
          <div className="absolute -bottom-20 -right-20 w-72 h-72 rounded-full bg-[#04D9D9]/20 blur-3xl" />

          {/* Badge circular giratorio (cierre del Hero) */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
            className="hidden md:block absolute top-8 right-10 w-24 h-24"
          >
            <svg viewBox="0 0 112 112" className="w-full h-full">
              <circle cx="56" cy="56" r="55" fill="#ffffff" />
              <path
                id="ctaBadgeCircle"
                d="M 56,56 m -40,0 a 40,40 0 1,1 80,0 a 40,40 0 1,1 -80,0"
                fill="none"
              />
              <text fontSize="9" fill="#401F34" letterSpacing="1.5">
                <textPath href="#ctaBadgeCircle" startOffset="0%">
                  HABLEMOS • CREEMOS • HABLEMOS • CREEMOS •
                </textPath>
              </text>
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <Sparkles className="text-[#F2529D]" size={20} />
            </div>
          </motion.div>

          <p
            className="
            relative
            inline-flex
            items-center
            gap-2
            uppercase
            tracking-[0.25em]
            text-xs
            font-semibold
            text-[#04D9D9]
            bg-white/10
            border
            border-white/20
            rounded-full
            px-4
            py-2
            "
          >
            Contacto
          </p>

          <h2
            className="relative mt-6 text-white"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            <span className="block text-4xl md:text-6xl font-bold">
              Vamos a trabajar
            </span>
            <span
              className="block text-5xl md:text-7xl text-[#F29BC4] mt-1 -rotate-1 origin-center"
              style={{ fontFamily: "var(--font-caveat)" }}
            >
              juntos
            </span>
          </h2>

          <p className="relative mt-6 text-lg text-white/70 max-w-2xl mx-auto">
            Tengo interés en crear experiencias digitales donde el diseño, la
            tecnología y la creatividad trabajen juntos.
          </p>

          <div className="relative mt-10 flex flex-wrap justify-center gap-4">
            <a
              href="mailto:tu-correo@gmail.com"
              className="
              inline-flex
              items-center
              gap-2
              px-8
              py-4
              rounded-full
              bg-[#F2529D]
              text-white
              font-semibold
              hover:scale-105
              transition
              shadow-lg
              "
            >
              <Mail size={18} />
              Escríbeme
              <ArrowRight size={18} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}