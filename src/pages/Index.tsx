import { ThemeToggle } from "@/components/ThemeToggle";
import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { CertificatesSection } from "@/components/CertificatesSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { ToolsSection } from "@/components/ToolsSection";
import { ContactSection } from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <ThemeToggle />
      <Navigation />
      <HeroSection />
      <AboutSection />
      <CertificatesSection />
      <ProjectsSection />
      <ToolsSection />
      <ContactSection />
    </div>
  );
};

export default Index;
