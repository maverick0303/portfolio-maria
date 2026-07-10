"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Mail, Sparkles, Loader2, Check } from "lucide-react";
import emailjs from "@emailjs/browser";

export default function CTA() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string,
        {
          name: form.name,
          email: form.email,
          message: form.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string
      );

      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Error enviando el mensaje:", error);
      setStatus("error");
    }
  };

  return (
    <section id="contacto" className="py-24 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="
          relative
          rounded-[3rem]
          bg-[#401F34]
          px-6
          py-14
          md:px-14
          md:py-16
          overflow-hidden
          "
        >
          {/* Blobs decorativos */}
          <div className="absolute -top-20 -left-20 w-72 h-72 rounded-full bg-[#F2529D]/20 blur-3xl" />
          <div className="absolute -bottom-20 -right-20 w-72 h-72 rounded-full bg-[#04D9D9]/20 blur-3xl" />


          <div className="relative grid md:grid-cols-2 gap-12 items-center">
            {/* Texto */}
            <div>
              <p
                className="
                inline-flex
                items-center
                gap-2
                uppercase
                tracking-[0.25em]
                text-xs
                font-semibold
                text-[#04D9D9]
                bg-white/10
                border
                border-white/20
                rounded-full
                px-4
                py-2
                "
              >
                Contacto
              </p>

              <h2
                className="mt-6 text-white"
                style={{ fontFamily: "var(--font-space-grotesk)" }}
              >
                <span className="block text-4xl md:text-5xl font-bold">
                  Vamos a trabajar
                </span>
                <span
                  className="block text-5xl md:text-6xl text-[#F29BC4] mt-1 -rotate-1 origin-left"
                  style={{ fontFamily: "var(--font-caveat)" }}
                >
                  juntos
                </span>
              </h2>

              <p className="mt-6 text-white/70 leading-relaxed max-w-md">
                Tengo interés en crear experiencias digitales donde el
                diseño, la tecnología y la creatividad trabajen juntos.
                Escríbeme por el formulario o directo a mi correo.
              </p>

              <a
                href="mailto:mariayeguez.dev@gmail.com"
                className="
                inline-flex
                items-center
                gap-2
                mt-8
                text-sm
                font-semibold
                text-[#04D9D9]
                hover:text-[#F29BC4]
                transition
                "
              >
                <Mail size={16} />
                mariayeguez.dev@gmail.com
                <ArrowRight size={14} />
              </a>
            </div>

            {/* Formulario */}
            <form
              onSubmit={handleSubmit}
              className="
              bg-white/5
              border
              border-white/15
              rounded-3xl
              p-6
              md:p-8
              backdrop-blur-sm
              space-y-4
              "
            >
              <div>
                <label className="text-xs font-medium text-white/60 uppercase tracking-wide">
                  Nombre
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Tu nombre"
                  className="
                  mt-1.5
                  w-full
                  rounded-xl
                  bg-white/10
                  border
                  border-white/15
                  px-4
                  py-3
                  text-white
                  placeholder-white/40
                  outline-none
                  focus:border-[#F2529D]
                  transition
                  "
                />
              </div>

              <div>
                <label className="text-xs font-medium text-white/60 uppercase tracking-wide">
                  Correo
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  placeholder="tu@correo.com"
                  className="
                  mt-1.5
                  w-full
                  rounded-xl
                  bg-white/10
                  border
                  border-white/15
                  px-4
                  py-3
                  text-white
                  placeholder-white/40
                  outline-none
                  focus:border-[#F2529D]
                  transition
                  "
                />
              </div>

              <div>
                <label className="text-xs font-medium text-white/60 uppercase tracking-wide">
                  Mensaje
                </label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Cuéntame sobre tu proyecto..."
                  className="
                  mt-1.5
                  w-full
                  rounded-xl
                  bg-white/10
                  border
                  border-white/15
                  px-4
                  py-3
                  text-white
                  placeholder-white/40
                  outline-none
                  focus:border-[#F2529D]
                  transition
                  resize-none
                  "
                />
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="
                w-full
                inline-flex
                items-center
                justify-center
                gap-2
                rounded-full
                bg-[#F2529D]
                text-white
                font-semibold
                py-3.5
                hover:scale-[1.02]
                transition
                disabled:opacity-60
                disabled:hover:scale-100
                "
              >
                {status === "sending" && (
                  <>
                    <Loader2 size={18} className="animate-spin" />
                    Enviando...
                  </>
                )}
                {status === "sent" && (
                  <>
                    <Check size={18} />
                    ¡Enviado!
                  </>
                )}
                {(status === "idle" || status === "error") && (
                  <>
                    Enviar mensaje
                    <ArrowRight size={18} />
                  </>
                )}
              </button>

              {status === "sent" && (
                <p className="text-center text-sm text-[#04D9D9]">
                  Gracias por escribir, te responderé pronto 💌
                </p>
              )}

              {status === "error" && (
                <p className="text-center text-sm text-[#F29BC4]">
                  Algo falló. Prueba escribirme directo al correo.
                </p>
              )}
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}