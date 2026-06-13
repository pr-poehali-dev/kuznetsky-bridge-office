import Icon from '@/components/ui/icon';
import { IMAGES, goldText, GeoCornerTL, GeoCornerTR, GeoCornerBL, GeoCornerBR, GridBg, DiamondBullet, GoldBar, SectionLabel, H2, GoldMap } from './shared';

// ─── SLIDE 1: Hero ───────────────────────────────────────────────────────────
export function Slide1() {
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

// ─── SLIDE 2: Локация ────────────────────────────────────────────────────────
export function Slide2() {
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
export function Slide3() {
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

// ─── SLIDE: Поэтажный план до / после ────────────────────────────────────────
export function SlidePlan() {
  const floors = [
    { img: IMAGES.planFloor2, label: '2 этаж' },
    { img: IMAGES.planFloor3, label: '3 этаж' },
    { img: IMAGES.planMansard, label: 'Мансарда' },
  ];
  const zones = [
    { icon: 'ConciergeBell', title: 'Зона ресепшн', desc: 'Парадная встреча гостей и резидентов' },
    { icon: 'Sofa', title: 'Лаундж · софт-зона', desc: 'Мягкие диваны для отдыха и неформальных встреч' },
    { icon: 'Coffee', title: 'Кофе-пойнт', desc: 'Кофе-станция и зона самообслуживания' },
    { icon: 'Printer', title: 'Место для печати', desc: 'Общая зона оргтехники и документооборота' },
    { icon: 'ShowerHead', title: 'Раздельные санузлы + душевая', desc: 'Мужской и женский, с одной душевой кабиной' },
    { icon: 'Users', title: 'Переговорная', desc: 'Комната для совещаний и презентаций' },
    { icon: 'UtensilsCrossed', title: 'Кухонная зона', desc: 'Полноценная кухня-столовая для резидентов' },
    { icon: 'MicVocal', title: 'Акустические шумоизоляционные кабины', desc: 'Для zoom-встреч и вебинаров' },
  ];

  return (
    <section style={{ minHeight: '100vh', background: '#0E0E12', position: 'relative', overflow: 'hidden', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '48px 64px' }}>
      <GridBg /><GeoCornerTL /><GeoCornerBR />
      <div style={{ position: 'relative', zIndex: 10 }}>
        <SectionLabel num="04" label="Поэтажный план · до / после" />
        <H2>Было <span style={{ fontStyle: 'italic', ...goldText }}>—</span> станет</H2>
        <p style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 12, color: 'rgba(212,207,200,0.65)', marginBottom: 24 }}>Сохраняем контур здания и лестницы, перепланируем под современные мини-офисы с полным набором сервисных зон</p>

        <div style={{ display: 'grid', gridTemplateColumns: '1.05fr 1fr', gap: 32, alignItems: 'stretch' }}>
          {/* ДО */}
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
              <div style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 10, fontWeight: 700, letterSpacing: '0.3em', textTransform: 'uppercase', color: 'rgba(212,207,200,0.55)' }}>До · текущие планы</div>
              <div style={{ flex: 1, height: 1, background: 'rgba(201,168,76,0.2)' }} />
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 10, flex: 1 }}>
              {floors.map((f) => (
                <div key={f.label} style={{ display: 'flex', flexDirection: 'column' }}>
                  <div style={{ flex: 1, background: '#fff', border: '1px solid rgba(201,168,76,0.25)', padding: 8, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <img src={f.img} alt={f.label} style={{ width: '100%', height: 'auto', objectFit: 'contain' }} />
                  </div>
                  <div style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 9, letterSpacing: '0.25em', textTransform: 'uppercase', color: 'rgba(201,168,76,0.7)', textAlign: 'center', marginTop: 8 }}>{f.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* ПОСЛЕ — описание зон */}
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
              <div style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 10, fontWeight: 700, letterSpacing: '0.3em', textTransform: 'uppercase', color: '#C9A84C' }}>После · что добавим</div>
              <div style={{ flex: 1, height: 1, background: 'linear-gradient(90deg, #C9A84C, transparent)' }} />
            </div>
            <div style={{ flex: 1, background: 'rgba(255,255,255,0.025)', border: '1px solid rgba(201,168,76,0.4)', padding: '22px 24px', position: 'relative', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <div style={{ position: 'absolute', top: -1, left: -1, width: 18, height: 18, borderTop: '2px solid #C9A84C', borderLeft: '2px solid #C9A84C' }} />
              <div style={{ position: 'absolute', bottom: -1, right: -1, width: 18, height: 18, borderBottom: '2px solid #C9A84C', borderRight: '2px solid #C9A84C' }} />
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '18px 22px' }}>
                {zones.map((z) => (
                  <div key={z.title} style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
                    <div style={{ width: 34, height: 34, flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid rgba(201,168,76,0.35)' }}>
                      <Icon name={z.icon} size={15} style={{ color: '#C9A84C' }} />
                    </div>
                    <div>
                      <div style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 12, fontWeight: 600, color: '#F8F4EE', lineHeight: 1.25 }}>{z.title}</div>
                      <div style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 10, color: 'rgba(212,207,200,0.6)', marginTop: 3, lineHeight: 1.4 }}>{z.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── SLIDE 4: Стиль и атмосфера ──────────────────────────────────────────────
export function Slide4() {
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
