// Logo explorations for EonaLabs
// Concept: minimalist line-mark, A monogram, orbital waves, geometric precision
// All use currentColor so they flip cleanly light/dark

function LogoV1({ size = 200, stroke = 2 }) {
  // Faithful interpretation of reference: A inside circle with side-wave arcs
  const s = size;
  return (
    <svg viewBox="0 0 200 200" width={s} height={s} fill="none" stroke="currentColor" strokeWidth={stroke} strokeLinecap="round">
      {/* outer wave arcs left/right */}
      <path d="M 42 60 A 70 70 0 0 0 42 140" />
      <path d="M 158 60 A 70 70 0 0 1 158 140" />
      <path d="M 30 50 A 80 80 0 0 0 30 150" />
      <path d="M 170 50 A 80 80 0 0 1 170 150" />
      {/* main circle */}
      <circle cx="100" cy="100" r="52" />
      {/* A monogram inside */}
      <path d="M 76 135 L 100 65 L 124 135" />
      <line x1="86" y1="110" x2="114" y2="110" />
    </svg>
  );
}

function LogoV2({ size = 200, stroke = 2 }) {
  // Cleaner geometric: A as equilateral triangle, one horizon line, one orbit ring
  return (
    <svg viewBox="0 0 200 200" width={size} height={size} fill="none" stroke="currentColor" strokeWidth={stroke} strokeLinecap="round" strokeLinejoin="round">
      <circle cx="100" cy="100" r="72" />
      {/* triangle A */}
      <path d="M 100 58 L 138 138 L 62 138 Z" />
      {/* horizon bar */}
      <line x1="50" y1="110" x2="150" y2="110" />
      {/* orbital dot */}
      <circle cx="172" cy="100" r="3.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

function LogoV3({ size = 200, stroke = 2 }) {
  // Ultra-minimal: just E + orbital dot (more abstract, 'planet' vibe)
  return (
    <svg viewBox="0 0 200 200" width={size} height={size} fill="none" stroke="currentColor" strokeWidth={stroke} strokeLinecap="round">
      <circle cx="100" cy="100" r="46" fill="currentColor" stroke="none" />
      <circle cx="100" cy="100" r="74" strokeDasharray="2 6" opacity="0.5" />
      <circle cx="174" cy="100" r="5" fill="currentColor" stroke="none" />
      <circle cx="100" cy="100" r="90" opacity="0.2" />
    </svg>
  );
}

function LogoV4({ size = 200, stroke = 2 }) {
  // Eon monogram: stylized E made from 3 horizontal lines inside a circle, orbital accent
  return (
    <svg viewBox="0 0 200 200" width={size} height={size} fill="none" stroke="currentColor" strokeWidth={stroke} strokeLinecap="round">
      <circle cx="100" cy="100" r="70" />
      {/* E as 3 lines, each progressively longer */}
      <line x1="72" y1="74" x2="128" y2="74" />
      <line x1="72" y1="100" x2="118" y2="100" />
      <line x1="72" y1="126" x2="128" y2="126" />
      {/* vertical spine */}
      <line x1="72" y1="70" x2="72" y2="130" />
      {/* orbital satellite */}
      <circle cx="100" cy="30" r="4" fill="currentColor" stroke="none" />
    </svg>
  );
}

function LogoV5({ size = 200, stroke = 2 }) {
  // Wordmark-integrated mark: the A monogram as just 2 lines forming an aperture
  // More "infinity / eon" feel
  return (
    <svg viewBox="0 0 200 200" width={size} height={size} fill="none" stroke="currentColor" strokeWidth={stroke} strokeLinecap="round" strokeLinejoin="round">
      {/* two concentric dashed orbits */}
      <ellipse cx="100" cy="100" rx="84" ry="40" strokeDasharray="1 5" opacity="0.4" />
      <ellipse cx="100" cy="100" rx="40" ry="84" strokeDasharray="1 5" opacity="0.4" transform="rotate(30 100 100)" />
      {/* core circle */}
      <circle cx="100" cy="100" r="28" />
      {/* A peak */}
      <path d="M 86 112 L 100 80 L 114 112" />
      <line x1="92" y1="100" x2="108" y2="100" />
    </svg>
  );
}

// Wordmark helper — the full lockup
function Wordmark({ Mark, size = 56, inline = false, accent = false }) {
  return (
    <div style={{ display: 'flex', flexDirection: inline ? 'row' : 'column', alignItems: inline ? 'center' : 'center', gap: inline ? 14 : 16 }}>
      <div style={{ color: accent ? '#00e5ff' : 'currentColor' }}><Mark size={size} stroke={1.8} /></div>
      <div style={{ textAlign: inline ? 'left' : 'center' }}>
        <div style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600, letterSpacing: '-0.02em', fontSize: inline ? 22 : 28, lineHeight: 1 }}>EonaLabs</div>
        {!inline && <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 9, letterSpacing: '0.15em', textTransform: 'uppercase', opacity: 0.55, marginTop: 8 }}>Technology Studio · AI & Web3</div>}
      </div>
    </div>
  );
}

