"use client";

import { motion } from "framer-motion";
import { Sparkles, Code2, Paintbrush } from "lucide-react";


const strengths = [
    {
        title: "Frontend",
        description: "Construcción de interfaces modernas con React, Next.js y TypeScript.",
        icon: Code2,
    },
    {
        title: "Diseño",
        description: "Creación de experiencias visuales enfocadas en usuarios.",
        icon: Paintbrush,
    },
    {
        title: "Creatividad",
        description: "Combino tecnología, animación y diseño para crear productos únicos.",
        icon: Sparkles,
    },
];


export default function About() {


    return (

        <section
            id="sobre-mi"
            className="
            py-24
            px-6
            bg-white
            "
        >

            <div
                className="
                max-w-6xl
                mx-auto
                grid
                md:grid-cols-2
                gap-12
                items-center
                "
            >


                {/* Imagen */}

                <motion.div

                    initial={{
                        opacity:0,
                        x:-50
                    }}

                    whileInView={{
                        opacity:1,
                        x:0
                    }}

                    transition={{
                        duration:0.7
                    }}

                    viewport={{
                        once:true
                    }}

                    className="
                    h-[450px]
                    rounded-[3rem]
                    bg-gradient-to-br
                    from-[#F2529D]
                    via-[#7E228E]
                    to-[#097C89]
                    flex
                    items-center
                    justify-center
                    "

                >

                    <div
                        className="
                        w-64
                        h-64
                        rounded-full
                        bg-[#F0F0F2]
                        flex
                        items-center
                        justify-center
                        text-center
                        text-[#401F34]
                        font-semibold
                        "
                    >

                        Tu imagen aquí ✨

                    </div>


                </motion.div>



                {/* Texto */}

                <motion.div

                    initial={{
                        opacity:0,
                        x:50
                    }}

                    whileInView={{
                        opacity:1,
                        x:0
                    }}

                    transition={{
                        duration:0.7
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
                        text-[#097C89]
                        font-semibold
                        "
                    >
                        Sobre mí
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
                        Diseño experiencias digitales con propósito
                    </h2>



                    <p
                        className="
                        mt-6
                        text-[#401F34]/70
                        text-lg
                        leading-relaxed
                        "
                    >
                        Soy desarrolladora frontend enfocada en crear interfaces
                        atractivas, funcionales y centradas en la experiencia del usuario.
                        Me interesa combinar código, diseño y creatividad para transformar
                        ideas en productos digitales.
                    </p>



                    <div
                        className="
                        mt-8
                        space-y-4
                        "
                    >

                        {
                            strengths.map((item)=>(

                                <div
                                    key={item.title}
                                    className="
                                    flex
                                    gap-4
                                    items-start
                                    "
                                >

                                    <div
                                        className="
                                        p-3
                                        rounded-xl
                                        bg-[#F0F0F2]
                                        "
                                    >

                                        <item.icon
                                            className="text-[#F2529D]"
                                            size={22}
                                        />

                                    </div>


                                    <div>

                                        <h3
                                            className="
                                            font-bold
                                            text-[#401F34]
                                            "
                                        >
                                            {item.title}
                                        </h3>


                                        <p
                                            className="
                                            text-sm
                                            text-[#401F34]/70
                                            "
                                        >
                                            {item.description}
                                        </p>


                                    </div>


                                </div>

                            ))
                        }


                    </div>


                </motion.div>


            </div>


        </section>

    );

}