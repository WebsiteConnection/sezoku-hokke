import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-lotus.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
      <Link
        to="/ja"
        className="absolute top-5 right-6 z-20 font-body text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors tracking-wide">
        
        日本語
      </Link>
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Lotus flower floating serenely on still water at dawn"
          className="w-full h-full object-cover" />
        
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/40 via-foreground/20 to-background font-light" />
      </div>
      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
        <h1 className="font-heading text-5xl md:text-7xl font-light tracking-wide text-primary-foreground mb-6 leading-tight">
          Secular Buddhism
          <span className="block text-3xl font-light mt-2 italic opacity-90 md:text-5xl">
            in the Lotus Sutra Tradition
          </span>
        </h1>
        <div className="w-16 h-px bg-accent mx-auto mb-6" />
        <p className="text-lg text-primary-foreground/85 leading-relaxed max-w-xl mx-auto font-medium font-[sans] md:text-2xl shadow-none">
          A morality inspired by the natural order    
        </p>
      </div>
    </section>);

};

export default HeroSection;