function LogoCard({ title, desc, Mark, bg = '#fafaf8', fg = '#0a0b0f', accent = '#0066ff' }) {
  const [hover, setHover] = React.useState(false);
  return (
    <div style={{ background: bg, color: fg, border: '1px solid rgba(0,0,0,0.08)', borderRadius: 16, padding: 28, display: 'flex', flexDirection: 'column', gap: 20 }}>
      <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 10, letterSpacing: '0.12em', textTransform: 'uppercase', opacity: 0.5 }}>{title}</div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, minHeight: 180 }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px dashed rgba(0,0,0,0.1)', borderRadius: 10, color: fg, padding: 16 }}
             onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
          <Mark size={110} stroke={2} />
        </div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px dashed rgba(0,0,0,0.1)', borderRadius: 10, background: fg, color: bg, padding: 16 }}>
          <Mark size={110} stroke={2} />
        </div>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '12px 14px', border: '1px solid rgba(0,0,0,0.08)', borderRadius: 10 }}>
          <Mark size={28} stroke={2} />
          <div style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600, fontSize: 14, letterSpacing: '-0.01em' }}>EonaLabs</div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '12px 14px', border: '1px solid rgba(0,0,0,0.08)', borderRadius: 10, background: fg, color: bg }}>
          <span style={{ color: accent }}><Mark size={20} stroke={2.5} /></span>
          <div style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600, fontSize: 13, letterSpacing: '-0.01em' }}>EonaLabs</div>
        </div>
      </div>
      <div style={{ fontFamily: 'Inter Tight, sans-serif', fontSize: 13, lineHeight: 1.5, color: 'rgba(0,0,0,0.6)' }}>{desc}</div>
    </div>
  );
}

