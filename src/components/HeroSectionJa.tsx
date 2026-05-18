import React from 'react';
import { Link } from "react-router-dom";

import heroImage from "@/assets/hero-lotus.jpg"; 

const HERO_JA = {
  title: "世俗仏教",
  subtitle: "法華経の伝統において",
  taglinePart1: "伝統的な仏教の概念を超え",
  taglinePart2: "直接的な「生命の肯定」に",
  heroAlt: "夜明けの静かな水面に浮かぶ蓮の花"
} as const;

const HeroSectionJa = () => {
  return (
    <section className="relative min-h-[75vh] md:min-h-[85vh] flex items-center justify-center overflow-hidden py-12 md:py-0">
      
      {/* LANGUAGE TOGGLE: Switched text color to contrast with the new bright top gradient */}
      <a
        href="https://secular-lotus.vercel.app"
        className="absolute top-5 right-6 z-20 text-sm font-medium text-neutral-700 hover:text-black bg-white/40 hover:bg-white/60 border border-black/10 backdrop-blur-sm px-3 py-1.5 rounded-full transition-all tracking-wide"
        style={{ fontFamily: "'Source Sans 3', sans-serif" }}
      >
        English
      </a>

      {/* Background Image and Balanced Symmetrical Radiance */}
      <div className="absolute inset-0">
        <img
          src={heroImage} 
          alt={HERO_JA.heroAlt}
          className="w-full h-full object-cover" 
        />
        
        {/* Layer 1: Solid Top Glow 
            Starts completely solid at the top to entirely mask the image's natural uneven darkness, 
            then perfectly diffuses down into transparency over the center.
        */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/40 to-transparent mix-blend-normal" />
        
        {/* Layer 2: Subtle dark contrast ring focused strictly behind text to keep letters sharp */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.6)_0%,transparent_60%)] mix-blend-overlay" />
        
        {/* Layer 3: Seamless bottom fade to wash into the Resources section */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />
      </div>

      {/* Content Container - Switched title text to a deep tone to match the new brilliant upper sky */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto" style={{ fontFamily: "'Noto Sans JP', sans-serif" }}>
        <h1
          className="font-light tracking-normal md:tracking-wide text-neutral-900 mb-6"
          style={{
            fontSize: 'var(--ja-title-size)',
            lineHeight: '1.2'
          } as React.CSSProperties}>
          
          <style>{`
            :root {
              --ja-title-size: 3.5rem;
              --ja-subtitle-size: 1.9rem;
              --ja-tagline-size: 1.5rem;
            }
            @media (min-width: 768px) {
              :root {
                --ja-title-size: 6rem;
                --ja-subtitle-size: 2.8rem;
                --ja-tagline-size: 2rem;
              }
            }
          `}</style>

          {HERO_JA.title}
          <span
            className="block font-light mt-4 text-neutral-800"
            style={{
              fontSize: 'var(--ja-subtitle-size)',
            }}>
            {HERO_JA.subtitle}
          </span>
        </h1>

        {/* Coordinated dark decorative divider line */}
        <div className="w-16 h-px bg-neutral-900/30 mx-auto mb-8" />

        <p 
          className="leading-relaxed max-w-4xl mx-auto text-neutral-800 font-normal" 
          style={{ 
             fontSize: 'var(--ja-tagline-size)', 
             lineHeight: '1.4'
          }}
        >
          <span className="block">{HERO_JA.taglinePart1}</span>
          <span className="block">{HERO_JA.taglinePart2}</span>
        </p>

      </div>
    </section>
  );
};

export default HeroSectionJa;
