// EonaLabs Unified — Directions A + B fused with a light/dark theme toggle.
// Structure & layout from B (orbital hero, interactive services rail, dark band, paper contact).
// Light theme uses A's palette (paper #fafaf8, ink #0a0a0b, electric blue accent).
// Theme persisted in localStorage as eona_theme.

function DirectionUnified() {
  const [lang, setLang] = useLang();
  const [theme, setThemeState] = React.useState(() => {
    if (typeof window === 'undefined') return 'dark';
    return localStorage.getItem('eona_theme') || 'dark';
  });
  const setTheme = (t) => { setThemeState(t); try { localStorage.setItem('eona_theme', t); } catch (e) {} };
  const [sent, setSent] = React.useState(false);
  const [active, setActive] = React.useState(0);
  const rootRef = React.useRef(null);
  useReveal();

  const handleAnchor = (e, id) => {
    e.preventDefault();
    const root = rootRef.current; if (!root) return;
    const target = root.querySelector('#' + id); if (!target) return;
    let container = root.parentElement;
    while (container) {
      const cs = getComputedStyle(container);
      if (/(auto|scroll)/.test(cs.overflowY) && container.scrollHeight > container.clientHeight + 2) break;
      container = container.parentElement;
    }
    if (!container) return;
    let top = 0; let el = target;
    while (el && el !== container) { top += el.offsetTop; el = el.offsetParent; }
    container.scrollTo({ top: Math.max(0, top - 80), behavior: 'smooth' });
  };

  const t = {
    nav: COPY.nav[lang], hero: COPY.hero[lang], marquee: COPY.marquee[lang],
    svcIntro: COPY.servicesIntro[lang], services: COPY.services[lang],
    process: COPY.process[lang], stats: COPY.stats[lang],
    contact: COPY.contact[lang], footer: COPY.footer[lang],
  };
  const renderTitleAccent = (str) => {
    const words = str.split(' ');
    return words.map((w, i) => (
      i === words.length - 1
        ? <span className="accent" key={i}>{i > 0 ? ' ' : ''}{w}</span>
        : <span key={i}>{i > 0 ? ' ' : ''}{w}</span>
    ));
  };

  const isDark = theme === 'dark';
  const logoSrc = isDark ? 'eona/assets/eona-logo.png' : 'eona/assets/eona-logo-light.png';

  return (
    <div className="dirU" data-theme={theme} ref={rootRef}>
      <style>{`
        .dirU {
          --accent: #00e5ff;
          --accent-2: #4d8cff;
          font-family: 'Space Grotesk', -apple-system, sans-serif;
          overflow-x: hidden;
          transition: background-color .35s ease, color .35s ease;
        }
        /* DARK theme tokens */
        .dirU[data-theme="dark"] {
          --bg: #0a0b0f; --bg-2: #0f1117;
          --paper: #f5f5f2; --paper-2: #eceae3;
          --ink: #0a0b0f; --ink-on-paper: #f5f5f2;
          --line: rgba(255,255,255,0.1);
          --line-strong: rgba(255,255,255,0.2);
          --mute: rgba(255,255,255,0.55);
          --hero-bg: #0a0b0f; --hero-fg: #f5f5f2;
          --section-bg: #f5f5f2; --section-fg: #0a0b0f;
          --section-mute: rgba(10,11,15,0.55);
          --section-line: rgba(10,11,15,0.1);
          --band-bg: #0a0b0f; --band-fg: #f5f5f2;
          --contact-bg: #eceae3;
          --footer-bg: #0a0b0f; --footer-fg: #f5f5f2;
          --nav-bg: rgba(10,11,15,0.72); --nav-fg: #f5f5f2; --nav-border: rgba(255,255,255,0.08);
          background: var(--paper); color: var(--ink);
        }
        /* LIGHT theme tokens */
        .dirU[data-theme="light"] {
          --bg: #fafaf8; --bg-2: #f0efe9;
          --paper: #ffffff; --paper-2: #fafaf8;
          --ink: #0a0a0b; --ink-on-paper: #0a0a0b;
          --line: rgba(10,10,11,0.1);
          --line-strong: rgba(10,10,11,0.2);
          --mute: rgba(10,10,11,0.55);
          --accent: #0066ff; --accent-2: #00b8d4;
          --hero-bg: #fafaf8; --hero-fg: #0a0a0b;
          --section-bg: #ffffff; --section-fg: #0a0a0b;
          --section-mute: rgba(10,10,11,0.55);
          --section-line: rgba(10,10,11,0.08);
          --band-bg: #0a0a0b; --band-fg: #fafaf8;
          --contact-bg: #f0efe9;
          --footer-bg: #0a0a0b; --footer-fg: #fafaf8;
          --nav-bg: rgba(255,255,255,0.78); --nav-fg: #0a0a0b; --nav-border: rgba(10,10,11,0.08);
          background: var(--paper); color: var(--ink);
        }

        .dirU * { transition: border-color .3s, color .3s; }
        .dirU [data-reveal] { opacity: 0; transform: translateY(20px); transition: opacity .8s cubic-bezier(.2,.7,.2,1), transform .8s cubic-bezier(.2,.7,.2,1); }
        .dirU [data-reveal].in { opacity: 1; transform: translateY(0); }
        .dirU section[id] { scroll-margin-top: 100px; }
        .dirU [data-reveal-d="1"] { transition-delay: .08s; }
        .dirU [data-reveal-d="2"] { transition-delay: .16s; }
        .dirU [data-reveal-d="3"] { transition-delay: .24s; }
        .dirU [data-reveal-d="4"] { transition-delay: .32s; }

        /* NAV */
        .dirU .nav {
          position: sticky; top: 16px; z-index: 50;
          margin: 16px auto 0; width: calc(100% - 32px); max-width: 1380px;
          display: flex; align-items: center; justify-content: space-between;
          padding: 10px 14px 10px 20px;
          background: var(--nav-bg); backdrop-filter: blur(14px); -webkit-backdrop-filter: blur(14px);
          border: 1px solid var(--nav-border); border-radius: 999px;
          color: var(--nav-fg);
        }
        .dirU .nav-logo img { height: 28px; width: auto; display: block; }
        .dirU .nav-links { display: flex; gap: 24px; font-size: 14px; }
        .dirU .nav-links a { color: inherit; text-decoration: none; opacity: .75; transition: opacity .2s, color .2s; }
        .dirU .nav-links a:hover { color: var(--accent); opacity: 1; }
        .dirU .nav-right { display: flex; align-items: center; gap: 10px; font-size: 13px; }
        .dirU .lang-toggle { display: inline-flex; border: 1px solid var(--nav-border); border-radius: 999px; padding: 2px; }
        .dirU .lang-toggle button { border: 0; background: transparent; padding: 3px 9px; border-radius: 999px; font: inherit; font-family: 'JetBrains Mono', monospace; font-size: 11px; cursor: pointer; color: inherit; opacity: .6; }
        .dirU .lang-toggle button.on { background: var(--accent); color: var(--ink); opacity: 1; }
        .dirU .theme-toggle { display: inline-flex; align-items: center; justify-content: center; width: 34px; height: 34px; border-radius: 50%; border: 1px solid var(--nav-border); background: transparent; color: inherit; cursor: pointer; transition: transform .25s, border-color .2s; }
        .dirU .theme-toggle:hover { transform: rotate(20deg); border-color: var(--accent); color: var(--accent); }
        .dirU .theme-toggle svg { width: 16px; height: 16px; }
        .dirU .btn-primary { display: inline-flex; align-items: center; gap: 8px; background: var(--accent); color: #0a0b0f; padding: 9px 16px; border-radius: 999px; text-decoration: none; font-size: 13px; font-weight: 500; border: 0; cursor: pointer; transition: transform .2s, box-shadow .2s; }
        .dirU .btn-primary:hover { transform: translateY(-1px); box-shadow: 0 8px 24px -8px var(--accent); }
        .dirU .btn-primary .arr { transition: transform .2s; }
        .dirU .btn-primary:hover .arr { transform: translateX(3px); }

        /* HERO */
        .dirU .hero { position: relative; background: var(--hero-bg); color: var(--hero-fg); padding: 40px 32px 120px; overflow: hidden; }
        .dirU .hero-grid { position: absolute; inset: 0; background-image: linear-gradient(var(--line) 1px, transparent 1px), linear-gradient(90deg, var(--line) 1px, transparent 1px); background-size: 80px 80px; mask-image: radial-gradient(ellipse 70% 60% at 50% 50%, #000 40%, transparent 100%); pointer-events: none; opacity: .6; }
        .dirU .hero-noise { position: absolute; inset: 0; opacity: 0.04; pointer-events: none; mix-blend-mode: overlay; background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><filter id='n'><feTurbulence baseFrequency='0.9' /></filter><rect width='100%' height='100%' filter='url(%23n)' opacity='0.6'/></svg>"); }

        .dirU .orbital { position: absolute; top: 50%; right: -200px; width: 900px; height: 900px; transform: translateY(-50%); pointer-events: none; }
        .dirU .ring { position: absolute; top: 50%; left: 50%; border-radius: 50%; border: 1px solid var(--line); }
        .dirU .ring.r1 { width: 280px; height: 280px; margin: -140px 0 0 -140px; animation: spinU 40s linear infinite; }
        .dirU .ring.r2 { width: 500px; height: 500px; margin: -250px 0 0 -250px; animation: spinU 70s linear infinite reverse; }
        .dirU .ring.r3 { width: 760px; height: 760px; margin: -380px 0 0 -380px; animation: spinU 110s linear infinite; border-style: dashed; }
        @keyframes spinU { to { transform: rotate(360deg); } }
        .dirU .ring::before { content: ''; position: absolute; top: -4px; left: 50%; margin-left: -4px; width: 8px; height: 8px; border-radius: 50%; background: var(--accent); box-shadow: 0 0 14px var(--accent); }
        .dirU .ring.r2::before { background: var(--accent-2); box-shadow: 0 0 14px var(--accent-2); }
        .dirU .core { position: absolute; top: 50%; left: 50%; width: 140px; height: 140px; margin: -70px 0 0 -70px; border-radius: 50%; background: radial-gradient(circle at 35% 30%, #ffffff 0%, var(--accent) 30%, var(--accent-2) 60%, #1a1f3a 90%); box-shadow: 0 0 80px color-mix(in oklch, var(--accent) 50%, transparent), inset -20px -30px 60px rgba(0,0,0,0.4); animation: pulseU 6s ease-in-out infinite; }
        @keyframes pulseU { 0%,100% { transform: scale(1); } 50% { transform: scale(1.04); } }

        .dirU .hero-inner { position: relative; max-width: 1380px; margin: 0 auto; z-index: 2; }
        .dirU .eyebrow { font-family: 'JetBrains Mono', monospace; font-size: 11px; color: var(--mute); letter-spacing: .1em; text-transform: uppercase; display: inline-flex; align-items: center; gap: 10px; padding: 6px 12px; border: 1px solid var(--line); border-radius: 999px; margin-bottom: 40px; }
        .dirU .eyebrow .pulse-dot { width: 6px; height: 6px; border-radius: 50%; background: var(--accent); box-shadow: 0 0 8px var(--accent); animation: blinkU 2s ease-in-out infinite; }
        @keyframes blinkU { 0%,100% { opacity: 1; } 50% { opacity: .3; } }
        .dirU .hero h1 { font-family: 'Space Grotesk', sans-serif; font-weight: 500; font-size: clamp(48px, 9vw, 128px); line-height: 0.94; letter-spacing: -0.04em; margin: 0 0 40px; max-width: 900px; }
        .dirU .hero h1 .accent { color: var(--accent); }
        .dirU .hero h1 .ghost { opacity: 0.4; }
        .dirU .hero-bottom { display: grid; grid-template-columns: 1.2fr 1fr; gap: 48px; align-items: end; max-width: 760px; margin-top: 48px; }
        .dirU .hero-sub { font-size: 17px; line-height: 1.55; opacity: 0.7; max-width: 440px; }
        .dirU .hero-ctas { display: flex; flex-direction: column; gap: 10px; }
        .dirU .btn-ghost { display: inline-flex; align-items: center; gap: 8px; padding: 9px 16px; border-radius: 999px; border: 1px solid var(--line-strong); background: transparent; font-family: 'Space Grotesk', sans-serif; font-size: 13px; color: inherit; text-decoration: none; transition: border-color .2s, color .2s; cursor: pointer; justify-content: center; }
        .dirU .btn-ghost:hover { border-color: var(--accent); color: var(--accent); }
        .dirU .hero-meta { font-family: 'JetBrains Mono', monospace; font-size: 11px; color: var(--mute); margin-top: 14px; display: flex; align-items: center; gap: 8px; }
        .dirU .hero-meta .live { width: 6px; height: 6px; border-radius: 50%; background: #1ac45a; box-shadow: 0 0 8px #1ac45a; animation: blinkU 2s infinite; }

        /* Ticker */
        .dirU .ticker { background: var(--hero-bg); color: var(--hero-fg); border-top: 1px solid var(--line); border-bottom: 1px solid var(--line); overflow: hidden; }
        .dirU .ticker-track { display: flex; animation: scrollU 35s linear infinite; gap: 40px; padding: 18px 0; white-space: nowrap; }
        @keyframes scrollU { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        .dirU .ticker-item { font-family: 'JetBrains Mono', monospace; font-size: 14px; letter-spacing: .04em; text-transform: uppercase; display: inline-flex; align-items: center; gap: 40px; opacity: 0.8; }
        .dirU .ticker-item::after { content: '◉'; color: var(--accent); font-size: 10px; }

        /* Section (services light) */
        .dirU .section { padding: 120px 32px; position: relative; background: var(--section-bg); color: var(--section-fg); }
        .dirU .section-head { max-width: 1380px; margin: 0 auto 72px; }
        .dirU .eyebrow-l { font-family: 'JetBrains Mono', monospace; font-size: 11px; color: var(--section-mute); letter-spacing: .1em; text-transform: uppercase; display: inline-flex; align-items: center; gap: 10px; padding: 6px 12px; border: 1px solid var(--section-line); border-radius: 999px; margin-bottom: 32px; }
        .dirU .eyebrow-l .pulse-dot { width: 6px; height: 6px; border-radius: 50%; background: var(--accent-2); }
        .dirU .section-head h2 { font-family: 'Space Grotesk', sans-serif; font-weight: 500; font-size: clamp(44px, 6.5vw, 88px); line-height: 0.98; letter-spacing: -0.035em; margin: 0 0 20px; max-width: 900px; }
        .dirU .section-head h2 .accent { color: var(--accent-2); }
        .dirU .section-head .sub { font-size: 17px; color: var(--section-mute); max-width: 520px; line-height: 1.5; }

        .dirU .svc-wrap { max-width: 1380px; margin: 0 auto; display: grid; grid-template-columns: 1fr 1.1fr; gap: 80px; align-items: start; }
        .dirU .svc-rail { position: sticky; top: 120px; display: flex; flex-direction: column; border-top: 1px solid var(--section-line); }
        .dirU .svc-rail button { all: unset; cursor: pointer; display: grid; grid-template-columns: 48px 1fr auto; gap: 16px; align-items: center; padding: 22px 0; border-bottom: 1px solid var(--section-line); transition: color .25s; font-family: 'Space Grotesk', sans-serif; }
        .dirU .svc-rail button .num { font-family: 'JetBrains Mono', monospace; font-size: 11px; color: var(--section-mute); transition: color .2s; }
        .dirU .svc-rail button .title { font-size: clamp(22px, 2.6vw, 32px); letter-spacing: -0.015em; font-weight: 500; }
        .dirU .svc-rail button .arr { opacity: 0; transition: opacity .2s, transform .2s; color: var(--accent-2); }
        .dirU .svc-rail button.active .num { color: var(--accent-2); }
        .dirU .svc-rail button.active .arr { opacity: 1; transform: translateX(4px); }
        .dirU .svc-rail button:hover { color: var(--accent-2); }

        .dirU .svc-panel { background: var(--band-bg); color: var(--band-fg); border-radius: 24px; padding: 36px; position: relative; overflow: hidden; min-height: 520px; }
        .dirU .svc-panel .panel-grid { position: absolute; inset: 0; background-image: linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px); background-size: 40px 40px; opacity: .4; pointer-events: none; }
        .dirU .svc-panel .panel-orb { position: absolute; width: 260px; height: 260px; border-radius: 50%; background: radial-gradient(circle at 35% 30%, #fff 0%, var(--accent) 25%, var(--accent-2) 55%, transparent 85%); opacity: .2; filter: blur(30px); right: -60px; bottom: -60px; pointer-events: none; }
        .dirU .svc-panel .panel-inner { position: relative; }
        .dirU .svc-panel .tag { font-family: 'JetBrains Mono', monospace; font-size: 11px; color: var(--accent); text-transform: uppercase; letter-spacing: .1em; margin-bottom: 20px; display: inline-flex; gap: 10px; align-items: center; }
        .dirU .svc-panel .tag::before { content: ''; width: 20px; height: 1px; background: var(--accent); }
        .dirU .svc-panel h3 { font-family: 'Space Grotesk', sans-serif; font-size: clamp(32px, 4vw, 48px); line-height: 1.02; letter-spacing: -0.025em; font-weight: 500; margin: 0 0 16px; }
        .dirU .svc-panel .desc { font-size: 16px; line-height: 1.55; color: rgba(255,255,255,0.75); max-width: 440px; margin-bottom: 40px; }
        .dirU .svc-panel .items { display: grid; gap: 12px; }
        .dirU .svc-panel .items .it { font-family: 'JetBrains Mono', monospace; font-size: 13px; padding: 14px 16px; border: 1px solid rgba(255,255,255,.1); border-radius: 10px; display: flex; align-items: center; gap: 12px; background: rgba(255,255,255,0.02); transition: border-color .2s, background .2s; }
        .dirU .svc-panel .items .it:hover { border-color: var(--accent); background: rgba(0,229,255,0.06); }
        .dirU .svc-panel .items .it::before { content: '▸'; color: var(--accent); }
        .dirU .svc-panel .footer-line { position: absolute; bottom: 24px; left: 36px; right: 36px; display: flex; justify-content: space-between; font-family: 'JetBrains Mono', monospace; font-size: 10px; color: rgba(255,255,255,0.4); text-transform: uppercase; letter-spacing: .08em; }

        /* Process band — always dark */
        .dirU .process-band { background: var(--band-bg); color: var(--band-fg); padding: 120px 32px; position: relative; overflow: hidden; }
        .dirU .process-band .bg-grid { position: absolute; inset: 0; background-image: linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px); background-size: 80px 80px; opacity: .4; pointer-events: none; mask-image: linear-gradient(180deg, transparent, #000 30%, #000 70%, transparent); }
        .dirU .stats-band { max-width: 1380px; margin: 0 auto 80px; display: grid; grid-template-columns: repeat(4, 1fr); gap: 24px; padding-bottom: 60px; border-bottom: 1px solid rgba(255,255,255,.1); position: relative; }
        .dirU .stat .n { font-family: 'Space Grotesk', sans-serif; font-size: clamp(48px, 6vw, 80px); line-height: 1; letter-spacing: -0.04em; font-weight: 500; background: linear-gradient(135deg, var(--accent), var(--accent-2)); -webkit-background-clip: text; background-clip: text; color: transparent; }
        .dirU .stat .l { font-size: 14px; color: rgba(255,255,255,.55); margin-top: 12px; max-width: 200px; line-height: 1.4; }
        .dirU .process-head { max-width: 1380px; margin: 0 auto 56px; position: relative; }
        .dirU .process-head h2 { font-family: 'Space Grotesk', sans-serif; font-weight: 500; font-size: clamp(44px, 6.5vw, 88px); line-height: 0.98; letter-spacing: -0.035em; margin: 0; }
        .dirU .process-head h2 .accent { color: var(--accent); }
        .dirU .steps { max-width: 1380px; margin: 0 auto; display: grid; grid-template-columns: repeat(4, 1fr); gap: 24px; position: relative; }
        .dirU .step { padding: 24px; border: 1px solid rgba(255,255,255,.1); border-radius: 16px; background: rgba(255,255,255,0.02); transition: border-color .2s, transform .2s; position: relative; }
        .dirU .step:hover { border-color: var(--accent); transform: translateY(-3px); }
        .dirU .step .n { font-family: 'JetBrains Mono', monospace; font-size: 11px; color: var(--accent); margin-bottom: 48px; display: flex; justify-content: space-between; }
        .dirU .step .n::after { content: '●'; font-size: 6px; }
        .dirU .step .t { font-family: 'Space Grotesk', sans-serif; font-size: 22px; line-height: 1.1; letter-spacing: -0.02em; font-weight: 500; margin-bottom: 10px; }
        .dirU .step .d { font-size: 13px; color: rgba(255,255,255,.55); line-height: 1.55; }

        /* Contact */
        .dirU .contact { padding: 120px 32px; background: var(--contact-bg); color: var(--section-fg); position: relative; overflow: hidden; }
        .dirU .contact-orbital { position: absolute; width: 700px; height: 700px; border-radius: 50%; background: radial-gradient(circle at 35% 30%, var(--accent) 0%, var(--accent-2) 30%, transparent 70%); opacity: 0.1; filter: blur(40px); right: -200px; top: -200px; pointer-events: none; }
        .dirU .contact-ring { position: absolute; top: -50px; right: -50px; width: 500px; height: 500px; border-radius: 50%; border: 1px dashed var(--section-line); animation: spinU 90s linear infinite; pointer-events: none; }
        .dirU .contact-ring::before { content: ''; position: absolute; top: -5px; left: 50%; margin-left: -5px; width: 10px; height: 10px; border-radius: 50%; background: var(--accent-2); }
        .dirU .contact-inner { max-width: 1380px; margin: 0 auto; display: grid; grid-template-columns: 1fr 1fr; gap: 64px; position: relative; }
        .dirU .contact h2 { font-family: 'Space Grotesk', sans-serif; font-weight: 500; font-size: clamp(52px, 8vw, 112px); line-height: 0.95; letter-spacing: -0.04em; margin: 20px 0 24px; }
        .dirU .contact h2 .accent { color: var(--accent-2); }
        .dirU .contact .sub { font-size: 17px; color: var(--section-mute); line-height: 1.5; max-width: 440px; }
        .dirU .contact .or { font-family: 'JetBrains Mono', monospace; font-size: 12px; color: var(--section-mute); margin-top: 48px; }
        .dirU .contact .or a { color: var(--section-fg); text-decoration: underline; text-underline-offset: 3px; }
        .dirU .form { display: flex; flex-direction: column; gap: 18px; background: var(--band-bg); color: var(--band-fg); border-radius: 20px; padding: 32px; position: relative; overflow: hidden; }
        .dirU .form .form-grid-bg { position: absolute; inset: 0; background-image: linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px); background-size: 40px 40px; opacity: .3; pointer-events: none; }
        .dirU .form > * { position: relative; }
        .dirU .field { display: flex; flex-direction: column; gap: 6px; }
        .dirU .field label { font-family: 'JetBrains Mono', monospace; font-size: 10px; color: rgba(255,255,255,.55); text-transform: uppercase; letter-spacing: .08em; }
        .dirU .field input, .dirU .field textarea { font-family: 'Space Grotesk', sans-serif; font-size: 15px; border: 0; border-bottom: 1px solid rgba(255,255,255,.1); background: transparent; padding: 10px 0; outline: 0; color: var(--band-fg); transition: border-color .2s; resize: none; }
        .dirU .field input::placeholder, .dirU .field textarea::placeholder { color: rgba(255,255,255,0.4); }
        .dirU .field input:focus, .dirU .field textarea:focus { border-color: var(--accent); }
        .dirU .form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 18px; }
        .dirU .form .btn-primary { justify-content: center; padding: 14px 20px; margin-top: 10px; width: 100%; }
        .dirU .sent { font-family: 'JetBrains Mono', monospace; font-size: 13px; color: var(--accent); text-align: center; padding: 14px; border: 1px dashed var(--accent); border-radius: 12px; margin-top: 4px; }

        /* Footer — always dark */
        .dirU .footer { padding: 60px 32px 32px; background: var(--footer-bg); color: var(--footer-fg); position: relative; overflow: hidden; }
        .dirU .footer-logo img { height: 64px; width: auto; display: block; }
        .dirU .footer-inner { max-width: 1380px; margin: 0 auto; display: grid; grid-template-columns: 2fr 1fr 1fr 1fr; gap: 40px; align-items: start; padding-top: 40px; border-top: 1px solid rgba(255,255,255,.1); }
        .dirU .footer-col { font-size: 13px; display: flex; flex-direction: column; gap: 8px; color: rgba(255,255,255,.55); }
        .dirU .footer-col .h { font-family: 'JetBrains Mono', monospace; font-size: 10px; text-transform: uppercase; letter-spacing: .08em; color: rgba(255,255,255,0.4); margin-bottom: 8px; }
        .dirU .footer-col a { color: inherit; text-decoration: none; }
        .dirU .footer-col a:hover { color: var(--accent); }
        .dirU .footer-tag { font-size: 14px; max-width: 300px; line-height: 1.5; }
        .dirU .footer-bottom { max-width: 1380px; margin: 32px auto 0; padding-top: 20px; border-top: 1px solid rgba(255,255,255,.1); display: flex; justify-content: space-between; font-family: 'JetBrains Mono', monospace; font-size: 11px; color: rgba(255,255,255,0.4); }

        /* Mobile */
        @media (max-width: 760px) {
          .dirU .nav { padding: 8px 8px 8px 14px; margin-top: 10px; width: calc(100% - 20px); gap: 8px; }
          .dirU .nav-links { display: none; }
          .dirU .nav-logo img { height: 22px; }
          .dirU .hero { padding: 48px 18px 80px; }
          .dirU .orbital { right: -380px; width: 700px; height: 700px; opacity: .5; }
          .dirU .hero-bottom { grid-template-columns: 1fr; gap: 28px; }
          .dirU .section { padding: 72px 18px; }
          .dirU .svc-wrap { grid-template-columns: 1fr; gap: 32px; }
          .dirU .svc-rail { position: static; }
          .dirU .svc-panel { padding: 24px; min-height: auto; }
          .dirU .svc-panel .footer-line { display: none; }
          .dirU .process-band { padding: 72px 18px; }
          .dirU .stats-band { grid-template-columns: 1fr 1fr; gap: 24px; }
          .dirU .steps { grid-template-columns: 1fr; }
          .dirU .contact { padding: 72px 18px; }
          .dirU .contact-inner { grid-template-columns: 1fr; gap: 40px; }
          .dirU .form { padding: 22px; }
          .dirU .form-row { grid-template-columns: 1fr; }
          .dirU .footer { padding: 40px 18px 24px; }
          .dirU .footer-inner { grid-template-columns: 1fr 1fr; gap: 28px; }
          .dirU .footer-bottom { flex-direction: column; gap: 10px; }
        }
      `}</style>

      {/* NAV */}
      <nav className="nav">
        <div className="nav-logo">
          <img src={logoSrc} alt="EonaLabs" />
        </div>
        <div className="nav-links">
          <a href="#services" onClick={(e) => handleAnchor(e, 'services')}>{t.nav.services}</a>
          <a href="#process" onClick={(e) => handleAnchor(e, 'process')}>{t.nav.process}</a>
          <a href="#contact" onClick={(e) => handleAnchor(e, 'contact')}>{t.nav.contact}</a>
        </div>
        <div className="nav-right">
          <button className="theme-toggle" onClick={() => setTheme(isDark ? 'light' : 'dark')} aria-label="Toggle theme" title={isDark ? 'Modo claro' : 'Modo oscuro'}>
            {isDark ? (
              // Sun icon
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="4" />
                <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
              </svg>
            ) : (
              // Moon icon
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            )}
          </button>
          <div className="lang-toggle">
            <button className={lang === 'es' ? 'on' : ''} onClick={() => setLang('es')}>ES</button>
            <button className={lang === 'en' ? 'on' : ''} onClick={() => setLang('en')}>EN</button>
          </div>
          <a href="#contact" className="btn-primary" onClick={(e) => handleAnchor(e, 'contact')}>{t.nav.cta} <span className="arr">→</span></a>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero">
        <div className="hero-grid" />
        <div className="hero-noise" />
        <div className="orbital">
          <div className="core" />
          <div className="ring r1" />
          <div className="ring r2" />
          <div className="ring r3" />
        </div>
        <div className="hero-inner">
          <div className="eyebrow" data-reveal><span className="pulse-dot" />{t.hero.eyebrow}</div>
          <h1 data-reveal data-reveal-d="1">
            {t.hero.titleB[0]}<br />
            <span className="accent">{t.hero.titleB[1]}</span><br />
            <span className="ghost">{t.hero.titleB[2]}</span>
          </h1>
          <div className="hero-bottom">
            <div data-reveal data-reveal-d="2">
              <div className="hero-sub">{t.hero.sub}</div>
              <div className="hero-meta"><span className="live" />{t.hero.meta}</div>
            </div>
            <div className="hero-ctas" data-reveal data-reveal-d="3">
              <a href="#contact" className="btn-primary" onClick={(e) => handleAnchor(e, 'contact')}>{t.hero.cta} <span className="arr">→</span></a>
              <a href="#services" className="btn-ghost" onClick={(e) => handleAnchor(e, 'services')}>{t.hero.ctaSecondary}</a>
            </div>
          </div>
        </div>
      </section>

      {/* TICKER */}
      <div className="ticker">
        <div className="ticker-track">
          {[...t.marquee, ...t.marquee, ...t.marquee].map((m, i) => (
            <span className="ticker-item" key={i}>{m}</span>
          ))}
        </div>
      </div>

      {/* SERVICES */}
      <section className="section" id="services">
        <div className="section-head">
          <div className="eyebrow-l" data-reveal><span className="pulse-dot" />{t.svcIntro.eyebrow}</div>
          <h2 data-reveal data-reveal-d="1">{renderTitleAccent(t.svcIntro.title)}</h2>
          <div className="sub" data-reveal data-reveal-d="2">{t.svcIntro.sub}</div>
        </div>
        <div className="svc-wrap">
          <div className="svc-rail">
            {t.services.map((s, i) => (
              <button key={i} className={i === active ? 'active' : ''} onClick={() => setActive(i)} onMouseEnter={() => setActive(i)}>
                <span className="num">{s.n}</span>
                <span className="title">{s.title}</span>
                <span className="arr">→</span>
              </button>
            ))}
          </div>
          <div className="svc-panel">
            <div className="panel-grid" />
            <div className="panel-orb" />
            <div className="panel-inner">
              <div className="tag">{t.services[active].tag} · {t.services[active].n}</div>
              <h3>{t.services[active].title}</h3>
              <div className="desc">{t.services[active].desc}</div>
              <div className="items">
                {t.services[active].items.map((it, j) => (
                  <div className="it" key={j}>{it}</div>
                ))}
              </div>
            </div>
            <div className="footer-line">
              <span>EONA / SVC-{t.services[active].n}</span>
              <span>{lang === 'es' ? 'Disponible ahora' : 'Available now'}</span>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS BAND */}
      <section className="process-band" id="process">
        <div className="bg-grid" />
        <div className="stats-band">
          {t.stats.map((s, i) => (
            <div className="stat" key={i} data-reveal data-reveal-d={i + 1}>
              <div className="n">{s.n}</div>
              <div className="l">{s.l}</div>
            </div>
          ))}
        </div>
        <div className="process-head">
          <div className="eyebrow" data-reveal><span className="pulse-dot" />{t.process.eyebrow}</div>
          <h2 data-reveal data-reveal-d="1" style={{ marginTop: 24 }}>{renderTitleAccent(t.process.title)}</h2>
        </div>
        <div className="steps">
          {t.process.steps.map((s, i) => (
            <div className="step" key={i} data-reveal data-reveal-d={i + 1}>
              <div className="n"><span>{s.n}</span><span>STEP</span></div>
              <div className="t">{s.t}</div>
              <div className="d">{s.d}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section className="contact" id="contact">
        <div className="contact-orbital" />
        <div className="contact-ring" />
        <div className="contact-inner">
          <div>
            <div className="eyebrow-l" data-reveal><span className="pulse-dot" />{t.contact.eyebrow}</div>
            <h2 data-reveal data-reveal-d="1">
              {t.contact.title[0]}<br />
              <span className="accent">{t.contact.title[1]}</span>
            </h2>
            <div className="sub" data-reveal data-reveal-d="2">{t.contact.sub}</div>
            <div className="or" data-reveal data-reveal-d="3">
              {t.contact.or} <a href="mailto:hello@eonalabs.io">hello@eonalabs.io</a>
            </div>
          </div>
          <form className="form" onSubmit={(e) => { e.preventDefault(); setSent(true); }}>
            <div className="form-grid-bg" />
            <div className="form-row">
              <div className="field"><label>{t.contact.name}</label><input required placeholder={t.contact.namePh} /></div>
              <div className="field"><label>{t.contact.company}</label><input placeholder={t.contact.companyPh} /></div>
            </div>
            <div className="field"><label>{t.contact.email}</label><input type="email" required placeholder={t.contact.emailPh} /></div>
            <div className="field"><label>{t.contact.need}</label><textarea rows="3" required placeholder={t.contact.needPh} /></div>
            {sent ? (
              <div className="sent">{t.contact.sent}</div>
            ) : (
              <button className="btn-primary" type="submit">{t.contact.send} <span className="arr">→</span></button>
            )}
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-inner">
          <div className="footer-logo">
            <img src="eona/assets/eona-logo.png" alt="EonaLabs" />
            <div className="footer-tag" style={{ marginTop: 16 }}>{t.footer.tagline}</div>
          </div>
          <div className="footer-col">
            <div className="h">{t.nav.services}</div>
            <a href="#services" onClick={(e) => handleAnchor(e, 'services')}>{lang === 'es' ? 'Agentes IA' : 'AI Agents'}</a>
            <a href="#services" onClick={(e) => handleAnchor(e, 'services')}>{lang === 'es' ? 'Automatización' : 'Automation'}</a>
            <a href="#services" onClick={(e) => handleAnchor(e, 'services')}>{lang === 'es' ? 'Chatbots' : 'Chatbots'}</a>
          </div>
          <div className="footer-col">
            <div className="h">{lang === 'es' ? 'Contacto' : 'Contact'}</div>
            <a href="mailto:hello@eonalabs.io">hello@eonalabs.io</a>
            <a href="#contact" onClick={(e) => handleAnchor(e, 'contact')}>{t.nav.cta}</a>
          </div>
          <div className="footer-col">
            <div className="h">{lang === 'es' ? 'Social' : 'Social'}</div>
            <a href="#">LinkedIn ↗</a>
            <a href="#">GitHub ↗</a>
            <a href="https://eonalabs.io" target="_blank">eonalabs.io ↗</a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>{t.footer.rights}</span>
          <span>{t.footer.built}</span>
        </div>
      </footer>
    </div>
  );
}
