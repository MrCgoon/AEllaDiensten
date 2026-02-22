import React, { useEffect, useState } from 'react';
import { ArrowRight, CheckCircle2, Send, Database, FileSpreadsheet, Zap } from 'lucide-react';

const Hero: React.FC = () => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setOffset(window.scrollY);
          ticking = false;
        });
        ticking = true;
      }
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="home" className="relative min-h-[90vh] lg:min-h-[95vh] flex items-center pt-28 pb-16 lg:pt-40 lg:pb-32 overflow-hidden bg-transparent">
      
      {/* Parallax Layer 1: Deep Background (Moves with scroll) */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none will-change-transform"
        style={{ transform: `translateY(${offset * 0.4}px)` }}
      >
        <div className="hidden dark:block absolute top-[-10%] right-[-5%] w-[400px] lg:w-[1000px] h-[400px] lg:h-[1000px] bg-brand-900/20 rounded-full blur-[100px] lg:blur-[150px] animate-aurora mix-blend-screen"></div>
        <div className="hidden dark:block absolute bottom-[10%] left-[-5%] w-[300px] lg:w-[800px] h-[300px] lg:h-[800px] bg-indigo-900/20 rounded-full blur-[80px] lg:blur-[120px] mix-blend-screen"></div>

        <div className="dark:hidden absolute top-[-5%] right-[-5%] w-[400px] lg:w-[800px] h-[400px] lg:h-[800px] bg-brand-100/50 rounded-full blur-[80px] lg:blur-[100px] animate-aurora mix-blend-multiply"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Content */}
          <div className="text-center lg:text-left relative z-20">
            
            {/* Premium Glass Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/60 dark:bg-white/5 border border-brand-100 dark:border-white/10 text-brand-600 dark:text-brand-300 text-[10px] sm:text-xs font-bold tracking-wider uppercase mb-6 shadow-sm backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500"></span>
              </span>
              Remote Secretariële Support
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-extrabold text-neutral-900 dark:text-white leading-[1.1] mb-6 tracking-tight drop-shadow-sm transition-all duration-500">
              Virtual Assistant <br className="hidden sm:block"/>
              <span className="text-gradient-shine animate-shine">Data Entry</span> <br className="hidden sm:block"/>
              <span className="text-neutral-700 dark:text-neutral-400">& Administratie</span>
            </h1>
            
            <p className="text-base sm:text-lg lg:text-xl text-neutral-600 dark:text-neutral-300 leading-relaxed mb-8 sm:mb-10 max-w-xl mx-auto lg:mx-0 font-light transition-colors">
              Ik ondersteun u met data entry, mutaties, rapportages en secretariële support – <span className="text-neutral-900 dark:text-white font-medium">nauwkeurig en op tijd.</span>
            </p>
            
            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 mb-12 lg:mb-0">
              <a 
                href="#contact" 
                className="group relative inline-flex items-center justify-center px-8 py-4 bg-brand-600 text-white font-bold rounded-xl transition-all duration-300 hover:bg-brand-500 hover:scale-[1.02] shadow-lg shadow-brand-500/30"
              >
                Offerte aanvragen
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="#process" 
                className="inline-flex items-center justify-center px-8 py-4 bg-white/60 dark:bg-white/5 text-neutral-700 dark:text-white font-semibold rounded-xl border border-neutral-200 dark:border-white/10 hover:bg-white dark:hover:bg-white/10 transition-all backdrop-blur-sm"
              >
                Werkwijze
              </a>
            </div>
            
            {/* Mobile Widget (Visible on mobile only, stacks below text) */}
            <div className="lg:hidden mt-8 max-w-md mx-auto">
               <HeroWidget />
            </div>

            {/* Trust Indicators */}
            <div className="mt-8 lg:mt-12 flex flex-wrap items-center justify-center lg:justify-start gap-x-6 gap-y-3 text-xs sm:text-sm font-medium text-neutral-500 dark:text-neutral-400">
              {['Accuraat', 'Flexibel', 'Betrouwbaar'].map((text) => (
                <div key={text} className="flex items-center gap-2 group">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-brand-500 transition-transform group-hover:scale-110" />
                  <span className="group-hover:text-neutral-900 dark:group-hover:text-white transition-colors">{text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Desktop Parallax Visual & Widget */}
          <div className="relative h-[600px] w-full hidden lg:block perspective-1000">
             
             {/* Floating Elements */}
             <div 
               className="absolute inset-0 z-10 will-change-transform"
               style={{ transform: `translateY(${offset * 0.15}px)` }}
             >
                {/* Visual Accent */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-cover bg-center opacity-60 pointer-events-none mix-blend-overlay dark:mix-blend-lighten"
                     style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=40&w=1200&auto=format&fit=crop")' }}>
                </div>

                {/* Floating Card 1 */}
                <div className="absolute top-10 left-[-10px] bg-white/90 dark:glass-dark p-4 rounded-2xl animate-float-delayed w-56 border border-neutral-200 dark:border-white/10 shadow-xl backdrop-blur-xl">
                   <div className="flex items-center gap-3 mb-3">
                     <div className="p-2 bg-blue-50 dark:bg-neutral-900 rounded-lg text-blue-500">
                        <Database size={18} />
                     </div>
                     <span className="text-xs font-bold text-neutral-800 dark:text-neutral-100 uppercase tracking-tight">Data Entry</span>
                   </div>
                   <div className="h-1.5 w-full bg-neutral-100 dark:bg-neutral-800 rounded-full overflow-hidden">
                      <div className="h-full bg-blue-500 w-[85%] rounded-full animate-pulse"></div>
                   </div>
                </div>

                {/* Floating Card 2 */}
                <div className="absolute bottom-20 right-[-10px] bg-white/90 dark:glass-dark p-4 rounded-2xl animate-float w-56 border border-neutral-200 dark:border-white/10 shadow-xl backdrop-blur-xl">
                   <div className="flex items-center gap-3 mb-2">
                     <div className="p-2 bg-emerald-50 dark:bg-neutral-900 rounded-lg text-emerald-500">
                        <FileSpreadsheet size={18} />
                     </div>
                     <span className="text-xs font-bold text-neutral-800 dark:text-neutral-100 uppercase tracking-tight">Mutaties</span>
                   </div>
                   <p className="text-[10px] text-neutral-500 dark:text-neutral-400">Rapportage genereren...</p>
                </div>
             </div>

             {/* Main Widget Layer */}
             <div 
               className="absolute top-1/2 left-1/2 w-full max-w-sm z-30 will-change-transform"
               style={{ transform: `translate(-50%, calc(-50% - ${offset * 0.08}px))` }}
             >
                <HeroWidget />
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Subcomponent for the conversion widget to reuse on mobile/desktop
const HeroWidget: React.FC = () => {
  return (
    <div className="bg-white dark:bg-neutral-900/90 backdrop-blur-md rounded-3xl shadow-2xl border border-neutral-200/50 dark:border-white/10 p-6 sm:p-8 animate-float-subtle relative overflow-hidden text-left">
      <div className="absolute top-0 left-0 w-full h-1 bg-brand-600"></div>
      
      <div className="flex items-center gap-4 mb-6">
        <div className="w-10 h-10 rounded-xl bg-brand-50 dark:bg-brand-500/10 flex items-center justify-center text-brand-600">
          <Zap size={20} className="fill-brand-600" />
        </div>
        <div>
          <h3 className="font-heading font-bold text-neutral-900 dark:text-white text-base">Snel indicatie?</h3>
          <p className="text-[10px] text-neutral-500 font-medium">Berekening op maat</p>
        </div>
      </div>
      
      <div className="space-y-4">
        <div>
          <label className="block text-[10px] font-bold text-neutral-500 mb-1.5 uppercase tracking-wider">Hulp nodig bij</label>
          <select className="w-full p-2.5 bg-neutral-50 dark:bg-black/40 border border-neutral-200 dark:border-white/10 rounded-xl text-xs font-semibold focus:ring-2 focus:ring-brand-500/20 text-neutral-800 dark:text-white outline-none appearance-none cursor-pointer">
            <option>Data Entry & Mutaties</option>
            <option>Administratie</option>
            <option>Agendabeheer</option>
          </select>
        </div>
        
        <div className="grid grid-cols-2 gap-3">
           <div>
              <label className="block text-[10px] font-bold text-neutral-500 mb-1.5 uppercase tracking-wider">Uren p/m</label>
              <input type="number" placeholder="8" className="w-full p-2.5 bg-neutral-50 dark:bg-black/40 border border-neutral-200 dark:border-white/10 rounded-xl text-xs font-semibold text-neutral-800 dark:text-white outline-none" />
           </div>
           <div>
              <label className="block text-[10px] font-bold text-neutral-500 mb-1.5 uppercase tracking-wider">Mail</label>
              <input type="email" placeholder="uw@email.nl" className="w-full p-2.5 bg-neutral-50 dark:bg-black/40 border border-neutral-200 dark:border-white/10 rounded-xl text-xs font-semibold text-neutral-800 dark:text-white outline-none" />
           </div>
        </div>

        <button className="w-full py-3.5 bg-neutral-900 dark:bg-brand-600 text-white rounded-xl font-bold text-xs hover:bg-brand-600 dark:hover:bg-brand-500 transition-all flex items-center justify-center gap-2 mt-2 shadow-lg active:scale-95">
          Bereken voor mij
          <Send size={14} />
        </button>
      </div>
    </div>
  );
};

export default Hero;