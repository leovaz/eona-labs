// Direction A — Editorial Minimalista
// Oversized display type, strict 12-col grid, floating orb accents, electric cyan
// Mostly white with one dark section for contrast

function DirectionA() {
  const [lang, setLang] = useLang();
  const [sent, setSent] = React.useState(false);
  const rootRef = React.useRef(null);
  useReveal();

  const handleAnchor = (e, id) => {
    e.preventDefault();
    const root = rootRef.current;
    if (!root) return;
    const target = root.querySelector('#' + id);
    if (!target) return;
    let container = root.parentElement;
    while (container) {
      const cs = getComputedStyle(container);
      if (/(auto|scroll)/.test(cs.overflowY) && container.scrollHeight > container.clientHeight + 2) break;
      container = container.parentElement;
    }
    if (!container) return;
    let top = 0;
    let el = target;
    while (el && el !== container) { top += el.offsetTop; el = el.offsetParent; }
    container.scrollTo({ top: Math.max(0, top - 80), behavior: 'smooth' });
  };

  const t = {
    nav: COPY.nav[lang],
    hero: COPY.hero[lang],
    marquee: COPY.marquee[lang],
    svcIntro: COPY.servicesIntro[lang],
    services: COPY.services[lang],
    process: COPY.process[lang],
    stats: COPY.stats[lang],
    contact: COPY.contact[lang],
    footer: COPY.footer[lang],
  };

  return (
    <div className="dirA" ref={rootRef}>
      <style>{`
        .dirA {
          --ink: #0a0a0b;
          --ink-2: #1a1a1c;
          --paper: #fafaf8;
          --paper-2: #f2f1ec;
          --line: rgba(10,10,11,0.12);
          --mute: rgba(10,10,11,0.55);
          --accent: #0066ff;
          --accent-2: #00d4ff;
          font-family: 'Instrument Serif', Georgia, serif;
          background: var(--paper);
          color: var(--ink);
          min-height: 100%;
          overflow-x: hidden;
        }
        .dirA .sans { font-family: 'Inter Tight', -apple-system, sans-serif; }
        .dirA .mono { font-family: 'JetBrains Mono', ui-monospace, monospace; }

        .dirA [data-reveal] { opacity: 0; transform: translateY(24px); transition: opacity .9s cubic-bezier(.2,.7,.2,1), transform .9s cubic-bezier(.2,.7,.2,1); }
        .dirA [data-reveal].in { opacity: 1; transform: translateY(0); }
        .dirA section[id] { scroll-margin-top: 80px; }
        .dirA [data-reveal-d="1"] { transition-delay: .08s; }
        .dirA [data-reveal-d="2"] { transition-delay: .16s; }
        .dirA [data-reveal-d="3"] { transition-delay: .24s; }
        .dirA [data-reveal-d="4"] { transition-delay: .32s; }

        /* Nav */
        .dirA .nav {
          position: sticky; top: 0; z-index: 50;
          display: flex; align-items: center; justify-content: space-between;
          padding: 18px 32px;
          background: rgba(250,250,248,0.78);
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
          border-bottom: 1px solid var(--line);
        }
        .dirA .nav-logo { display: flex; align-items: center; gap: 10px; font-family: 'Inter Tight', sans-serif; font-weight: 600; letter-spacing: -.01em; font-size: 17px; }
        .dirA .nav-logo img { height: 26px; width: auto; display: block; }
        .dirA .footer-logo img { height: 56px; width: auto; display: block; margin-bottom: 14px; }
        .dirA .nav-links { display: flex; gap: 28px; font-family: 'Inter Tight', sans-serif; font-size: 14px; color: var(--ink-2); }
        .dirA .nav-links a { color: inherit; text-decoration: none; transition: color .2s; }
        .dirA .nav-links a:hover { color: var(--accent); }
        .dirA .nav-right { display: flex; align-items: center; gap: 14px; font-family: 'Inter Tight', sans-serif; font-size: 13px; }
        .dirA .lang-toggle { display: inline-flex; border: 1px solid var(--line); border-radius: 999px; padding: 2px; background: transparent; }
        .dirA .lang-toggle button { border: 0; background: transparent; padding: 4px 10px; border-radius: 999px; font: inherit; font-size: 12px; cursor: pointer; color: var(--mute); }
        .dirA .lang-toggle button.on { background: var(--ink); color: var(--paper); }
        .dirA .btn-primary { display: inline-flex; align-items: center; gap: 8px; background: var(--ink); color: var(--paper); padding: 10px 18px; border-radius: 999px; text-decoration: none; font-family: 'Inter Tight', sans-serif; font-size: 13px; font-weight: 500; border: 0; cursor: pointer; transition: transform .2s, background .2s; }
        .dirA .btn-primary:hover { transform: translateY(-1px); background: var(--accent); }
        .dirA .btn-primary .dot { width: 6px; height: 6px; border-radius: 50%; background: var(--accent-2); box-shadow: 0 0 8px var(--accent-2); }

        /* Hero */
        .dirA .hero { position: relative; padding: 80px 32px 120px; overflow: hidden; }
        .dirA .hero-grid { position: absolute; inset: 0; background-image: linear-gradient(var(--line) 1px, transparent 1px), linear-gradient(90deg, var(--line) 1px, transparent 1px); background-size: 64px 64px; mask-image: radial-gradient(ellipse 80% 60% at 50% 40%, #000 40%, transparent 100%); pointer-events: none; }
        .dirA .orb { position: absolute; border-radius: 50%; filter: blur(40px); opacity: .4; pointer-events: none; }
        .dirA .orb-1 { width: 380px; height: 380px; background: radial-gradient(circle at 30% 30%, var(--accent-2), transparent 70%); top: -80px; right: -60px; animation: float 14s ease-in-out infinite; }
        .dirA .orb-2 { width: 280px; height: 280px; background: radial-gradient(circle at 60% 60%, var(--accent), transparent 70%); bottom: 80px; left: -40px; animation: float 18s ease-in-out infinite reverse; }
        @keyframes float { 0%,100% { transform: translate(0,0) scale(1); } 50% { transform: translate(24px,-32px) scale(1.06); } }

        .dirA .hero-inner { position: relative; max-width: 1360px; margin: 0 auto; }
        .dirA .eyebrow { font-family: 'JetBrains Mono', monospace; font-size: 12px; color: var(--mute); letter-spacing: .02em; display: inline-flex; align-items: center; gap: 8px; margin-bottom: 48px; }
        .dirA .eyebrow::before { content: ''; width: 6px; height: 6px; border-radius: 50%; background: var(--accent); box-shadow: 0 0 8px var(--accent-2); }
        .dirA .hero h1 { font-family: 'Instrument Serif', serif; font-weight: 400; font-size: clamp(56px, 10vw, 148px); line-height: 0.92; letter-spacing: -0.035em; margin: 0 0 40px; }
        .dirA .hero h1 .italic { font-style: italic; color: var(--accent); }
        .dirA .hero-bottom { display: grid; grid-template-columns: 1.3fr 1fr; gap: 48px; align-items: end; margin-top: 64px; }
        .dirA .hero-sub { font-family: 'Inter Tight', sans-serif; font-size: 18px; line-height: 1.5; max-width: 480px; color: var(--ink-2); }
        .dirA .hero-ctas { display: flex; gap: 12px; align-items: center; flex-wrap: wrap; }
        .dirA .btn-ghost { display: inline-flex; align-items: center; gap: 8px; padding: 10px 18px; border-radius: 999px; border: 1px solid var(--line); background: transparent; font-family: 'Inter Tight', sans-serif; font-size: 13px; color: var(--ink); text-decoration: none; transition: border-color .2s, color .2s; cursor: pointer; }
        .dirA .btn-ghost:hover { border-color: var(--ink); }
        .dirA .hero-meta { font-family: 'JetBrains Mono', monospace; font-size: 11px; color: var(--mute); margin-top: 16px; display: flex; align-items: center; gap: 6px; }
        .dirA .hero-meta .live { width: 6px; height: 6px; border-radius: 50%; background: #1ac45a; box-shadow: 0 0 8px #1ac45a; animation: pulse 2s ease-in-out infinite; }
        @keyframes pulse { 0%,100% { opacity: 1; } 50% { opacity: .4; } }

        /* Marquee */
        .dirA .marquee { border-top: 1px solid var(--line); border-bottom: 1px solid var(--line); overflow: hidden; background: var(--paper); }
        .dirA .marquee-track { display: flex; animation: scroll 40s linear infinite; gap: 48px; padding: 22px 0; white-space: nowrap; }
        @keyframes scroll { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        .dirA .marquee-item { font-family: 'Instrument Serif', serif; font-size: 28px; color: var(--ink); display: inline-flex; align-items: center; gap: 48px; }
        .dirA .marquee-item::after { content: '✦'; color: var(--accent); font-size: 14px; }

        /* Services */
        .dirA .section { padding: 120px 32px; position: relative; }
        .dirA .section-head { max-width: 1360px; margin: 0 auto 72px; display: grid; grid-template-columns: 1fr 2fr; gap: 48px; align-items: end; }
        .dirA .section-head h2 { font-family: 'Instrument Serif', serif; font-weight: 400; font-size: clamp(48px, 7vw, 96px); line-height: 0.95; letter-spacing: -0.03em; margin: 0; }
        .dirA .section-head .sub { font-family: 'Inter Tight', sans-serif; font-size: 18px; color: var(--ink-2); max-width: 420px; line-height: 1.5; }

        .dirA .services-list { max-width: 1360px; margin: 0 auto; border-top: 1px solid var(--line); }
        .dirA .service { display: grid; grid-template-columns: 80px 1fr 2fr 1.4fr; gap: 40px; padding: 40px 0; border-bottom: 1px solid var(--line); align-items: start; transition: background .3s; }
        .dirA .service:hover { background: linear-gradient(90deg, transparent, rgba(0,102,255,0.03), transparent); }
        .dirA .service .num { font-family: 'JetBrains Mono', monospace; font-size: 12px; color: var(--mute); padding-top: 14px; }
        .dirA .service .tag { font-family: 'JetBrains Mono', monospace; font-size: 11px; color: var(--accent); text-transform: uppercase; letter-spacing: .08em; padding-top: 14px; }
        .dirA .service .title { font-family: 'Instrument Serif', serif; font-size: clamp(32px, 3.6vw, 48px); line-height: 1; letter-spacing: -0.02em; font-weight: 400; margin: 0; }
        .dirA .service .title .arrow { display: inline-block; margin-left: 10px; opacity: 0; transform: translateX(-8px); transition: opacity .3s, transform .3s; color: var(--accent); }
        .dirA .service:hover .title .arrow { opacity: 1; transform: translateX(0); }
        .dirA .service .desc { font-family: 'Inter Tight', sans-serif; font-size: 15px; color: var(--ink-2); line-height: 1.5; }
        .dirA .service .items { font-family: 'JetBrains Mono', monospace; font-size: 12px; color: var(--mute); margin-top: 14px; display: flex; flex-direction: column; gap: 6px; }
        .dirA .service .items span { display: flex; align-items: center; gap: 8px; }
        .dirA .service .items span::before { content: '—'; color: var(--accent); }

        /* Stats / process — dark band */
        .dirA .dark { background: var(--ink); color: var(--paper); position: relative; overflow: hidden; }
        .dirA .dark .eyebrow { color: rgba(255,255,255,0.55); }
        .dirA .dark .eyebrow::before { background: var(--accent-2); box-shadow: 0 0 8px var(--accent-2); }
        .dirA .dark h2 { color: var(--paper); }
        .dirA .dark .sub { color: rgba(255,255,255,0.65); }
        .dirA .stats-band { max-width: 1360px; margin: 0 auto 80px; display: grid; grid-template-columns: repeat(4, 1fr); gap: 32px; padding-bottom: 60px; border-bottom: 1px solid rgba(255,255,255,0.1); }
        .dirA .stat .n { font-family: 'Instrument Serif', serif; font-size: clamp(48px, 6vw, 80px); line-height: 1; letter-spacing: -0.03em; color: var(--accent-2); }
        .dirA .stat .l { font-family: 'Inter Tight', sans-serif; font-size: 14px; color: rgba(255,255,255,0.65); margin-top: 10px; max-width: 200px; line-height: 1.4; }
        .dirA .steps { max-width: 1360px; margin: 0 auto; display: grid; grid-template-columns: repeat(4, 1fr); gap: 32px; }
        .dirA .step { border-top: 1px solid rgba(255,255,255,0.15); padding-top: 20px; }
        .dirA .step .n { font-family: 'JetBrains Mono', monospace; font-size: 11px; color: var(--accent-2); margin-bottom: 40px; }
        .dirA .step .t { font-family: 'Instrument Serif', serif; font-size: 28px; line-height: 1.05; letter-spacing: -0.02em; margin-bottom: 12px; }
        .dirA .step .d { font-family: 'Inter Tight', sans-serif; font-size: 14px; color: rgba(255,255,255,0.65); line-height: 1.55; }
        .dirA .dark-orb { position: absolute; width: 520px; height: 520px; border-radius: 50%; background: radial-gradient(circle at 40% 40%, rgba(0,212,255,0.32), transparent 65%); filter: blur(40px); right: -120px; top: -80px; pointer-events: none; }

        /* Contact */
        .dirA .contact { padding: 120px 32px; background: var(--paper-2); position: relative; overflow: hidden; }
        .dirA .contact-orb { position: absolute; width: 420px; height: 420px; border-radius: 50%; background: radial-gradient(circle, rgba(0,102,255,0.18), transparent 65%); filter: blur(40px); left: -80px; bottom: -80px; pointer-events: none; }
        .dirA .contact-inner { max-width: 1360px; margin: 0 auto; display: grid; grid-template-columns: 1.1fr 1fr; gap: 80px; position: relative; }
        .dirA .contact h2 { font-family: 'Instrument Serif', serif; font-weight: 400; font-size: clamp(56px, 8vw, 112px); line-height: 0.92; letter-spacing: -0.03em; margin: 20px 0 24px; }
        .dirA .contact h2 .italic { font-style: italic; color: var(--accent); }
        .dirA .contact .sub { font-family: 'Inter Tight', sans-serif; font-size: 17px; color: var(--ink-2); line-height: 1.5; max-width: 420px; }
        .dirA .contact .or { font-family: 'JetBrains Mono', monospace; font-size: 12px; color: var(--mute); margin-top: 40px; }
        .dirA .contact .or a { color: var(--ink); text-decoration: underline; text-underline-offset: 3px; }
        .dirA .form { display: flex; flex-direction: column; gap: 18px; background: var(--paper); border: 1px solid var(--line); border-radius: 20px; padding: 32px; }
        .dirA .field { display: flex; flex-direction: column; gap: 6px; }
        .dirA .field label { font-family: 'JetBrains Mono', monospace; font-size: 10px; color: var(--mute); text-transform: uppercase; letter-spacing: .08em; }
        .dirA .field input, .dirA .field textarea { font-family: 'Inter Tight', sans-serif; font-size: 15px; border: 0; border-bottom: 1px solid var(--line); background: transparent; padding: 10px 0; outline: 0; color: var(--ink); transition: border-color .2s; resize: none; }
        .dirA .field input:focus, .dirA .field textarea:focus { border-color: var(--accent); }
        .dirA .form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 18px; }
        .dirA .form .btn-primary { justify-content: center; padding: 14px 20px; margin-top: 10px; }
        .dirA .sent { font-family: 'Inter Tight', sans-serif; font-size: 14px; color: #1a9a4a; text-align: center; padding: 14px; border: 1px dashed #1a9a4a; border-radius: 12px; margin-top: 4px; }

        /* Footer */
        .dirA .footer { padding: 40px 32px 32px; border-top: 1px solid var(--line); background: var(--paper); }
        .dirA .footer-inner { max-width: 1360px; margin: 0 auto; display: grid; grid-template-columns: 2fr 1fr 1fr; gap: 40px; align-items: start; }
        .dirA .footer-tag { font-family: 'Instrument Serif', serif; font-size: 32px; line-height: 1; letter-spacing: -0.02em; max-width: 340px; }
        .dirA .footer-tag .italic { font-style: italic; color: var(--accent); }
        .dirA .footer-col { font-family: 'Inter Tight', sans-serif; font-size: 13px; display: flex; flex-direction: column; gap: 8px; color: var(--ink-2); }
        .dirA .footer-col .h { font-family: 'JetBrains Mono', monospace; font-size: 10px; text-transform: uppercase; letter-spacing: .08em; color: var(--mute); margin-bottom: 8px; }
        .dirA .footer-col a { color: inherit; text-decoration: none; }
        .dirA .footer-col a:hover { color: var(--accent); }
        .dirA .footer-bottom { max-width: 1360px; margin: 40px auto 0; padding-top: 20px; border-top: 1px solid var(--line); display: flex; justify-content: space-between; font-family: 'JetBrains Mono', monospace; font-size: 11px; color: var(--mute); }

        /* Mobile */
        @media (max-width: 760px) {
          .dirA .nav { padding: 14px 18px; }
          .dirA .nav-links { display: none; }
          .dirA .hero { padding: 48px 18px 80px; }
          .dirA .eyebrow { margin-bottom: 28px; }
          .dirA .hero-bottom { grid-template-columns: 1fr; gap: 28px; margin-top: 32px; }
          .dirA .section { padding: 72px 18px; }
          .dirA .section-head { grid-template-columns: 1fr; gap: 24px; margin-bottom: 40px; }
          .dirA .service { grid-template-columns: 1fr; gap: 10px; padding: 28px 0; }
          .dirA .service .num { padding-top: 0; }
          .dirA .service .tag { padding-top: 0; }
          .dirA .stats-band { grid-template-columns: 1fr 1fr; gap: 24px; padding-bottom: 40px; margin-bottom: 48px; }
          .dirA .steps { grid-template-columns: 1fr; gap: 20px; }
          .dirA .contact { padding: 72px 18px; }
          .dirA .contact-inner { grid-template-columns: 1fr; gap: 40px; }
          .dirA .form { padding: 22px; }
          .dirA .form-row { grid-template-columns: 1fr; }
          .dirA .footer-inner { grid-template-columns: 1fr; gap: 28px; }
          .dirA .footer-bottom { flex-direction: column; gap: 10px; }
          .dirA .marquee-item { font-size: 22px; }
        }
      `}</style>

      {/* NAV */}
      <nav className="nav">
        <div className="nav-logo">
          <img src="eona/assets/eona-logo-light.png" alt="EonaLabs" />
        </div>
        <div className="nav-links">
          <a href="#services" onClick={(e) => handleAnchor(e, 'services')}>{t.nav.services}</a>
          <a href="#process" onClick={(e) => handleAnchor(e, 'process')}>{t.nav.process}</a>
          <a href="#contact" onClick={(e) => handleAnchor(e, 'contact')}>{t.nav.contact}</a>
        </div>
        <div className="nav-right">
          <div className="lang-toggle">
            <button className={lang === 'es' ? 'on' : ''} onClick={() => setLang('es')}>ES</button>
            <button className={lang === 'en' ? 'on' : ''} onClick={() => setLang('en')}>EN</button>
          </div>
          <a href="#contact" className="btn-primary" onClick={(e) => handleAnchor(e, 'contact')}><span className="dot" />{t.nav.cta}</a>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero">
        <div className="hero-grid" />
        <div className="orb orb-1" />
        <div className="orb orb-2" />
        <div className="hero-inner">
          <div className="eyebrow" data-reveal>{t.hero.eyebrow}</div>
          <h1 data-reveal data-reveal-d="1">
            {t.hero.titleA[0]}<br />
            <span className="italic">{t.hero.titleA[1]}</span>
          </h1>
          <div className="hero-bottom">
            <div data-reveal data-reveal-d="2">
              <div className="hero-sub">{t.hero.sub}</div>
              <div className="hero-meta"><span className="live" />{t.hero.meta}</div>
            </div>
            <div className="hero-ctas" data-reveal data-reveal-d="3">
              <a href="#contact" className="btn-primary" onClick={(e) => handleAnchor(e, 'contact')}><span className="dot" />{t.hero.cta}</a>
              <a href="#services" className="btn-ghost" onClick={(e) => handleAnchor(e, 'services')}>{t.hero.ctaSecondary} →</a>
            </div>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="marquee">
        <div className="marquee-track">
          {[...t.marquee, ...t.marquee, ...t.marquee].map((m, i) => (
            <span className="marquee-item" key={i}>{m}</span>
          ))}
        </div>
      </div>

      {/* SERVICES */}
      <section id="services" className="section">
        <div className="section-head">
          <div>
            <div className="eyebrow" data-reveal>{t.svcIntro.eyebrow}</div>
            <h2 data-reveal data-reveal-d="1">{t.svcIntro.title}</h2>
          </div>
          <div className="sub" data-reveal data-reveal-d="2">{t.svcIntro.sub}</div>
        </div>
        <div className="services-list">
          {t.services.map((s, i) => (
            <div className="service" key={i} data-reveal data-reveal-d={(i % 3) + 1}>
              <div className="num">{s.n}</div>
              <div className="tag">{s.tag}</div>
              <h3 className="title">{s.title}<span className="arrow">→</span></h3>
              <div>
                <div className="desc">{s.desc}</div>
                <div className="items">
                  {s.items.map((it, j) => <span key={j}>{it}</span>)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* DARK BAND — stats + process */}
      <section id="process" className="section dark">
        <div className="dark-orb" />
        <div className="stats-band">
          {t.stats.map((s, i) => (
            <div className="stat" key={i} data-reveal data-reveal-d={i + 1}>
              <div className="n">{s.n}</div>
              <div className="l">{s.l}</div>
            </div>
          ))}
        </div>
        <div className="section-head">
          <div>
            <div className="eyebrow" data-reveal>{t.process.eyebrow}</div>
            <h2 data-reveal data-reveal-d="1">{t.process.title}</h2>
          </div>
        </div>
        <div className="steps">
          {t.process.steps.map((st, i) => (
            <div className="step" key={i} data-reveal data-reveal-d={i + 1}>
              <div className="n">{st.n}</div>
              <div className="t">{st.t}</div>
              <div className="d">{st.d}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="contact">
        <div className="contact-orb" />
        <div className="contact-inner">
          <div>
            <div className="eyebrow" data-reveal>{t.contact.eyebrow}</div>
            <h2 data-reveal data-reveal-d="1">
              {t.contact.title[0]}<br />
              <span className="italic">{t.contact.title[1]}</span>
            </h2>
            <div className="sub" data-reveal data-reveal-d="2">{t.contact.sub}</div>
            <div className="or" data-reveal data-reveal-d="3">
              {t.contact.or} <a href="mailto:hello@eonalabs.io">hello@eonalabs.io</a>
            </div>
          </div>
          <form className="form" data-reveal data-reveal-d="2" onSubmit={(e) => { e.preventDefault(); setSent(true); setTimeout(() => setSent(false), 4000); }}>
            <div className="form-row">
              <div className="field">
                <label>{t.contact.name}</label>
                <input type="text" placeholder={t.contact.namePh} required />
              </div>
              <div className="field">
                <label>{t.contact.company}</label>
                <input type="text" placeholder={t.contact.companyPh} />
              </div>
            </div>
            <div className="field">
              <label>{t.contact.email}</label>
              <input type="email" placeholder={t.contact.emailPh} required />
            </div>
            <div className="field">
              <label>{t.contact.need}</label>
              <textarea rows="3" placeholder={t.contact.needPh}></textarea>
            </div>
            <button className="btn-primary" type="submit"><span className="dot" />{t.contact.send}</button>
            {sent && <div className="sent">{t.contact.sent}</div>}
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-inner">
          <div className="footer-tag footer-logo">
            <img src="eona/assets/eona-logo-light.png" alt="EonaLabs" />
            <div style={{ marginTop: 12 }}>
              <span className="italic">{t.footer.tagline}</span>
            </div>
          </div>
          <div className="footer-col">
            <div className="h">{t.nav.services}</div>
            <a href="#services">{lang === 'es' ? 'Agentes de IA' : 'AI Agents'}</a>
            <a href="#services">{lang === 'es' ? 'Automatización' : 'Automation'}</a>
            <a href="#services">{lang === 'es' ? 'Chatbots' : 'Chatbots'}</a>
            <a href="#services">{lang === 'es' ? 'Integraciones' : 'Integrations'}</a>
          </div>
          <div className="footer-col">
            <div className="h">{lang === 'es' ? 'Contacto' : 'Contact'}</div>
            <a href="mailto:hello@eonalabs.io">hello@eonalabs.io</a>
            <a href="#contact">{t.nav.cta}</a>
            <a href="https://eonalabs.io" target="_blank">eonalabs.io ↗</a>
          </div>
        </div>
        <div className="footer-bottom">
          <div>{t.footer.rights}</div>
          <div>{t.footer.built}</div>
        </div>
      </footer>
    </div>
  );
}

window.DirectionA = DirectionA;
