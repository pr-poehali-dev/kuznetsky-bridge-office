import { useState, useEffect, useRef } from 'react';
import Icon from '@/components/ui/icon';

const IMAGES = {
  coffeePoint: 'https://cdn.poehali.dev/files/4588da5f-3b60-48ee-b10b-6223d23ce5be.JPG',
  financial: 'https://cdn.poehali.dev/files/9cf98b58-7295-4dde-a02a-57d3fcd6ff9f.jpg',
  breakRoom: 'https://cdn.poehali.dev/files/b75d1469-7163-4781-ae09-f682e25b0a49.JPG',
  reception: 'https://cdn.poehali.dev/files/db488f96-2d47-46ad-9b34-9ca30ac0ed3b.JPG',
  menSpace: 'https://cdn.poehali.dev/files/9d6ad558-12d8-4655-8601-c623f5d8a6c8.JPG',
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

function GeoCornerTL() {
  return (
    <div className="absolute top-8 left-8 pointer-events-none">
      <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
        <path d="M0 60 L0 0 L60 0" stroke="#C9A84C" strokeWidth="1" strokeOpacity="0.5" fill="none"/>
      </svg>
    </div>
  );
}
function GeoCornerTR() {
  return (
    <div className="absolute top-8 right-8 pointer-events-none rotate-90">
      <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
        <path d="M0 60 L0 0 L60 0" stroke="#C9A84C" strokeWidth="1" strokeOpacity="0.5" fill="none"/>
      </svg>
    </div>
  );
}
function GeoCornerBL() {
  return (
    <div className="absolute bottom-8 left-8 pointer-events-none -rotate-90">
      <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
        <path d="M0 60 L0 0 L60 0" stroke="#C9A84C" strokeWidth="1" strokeOpacity="0.5" fill="none"/>
      </svg>
    </div>
  );
}
function GeoCornerBR() {
  return (
    <div className="absolute bottom-8 right-8 pointer-events-none rotate-180">
      <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
        <path d="M0 60 L0 0 L60 0" stroke="#C9A84C" strokeWidth="1" strokeOpacity="0.5" fill="none"/>
      </svg>
    </div>
  );
}

function GridBg() {
  return (
    <div className="absolute inset-0 pointer-events-none" style={{
      backgroundImage: 'linear-gradient(rgba(201,168,76,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.06) 1px, transparent 1px)',
      backgroundSize: '80px 80px',
      opacity: 0.6,
    }} />
  );
}

function DiamondBullet() {
  return (
    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" className="inline-block flex-shrink-0 mt-0.5">
      <polygon points="5,0 10,5 5,10 0,5" fill="#C9A84C" opacity="0.85"/>
    </svg>
  );
}

function GoldBar() {
  return (
    <div style={{
      background: 'linear-gradient(90deg, transparent, #C9A84C, transparent)',
      height: '1px',
      width: '100%',
      margin: '24px 0',
    }} />
  );
}

function SectionLabel({ num, label }: { num: string; label: string }) {
  return (
    <div className="flex items-center gap-3 mb-3">
      <div style={{
        background: 'linear-gradient(180deg, transparent, #C9A84C, transparent)',
        width: '1px', height: '24px', flexShrink: 0,
      }} />
      <span style={{
        fontFamily: 'Montserrat, sans-serif',
        fontSize: '10px',
        letterSpacing: '0.4em',
        textTransform: 'uppercase',
        color: '#C9A84C',
      }}>{num} / {label}</span>
    </div>
  );
}

// ─── SLIDE 1: Hero ───────────────────────────────────────────────────────────
function Slide1() {
  return (
    <section style={{ minHeight: '100vh', background: '#0E0E12', position: 'relative', overflow: 'hidden', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '80px 32px' }}>
      <GeoCornerTL /><GeoCornerTR /><GeoCornerBL /><GeoCornerBR />
      <GridBg />

      {/* Diamond decor */}
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: 600, height: 600, opacity: 0.04, pointerEvents: 'none' }}>
        <svg viewBox="0 0 600 600" fill="none">
          <polygon points="300,20 580,300 300,580 20,300" stroke="#C9A84C" strokeWidth="1" fill="none"/>
          <polygon points="300,80 520,300 300,520 80,300" stroke="#C9A84C" strokeWidth="1" fill="none"/>
        </svg>
      </div>

      <div style={{ position: 'relative', zIndex: 10, textAlign: 'center', maxWidth: 800 }}>
        {/* Brand */}
        <div style={{ marginBottom: 40, opacity: 0, animation: 'fadeIn 0.8s ease 0.1s forwards' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12, marginBottom: 6 }}>
            <div style={{ background: 'linear-gradient(180deg, transparent, #C9A84C, transparent)', width: 1, height: 28 }} />
            <span style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 10, letterSpacing: '0.4em', textTransform: 'uppercase', color: '#D4CFC8' }}>Development Consulting</span>
            <div style={{ background: 'linear-gradient(180deg, transparent, #C9A84C, transparent)', width: 1, height: 28 }} />
          </div>
          <div style={{ fontFamily: 'Cormorant, serif', fontSize: 28, letterSpacing: '0.2em', background: 'linear-gradient(135deg, #E8C87A, #C9A84C, #A07830)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', fontWeight: 300 }}>
            AMI GROUP
          </div>
        </div>

        {/* Title */}
        <h1 style={{ fontFamily: 'Cormorant, serif', fontSize: 'clamp(56px, 8vw, 96px)', fontWeight: 300, lineHeight: 1, color: '#F8F4EE', marginBottom: 8, opacity: 0, animation: 'fadeUp 0.9s ease 0.2s forwards' }}>
          Кузнецкий<br/>
          <span style={{ fontStyle: 'italic', background: 'linear-gradient(135deg, #E8C87A, #C9A84C, #A07830)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>мост</span>
        </h1>

        <div style={{ background: 'linear-gradient(90deg, transparent, #C9A84C, transparent)', height: 1, maxWidth: 280, margin: '28px auto', opacity: 0, animation: 'fadeIn 0.6s ease 0.35s forwards' }} />

        <p style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 11, letterSpacing: '0.25em', textTransform: 'uppercase', color: '#D4CFC8', marginBottom: 4, opacity: 0, animation: 'fadeIn 0.6s ease 0.45s forwards' }}>
          Премиальный офисный проект
        </p>
        <p style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 10, letterSpacing: '0.2em', color: 'rgba(201,168,76,0.7)', opacity: 0, animation: 'fadeIn 0.6s ease 0.5s forwards' }}>
          Мини-офисы от 13 до 45 м² · Москва
        </p>

        {/* KPIs */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 0, maxWidth: 480, margin: '56px auto 0', opacity: 0, animation: 'fadeUp 0.8s ease 0.6s forwards' }}>
          {[
            { value: '1 350', unit: 'м²', label: 'Общая площадь' },
            { value: '18', unit: 'мес', label: 'Срок реализации' },
            { value: '92,9', unit: '%', label: 'ROI проекта' },
          ].map((m, i) => (
            <div key={i} style={{ textAlign: 'center', padding: '0 24px', borderRight: i < 2 ? '1px solid rgba(201,168,76,0.2)' : 'none' }}>
              <div style={{ fontFamily: 'Cormorant, serif', fontSize: 32, fontWeight: 300, background: 'linear-gradient(135deg, #E8C87A, #C9A84C)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', lineHeight: 1.1 }}>
                {m.value}<span style={{ fontSize: 18 }}>{m.unit}</span>
              </div>
              <div style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 9, letterSpacing: '0.25em', textTransform: 'uppercase', color: 'rgba(212,207,200,0.65)', marginTop: 6 }}>{m.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll hint */}
      <div className="no-print" style={{ position: 'absolute', bottom: 36, left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8, opacity: 0, animation: 'fadeIn 1s ease 1s forwards' }}>
        <span style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 9, letterSpacing: '0.3em', textTransform: 'uppercase', color: 'rgba(201,168,76,0.4)' }}>Листать</span>
        <div style={{ width: 1, height: 32, background: 'linear-gradient(to bottom, #C9A84C, transparent)' }} />
      </div>
    </section>
  );
}

