"use client";

import { useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export type LightboxImage = {
  src: string;
  caption?: string;
};

type LightboxProps = {
  images: LightboxImage[];
  index: number;
  onClose: () => void;
  onIndexChange: (index: number) => void;
};

export default function Lightbox({
  images,
  index,
  onClose,
  onIndexChange,
}: LightboxProps) {
  const goNext = useCallback(() => {
    onIndexChange((index + 1) % images.length);
  }, [index, images.length, onIndexChange]);

  const goPrev = useCallback(() => {
    onIndexChange((index - 1 + images.length) % images.length);
  }, [index, images.length, onIndexChange]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    };
    window.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [goNext, goPrev, onClose]);

  const current = images[index];
  if (!current) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 z-[100] bg-[#401F34]/95 backdrop-blur-sm flex items-center justify-center px-4 py-10"
      >
        {/* Botón cerrar */}
        <button
          onClick={onClose}
          aria-label="Cerrar"
          className="absolute top-5 right-5 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition z-10"
        >
          <X size={20} />
        </button>

        {/* Contador */}
        <span className="absolute top-6 left-6 text-white/60 text-sm font-medium">
          {index + 1} / {images.length}
        </span>

        {/* Flecha izquierda */}
        {images.length > 1 && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              goPrev();
            }}
            aria-label="Anterior"
            className="absolute left-3 md:left-6 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition shrink-0 z-10"
          >
            <ChevronLeft size={22} />
          </button>
        )}

        {/* Tarjeta: imagen a un lado, descripción al otro */}
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.25 }}
          onClick={(e) => e.stopPropagation()}
          className="w-full max-w-4xl bg-white rounded-3xl overflow-hidden shadow-2xl grid md:grid-cols-[1.4fr_1fr] max-h-[85vh]"
        >
          {/* Imagen */}
          <div className="bg-[#F0F0F2] flex items-center justify-center max-h-[45vh] md:max-h-[85vh]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={current.src}
              alt={current.caption ?? `Captura ${index + 1}`}
              className="w-full h-full object-contain"
            />
          </div>

          {/* Descripción al lado */}
          <div className="p-6 md:p-8 flex flex-col justify-center overflow-y-auto">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#F2529D] mb-2">
              Captura {index + 1} de {images.length}
            </span>
            {current.caption ? (
              <p className="text-[#401F34]/80 leading-relaxed">
                {current.caption}
              </p>
            ) : (
              <p className="text-[#401F34]/40 text-sm italic">
                Sin descripción todavía.
              </p>
            )}
          </div>
        </motion.div>

        {/* Flecha derecha */}
        {images.length > 1 && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              goNext();
            }}
            aria-label="Siguiente"
            className="absolute right-3 md:right-6 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition shrink-0 z-10"
          >
            <ChevronRight size={22} />
          </button>
        )}
      </motion.div>
    </AnimatePresence>
  );
}