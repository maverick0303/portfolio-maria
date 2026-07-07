"use client";

import { motion } from "framer-motion";
import {
  Atom,
  Layers,
  Code2,
  Palette,
} from "lucide-react";

import { skills } from "@/constants/skills";


const icons = [
  Atom,
  Layers,
  Code2,
  Palette,
];


export default function Skills() {
  return (
    <section
      id="habilidades"
      className="
        py-20
        px-6
        bg-white
      "
    >

      <div className="max-w-6xl mx-auto">


        <motion.div
          initial={{
            opacity:0,
            y:30
          }}

          whileInView={{
            opacity:1,
            y:0
          }}

          viewport={{
            once:true
          }}

          transition={{
            duration:0.6
          }}

          className="text-center mb-12"
        >

          <p className="
            uppercase
            tracking-[0.3em]
            text-sm
            text-[#097C89]
            font-semibold
          ">
            Habilidades
          </p>


          <h2 className="
            text-4xl
            font-bold
            mt-3
            text-[#401F34]
          ">
            Tecnologías que utilizo
          </h2>

        </motion.div>



        <div className="
          grid
          grid-cols-2
          md:grid-cols-4
          gap-6
        ">


          {skills.map((skill,index)=>{

            const Icon = icons[index];


            return (

              <motion.div

                key={skill.name}

                initial={{
                  opacity:0,
                  scale:0.8
                }}

                whileInView={{
                  opacity:1,
                  scale:1
                }}

                viewport={{
                  once:true
                }}

                transition={{
                  duration:0.5,
                  delay:index*0.15
                }}

                whileHover={{
                  y:-8
                }}

                className="
                  rounded-3xl
                  p-6
                  bg-[#F0F0F2]
                  text-center
                  hover:shadow-lg
                  transition
                "
              >

                <Icon
                  size={38}
                  className="
                    mx-auto
                    text-[#F2529D]
                  "
                />


                <h3 className="
                  mt-4
                  font-semibold
                  text-[#401F34]
                ">
                  {skill.name}
                </h3>


                <p className="
                  mt-2
                  text-sm
                  text-gray-600
                ">
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