// ─── SLIDE 2: Локация ────────────────────────────────────────────────────────
function Slide2() {
  return (
    <section style={{ minHeight: '100vh', background: '#0E0E12', display: 'flex', flexWrap: 'wrap', position: 'relative' }}>
      {/* Image */}
      <div style={{ flex: '1 1 400px', minHeight: '50vh', position: 'relative', overflow: 'hidden' }}>
        <img src={IMAGES.financial} alt="Кузнецкий мост" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.55) saturate(0.6)' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, transparent 60%, #0E0E12)' }} />
        <div style={{ position: 'absolute', bottom: 32, left: 32, display: 'inline-flex', alignItems: 'center', gap: 8, padding: '8px 14px', background: 'rgba(201,168,76,0.12)', border: '1px solid rgba(201,168,76,0.4)' }}>
          <Icon name="MapPin" size={11} style={{ color: '#C9A84C' }} />
          <span style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 10, letterSpacing: '0.3em', textTransform: 'uppercase', color: '#C9A84C' }}>г. Москва</span>
        </div>
      </div>

      {/* Content */}
      <div style={{ flex: '1 1 400px', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '64px 56px', position: 'relative' }}>
        <GeoCornerTR />
        <SectionLabel num="02" label="Локация" />

        <h2 style={{ fontFamily: 'Cormorant, serif', fontSize: 'clamp(40px, 5vw, 64px)', fontWeight: 300, color: '#F8F4EE', lineHeight: 1.1, marginBottom: 8 }}>
          Кузнецкий<br/>
          <span style={{ fontStyle: 'italic', background: 'linear-gradient(135deg, #E8C87A, #C9A84C)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>мост</span>
        </h2>

        <GoldBar />

        <p style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 13, lineHeight: 1.8, color: 'rgba(212,207,200,0.8)', marginBottom: 32 }}>
          Исторический центр деловой Москвы. Одна из самых престижных улиц города с высочайшей концентрацией luxury-брендов, ресторанов и культурных институций.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
          {[
            { icon: 'Train', label: 'Метро', value: '2 мин пешком — ст. Кузнецкий Мост' },
            { icon: 'Building2', label: 'Окружение', value: 'ЦУМ, Третьяковка на Кузнецком, галереи' },
            { icon: 'Zap', label: 'Электричество', value: '205 кВт выделенная мощность' },
            { icon: 'Clock', label: 'Доступность', value: 'Круглосуточно, 7 дней в неделю' },
            { icon: 'Shield', label: 'Безопасность', value: 'Охрана 24/7, видеонаблюдение' },
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
    { size: '13–18', type: 'Мини-офис S', desc: 'Идеально для 1–2 человек. Отдельный вход, панорамное остекление.', price: '1 200 000', features: ['Высокие потолки', 'Кондиционирование', 'Оптоволокно'] },
    { size: '20–30', type: 'Офис M', desc: 'Для небольшой команды 3–5 человек. Переговорный стол, зона отдыха.', price: '1 200 000', features: ['Приёмная зона', 'Два сектора', 'Smart-освещение'] },
    { size: '35–45', type: 'Офис L', desc: 'Представительский офис для 6–10 человек. Мансардный формат.', price: '1 000 000', features: ['Мансарда', 'Панорамный вид', 'Отдельный санузел'] },
  ];

  return (
    <section style={{ minHeight: '100vh', background: '#0E0E12', position: 'relative', overflow: 'hidden', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '64px 64px' }}>
      <GridBg />
      <GeoCornerTL /><GeoCornerBR />
      <div style={{ position: 'relative', zIndex: 10 }}>
        <SectionLabel num="03" label="Планировки" />
        <h2 style={{ fontFamily: 'Cormorant, serif', fontSize: 'clamp(36px, 5vw, 60px)', fontWeight: 300, color: '#F8F4EE', marginBottom: 6 }}>
          Форматы <span style={{ fontStyle: 'italic', background: 'linear-gradient(135deg, #E8C87A, #C9A84C)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>офисов</span>
        </h2>
        <p style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 12, color: 'rgba(212,207,200,0.65)', marginBottom: 40 }}>
          Помещения 2-го, 3-го этажей и мансарды · Полезная площадь 1 350 м²
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 20 }}>
          {plans.map((p, i) => (
            <div key={i} style={{ background: 'rgba(255,255,255,0.025)', border: '1px solid rgba(201,168,76,0.25)', padding: '32px 28px', position: 'relative' }}>
              {/* geo corners */}
              <div style={{ position: 'absolute', top: -1, left: -1, width: 18, height: 18, borderTop: '2px solid #C9A84C', borderLeft: '2px solid #C9A84C' }} />
              <div style={{ position: 'absolute', bottom: -1, right: -1, width: 18, height: 18, borderBottom: '2px solid #C9A84C', borderRight: '2px solid #C9A84C' }} />

              <div style={{ fontFamily: 'Cormorant, serif', fontSize: 56, fontWeight: 300, background: 'linear-gradient(135deg, #E8C87A, #C9A84C)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', lineHeight: 1 }}>
                {p.size}
              </div>
              <div style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 9, letterSpacing: '0.3em', textTransform: 'uppercase', color: 'rgba(212,207,200,0.5)', marginBottom: 16 }}>кв. метров</div>

              <div style={{ background: 'linear-gradient(90deg, transparent, #C9A84C, transparent)', height: 1, marginBottom: 16 }} />

              <div style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 10, fontWeight: 600, letterSpacing: '0.25em', textTransform: 'uppercase', color: '#C9A84C', marginBottom: 10 }}>{p.type}</div>
              <p style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 12, lineHeight: 1.7, color: 'rgba(212,207,200,0.75)', marginBottom: 20 }}>{p.desc}</p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 24 }}>
                {p.features.map((f) => (
                  <div key={f} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <DiamondBullet />
                    <span style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 12, color: '#F8F4EE' }}>{f}</span>
                  </div>
                ))}
              </div>

              <div style={{ borderTop: '1px solid rgba(201,168,76,0.2)', paddingTop: 16 }}>
                <div style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 9, letterSpacing: '0.3em', textTransform: 'uppercase', color: 'rgba(201,168,76,0.6)', marginBottom: 4 }}>Ставка продажи</div>
                <div style={{ fontFamily: 'Cormorant, serif', fontSize: 22, fontWeight: 300, color: '#F8F4EE' }}>{p.price} <span style={{ fontSize: 14 }}>₽/м²</span></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── SLIDE 4: Пространства ───────────────────────────────────────────────────
