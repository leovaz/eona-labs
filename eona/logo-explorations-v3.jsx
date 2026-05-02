// Logo variations round 3 — based on V7 (Infinity Loop) and V10 (Aperture)
// Explore proportions, stroke, fills, and combinations

// ============================================================
// V7 FAMILY — Infinity Loop with A-peak
// ============================================================

// V7a — Original clean
function V7a({ size = 200, stroke = 2.5 }) {
  return (
    <svg viewBox="0 0 200 200" width={size} height={size} fill="none" stroke="currentColor" strokeWidth={stroke} strokeLinecap="round" strokeLinejoin="round">
      <path d="M 40 100 Q 40 70 70 70 Q 90 70 100 100 Q 110 130 130 130 Q 160 130 160 100 Q 160 70 130 70 Q 110 70 100 100 Q 90 130 70 130 Q 40 130 40 100 Z" />
    </svg>
  );
}

// V7b — Heavier stroke, tighter loop (more badge-like)
function V7b({ size = 200, stroke = 6 }) {
  return (
    <svg viewBox="0 0 200 200" width={size} height={size} fill="none" stroke="currentColor" strokeWidth={stroke} strokeLinecap="round" strokeLinejoin="round">
      <path d="M 50 100 Q 50 75 72 75 Q 92 75 100 100 Q 108 125 128 125 Q 150 125 150 100 Q 150 75 128 75 Q 108 75 100 100 Q 92 125 72 125 Q 50 125 50 100 Z" />
    </svg>
  );
}

// V7c — Asymmetric: left loop smaller, right loop bigger (motion, growth)
function V7c({ size = 200, stroke = 2.5 }) {
  return (
    <svg viewBox="0 0 200 200" width={size} height={size} fill="none" stroke="currentColor" strokeWidth={stroke} strokeLinecap="round" strokeLinejoin="round">
      <path d="M 45 100 Q 45 78 65 78 Q 85 78 100 100 Q 115 122 140 122 Q 170 122 170 100 Q 170 70 140 70 Q 115 70 100 100 Q 85 130 65 130 Q 45 130 45 100 Z" />
      <circle cx="100" cy="100" r="3" fill="currentColor" stroke="none" />
    </svg>
  );
}

// V7d — Filled infinity, outlined A-peak punched through (negative A)
function V7d({ size = 200, stroke = 2 }) {
  return (
    <svg viewBox="0 0 200 200" width={size} height={size} fill="none">
      <defs>
        <mask id="v7d-mask">
          <rect width="200" height="200" fill="white" />
          <path d="M 92 112 L 100 85 L 108 112 Z" fill="black" />
          <line x1="94" y1="105" x2="106" y2="105" stroke="black" strokeWidth="2.5" strokeLinecap="round" />
        </mask>
      </defs>
      <path d="M 40 100 Q 40 70 70 70 Q 90 70 100 100 Q 110 130 130 130 Q 160 130 160 100 Q 160 70 130 70 Q 110 70 100 100 Q 90 130 70 130 Q 40 130 40 100 Z"
            fill="currentColor" mask="url(#v7d-mask)" />
    </svg>
  );
}

// V7e — Infinity + orbital ring (web3 echo of V3)
function V7e({ size = 200, stroke = 2.5 }) {
  return (
    <svg viewBox="0 0 200 200" width={size} height={size} fill="none" stroke="currentColor" strokeWidth={stroke} strokeLinecap="round" strokeLinejoin="round">
      <circle cx="100" cy="100" r="88" strokeDasharray="2 6" opacity="0.35" strokeWidth="1.5" />
      <path d="M 48 100 Q 48 74 72 74 Q 90 74 100 100 Q 110 126 128 126 Q 152 126 152 100 Q 152 74 128 74 Q 110 74 100 100 Q 90 126 72 126 Q 48 126 48 100 Z" />
      <circle cx="180" cy="100" r="4" fill="currentColor" stroke="none" />
    </svg>
  );
}

// ============================================================
// V10 FAMILY — Aperture / Iris
// ============================================================

function bladePath(cx, cy, r, startDeg, endDeg) {
  const s = (startDeg - 90) * Math.PI / 180;
  const e = (endDeg - 90) * Math.PI / 180;
  return `M ${cx} ${cy} L ${cx + r * Math.cos(s)} ${cy + r * Math.sin(s)} L ${cx + r * Math.cos(e)} ${cy + r * Math.sin(e)} Z`;
}

