import { lazy, Suspense } from "react";
import Navigation from "@/components/Navigation";
import ParticleBackground from "@/components/ParticleBackground";
import HeroSection from "@/components/sections/HeroSection";
import CTASection from "@/components/sections/CTASection";
import ResumeSection from "@/components/sections/ResumeSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ContactSection from "@/components/sections/ContactSection";
import ArticlesSection from "@/components/sections/ArticlesSection";
import ProfilesSection from "@/components/sections/ProfilesSection";
import SocialSection from "@/components/sections/SocialSection";

const FloatingScene = lazy(() => import("@/components/FloatingScene"));

const Index = () => {
  return (
    <div className="bg-background text-foreground overflow-x-hidden">
      <ParticleBackground />
      <Suspense fallback={null}>
        <FloatingScene />
      </Suspense>
      <Navigation />
      <HeroSection />
      <CTASection />
      <ResumeSection />
      <ProjectsSection />
      <SkillsSection />
      <ContactSection />
      <ArticlesSection />
      <ProfilesSection />
      <SocialSection />
    </div>
  );
};

export default Index;
