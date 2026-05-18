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
      
      {/* LANGUAGE TOGGLE: Restored to original clean styling */}
      <a
        href="https://secular-lotus.vercel.app"
        className="absolute top-5 right-6 z-20 text-base text-primary-foreground/90 hover:text-primary-foreground transition-colors tracking-wide"
        style={{ fontFamily: "'Source Sans 3', sans-serif" }}
      >
        English
      </a>

      {/* Background Image and Original Seamless Bottom-Fade Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage} 
          alt={HERO_JA.heroAlt}
          className="w-full h-full object-cover" 
        />
        {/* Restored your original clean gradient that lets the natural sky show 
            while seamlessly fading into the background at the bottom */}
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/40 via-foreground/20 to-background" />
      </div>

      {/* Content Container: Restored all original white/primary-foreground text tracking */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto" style={{ fontFamily: "'Noto Sans JP', sans-serif" }}>
        <h1
          className="font-light tracking-normal md:tracking-wide text-primary-foreground mb-6"
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
            className="block font-light mt-4"
            style={{
              fontSize: 'var(--ja-subtitle-size)',
            }}>
            {HERO_JA.subtitle}
          </span>
        </h1>

        <div className="w-16 h-px bg-white mx-auto mb-8" />

        <p 
          className="leading-relaxed max-w-4xl mx-auto text-primary-foreground font-normal" 
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
