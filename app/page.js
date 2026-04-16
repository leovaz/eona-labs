"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const translations = {
  en: {
    nav: ["Solutions", "About", "Contact"],
    badge: "AI · Web3 · Automation",
    heroTitle: ["Intelligent Systems", "for", "Modern Businesses"],
    heroSub: "We don't just deliver tools — we build systems that evolve with your business.",
    heroCta: "Start a Project",
    aboutTitle: "About Eona Labs",
    aboutP1: "Eona Labs is a technology studio focused on building intelligent digital systems for modern businesses. We design and implement solutions powered by artificial intelligence, automation, and Web3 infrastructure to help companies operate more efficiently, make better decisions, and scale faster.",
    aboutP2: "Our approach combines strategy, engineering, and product thinking. From AI-driven workflows and data systems to decentralized applications and integrations, we create technology that is not only functional, but built for long-term impact.",
    aboutTargetLabel: "Who we work with",
    aboutTarget: "Small and medium-sized businesses that want to automate operations, implement AI, and future-proof their infrastructure.",
    aboutFounder: "Founder",
    aboutFounderName: "Leonel Vázquez — AI Automation Specialist",
    servicesTitle: "What We Build",
    servicesSub: "Systems designed to scale your business",
    services: [
      { title: "AI Automation", desc: "Automate workflows and decision-making with intelligent systems." },
      { title: "Web3 Development", desc: "Build decentralized apps and blockchain integrations." },
      { title: "Data Systems", desc: "Turn raw data into powerful business insights." },
    ],
    ctaTitle: "Ready to Scale?",
    ctaSub: "Let's build something powerful together.",
    ctaWhatsApp: "WhatsApp",
    ctaEmail: "hola@eonalabs.com",
    footer: "© 2026 Eona Labs · eonalabs.ai",
  },
  es: {
    nav: ["Soluciones", "Nosotros", "Contacto"],
    badge: "IA · Web3 · Automatización",
    heroTitle: ["Sistemas Inteligentes", "para", "Empresas Modernas"],
    heroSub: "No solo entregamos herramientas — construimos sistemas que evolucionan con tu negocio.",
    heroCta: "Iniciar Proyecto",
    aboutTitle: "Sobre Eona Labs",
    aboutP1: "Eona Labs es un estudio de tecnología enfocado en construir sistemas digitales inteligentes para empresas modernas. Diseñamos e implementamos soluciones impulsadas por inteligencia artificial, automatización e infraestructura Web3 para ayudar a las empresas a operar con mayor eficiencia, tomar mejores decisiones y escalar más rápido.",
    aboutP2: "Nuestro enfoque combina estrategia, ingeniería y pensamiento de producto. Desde flujos de trabajo impulsados por IA y sistemas de datos hasta aplicaciones descentralizadas e integraciones, creamos tecnología que no solo es funcional, sino construida para un impacto a largo plazo.",
    aboutTargetLabel: "Con quién trabajamos",
    aboutTarget: "Pequeñas y medianas empresas que desean automatizar operaciones, implementar IA y preparar su infraestructura para el futuro.",
    aboutFounder: "Fundador",
    aboutFounderName: "Leonel Vázquez — Especialista en Automatización con IA",
    servicesTitle: "Qué Construimos",
    servicesSub: "Sistemas diseñados para escalar tu negocio",
    services: [
      { title: "Automatización con IA", desc: "Automatiza flujos de trabajo y toma de decisiones con sistemas inteligentes." },
      { title: "Desarrollo Web3", desc: "Construye apps descentralizadas e integraciones blockchain." },
      { title: "Sistemas de Datos", desc: "Convierte datos crudos en insights poderosos para tu negocio." },
    ],
    ctaTitle: "¿Listo para Escalar?",
    ctaSub: "Construyamos algo poderoso juntos.",
    ctaWhatsApp: "WhatsApp",
    ctaEmail: "hola@eonalabs.com",
    footer: "© 2026 Eona Labs · eonalabs.ai",
  },
};

const icons = [
  <svg key="ai" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 mb-4 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.75H6A2.25 2.25 0 003.75 6v3.75M3.75 14.25V18A2.25 2.25 0 006 20.25h3.75M14.25 20.25H18A2.25 2.25 0 0020.25 18v-3.75M20.25 9.75V6A2.25 2.25 0 0018 3.75h-3.75M9 12a3 3 0 106 0 3 3 0 00-6 0z" />
  </svg>,
  <svg key="web3" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 mb-4 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
  </svg>,
  <svg key="data" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 mb-4 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
  </svg>,
];

