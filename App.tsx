import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Process from './components/Process';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import SocialProof from './components/SocialProof';

const App: React.FC = () => {
  return (
    <div className="font-sans text-neutral-200 min-h-screen flex flex-col selection:bg-brand-500 selection:text-white relative">
      {/* Global Fixed Background (Nano Banana Aesthetic) */}
      <div 
        className="fixed inset-0 z-[-1] bg-[url('https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=3840&auto=format&fit=crop')] bg-cover bg-center bg-no-repeat bg-fixed"
        aria-hidden="true"
      ></div>
      
      {/* Global Dark Overlay for Contrast */}
      <div className="fixed inset-0 z-[-1] bg-neutral-950/85 backdrop-blur-[2px]" aria-hidden="true"></div>

      <Navbar />
      
      <main className="flex-grow relative z-10 flex flex-col gap-6 md:gap-0">
        <Hero />
        
        {/* Main Content Sections wrapped in subtle separation for glass feel */}
        <div className="space-y-px bg-white/5">
          <About />
          <Services />
          <Process />
          <Pricing />
          <SocialProof />
          <Contact />
        </div>
      </main>
      
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default App;