function LogoExplorations() {
  return (
    <div style={{ background: '#f5f5f2', minHeight: '100vh', padding: '48px 40px', fontFamily: 'Space Grotesk, sans-serif' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div style={{ marginBottom: 48 }}>
          <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', opacity: 0.55, marginBottom: 12 }}>EonaLabs · Logo exploration</div>
          <h1 style={{ fontSize: 44, fontWeight: 500, letterSpacing: '-0.03em', margin: 0, maxWidth: 720, lineHeight: 1.05 }}>Cinco variaciones minimalistas del mark.</h1>
          <p style={{ fontFamily: 'Inter Tight, sans-serif', fontSize: 15, color: 'rgba(0,0,0,0.6)', maxWidth: 640, marginTop: 16, lineHeight: 1.55 }}>
            Cada una se muestra en fondo claro y oscuro, en formato icono y con wordmark. Todas usan <code style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 13, background: 'rgba(0,0,0,0.06)', padding: '2px 6px', borderRadius: 4 }}>currentColor</code> para adaptarse a cualquier fondo.
          </p>
        </div>

        {/* Hero showcase — V2 big */}
        <div style={{ background: '#0a0b0f', color: '#f5f5f2', borderRadius: 24, padding: '64px 40px', marginBottom: 32, textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', width: 400, height: 400, borderRadius: '50%', background: 'radial-gradient(circle, rgba(0,229,255,0.15), transparent 70%)', top: -100, right: -100, filter: 'blur(30px)' }} />
          <div style={{ position: 'relative' }}>
            <div style={{ color: '#00e5ff' }}><LogoV2 size={200} stroke={1.8} /></div>
            <div style={{ fontSize: 48, fontWeight: 500, letterSpacing: '-0.035em', marginTop: 28 }}>EonaLabs</div>
            <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase', opacity: 0.55, marginTop: 12 }}>Technology Studio · AI & Web3</div>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: 20 }}>
          <LogoCard
            title="V1 · Portal (fiel a referencia)"
            desc="Tu logo de referencia pero con trazo más fino y proporciones geométricas. Arcos laterales como ondas, A dentro del círculo."
            Mark={LogoV1}
          />
          <LogoCard
            title="V2 · Horizonte (recomendado)"
            desc="Más limpio. Un solo círculo, un triángulo A puro, una línea horizonte, y un satélite orbital. Escalable, legible a 16px."
            Mark={LogoV2}
          />
          <LogoCard
            title="V3 · Planeta"
            desc="Más abstracto: core sólido + órbita punteada + satélite. Lee como planeta/sistema. Muy 'web3'."
            Mark={LogoV3}
          />
          <LogoCard
            title="V4 · E monograma"
            desc="E explícita (3 líneas) dentro del círculo, con punto satélite arriba. La E más literal y minimal."
            Mark={LogoV4}
          />
          <LogoCard
            title="V5 · Apertura"
            desc="Órbitas elípticas cruzadas sugieren movimiento e infinito. A en núcleo. El más 'editorial'."
            Mark={LogoV5}
          />
        </div>

        {/* Favicon / small scale test */}
        <div style={{ marginTop: 48, padding: 32, background: '#fff', borderRadius: 16, border: '1px solid rgba(0,0,0,0.08)' }}>
          <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 10, letterSpacing: '0.12em', textTransform: 'uppercase', opacity: 0.5, marginBottom: 20 }}>Escala pequeña · favicon test (16 / 24 / 32 / 48)</div>
          {[LogoV1, LogoV2, LogoV3, LogoV4, LogoV5].map((M, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 32, padding: '14px 0', borderTop: i === 0 ? 'none' : '1px solid rgba(0,0,0,0.06)' }}>
              <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 11, opacity: 0.5, width: 40 }}>V{i + 1}</div>
              <M size={16} stroke={2.2} />
              <M size={24} stroke={2} />
              <M size={32} stroke={1.8} />
              <M size={48} stroke={1.6} />
              <div style={{ display: 'flex', gap: 8, marginLeft: 'auto' }}>
                <div style={{ background: '#0a0b0f', padding: 10, borderRadius: 8, color: '#f5f5f2', display: 'flex' }}><M size={24} stroke={2} /></div>
                <div style={{ background: '#0a0b0f', padding: 10, borderRadius: 8, color: '#00e5ff', display: 'flex' }}><M size={24} stroke={2} /></div>
              </div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: 40, padding: 24, border: '1px dashed rgba(0,0,0,0.15)', borderRadius: 12, fontFamily: 'Inter Tight, sans-serif', fontSize: 14, color: 'rgba(0,0,0,0.7)', lineHeight: 1.6 }}>
          <strong style={{ color: '#0a0b0f' }}>Siguiente paso:</strong> dime qué variación te gusta (o si quieres mezclar, ej: "V2 pero con las órbitas de V5"), y la integro al sitio reemplazando el mark actual. También te puedo exportar un SVG standalone para usar en redes, GitHub, favicon, etc.
        </div>
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<LogoExplorations />);
