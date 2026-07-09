"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";


export default function CTA() {

    return (

        <section
            id="contacto"
            className="
            py-24
            px-6
            bg-[#401F34]
            "
        >

            <div
                className="
                max-w-4xl
                mx-auto
                text-center
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

                    transition={{
                        duration:.7
                    }}

                    viewport={{
                        once:true
                    }}

                >


                    <p
                        className="
                        uppercase
                        tracking-[0.3em]
                        text-sm
                        text-[#04D9D9]
                        font-semibold
                        "
                    >
                        Contacto
                    </p>


                    <h2
                        className="
                        mt-6
                        text-4xl
                        md:text-6xl
                        font-bold
                        text-white
                        "
                    >
                        Vamos a trabajar juntos
                    </h2>


                    <p
                        className="
                        mt-6
                        text-lg
                        text-[#F0F0F2]
                        max-w-2xl
                        mx-auto
                        "
                    >
                        Tengo interés en crear experiencias digitales donde
                        el diseño, la tecnología y la creatividad trabajen juntos.
                    </p>



                    <a
                        href="mailto:tu-correo@gmail.com"
                        className="
                        inline-flex
                        items-center
                        gap-2
                        mt-10
                        px-8
                        py-4
                        rounded-full
                        bg-[#F2529D]
                        text-white
                        font-semibold
                        hover:scale-105
                        transition
                        shadow-lg
                        "
                    >

                        Contactarme

                        <ArrowRight size={20}/>

                    </a>


                </motion.div>


            </div>


        </section>

    );
}