"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Tiendita de Música",
    tag: "E-commerce",
    description:
      "Plataforma ecommerce para venta de productos musicales con catálogo, carrito de compras y gestión de productos.",
    image: "/images/Tiendita.jpg",
    technologies: ["React", "TypeScript", "SQLite", "Ionic"],
    color: "#F2529D",
    slug: "tiendita-de-musica", // NUEVO

  },
  {
    title: "Aplicación móvil de ventas",
    tag: "App Móvil",
    description:
      "Aplicación móvil orientada a ventas con interfaz responsive, navegación intuitiva y gestión de información.",
    image: "/images/timetech.jpg",
    technologies: ["Angular", "Ionic", "Capacitor", "TypeScript"],
    color: "#04D9D9",
    slug: "timetech", // NUEVO

  },
  {
    title: "BookMatch",
    tag: "Web App",
    description:
      "Plataforma enfocada en recomendaciones literarias y descubrimiento de libros mediante una experiencia personalizada.",
    image: "/images/bookmatch.png",
    technologies: ["Next.js", "React", "UI/UX", "TypeScript"],
    color: "#F29BC4",
    slug: "bookmatch", // NUEVO

  },
];

export default function Portfolio() {
  return (
    <section id="portafolio" className="py-24 px-6 bg-[#F0F0F2]">
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
            text-[#F2529D]
            bg-[#F2529D]/10
            border
            border-[#F2529D]/30
            rounded-full
            px-4
            py-2
            "
          >
            Portafolio
          </p>

          <h2
            className="mt-6 text-[#401F34]"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            <span className="block text-4xl md:text-5xl font-bold">
              Proyectos
            </span>
            <span
              className="block text-5xl md:text-6xl text-[#F2529D] -mt-1 rotate-1 origin-left"
              style={{ fontFamily: "var(--font-caveat)" }}
            >
              destacados
            </span>
          </h2>
        </motion.div>

        <div className="mt-14 grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              className="
              bg-white
              rounded-3xl
              overflow-hidden
              shadow-lg
              border
              border-[#C9EBF2]
              transition
              "
            >
              {/* Imagen con tag y botón circular */}
              <div className="relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-56 object-contain p-6 bg-[#F0F0F2]/40"
                />

                <span
                  className="
                  absolute
                  top-4
                  left-4
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-wider
                  text-white
                  px-3
                  py-1.5
                  rounded-full
                  "
                  style={{ backgroundColor: project.color }}
                >
                  {project.tag}
                </span>

                <a
                    href={`/proyectos/${project.slug}`}
                  aria-label={`Ver proyecto ${project.title}`}
                  className="
                  absolute
                  top-4
                  right-4
                  w-10
                  h-10
                  rounded-full
                  bg-white
                  shadow-md
                  flex
                  items-center
                  justify-center
                  text-[#401F34]
                  hover:bg-[#401F34]
                  hover:text-white
                  transition
                  "
                >
                  <ArrowUpRight size={18} />
                </a>
              </div>

              <div className="p-6">
                <h3
                  className="text-xl font-bold text-[#401F34]"
                  style={{ fontFamily: "var(--font-space-grotesk)" }}
                >
                  {project.title}
                </h3>

                <p className="mt-3 text-[#401F34]/70 text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-full bg-[#F0F0F2] text-[#401F34] text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}