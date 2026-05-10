import React from "react";

/** 
 * EDITING NOTE: 
 * For your local environment, use: import heroImage from "@/assets/hero-lotus.jpg";
 * I am using a URL here to ensure the preview compiles and displays correctly.
 */
const heroImageUrl = "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&w=2000";

/** Edit all Japanese hero text in one place */
const HERO_JA = {
  title: "世俗仏教",
  subtitle: "法華経の伝統において",
  /* Two-part structure as requested */
  taglinePart1: "伝統的な仏教の概念を超え、",
  taglinePart2: "直接的な「生命の肯定」へ。",
  heroAlt: "夜明けの静かな水面に浮かぶ蓮の花"
} as const;

const HeroSectionJa = () => {
  return (
    <section className="relative min-h-[75vh] md:min-h-[85vh] flex items-center justify-center overflow-hidden py-12 md:py-0">
      
      {}
      <a
        href="https://secular-lotus.vercel.app"
        className="absolute top-5 right-6 z-20 text-sm text-white/70 hover:text-white transition-colors tracking-wide"
        style={{ fontFamily: "'Source Sans 3', sans-serif" }}
      >
        English
      </a>

      {}
      <div className="absolute inset-0">
        <img
          src={heroImageUrl}
          alt={HERO_JA.heroAlt}
          className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-slate-900" />
      </div>

      {}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto" style={{ fontFamily: "'Noto Sans JP', sans-serif" }}>
        <h1
          className="font-light tracking-normal md:tracking-wide text-white mb-6"
          style={{
            fontSize: 'var(--ja-title-size)',
            lineHeight: '1.2'
          } as React.CSSProperties}>
          
          <style>{`
            :root {
              --ja-title-size: 2.8rem;
              --ja-subtitle-size: 1.7rem;
            }
            @media (min-width: 768px) {
              :root {
                --ja-title-size: 5.5rem;
                --ja-subtitle-size: 2.8rem;
              }
            }
          `}</style>

          {HERO_JA.title}
          <span
            className="block font-light mt-4 opacity-90"
            style={{
              fontSize: 'var(--ja-subtitle-size)',
              textShadow: '0px 2px 8px rgba(0,0,0,0.3)'
            }}>
            {HERO_JA.subtitle}
          </span>
        </h1>

        <div className="w-16 h-px bg-amber-400 mx-auto mb-8" />

        {}
        {/* Updated Tagline: Stacks on mobile (block), flows inline on desktop (sm:inline) */}
        <p 
          className="leading-relaxed max-w-4xl mx-auto text-white/90 font-normal" 
          style={{ 
             fontSize: '1.25rem', 
             textShadow: '0px 2px 4px rgba(0,0,0,0.4)',
             lineHeight: '1.8'
          }}
        >
          {/* Part 1 */}
          <span className="block sm:inline">{HERO_JA.taglinePart1}</span>

          {/* Part 2: Added slight margin for desktop spacing */}
          <span className="block sm:inline sm:ml-1">{HERO_JA.taglinePart2}</span>
        </p>

      </div>
    </section>
  );
};

export default HeroSectionJa;