function Slide4() {
  return (
    <section style={{ minHeight: '100vh', background: '#0E0E12', position: 'relative', padding: '64px 64px' }}>
      <div style={{ position: 'relative', zIndex: 10 }}>
        <SectionLabel num="04" label="Общие пространства" />
        <h2 style={{ fontFamily: 'Cormorant, serif', fontSize: 'clamp(36px, 5vw, 60px)', fontWeight: 300, color: '#F8F4EE', marginBottom: 6 }}>
          Детали, которые <span style={{ fontStyle: 'italic', background: 'linear-gradient(135deg, #E8C87A, #C9A84C)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>вдохновляют</span>
        </h2>
        <p style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 12, color: 'rgba(212,207,200,0.65)', marginBottom: 32 }}>
          Каждый элемент — от reception до coffee point — выполнен на уровне luxury boutique hotel
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gridTemplateRows: 'auto auto', gap: 12 }}>
          {/* Coffee Point — large */}
          <div style={{ position: 'relative', overflow: 'hidden', aspectRatio: '4/3', gridRow: '1 / 3' }}>
            <img src={IMAGES.coffeePoint} alt="Coffee Point" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.65) saturate(0.8)' }} />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, #0E0E12 0%, transparent 50%)' }} />
            <div style={{ position: 'absolute', top: 12, left: 12 }}><svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M0 24 L0 0 L24 0" stroke="#C9A84C" strokeWidth="1" strokeOpacity="0.6" fill="none"/></svg></div>
            <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '20px 24px' }}>
              <div style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 9, letterSpacing: '0.35em', textTransform: 'uppercase', color: '#C9A84C', marginBottom: 4 }}>Coffee Point</div>
              <p style={{ fontFamily: 'Cormorant, serif', fontSize: 22, fontWeight: 300, color: '#F8F4EE', lineHeight: 1.3 }}>Неоновый кофе-уголок с деревянными акцентами</p>
            </div>
          </div>

          {/* Break Room */}
          <div style={{ position: 'relative', overflow: 'hidden' }}>
            <img src={IMAGES.breakRoom} alt="Break Room" style={{ width: '100%', height: '100%', objectFit: 'cover', minHeight: 180, filter: 'brightness(0.6) saturate(0.75)' }} />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, #0E0E12 0%, transparent 60%)' }} />
            <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '14px 18px' }}>
              <div style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 9, letterSpacing: '0.3em', textTransform: 'uppercase', color: '#C9A84C', marginBottom: 3 }}>Break Zone</div>
              <p style={{ fontFamily: 'Cormorant, serif', fontSize: 18, fontWeight: 300, color: '#F8F4EE' }}>Зона отдыха и переговоров</p>
            </div>
          </div>

          {/* Bottom row: 2 images */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
            <div style={{ position: 'relative', overflow: 'hidden', minHeight: 160 }}>
              <img src={IMAGES.reception} alt="Reception" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.65) saturate(0.8)' }} />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, #0E0E12, transparent 60%)' }} />
              <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '12px 14px' }}>
                <div style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 8, letterSpacing: '0.3em', textTransform: 'uppercase', color: '#C9A84C', marginBottom: 2 }}>Reception</div>
                <p style={{ fontFamily: 'Cormorant, serif', fontSize: 15, fontWeight: 300, color: '#F8F4EE' }}>Зелёная ресепция</p>
              </div>
            </div>
            <div style={{ position: 'relative', overflow: 'hidden', minHeight: 160 }}>
              <img src={IMAGES.menSpace} alt="Men Space" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.65) saturate(0.8)' }} />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, #0E0E12, transparent 60%)' }} />
              <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '12px 14px' }}>
                <div style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 8, letterSpacing: '0.3em', textTransform: 'uppercase', color: '#C9A84C', marginBottom: 2 }}>Men Space</div>
                <p style={{ fontFamily: 'Cormorant, serif', fontSize: 15, fontWeight: 300, color: '#F8F4EE' }}>Авторские санузлы</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── SLIDE 5: Финансы ────────────────────────────────────────────────────────
