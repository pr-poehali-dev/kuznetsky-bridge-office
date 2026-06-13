import { useState, useEffect, useRef } from 'react';
import Icon from '@/components/ui/icon';

const IMAGES = {
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
  planBefore: 'https://cdn.poehali.dev/projects/bcc7e4e4-2404-4e72-ab44-af82fb6b2988/bucket/b577584e-ccbe-4324-b943-5d467968ddd0.png',
};

const CSS_VARS = {
  '--gold': '#C9A84C',
  '--gold-light': '#E8C87A',
  '--gold-pale': '#F5E6C0',
  '--dark': '#0E0E12',
  '--dark-2': '#161620',
  '--dark-3': '#1E1E2A',
  '--marble': '#D4CFC8',
  '--cream': '#F8F4EE',
} as React.CSSProperties;

const GOLD_GRAD = 'linear-gradient(135deg, #E8C87A, #C9A84C, #A07830)';
const goldText: React.CSSProperties = { background: GOLD_GRAD, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' };

function GeoCornerTL() { return <div className="absolute top-8 left-8 pointer-events-none"><svg width="60" height="60" viewBox="0 0 60 60" fill="none"><path d="M0 60 L0 0 L60 0" stroke="#C9A84C" strokeWidth="1" strokeOpacity="0.5" fill="none"/></svg></div>; }
function GeoCornerTR() { return <div className="absolute top-8 right-8 pointer-events-none rotate-90"><svg width="60" height="60" viewBox="0 0 60 60" fill="none"><path d="M0 60 L0 0 L60 0" stroke="#C9A84C" strokeWidth="1" strokeOpacity="0.5" fill="none"/></svg></div>; }
function GeoCornerBL() { return <div className="absolute bottom-8 left-8 pointer-events-none -rotate-90"><svg width="60" height="60" viewBox="0 0 60 60" fill="none"><path d="M0 60 L0 0 L60 0" stroke="#C9A84C" strokeWidth="1" strokeOpacity="0.5" fill="none"/></svg></div>; }
function GeoCornerBR() { return <div className="absolute bottom-8 right-8 pointer-events-none rotate-180"><svg width="60" height="60" viewBox="0 0 60 60" fill="none"><path d="M0 60 L0 0 L60 0" stroke="#C9A84C" strokeWidth="1" strokeOpacity="0.5" fill="none"/></svg></div>; }

function GridBg() {
  return <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'linear-gradient(rgba(201,168,76,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.06) 1px, transparent 1px)', backgroundSize: '80px 80px', opacity: 0.6 }} />;
}

function DiamondBullet() { return <svg width="10" height="10" viewBox="0 0 10 10" fill="none" className="inline-block flex-shrink-0 mt-0.5"><polygon points="5,0 10,5 5,10 0,5" fill="#C9A84C" opacity="0.85"/></svg>; }
function GoldBar() { return <div style={{ background: 'linear-gradient(90deg, transparent, #C9A84C, transparent)', height: 1, width: '100%', margin: '24px 0' }} />; }

function SectionLabel({ num, label }: { num: string; label: string }) {
  return (
    <div className="flex items-center gap-3 mb-3">
      <div style={{ background: 'linear-gradient(180deg, transparent, #C9A84C, transparent)', width: 1, height: 24, flexShrink: 0 }} />
      <span style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 10, letterSpacing: '0.4em', textTransform: 'uppercase', color: '#C9A84C' }}>{num} / {label}</span>
    </div>
  );
}

function H2({ children }: { children: React.ReactNode }) {
  return <h2 style={{ fontFamily: 'Cormorant, serif', fontSize: 'clamp(36px, 5vw, 60px)', fontWeight: 300, color: '#F8F4EE', marginBottom: 6, lineHeight: 1.1 }}>{children}</h2>;
}

// ─── SLIDE 1: Hero ───────────────────────────────────────────────────────────
function Slide1() {
  return (
    <section style={{ minHeight: '100vh', background: '#0E0E12', position: 'relative', overflow: 'hidden', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '80px 32px' }}>
      <img src={IMAGES.facade} alt="Кузнецкий мост" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.28, filter: 'brightness(0.7) saturate(0.85)' }} />
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at center, transparent 30%, #0E0E12 95%)' }} />
      <GeoCornerTL /><GeoCornerTR /><GeoCornerBL /><GeoCornerBR />
      <GridBg />

      <div style={{ position: 'relative', zIndex: 10, textAlign: 'center', maxWidth: 800 }}>
        <div style={{ marginBottom: 40, opacity: 0, animation: 'fadeIn 0.8s ease 0.1s forwards' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12, marginBottom: 6 }}>
            <div style={{ background: 'linear-gradient(180deg, transparent, #C9A84C, transparent)', width: 1, height: 28 }} />
            <span style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 10, letterSpacing: '0.4em', textTransform: 'uppercase', color: '#D4CFC8' }}>Development Consulting</span>
            <div style={{ background: 'linear-gradient(180deg, transparent, #C9A84C, transparent)', width: 1, height: 28 }} />
          </div>
          <div style={{ fontFamily: 'Cormorant, serif', fontSize: 28, letterSpacing: '0.2em', ...goldText, fontWeight: 300 }}>AMI GROUP</div>
        </div>

        <h1 style={{ fontFamily: 'Cormorant, serif', fontSize: 'clamp(56px, 8vw, 96px)', fontWeight: 300, lineHeight: 1, color: '#F8F4EE', marginBottom: 8, opacity: 0, animation: 'fadeUp 0.9s ease 0.2s forwards' }}>
          Кузнецкий<br/><span style={{ fontStyle: 'italic', ...goldText }}>мост</span>
        </h1>

        <div style={{ background: 'linear-gradient(90deg, transparent, #C9A84C, transparent)', height: 1, maxWidth: 280, margin: '28px auto', opacity: 0, animation: 'fadeIn 0.6s ease 0.35s forwards' }} />

        <p style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 11, letterSpacing: '0.25em', textTransform: 'uppercase', color: '#D4CFC8', marginBottom: 4, opacity: 0, animation: 'fadeIn 0.6s ease 0.45s forwards' }}>Премиальный офисный проект · ул. Кузнецкий мост, д. 4</p>
        <p style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 10, letterSpacing: '0.2em', color: 'rgba(201,168,76,0.7)', opacity: 0, animation: 'fadeIn 0.6s ease 0.5s forwards' }}>37 мини-офисов · 1 223 м² полезной площади · Москва</p>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 0, maxWidth: 520, margin: '56px auto 0', opacity: 0, animation: 'fadeUp 0.8s ease 0.6s forwards' }}>
          {[
            { value: '38,9', unit: '%', label: 'ROI проекта' },
            { value: '46,7', unit: '%', label: 'ROI годовой' },
            { value: '10', unit: 'мес', label: 'Срок реализации' },
          ].map((m, i) => (
            <div key={i} style={{ textAlign: 'center', padding: '0 24px', borderRight: i < 2 ? '1px solid rgba(201,168,76,0.2)' : 'none' }}>
              <div style={{ fontFamily: 'Cormorant, serif', fontSize: 32, fontWeight: 300, ...goldText, lineHeight: 1.1 }}>{m.value}<span style={{ fontSize: 18 }}>{m.unit}</span></div>
              <div style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 9, letterSpacing: '0.25em', textTransform: 'uppercase', color: 'rgba(212,207,200,0.65)', marginTop: 6 }}>{m.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="no-print" style={{ position: 'absolute', bottom: 36, left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8, opacity: 0, animation: 'fadeIn 1s ease 1s forwards' }}>
        <span style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 9, letterSpacing: '0.3em', textTransform: 'uppercase', color: 'rgba(201,168,76,0.4)' }}>Листать</span>
        <div style={{ width: 1, height: 32, background: 'linear-gradient(to bottom, #C9A84C, transparent)' }} />
      </div>
    </section>
  );
}

