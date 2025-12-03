import React, { useState, useEffect } from 'react';
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
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');

  // Initialize theme from localStorage or system preference
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.toggle('dark', savedTheme === 'dark');
    } else {
      // Default to dark for the brand aesthetic
      setTheme('dark');
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
  };

  return (
    <div className={`font-sans min-h-screen flex flex-col selection:bg-brand-500 selection:text-white relative transition-colors duration-500 ${theme === 'light' ? 'text-neutral-900' : 'text-neutral-200'}`}>
      
      {/* Light Mode Global Background */}
      <div 
        className="fixed inset-0 z-[-1] bg-neutral-50 dark:hidden transition-opacity duration-500"
        aria-hidden="true"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-neutral-100 to-white"></div>
      </div>

      {/* Dark Mode Global Fixed Background (Nano Banana Aesthetic) */}
      <div 
        className="fixed inset-0 z-[-1] bg-[url('https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=3840&auto=format&fit=crop')] bg-cover bg-center bg-no-repeat bg-fixed hidden dark:block transition-opacity duration-500"
        aria-hidden="true"
      ></div>
      
      {/* Dark Mode Overlay */}
      <div className="fixed inset-0 z-[-1] bg-neutral-950/85 backdrop-blur-[2px] hidden dark:block" aria-hidden="true"></div>

      <Navbar theme={theme} toggleTheme={toggleTheme} />
      
      <main className="flex-grow relative z-10 flex flex-col gap-6 md:gap-0">
        <Hero />
        
        {/* Main Content Sections wrapped in subtle separation for glass feel */}
        <div className="space-y-px bg-neutral-200 dark:bg-white/5">
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