function Slide5() {
  const costs = [
    { label: 'Покупка объекта', value: '500,0', bold: false, gold: false },
    { label: 'Ремонт (110 000 ₽/м²) и документы', value: '187,3', bold: false, gold: false },
    { label: 'Общие затраты (себестоимость)', value: '687,3', bold: true, gold: false },
    { label: 'Выручка от продажи', value: '1 485,0', bold: true, gold: true },
    { label: 'Прибыль до налога', value: '797,7', bold: true, gold: false },
    { label: 'Налог на прибыль (20%)', value: '159,5', bold: false, gold: false },
    { label: 'Чистая прибыль после налога', value: '638,2', bold: true, gold: true },
  ];

  const kpi = [
    { label: 'Прибыль до налога', value: '797,7', unit: 'млн ₽', icon: 'TrendingUp' },
    { label: 'Чистая прибыль', value: '638,2', unit: 'млн ₽', icon: 'BadgePercent' },
    { label: 'ROI после налога', value: '92,9', unit: '%', icon: 'Target' },
    { label: 'Годовая доходность', value: '54,9', unit: '%', icon: 'BarChart3' },
  ];

  return (
    <section style={{ minHeight: '100vh', background: '#0E0E12', position: 'relative', overflow: 'hidden', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '64px 64px' }}>
      <GridBg />
      <GeoCornerTR /><GeoCornerBL />
      <div style={{ position: 'relative', zIndex: 10 }}>
        <SectionLabel num="05" label="Финансовые показатели" />
        <h2 style={{ fontFamily: 'Cormorant, serif', fontSize: 'clamp(36px, 5vw, 60px)', fontWeight: 300, color: '#F8F4EE', marginBottom: 4 }}>
          Экономика <span style={{ fontStyle: 'italic', background: 'linear-gradient(135deg, #E8C87A, #C9A84C)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>проекта</span>
        </h2>
        <p style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 10, color: 'rgba(212,207,200,0.5)', marginBottom: 36 }}>
          * Расчёты без учёта арендного дохода. Все суммы в миллионах рублей.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 40 }}>
          {/* Left: table */}
          <div>
            <div style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 9, letterSpacing: '0.35em', textTransform: 'uppercase', color: '#C9A84C', marginBottom: 14 }}>Структура выручки</div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 8, marginBottom: 28 }}>
              {[
                { label: 'Полезная площадь', value: '1 350 м²', highlight: false },
                { label: 'Средняя ставка', value: '1 100 000 ₽/м²', highlight: false },
                { label: 'Выручка', value: '1 485,0 млн ₽', highlight: true },
              ].map((s, i) => (
                <div key={i} style={{ padding: '14px 12px', background: s.highlight ? 'rgba(201,168,76,0.1)' : 'rgba(255,255,255,0.03)', border: `1px solid ${s.highlight ? 'rgba(201,168,76,0.5)' : 'rgba(201,168,76,0.18)'}` }}>
                  <div style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 8, letterSpacing: '0.2em', textTransform: 'uppercase', color: s.highlight ? '#C9A84C' : 'rgba(212,207,200,0.55)', marginBottom: 6 }}>{s.label}</div>
                  <div style={{ fontFamily: 'Cormorant, serif', fontSize: 16, fontWeight: s.highlight ? 500 : 300, color: s.highlight ? '#E8C87A' : '#F8F4EE', lineHeight: 1.2 }}>{s.value}</div>
                </div>
              ))}
            </div>

            <div style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 9, letterSpacing: '0.35em', textTransform: 'uppercase', color: '#C9A84C', marginBottom: 10 }}>Статьи затрат</div>
            {costs.map((row, i) => (
              <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '11px 14px', background: row.gold ? 'rgba(201,168,76,0.08)' : i % 2 === 0 ? 'rgba(255,255,255,0.02)' : 'transparent', borderBottom: '1px solid rgba(201,168,76,0.1)' }}>
                <span style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 11, fontWeight: row.bold ? 600 : 300, color: row.gold ? '#C9A84C' : 'rgba(212,207,200,0.85)' }}>{row.label}</span>
                <span style={{ fontFamily: 'Cormorant, serif', fontSize: 20, fontWeight: row.bold ? 500 : 300, background: row.gold ? 'linear-gradient(135deg, #E8C87A, #C9A84C)' : 'none', WebkitBackgroundClip: row.gold ? 'text' : 'unset', WebkitTextFillColor: row.gold ? 'transparent' : 'unset', color: row.gold ? undefined : '#F8F4EE' }}>
                  {row.value}
                </span>
              </div>
            ))}

            <p style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 9, color: 'rgba(212,207,200,0.45)', marginTop: 10, lineHeight: 1.6 }}>
              * Ставка 1 200 000 ₽/м² — 2 этаж и 3 этаж, мансарда — 1 000 000 ₽/м²
            </p>
          </div>

          {/* Right: KPI cards */}
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', gap: 0 }}>
            <div style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 9, letterSpacing: '0.35em', textTransform: 'uppercase', color: '#C9A84C', marginBottom: 14 }}>Ключевые показатели</div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 20 }}>
              {kpi.map((k, i) => (
                <div key={i} style={{ textAlign: 'center', padding: '24px 16px', background: 'rgba(255,255,255,0.025)', border: '1px solid rgba(201,168,76,0.25)', position: 'relative' }}>
                  <div style={{ position: 'absolute', top: -1, left: -1, width: 14, height: 14, borderTop: '2px solid #C9A84C', borderLeft: '2px solid #C9A84C' }} />
                  <div style={{ position: 'absolute', bottom: -1, right: -1, width: 14, height: 14, borderBottom: '2px solid #C9A84C', borderRight: '2px solid #C9A84C' }} />
                  <div style={{ width: 36, height: 36, margin: '0 auto 14px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid rgba(201,168,76,0.4)', background: 'rgba(201,168,76,0.07)' }}>
                    <Icon name={k.icon} size={14} style={{ color: '#C9A84C' }} />
                  </div>
                  <div style={{ fontFamily: 'Cormorant, serif', fontSize: 38, fontWeight: 300, background: 'linear-gradient(135deg, #E8C87A, #C9A84C)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', lineHeight: 1 }}>
                    {k.value}
                  </div>
                  <div style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 9, letterSpacing: '0.2em', color: 'rgba(201,168,76,0.7)', marginTop: 2 }}>{k.unit}</div>
                  <div style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 9, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(212,207,200,0.5)', marginTop: 8 }}>{k.label}</div>
                </div>
              ))}
            </div>

            <div style={{ padding: '18px 20px', border: '1px solid rgba(201,168,76,0.2)', background: 'rgba(201,168,76,0.04)', display: 'flex', gap: 12, alignItems: 'flex-start' }}>
              <Icon name="Info" size={12} style={{ color: '#C9A84C', flexShrink: 0, marginTop: 2 }} />
              <p style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 10, lineHeight: 1.7, color: 'rgba(212,207,200,0.6)' }}>
                Налог рассчитан по ставке 20% с прибыли от продажи. Расчёты представлены без учёта арендного дохода.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── SLIDE 6: Контакты ───────────────────────────────────────────────────────