// ─── Realistic gold map ──────────────────────────────────────────────────────
function GoldMap() {
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

// ─── SLIDE 2: Локация ────────────────────────────────────────────────────────
function Slide2() {
  return (
    <section style={{ minHeight: '100vh', background: '#0E0E12', display: 'flex', flexWrap: 'wrap', position: 'relative' }}>
      <div style={{ flex: '1 1 400px', minHeight: '50vh', position: 'relative', overflow: 'hidden' }}>
        <GoldMap />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, transparent 60%, #0E0E12)' }} />
        <GridBg />
        <div style={{ position: 'absolute', top: 28, left: 32, fontFamily: 'Montserrat, sans-serif', fontSize: 9, letterSpacing: '0.35em', textTransform: 'uppercase', color: 'rgba(201,168,76,0.5)' }}>Центр Москвы</div>
        <div style={{ position: 'absolute', bottom: 32, left: 32, display: 'inline-flex', alignItems: 'center', gap: 8, padding: '8px 14px', background: 'rgba(201,168,76,0.12)', border: '1px solid rgba(201,168,76,0.4)' }}>
          <Icon name="MapPin" size={11} style={{ color: '#C9A84C' }} />
          <span style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 10, letterSpacing: '0.3em', textTransform: 'uppercase', color: '#C9A84C' }}>Кузнецкий мост, 4/3 стр. 1</span>
        </div>
      </div>

      <div style={{ flex: '1 1 400px', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '64px 56px', position: 'relative' }}>
        <GeoCornerTR />
        <SectionLabel num="02" label="Локация" />
        <H2>Кузнецкий<br/><span style={{ fontStyle: 'italic', ...goldText }}>мост</span></H2>
        <GoldBar />
        <p style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 13, lineHeight: 1.8, color: 'rgba(212,207,200,0.8)', marginBottom: 32 }}>
          Исторический центр деловой Москвы. Одна из самых престижных улиц города с высочайшей концентрацией luxury-брендов, ресторанов и культурных институций.
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
          {[
            { icon: 'Train', label: 'Метро', value: '2 мин пешком — ст. Кузнецкий Мост' },
            { icon: 'Building2', label: 'Здание', value: 'Общая площадь 1 703 м², полезная 1 223 м²' },
            { icon: 'LayoutGrid', label: 'Формат', value: '37 мини-офисов на 2, 3 и мансардном этажах' },
            { icon: 'Users', label: 'Ёмкость', value: '204 рабочих места, плотность 6 м²/р.м.' },
            { icon: 'ScanLine', label: 'Безопасность', value: 'Smart Lock, контроль доступа и видеонаблюдение 24/7' },
          ].map((item) => (
            <div key={item.label} style={{ display: 'flex', alignItems: 'flex-start', gap: 14 }}>
              <div style={{ width: 32, height: 32, flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid rgba(201,168,76,0.3)' }}>
                <Icon name={item.icon} size={13} style={{ color: '#C9A84C' }} />
              </div>
              <div>
                <div style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 9, letterSpacing: '0.3em', textTransform: 'uppercase', color: 'rgba(201,168,76,0.6)', marginBottom: 2 }}>{item.label}</div>
                <div style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 13, color: '#F8F4EE' }}>{item.value}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── SLIDE 3: Планировки ─────────────────────────────────────────────────────
function Slide3() {
  const plans = [
    { floor: '2 этаж', price: '1 300 000', area: '399,7', sum: '519,6', offices: '10', desc: 'Премиальный уровень. Высокие потолки, панорамное остекление.' },
    { floor: '3 этаж', price: '1 200 000', area: '385,4', sum: '462,5', offices: '14', desc: 'Оптимальный формат для команд. Smart-освещение, приёмные зоны.' },
    { floor: 'Мансарда', price: '1 000 000', area: '437,9', sum: '437,9', offices: '13', desc: 'Атмосферные мансардные офисы. Авторская геометрия пространства.' },
  ];

  return (
    <section style={{ minHeight: '100vh', background: '#0E0E12', position: 'relative', overflow: 'hidden', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '64px 64px' }}>
      <GridBg /><GeoCornerTL /><GeoCornerBR />
      <div style={{ position: 'relative', zIndex: 10 }}>
        <SectionLabel num="03" label="Планировки" />
        <H2>Форматы <span style={{ fontStyle: 'italic', ...goldText }}>офисов</span></H2>
        <p style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 12, color: 'rgba(212,207,200,0.65)', marginBottom: 40 }}>37 офисов · Полезная площадь 1 223 м² · Средняя цена 1 161 071 ₽/м²</p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 20 }}>
          {plans.map((p, i) => (
            <div key={i} style={{ background: 'rgba(255,255,255,0.025)', border: '1px solid rgba(201,168,76,0.25)', padding: '32px 28px', position: 'relative' }}>
              <div style={{ position: 'absolute', top: -1, left: -1, width: 18, height: 18, borderTop: '2px solid #C9A84C', borderLeft: '2px solid #C9A84C' }} />
              <div style={{ position: 'absolute', bottom: -1, right: -1, width: 18, height: 18, borderBottom: '2px solid #C9A84C', borderRight: '2px solid #C9A84C' }} />
              <div style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 10, fontWeight: 600, letterSpacing: '0.3em', textTransform: 'uppercase', color: '#C9A84C', marginBottom: 8 }}>{p.floor}</div>
              <div style={{ fontFamily: 'Cormorant, serif', fontSize: 46, fontWeight: 300, ...goldText, lineHeight: 1 }}>{p.price}<span style={{ fontSize: 20 }}> ₽/м²</span></div>
              <div style={{ background: 'linear-gradient(90deg, transparent, #C9A84C, transparent)', height: 1, margin: '16px 0' }} />
              <p style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 12, lineHeight: 1.7, color: 'rgba(212,207,200,0.75)', marginBottom: 20 }}>{p.desc}</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {[
                  { l: 'Площадь', v: `${p.area} м²` },
                  { l: 'Кол-во офисов', v: `${p.offices} шт.` },
                  { l: 'Выручка', v: `${p.sum} млн ₽` },
                ].map((r) => (
                  <div key={r.l} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: 8, borderBottom: '1px solid rgba(201,168,76,0.12)' }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: 8, fontFamily: 'Montserrat, sans-serif', fontSize: 11, color: 'rgba(212,207,200,0.7)' }}><DiamondBullet />{r.l}</span>
                    <span style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 13, fontWeight: 600, color: '#F8F4EE' }}>{r.v}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Floor plan «После» (авторская SVG-планировка 2 этажа) ───────────────────
