import Icon from '@/components/ui/icon';
import { GOLD_GRAD, goldText, GeoCornerTL, GeoCornerTR, GeoCornerBL, GeoCornerBR, GridBg, SectionLabel, H2 } from './shared';

// ─── SLIDE 5: Финансы ────────────────────────────────────────────────────────
export function Slide5() {
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
export function Slide6() {
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
export function Slide7() {
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
export function Slide8() {
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
export function Slide9() {
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
