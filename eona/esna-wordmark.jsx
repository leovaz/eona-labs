// ESNA wordmark — single continuous stroke, E+S forming an infinity loop, N, A
// Refined from hand-drawn sketch: geometric, minimal, precision

function EsnaV1({ height = 80, stroke = 6, color = 'currentColor' }) {
  // Faithful to sketch: E-loop as infinity, then N, then A
  // viewBox: 600x160, single continuous stroke
  return (
    <svg viewBox="0 0 600 160" height={height} width={height * (600 / 160)} fill="none" stroke={color} strokeWidth={stroke} strokeLinecap="round" strokeLinejoin="round">
      {/* E + S as infinity — one continuous path */}
      <path d="M 110 80
               Q 110 30 70 30
               Q 30 30 30 80
               Q 30 130 70 130
               Q 110 130 110 80
               Q 110 30 150 30
               Q 190 30 190 80
               Q 190 130 150 130
               Q 110 130 110 80 Z" />
      {/* N */}
      <path d="M 230 130 L 230 35 L 310 125 L 310 30" />
      {/* A */}
      <path d="M 350 130 L 400 30 L 450 130 M 368 95 L 432 95" />
    </svg>
  );
}

function EsnaV2({ height = 80, stroke = 5, color = 'currentColor' }) {
  // Cleaner: more condensed, thinner proportions
  return (
    <svg viewBox="0 0 540 140" height={height} width={height * (540 / 140)} fill="none" stroke={color} strokeWidth={stroke} strokeLinecap="round" strokeLinejoin="round">
      {/* Infinity (E+S) */}
      <path d="M 100 70
               C 100 30, 60 30, 40 30
               C 20 30, 20 110, 40 110
               C 60 110, 100 110, 100 70
               C 100 30, 140 30, 160 30
               C 180 30, 180 110, 160 110
               C 140 110, 100 110, 100 70 Z" />
      {/* N */}
      <path d="M 210 115 L 210 30 L 280 110 L 280 30" />
      {/* A */}
      <path d="M 320 115 L 365 30 L 410 115 M 335 85 L 395 85" />
    </svg>
  );
}

function EsnaV3({ height = 80, stroke = 7, color = 'currentColor', accent = '#00e5ff' }) {
  // Hybrid: infinity filled, N+A outlined
  return (
    <svg viewBox="0 0 560 140" height={height} width={height * (560 / 140)} fill="none" strokeLinecap="round" strokeLinejoin="round">
      {/* Infinity accent filled */}
      <path d="M 100 70 C 100 30, 60 30, 40 30 C 20 30, 20 110, 40 110 C 60 110, 100 110, 100 70 C 100 30, 140 30, 160 30 C 180 30, 180 110, 160 110 C 140 110, 100 110, 100 70 Z"
        stroke={accent} strokeWidth={stroke} fill="none" />
      {/* N */}
      <path d="M 220 115 L 220 30 L 290 110 L 290 30" stroke={color} strokeWidth={stroke} fill="none" />
      {/* A */}
      <path d="M 330 115 L 375 30 L 420 115 M 345 85 L 405 85" stroke={color} strokeWidth={stroke} fill="none" />
    </svg>
  );
}

function EsnaV4({ height = 80, stroke = 4, color = 'currentColor' }) {
  // Ultra-minimal thin line — editorial
  return (
    <svg viewBox="0 0 540 140" height={height} width={height * (540 / 140)} fill="none" stroke={color} strokeWidth={stroke} strokeLinecap="round" strokeLinejoin="round">
      <path d="M 100 70 C 100 30, 60 30, 40 30 C 20 30, 20 110, 40 110 C 60 110, 100 110, 100 70 C 100 30, 140 30, 160 30 C 180 30, 180 110, 160 110 C 140 110, 100 110, 100 70 Z" />
      <path d="M 215 115 L 215 30 L 285 110 L 285 30" />
      <path d="M 325 115 L 370 30 L 415 115 M 340 85 L 400 85" />
    </svg>
  );
}

function EsnaV5({ height = 80, stroke = 6, color = 'currentColor' }) {
  // Monoline variant — all letters share same rhythm, N more geometric
  return (
    <svg viewBox="0 0 560 140" height={height} width={height * (560 / 140)} fill="none" stroke={color} strokeWidth={stroke} strokeLinecap="round" strokeLinejoin="round">
      <path d="M 100 70 C 100 30, 60 30, 40 30 C 20 30, 20 110, 40 110 C 60 110, 100 110, 100 70 C 100 30, 140 30, 160 30 C 180 30, 180 110, 160 110 C 140 110, 100 110, 100 70 Z" />
      {/* N as sharp diagonal */}
      <path d="M 215 115 L 215 30 L 295 115 L 295 30" />
      {/* A as triangle */}
      <path d="M 335 115 L 380 30 L 425 115 Z" />
      <line x1="348" y1="85" x2="412" y2="85" />
    </svg>
  );
}

function Row({ label, children }) {
  return (
    <div style={{ padding: '28px 0', borderTop: '1px solid rgba(0,0,0,0.08)' }}>
      <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 10, letterSpacing: '0.12em', textTransform: 'uppercase', opacity: 0.55, marginBottom: 20 }}>{label}</div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
        <div style={{ background: '#fff', border: '1px solid rgba(0,0,0,0.08)', borderRadius: 14, padding: '40px 32px', display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: 160, color: '#0a0b0f' }}>{children}</div>
        <div style={{ background: '#0a0b0f', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 14, padding: '40px 32px', display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: 160, color: '#00e5ff' }}>{children}</div>
      </div>
    </div>
  );
}

