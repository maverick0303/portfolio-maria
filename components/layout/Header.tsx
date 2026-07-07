"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";
import { navigation } from "@/constants/navigation";


export default function Header(){

  const [open,setOpen] = useState(false);


  return (

    <header
      className="
        fixed
        top-0
        w-full
        z-50
        bg-[#F0F0F2]/80
        backdrop-blur-md
      "
    >

      <nav
        className="
          max-w-6xl
          mx-auto
          px-6
          py-5
          flex
          justify-between
          items-center
        "
      >

        {/* Logo */}

        <a
          href="#inicio"
          className="
            text-2xl
            font-bold
            text-[#401F34]
          "
        >
          María.
        </a>



        {/* Desktop */}

        <div
          className="
            hidden
            md:flex
            gap-8
          "
        >

          {navigation.map((item)=>(

            <a
              key={item.name}
              href={item.href}
              className="
                text-[#401F34]
                hover:text-[#F2529D]
                transition
              "
            >
              {item.name}
            </a>

          ))}

        </div>



        {/* Mobile button */}

        <button
          className="
            md:hidden
            text-[#401F34]
          "
          onClick={()=>setOpen(!open)}
        >

          {
            open
            ? <X />
            : <Menu />
          }

        </button>


      </nav>



      {/* Mobile menu */}

      {
        open && (

          <div
            className="
              md:hidden
              px-6
              pb-6
              flex
              flex-col
              gap-4
              bg-white
            "
          >

            {navigation.map((item)=>(

              <a
                key={item.name}
                href={item.href}
                onClick={()=>setOpen(false)}
                className="
                  text-[#401F34]
                "
              >
                {item.name}
              </a>

            ))}

          </div>

        )
      }


    </header>

  );
}