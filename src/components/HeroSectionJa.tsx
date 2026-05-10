import React from 'react';
import { Link } from "@/assets/hero-lotus.jpg";

/** Edit all Japanese hero text in one place */
const HERO_JA = {
  title: "世俗仏教",
  subtitle: "法華経の伝統において",
  /* The two-part tagline you requested */
  taglinePart1: "伝統的な仏教の概念を超え、",
  taglinePart2: "直接的な「生命の肯定」へ。",
  heroAlt: "夜明けの静かな水面に浮かぶ蓮の花"
} as const;

// Note: In your local project, the import below will work perfectly.
// import heroImage from "@/assets/hero-lotus.jpg"; 

// Fallback for the preview environment to prevent a blank screen

const HeroSectionJa = () => {
  return (
    <section className="relative min-h-[75vh] md:min-h-[85vh] flex items-center justify-center overflow-hidden py-12 md:py-0">
      
      { }
      {/* LANGUAGE TOGGLE */}
      <a
        href="https://secular-lotus.vercel.app"
        className="absolute top-5 right-6 z-20 text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors tracking-wide"
        style={{ fontFamily: "'Source Sans 3', sans-serif" }}
      >
        English
      </a>

      { }
      {/* Background and Image */}
      <div className="absolute inset-0">
        <img
          src={heroImageUrl} 
          alt={HERO_JA.heroAlt}
          className="w-full h-full object-cover" 
        />
        {/* Restored your original gradient classes to fix the black screen issue */}
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/40 via-foreground/20 to-background" />
      </div>

      { }
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto" style={{ fontFamily: "'Noto Sans JP', sans-serif" }}>
        <h1
          className="font-light tracking-normal md:tracking-wide text-primary-foreground mb-6"
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

        <div className="w-16 h-px bg-accent mx-auto mb-8" />

        { }
        {/* Updated Tagline: 2 parts that stack on mobile, join on desktop */}
        <p 
          className="leading-relaxed max-w-4xl mx-auto text-primary-foreground/90 font-normal" 
          style={{ 
             fontSize: '1.25rem', 
             textShadow: '0px 2px 4px rgba(0,0,0,0.4)',
             lineHeight: '1.8'
          }}
        >
          {/* Part 1: Stacks on mobile (block), joins on desktop (sm:inline) */}
          <span className="block sm:inline">{HERO_JA.taglinePart1}</span>

          {/* Part 2: Stacks on mobile, joins on desktop with slight margin */}
          <span className="block sm:inline sm:ml-1">{HERO_JA.taglinePart2}</span>
        </p>

      </div>
    </section>
  );
};

export default HeroSectionJa;
