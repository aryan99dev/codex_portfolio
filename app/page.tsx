import { AboutSection } from '@/components/AboutSection';
import { ContactSection } from '@/components/ContactSection';
import { ExperienceSection } from '@/components/ExperienceSection';
import { HeroSection } from '@/components/HeroSection';
import { Navbar } from '@/components/Navbar';
import { ProjectsSection } from '@/components/ProjectsSection';
import { SkillsSection } from '@/components/SkillsSection';

export default function HomePage() {
  return (
    <main className="relative overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ExperienceSection />
      <ContactSection />
    </main>
  );
}
