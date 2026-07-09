"use client";

import { Menu, X, ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import { navigation } from "@/constants/navigation";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 w-full z-50 px-4 pt-4 md:px-6 md:pt-6"
    >
      <nav
        className="
        max-w-6xl
        mx-auto
        flex
        justify-between
        items-center
        gap-4
        rounded-full
        border
        border-[#C9EBF2]
        bg-white/80
        backdrop-blur-md
        shadow-[0_4px_20px_rgba(64,31,52,0.08)]
        px-5
        py-3
        "
      >
        {/* Logo */}
        <a href="#inicio" className="flex items-baseline gap-1 shrink-0">
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
        </a>

        {/* Navegación escritorio */}
        <div
          className="
          hidden
          md:flex
          items-center
          gap-1
          rounded-full
          bg-[#F0F0F2]
          px-1.5
          py-1.5
          "
        >
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="
              px-4
              py-2
              rounded-full
              text-sm
              font-medium
              text-[#401F34]/80
              hover:text-[#401F34]
              hover:bg-white
              hover:shadow-sm
              transition
              "
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* CTA escritorio */}
        <a
          href="#contacto"
          className="
          hidden
          md:inline-flex
          items-center
          gap-1.5
          rounded-full
          bg-[#F2529D]
          text-white
          text-sm
          font-semibold
          pl-5
          pr-4
          py-2.5
          shadow-md
          hover:scale-105
          hover:bg-[#e0468e]
          transition
          shrink-0
          "
        >
          Hablemos
          <ArrowUpRight size={16} />
        </a>

        {/* Botón móvil */}
        <button
          className="
          md:hidden
          w-10
          h-10
          rounded-full
          bg-[#F0F0F2]
          text-[#401F34]
          flex
          items-center
          justify-center
          shrink-0
          "
          onClick={() => setOpen(!open)}
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Menú móvil */}
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25 }}
          className="
          md:hidden
          max-w-6xl
          mx-auto
          mt-2
          rounded-3xl
          border
          border-[#C9EBF2]
          bg-white
          shadow-xl
          px-6
          py-6
          flex
          flex-col
          gap-2
          "
        >
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setOpen(false)}
              className="
              text-[#401F34]
              font-medium
              px-3
              py-2
              rounded-xl
              hover:bg-[#F0F0F2]
              transition
              "
            >
              {item.name}
            </a>
          ))}

          <a
            href="#contacto"
            onClick={() => setOpen(false)}
            className="
            mt-2
            inline-flex
            items-center
            justify-center
            gap-1.5
            rounded-full
            bg-[#F2529D]
            text-white
            font-semibold
            py-3
            "
          >
            Hablemos
            <ArrowUpRight size={16} />
          </a>
        </motion.div>
      )}
    </motion.header>
  );
}