function FloorPlanAfter() {
  const G = '#C9A84C';
  const wall = { fill: 'none', stroke: G, strokeWidth: 2.2, strokeOpacity: 0.85 };
  const thin = { fill: 'none', stroke: G, strokeWidth: 1, strokeOpacity: 0.4 };
  // Зоны: офисы (gold), сервис (зелёные), коммуникации (серые)
  type Room = { x: number; y: number; w: number; h: number; label: string; type: 'office' | 'service' | 'core' };
  const rooms: Room[] = [
    // Верхнее левое крыло (исторические комнаты у фасада)
    { x: 95, y: 36, w: 92, h: 90, label: 'Офис 1\n24 м²', type: 'office' },
    { x: 187, y: 36, w: 118, h: 90, label: 'Офис 2\n32 м²', type: 'office' },
    { x: 95, y: 126, w: 92, h: 66, label: 'Офис 3\n18 м²', type: 'office' },
    // Reception + coffee point у входной группы
    { x: 187, y: 126, w: 118, h: 66, label: 'Reception\n+ Coffee Point', type: 'service' },
    // Нижнее левое крыло
    { x: 60, y: 300, w: 150, h: 110, label: 'Офис 4\n67 м²', type: 'office' },
    { x: 60, y: 410, w: 150, h: 70, label: 'Офис 5\n21 м²', type: 'office' },
    // Центр-низ
    { x: 220, y: 300, w: 120, h: 180, label: 'Офис 6\n36 м²', type: 'office' },
    // Правое крыло
    { x: 470, y: 210, w: 200, h: 120, label: 'Офис 7\n79 м²', type: 'office' },
    { x: 470, y: 360, w: 200, h: 120, label: 'Офис 8\n72 м²', type: 'office' },
    { x: 700, y: 210, w: 110, h: 95, label: 'Офис 9\n28 м²', type: 'office' },
    { x: 700, y: 360, w: 110, h: 95, label: 'Офис 10\n26 м²', type: 'office' },
    // Санузлы раздельные
    { x: 700, y: 305, w: 52, h: 55, label: 'WC·M', type: 'service' },
    { x: 752, y: 305, w: 58, h: 55, label: 'WC·Ж', type: 'service' },
  ];
  const colorFor = (t: Room['type']) =>
    t === 'office' ? 'rgba(201,168,76,0.06)' : t === 'service' ? 'rgba(45,90,61,0.45)' : 'rgba(255,255,255,0.04)';
  const strokeFor = (t: Room['type']) => (t === 'service' ? '#4E8B63' : G);

  return (
    <svg viewBox="0 0 860 520" style={{ width: '100%', height: '100%', display: 'block' }}>
      {/* Внешний контур здания (по исходному плану) */}
      <path d="M95 30 L305 30 L305 192 L470 192 L470 205 L820 205 L820 490 L210 490 L210 300 L55 300 L55 165 L95 130 Z" {...wall} />

      {/* Зоны-комнаты */}
      {rooms.map((r, i) => (
        <g key={i}>
          <rect x={r.x} y={r.y} width={r.w} height={r.h} fill={colorFor(r.type)} stroke={strokeFor(r.type)} strokeWidth={r.type === 'service' ? 1.2 : 1.4} strokeOpacity={0.7} />
          {r.label.split('\n').map((line, k) => (
            <text key={k} x={r.x + r.w / 2} y={r.y + r.h / 2 + (k - (r.label.split('\n').length - 1) / 2) * 13} textAnchor="middle" fontFamily="Montserrat, sans-serif" fontSize={r.type === 'service' && r.w < 70 ? 8 : 10} fill={r.type === 'service' ? '#CFE7D6' : '#F5E6C0'} fontWeight={k === 0 ? 600 : 400} opacity={k === 0 ? 1 : 0.7}>{line}</text>
          ))}
        </g>
      ))}

      {/* Лестницы — сохранены на исходных местах */}
      <g>
        {/* Лестница верхнего крыла */}
        <rect x="225" y="200" width="80" height="60" fill="rgba(255,255,255,0.03)" {...thin} />
        {Array.from({ length: 6 }).map((_, i) => <line key={i} x1={225} y1={206 + i * 9} x2={305} y2={206 + i * 9} {...thin} />)}
        <text x="265" y="234" textAnchor="middle" fontFamily="Montserrat, sans-serif" fontSize="8" letterSpacing="2" fill={G} opacity="0.6">ЛЕСТНИЦА</text>
        {/* Центральная парадная лестница */}
        <rect x="345" y="205" width="115" height="180" fill="rgba(255,255,255,0.03)" {...thin} />
        {Array.from({ length: 13 }).map((_, i) => <line key={i} x1={345} y1={213 + i * 13} x2={460} y2={213 + i * 13} {...thin} />)}
        <line x1="402" y1="205" x2="402" y2="385" stroke={G} strokeWidth="1.4" strokeOpacity="0.5" />
        <text x="402" y="400" textAnchor="middle" fontFamily="Montserrat, sans-serif" fontSize="8" letterSpacing="2" fill={G} opacity="0.6">ПАРАДНАЯ ЛЕСТНИЦА · ЛИФТ</text>
      </g>

      {/* Окна-насечки на фасадах */}
      {[[120,30],[160,30],[210,30],[260,30],[300,55],[300,95],[300,135]].map((p,i)=>(
        <line key={i} x1={p[0]} y1={p[1]-4} x2={p[0]+24} y2={p[1]-4} stroke={G} strokeWidth="3" strokeOpacity="0.5" />
      ))}
    </svg>
  );
}

