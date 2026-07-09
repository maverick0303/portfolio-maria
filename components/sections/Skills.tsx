"use client";

import { motion } from "framer-motion";
import { Code2, Palette, Smartphone, Layers } from "lucide-react";

const skills = [
  {
    name: "Frontend",
    description: "React, Next.js y TypeScript",
    icon: Code2,
    color: "#F2529D",
  },
  {
    name: "UI / UX",
    description: "Diseño de interfaces y experiencia",
    icon: Palette,
    color: "#04D9D9",
  },
  {
    name: "Mobile",
    description: "Ionic, Angular y Capacitor",
    icon: Smartphone,
    color: "#097C89",
  },
  {
    name: "Arquitectura",
    description: "Componentes reutilizables y buenas prácticas",
    icon: Layers,
    color: "#7E228E",
  },
];

export default function Skills() {
  return (
    <section id="habilidades" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
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
            text-[#097C89]
            bg-[#04D9D9]/10
            border
            border-[#04D9D9]/30
            rounded-full
            px-4
            py-2
            "
          >
            Habilidades
          </p>

          <h2
            className="mt-6 text-[#401F34]"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            <span className="block text-4xl md:text-5xl font-bold">
              Tecnologías
            </span>
            <span
              className="block text-5xl md:text-6xl text-[#097C89] -mt-1 -rotate-1 origin-left"
              style={{ fontFamily: "var(--font-caveat)" }}
            >
              y enfoque
            </span>
          </h2>
        </motion.div>

        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-6">
          {skills.map((skill, index) => {
            const Icon = skill.icon;

            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ rotate: -2, y: -4 }}
                className="
                rounded-3xl
                p-6
                bg-[#F0F0F2]
                text-center
                transition
                "
              >
                <div
                  className="
                  mx-auto
                  w-14
                  h-14
                  rounded-2xl
                  flex
                  items-center
                  justify-center
                  "
                  style={{ backgroundColor: skill.color }}
                >
                  <Icon className="text-white" size={26} />
                </div>

                <h3
                  className="mt-4 font-bold text-[#401F34]"
                  style={{ fontFamily: "var(--font-space-grotesk)" }}
                >
                  {skill.name}
                </h3>

                <p className="mt-2 text-sm text-[#401F34]/70">
                  {skill.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}