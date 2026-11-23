import { useState, useEffect } from 'react';
import Loader from './components/Loader';
import CustomCursor from './components/CustomCursor';
import ParticleField from './components/three/ParticleField';
import Navbar from './components/Navbar';
import HeroAbout from './components/HeroAbout';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { useScrollReveal } from './hooks/useGSAPAnimations';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  // Hook scroll animation reveals for section titles and key blocks
  useScrollReveal('.reveal-on-scroll', { y: 30, duration: 0.8 });

  useEffect(() => {
    // When loading finishes, trigger refresh on ScrollTrigger
    if (!isLoading) {
      window.dispatchEvent(new Event('resize'));
    }
  }, [isLoading]);

  return (
    <div className="relative min-h-screen bg-void-950 text-silver-light selection:bg-crimson selection:text-white font-sans antialiased overflow-x-clip">
      {/* Cinematic Loading Experience */}
      {isLoading && <Loader onComplete={() => setIsLoading(false)} />}

      {/* Interactive Custom Cursor for Pointer Devices */}
      <CustomCursor />

      {/* Ambient Particle Field running subtly in background */}
      <ParticleField />

      {/* Main Navigation */}
      <Navbar />

      {/* Main Single-Page Content Sections */}
      <main className="relative z-10 flex flex-col w-full">
        <HeroAbout />
        <Skills />
        <Projects />
        <Experience />
        <Achievements />
        <Contact />
      </main>

      {/* Minimalist Premium Footer */}
      <Footer />
    </div>
  );
}
