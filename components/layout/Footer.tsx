"use client";

import { Mail } from "lucide-react";
import {
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";


export default function Footer() {

    return (

        <footer
            className="
        bg-[#401F34]
        text-white
        px-6
        py-12
      "
        >

            <div
                className="
          max-w-6xl
          mx-auto
          flex
          flex-col
          md:flex-row
          justify-between
          gap-8
        "
            >


                {/* Marca */}
                <div>

                    <h2
                        className="
              text-2xl
              font-bold
            "
                    >
                        María Yeguez
                    </h2>


                    <p
                        className="
              mt-3
              text-white/70
              max-w-sm
            "
                    >
                        Frontend Developer enfocada en crear
                        experiencias digitales con diseño y tecnología.
                    </p>

                </div>



                {/* Contacto */}
                <div>

                    <h3
                        className="
              font-semibold
              mb-4
            "
                    >
                        Contacto
                    </h3>


                    <div
                        className="
              flex
              flex-col
              gap-3
            "
                    >

                        <a
                            href="mailto:correo@email.com"
                            className="
                flex
                items-center
                gap-2
                text-white/80
                hover:text-[#F2529D]
                transition
              "
                        >
                            <Mail size={18} />
                            correo@email.com
                        </a>


                        <a
                            href="#"
                            className="
                flex
                items-center
                gap-2
                text-white/80
                hover:text-[#04D9D9]
                transition
              "
                        >
                            <FaGithub size={18}/>
                            GitHub
                        </a>


                        <a
                            href="#"
                            className="
                flex
                items-center
                gap-2
                text-white/80
                hover:text-[#04D9D9]
                transition
              "
                        >
                            <FaLinkedin size={18}/>
                            LinkedIn
                        </a>

                    </div>


                </div>


            </div>



            <div
                className="
          max-w-6xl
          mx-auto
          mt-10
          pt-6
          border-t
          border-white/20
          text-sm
          text-white/60
        "
            >

                © {new Date().getFullYear()} María Yeguez.
                Todos los derechos reservados.

            </div>


        </footer>

    );
}