// ─── SLIDE: Поэтажный план до / после ────────────────────────────────────────
function SlidePlan() {
  return (
    <section style={{ minHeight: '100vh', background: '#0E0E12', position: 'relative', overflow: 'hidden', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '56px 64px' }}>
      <GridBg /><GeoCornerTL /><GeoCornerBR />
      <div style={{ position: 'relative', zIndex: 10 }}>
        <SectionLabel num="04" label="Поэтажный план · 2 этаж" />
        <H2>Было <span style={{ fontStyle: 'italic', ...goldText }}>—</span> стало</H2>
        <p style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 12, color: 'rgba(212,207,200,0.65)', marginBottom: 28 }}>Сохраняем контур здания и лестницы, перепланируем под 10 мини-офисов с сервисными зонами</p>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, alignItems: 'stretch' }}>
          {/* ДО */}
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
              <div style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 10, fontWeight: 700, letterSpacing: '0.3em', textTransform: 'uppercase', color: 'rgba(212,207,200,0.55)' }}>До</div>
              <div style={{ flex: 1, height: 1, background: 'rgba(201,168,76,0.2)' }} />
            </div>
            <div style={{ flex: 1, background: '#fff', border: '1px solid rgba(201,168,76,0.25)', padding: 14, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <img src={IMAGES.planBefore} alt="План до" style={{ width: '100%', height: 'auto', objectFit: 'contain' }} />
            </div>
            <p style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 11, color: 'rgba(212,207,200,0.55)', marginTop: 10 }}>Исходная планировка: хаотичная нарезка, неэффективное использование площади</p>
          </div>

          {/* ПОСЛЕ */}
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
              <div style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 10, fontWeight: 700, letterSpacing: '0.3em', textTransform: 'uppercase', color: '#C9A84C' }}>После</div>
              <div style={{ flex: 1, height: 1, background: 'linear-gradient(90deg, #C9A84C, transparent)' }} />
            </div>
            <div style={{ flex: 1, background: 'rgba(255,255,255,0.025)', border: '1px solid rgba(201,168,76,0.4)', padding: 14, display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
              <div style={{ position: 'absolute', top: -1, left: -1, width: 18, height: 18, borderTop: '2px solid #C9A84C', borderLeft: '2px solid #C9A84C' }} />
              <div style={{ position: 'absolute', bottom: -1, right: -1, width: 18, height: 18, borderBottom: '2px solid #C9A84C', borderRight: '2px solid #C9A84C' }} />
              <FloorPlanAfter />
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 10 }}>
              {[
                { c: 'rgba(201,168,76,0.5)', l: '10 мини-офисов' },
                { c: '#4E8B63', l: 'Раздельные санузлы' },
                { c: '#4E8B63', l: 'Reception + Coffee Point' },
              ].map((b) => (
                <div key={b.l} style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                  <span style={{ width: 9, height: 9, background: b.c, display: 'inline-block' }} />
                  <span style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 10, color: 'rgba(212,207,200,0.75)' }}>{b.l}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── SLIDE 4: Стиль и атмосфера ──────────────────────────────────────────────
function Slide4() {
  const features = [
    { icon: 'Crown', label: 'Классика и модерн в роскоши царского стиля' },
    { icon: 'Sparkles', label: 'Золотые элементы декора и латунная фурнитура' },
    { icon: 'Palette', label: 'Глубокий благородный тёмно-зелёный цвет' },
    { icon: 'Frame', label: 'Лепнина, багеты и резные молдинги' },
  ];
  return (
    <section style={{ minHeight: '100vh', background: '#0E0E12', position: 'relative', padding: '56px 64px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      <GridBg />
      <div style={{ position: 'relative', zIndex: 10 }}>
        <SectionLabel num="05" label="Стиль и атмосфера" />
        <H2>Детали, которые <span style={{ fontStyle: 'italic', ...goldText }}>вдохновляют</span></H2>
        <p style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 13, lineHeight: 1.8, color: 'rgba(212,207,200,0.78)', maxWidth: 760, marginBottom: 24 }}>
          Интерьеры сохраняют союз классики и модерна, подчёркивая роскошь культурного наследия исторического центра столицы. Княжеский, царский характер пространства задают золотые элементы декора, глубокий благородный тёмно-зелёный цвет, лепнина и багеты — каждая деталь работает на ощущение престижа и статуса.
        </p>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginBottom: 28 }}>
          {features.map((f) => (
            <div key={f.label} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '9px 16px', background: 'rgba(255,255,255,0.025)', border: '1px solid rgba(201,168,76,0.25)' }}>
              <Icon name={f.icon} size={13} style={{ color: '#C9A84C' }} />
              <span style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 11, color: '#F8F4EE' }}>{f.label}</span>
            </div>
          ))}
        </div>

        {/* 2 большие горизонтальные фото */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 12 }}>
          {[
            { img: IMAGES.lounge, tag: 'Lounge', title: 'Изумрудный velvet, мрамор и золото в каждой линии' },
            { img: IMAGES.hall, tag: 'Reception', title: 'Зеркальный холл с латунными порталами' },
          ].map((c, i) => (
            <div key={c.tag} style={{ position: 'relative', overflow: 'hidden', aspectRatio: '16/9' }}>
              <img src={c.img} alt={c.tag} style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.78) saturate(0.95)' }} />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, #0E0E12 0%, transparent 55%)' }} />
              {i === 0 && <div style={{ position: 'absolute', top: 12, left: 12 }}><svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M0 24 L0 0 L24 0" stroke="#C9A84C" strokeWidth="1" strokeOpacity="0.6" fill="none"/></svg></div>}
              <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '18px 22px' }}>
                <div style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 9, letterSpacing: '0.35em', textTransform: 'uppercase', color: '#C9A84C', marginBottom: 4 }}>{c.tag}</div>
                <p style={{ fontFamily: 'Cormorant, serif', fontSize: 20, fontWeight: 300, color: '#F8F4EE', lineHeight: 1.3 }}>{c.title}</p>
              </div>
            </div>
          ))}
        </div>

        {/* 5 вертикальных фото */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 12 }}>
          {[
            { img: IMAGES.gallery, tag: 'Office', title: 'Галерейная стена' },
            { img: IMAGES.console, tag: 'Entrance', title: 'Багеты и зеркало' },
            { img: IMAGES.armchair, tag: 'Detail', title: 'Velvet и латунь' },
            { img: IMAGES.reception, tag: 'Bar', title: 'Reception-стойка' },
            { img: IMAGES.bathroom, tag: 'Restroom', title: 'Зелёный кафель' },
          ].map((c) => (
            <div key={c.tag} style={{ position: 'relative', overflow: 'hidden', aspectRatio: '3/4' }}>
              <img src={c.img} alt={c.tag} style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.78) saturate(0.95)' }} />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, #0E0E12, transparent 60%)' }} />
              <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '10px 12px' }}>
                <div style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 7, letterSpacing: '0.25em', textTransform: 'uppercase', color: '#C9A84C', marginBottom: 2 }}>{c.tag}</div>
                <p style={{ fontFamily: 'Cormorant, serif', fontSize: 14, fontWeight: 300, color: '#F8F4EE', lineHeight: 1.2 }}>{c.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── SLIDE 5: Финансы ────────────────────────────────────────────────────────
function Slide5() {
  const costs = [
    { label: 'Приобретение здания', value: '509,4', gold: false, bold: true },
    { label: 'CAPEX (отделимый + неотделимый)', value: '202,1', gold: false, bold: false },
    { label: 'Дополнительные расходы', value: '51,7', gold: false, bold: false },
    { label: 'Сумма инвестиций', value: '763,1', gold: true, bold: true },
    { label: 'Выручка (за вычетом налога/НДС)', value: '1 234,8', gold: false, bold: false },
    { label: 'Чистая прибыль проекта', value: '297,0', gold: true, bold: true },
  ];

  const kpi = [
    { label: 'Сумма инвестиций', value: '763,1', unit: 'млн ₽', icon: 'Wallet' },
    { label: 'Чистая прибыль', value: '297,0', unit: 'млн ₽', icon: 'BadgePercent' },
    { label: 'ROI проекта', value: '38,9', unit: '%', icon: 'Target' },
    { label: 'ROI годовой', value: '46,7', unit: '%', icon: 'TrendingUp' },
  ];

  return (
    <section style={{ minHeight: '100vh', background: '#0E0E12', position: 'relative', overflow: 'hidden', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '64px 64px' }}>
      <GridBg /><GeoCornerTR /><GeoCornerBL />
      <div style={{ position: 'relative', zIndex: 10 }}>
        <SectionLabel num="06" label="Финансовые показатели" />
        <H2>Экономика <span style={{ fontStyle: 'italic', ...goldText }}>проекта</span></H2>
        <p style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 10, color: 'rgba(212,207,200,0.5)', marginBottom: 36 }}>Все суммы в миллионах рублей. Срок реализации — 10 месяцев.</p>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 40 }}>
          <div>
            <div style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 9, letterSpacing: '0.35em', textTransform: 'uppercase', color: '#C9A84C', marginBottom: 14 }}>Структура продажи</div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 8, marginBottom: 28 }}>
              {[
                { label: 'Полезная площадь', value: '1 223 м²', h: false },
                { label: 'Средняя цена', value: '1 161 071 ₽/м²', h: false },
                { label: 'Выручка', value: '1 420 млн ₽', h: true },
              ].map((s, i) => (
                <div key={i} style={{ padding: '14px 12px', background: s.h ? 'rgba(201,168,76,0.1)' : 'rgba(255,255,255,0.03)', border: `1px solid ${s.h ? 'rgba(201,168,76,0.5)' : 'rgba(201,168,76,0.18)'}` }}>
                  <div style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 8, letterSpacing: '0.2em', textTransform: 'uppercase', color: s.h ? '#C9A84C' : 'rgba(212,207,200,0.55)', marginBottom: 6 }}>{s.label}</div>
                  <div style={{ fontFamily: 'Cormorant, serif', fontSize: 16, fontWeight: s.h ? 500 : 300, color: s.h ? '#E8C87A' : '#F8F4EE', lineHeight: 1.2 }}>{s.value}</div>
                </div>
              ))}
            </div>

            <div style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 9, letterSpacing: '0.35em', textTransform: 'uppercase', color: '#C9A84C', marginBottom: 10 }}>Структура затрат и прибыли</div>
            {costs.map((row, i) => (
              <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '11px 14px', background: row.gold ? 'rgba(201,168,76,0.08)' : i % 2 === 0 ? 'rgba(255,255,255,0.02)' : 'transparent', borderBottom: '1px solid rgba(201,168,76,0.1)' }}>
                <span style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 11, fontWeight: row.bold ? 600 : 300, color: row.gold ? '#C9A84C' : 'rgba(212,207,200,0.85)' }}>{row.label}</span>
                <span style={{ fontFamily: 'Cormorant, serif', fontSize: 20, fontWeight: row.bold ? 500 : 300, ...(row.gold ? goldText : { color: '#F8F4EE' }) }}>{row.value}</span>
              </div>
            ))}
          </div>

          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 9, letterSpacing: '0.35em', textTransform: 'uppercase', color: '#C9A84C', marginBottom: 14 }}>Ключевые показатели</div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 20 }}>
              {kpi.map((k, i) => (
                <div key={i} style={{ textAlign: 'center', padding: '24px 16px', background: 'rgba(255,255,255,0.025)', border: '1px solid rgba(201,168,76,0.25)', position: 'relative' }}>
                  <div style={{ position: 'absolute', top: -1, left: -1, width: 14, height: 14, borderTop: '2px solid #C9A84C', borderLeft: '2px solid #C9A84C' }} />
                  <div style={{ position: 'absolute', bottom: -1, right: -1, width: 14, height: 14, borderBottom: '2px solid #C9A84C', borderRight: '2px solid #C9A84C' }} />
                  <div style={{ width: 36, height: 36, margin: '0 auto 14px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid rgba(201,168,76,0.4)', background: 'rgba(201,168,76,0.07)' }}>
                    <Icon name={k.icon} size={14} style={{ color: '#C9A84C' }} />
                  </div>
                  <div style={{ fontFamily: 'Cormorant, serif', fontSize: 38, fontWeight: 300, ...goldText, lineHeight: 1 }}>{k.value}</div>
                  <div style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 9, letterSpacing: '0.2em', color: 'rgba(201,168,76,0.7)', marginTop: 2 }}>{k.unit}</div>
                  <div style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 9, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(212,207,200,0.5)', marginTop: 8 }}>{k.label}</div>
                </div>
              ))}
            </div>
            <div style={{ padding: '18px 20px', border: '1px solid rgba(201,168,76,0.2)', background: 'rgba(201,168,76,0.04)', display: 'flex', gap: 12, alignItems: 'flex-start' }}>
              <Icon name="Info" size={12} style={{ color: '#C9A84C', flexShrink: 0, marginTop: 2 }} />
              <p style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 10, lineHeight: 1.7, color: 'rgba(212,207,200,0.6)' }}>
                Доход инвестора — 23,35%. Налог с продажи нежилых помещений — 20%. Маркетинг и продажи — 4% от выручки.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── SLIDE 6: План продаж ────────────────────────────────────────────────────
