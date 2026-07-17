"use client";

import { motion } from "framer-motion";
import { ArrowRight, ExternalLink, X, Check } from "lucide-react";
import type { CaseStudy } from "@/constants/caseStudies";
import ImageGallery from "@/components/common/ImageGallery";

export default function CaseStudyContent({ data }: { data: CaseStudy }) {
  const galleryImages = data.images ?? [];

  return (
    <>
      {/* Hero: imagen a la izquierda, contexto + stack a la derecha */}
      <section className="pt-36 pb-16 px-6 bg-white">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Imagen */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-lg mx-auto md:mx-0 w-full rounded-[2rem] overflow-hidden shadow-xl border border-[#C9EBF2] aspect-square bg-[#F0F0F2]"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={data.heroImage}
              alt={data.title}
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Texto: badge, título, contexto, stack */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <span
              className="inline-flex items-center gap-2 uppercase tracking-[0.25em] text-xs font-semibold text-white rounded-full px-4 py-2"
              style={{ backgroundColor: data.color }}
            >
              {data.tag}
            </span>

            <h1
              className="mt-6 text-5xl md:text-6xl -rotate-1 origin-left"
              style={{ fontFamily: "var(--font-caveat)", color: data.color }}
            >
              {data.title}
            </h1>

            {data.liveUrl && (
              <a
                href={data.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-6 px-6 py-3 rounded-full text-white font-semibold shadow-md hover:scale-105 transition"
                style={{ backgroundColor: data.color }}
              >
                Ver proyecto en vivo <ExternalLink size={16} />
              </a>
            )}

            <h2
              className="mt-8 text-lg font-bold text-[#401F34] mb-2"
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              El contexto
            </h2>
            <p className="text-[#401F34]/70 leading-relaxed text-sm">
              {data.context}
            </p>

            <h2
              className="mt-6 text-lg font-bold text-[#401F34] mb-2"
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              Stack usado
            </h2>
            <div className="flex flex-wrap gap-2">
              {data.role.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-full bg-[#F0F0F2] text-[#401F34] text-xs border border-[#C9EBF2]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Problemas encontrados + Objetivos */}
      <section className="py-16 px-6 bg-[#F0F0F2]">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
          <div>
            <h2
              className="text-2xl font-bold text-[#401F34] mb-6"
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              Problemas encontrados
            </h2>
            <div className="space-y-4">
              {data.problems.map((p, i) => (
                <motion.div
                  key={p.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="flex gap-3 items-start"
                >
                  <div className="mt-0.5 w-6 h-6 rounded-full bg-red-100 text-red-500 flex items-center justify-center shrink-0">
                    <X size={14} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#401F34] text-sm">
                      {p.title}
                    </h3>
                    <p className="text-sm text-[#401F34]/60">
                      {p.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <h2
              className="text-2xl font-bold text-[#401F34] mb-6"
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              Objetivos del rediseño
            </h2>
            <div className="space-y-4">
              {data.objectives.map((obj, i) => (
                <motion.div
                  key={obj}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="flex gap-3 items-start"
                >
                  <div className="mt-0.5 w-6 h-6 rounded-full bg-teal-100 text-[#097C89] flex items-center justify-center shrink-0">
                    <Check size={14} />
                  </div>
                  <p className="text-sm text-[#401F34]/70">{obj}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Galería estilo Instagram */}
      {galleryImages.length > 0 && (
        <section className="py-16 px-6 bg-white">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2
                className="text-2xl font-bold text-[#401F34] mb-4"
                style={{ fontFamily: "var(--font-space-grotesk)" }}
              >
                Capturas del proyecto
              </h2>
              <p className="text-[#401F34]/70 leading-relaxed">
                Haz clic en la imagen para explorar todas las capturas con
                más detalle.
              </p>
            </div>
            <ImageGallery images={galleryImages} />
          </div>
        </section>
      )}

      {/* Antes vs Después */}
      {(data.beforeImage || data.afterImage) && (
  <section className="py-16 px-6 bg-[#F0F0F2]">
    <div className="max-w-5xl mx-auto">
      <h2
        className="text-2xl font-bold text-[#401F34] mb-6"
        style={{ fontFamily: "var(--font-space-grotesk)" }}
      >
        Antes vs Después
      </h2>

      <div className="grid md:grid-cols-2 gap-6 items-start">
        {/* LADO ANTES */}
        <div>
          <span className="inline-block text-xs font-bold uppercase tracking-wider text-white bg-[#401F34]/60 rounded-full px-3 py-1 mb-3">
            Antes
          </span>
          {/* Recuperamos aspect-video para que la card sea pequeña y simétrica */}
          <div className="rounded-2xl overflow-hidden border border-[#C9EBF2] bg-white aspect-video flex items-center justify-center p-2">
            {data.beforeImage ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={data.beforeImage}
                alt="Antes"
                // object-contain hace que la foto mantenga su proporción original dentro de la card
                className="w-full h-full object-contain"
              />
            ) : (
              <span className="text-sm text-[#401F34]/40">
                Captura pendiente
              </span>
            )}
          </div>
        </div>

        {/* LADO DESPUÉS */}
        <div>
          <span
            className="inline-block text-xs font-bold uppercase tracking-wider text-white rounded-full px-3 py-1 mb-3"
            style={{ backgroundColor: data.color }}
          >
            Después
          </span>
          <div className="rounded-2xl overflow-hidden border border-[#C9EBF2] bg-white aspect-video flex items-center justify-center p-2">
            {data.afterImage ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={data.afterImage}
                alt="Después"
                className="w-full h-full object-contain"
              />
            ) : (
              <span className="text-sm text-[#401F34]/40">
                Captura pendiente
              </span>
            )}
          </div>
        </div>
      </div>

      <div className="mt-8">
        <h3 className="font-semibold text-[#401F34] mb-3">
          Mejoras implementadas
        </h3>
        <div className="flex flex-wrap gap-2">
          {data.improvements.map((imp) => (
            <span
              key={imp}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#F0F0F2] text-sm text-[#401F34]/80 border border-[#C9EBF2]"
            >
              <Check size={12} className="text-[#097C89]" />
              {imp}
            </span>
          ))}
        </div>
      </div>
    </div>
  </section>
)}

      {/* Reflexión */}
      <section className="py-16 px-6 bg-[#401F34]">
        <div className="max-w-3xl mx-auto text-center">
          <h2
            className="text-2xl font-bold text-white mb-4"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            Reflexión
          </h2>
          <p className="text-white/70 leading-relaxed">{data.reflection}</p>

          <a
            href="/#portafolio"
            className="inline-flex items-center gap-2 mt-8 text-[#04D9D9] font-semibold hover:text-[#F29BC4] transition"
          >
            Volver al portafolio <ArrowRight size={16} />
          </a>
        </div>
      </section>
    </>
  );
}