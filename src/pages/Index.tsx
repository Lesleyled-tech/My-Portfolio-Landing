
import MainLayout from "@/components/layout/MainLayout";
import HeroSection from "@/components/home/HeroSection";
import ServicesSection from "@/components/home/ServicesSection";
import PortfolioSection from "@/components/home/PortfolioSection";
import AboutSection from "@/components/home/AboutSection";
import SkillsShowcase from "@/components/home/SkillsShowcase";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import ContactSection from "@/components/home/ContactSection";

const Index = () => {
  return (
    <MainLayout>
      <HeroSection />
      <ServicesSection />
      <PortfolioSection />
      <SkillsShowcase />
      <AboutSection />
      <TestimonialsSection />
      <ContactSection />
    </MainLayout>
  );
};

export default Index;