function App() {
  return (
    <div style={{ background: '#f5f5f2', minHeight: '100vh', padding: '48px 40px', fontFamily: 'Space Grotesk, sans-serif' }}>
      <div style={{ maxWidth: 1080, margin: '0 auto' }}>
        <div style={{ marginBottom: 40 }}>
          <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', opacity: 0.55, marginBottom: 12 }}>ESNA · Wordmark exploration</div>
          <h1 style={{ fontSize: 42, fontWeight: 500, letterSpacing: '-0.03em', margin: 0, lineHeight: 1.05 }}>De boceto a vector.</h1>
          <p style={{ fontFamily: 'Inter Tight, sans-serif', fontSize: 15, color: 'rgba(0,0,0,0.6)', maxWidth: 640, marginTop: 14, lineHeight: 1.55 }}>
            Tu idea: la E+S fluyendo como infinito (∞), seguida de N y A. Cinco refinamientos geométricos manteniendo el gesto de trazo continuo.
          </p>
        </div>

        {/* HERO */}
        <div style={{ background: '#0a0b0f', color: '#f5f5f2', borderRadius: 24, padding: '72px 40px', marginBottom: 24, textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', width: 480, height: 480, borderRadius: '50%', background: 'radial-gradient(circle, rgba(0,229,255,0.14), transparent 70%)', top: -120, right: -120, filter: 'blur(30px)' }} />
          <div style={{ position: 'relative' }}>
            <div style={{ color: '#00e5ff' }}><EsnaV2 height={120} stroke={6} /></div>
            <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 11, letterSpacing: '0.25em', textTransform: 'uppercase', opacity: 0.5, marginTop: 24 }}>Labs · Technology Studio</div>
          </div>
        </div>

        <Row label="V1 · Fiel al boceto — trazo orgánico">
          <EsnaV1 height={100} stroke={7} />
        </Row>
        <Row label="V2 · Refinado — proporciones geométricas (recomendado)">
          <EsnaV2 height={100} stroke={5} />
        </Row>
        <Row label="V3 · Híbrido con acento — infinito en cyan">
          <EsnaV3 height={100} stroke={6} />
        </Row>
        <Row label="V4 · Editorial — trazo fino">
          <EsnaV4 height={100} stroke={4} />
        </Row>
        <Row label="V5 · Geométrico — A como triángulo puro">
          <EsnaV5 height={100} stroke={6} />
        </Row>

        {/* With "LABS" suffix */}
        <div style={{ marginTop: 48, padding: 32, background: '#fff', borderRadius: 16, border: '1px solid rgba(0,0,0,0.08)' }}>
          <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 10, letterSpacing: '0.12em', textTransform: 'uppercase', opacity: 0.5, marginBottom: 20 }}>Con sufijo "LABS" · lockup completo</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 20, padding: '20px 0' }}>
            <EsnaV2 height={56} stroke={5} color="#0a0b0f" />
            <div style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 500, fontSize: 36, letterSpacing: '-0.02em', color: '#0a0b0f' }}>LABS</div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16, padding: '20px 0', background: '#0a0b0f', borderRadius: 12, paddingLeft: 24, marginTop: 12 }}>
            <EsnaV2 height={44} stroke={5} color="#00e5ff" />
            <div style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 500, fontSize: 28, letterSpacing: '-0.02em', color: '#f5f5f2' }}>LABS</div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '20px 0' }}>
            <EsnaV2 height={28} stroke={5} color="#0a0b0f" />
            <div style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 500, fontSize: 18, letterSpacing: '-0.02em', color: '#0a0b0f' }}>LABS</div>
          </div>
        </div>

        {/* Scale tests */}
        <div style={{ marginTop: 24, padding: 32, background: '#fff', borderRadius: 16, border: '1px solid rgba(0,0,0,0.08)' }}>
          <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 10, letterSpacing: '0.12em', textTransform: 'uppercase', opacity: 0.5, marginBottom: 20 }}>Test de escala — V2</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 40, flexWrap: 'wrap' }}>
            <EsnaV2 height={16} stroke={7} color="#0a0b0f" />
            <EsnaV2 height={24} stroke={6} color="#0a0b0f" />
            <EsnaV2 height={40} stroke={6} color="#0a0b0f" />
            <EsnaV2 height={60} stroke={5} color="#0a0b0f" />
            <EsnaV2 height={90} stroke={5} color="#0a0b0f" />
          </div>
        </div>

        <div style={{ marginTop: 40, padding: 24, border: '1px dashed rgba(0,0,0,0.15)', borderRadius: 12, fontFamily: 'Inter Tight, sans-serif', fontSize: 14, color: 'rgba(0,0,0,0.7)', lineHeight: 1.6 }}>
          Mi recomendación: <strong style={{ color: '#0a0b0f' }}>V2</strong> como wordmark principal (geométrica y legible a todas escalas) con <strong style={{ color: '#0a0b0f' }}>V3</strong> como versión de acento (infinito en cyan) para usos donde quieras destacar. Dime cuál prefieres y la integro al sitio reemplazando "EonaLabs" actual por tu wordmark ESNA.
        </div>
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
