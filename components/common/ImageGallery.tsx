"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Expand, Images } from "lucide-react";
import Lightbox, { type LightboxImage } from "./Lightbox";

type ImageGalleryProps = {
  images: LightboxImage[];
};

export default function ImageGallery({ images }: ImageGalleryProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  if (images.length === 0) return null;

  const cover = images[0];

  return (
    <>
      <motion.button
        type="button"
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        onClick={() => setOpenIndex(0)}
        className="group relative w-full rounded-2xl overflow-hidden border border-[#C9EBF2] bg-white aspect-[4/3] focus:outline-none focus:ring-2 focus:ring-[#F2529D]"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={cover.src}
          alt={cover.caption ?? "Captura del proyecto"}
          className="w-full h-full object-cover transition duration-300 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-[#401F34]/0 group-hover:bg-[#401F34]/40 transition flex items-center justify-center">
          <Expand
            size={26}
            className="text-white opacity-0 group-hover:opacity-100 transition"
          />
        </div>

        {images.length > 1 && (
          <span className="absolute bottom-3 right-3 inline-flex items-center gap-1.5 bg-[#401F34]/80 text-white text-xs font-semibold px-3 py-1.5 rounded-full backdrop-blur-sm">
            <Images size={14} />
            Ver las {images.length} capturas
          </span>
        )}
      </motion.button>

      {openIndex !== null && (
        <Lightbox
          images={images}
          index={openIndex}
          onClose={() => setOpenIndex(null)}
          onIndexChange={setOpenIndex}
        />
      )}
    </>
  );
}