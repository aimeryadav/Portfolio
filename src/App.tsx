import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';

// Core Providers
import { CursorProvider } from './context/CursorContext';
import { ThemeProvider } from './context/ThemeContext';
import { SmoothScroll } from './components/SmoothScroll';
import { AmbientGlow } from './components/AmbientGlow';

// Sections
import { HeroSection } from './sections/HeroSection';
import { AboutSection } from './sections/AboutSection';
import { SkillsSection } from './sections/SkillsSection';
import { ExpertInSoftwareSection } from './sections/ExpertInSoftwareSection';
import { ProjectsSection } from './sections/ProjectsSection';
import { CertificatesSection } from './sections/CertificatesSection';
import { ResumeSection } from './sections/ResumeSection';
import { ContactSection } from './sections/ContactSection';

function App() {
  return (
    <ThemeProvider>
      <CursorProvider>
        <SmoothScroll>
          <div className="min-h-screen bg-background text-foreground relative selection:bg-[#7A2635] selection:text-white transition-colors duration-400">
            <AmbientGlow />
            


            <Navbar />

            <main>
              <HeroSection />
              <AboutSection />
              <SkillsSection />
              <ExpertInSoftwareSection />
              <ProjectsSection />
              <CertificatesSection />
              <ResumeSection />
              <ContactSection />
            </main>

            <Footer />
          </div>
        </SmoothScroll>
      </CursorProvider>
    </ThemeProvider>
  );
}

export default App;
