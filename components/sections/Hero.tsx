"use client";

import { motion } from "framer-motion";
import { ArrowRight, Code, UserRound } from "lucide-react";

export default function Hero() {
    return (
        <section
            id="inicio"
            className="min-h-screen flex items-center px-6 bg-gradient-to-br from-slate-100 via-white to-gray-200"
        >
            <div className="max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">

                {/* Texto principal */}
                <div>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="uppercase tracking-[0.3em] text-sm text-[#097C89] font-semibold"
                    >
                        Frontend Developer
                    </motion.p>


                    <motion.h1
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        className="text-5xl md:text-6xl font-bold mt-4 text-[#401F34]"
                    >
                        María Yeguez
                    </motion.h1>


                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="mt-6 text-lg text-[#401F34]/80 max-w-xl"
                    >
                        Desarrollo interfaces web modernas enfocadas en experiencia de
                        usuario, diseño y rendimiento.
                    </motion.p>


                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.4 }}
                        className="flex gap-4 mt-8"
                    >

                        <button className="
flex 
items-center 
gap-2 
px-6 
py-3 
rounded-full 
bg-[#F2529D] 
text-white 
font-medium
hover:scale-105 
transition
shadow-md
">
                            Ver proyectos
                            <ArrowRight size={18} />
                        </button>


                        <button className="
px-6 
py-3 
rounded-full 
border 
border-[#097C89]
text-[#097C89]
hover:bg-[#097C89]
hover:text-white
transition
">
                            Contactarme
                        </button>

                    </motion.div>


                    <div className="flex gap-4 mt-8">
                        <Code />
                        <UserRound />
                    </div>

                </div>


                {/* Tarjeta derecha */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="
border 
border-[#C9EBF2]
rounded-3xl 
p-8 
shadow-xl 
bg-white
"
                >

                    <h2 className="text-xl font-semibold text-[#401F34]">
                        Tecnologías
                    </h2>


                    <div className="mt-6 flex flex-wrap gap-3">

                        {[
                            "React",
                            "Next.js",
                            "TypeScript",
                            "Tailwind",
                            "Angular",
                            "Ionic",
                        ].map((tech) => (
                            <span
                                key={tech}
                                className="
px-4 
py-2 
rounded-full 
border 
border-[#C9EBF2]
text-[#401F34]
text-sm
bg-[#F0F0F2]
"
                            >
                                {tech}
                            </span>
                        ))}

                    </div>

                </motion.div>

            </div>
        </section>
    );
}