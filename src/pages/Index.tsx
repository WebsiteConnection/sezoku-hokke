import HeroSectionJa from "@/components/HeroSectionJa";
import ResourcesSectionJa from "@/components/ResourcesSectionJa"; // Changed to Ja
import FooterSectionJa from "@/components/FooterSectionJa";       // Changed to Ja

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSectionJa />
      <ResourcesSectionJa />
      <FooterSectionJa />
    </div>
  );
};

export default Index;
