// Logo explorations v2 — more adventurous concepts
// All minimalist but each with a distinct conceptual angle

// V6 — ECLIPSE: two offset circles forming a crescent (hidden E via negative space)
function LogoV6({ size = 200, stroke = 2 }) {
  return (
    <svg viewBox="0 0 200 200" width={size} height={size} fill="none">
      <defs>
        <mask id="eclipseMask">
          <rect width="200" height="200" fill="white" />
          <circle cx="118" cy="100" r="62" fill="black" />
        </mask>
      </defs>
      <circle cx="100" cy="100" r="62" fill="currentColor" mask="url(#eclipseMask)" />
      <circle cx="100" cy="100" r="86" stroke="currentColor" strokeWidth={stroke} strokeDasharray="1 6" opacity="0.5" fill="none" />
    </svg>
  );
}

// V7 — INFINITY LOOP: an A-shaped peak that loops into infinity (time + systems)
function LogoV7({ size = 200, stroke = 2.5 }) {
  return (
    <svg viewBox="0 0 200 200" width={size} height={size} fill="none" stroke="currentColor" strokeWidth={stroke} strokeLinecap="round" strokeLinejoin="round">
      {/* Stylized ∞ with an A-peak in the middle */}
      <path d="M 40 100 Q 40 70 70 70 Q 90 70 100 100 Q 110 130 130 130 Q 160 130 160 100 Q 160 70 130 70 Q 110 70 100 100 Q 90 130 70 130 Q 40 130 40 100 Z" />
    </svg>
  );
}

// V8 — PRISM: triangle refracting into rays (AI/generative)
function LogoV8({ size = 200, stroke = 2 }) {
  return (
    <svg viewBox="0 0 200 200" width={size} height={size} fill="none" stroke="currentColor" strokeWidth={stroke} strokeLinecap="round" strokeLinejoin="round">
      {/* Prism triangle */}
      <path d="M 100 50 L 150 140 L 50 140 Z" />
      {/* refracted rays emerging from right edge */}
      <line x1="150" y1="100" x2="180" y2="85" />
      <line x1="150" y1="110" x2="185" y2="105" />
      <line x1="150" y1="120" x2="180" y2="128" />
      {/* incoming ray */}
      <line x1="20" y1="115" x2="75" y2="115" strokeDasharray="4 3" opacity="0.5" />
    </svg>
  );
}

// V9 — NODE MESH: abstract network — 4 nodes forming an A shape
function LogoV9({ size = 200, stroke = 2 }) {
  const nodes = [
    { cx: 100, cy: 45, r: 7 },
    { cx: 55, cy: 145, r: 5 },
    { cx: 145, cy: 145, r: 5 },
    { cx: 100, cy: 110, r: 6 },
  ];
  return (
    <svg viewBox="0 0 200 200" width={size} height={size} fill="none" stroke="currentColor" strokeWidth={stroke} strokeLinecap="round">
      {/* connections */}
      <line x1="100" y1="45" x2="55" y2="145" />
      <line x1="100" y1="45" x2="145" y2="145" />
      <line x1="100" y1="45" x2="100" y2="110" />
      <line x1="55" y1="145" x2="100" y2="110" />
      <line x1="145" y1="145" x2="100" y2="110" />
      <line x1="55" y1="145" x2="145" y2="145" strokeDasharray="2 4" opacity="0.5" />
      {nodes.map((n, i) => <circle key={i} {...n} fill="currentColor" stroke="none" />)}
    </svg>
  );
}

// V10 — APERTURE: camera-like iris with A-angle opening (observation + AI vision)
function LogoV10({ size = 200, stroke = 1.8 }) {
  return (
    <svg viewBox="0 0 200 200" width={size} height={size} fill="none" stroke="currentColor" strokeWidth={stroke} strokeLinejoin="round" strokeLinecap="round">
      <circle cx="100" cy="100" r="72" />
      {/* 6 iris blades hinting at an A when overlapped */}
      {[0, 60, 120, 180, 240, 300].map((a, i) => (
        <path key={i}
          d={`M 100 100 L ${100 + 58 * Math.cos((a - 90) * Math.PI / 180)} ${100 + 58 * Math.sin((a - 90) * Math.PI / 180)} L ${100 + 58 * Math.cos((a - 30) * Math.PI / 180)} ${100 + 58 * Math.sin((a - 30) * Math.PI / 180)} Z`}
          opacity={i % 2 === 0 ? 1 : 0.35}
        />
      ))}
      {/* Inner hex core */}
      <circle cx="100" cy="100" r="14" fill="currentColor" stroke="none" />
    </svg>
  );
}

