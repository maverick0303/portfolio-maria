"use client";

import { motion } from "framer-motion";
import { Code2, Palette, Sparkles } from "lucide-react";

const services = [
  {
    title: "Desarrollo Frontend",
    description:
      "Creación de interfaces modernas, rápidas y adaptables utilizando tecnologías actuales.",
    icon: Code2,
    color: "#F2529D",
  },
  {
    title: "Diseño UI/UX",
    description:
      "Diseños enfocados en experiencia de usuario, accesibilidad y una identidad visual atractiva.",
    icon: Palette,
    color: "#04D9D9",
  },
  {
    title: "Animaciones Web",
    description:
      "Microinteracciones y movimientos fluidos para crear experiencias digitales memorables.",
    icon: Sparkles,
    color: "#7E228E",
  },
];

export default function Services() {
  return (
    <section
      id="servicios"
      className="py-24 px-6 bg-[#F0F0F2]"
    >
      <div className="max-w-6xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="uppercase tracking-[0.3em] text-sm text-[#097C89]">
            Servicios
          </p>

          <h2 className="text-4xl font-bold mt-3 text-[#401F34]">
            Lo que puedo hacer por tu proyecto
          </h2>
        </motion.div>


        <div className="grid md:grid-cols-3 gap-8">

          {services.map((service, index) => {

            const Icon = service.icon;

            return (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.15,
                }}
                viewport={{ once: true }}
                className="
                  bg-white
                  rounded-3xl
                  p-8
                  shadow-sm
                  hover:shadow-xl
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
                    mb-6
                  "
                  style={{
                    backgroundColor: `${service.color}20`,
                  }}
                >
                  <Icon
                    size={28}
                    style={{
                      color: service.color,
                    }}
                  />
                </div>


                <h3 className="text-xl font-semibold text-[#401F34]">
                  {service.title}
                </h3>


                <p className="mt-4 text-gray-600">
                  {service.description}
                </p>


              </motion.article>
            );
          })}

        </div>

      </div>
    </section>
  );
}