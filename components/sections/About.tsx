"use client";

import { motion } from "framer-motion";
import { Code2, Paintbrush, Sparkles } from "lucide-react";

const strengths = [
  {
    title: "Frontend",
    description: "Construcción de interfaces modernas con React, Next.js y TypeScript.",
    icon: Code2,
    color: "#F2529D",
  },
  {
    title: "Diseño",
    description: "Creación de experiencias visuales enfocadas en usuarios.",
    icon: Paintbrush,
    color: "#04D9D9",
  },
  {
    title: "Creatividad",
    description: "Combino tecnología, animación y diseño para crear productos únicos.",
    icon: Sparkles,
    color: "#F29BC4",
  },
];

export default function About() {
  return (
    <section id="sobre-mi" className="relative py-24 px-6 bg-white overflow-hidden">
      {/* Blob decorativo */}
      <div
        className="
        absolute
        top-1/3
        -left-40
        w-[24rem]
        h-[24rem]
        rounded-full
        bg-[#F29BC4]/20
        blur-3xl
        "
      />

      <div className="relative max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* Imagen */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div
            className="
            h-[450px]
            rounded-[3rem]
            p-2
            bg-gradient-to-br
            from-[#F2529D]
            via-[#7E228E]
            to-[#097C89]
            "
          >
            <div
              className="
              w-full
              h-full
              rounded-[2.5rem]
              bg-[#F0F0F2]
              flex
              items-center
              justify-center
              text-center
              text-[#401F34]/60
              font-semibold
              "
            >
              Tu imagen aquí ✨
            </div>
          </div>

          {/* Chip flotante */}
          <motion.div
            initial={{ opacity: 0, y: 20, rotate: 6 }}
            whileInView={{ opacity: 1, y: 0, rotate: 6 }}
            whileHover={{ rotate: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="
            absolute
            -bottom-6
            -right-4
            md:-right-8
            bg-white
            rounded-2xl
            shadow-xl
            border
            border-[#C9EBF2]
            px-5
            py-4
            text-center
            "
          >
            <p
              className="text-3xl font-bold text-[#F2529D]"
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              100%
            </p>
            <p className="text-xs text-[#401F34]/60 font-medium">dedicación</p>
          </motion.div>
        </motion.div>

        {/* Texto */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <p
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
            Sobre mí
          </p>

          <h2
            className="mt-6 text-[#401F34]"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            <span className="block text-4xl md:text-5xl font-bold leading-tight">
              Diseño experiencias
            </span>
            <span
              className="block text-5xl md:text-6xl text-[#097C89] -mt-1 -rotate-1 origin-left"
              style={{ fontFamily: "var(--font-caveat)" }}
            >
              con propósito
            </span>
          </h2>

          <p className="mt-6 text-[#401F34]/70 text-lg leading-relaxed">
            Soy desarrolladora frontend enfocada en crear interfaces
            atractivas, funcionales y centradas en la experiencia del usuario.
            Me interesa combinar código, diseño y creatividad para transformar
            ideas en productos digitales.
          </p>

          <div className="mt-8 space-y-4">
            {strengths.map((item) => (
              <div key={item.title} className="flex gap-4 items-start">
                <div
                  className="
                  w-12
                  h-12
                  rounded-xl
                  flex
                  items-center
                  justify-center
                  shrink-0
                  "
                  style={{ backgroundColor: item.color }}
                >
                  <item.icon className="text-white" size={20} />
                </div>

                <div>
                  <h3 className="font-bold text-[#401F34]">{item.title}</h3>
                  <p className="text-sm text-[#401F34]/70">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}