// V11 — HOURGLASS EON: two triangles tip-to-tip = A + inverted A = time
function LogoV11({ size = 200, stroke = 2.5 }) {
  return (
    <svg viewBox="0 0 200 200" width={size} height={size} fill="none" stroke="currentColor" strokeWidth={stroke} strokeLinecap="round" strokeLinejoin="round">
      {/* Upper triangle (A) */}
      <path d="M 100 40 L 150 100 L 50 100 Z" />
      {/* Lower triangle (inverted A) — ghosted */}
      <path d="M 50 100 L 150 100 L 100 160 Z" opacity="0.4" />
      {/* orbit around */}
      <circle cx="100" cy="100" r="80" strokeDasharray="1 8" opacity="0.35" />
      {/* Dot at pinch */}
      <circle cx="100" cy="100" r="4" fill="currentColor" stroke="none" />
    </svg>
  );
}

function LogoCard({ title, desc, Mark, accent = '#00e5ff' }) {
  return (
    <div style={{ background: '#fff', border: '1px solid rgba(0,0,0,0.08)', borderRadius: 16, padding: 24, display: 'flex', flexDirection: 'column', gap: 16, color: '#0a0b0f' }}>
      <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 10, letterSpacing: '0.12em', textTransform: 'uppercase', opacity: 0.55 }}>{title}</div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, minHeight: 180 }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px dashed rgba(0,0,0,0.1)', borderRadius: 10, padding: 16 }}>
          <Mark size={110} />
        </div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px dashed rgba(0,0,0,0.1)', borderRadius: 10, background: '#0a0b0f', color: accent, padding: 16 }}>
          <Mark size={110} />
        </div>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '10px 12px', border: '1px solid rgba(0,0,0,0.08)', borderRadius: 10 }}>
          <Mark size={26} />
          <div style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600, fontSize: 13, letterSpacing: '-0.01em' }}>EonaLabs</div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '10px 12px', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 10, background: '#0a0b0f', color: '#f5f5f2' }}>
          <span style={{ color: accent, display: 'flex' }}><Mark size={20} /></span>
          <div style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600, fontSize: 12, letterSpacing: '-0.01em' }}>EonaLabs</div>
        </div>
      </div>
      <div style={{ fontFamily: 'Inter Tight, sans-serif', fontSize: 13, lineHeight: 1.5, color: 'rgba(0,0,0,0.65)' }}>{desc}</div>
    </div>
  );
}

