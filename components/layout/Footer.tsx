"use client";

import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#F0F0F2] text-[#401F34] px-6 py-14">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-10">
        {/* Marca */}
        <div>
          <div className="flex items-baseline gap-1">
            <span
              className="text-2xl font-bold text-[#401F34]"
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              María
            </span>
            <span
              className="text-2xl text-[#F2529D]"
              style={{ fontFamily: "var(--font-caveat)" }}
            >
              .dev
            </span>
          </div>

          <p className="mt-3 text-[#401F34]/60 max-w-sm">
            Frontend Developer enfocada en crear experiencias digitales con
            diseño y tecnología.
          </p>
        </div>

        {/* Contacto */}
        <div>
          <h3
            className="font-semibold mb-4 text-[#401F34]"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            Contacto
          </h3>

          <div className="flex items-center gap-3">
            <a
              href="mailto:mariayeguez.dev@gmail.com"
              aria-label="Correo"
              className="
              w-11
              h-11
              rounded-full
              bg-white
              border
              border-[#C9EBF2]
              flex
              items-center
              justify-center
              text-[#401F34]
              hover:bg-[#F2529D]
              hover:text-white
              hover:border-[#F2529D]
              transition
              "
            >
              <Mail size={18} />
            </a>

            {/* TODO: reemplazar cuando tengas tu repo/perfil de GitHub listo */}
            <a
              href="#"
              aria-label="GitHub"
              className="
              w-11
              h-11
              rounded-full
              bg-white
              border
              border-[#C9EBF2]
              flex
              items-center
              justify-center
              text-[#401F34]
              hover:bg-[#401F34]
              hover:text-white
              hover:border-[#401F34]
              transition
              "
            >
              <FaGithub size={18} />
            </a>

            <a
              href="https://www.linkedin.com/in/mariavyeguez/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="
              w-11
              h-11
              rounded-full
              bg-white
              border
              border-[#C9EBF2]
              flex
              items-center
              justify-center
              text-[#401F34]
              hover:bg-[#04D9D9]
              hover:text-white
              hover:border-[#04D9D9]
              transition
              "
            >
              <FaLinkedin size={18} />
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-10 pt-6 border-t border-[#401F34]/10 text-sm text-[#401F34]/50">
        © {new Date().getFullYear()} María Yeguez. Todos los derechos
        reservados.
      </div>
    </footer>
  );
}