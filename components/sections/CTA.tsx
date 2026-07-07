"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";


export default function CTA() {
  return (
    <section
      className="
        px-6
        py-24
      "
    >

      <motion.div

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
          duration:0.7
        }}

        className="
          max-w-6xl
          mx-auto
          rounded-[3rem]
          overflow-hidden
          relative
          bg-gradient-to-br
          from-[#F2529D]
          via-[#7E228E]
          to-[#097C89]
          px-8
          py-16
          text-center
        "
      >


        {/* Decoración */}
        <div
          className="
            absolute
            -top-20
            -right-20
            w-64
            h-64
            rounded-full
            bg-[#C9EBF2]
            opacity-20
          "
        />


        <Sparkles
          className="
            mx-auto
            text-white
            mb-6
          "
          size={40}
        />



        <h2
          className="
            relative
            text-4xl
            md:text-5xl
            font-bold
            text-white
          "
        >
          Vamos a trabajar juntos
        </h2>



        <p
          className="
            relative
            mt-5
            max-w-2xl
            mx-auto
            text-white/90
            text-lg
          "
        >
          Tengo interés en crear experiencias digitales donde el diseño,
          la tecnología y la creatividad trabajen juntos.
        </p>



        <button

          className="
            relative
            mt-8
            inline-flex
            items-center
            gap-2
            px-8
            py-4
            rounded-full
            bg-white
            text-[#401F34]
            font-semibold
            hover:scale-105
            transition
            shadow-lg
          "

        >

          Contactarme

          <ArrowRight size={18}/>

        </button>



      </motion.div>

    </section>
  );
}