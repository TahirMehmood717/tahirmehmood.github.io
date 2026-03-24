import "../styles/fonts.css";
import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { AboutSection } from "./components/AboutSection";
import { ExperienceSection } from "./components/ExperienceSection";
import { SkillsSection } from "./components/SkillsSection";
import { EducationSection } from "./components/EducationSection";
import { TestimonialsSection } from "./components/TestimonialsSection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div
      className="min-h-screen w-full"
      style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
    >
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <SkillsSection />
        <EducationSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}