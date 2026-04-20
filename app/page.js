"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const translations = {
  en: {
    nav: ["Solutions", "About", "Contact"],
    badge: "AI · Web3 · Automation",
    heroLabel: "Technology Studio",
    heroTitle: ["Intelligent", "Systems for", "Modern Businesses"],
    heroSub: "We design AI, automation and Web3 infrastructure to help companies operate efficiently and scale faster.",
    heroCta: "Start a Project",
    heroSecondary: "See what we build",
    pullQuote: "We don't just deliver tools — we build systems that evolve with your business.",
    aboutTitle: "About",
    aboutP1: "Eona Labs is a technology studio focused on building intelligent digital systems for modern businesses. We design and implement solutions powered by artificial intelligence, automation, and Web3 infrastructure.",
    aboutP2: "Our approach combines strategy, engineering, and product thinking — from AI-driven workflows and data systems to decentralized applications and integrations.",
    aboutTargetLabel: "Who we work with",
    aboutTarget: "Small and medium-sized businesses that want to automate operations, implement AI, and future-proof their infrastructure.",
    aboutFounder: "Founder",
    aboutFounderName: "Leonel Vázquez",
    aboutFounderRole: "AI Automation Specialist",
    servicesLabel: "What we build",
    services: [
      { num: "01", title: "AI Automation", desc: "Automate workflows and decision-making with intelligent systems tailored to your operations." },
      { num: "02", title: "Web3 Development", desc: "Build decentralized apps, smart contracts, and blockchain integrations for modern infrastructure." },
      { num: "03", title: "Data Systems", desc: "Turn raw data into powerful business insights with custom pipelines and dashboards." },
    ],
    ctaTitle: "Ready to Scale?",
    ctaSub: "Let's build something powerful together.",
    ctaWhatsApp: "WhatsApp",
    ctaEmail: "hola@eonalabs.io",
    footer: "© 2026 Eona Labs · eonalabs.ai",
  },
  es: {
    nav: ["Soluciones", "Nosotros", "Contacto"],
    badge: "IA · Web3 · Automatización",
    heroLabel: "Estudio de Tecnología",
    heroTitle: ["Sistemas", "Inteligentes para", "Empresas Modernas"],
    heroSub: "Diseñamos IA, automatización e infraestructura Web3 para que tu empresa opere con eficiencia y escale más rápido.",
    heroCta: "Iniciar Proyecto",
    heroSecondary: "Ver qué construimos",
    pullQuote: "No solo entregamos herramientas — construimos sistemas que evolucionan con tu negocio.",
    aboutTitle: "Nosotros",
    aboutP1: "Eona Labs es un estudio de tecnología enfocado en construir sistemas digitales inteligentes para empresas modernas. Diseñamos e implementamos soluciones impulsadas por inteligencia artificial, automatización e infraestructura Web3.",
    aboutP2: "Nuestro enfoque combina estrategia, ingeniería y pensamiento de producto — desde flujos de trabajo con IA hasta aplicaciones descentralizadas e integraciones.",
    aboutTargetLabel: "Con quién trabajamos",
    aboutTarget: "Pequeñas y medianas empresas que desean automatizar operaciones, implementar IA y preparar su infraestructura para el futuro.",
    aboutFounder: "Fundador",
    aboutFounderName: "Leonel Vázquez",
    aboutFounderRole: "Especialista en Automatización con IA",
    servicesLabel: "Qué construimos",
    services: [
      { num: "01", title: "Automatización con IA", desc: "Automatiza flujos de trabajo y toma de decisiones con sistemas inteligentes adaptados a tus operaciones." },
      { num: "02", title: "Desarrollo Web3", desc: "Construye apps descentralizadas, contratos inteligentes e integraciones blockchain para infraestructura moderna." },
      { num: "03", title: "Sistemas de Datos", desc: "Convierte datos crudos en insights poderosos con pipelines y dashboards personalizados." },
    ],
    ctaTitle: "¿Listo para Escalar?",
    ctaSub: "Construyamos algo poderoso juntos.",
    ctaWhatsApp: "WhatsApp",
    ctaEmail: "hola@eonalabs.io",
    footer: "© 2026 Eona Labs · eonalabs.ai",
  },
};

function Divider() {
  return (
    <div className="relative w-full h-px my-2">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </div>
  );
}

