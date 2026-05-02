// Shared components and content for EonaLabs directions

// Bilingual content
const COPY = {
  nav: {
    es: { services: 'Servicios', process: 'Proceso', work: 'Casos', contact: 'Contacto', cta: 'Agendar llamada' },
    en: { services: 'Services', process: 'Process', work: 'Work', contact: 'Contact', cta: 'Book a call' },
  },
  hero: {
    es: {
      eyebrow: 'Agencia de IA · Automatizaciones',
      titleA: ['Automatiza lo que', 'te roba el tiempo.'],
      titleB: ['IA que', 'trabaja por ti', 'mientras duermes.'],
      sub: 'Diseñamos e implementamos agentes de IA y automatizaciones a medida para PyMEs que quieren crecer sin contratar más.',
      cta: 'Agendar llamada',
      ctaSecondary: 'Ver servicios',
      meta: 'Disponible · 2 slots este mes',
    },
    en: {
      eyebrow: 'AI Agency · Automations',
      titleA: ['Automate what', 'steals your time.'],
      titleB: ['AI that', 'works for you', 'while you sleep.'],
      sub: 'We design and ship custom AI agents and automations for SMBs that want to scale without hiring more people.',
      cta: 'Book a call',
      ctaSecondary: 'See services',
      meta: 'Available · 2 slots this month',
    },
  },
  marquee: {
    es: ['Agentes de IA', 'Automatización', 'Integraciones', 'Chatbots', 'Workflows', 'Ahorro de tiempo', 'ROI medible'],
    en: ['AI Agents', 'Automation', 'Integrations', 'Chatbots', 'Workflows', 'Time saved', 'Measurable ROI'],
  },
  servicesIntro: {
    es: { eyebrow: '01 — Servicios', title: 'Lo que construimos', sub: 'Soluciones a medida, implementadas en semanas — no meses.' },
    en: { eyebrow: '01 — Services', title: 'What we build', sub: 'Custom solutions, shipped in weeks — not months.' },
  },
  services: {
    es: [
      { n: '01', tag: 'Agentes', title: 'Agentes de IA a medida', desc: 'Asistentes que responden, califican y ejecutan tareas 24/7 usando los datos de tu negocio.', items: ['GPT / Claude integrados', 'RAG sobre tus documentos', 'Memoria persistente'] },
      { n: '02', tag: 'Automatización', title: 'Automatización de procesos', desc: 'Conectamos tus herramientas para que el trabajo repetitivo desaparezca.', items: ['n8n · Make · Zapier', 'APIs a medida', 'Flujos críticos sin errores'] },
      { n: '03', tag: 'Ventas', title: 'Automatización de ventas', desc: 'Pipeline inteligente: desde la prospección hasta el seguimiento post-venta.', items: ['Lead scoring con IA', 'Outreach personalizado', 'CRM sincronizado'] },
      { n: '04', tag: 'Soporte', title: 'Chatbots y atención', desc: 'Resuelve el 80% de consultas sin intervención humana y escala al equipo solo lo crítico.', items: ['WhatsApp · Web · Email', 'Handoff a humano', 'Métricas en vivo'] },
    ],
    en: [
      { n: '01', tag: 'Agents', title: 'Custom AI agents', desc: 'Assistants that reply, qualify, and execute tasks 24/7 using your business data.', items: ['GPT / Claude integrated', 'RAG over your docs', 'Persistent memory'] },
      { n: '02', tag: 'Automation', title: 'Process automation', desc: 'We connect your tools so repetitive work disappears.', items: ['n8n · Make · Zapier', 'Custom APIs', 'Error-free critical flows'] },
      { n: '03', tag: 'Sales', title: 'Sales automation', desc: 'Smart pipeline: from prospecting through post-sale follow-up.', items: ['AI lead scoring', 'Personalized outreach', 'CRM synced'] },
      { n: '04', tag: 'Support', title: 'Chatbots & support', desc: 'Resolve 80% of queries without humans and escalate only what matters.', items: ['WhatsApp · Web · Email', 'Human handoff', 'Live metrics'] },
    ],
  },
  process: {
    es: {
      eyebrow: '02 — Proceso',
      title: 'Cómo trabajamos',
      steps: [
        { n: '01', t: 'Discovery', d: 'Llamada de 30 min para entender tu operación, identificar cuellos de botella y priorizar dónde la IA genera más impacto.' },
        { n: '02', t: 'Diseño', d: 'Mapeamos los flujos, elegimos el stack y te entregamos una propuesta clara con tiempos y costos antes de tocar código.' },
        { n: '03', t: 'Implementación', d: 'Construimos e integramos en sprints de 1-2 semanas. Ves progreso real cada viernes, no al final del proyecto.' },
        { n: '04', t: 'Soporte', d: 'Monitoreo, optimización y mejoras continuas. Si algo falla, lo arreglamos antes de que tu equipo lo note.' },
      ],
    },
    en: {
      eyebrow: '02 — Process',
      title: 'How we work',
      steps: [
        { n: '01', t: 'Discovery', d: '30-min call to understand your ops, spot bottlenecks, and prioritize where AI creates the most impact.' },
        { n: '02', t: 'Design', d: 'We map flows, pick the stack, and deliver a clear proposal with timelines and costs before touching code.' },
        { n: '03', t: 'Implementation', d: 'We build and integrate in 1-2 week sprints. You see real progress every Friday, not only at the end.' },
        { n: '04', t: 'Support', d: 'Monitoring, optimization, and continuous improvements. If something breaks, we fix it before your team notices.' },
      ],
    },
  },
  stats: {
    es: [
      { n: '+40h', l: 'ahorradas/semana por cliente' },
      { n: '3x', l: 'más leads calificados' },
      { n: '<14d', l: 'del kickoff al primer release' },
      { n: '24/7', l: 'agentes activos' },
    ],
    en: [
      { n: '+40h', l: 'saved/week per client' },
      { n: '3x', l: 'more qualified leads' },
      { n: '<14d', l: 'from kickoff to first ship' },
      { n: '24/7', l: 'active agents' },
    ],
  },
  contact: {
    es: {
      eyebrow: '03 — Contacto',
      title: ['Agendemos una', 'llamada.'],
      sub: '30 minutos. Sin venta. Te decimos en concreto qué podemos automatizar y cuánto ahorrarías.',
      name: 'Nombre', company: 'Empresa', email: 'Email', need: '¿Qué te gustaría automatizar?',
      namePh: 'Tu nombre', companyPh: 'Tu empresa', emailPh: 'tu@empresa.com', needPh: 'Cuéntanos en una línea…',
      send: 'Agendar llamada', sent: '¡Listo! Te contactamos en 24h.',
      or: 'o escríbenos a',
    },
    en: {
      eyebrow: '03 — Contact',
      title: ["Let's book a", 'call.'],
      sub: '30 minutes. No pitch. We tell you exactly what we can automate and how much you would save.',
      name: 'Name', company: 'Company', email: 'Email', need: 'What would you like to automate?',
      namePh: 'Your name', companyPh: 'Your company', emailPh: 'you@company.com', needPh: 'Tell us in one line…',
      send: 'Book a call', sent: 'Done! We will reach out within 24h.',
      or: 'or email us at',
    },
  },
  footer: {
    es: { tagline: 'IA que trabaja por ti.', rights: '© 2026 EonaLabs. Todos los derechos reservados.', built: 'Construido con IA, obviamente.' },
    en: { tagline: 'AI that works for you.', rights: '© 2026 EonaLabs. All rights reserved.', built: 'Built with AI, obviously.' },
  },
};

// Language toggle hook
function useLang() {
  const [lang, setLang] = React.useState(() => localStorage.getItem('eona-lang') || 'es');
  React.useEffect(() => { localStorage.setItem('eona-lang', lang); }, [lang]);
  return [lang, setLang];
}

// Scroll reveal hook — adds 'in' class when element enters viewport
function useReveal() {
  React.useEffect(() => {
    const els = document.querySelectorAll('[data-reveal]');
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('in');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  });
}

// Logo mark — the only SVG we hand-draw: a simple geometric "E" orbit
function EonaMark({ size = 28, color = 'currentColor' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" style={{ display: 'block' }}>
      <circle cx="16" cy="16" r="14" stroke={color} strokeWidth="1.5" opacity="0.35" />
      <circle cx="16" cy="16" r="6" fill={color} />
      <circle cx="28" cy="16" r="2" fill={color} />
    </svg>
  );
}

Object.assign(window, { COPY, useLang, useReveal, EonaMark });
