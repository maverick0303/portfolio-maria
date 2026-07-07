"use client";

import { motion } from "framer-motion";
import { Sparkles, Palette, Code2 } from "lucide-react";

const highlights = [
  {
    title: "Frontend moderno",
    description:
      "Construyo interfaces utilizando tecnologías actuales como React, Next.js y TypeScript.",
    icon: Code2,
  },
  {
    title: "Diseño con propósito",
    description:
      "Me enfoco en crear experiencias visuales intuitivas y centradas en las personas.",
    icon: Palette,
  },
  {
    title: "Detalles que destacan",
    description:
      "Agrego animaciones y microinteracciones para mejorar la experiencia digital.",
    icon: Sparkles,
  },
];

export default function About() {
  return (
    <section
      id="sobre-mi"
      className="py-24 px-6 bg-white"
    >

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center">


        {/* Imagen / elemento visual */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="
            relative
            h-[450px]
            rounded-[3rem]
            bg-gradient-to-br
            from-[#F2529D]
            via-[#7E228E]
            to-[#097C89]
            flex
            items-center
            justify-center
            overflow-hidden
          "
        >

          <div
            className="
              absolute
              w-64
              h-64
              bg-[#C9EBF2]
              rounded-full
              opacity-40
            "
          />


          <span className="
            relative
            text-white
            text-4xl
            font-bold
          ">
            María
          </span>

        </motion.div>



        {/* Texto */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >

          <p className="uppercase tracking-[0.3em] text-sm text-[#097C89] font-semibold">
            Sobre mí
          </p>


          <h2 className="
            text-4xl
            font-bold
            mt-4
            text-[#401F34]
          ">
            Creando experiencias digitales con diseño y código
          </h2>


          <p className="
            mt-6
            text-[#401F34]/80
            leading-relaxed
          ">
            Soy desarrolladora frontend apasionada por combinar tecnología,
            creatividad y diseño para construir productos digitales atractivos,
            funcionales y fáciles de usar.
          </p>



          <div className="mt-8 space-y-5">

            {highlights.map((item) => {

              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="flex gap-4 items-start"
                >

                  <div className="
                    p-3
                    rounded-2xl
                    bg-[#F0F0F2]
                  ">
                    <Icon
                      className="text-[#F2529D]"
                      size={22}
                    />
                  </div>


                  <div>
                    <h3 className="font-semibold text-[#401F34]">
                      {item.title}
                    </h3>

                    <p className="text-sm text-gray-600 mt-1">
                      {item.description}
                    </p>
                  </div>

                </div>
              );
            })}

          </div>

        </motion.div>


      </div>

    </section>
  );
}