// V10a — Clean 3-blade aperture (forms an implicit triangle/A)
function V10a({ size = 200, stroke = 2 }) {
  return (
    <svg viewBox="0 0 200 200" width={size} height={size} fill="none" stroke="currentColor" strokeWidth={stroke} strokeLinejoin="round" strokeLinecap="round">
      <circle cx="100" cy="100" r="78" />
      <path d={bladePath(100, 100, 60, 0, 120)} opacity="0.25" fill="currentColor" stroke="none" />
      <path d={bladePath(100, 100, 60, 120, 240)} opacity="0.5" fill="currentColor" stroke="none" />
      <path d={bladePath(100, 100, 60, 240, 360)} opacity="0.8" fill="currentColor" stroke="none" />
      <circle cx="100" cy="100" r="10" fill="currentColor" stroke="none" />
    </svg>
  );
}

// V10b — Pure line aperture: triangle pinwheel
function V10b({ size = 200, stroke = 2 }) {
  return (
    <svg viewBox="0 0 200 200" width={size} height={size} fill="none" stroke="currentColor" strokeWidth={stroke} strokeLinecap="round" strokeLinejoin="round">
      <circle cx="100" cy="100" r="72" />
      {[0, 120, 240].map((a, i) => (
        <path key={i} d={bladePath(100, 100, 56, a, a + 90)} />
      ))}
      <circle cx="100" cy="100" r="5" fill="currentColor" stroke="none" />
    </svg>
  );
}

// V10c — Nested apertures (two iris rings, small eye)
function V10c({ size = 200, stroke = 2 }) {
  return (
    <svg viewBox="0 0 200 200" width={size} height={size} fill="none" stroke="currentColor" strokeWidth={stroke} strokeLinecap="round" strokeLinejoin="round">
      <circle cx="100" cy="100" r="82" />
      <circle cx="100" cy="100" r="54" opacity="0.4" />
      {[0, 60, 120, 180, 240, 300].map((a, i) => {
        const rad = (a - 90) * Math.PI / 180;
        return <line key={i} x1={100 + 54 * Math.cos(rad)} y1={100 + 54 * Math.sin(rad)} x2={100 + 82 * Math.cos(rad)} y2={100 + 82 * Math.sin(rad)} opacity="0.6" />;
      })}
      <circle cx="100" cy="100" r="22" fill="currentColor" stroke="none" />
    </svg>
  );
}

// V10d — Aperture with A monogram revealed inside
function V10d({ size = 200, stroke = 1.8 }) {
  return (
    <svg viewBox="0 0 200 200" width={size} height={size} fill="none" stroke="currentColor" strokeWidth={stroke} strokeLinecap="round" strokeLinejoin="round">
      <circle cx="100" cy="100" r="80" />
      {[30, 150, 270].map((a, i) => (
        <path key={i} d={bladePath(100, 100, 62, a, a + 80)} opacity={0.15 + i * 0.15} fill="currentColor" stroke="none" />
      ))}
      {/* A monogram on top */}
      <path d="M 80 130 L 100 72 L 120 130" strokeWidth={2.2} />
      <line x1="88" y1="112" x2="112" y2="112" strokeWidth={2.2} />
    </svg>
  );
}

// V10e — Aperture morphing into infinity (V7 × V10 hybrid)
function V10e({ size = 200, stroke = 2 }) {
  return (
    <svg viewBox="0 0 200 200" width={size} height={size} fill="none" stroke="currentColor" strokeWidth={stroke} strokeLinecap="round" strokeLinejoin="round">
      <circle cx="100" cy="100" r="82" strokeDasharray="1 6" opacity="0.4" />
      {/* 6 blades forming a flower/iris */}
      {[0, 60, 120, 180, 240, 300].map((a, i) => {
        const rad = (a - 90) * Math.PI / 180;
        return (
          <ellipse key={i}
            cx={100 + 32 * Math.cos(rad)} cy={100 + 32 * Math.sin(rad)}
            rx="28" ry="12"
            transform={`rotate(${a} ${100 + 32 * Math.cos(rad)} ${100 + 32 * Math.sin(rad)})`}
            opacity="0.5"
          />
        );
      })}
      <circle cx="100" cy="100" r="9" fill="currentColor" stroke="none" />
    </svg>
  );
}