function Slide6() {
  const sales = [
    { m: 1, sold: 0, rest: 37 }, { m: 2, sold: 0, rest: 37 }, { m: 3, sold: 0, rest: 37 },
    { m: 4, sold: 0, rest: 37 }, { m: 5, sold: 5, rest: 32 }, { m: 6, sold: 5, rest: 27 },
    { m: 7, sold: 6, rest: 21 }, { m: 8, sold: 7, rest: 14 }, { m: 9, sold: 7, rest: 7 }, { m: 10, sold: 7, rest: 0 },
  ];
  const maxSold = 7;

  return (
    <section style={{ minHeight: '100vh', background: '#0E0E12', position: 'relative', overflow: 'hidden', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '64px 64px' }}>
      <GridBg /><GeoCornerTL /><GeoCornerBR />
      <div style={{ position: 'relative', zIndex: 10 }}>
        <SectionLabel num="07" label="План продаж" />
        <H2>Реализация <span style={{ fontStyle: 'italic', ...goldText }}>37 офисов</span></H2>
        <p style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 12, color: 'rgba(212,207,200,0.65)', marginBottom: 44 }}>Старт продаж — 5-й месяц. Полная реализация — к 10-му месяцу проекта.</p>

        {/* Bar chart */}
        <div style={{ display: 'flex', alignItems: 'flex-end', gap: 16, height: 220, marginBottom: 40, paddingLeft: 8 }}>
          {sales.map((s) => (
            <div key={s.m} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100%', justifyContent: 'flex-end' }}>
              <div style={{ fontFamily: 'Cormorant, serif', fontSize: 22, fontWeight: 400, color: s.sold > 0 ? '#E8C87A' : 'rgba(212,207,200,0.3)', marginBottom: 8 }}>{s.sold}</div>
              <div style={{
                width: '100%', maxWidth: 48,
                height: `${(s.sold / maxSold) * 100}%`,
                minHeight: s.sold > 0 ? 8 : 2,
                background: s.sold > 0 ? GOLD_GRAD : 'rgba(201,168,76,0.12)',
                borderRadius: '2px 2px 0 0',
                transition: 'height 0.5s ease',
              }} />
              <div style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 10, color: 'rgba(212,207,200,0.55)', marginTop: 10 }}>{s.m} мес</div>
            </div>
          ))}
        </div>

        {/* Remaining table */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
          {[
            { icon: 'Calendar', label: 'Старт продаж', value: '5-й месяц' },
            { icon: 'CheckCircle2', label: 'Финал продаж', value: '10-й месяц' },
            { icon: 'TrendingUp', label: 'Темп продаж', value: '5–7 офисов/мес' },
          ].map((c) => (
            <div key={c.label} style={{ padding: '20px 24px', background: 'rgba(255,255,255,0.025)', border: '1px solid rgba(201,168,76,0.25)', display: 'flex', alignItems: 'center', gap: 16 }}>
              <div style={{ width: 40, height: 40, flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid rgba(201,168,76,0.4)', background: 'rgba(201,168,76,0.07)' }}>
                <Icon name={c.icon} size={16} style={{ color: '#C9A84C' }} />
              </div>
              <div>
                <div style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 9, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(212,207,200,0.5)', marginBottom: 4 }}>{c.label}</div>
                <div style={{ fontFamily: 'Cormorant, serif', fontSize: 24, fontWeight: 400, color: '#F8F4EE' }}>{c.value}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── SLIDE 7: Привлечение инвестиций ─────────────────────────────────────────
function Slide7() {
  const invest = [
    { m: 1, pct: '35%', sum: '267,1', rest: '496,0' },
    { m: 2, pct: '35%', sum: '267,1', rest: '228,9' },
    { m: 3, pct: '20%', sum: '152,6', rest: '76,3' },
    { m: 4, pct: '10%', sum: '76,3', rest: '0,0' },
  ];

  return (
    <section style={{ minHeight: '100vh', background: '#0E0E12', position: 'relative', overflow: 'hidden', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '64px 64px' }}>
      <GridBg /><GeoCornerTR /><GeoCornerBL />
      <div style={{ position: 'relative', zIndex: 10 }}>
        <SectionLabel num="08" label="Привлечение инвестиций" />
        <H2>Условия <span style={{ fontStyle: 'italic', ...goldText }}>входа</span></H2>
        <p style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 12, color: 'rgba(212,207,200,0.65)', marginBottom: 40 }}>Освоение инвестиций в первые 4 месяца. Доход инвестора — 23,35% годовых.</p>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.1fr', gap: 40, alignItems: 'center' }}>
          {/* Terms */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {[
              { icon: 'Wallet', label: 'Сумма инвестиций', value: '763 091 185 ₽', big: true },
              { icon: 'TrendingUp', label: 'Доход инвестора', value: '23,35% годовых' },
              { icon: 'Clock', label: 'Срок проекта', value: '10 месяцев' },
            ].map((t) => (
              <div key={t.label} style={{ display: 'flex', alignItems: 'center', gap: 16, padding: '18px 22px', background: t.big ? 'rgba(201,168,76,0.1)' : 'rgba(255,255,255,0.025)', border: `1px solid ${t.big ? 'rgba(201,168,76,0.5)' : 'rgba(201,168,76,0.2)'}` }}>
                <div style={{ width: 42, height: 42, flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid rgba(201,168,76,0.4)', background: 'rgba(201,168,76,0.07)' }}>
                  <Icon name={t.icon} size={17} style={{ color: '#C9A84C' }} />
                </div>
                <div>
                  <div style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 9, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(212,207,200,0.55)', marginBottom: 4 }}>{t.label}</div>
                  <div style={{ fontFamily: 'Cormorant, serif', fontSize: t.big ? 30 : 24, fontWeight: 400, ...(t.big ? goldText : { color: '#F8F4EE' }) }}>{t.value}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Disbursement table */}
          <div>
            <div style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 9, letterSpacing: '0.35em', textTransform: 'uppercase', color: '#C9A84C', marginBottom: 14 }}>Освоение инвестиций по месяцам, млн ₽</div>
            <div style={{ display: 'grid', gridTemplateColumns: '0.7fr 0.7fr 1fr 1fr', padding: '10px 16px', background: 'rgba(201,168,76,0.12)', border: '1px solid rgba(201,168,76,0.3)' }}>
              {['Месяц', '%', 'Сумма', 'Остаток'].map((h) => (
                <span key={h} style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 9, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#C9A84C', fontWeight: 600 }}>{h}</span>
              ))}
            </div>
            {invest.map((r, i) => (
              <div key={r.m} style={{ display: 'grid', gridTemplateColumns: '0.7fr 0.7fr 1fr 1fr', padding: '14px 16px', background: i % 2 === 0 ? 'rgba(255,255,255,0.02)' : 'transparent', borderBottom: '1px solid rgba(201,168,76,0.1)', alignItems: 'center' }}>
                <span style={{ fontFamily: 'Cormorant, serif', fontSize: 22, fontWeight: 400, color: '#F8F4EE' }}>{r.m}</span>
                <span style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 13, fontWeight: 600, color: '#E8C87A' }}>{r.pct}</span>
                <span style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 13, color: '#F8F4EE' }}>{r.sum}</span>
                <span style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 13, color: 'rgba(212,207,200,0.7)' }}>{r.rest}</span>
              </div>
            ))}
            <div style={{ marginTop: 12, padding: '14px 16px', background: 'rgba(201,168,76,0.08)', border: '1px solid rgba(201,168,76,0.3)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 11, fontWeight: 600, color: '#C9A84C', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Итого инвестиций</span>
              <span style={{ fontFamily: 'Cormorant, serif', fontSize: 26, fontWeight: 500, ...goldText }}>763,1 млн ₽</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── SLIDE 8: Динамика проекта ───────────────────────────────────────────────
function Slide8() {
  const stages = [
    { name: 'Получение инвестирования', start: 1, end: 1 },
    { name: 'Юридическая проверка DD', start: 1, end: 2 },
    { name: 'Подготовка документов к сделке', start: 1, end: 2 },
    { name: 'Покупка объекта', start: 2, end: 2 },
    { name: 'Проектирование', start: 2, end: 3 },
    { name: 'Согласования и разрешения', start: 2, end: 4 },
    { name: 'Демонтаж', start: 3, end: 4 },
    { name: 'Инженерные системы', start: 4, end: 6 },
    { name: 'Возведение перегородок', start: 5, end: 7 },
    { name: 'Отделочные работы', start: 5, end: 8 },
    { name: 'Меблировка и брендирование', start: 7, end: 8 },
    { name: 'Маркетинг продаж', start: 4, end: 10, highlight: true },
    { name: 'Продажа помещений', start: 5, end: 10, highlight: true },
  ];
  const months = 10;

  return (
    <section style={{ minHeight: '100vh', background: '#0E0E12', position: 'relative', overflow: 'hidden', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '56px 64px' }}>
      <GridBg /><GeoCornerTL /><GeoCornerBR />
      <div style={{ position: 'relative', zIndex: 10 }}>
        <SectionLabel num="09" label="Динамика проекта" />
        <H2>Ход <span style={{ fontStyle: 'italic', ...goldText }}>реализации</span></H2>
        <p style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 12, color: 'rgba(212,207,200,0.65)', marginBottom: 28 }}>Полный цикл — 10 месяцев от инвестирования до передачи помещений покупателям.</p>

        {/* Month header */}
        <div style={{ display: 'flex', marginBottom: 10, paddingLeft: '38%' }}>
          {Array.from({ length: months }).map((_, i) => (
            <div key={i} style={{ flex: 1, textAlign: 'center', fontFamily: 'Montserrat, sans-serif', fontSize: 10, color: 'rgba(201,168,76,0.6)' }}>{i + 1}</div>
          ))}
        </div>

        {/* Gantt */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
          {stages.map((s) => (
            <div key={s.name} style={{ display: 'flex', alignItems: 'center' }}>
              <div style={{ width: '38%', fontFamily: 'Montserrat, sans-serif', fontSize: 11, color: s.highlight ? '#E8C87A' : 'rgba(212,207,200,0.8)', paddingRight: 16, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{s.name}</div>
              <div style={{ flex: 1, position: 'relative', height: 18, background: 'rgba(255,255,255,0.02)' }}>
                <div style={{
                  position: 'absolute',
                  left: `${((s.start - 1) / months) * 100}%`,
                  width: `${((s.end - s.start + 1) / months) * 100}%`,
                  height: '100%',
                  background: s.highlight ? GOLD_GRAD : 'rgba(201,168,76,0.35)',
                  borderRadius: 2,
                  boxShadow: s.highlight ? '0 0 12px rgba(201,168,76,0.3)' : 'none',
                }} />
              </div>
            </div>
          ))}
        </div>

        <div style={{ display: 'flex', gap: 24, marginTop: 24 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <div style={{ width: 18, height: 10, background: 'rgba(201,168,76,0.35)', borderRadius: 2 }} />
            <span style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 10, color: 'rgba(212,207,200,0.6)' }}>Строительные этапы</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <div style={{ width: 18, height: 10, background: GOLD_GRAD, borderRadius: 2 }} />
            <span style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 10, color: 'rgba(212,207,200,0.6)' }}>Маркетинг и продажи</span>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── SLIDE 9: Контакты ───────────────────────────────────────────────────────
function Slide9() {
  return (
    <section style={{ minHeight: '100vh', background: '#0E0E12', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', position: 'relative', overflow: 'hidden', padding: '80px 32px', textAlign: 'center' }}>
      <GeoCornerTL /><GeoCornerTR /><GeoCornerBL /><GeoCornerBR />
      <GridBg />
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: 500, height: 500, opacity: 0.04, pointerEvents: 'none' }}>
        <svg viewBox="0 0 500 500" fill="none"><polygon points="250,20 480,250 250,480 20,250" stroke="#C9A84C" strokeWidth="1" fill="none"/></svg>
      </div>

      <div style={{ position: 'relative', zIndex: 10, maxWidth: 680 }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12, marginBottom: 28 }}>
          <div style={{ background: 'linear-gradient(180deg, transparent, #C9A84C, transparent)', width: 1, height: 24 }} />
          <span style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 10, letterSpacing: '0.4em', textTransform: 'uppercase', color: '#C9A84C' }}>09 / Контакты</span>
          <div style={{ background: 'linear-gradient(180deg, transparent, #C9A84C, transparent)', width: 1, height: 24 }} />
        </div>

        <div style={{ fontFamily: 'Cormorant, serif', fontSize: 28, letterSpacing: '0.2em', ...goldText, fontWeight: 300, marginBottom: 4 }}>AMI GROUP</div>
        <div style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 10, letterSpacing: '0.35em', textTransform: 'uppercase', color: 'rgba(212,207,200,0.5)', marginBottom: 40 }}>Development Consulting</div>

        <h2 style={{ fontFamily: 'Cormorant, serif', fontSize: 'clamp(32px, 5vw, 52px)', fontWeight: 300, color: '#F8F4EE', marginBottom: 24, lineHeight: 1.2 }}>
          Обсудим ваш<br/><span style={{ fontStyle: 'italic', ...goldText }}>инвестиционный вход?</span>
        </h2>

        <div style={{ background: 'linear-gradient(90deg, transparent, #C9A84C, transparent)', height: 1, maxWidth: 240, margin: '0 auto 40px' }} />

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 20, marginBottom: 44, maxWidth: 520, marginLeft: 'auto', marginRight: 'auto' }}>
          {[
            { icon: 'Phone', label: 'Телефон', value: '+7 (495) 514-83-61' },
            { icon: 'Mail', label: 'Email', value: 'anna@6629556.ru' },
            { icon: 'Globe', label: 'Сайт', value: 'amigroup.info' },
            { icon: 'MapPin', label: 'Адрес', value: 'Москва, ул. Кузнецкий мост, д. 4' },
          ].map((c) => (
            <div key={c.label} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10 }}>
              <div style={{ width: 38, height: 38, display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid rgba(201,168,76,0.4)' }}>
                <Icon name={c.icon} size={13} style={{ color: '#C9A84C' }} />
              </div>
              <div style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 8, letterSpacing: '0.3em', textTransform: 'uppercase', color: 'rgba(201,168,76,0.6)' }}>{c.label}</div>
              <div style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 13, color: '#F8F4EE' }}>{c.value}</div>
            </div>
          ))}
        </div>

        <a href="tel:+74955148361" style={{ display: 'inline-block', padding: '14px 40px', fontFamily: 'Montserrat, sans-serif', fontSize: 11, fontWeight: 600, letterSpacing: '0.25em', textTransform: 'uppercase', background: GOLD_GRAD, color: '#0E0E12', border: 'none', cursor: 'pointer', textDecoration: 'none', transition: 'transform 0.2s ease' }}
          onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.05)')}
          onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
        >
          Связаться с нами
        </a>

        <div style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 9, letterSpacing: '0.3em', textTransform: 'uppercase', color: 'rgba(201,168,76,0.35)', marginTop: 56 }}>
          AMI GROUP © 2014 ·{' '}
          <a href="https://amigroup.info" target="_blank" rel="noopener noreferrer" style={{ color: '#C9A84C', textDecoration: 'none', borderBottom: '1px solid rgba(201,168,76,0.4)' }}>amigroup.info</a>
        </div>
      </div>
    </section>
  );
}

