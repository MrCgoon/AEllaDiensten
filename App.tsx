import React, { useState, useEffect, Suspense, lazy } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

// Lazy load non-critical components to improve initial page load speed
const About = lazy(() => import('./components/About'));
const Services = lazy(() => import('./components/Services'));
const Process = lazy(() => import('./components/Process'));
const Pricing = lazy(() => import('./components/Pricing'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));
const WhatsAppButton = lazy(() => import('./components/WhatsAppButton'));
const SocialProof = lazy(() => import('./components/SocialProof'));
const PaymentStatus = lazy(() => import('./components/PaymentStatus'));

const App: React.FC = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');

  // Initialize theme from localStorage or system preference
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.toggle('dark', savedTheme === 'dark');
    } else {
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
    <div className={`font-sans min-h-screen flex flex-col selection:bg-brand-500 selection:text-white relative transition-colors duration-500 overflow-x-hidden ${theme === 'light' ? 'text-neutral-900' : 'text-neutral-200'}`}>
      
      {/* Light Mode Background */}
      <div className="fixed inset-0 z-[-1] bg-neutral-50 dark:hidden" aria-hidden="true">
        <div className="absolute inset-0 bg-gradient-to-br from-neutral-100 to-white"></div>
        <div className="absolute top-0 right-0 w-full max-w-[500px] h-[500px] bg-brand-100/40 rounded-full blur-[100px]"></div>
      </div>

      {/* Dark Mode Background */}
      <div 
        className="fixed inset-0 z-[-1] bg-neutral-950 bg-[url('https://images.unsplash.com/photo-1614850523060-8da1d56ae167?q=60&w=1920&auto=format&fit=crop')] bg-cover bg-center hidden dark:block transition-opacity duration-500"
        aria-hidden="true"
      ></div>
      <div className="fixed inset-0 z-[-1] bg-neutral-950/80 backdrop-blur-[2px] hidden dark:block" aria-hidden="true"></div>

      <Navbar theme={theme} toggleTheme={toggleTheme} />
      
      <main className="flex-grow relative z-10">
        <Hero />
        
        {/* Main Content Tray - Responsive radius and margin */}
        <div className="relative z-20 mt-[-2.5rem] lg:mt-[-5rem] pt-12 lg:pt-16 pb-12 rounded-t-[2.5rem] lg:rounded-t-[4rem] bg-white/95 dark:bg-black/60 backdrop-blur-3xl border-t border-white/40 dark:border-white/10 shadow-2xl transition-all duration-500">
          
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-1.5 bg-neutral-200 dark:bg-neutral-800 rounded-full mt-3 hidden sm:block opacity-50"></div>
          
          <div className="space-y-px">
            <Suspense fallback={<div className="py-20 flex justify-center"><div className="w-8 h-8 border-4 border-brand-500 border-t-transparent rounded-full animate-spin"></div></div>}>
              <PaymentStatus />
              <About />
              <Services />
              <Process />
              <Pricing />
              <SocialProof />
              <Contact />
            </Suspense>
          </div>
        </div>
      </main>
      
      <Suspense fallback={null}>
        <Footer />
        <WhatsAppButton />
      </Suspense>
    </div>
  );
};

export default App;