function Slide6() {
  return (
    <section style={{ minHeight: '100vh', background: '#0E0E12', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', position: 'relative', overflow: 'hidden', padding: '80px 32px', textAlign: 'center' }}>
      <GeoCornerTL /><GeoCornerTR /><GeoCornerBL /><GeoCornerBR />
      <GridBg />

      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: 500, height: 500, opacity: 0.04, pointerEvents: 'none' }}>
        <svg viewBox="0 0 500 500" fill="none"><polygon points="250,20 480,250 250,480 20,250" stroke="#C9A84C" strokeWidth="1" fill="none"/></svg>
      </div>

      <div style={{ position: 'relative', zIndex: 10, maxWidth: 640 }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12, marginBottom: 28 }}>
          <div style={{ background: 'linear-gradient(180deg, transparent, #C9A84C, transparent)', width: 1, height: 24 }} />
          <span style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 10, letterSpacing: '0.4em', textTransform: 'uppercase', color: '#C9A84C' }}>06 / Контакты</span>
          <div style={{ background: 'linear-gradient(180deg, transparent, #C9A84C, transparent)', width: 1, height: 24 }} />
        </div>

        <div style={{ fontFamily: 'Cormorant, serif', fontSize: 28, letterSpacing: '0.2em', background: 'linear-gradient(135deg, #E8C87A, #C9A84C)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', fontWeight: 300, marginBottom: 4 }}>AMI GROUP</div>
        <div style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 10, letterSpacing: '0.35em', textTransform: 'uppercase', color: 'rgba(212,207,200,0.5)', marginBottom: 40 }}>Development Consulting</div>

        <h2 style={{ fontFamily: 'Cormorant, serif', fontSize: 'clamp(32px, 5vw, 52px)', fontWeight: 300, color: '#F8F4EE', marginBottom: 24, lineHeight: 1.2 }}>
          Обсудим ваш<br/>
          <span style={{ fontStyle: 'italic', background: 'linear-gradient(135deg, #E8C87A, #C9A84C)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>офис мечты?</span>
        </h2>

        <div style={{ background: 'linear-gradient(90deg, transparent, #C9A84C, transparent)', height: 1, maxWidth: 240, margin: '0 auto 40px' }} />

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 20, marginBottom: 44 }}>
          {[
            { icon: 'Phone', label: 'Телефон', value: '+7 (495) 000-00-00' },
            { icon: 'Mail', label: 'Email', value: 'info@amigroup.ru' },
            { icon: 'MapPin', label: 'Адрес', value: 'Кузнецкий мост, Москва' },
          ].map((c) => (
            <div key={c.label} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10 }}>
              <div style={{ width: 38, height: 38, display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid rgba(201,168,76,0.4)' }}>
                <Icon name={c.icon} size={13} style={{ color: '#C9A84C' }} />
              </div>
              <div style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 8, letterSpacing: '0.3em', textTransform: 'uppercase', color: 'rgba(201,168,76,0.6)' }}>{c.label}</div>
              <div style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 12, color: '#F8F4EE' }}>{c.value}</div>
            </div>
          ))}
        </div>

        <button
          style={{ padding: '14px 40px', fontFamily: 'Montserrat, sans-serif', fontSize: 11, fontWeight: 600, letterSpacing: '0.25em', textTransform: 'uppercase', background: 'linear-gradient(135deg, #E8C87A, #C9A84C)', color: '#0E0E12', border: 'none', cursor: 'pointer', transition: 'transform 0.2s ease' }}
          onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.05)')}
          onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
        >
          Получить презентацию
        </button>

        <div style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 9, letterSpacing: '0.3em', textTransform: 'uppercase', color: 'rgba(201,168,76,0.25)', marginTop: 56 }}>
          AMI GROUP © 2024 · Кузнецкий мост, Москва
        </div>
      </div>
    </section>
  );
}