// ─── PDF Button ──────────────────────────────────────────────────────────────
function PdfButton() {
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
function NavDots({ current, total, onGo }: { current: number; total: number; onGo: (i: number) => void }) {
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

// ─── MAIN ────────────────────────────────────────────────────────────────────
export default function Index() {
  const [current, setCurrent] = useState(0);
  const slideRefs = useRef<(HTMLDivElement | null)[]>([]);
  const slides = [Slide1, Slide2, Slide3, SlidePlan, Slide4, Slide5, Slide6, Slide7, Slide8, Slide9];

  const scrollToSlide = (i: number) => slideRefs.current[i]?.scrollIntoView({ behavior: 'smooth' });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) {
          const idx = slideRefs.current.indexOf(e.target as HTMLDivElement);
          if (idx !== -1) setCurrent(idx);
        }
      }),
      { threshold: 0.4 }
    );
    slideRefs.current.forEach((s) => s && observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <div style={{ ...CSS_VARS, background: '#0E0E12' }}>
      <style>{`
        @keyframes fadeUp { from { opacity: 0; transform: translateY(28px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes mapPulse { 0% { transform: translate(-50%, -50%) scale(0.6); opacity: 0.7; } 100% { transform: translate(-50%, -50%) scale(2.6); opacity: 0; } }
        @media print {
          .no-print { display: none !important; }
          * { -webkit-print-color-adjust: exact !important; print-color-adjust: exact !important; }
          section { page-break-after: always; break-after: page; min-height: 100vh; }
        }
      `}</style>

      {slides.map((SlideComp, i) => (
        <div key={i} ref={(el) => { slideRefs.current[i] = el; }}>
          <SlideComp />
        </div>
      ))}

      <NavDots current={current} total={slides.length} onGo={scrollToSlide} />
      <PdfButton />
    </div>
  );
}