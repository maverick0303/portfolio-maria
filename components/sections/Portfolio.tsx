"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";


const projects = [
  {
    title: "Tiendita de Música",
    description:
      "Plataforma ecommerce para venta de productos musicales con catálogo, carrito de compras y gestión de productos.",
    image: "/images/tiendita.jpg",
    technologies: [
      "React",
      "TypeScript",
      "SQLite",
      "Ionic"
    ],
  },

  {
    title: "Aplicación móvil de ventas",
    description:
      "Aplicación móvil orientada a ventas con interfaz responsive, navegación intuitiva y gestión de información.",
    image: "/images/timetech.jpg",
    technologies: [
      "Angular",
      "Ionic",
      "Capacitor",
      "TypeScript"
    ],
  },

  {
    title: "BookMatch",
    description:
      "Plataforma enfocada en recomendaciones literarias y descubrimiento de libros mediante una experiencia personalizada.",
    image: "/images/bookmatch.png",
    technologies: [
      "Next.js",
      "React",
      "UI/UX",
      "TypeScript"
    ],
  }
];



export default function Portfolio() {


  return (

    <section
      id="portafolio"
      className="
py-24
px-6
bg-[#F0F0F2]
"
    >

      <div className="
max-w-6xl
mx-auto
">


        <div className="
text-center
">

          <p
            className="
uppercase
tracking-[0.3em]
text-sm
font-semibold
text-[#097C89]
"
          >
            Portafolio
          </p>


          <h2
            className="
mt-4
text-4xl
md:text-5xl
font-bold
text-[#401F34]
"
          >
            Proyectos destacados
          </h2>

        </div>



        <div
          className="
mt-12
grid
md:grid-cols-3
gap-8
"
        >


          {
            projects.map((project, index) => (


              <motion.article

                key={project.title}

                initial={{
                  opacity: 0,
                  y: 40
                }}

                whileInView={{
                  opacity: 1,
                  y: 0
                }}

                transition={{
                  duration: .5,
                  delay: index * .15
                }}

                viewport={{
                  once: true
                }}

                className="
bg-white
rounded-3xl
overflow-hidden
shadow-lg
border
border-[#C9EBF2]
"

              >


                <img
                  src={project.image}
                  alt={project.title}
                  className="
    w-full
    h-64
    object-contain
    p-6
    hover:scale-105
    transition
    duration-300
    "
                />


                <div className="
p-6
">


                  <h3
                    className="
text-xl
font-bold
text-[#401F34]
"
                  >
                    {project.title}
                  </h3>


                  <p
                    className="
mt-3
text-[#401F34]/70
text-sm
leading-relaxed
"
                  >
                    {project.description}
                  </p>



                  <div
                    className="
mt-4
flex
flex-wrap
gap-2
"
                  >

                    {
                      project.technologies.map((tech) => (

                        <span
                          key={tech}
                          className="
px-3
py-1
rounded-full
bg-[#C9EBF2]
text-[#401F34]
text-xs
"
                        >
                          {tech}
                        </span>

                      ))
                    }

                  </div>



                  <button
                    className="
mt-6
flex
items-center
gap-2
text-[#F2529D]
font-semibold
"
                  >
                    Ver proyecto
                    <ExternalLink size={16} />
                  </button>


                </div>


              </motion.article>


            ))
          }



        </div>


      </div>


    </section>


  )

}