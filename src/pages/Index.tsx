import { useState, useEffect, useRef } from 'react';
import { CSS_VARS, NavDots, PdfButton } from '@/components/kuznetsky/shared';
import { Slide1, Slide2, Slide3, SlidePlan, Slide4 } from '@/components/kuznetsky/SlidesIntro';
import { Slide5, Slide6, Slide7, Slide8, Slide9 } from '@/components/kuznetsky/SlidesFinance';

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