// ─── PDF Button ──────────────────────────────────────────────────────────────
function PdfButton() {
  return (
    <button
      className="no-print"
      onClick={() => window.print()}
      style={{ position: 'fixed', bottom: 24, right: 24, zIndex: 1000, display: 'flex', alignItems: 'center', gap: 8, padding: '12px 20px', background: 'linear-gradient(135deg, #E8C87A, #C9A84C)', color: '#0E0E12', border: 'none', cursor: 'pointer', fontFamily: 'Montserrat, sans-serif', fontSize: 10, fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', boxShadow: '0 8px 32px rgba(201,168,76,0.35)', transition: 'transform 0.2s ease' }}
      onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.05)')}
      onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
    >
      <Icon name="Download" size={13} />
      Сохранить PDF
    </button>
  );
}

// ─── Nav Dots ─────────────────────────────────────────────────────────────────
function NavDots({ current, onGo }: { current: number; onGo: (i: number) => void }) {
  return (
    <div className="no-print" style={{ position: 'fixed', right: 20, top: '50%', transform: 'translateY(-50%)', zIndex: 999, display: 'flex', flexDirection: 'column', gap: 8 }}>
      {Array.from({ length: 6 }).map((_, i) => (
        <button
          key={i}
          onClick={() => onGo(i)}
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

  const scrollToSlide = (i: number) => {
    slideRefs.current[i]?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const idx = slideRefs.current.indexOf(e.target as HTMLDivElement);
            if (idx !== -1) setCurrent(idx);
          }
        });
      },
      { threshold: 0.4 }
    );
    slideRefs.current.forEach((s) => s && observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const slides = [Slide1, Slide2, Slide3, Slide4, Slide5, Slide6];

  return (
    <div style={{ ...CSS_VARS, background: '#0E0E12' }}>
      <style>{`
        @keyframes fadeUp { from { opacity: 0; transform: translateY(28px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @media print {
          .no-print { display: none !important; }
          * { -webkit-print-color-adjust: exact !important; print-color-adjust: exact !important; }
          section { page-break-after: always; break-after: page; min-height: 100vh; }
        }
        .font-cormorant { font-family: 'Cormorant', serif !important; }
        .font-montserrat { font-family: 'Montserrat', sans-serif !important; }
      `}</style>

      {slides.map((SlideComp, i) => (
        <div key={i} ref={(el) => { slideRefs.current[i] = el; }}>
          <SlideComp />
        </div>
      ))}

      <NavDots current={current} onGo={scrollToSlide} />
      <PdfButton />
    </div>
  );
}