export default function Home() {
  const [lang, setLang] = useState("en");
  const t = translations[lang];

  return (
    <main className="relative bg-[#0b0b0f] text-white min-h-screen overflow-hidden">

      {/* BACKGROUND */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 8, repeat: Infinity }}
      >
        <div className="w-[500px] h-[500px] bg-indigo-500 opacity-30 blur-[120px] rounded-full" />
      </motion.div>

      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 12, repeat: Infinity }}
      >
        <div className="w-[800px] h-[800px] bg-purple-500 opacity-20 blur-[200px] rounded-full" />
      </motion.div>

      <div className="absolute top-0 left-0 w-full h-[300px] bg-gradient-to-b from-white/5 to-transparent" />

      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-10 py-4 backdrop-blur-md bg-black/30 border-b border-white/5">
        <h1 className="tracking-widest text-sm font-medium">EONA LABS</h1>
        <div className="flex items-center gap-6 text-sm text-gray-400">
          {t.nav.map((item) => (
            <a key={item} href="#" className="hover:text-white transition">{item}</a>
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
      <section className="relative flex flex-col items-center text-center justify-center h-screen px-6 z-10 pt-20">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-xs tracking-widest text-gray-400"
        >
          {t.badge}
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-7xl font-semibold leading-tight max-w-3xl"
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
          className="mt-6 text-gray-400 max-w-lg text-lg italic"
        >
          {t.heroSub}
        </motion.p>

        <motion.a
          href="https://wa.me/5215536582593"
          target="_blank"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          whileHover={{ scale: 1.05 }}
          className="mt-8 px-8 py-3.5 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500 shadow-lg shadow-purple-500/30 font-medium"
        >
          {t.heroCta}
        </motion.a>

      </section>

      {/* ABOUT */}
      <section className="relative z-10 px-10 py-24 max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-semibold mb-8"
        >
          {t.aboutTitle}
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="space-y-5 text-gray-400 leading-relaxed"
        >
          <p>{t.aboutP1}</p>
          <p>{t.aboutP2}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-10 grid sm:grid-cols-2 gap-6"
        >
          <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
            <p className="text-xs tracking-widest text-gray-500 mb-2">{t.aboutTargetLabel.toUpperCase()}</p>
            <p className="text-sm text-gray-300 leading-relaxed">{t.aboutTarget}</p>
          </div>
          <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
            <p className="text-xs tracking-widest text-gray-500 mb-2">{t.aboutFounder.toUpperCase()}</p>
            <p className="text-sm text-gray-300">{t.aboutFounderName}</p>
          </div>
        </motion.div>
      </section>

      {/* SERVICES */}
      <section className="relative px-10 py-24 text-center z-10">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-3xl font-semibold mb-4"
        >
          {t.servicesTitle}
        </motion.h2>
        <p className="text-gray-400">{t.servicesSub}</p>

        <div className="grid md:grid-cols-3 gap-6 mt-12 max-w-5xl mx-auto">
          {t.services.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className="p-8 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-purple-500/40 transition text-left"
            >
              {icons[i]}
              <h3 className="mb-2 text-lg font-medium">{item.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="relative z-10 px-10 py-20">
        <div className="max-w-2xl mx-auto p-px rounded-3xl bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-500">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="rounded-3xl bg-[#0e0e14] px-12 py-16 text-center"
          >
            <h2 className="text-3xl font-semibold mb-4">{t.ctaTitle}</h2>
            <p className="text-gray-400 mb-8">{t.ctaSub}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="https://wa.me/5215536582593"
                target="_blank"
                whileHover={{ scale: 1.05 }}
                className="inline-block px-8 py-3.5 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500 shadow-lg shadow-purple-500/30 font-medium"
              >
                {t.ctaWhatsApp}
              </motion.a>
              <motion.a
                href="mailto:hola@eonalabs.com"
                whileHover={{ scale: 1.05 }}
                className="inline-block px-8 py-3.5 rounded-xl border border-white/20 text-gray-300 hover:border-purple-500/60 hover:text-white transition font-medium"
              >
                {t.ctaEmail}
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="relative text-center py-10 text-gray-600 text-sm z-10">
        {t.footer}
      </footer>

      <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
    </main>
  );
}
