import Icon from '@/components/ui/icon';

export const IMAGES = {
  facade: 'https://cdn.poehali.dev/projects/bcc7e4e4-2404-4e72-ab44-af82fb6b2988/bucket/f65d5fb0-71a8-4e78-8268-e973884a52e5.PNG',
  lounge: 'https://cdn.poehali.dev/projects/bcc7e4e4-2404-4e72-ab44-af82fb6b2988/bucket/07bafacb-0614-41eb-bed2-ca6302eb3a40.JPG',
  hall: 'https://cdn.poehali.dev/projects/bcc7e4e4-2404-4e72-ab44-af82fb6b2988/bucket/4a3c3947-6ab8-46b8-bdc7-37f090036245.JPG',
  gallery: 'https://cdn.poehali.dev/projects/bcc7e4e4-2404-4e72-ab44-af82fb6b2988/bucket/c1cb7a77-230c-4d45-b1f5-10f4b8ddbb2a.JPG',
  console: 'https://cdn.poehali.dev/projects/bcc7e4e4-2404-4e72-ab44-af82fb6b2988/bucket/f73bb74b-08a0-4f8e-8fbe-3df7596369bb.JPG',
  armchair: 'https://cdn.poehali.dev/projects/bcc7e4e4-2404-4e72-ab44-af82fb6b2988/bucket/be380bf3-4888-45b4-8cce-91eafaac4803.JPG',
  reception: 'https://cdn.poehali.dev/projects/bcc7e4e4-2404-4e72-ab44-af82fb6b2988/bucket/f6375f79-2103-4094-885a-62f976b24b5f.JPG',
  bathroom: 'https://cdn.poehali.dev/projects/bcc7e4e4-2404-4e72-ab44-af82fb6b2988/bucket/6f4d765a-6a5b-4544-80f9-63a20fc003bf.JPG',
  workspace: 'https://cdn.poehali.dev/projects/bcc7e4e4-2404-4e72-ab44-af82fb6b2988/bucket/cfa2a6d8-1958-41a4-9e9e-de1e857ae2ca.JPG',
  map: 'https://cdn.poehali.dev/projects/bcc7e4e4-2404-4e72-ab44-af82fb6b2988/bucket/d567e5dd-b2b1-4a70-9496-40bbc10e49e4.jpg',
  planFloor2: 'https://cdn.poehali.dev/projects/bcc7e4e4-2404-4e72-ab44-af82fb6b2988/bucket/81495265-7d37-4d5c-b246-0edee6567ac8.png',
  planFloor3: 'https://cdn.poehali.dev/projects/bcc7e4e4-2404-4e72-ab44-af82fb6b2988/bucket/0ec5263d-f4fc-4f2a-8239-b88e77a0c514.png',
  planMansard: 'https://cdn.poehali.dev/projects/bcc7e4e4-2404-4e72-ab44-af82fb6b2988/bucket/7ef7e8b4-f7c9-4137-b5fd-69d1ba69c2b3.png',
};

export const CSS_VARS = {
  '--gold': '#C9A84C',
  '--gold-light': '#E8C87A',
  '--gold-pale': '#F5E6C0',
  '--dark': '#0E0E12',
  '--dark-2': '#161620',
  '--dark-3': '#1E1E2A',
  '--marble': '#D4CFC8',
  '--cream': '#F8F4EE',
} as React.CSSProperties;

export const GOLD_GRAD = 'linear-gradient(135deg, #E8C87A, #C9A84C, #A07830)';
export const goldText: React.CSSProperties = { background: GOLD_GRAD, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' };

export function GeoCornerTL() { return <div className="absolute top-8 left-8 pointer-events-none"><svg width="60" height="60" viewBox="0 0 60 60" fill="none"><path d="M0 60 L0 0 L60 0" stroke="#C9A84C" strokeWidth="1" strokeOpacity="0.5" fill="none"/></svg></div>; }
export function GeoCornerTR() { return <div className="absolute top-8 right-8 pointer-events-none rotate-90"><svg width="60" height="60" viewBox="0 0 60 60" fill="none"><path d="M0 60 L0 0 L60 0" stroke="#C9A84C" strokeWidth="1" strokeOpacity="0.5" fill="none"/></svg></div>; }
export function GeoCornerBL() { return <div className="absolute bottom-8 left-8 pointer-events-none -rotate-90"><svg width="60" height="60" viewBox="0 0 60 60" fill="none"><path d="M0 60 L0 0 L60 0" stroke="#C9A84C" strokeWidth="1" strokeOpacity="0.5" fill="none"/></svg></div>; }
export function GeoCornerBR() { return <div className="absolute bottom-8 right-8 pointer-events-none rotate-180"><svg width="60" height="60" viewBox="0 0 60 60" fill="none"><path d="M0 60 L0 0 L60 0" stroke="#C9A84C" strokeWidth="1" strokeOpacity="0.5" fill="none"/></svg></div>; }

export function GridBg() {
  return <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'linear-gradient(rgba(201,168,76,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.06) 1px, transparent 1px)', backgroundSize: '80px 80px', opacity: 0.6 }} />;
}