function Card({ label, desc, Mark, accent = '#00e5ff' }) {
  return (
    <div style={{ background: '#fff', border: '1px solid rgba(0,0,0,0.08)', borderRadius: 16, padding: 22, display: 'flex', flexDirection: 'column', gap: 14, color: '#0a0b0f' }}>
      <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 10, letterSpacing: '0.12em', textTransform: 'uppercase', opacity: 0.55 }}>{label}</div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, minHeight: 160 }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px dashed rgba(0,0,0,0.1)', borderRadius: 10, padding: 12 }}>
          <Mark size={100} />
        </div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px dashed rgba(0,0,0,0.1)', borderRadius: 10, background: '#0a0b0f', color: accent, padding: 12 }}>
          <Mark size={100} />
        </div>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '8px 10px', border: '1px solid rgba(0,0,0,0.08)', borderRadius: 8 }}>
          <Mark size={22} />
          <div style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600, fontSize: 12 }}>EonaLabs</div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '8px 10px', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 8, background: '#0a0b0f', color: '#f5f5f2' }}>
          <span style={{ color: accent, display: 'flex' }}><Mark size={18} /></span>
          <div style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600, fontSize: 11 }}>EonaLabs</div>
        </div>
      </div>
      <div style={{ fontFamily: 'Inter Tight, sans-serif', fontSize: 12.5, lineHeight: 1.5, color: 'rgba(0,0,0,0.65)' }}>{desc}</div>
    </div>
  );
}

function App() {
  const v7 = [
    { M: V7a, t: 'V7a · Original', d: 'Trazo limpio, proporción equilibrada. El punto de partida.' },
    { M: V7b, t: 'V7b · Bold', d: 'Trazo grueso, loops más apretados. Se siente más "marca" — badge-like.' },
    { M: V7c, t: 'V7c · Asimétrico', d: 'Loop derecho más grande sugiere crecimiento / futuro. Dot central para presencia.' },
    { M: V7d, t: 'V7d · Sólido con A', d: 'Infinito sólido con una A calada (espacio negativo). Mucho impacto visual.' },
    { M: V7e, t: 'V7e · Orbital', d: 'Infinito + anillo orbital punteado + satélite. Fusiona el concepto con web3.' },
  ];
  const v10 = [
    { M: V10a, t: 'V10a · Tri-blade', d: 'Solo 3 aspas en opacidades graduadas. Minimalista pero con profundidad.' },
    { M: V10b, t: 'V10b · Pinwheel line', d: 'Pura línea: tres aspas geométricas. El más limpio y técnico.' },
    { M: V10c, t: 'V10c · Doble iris', d: 'Dos anillos concéntricos + rayos. Sugiere escaneo/observación.' },
    { M: V10d, t: 'V10d · Aperture + A', d: 'La apertura como marco y la A monograma encima. Lo mejor de dos conceptos.' },
    { M: V10e, t: 'V10e · Flor híbrida', d: 'Iris florido con anillo punteado. Más orgánico, menos mecánico.' },
  ];

  return (
    <div style={{ background: '#f5f5f2', minHeight: '100vh', padding: '40px 32px', fontFamily: 'Space Grotesk, sans-serif' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div style={{ marginBottom: 40 }}>
          <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', opacity: 0.55, marginBottom: 12 }}>Logo · Round 3 · Variations</div>
          <h1 style={{ fontSize: 40, fontWeight: 500, letterSpacing: '-0.03em', margin: 0, lineHeight: 1.05 }}>Variaciones sobre V7 y V10.</h1>
          <p style={{ fontFamily: 'Inter Tight, sans-serif', fontSize: 15, color: 'rgba(0,0,0,0.6)', maxWidth: 640, marginTop: 14, lineHeight: 1.55 }}>
            Cinco versiones de cada una explorando proporción, peso, fill/outline, y fusiones con otros conceptos.
          </p>
        </div>

        <div style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: 22, fontWeight: 500, letterSpacing: '-0.02em', marginBottom: 18, display: 'flex', alignItems: 'center', gap: 12 }}>
          <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 11, color: '#00a5c4', background: '#0a0b0f', padding: '4px 10px', borderRadius: 999 }}>V7 · Eon Loop</span>
          Infinito con pico A
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 16, marginBottom: 48 }}>
          {v7.map((m, i) => <Card key={i} label={m.t} desc={m.d} Mark={m.M} />)}
        </div>

        <div style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: 22, fontWeight: 500, letterSpacing: '-0.02em', marginBottom: 18, display: 'flex', alignItems: 'center', gap: 12 }}>
          <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 11, color: '#00a5c4', background: '#0a0b0f', padding: '4px 10px', borderRadius: 999 }}>V10 · Aperture</span>
          Iris / observación
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 16 }}>
          {v10.map((m, i) => <Card key={i} label={m.t} desc={m.d} Mark={m.M} />)}
        </div>

        <div style={{ marginTop: 40, padding: 22, border: '1px dashed rgba(0,0,0,0.15)', borderRadius: 12, fontFamily: 'Inter Tight, sans-serif', fontSize: 14, color: 'rgba(0,0,0,0.7)', lineHeight: 1.6 }}>
          Dime cuál(es) resuena(n) y la integramos al sitio. Si quieres combinar (ej: "V7d con el anillo punteado de V7e"), también lo hago.
        </div>
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
