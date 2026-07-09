"use client";

import { motion } from "framer-motion";
import { Code2, Palette, Rocket } from "lucide-react";

const services = [
  {
    title: "Desarrollo Web",
    description:
      "Interfaces modernas y responsivas con React, Next.js y TypeScript, pensadas para rendir bien y verse mejor.",
    icon: Code2,
    color: "#F2529D",
  },
  {
    title: "Diseño UI/UX",
    description:
      "Diseños centrados en el usuario, combinando estética, accesibilidad y una experiencia intuitiva de punta a punta.",
    icon: Palette,
    color: "#04D9D9",
  },
  {
    title: "Optimización",
    description:
      "Mejoras de rendimiento y estructura para que tu producto digital cargue rápido y se sienta sólido.",
    icon: Rocket,
    color: "#F29BC4",
  },
];

export default function Services() {
  return (
    <section id="servicios" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Título */}
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
            Servicios
          </p>

          <h2
            className="mt-6 text-[#401F34]"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            <span className="block text-4xl md:text-5xl font-bold">
              Lo que hago
            </span>
            <span
              className="block text-5xl md:text-6xl text-[#F2529D] mt-1 rotate-1 origin-center"
              style={{ fontFamily: "var(--font-caveat)" }}
            >
              con cariño
            </span>
          </h2>
        </motion.div>

        {/* Contenedor oscuro con las tarjetas */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="
          mt-14
          rounded-[2.5rem]
          bg-[#401F34]
          p-6
          md:p-10
          "
        >
          <div className="grid md:grid-cols-3 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -6 }}
                  className="
                  bg-white
                  rounded-3xl
                  p-8
                  shadow-lg
                  transition
                  "
                >
                  <div
                    className="
                    w-14
                    h-14
                    rounded-2xl
                    flex
                    items-center
                    justify-center
                    "
                    style={{ backgroundColor: service.color }}
                  >
                    <Icon className="text-white" size={28} />
                  </div>

                  <h3 className="mt-6 text-xl font-bold text-[#401F34]">
                    {service.title}
                  </h3>

                  <p className="mt-4 text-[#401F34]/70 leading-relaxed">
                    {service.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}