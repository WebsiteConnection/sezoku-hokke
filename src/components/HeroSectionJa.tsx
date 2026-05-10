import React from 'react';
import { Link } from "react-router-dom";

import heroImage from "@/assets/hero-lotus.jpg"; 

const HERO_JA = {
  title: "世俗仏教",
  subtitle: "法華経の伝統において",
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
        className="absolute top-5 right-6 z-20 text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors tracking-wide"
        style={{ fontFamily: "'Source Sans 3', sans-serif" }}
      >
        English
      </a>

      {}
      <div className="absolute inset-0">
        <img
          src={heroImage} 
          alt={HERO_JA.heroAlt}
          className="w-full h-full object-cover" 
        />
        {/* Restored your original theme-based gradient classes */}
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/40 via-foreground/20 to-background" />
      </div>

      {}
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
              --ja-subtitle-size: 2.2rem;
              --ja-tagline-size: 1.1rem;
            }
            @media (min-width: 768px) {
              :root {
                --ja-title-size: 5.5rem;
                --ja-subtitle-size: 3.2rem;
                --ja-tagline-size: 1.25rem;
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

        <div className="w-16 h-px bg-white mx-auto mb-8" />

        {}
        <p 
          className="leading-relaxed max-w-4xl mx-auto text-primary-foreground/90 font-normal" 
          style={{ 
             fontSize: 'var(--ja-tagline-size)', 
             textShadow: '0px 2px 4px rgba(0,0,0,0.4)',
             lineHeight: '1.8'
          }}
        >
          {/* 
              Part 1 & 2: 
              'block' makes them stack on handheld devices.
              'sm:inline' makes them join together on tablets and desktops.
          */}
          <span className="block md:inline">{HERO_JA.taglinePart1}</span>
          <span className="block md:inline sm:ml-1">{HERO_JA.taglinePart2}</span>
        </p>

      </div>
    </section>
  );
};

export default HeroSectionJa;