export function DiamondBullet() { return <svg width="10" height="10" viewBox="0 0 10 10" fill="none" className="inline-block flex-shrink-0 mt-0.5"><polygon points="5,0 10,5 5,10 0,5" fill="#C9A84C" opacity="0.85"/></svg>; }
export function GoldBar() { return <div style={{ background: 'linear-gradient(90deg, transparent, #C9A84C, transparent)', height: 1, width: '100%', margin: '24px 0' }} />; }

export function SectionLabel({ num, label }: { num: string; label: string }) {
  return (
    <div className="flex items-center gap-3 mb-3">
      <div style={{ background: 'linear-gradient(180deg, transparent, #C9A84C, transparent)', width: 1, height: 24, flexShrink: 0 }} />
      <span style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 10, letterSpacing: '0.4em', textTransform: 'uppercase', color: '#C9A84C' }}>{num} / {label}</span>
    </div>
  );
}

export function H2({ children }: { children: React.ReactNode }) {
  return <h2 style={{ fontFamily: 'Cormorant, serif', fontSize: 'clamp(36px, 5vw, 60px)', fontWeight: 300, color: '#F8F4EE', marginBottom: 6, lineHeight: 1.1 }}>{children}</h2>;
}

// ─── Realistic gold map ──────────────────────────────────────────────────────
export function GoldMap() {
  return (
    <>
      {/* Карта в чёрно-золотой тонировке */}
      <img src={IMAGES.map} alt="Карта центра Москвы" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: '42% 34%', filter: 'grayscale(1) brightness(0.55) contrast(1.15)' }} />
      <div style={{ position: 'absolute', inset: 0, mixBlendMode: 'overlay', background: 'linear-gradient(135deg, rgba(232,200,122,0.55), rgba(160,120,48,0.55))' }} />
      <div style={{ position: 'absolute', inset: 0, mixBlendMode: 'color', background: '#C9A84C', opacity: 0.7 }} />
      <div style={{ position: 'absolute', inset: 0, background: '#0E0E12', mixBlendMode: 'multiply', opacity: 0.35 }} />
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 42% 34%, transparent 32%, rgba(14,14,18,0.55) 100%)' }} />
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, transparent 62%, #0E0E12)' }} />
      {/* Маркер — Кузнецкий мост 4/3 */}
      <div style={{ position: 'absolute', top: '34%', left: '42%', transform: 'translate(-50%, -100%)' }}>
        <div style={{ position: 'absolute', left: '50%', top: '100%', transform: 'translate(-50%, -50%)', width: 64, height: 64, borderRadius: '50%', background: 'radial-gradient(circle, rgba(232,200,122,0.45), transparent 70%)' }} />
        <div style={{ position: 'absolute', left: '50%', top: '100%', transform: 'translate(-50%, -50%)', width: 30, height: 30, borderRadius: '50%', border: '1px solid rgba(232,200,122,0.6)', animation: 'mapPulse 2.4s ease-out infinite' }} />
        <svg width="34" height="44" viewBox="0 0 34 44" fill="none" style={{ position: 'relative', filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.6))' }}>
          <path d="M17 0 C 7.6 0, 0 7.6, 0 17 C 0 29.75, 17 44, 17 44 C 17 44, 34 29.75, 34 17 C 34 7.6, 26.4 0, 17 0 Z" fill="#C9A84C" />
          <circle cx="17" cy="17" r="6" fill="#0E0E12" />
        </svg>
      </div>
    </>
  );
}

// ─── PDF Button ──────────────────────────────────────────────────────────────
export function PdfButton() {
  return (
    <button className="no-print" onClick={() => window.print()}
      style={{ position: 'fixed', bottom: 24, right: 24, zIndex: 1000, display: 'flex', alignItems: 'center', gap: 8, padding: '12px 20px', background: GOLD_GRAD, color: '#0E0E12', border: 'none', cursor: 'pointer', fontFamily: 'Montserrat, sans-serif', fontSize: 10, fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', boxShadow: '0 8px 32px rgba(201,168,76,0.35)', transition: 'transform 0.2s ease' }}
      onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.05)')}
      onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
    >
      <Icon name="Download" size={13} />
      Сохранить PDF
    </button>
  );
}

// ─── Nav Dots ─────────────────────────────────────────────────────────────────
export function NavDots({ current, total, onGo }: { current: number; total: number; onGo: (i: number) => void }) {
  return (
    <div className="no-print" style={{ position: 'fixed', right: 20, top: '50%', transform: 'translateY(-50%)', zIndex: 999, display: 'flex', flexDirection: 'column', gap: 8 }}>
      {Array.from({ length: total }).map((_, i) => (
        <button key={i} onClick={() => onGo(i)}
          style={{ width: i === current ? 20 : 5, height: 5, borderRadius: 3, background: i === current ? '#C9A84C' : 'rgba(201,168,76,0.3)', border: 'none', cursor: 'pointer', transition: 'all 0.3s ease', padding: 0 }}
        />
      ))}
    </div>
  );
}
