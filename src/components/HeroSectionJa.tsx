import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-lotus.jpg";

/** Edit all Japanese hero text in one place */
const HERO_JA = {
  title: "世俗仏教",
  subtitle: "法華経の伝統において",
  tagline: "輪廻転生、絶対神、死者への祈りといった従来の宗教観を超え、純粋な「生の肯定」として機能する教え。",
  heroAlt: "夜明けの静かな水面に浮かぶ蓮の花"
} as const;

const HeroSectionJa = () => {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
      <Link
        to="/"
        className="absolute top-5 right-6 z-20 text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors tracking-wide"
        style={{ fontFamily: "'Source Sans 3', sans-serif" }}>
        
        English
      </Link>
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt={HERO_JA.heroAlt}
          className="w-full h-full object-cover" />
        
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/40 via-foreground/20 to-background" />
      </div>
      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto" style={{ fontFamily: "'Noto Sans JP', sans-serif" }}>
        <h1
          className="font-light tracking-normal md:tracking-wide text-primary-foreground mb-6 text-8xl"
          style={{
            fontFamily: "'Noto Sans JP', sans-serif",
            fontSize: 'var(--ja-title-size)',
            lineHeight: '1.2'
          } as React.CSSProperties}>
          
          <style>{`
            :root {
              --ja-title-size: 2.2rem;
              --ja-subtitle-size: 1.8rem;
            }
            @media (min-width: 768px) {
              :root {
                --ja-title-size: 4rem;
                --ja-subtitle-size: 2.5rem;
              }
            }
          `}</style>
          {HERO_JA.title}
          <span
            className="block font-light mt-2 opacity-100"
            style={{
              fontFamily: "'Noto Sans JP', sans-serif",
              fontSize: 'var(--ja-subtitle-size)',
              lineHeight: '1.2',
              textShadow: '0px 2px 4px rgba(0,0,0,0.4)'
            }}>
            {HERO_JA.subtitle}
          </span>
        </h1>
        <div className="w-16 h-px bg-accent mx-auto mb-6" />
        <p className="leading-relaxed max-w-xl mx-auto text-primary-foreground/85 text-4xl shadow-none font-normal" style={{ fontFamily: "'Noto Sans JP', sans-serif", textShadow: '0px 2px 4px rgba(0,0,0,0.4)' }}>
          {HERO_JA.tagline}
        </p>
      </div>
    </section>);

};

export default HeroSectionJa;
