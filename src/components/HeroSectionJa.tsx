import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-lotus.jpg";

/** Edit all Japanese hero text in one place */
const HERO_JA = {
  title: "世俗仏教",
  subtitle: "法華経の伝統において",
  /* I added <br /> to force the line break exactly here */
  tagline: "輪廻転生、絶対神、死者への祈りといった従来の宗教観を超え、<br />純粋な「生の肯定」として機能する教え。",
  heroAlt: "夜明けの静かな水面に浮かぶ蓮の花"
} as const;

const HeroSectionJa = () => {
  return (
    <section className="relative min-h-[75vh] md:min-h-[85vh] flex items-center justify-center overflow-hidden py-12 md:py-0">
      
      <a
        href="https://secular-lotus.vercel.app"
        className="absolute top-5 right-6 z-20 text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors tracking-wide"
        style={{ fontFamily: "'Source Sans 3', sans-serif" }}
      >
        English
      </a>

      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt={HERO_JA.heroAlt}
          className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/40 via-foreground/20 to-background" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto" style={{ fontFamily: "'Noto Sans JP', sans-serif" }}>
        <h1
          className="font-light tracking-normal md:tracking-wide text-primary-foreground mb-6"
          style={{
            fontFamily: "'Noto Sans JP', sans-serif",
            fontSize: 'var(--ja-title-size)',
            lineHeight: '1.2'
          } as React.CSSProperties}>
          
          <style>{`
            :root {
              --ja-title-size: 3rem;       
              --ja-subtitle-size: 1.85rem; 
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

        {/* Updated this part to handle the <br /> tag correctly */}
        <p 
          className="leading-relaxed max-w-3xl mx-auto text-primary-foreground/90 shadow-none font-normal" 
          style={{ 
             fontSize: '1.4rem', 
             textShadow: '0px 2px 4px rgba(0,0,0,0.4)',
             lineHeight: '1.8'
          }}
          dangerouslySetInnerHTML={{ __html: HERO_JA.tagline }}
        />
      </div>
    </section>
  );
};

export default HeroSectionJa;
