// Direction B — Orbital Web3
// Dark-contrast hero, 3D floating orb system, mono-forward, grid-based sections
// Flips dirA on its head: dark hero first, light services section, interactive orb

function DirectionB() {
  const [lang, setLang] = useLang();
  const [sent, setSent] = React.useState(false);
  const [active, setActive] = React.useState(0);
  const rootRef = React.useRef(null);
  useReveal();

  // Scroll within the artboard's own overflow container (not the page).
  // Using offsetTop avoids issues with parent pan/zoom transforms.
  const handleAnchor = (e, id) => {
    e.preventDefault();
    const root = rootRef.current;
    if (!root) return;
    const target = root.querySelector('#' + id);
    if (!target) return;
    // Find the nearest scrollable ancestor of the root (the artboard's inner div)
    let container = root.parentElement;
    while (container) {
      const cs = getComputedStyle(container);
      if (/(auto|scroll)/.test(cs.overflowY) && container.scrollHeight > container.clientHeight + 2) break;
      container = container.parentElement;
    }
    if (!container) return; // no scrollable wrapper — do nothing rather than break things
    // Sum offsetTop walking up until we hit the container
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
    <div className="dirB" ref={rootRef}>
      <style>{`
        .dirB {
          --bg: #0a0b0f;
          --bg-2: #0f1117;
          --paper: #f5f5f2;
          --paper-2: #eceae3;
          --ink: #0a0b0f;
          --line-d: rgba(255,255,255,0.1);
          --line-l: rgba(10,11,15,0.1);
          --mute-d: rgba(255,255,255,0.55);
          --mute-l: rgba(10,11,15,0.55);
          --accent: #00e5ff;
          --accent-2: #4d8cff;
          font-family: 'Space Grotesk', -apple-system, sans-serif;
          background: var(--paper);
          color: var(--ink);
          overflow-x: hidden;
        }
        .dirB .mono { font-family: 'JetBrains Mono', ui-monospace, monospace; }

        .dirB [data-reveal] { opacity: 0; transform: translateY(20px); transition: opacity .8s cubic-bezier(.2,.7,.2,1), transform .8s cubic-bezier(.2,.7,.2,1); }
        .dirB [data-reveal].in { opacity: 1; transform: translateY(0); }
        .dirB section[id] { scroll-margin-top: 100px; }
        .dirB [data-reveal-d="1"] { transition-delay: .08s; }
        .dirB [data-reveal-d="2"] { transition-delay: .16s; }
        .dirB [data-reveal-d="3"] { transition-delay: .24s; }
        .dirB [data-reveal-d="4"] { transition-delay: .32s; }

        /* NAV */
        .dirB .nav {
          position: sticky; top: 16px; z-index: 50;
          margin: 16px auto 0; width: calc(100% - 32px); max-width: 1380px;
          display: flex; align-items: center; justify-content: space-between;
          padding: 10px 14px 10px 20px;
          background: rgba(10,11,15,0.72); backdrop-filter: blur(14px); -webkit-backdrop-filter: blur(14px);
          border: 1px solid rgba(255,255,255,0.08); border-radius: 999px;
          color: var(--paper);
        }
        .dirB .nav-logo { display: flex; align-items: center; gap: 10px; font-weight: 600; letter-spacing: -.01em; font-size: 16px; }
        .dirB .nav-logo img { height: 28px; width: auto; display: block; }
        .dirB .footer-logo img { height: 64px; width: auto; display: block; }
        .dirB .nav-links { display: flex; gap: 24px; font-size: 14px; color: rgba(255,255,255,0.75); }
        .dirB .nav-links a { color: inherit; text-decoration: none; transition: color .2s; }
        .dirB .nav-links a:hover { color: var(--accent); }
        .dirB .nav-right { display: flex; align-items: center; gap: 10px; font-size: 13px; }
        .dirB .lang-toggle { display: inline-flex; border: 1px solid rgba(255,255,255,0.12); border-radius: 999px; padding: 2px; }
        .dirB .lang-toggle button { border: 0; background: transparent; padding: 3px 9px; border-radius: 999px; font: inherit; font-family: 'JetBrains Mono', monospace; font-size: 11px; cursor: pointer; color: rgba(255,255,255,0.55); }
        .dirB .lang-toggle button.on { background: var(--accent); color: var(--ink); }
        .dirB .btn-primary { display: inline-flex; align-items: center; gap: 8px; background: var(--accent); color: var(--ink); padding: 9px 16px; border-radius: 999px; text-decoration: none; font-size: 13px; font-weight: 500; border: 0; cursor: pointer; transition: transform .2s, box-shadow .2s; }
        .dirB .btn-primary:hover { transform: translateY(-1px); box-shadow: 0 8px 24px -8px var(--accent); }
        .dirB .btn-primary .arr { transition: transform .2s; }
        .dirB .btn-primary:hover .arr { transform: translateX(3px); }

        /* HERO — dark. Nav is sticky and floats; keep hero starting at 0 with
           enough top padding so the nav never covers the eyebrow. */
        .dirB .hero { position: relative; background: var(--bg); color: var(--paper); padding: 40px 32px 120px; overflow: hidden; }
        .dirB .hero-grid { position: absolute; inset: 0; background-image: linear-gradient(var(--line-d) 1px, transparent 1px), linear-gradient(90deg, var(--line-d) 1px, transparent 1px); background-size: 80px 80px; mask-image: radial-gradient(ellipse 70% 60% at 50% 50%, #000 40%, transparent 100%); pointer-events: none; opacity: .6; }
        .dirB .hero-noise { position: absolute; inset: 0; opacity: 0.04; pointer-events: none; mix-blend-mode: overlay; background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><filter id='n'><feTurbulence baseFrequency='0.9' /></filter><rect width='100%' height='100%' filter='url(%23n)' opacity='0.6'/></svg>"); }

        /* Orbital system */
        .dirB .orbital { position: absolute; top: 50%; right: -200px; width: 900px; height: 900px; transform: translateY(-50%); pointer-events: none; }
        .dirB .ring { position: absolute; top: 50%; left: 50%; border-radius: 50%; border: 1px solid rgba(255,255,255,0.08); }
        .dirB .ring.r1 { width: 280px; height: 280px; margin: -140px 0 0 -140px; animation: spin 40s linear infinite; }
        .dirB .ring.r2 { width: 500px; height: 500px; margin: -250px 0 0 -250px; animation: spin 70s linear infinite reverse; }
        .dirB .ring.r3 { width: 760px; height: 760px; margin: -380px 0 0 -380px; animation: spin 110s linear infinite; border-style: dashed; border-color: rgba(255,255,255,0.05); }
        @keyframes spin { to { transform: rotate(360deg); } }
        .dirB .ring::before { content: ''; position: absolute; top: -4px; left: 50%; margin-left: -4px; width: 8px; height: 8px; border-radius: 50%; background: var(--accent); box-shadow: 0 0 14px var(--accent); }
        .dirB .ring.r2::before { background: var(--accent-2); box-shadow: 0 0 14px var(--accent-2); }
        .dirB .ring.r3::before { background: #fff; opacity: .7; }
        .dirB .core { position: absolute; top: 50%; left: 50%; width: 140px; height: 140px; margin: -70px 0 0 -70px; border-radius: 50%; background: radial-gradient(circle at 35% 30%, #ffffff 0%, var(--accent) 30%, var(--accent-2) 60%, #1a1f3a 90%); box-shadow: 0 0 80px rgba(0,229,255,0.5), inset -20px -30px 60px rgba(0,0,0,0.4); animation: pulse 6s ease-in-out infinite; }
        @keyframes pulse { 0%,100% { transform: scale(1); } 50% { transform: scale(1.04); } }
        .dirB .core::after { content: ''; position: absolute; inset: -30px; border-radius: 50%; background: radial-gradient(circle, rgba(0,229,255,0.3), transparent 70%); filter: blur(12px); z-index: -1; }

        .dirB .hero-inner { position: relative; max-width: 1380px; margin: 0 auto; z-index: 2; }
        .dirB .eyebrow { font-family: 'JetBrains Mono', monospace; font-size: 11px; color: var(--mute-d); letter-spacing: .1em; text-transform: uppercase; display: inline-flex; align-items: center; gap: 10px; padding: 6px 12px; border: 1px solid var(--line-d); border-radius: 999px; margin-bottom: 40px; }
        .dirB .eyebrow .pulse-dot { width: 6px; height: 6px; border-radius: 50%; background: var(--accent); box-shadow: 0 0 8px var(--accent); animation: blink 2s ease-in-out infinite; }
        @keyframes blink { 0%,100% { opacity: 1; } 50% { opacity: .3; } }
        .dirB .hero h1 { font-family: 'Space Grotesk', sans-serif; font-weight: 500; font-size: clamp(48px, 9vw, 128px); line-height: 0.94; letter-spacing: -0.04em; margin: 0 0 40px; max-width: 900px; }
        .dirB .hero h1 .accent { color: var(--accent); }
        .dirB .hero h1 .ghost { color: rgba(255,255,255,0.4); }
        .dirB .hero-bottom { display: grid; grid-template-columns: 1.2fr 1fr; gap: 48px; align-items: end; max-width: 760px; margin-top: 48px; }
        .dirB .hero-sub { font-size: 17px; line-height: 1.55; color: rgba(255,255,255,0.7); max-width: 440px; }
        .dirB .hero-ctas { display: flex; flex-direction: column; gap: 10px; }
        .dirB .btn-ghost-d { display: inline-flex; align-items: center; gap: 8px; padding: 9px 16px; border-radius: 999px; border: 1px solid var(--line-d); background: transparent; font-family: 'Space Grotesk', sans-serif; font-size: 13px; color: var(--paper); text-decoration: none; transition: border-color .2s, color .2s; cursor: pointer; justify-content: center; }
        .dirB .btn-ghost-d:hover { border-color: var(--accent); color: var(--accent); }
        .dirB .hero-meta { font-family: 'JetBrains Mono', monospace; font-size: 11px; color: var(--mute-d); margin-top: 14px; display: flex; align-items: center; gap: 8px; }
        .dirB .hero-meta .live { width: 6px; height: 6px; border-radius: 50%; background: #1ac45a; box-shadow: 0 0 8px #1ac45a; animation: blink 2s infinite; }

        /* Ticker — at dark/light seam */
        .dirB .ticker { background: var(--bg); color: var(--paper); border-top: 1px solid var(--line-d); border-bottom: 1px solid var(--line-d); overflow: hidden; }
        .dirB .ticker-track { display: flex; animation: scrollB 35s linear infinite; gap: 40px; padding: 18px 0; white-space: nowrap; }
        @keyframes scrollB { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        .dirB .ticker-item { font-family: 'JetBrains Mono', monospace; font-size: 14px; letter-spacing: .04em; text-transform: uppercase; display: inline-flex; align-items: center; gap: 40px; color: rgba(255,255,255,0.8); }
        .dirB .ticker-item::after { content: '◉'; color: var(--accent); font-size: 10px; }

        /* Services — light with interactive left rail */
        .dirB .section { padding: 120px 32px; position: relative; }
        .dirB .section-head { max-width: 1380px; margin: 0 auto 72px; }
        .dirB .eyebrow-l { font-family: 'JetBrains Mono', monospace; font-size: 11px; color: var(--mute-l); letter-spacing: .1em; text-transform: uppercase; display: inline-flex; align-items: center; gap: 10px; padding: 6px 12px; border: 1px solid var(--line-l); border-radius: 999px; margin-bottom: 32px; }
        .dirB .eyebrow-l .pulse-dot { width: 6px; height: 6px; border-radius: 50%; background: var(--accent-2); }
        .dirB .section-head h2 { font-family: 'Space Grotesk', sans-serif; font-weight: 500; font-size: clamp(44px, 6.5vw, 88px); line-height: 0.98; letter-spacing: -0.035em; margin: 0 0 20px; max-width: 900px; }
        .dirB .section-head h2 .accent { color: var(--accent-2); }
        .dirB .section-head .sub { font-size: 17px; color: var(--mute-l); max-width: 520px; line-height: 1.5; }

        .dirB .svc-wrap { max-width: 1380px; margin: 0 auto; display: grid; grid-template-columns: 1fr 1.1fr; gap: 80px; align-items: start; }
        .dirB .svc-rail { position: sticky; top: 120px; display: flex; flex-direction: column; border-top: 1px solid var(--line-l); }
        .dirB .svc-rail button { all: unset; cursor: pointer; display: grid; grid-template-columns: 48px 1fr auto; gap: 16px; align-items: center; padding: 22px 0; border-bottom: 1px solid var(--line-l); transition: color .25s; font-family: 'Space Grotesk', sans-serif; }
        .dirB .svc-rail button .num { font-family: 'JetBrains Mono', monospace; font-size: 11px; color: var(--mute-l); transition: color .2s; }
        .dirB .svc-rail button .title { font-size: clamp(22px, 2.6vw, 32px); letter-spacing: -0.015em; font-weight: 500; }
        .dirB .svc-rail button .arr { opacity: 0; transition: opacity .2s, transform .2s; color: var(--accent-2); }
        .dirB .svc-rail button.active .num { color: var(--accent-2); }
        .dirB .svc-rail button.active .arr { opacity: 1; transform: translateX(4px); }
        .dirB .svc-rail button:hover { color: var(--accent-2); }

        .dirB .svc-panel { background: var(--ink); color: var(--paper); border-radius: 24px; padding: 36px; position: relative; overflow: hidden; min-height: 520px; }
        .dirB .svc-panel .panel-grid { position: absolute; inset: 0; background-image: linear-gradient(var(--line-d) 1px, transparent 1px), linear-gradient(90deg, var(--line-d) 1px, transparent 1px); background-size: 40px 40px; opacity: .4; pointer-events: none; }
        .dirB .svc-panel .panel-orb { position: absolute; width: 260px; height: 260px; border-radius: 50%; background: radial-gradient(circle at 35% 30%, #fff 0%, var(--accent) 25%, var(--accent-2) 55%, transparent 85%); opacity: .2; filter: blur(30px); right: -60px; bottom: -60px; pointer-events: none; }
        .dirB .svc-panel .panel-inner { position: relative; }
        .dirB .svc-panel .tag { font-family: 'JetBrains Mono', monospace; font-size: 11px; color: var(--accent); text-transform: uppercase; letter-spacing: .1em; margin-bottom: 20px; display: inline-flex; gap: 10px; align-items: center; }
        .dirB .svc-panel .tag::before { content: ''; width: 20px; height: 1px; background: var(--accent); }
        .dirB .svc-panel h3 { font-family: 'Space Grotesk', sans-serif; font-size: clamp(32px, 4vw, 48px); line-height: 1.02; letter-spacing: -0.025em; font-weight: 500; margin: 0 0 16px; }
        .dirB .svc-panel .desc { font-size: 16px; line-height: 1.55; color: rgba(255,255,255,0.75); max-width: 440px; margin-bottom: 40px; }
        .dirB .svc-panel .items { display: grid; gap: 12px; }
        .dirB .svc-panel .items .it { font-family: 'JetBrains Mono', monospace; font-size: 13px; padding: 14px 16px; border: 1px solid var(--line-d); border-radius: 10px; display: flex; align-items: center; gap: 12px; background: rgba(255,255,255,0.02); transition: border-color .2s, background .2s; }
        .dirB .svc-panel .items .it:hover { border-color: var(--accent); background: rgba(0,229,255,0.06); }
        .dirB .svc-panel .items .it::before { content: '▸'; color: var(--accent); }
        .dirB .svc-panel .footer-line { position: absolute; bottom: 24px; left: 36px; right: 36px; display: flex; justify-content: space-between; font-family: 'JetBrains Mono', monospace; font-size: 10px; color: rgba(255,255,255,0.4); text-transform: uppercase; letter-spacing: .08em; }

        /* Process — dark band */
        .dirB .process-band { background: var(--bg); color: var(--paper); padding: 120px 32px; position: relative; overflow: hidden; }
        .dirB .process-band .bg-grid { position: absolute; inset: 0; background-image: linear-gradient(var(--line-d) 1px, transparent 1px), linear-gradient(90deg, var(--line-d) 1px, transparent 1px); background-size: 80px 80px; opacity: .4; pointer-events: none; mask-image: linear-gradient(180deg, transparent, #000 30%, #000 70%, transparent); }
        .dirB .stats-band { max-width: 1380px; margin: 0 auto 80px; display: grid; grid-template-columns: repeat(4, 1fr); gap: 24px; padding-bottom: 60px; border-bottom: 1px solid var(--line-d); position: relative; }
        .dirB .stat .n { font-family: 'Space Grotesk', sans-serif; font-size: clamp(48px, 6vw, 80px); line-height: 1; letter-spacing: -0.04em; font-weight: 500; background: linear-gradient(135deg, var(--accent), var(--accent-2)); -webkit-background-clip: text; background-clip: text; color: transparent; }
        .dirB .stat .l { font-size: 14px; color: var(--mute-d); margin-top: 12px; max-width: 200px; line-height: 1.4; }
        .dirB .process-head { max-width: 1380px; margin: 0 auto 56px; position: relative; }
        .dirB .process-head h2 { font-family: 'Space Grotesk', sans-serif; font-weight: 500; font-size: clamp(44px, 6.5vw, 88px); line-height: 0.98; letter-spacing: -0.035em; margin: 0; }
        .dirB .process-head h2 .accent { color: var(--accent); }
        .dirB .steps { max-width: 1380px; margin: 0 auto; display: grid; grid-template-columns: repeat(4, 1fr); gap: 24px; position: relative; }
        .dirB .step { padding: 24px; border: 1px solid var(--line-d); border-radius: 16px; background: rgba(255,255,255,0.02); transition: border-color .2s, transform .2s; position: relative; }
        .dirB .step:hover { border-color: var(--accent); transform: translateY(-3px); }
        .dirB .step .n { font-family: 'JetBrains Mono', monospace; font-size: 11px; color: var(--accent); margin-bottom: 48px; display: flex; justify-content: space-between; }
        .dirB .step .n::after { content: '●'; font-size: 6px; }
        .dirB .step .t { font-family: 'Space Grotesk', sans-serif; font-size: 22px; line-height: 1.1; letter-spacing: -0.02em; font-weight: 500; margin-bottom: 10px; }
        .dirB .step .d { font-size: 13px; color: var(--mute-d); line-height: 1.55; }

        /* Contact — paper */
        .dirB .contact { padding: 120px 32px; background: var(--paper-2); position: relative; overflow: hidden; }
        .dirB .contact-orbital { position: absolute; width: 700px; height: 700px; border-radius: 50%; background: radial-gradient(circle at 35% 30%, var(--accent) 0%, var(--accent-2) 30%, transparent 70%); opacity: 0.1; filter: blur(40px); right: -200px; top: -200px; pointer-events: none; }
        .dirB .contact-ring { position: absolute; top: -50px; right: -50px; width: 500px; height: 500px; border-radius: 50%; border: 1px dashed rgba(10,11,15,0.15); animation: spin 90s linear infinite; pointer-events: none; }
        .dirB .contact-ring::before { content: ''; position: absolute; top: -5px; left: 50%; margin-left: -5px; width: 10px; height: 10px; border-radius: 50%; background: var(--accent-2); }
        .dirB .contact-inner { max-width: 1380px; margin: 0 auto; display: grid; grid-template-columns: 1fr 1fr; gap: 64px; position: relative; }
        .dirB .contact h2 { font-family: 'Space Grotesk', sans-serif; font-weight: 500; font-size: clamp(52px, 8vw, 112px); line-height: 0.95; letter-spacing: -0.04em; margin: 20px 0 24px; }
        .dirB .contact h2 .accent { color: var(--accent-2); }
        .dirB .contact .sub { font-size: 17px; color: var(--mute-l); line-height: 1.5; max-width: 440px; }
        .dirB .contact .or { font-family: 'JetBrains Mono', monospace; font-size: 12px; color: var(--mute-l); margin-top: 48px; }
        .dirB .contact .or a { color: var(--ink); text-decoration: underline; text-underline-offset: 3px; }
        .dirB .form { display: flex; flex-direction: column; gap: 18px; background: var(--ink); color: var(--paper); border-radius: 20px; padding: 32px; position: relative; overflow: hidden; }
        .dirB .form .form-grid-bg { position: absolute; inset: 0; background-image: linear-gradient(var(--line-d) 1px, transparent 1px), linear-gradient(90deg, var(--line-d) 1px, transparent 1px); background-size: 40px 40px; opacity: .3; pointer-events: none; }
        .dirB .form > * { position: relative; }
        .dirB .field { display: flex; flex-direction: column; gap: 6px; }
        .dirB .field label { font-family: 'JetBrains Mono', monospace; font-size: 10px; color: var(--mute-d); text-transform: uppercase; letter-spacing: .08em; }
        .dirB .field input, .dirB .field textarea { font-family: 'Space Grotesk', sans-serif; font-size: 15px; border: 0; border-bottom: 1px solid var(--line-d); background: transparent; padding: 10px 0; outline: 0; color: var(--paper); transition: border-color .2s; resize: none; }
        .dirB .field input::placeholder, .dirB .field textarea::placeholder { color: rgba(255,255,255,0.4); }
        .dirB .field input:focus, .dirB .field textarea:focus { border-color: var(--accent); }
        .dirB .form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 18px; }
        .dirB .form .btn-primary { justify-content: center; padding: 14px 20px; margin-top: 10px; width: 100%; }
        .dirB .sent { font-family: 'JetBrains Mono', monospace; font-size: 13px; color: var(--accent); text-align: center; padding: 14px; border: 1px dashed var(--accent); border-radius: 12px; margin-top: 4px; }

        /* Footer */
        .dirB .footer { padding: 60px 32px 32px; background: var(--bg); color: var(--paper); position: relative; overflow: hidden; }
        .dirB .footer-mark-hidden { display: none; font-family: 'Space Grotesk', sans-serif; font-size: clamp(96px, 16vw, 220px); font-weight: 500; letter-spacing: -0.05em; line-height: 0.9; margin: 0 auto 40px; max-width: 1380px; background: linear-gradient(180deg, rgba(255,255,255,0.8), rgba(255,255,255,0.1)); -webkit-background-clip: text; background-clip: text; color: transparent; }
        .dirB .footer-inner { max-width: 1380px; margin: 0 auto; display: grid; grid-template-columns: 2fr 1fr 1fr 1fr; gap: 40px; align-items: start; padding-top: 40px; border-top: 1px solid var(--line-d); }
        .dirB .footer-col { font-size: 13px; display: flex; flex-direction: column; gap: 8px; color: var(--mute-d); }
        .dirB .footer-col .h { font-family: 'JetBrains Mono', monospace; font-size: 10px; text-transform: uppercase; letter-spacing: .08em; color: rgba(255,255,255,0.4); margin-bottom: 8px; }
        .dirB .footer-col a { color: inherit; text-decoration: none; }
        .dirB .footer-col a:hover { color: var(--accent); }
        .dirB .footer-tag { font-size: 14px; max-width: 300px; line-height: 1.5; }
        .dirB .footer-bottom { max-width: 1380px; margin: 32px auto 0; padding-top: 20px; border-top: 1px solid var(--line-d); display: flex; justify-content: space-between; font-family: 'JetBrains Mono', monospace; font-size: 11px; color: rgba(255,255,255,0.4); }

        /* Mobile */
        @media (max-width: 760px) {
          .dirB .nav { padding: 8px 10px 8px 16px; margin-top: 10px; width: calc(100% - 20px); }
          .dirB .nav-links { display: none; }
          .dirB .nav-logo img { height: 24px; }
          .dirB .hero { padding: 48px 18px 80px; }
          .dirB .orbital { right: -380px; width: 700px; height: 700px; opacity: .5; }
          .dirB .hero-bottom { grid-template-columns: 1fr; gap: 28px; }
          .dirB .section { padding: 72px 18px; }
          .dirB .svc-wrap { grid-template-columns: 1fr; gap: 32px; }
          .dirB .svc-rail { position: static; }
          .dirB .svc-panel { padding: 24px; min-height: auto; }
          .dirB .svc-panel .footer-line { display: none; }
          .dirB .process-band { padding: 72px 18px; }
          .dirB .stats-band { grid-template-columns: 1fr 1fr; gap: 24px; }
          .dirB .steps { grid-template-columns: 1fr; }
          .dirB .contact { padding: 72px 18px; }
          .dirB .contact-inner { grid-template-columns: 1fr; gap: 40px; }
          .dirB .form { padding: 22px; }
          .dirB .form-row { grid-template-columns: 1fr; }
          .dirB .footer { padding: 40px 18px 24px; }
          .dirB .footer-inner { grid-template-columns: 1fr 1fr; gap: 28px; }
          .dirB .footer-bottom { flex-direction: column; gap: 10px; }
        }
      `}</style>

      {/* NAV */}
      <nav className="nav">
        <div className="nav-logo">
          <img src="eona/assets/eona-logo.png" alt="EonaLabs" />
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
              <a href="#services" className="btn-ghost-d" onClick={(e) => handleAnchor(e, 'services')}>{t.hero.ctaSecondary}</a>
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
      <section id="services" className="section">
        <div className="section-head">
          <div className="eyebrow-l" data-reveal><span className="pulse-dot" />{t.svcIntro.eyebrow}</div>
          <h2 data-reveal data-reveal-d="1">{t.svcIntro.title.split(' ').map((w, i, a) =>
            i === a.length - 1 ? <span className="accent" key={i}>{w}</span> : <span key={i}>{w} </span>
          )}</h2>
          <div className="sub" data-reveal data-reveal-d="2">{t.svcIntro.sub}</div>
        </div>
        <div className="svc-wrap">
          <div className="svc-rail" data-reveal>
            {t.services.map((s, i) => (
              <button key={i} className={active === i ? 'active' : ''} onClick={() => setActive(i)} onMouseEnter={() => setActive(i)}>
                <span className="num">{s.n}</span>
                <span className="title">{s.title}</span>
                <span className="arr">→</span>
              </button>
            ))}
          </div>
          <div className="svc-panel" data-reveal data-reveal-d="1">
            <div className="panel-grid" />
            <div className="panel-orb" />
            <div className="panel-inner">
              <div className="tag">{t.services[active].tag} · {t.services[active].n}</div>
              <h3>{t.services[active].title}</h3>
              <div className="desc">{t.services[active].desc}</div>
              <div className="items">
                {t.services[active].items.map((it, j) => <div className="it" key={j}>{it}</div>)}
              </div>
            </div>
            <div className="footer-line">
              <span>EONA / SVC-{t.services[active].n}</span>
              <span>{lang === 'es' ? 'Disponible ahora' : 'Available now'}</span>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS + STATS */}
      <section id="process" className="process-band">
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
          <h2 data-reveal data-reveal-d="1" style={{ marginTop: 24 }}>
            {t.process.title.split(' ').map((w, i, a) =>
              i === a.length - 1 ? <span className="accent" key={i}> {w}</span> : <span key={i}>{i > 0 ? ' ' : ''}{w}</span>
            )}
          </h2>
        </div>
        <div className="steps">
          {t.process.steps.map((st, i) => (
            <div className="step" key={i} data-reveal data-reveal-d={i + 1}>
              <div className="n"><span>{st.n}</span><span>STEP</span></div>
              <div className="t">{st.t}</div>
              <div className="d">{st.d}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="contact">
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
          <form className="form" data-reveal data-reveal-d="2" onSubmit={(e) => { e.preventDefault(); setSent(true); setTimeout(() => setSent(false), 4000); }}>
            <div className="form-grid-bg" />
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
            <button className="btn-primary" type="submit">{t.contact.send} →</button>
            {sent && <div className="sent">{t.contact.sent}</div>}
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
            <div className="h">Social</div>
            <a href="#">LinkedIn ↗</a>
            <a href="#">GitHub ↗</a>
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

window.DirectionB = DirectionB;
