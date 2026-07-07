"use client";

import { motion } from "framer-motion";
import { navigationLinks } from "@/constants/navigation";

export default function Header() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="
        fixed
        top-0
        left-0
        w-full
        z-50
        px-6
        py-5
      "
    >
      <nav
        className="
          max-w-6xl
          mx-auto
          flex
          items-center
          justify-between
          rounded-full
          px-6
          py-3
          bg-white/80
          backdrop-blur-md
          shadow-sm
        "
      >

        {/* Logo */}
        <a
          href="#inicio"
          className="
            font-bold
            text-xl
            text-[#401F34]
          "
        >
          María<span className="text-[#F2529D]">.</span>
        </a>


        {/* Navegación */}
        <div className="hidden md:flex gap-8">

          {navigationLinks.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="
                text-sm
                text-[#401F34]
                hover:text-[#F2529D]
                transition
              "
            >
              {item.label}
            </a>
          ))}

        </div>

      </nav>
    </motion.header>
  );
}