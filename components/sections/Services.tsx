"use client";

import { motion } from "framer-motion";
import { Code2, Palette, Rocket } from "lucide-react";


const services = [
    {
        title: "Desarrollo Web",
        description:
            "Interfaces modernas y responsivas utilizando tecnologías actuales como React, Next.js y TypeScript.",
        icon: Code2,
        color: "#F2529D",
    },
    {
        title: "Diseño UI/UX",
        description:
            "Diseños centrados en el usuario combinando estética, accesibilidad y una experiencia intuitiva.",
        icon: Palette,
        color: "#04D9D9",
    },
    {
        title: "Optimización",
        description:
            "Mejoras de rendimiento, estructura y experiencia para productos digitales más eficientes.",
        icon: Rocket,
        color: "#097C89",
    },
];


export default function Services() {


    return (

        <section
            id="servicios"
            className="
            py-24
            px-6
            bg-[#F0F0F2]
            "
        >

            <div
                className="
                max-w-6xl
                mx-auto
                "
            >


                {/* Título */}

                <motion.div

                    initial={{
                        opacity: 0,
                        y: 30
                    }}

                    whileInView={{
                        opacity: 1,
                        y: 0
                    }}

                    transition={{
                        duration: 0.6
                    }}

                    viewport={{
                        once: true
                    }}

                    className="text-center"

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
                        Servicios
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
                        Lo que hago
                    </h2>


                </motion.div>



                {/* Cards */}

                <div
                    className="
                    mt-12
                    grid
                    md:grid-cols-3
                    gap-8
                    "
                >


                    {
                        services.map((service, index) => {

                            const Icon = service.icon;


                            return (

                                <motion.div

                                    key={service.title}

                                    initial={{
                                        opacity:0,
                                        y:40
                                    }}

                                    whileInView={{
                                        opacity:1,
                                        y:0
                                    }}

                                    transition={{
                                        duration:0.5,
                                        delay:index * 0.15
                                    }}

                                    viewport={{
                                        once:true
                                    }}

                                    className="
                                    bg-white
                                    rounded-3xl
                                    p-8
                                    shadow-lg
                                    border
                                    border-[#C9EBF2]
                                    hover:-translate-y-2
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
                                        style={{
                                            backgroundColor: service.color
                                        }}
                                    >

                                        <Icon
                                            className="text-white"
                                            size={28}
                                        />

                                    </div>



                                    <h3
                                        className="
                                        mt-6
                                        text-xl
                                        font-bold
                                        text-[#401F34]
                                        "
                                    >
                                        {service.title}
                                    </h3>



                                    <p
                                        className="
                                        mt-4
                                        text-[#401F34]/70
                                        leading-relaxed
                                        "
                                    >
                                        {service.description}
                                    </p>



                                </motion.div>

                            );

                        })
                    }


                </div>


            </div>


        </section>

    );

}