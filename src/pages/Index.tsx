import HeroSectionJa from "@/components/HeroSectionJa";
import ResourcesSectionJa from "@/components/ResourcesSectionJa";
import FooterSectionJa from "@/components/FooterSectionJa";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* The Hook */}
      <HeroSectionJa />
      
      {/* The Evidence - Now directly on the home page */}
      <div id="resources" className="border-t border-border/50">
        <ResourcesSectionJa />
      </div>

      {/* The Footer */}
      <FooterSectionJa />
    </div>
  );
};

export default Index;
