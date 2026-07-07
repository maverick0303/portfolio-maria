"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/constants/projects";


export default function Portfolio() {
  return (
    <section
      id="portafolio"
      className="py-24 px-6 bg-[#F0F0F2]"
    >

      <div className="max-w-6xl mx-auto">


        <motion.div
          initial={{ opacity:0, y:30 }}
          whileInView={{ opacity:1, y:0 }}
          viewport={{ once:true }}
          transition={{ duration:0.6 }}
          className="mb-14"
        >

          <p className="
            uppercase
            tracking-[0.3em]
            text-sm
            text-[#097C89]
            font-semibold
          ">
            Portafolio
          </p>


          <h2 className="
            text-4xl
            font-bold
            mt-3
            text-[#401F34]
          ">
            Proyectos destacados
          </h2>

        </motion.div>



        <div className="
          grid
          md:grid-cols-2
          gap-8
        ">


          {projects.map((project,index)=>(

            <motion.article
              key={project.title}

              initial={{
                opacity:0,
                y:40
              }}

              whileInView={{
                opacity:1,
                y:0
              }}

              viewport={{
                once:true
              }}

              transition={{
                duration:0.5,
                delay:index*0.15
              }}

              className="
                bg-white
                rounded-[2rem]
                p-8
                shadow-sm
                hover:shadow-xl
                transition
              "
            >


              <div
                className="
                  h-40
                  rounded-3xl
                  mb-6
                  flex
                  items-center
                  justify-center
                  text-white
                  text-xl
                  font-bold
                "

                style={{
                  backgroundColor: project.color
                }}
              >

                {project.title}

              </div>



              <h3 className="
                text-2xl
                font-semibold
                text-[#401F34]
              ">
                {project.title}
              </h3>


              <p className="
                mt-3
                text-gray-600
              ">
                {project.description}
              </p>



              <div className="
                flex
                flex-wrap
                gap-2
                mt-5
              ">

                {project.technologies.map((tech)=>(

                  <span
                    key={tech}
                    className="
                      px-3
                      py-1
                      rounded-full
                      bg-[#F0F0F2]
                      text-sm
                      text-[#401F34]
                    "
                  >
                    {tech}
                  </span>

                ))}

              </div>



              <button className="
                mt-6
                flex
                items-center
                gap-2
                text-[#F2529D]
                font-medium
              ">
                Ver proyecto
                <ArrowUpRight size={18}/>
              </button>


            </motion.article>

          ))}


        </div>


      </div>

    </section>
  );
}