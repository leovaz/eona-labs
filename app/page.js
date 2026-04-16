"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const translations = {
  en: {
    nav: ["Solutions", "About", "Contact"],
    heroTitle: ["Intelligent Systems", "for", "Modern Businesses"],
    heroSub: "We design AI, automation and Web3 systems that scale your business.",
    heroCta: "Start a Project",
    servicesTitle: "What We Build",
    servicesSub: "Systems designed to scale your business",
    services: [
      { title: "AI Automation", desc: "Automate workflows and decision-making with intelligent systems." },
      { title: "Web3 Development", desc: "Build decentralized apps and blockchain integrations." },
      { title: "Data Systems", desc: "Turn raw data into powerful business insights." },
    ],
    ctaTitle: "Ready to Scale?",
    ctaSub: "Let's build something powerful together.",
    ctaBtn: "Contact Us",
    footer: "© 2026 Eona Labs",
  },
  es: {
    nav: ["Soluciones", "Nosotros", "Contacto"],
    heroTitle: ["Sistemas Inteligentes", "para", "Empresas Modernas"],
    heroSub: "Diseñamos sistemas de IA, automatización y Web3 que escalan tu negocio.",
    heroCta: "Iniciar Proyecto",
    servicesTitle: "Qué Construimos",
    servicesSub: "Sistemas diseñados para escalar tu negocio",
    services: [
      { title: "Automatización con IA", desc: "Automatiza flujos de trabajo y toma de decisiones con sistemas inteligentes." },
      { title: "Desarrollo Web3", desc: "Construye apps descentralizadas e integraciones blockchain." },
      { title: "Sistemas de Datos", desc: "Convierte datos crudos en insights poderosos para tu negocio." },
    ],
    ctaTitle: "¿Listo para Escalar?",
    ctaSub: "Construyamos algo poderoso juntos.",
    ctaBtn: "Contáctanos",
    footer: "© 2026 Eona Labs",
  },
};

export default function Home() {
  const [lang, setLang] = useState("en");
  const t = translations[lang];

  return (
    <main className="relative bg-[#0b0b0f] text-white min-h-screen overflow-hidden">

{/* 🌌 BACKGROUND PRO */}
<motion.div
  className="absolute inset-0 flex items-center justify-center"
  animate={{ scale: [1, 1.1, 1] }}
  transition={{ duration: 8, repeat: Infinity }}
>
  <div className="w-[500px] h-[500px] bg-indigo-500 opacity-30 blur-[120px] rounded-full"></div>
</motion.div>

<div className="absolute inset-0 flex items-center justify-center">
  <div className="w-[500px] h-[500px] bg-indigo-500 opacity-30 blur-[120px] rounded-full"></div>
</div>

<motion.div
  className="absolute inset-0 flex items-center justify-center"
  animate={{ scale: [1, 1.2, 1] }}
  transition={{ duration: 12, repeat: Infinity }}
>
  <div className="w-[800px] h-[800px] bg-purple-500 opacity-20 blur-[200px] rounded-full"></div>
</motion.div>

<div className="absolute top-0 left-0 w-full h-[300px] bg-gradient-to-b from-white/5 to-transparent"></div>

      {/* NAV */}
      <nav className="relative flex justify-between items-center px-10 py-6 z-10">
        <h1 className="tracking-widest text-sm opacity-80">EONA LABS</h1>
        <div className="flex items-center gap-6 text-sm text-gray-400">
          {t.nav.map((item) => (
            <a key={item} href="#">{item}</a>
          ))}
          <button
            onClick={() => setLang(lang === "en" ? "es" : "en")}
            className="px-3 py-1 rounded-lg border border-white/20 text-white/70 hover:border-purple-500/60 hover:text-white transition text-xs tracking-widest"
          >
            {lang === "en" ? "ES" : "EN"}
          </button>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative flex flex-col items-center text-center justify-center h-[85vh] px-6 z-10">

        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-6xl font-semibold leading-tight max-w-3xl"
        >
          {t.heroTitle[0]} <br />
          {t.heroTitle[1]}{" "}
          <span className="bg-gradient-to-r from-purple-400 via-indigo-400 to-blue-500 text-transparent bg-clip-text">
            {t.heroTitle[2]}
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-6 text-gray-400 max-w-lg"
        >
          {t.heroSub}
        </motion.p>

        <motion.a
          href="https://wa.me/5215536582593"
          target="_blank"
          whileHover={{ scale: 1.05 }}
          className="mt-8 px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500 shadow-lg shadow-purple-500/30"
        >
          {t.heroCta}
        </motion.a>

      </section>

      {/* SERVICES */}
      <section className="relative px-10 py-24 text-center z-10">
        <h2 className="text-3xl mb-4">{t.servicesTitle}</h2>
        <p className="text-gray-400">{t.servicesSub}</p>

        <div className="grid md:grid-cols-3 gap-6 mt-12">

          {t.services.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -8 }}
              className="p-8 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-purple-500/40 transition"
            >
              <h3 className="mb-2 text-lg">{item.title}</h3>
              <p className="text-sm text-gray-400">{item.desc}</p>
            </motion.div>
          ))}

        </div>
      </section>

      {/* CTA */}
      <section className="relative text-center py-20 px-6 z-10">
        <h2 className="text-3xl mb-4">{t.ctaTitle}</h2>
        <p className="text-gray-400 mb-6">{t.ctaSub}</p>

        <a
          href="https://wa.me/5215536582593"
          className="px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500 shadow-lg shadow-purple-500/30"
        >
          {t.ctaBtn}
        </a>
      </section>

      {/* FOOTER */}
      <footer className="relative text-center py-10 text-gray-600 text-sm z-10">
        {t.footer}
      </footer>

<div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
    </main>
  );
}