function CustomCursor() {
  const cursorRef = useRef(null);
  const dotRef = useRef(null);

  useEffect(() => {
    const move = (e) => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${e.clientX - 16}px, ${e.clientY - 16}px)`;
      }
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${e.clientX - 3}px, ${e.clientY - 3}px)`;
      }
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <>
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-purple-500/40 pointer-events-none z-[9999] transition-transform duration-150 ease-out hidden md:block"
      />
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-1.5 h-1.5 rounded-full bg-purple-400 pointer-events-none z-[9999] hidden md:block"
      />
    </>
  );
}

export default function Home() {
  const [lang, setLang] = useState("en");
  const t = translations[lang];

  return (
    <main className="relative bg-[#080810] text-white min-h-screen overflow-hidden cursor-none">
      <CustomCursor />

      {/* HERO BACKGROUND IMAGE */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          src="/hero-bg.png"
          alt=""
          className="w-full h-full object-cover opacity-60"
          style={{ objectPosition: "center top" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#080810]/30 via-[#080810]/20 to-[#080810]" />
      </div>

      {/* BACKGROUND ORBS */}
      <motion.div
        className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-indigo-600 opacity-10 blur-[150px] rounded-full pointer-events-none"
        animate={{ x: [0, 30, 0], y: [0, 20, 0] }}
        transition={{ duration: 14, repeat: Infinity }}
      />
      <motion.div
        className="absolute top-[30%] right-[-15%] w-[500px] h-[500px] bg-purple-600 opacity-10 blur-[180px] rounded-full pointer-events-none"
        animate={{ x: [0, -20, 0], y: [0, 30, 0] }}
        transition={{ duration: 18, repeat: Infinity }}
      />

      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-8 md:px-14 py-5 backdrop-blur-md bg-[#080810]/60 border-b border-white/5">
        <span className="text-xs tracking-[0.25em] font-semibold text-white/90">EONA LABS</span>
        <div className="flex items-center gap-8 text-sm text-gray-400">
          {t.nav.map((item) => (
            <a key={item} href="#" className="hover:text-white transition-colors duration-200 hidden md:block">{item}</a>
          ))}
          <button
            onClick={() => setLang(lang === "en" ? "es" : "en")}
            className="px-3 py-1 rounded-md border border-white/10 text-white/50 hover:border-purple-500/50 hover:text-white transition text-xs tracking-widest"
          >
            {lang === "en" ? "ES" : "EN"}
          </button>
        </div>
      </nav>

      {/* HERO — asimétrico */}
      <section className="relative min-h-screen flex items-center z-10 pt-24 px-8 md:px-14">
        <div className="w-full max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

          {/* Left */}
          <div>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="text-xs tracking-[0.2em] text-purple-400 mb-6 uppercase"
            >
              {t.heroLabel}
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight"
            >
              {t.heroTitle[0]}<br />
              {t.heroTitle[1]}<br />
              <span className="bg-gradient-to-r from-purple-400 via-indigo-400 to-blue-400 text-transparent bg-clip-text">
                {t.heroTitle[2]}
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-8 text-gray-400 max-w-md leading-relaxed"
            >
              {t.heroSub}
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-10 flex items-center gap-4 flex-wrap"
            >
              <a
                href="https://wa.me/5215536582593"
                target="_blank"
                className="px-7 py-3.5 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500 shadow-lg shadow-purple-500/20 font-semibold text-sm hover:opacity-90 transition"
              >
                {t.heroCta}
              </a>
              <a href="#services" className="text-sm text-gray-400 hover:text-white transition flex items-center gap-2">
                {t.heroSecondary}
                <span className="text-purple-400">↓</span>
              </a>
            </motion.div>
          </div>

          {/* Right — elemento visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="hidden md:flex items-center justify-center"
          >
            <div className="relative w-72 h-72">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-indigo-500/20 to-purple-500/20 border border-white/10 animate-pulse" />
              <div className="absolute inset-8 rounded-full bg-gradient-to-br from-indigo-500/10 to-purple-500/10 border border-white/5" />
              <div className="absolute inset-16 rounded-full bg-gradient-to-br from-indigo-600/20 to-purple-600/20 border border-white/10" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-6xl font-black bg-gradient-to-br from-purple-400 to-indigo-400 text-transparent bg-clip-text opacity-80">E</span>
              </div>
              {/* Orbiting dot */}
              <motion.div
                className="absolute top-4 left-1/2 w-2 h-2 rounded-full bg-purple-400"
                animate={{ rotate: 360 }}
                transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                style={{ transformOrigin: "0 128px" }}
              />
            </div>
          </motion.div>

        </div>
      </section>

      <Divider />

      {/* PULL QUOTE */}
      <section className="relative z-10 px-8 md:px-14 py-20 max-w-7xl mx-auto">
        <motion.blockquote
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl md:text-4xl font-semibold leading-snug text-white/80 border-l-2 border-purple-500 pl-8"
        >
          "{t.pullQuote}"
        </motion.blockquote>
      </section>

      <Divider />

      {/* ABOUT */}
      <section className="relative z-10 px-8 md:px-14 py-24 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-16">
          <div>
            <p className="text-xs tracking-[0.2em] text-purple-400 uppercase mb-4">{t.aboutTitle}</p>
            <p className="text-gray-400 leading-relaxed text-sm">{t.aboutP1}</p>
            <p className="text-gray-400 leading-relaxed text-sm mt-4">{t.aboutP2}</p>
          </div>
          <div className="md:col-span-2 grid sm:grid-cols-2 gap-6 content-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-6 rounded-2xl border border-white/8 bg-white/3"
            >
              <p className="text-xs tracking-widest text-gray-500 mb-3 uppercase">{t.aboutTargetLabel}</p>
              <p className="text-sm text-gray-300 leading-relaxed">{t.aboutTarget}</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="p-6 rounded-2xl border border-white/8 bg-white/3"
            >
              <p className="text-xs tracking-widest text-gray-500 mb-3 uppercase">{t.aboutFounder}</p>
              <p className="text-white font-semibold">{t.aboutFounderName}</p>
              <p className="text-sm text-purple-400 mt-1">{t.aboutFounderRole}</p>
            </motion.div>
          </div>
        </div>
      </section>

      <Divider />

      {/* SERVICES — lista editorial */}
      <section id="services" className="relative z-10 px-8 md:px-14 py-24 max-w-7xl mx-auto">
        <p className="text-xs tracking-[0.2em] text-purple-400 uppercase mb-16">{t.servicesLabel}</p>

        <div className="space-y-0">
          {t.services.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group grid md:grid-cols-[120px_1fr_1fr] gap-8 py-10 border-b border-white/8 hover:border-purple-500/30 transition-colors duration-300"
            >
              <span className="text-5xl font-black text-white/10 group-hover:text-purple-500/30 transition-colors duration-300 leading-none">
                {item.num}
              </span>
              <h3 className="text-2xl font-semibold self-center group-hover:text-purple-300 transition-colors duration-300">
                {item.title}
              </h3>
              <p className="text-gray-400 self-center leading-relaxed text-sm">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      <Divider />

      {/* CTA */}
      <section className="relative z-10 px-8 md:px-14 py-24 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-3xl p-px bg-gradient-to-br from-indigo-500/50 via-purple-500/50 to-blue-500/50"
        >
          <div className="rounded-3xl bg-[#0d0d18] px-10 md:px-20 py-20 text-center relative">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/20 to-purple-900/20 rounded-3xl" />
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">{t.ctaTitle}</h2>
              <p className="text-gray-400 mb-10 max-w-md mx-auto">{t.ctaSub}</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://wa.me/5215536582593"
                  target="_blank"
                  className="px-8 py-4 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500 shadow-lg shadow-purple-500/30 font-semibold hover:opacity-90 transition"
                >
                  {t.ctaWhatsApp}
                </a>
                <a
                  href="mailto:hola@eonalabs.io"
                  className="px-8 py-4 rounded-xl border border-white/15 text-gray-300 hover:border-purple-500/50 hover:text-white transition font-semibold"
                >
                  {t.ctaEmail}
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* FOOTER */}
      <footer className="relative z-10 px-8 md:px-14 py-10 border-t border-white/5 flex justify-between items-center text-gray-600 text-xs">
        <span>{t.footer}</span>
        <span className="tracking-[0.2em] text-gray-700">EONA LABS</span>
      </footer>

      <div className="absolute inset-0 opacity-[0.025] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] pointer-events-none" />
    </main>
  );
}
