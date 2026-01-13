import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProjectsSection from './components/ProjectsSection';
import LearnSection from './components/LearnSection';
import AudienceSection from './components/AudienceSection';
import OutcomesSection from './components/OutcomesSection';
import FAQSection from './components/FAQSection';
import Footer from './components/Footer';
import DesertBackground from './components/DesertBackground';

function App() {
  return (
    <div className="min-h-screen bg-[var(--color-sand)] font-body text-[var(--color-text)] relative isolate">
      <DesertBackground />
      <Header />
      <main>
        <Hero />
        <ProjectsSection />
        <LearnSection />
        <AudienceSection />
        <OutcomesSection />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
