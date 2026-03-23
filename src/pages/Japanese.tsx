import { useEffect } from "react";
import HeroSectionJa from "@/components/HeroSectionJa";
import ResourcesSectionJa from "@/components/ResourcesSectionJa";
import FooterSectionJa from "@/components/FooterSectionJa";

const Japanese = () => {
  useEffect(() => {
    document.title = "世俗法華 — ロータス伝統における世俗仏教";
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <HeroSectionJa />
      <ResourcesSectionJa />
      <FooterSectionJa />
    </div>
  );
};

export default Japanese;