function LogoExplorationsV2() {
  const marks = [
    { M: LogoV6, t: 'V6 · Eclipse', d: 'Dos círculos desfasados crean una luna creciente y, en el espacio negativo, se lee una E. Silencioso, cósmico, muy memorable.' },
    { M: LogoV7, t: 'V7 · Eon Loop', d: 'Un símbolo de infinito con un pico A en el centro. Literalmente "sistemas que perduran". Una sola línea continua.' },
    { M: LogoV8, t: 'V8 · Prisma', d: 'Triángulo refractando luz. Metáfora: entrada de datos → IA → múltiples salidas. Muy apropiado para una agencia de IA.' },
    { M: LogoV9, t: 'V9 · Mesh', d: 'Red de nodos conectados formando una A. Habla de sistemas distribuidos, web3, e integraciones. El más tech-nativo.' },
    { M: LogoV10, t: 'V10 · Apertura', d: 'Iris de cámara / portal. Sugiere visión y observación algorítmica. Tiene "peso" visual sin ser pesado.' },
    { M: LogoV11, t: 'V11 · Eon', d: 'Reloj de arena formado por dos A (una invertida). Directo al concepto "eón/tiempo". La inferior ghosteada sugiere pasado/futuro.' },
  ];

  return (
    <div style={{ background: '#f5f5f2', minHeight: '100vh', padding: '48px 40px', fontFamily: 'Space Grotesk, sans-serif' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div style={{ marginBottom: 48 }}>
          <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', opacity: 0.55, marginBottom: 12 }}>EonaLabs · Logo exploration · Round 2</div>
          <h1 style={{ fontSize: 44, fontWeight: 500, letterSpacing: '-0.03em', margin: 0, maxWidth: 760, lineHeight: 1.05 }}>Seis conceptos nuevos — más atrevidos.</h1>
          <p style={{ fontFamily: 'Inter Tight, sans-serif', fontSize: 15, color: 'rgba(0,0,0,0.6)', maxWidth: 660, marginTop: 16, lineHeight: 1.55 }}>
            Salí de "A dentro de círculo" y probé metáforas más ricas: eclipses, prismas de IA, redes de nodos, iris de cámara, bucles de infinito, y relojes de arena. Todas mantienen el trazo minimalista pero cada una tiene un concepto distinto.
          </p>
        </div>

        {/* Hero: featured Mesh (V9) */}
        <div style={{ background: '#0a0b0f', color: '#f5f5f2', borderRadius: 24, padding: '56px 40px', marginBottom: 32, textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', width: 420, height: 420, borderRadius: '50%', background: 'radial-gradient(circle, rgba(0,229,255,0.16), transparent 70%)', top: -120, right: -120, filter: 'blur(30px)' }} />
          <div style={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 80, flexWrap: 'wrap' }}>
            <div style={{ color: '#00e5ff' }}><LogoV9 size={180} stroke={1.8} /></div>
            <div style={{ textAlign: 'left' }}>
              <div style={{ fontSize: 56, fontWeight: 500, letterSpacing: '-0.035em', lineHeight: 1 }}>EonaLabs</div>
              <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase', opacity: 0.55, marginTop: 14 }}>Technology Studio · AI & Web3</div>
            </div>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: 20 }}>
          {marks.map((m, i) => (
            <LogoCard key={i} title={m.t} desc={m.d} Mark={m.M} />
          ))}
        </div>

        {/* Scale test */}
        <div style={{ marginTop: 48, padding: 28, background: '#fff', borderRadius: 16, border: '1px solid rgba(0,0,0,0.08)' }}>
          <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 10, letterSpacing: '0.12em', textTransform: 'uppercase', opacity: 0.5, marginBottom: 20 }}>Test de escala pequeña</div>
          {marks.map((m, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 32, padding: '14px 0', borderTop: i === 0 ? 'none' : '1px solid rgba(0,0,0,0.06)' }}>
              <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 11, opacity: 0.5, width: 50 }}>V{i + 6}</div>
              <m.M size={16} />
              <m.M size={24} />
              <m.M size={32} />
              <m.M size={48} />
              <div style={{ display: 'flex', gap: 8, marginLeft: 'auto' }}>
                <div style={{ background: '#0a0b0f', padding: 10, borderRadius: 8, color: '#f5f5f2', display: 'flex' }}><m.M size={24} /></div>
                <div style={{ background: '#0a0b0f', padding: 10, borderRadius: 8, color: '#00e5ff', display: 'flex' }}><m.M size={24} /></div>
              </div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: 40, padding: 24, border: '1px dashed rgba(0,0,0,0.15)', borderRadius: 12, fontFamily: 'Inter Tight, sans-serif', fontSize: 14, color: 'rgba(0,0,0,0.7)', lineHeight: 1.6 }}>
          <strong style={{ color: '#0a0b0f' }}>Mi top pick:</strong> <strong>V9 · Mesh</strong> por lo literal que es con "sistemas inteligentes", o <strong>V6 · Eclipse</strong> si quieres algo más cósmico y con presencia visual fuerte. Dime cuál resuena (o mezcla) y lo integramos al sitio.
        </div>
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<LogoExplorationsV2 />);
