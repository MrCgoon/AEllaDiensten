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
    <section id="home" className="relative min-h-[95vh] flex items-center pt-24 pb-16 lg:pt-40 lg:pb-32 overflow-hidden bg-transparent">
      
      {/* Parallax Layers */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none will-change-transform"
        style={{ transform: `translateY(${offset * 0.4}px)` }}
      >
        {/* Dark Mode Gradient Accents */}
        <div className="hidden dark:block absolute top-[-20%] right-[-10%] w-[600px] lg:w-[1000px] h-[600px] lg:h-[1000px] bg-brand-900/30 rounded-full blur-[100px] lg:blur-[150px] animate-aurora mix-blend-screen"></div>
        <div className="hidden dark:block absolute bottom-[0%] left-[-10%] w-[500px] lg:w-[800px] h-[500px] lg:h-[800px] bg-indigo-900/30 rounded-full blur-[80px] lg:blur-[120px] animate-pulse-slow mix-blend-screen"></div>

        {/* Light Mode Gradient Accents */}
        <div className="dark:hidden absolute top-[-10%] right-[-10%] w-[600px] lg:w-[800px] h-[600px] lg:h-[800px] bg-brand-100/60 rounded-full blur-[80px] lg:blur-[100px] animate-aurora mix-blend-multiply"></div>
        <div className="dark:hidden absolute bottom-[10%] left-[10%] w-[400px] lg:w-[600px] h-[400px] lg:h-[600px] bg-indigo-100/60 rounded-full blur-[80px] lg:blur-[100px] mix-blend-multiply"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          
          {/* Left Content */}
          <div className="text-center lg:text-left relative z-20 pt-8 lg:pt-0">
            
            {/* Premium Glass Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 rounded-full bg-white/60 dark:bg-white/5 border border-brand-100 dark:border-white/10 text-brand-600 dark:text-brand-300 text-[10px] sm:text-xs font-bold tracking-wider uppercase mb-6 sm:mb-8 shadow-sm dark:shadow-[0_0_20px_rgba(244,63,94,0.15)] backdrop-blur-md cursor-default">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500"></span>
              </span>
              Remote Secretariële Support
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-heading font-extrabold text-neutral-900 dark:text-white leading-[1.15] lg:leading-[1.1] mb-6 tracking-tight drop-shadow-sm dark:drop-shadow-lg transition-colors">
              Uw administratie <br/>
              <span className="text-gradient-shine animate-shine relative inline-block">
                strak geregeld
              </span>, <br/>
              terwijl u doorgaat met uw werk.
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl text-neutral-600 dark:text-neutral-300 leading-relaxed mb-8 sm:mb-10 max-w-2xl mx-auto lg:mx-0 font-light transition-colors">
              Ik ondersteun u met data entry, mutaties, rapportages en secretariële support – <span className="text-neutral-900 dark:text-white font-medium">nauwkeurig, gestructureerd en op tijd.</span>
            </p>
            
            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
              <a 
                href="#contact" 
                className="w-full sm:w-auto group relative inline-flex items-center justify-center px-8 py-4 bg-brand-600 text-white font-semibold rounded-xl overflow-hidden transition-all duration-300 hover:bg-brand-500 hover:scale-[1.02] shadow-[0_4px_20px_rgba(225,29,72,0.4)] dark:shadow-[0_0_30px_-5px_rgba(225,29,72,0.6)]"
              >
                <span className="relative z-10 flex items-center">
                  Vraag direct een offerte aan
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </a>
              <a 
                href="#process" 
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-white/60 dark:bg-white/5 text-neutral-700 dark:text-white font-semibold rounded-xl border border-neutral-200 dark:border-white/10 hover:bg-white dark:hover:bg-white/10 transition-all duration-300 backdrop-blur-sm shadow-sm hover:shadow-md"
              >
                Plan een kennismaking
              </a>
            </div>
            
            {/* Trust Indicators */}
            <div className="mt-8 sm:mt-12 flex flex-wrap items-center justify-center lg:justify-start gap-x-6 sm:gap-x-8 gap-y-4 text-sm font-medium text-neutral-500 dark:text-neutral-400">
              <div className="flex items-center gap-2 group cursor-default">
                <CheckCircle2 className="w-5 h-5 text-brand-500 group-hover:scale-110 transition-transform dark:drop-shadow-[0_0_8px_rgba(244,63,94,0.5)]" />
                <span className="group-hover:text-neutral-900 dark:group-hover:text-white transition-colors">Accuraat</span>
              </div>
              <div className="flex items-center gap-2 group cursor-default">
                <CheckCircle2 className="w-5 h-5 text-brand-500 group-hover:scale-110 transition-transform dark:drop-shadow-[0_0_8px_rgba(244,63,94,0.5)]" />
                <span className="group-hover:text-neutral-900 dark:group-hover:text-white transition-colors">Flexibel</span>
              </div>
              <div className="flex items-center gap-2 group cursor-default">
                <CheckCircle2 className="w-5 h-5 text-brand-500 group-hover:scale-110 transition-transform dark:drop-shadow-[0_0_8px_rgba(244,63,94,0.5)]" />
                <span className="group-hover:text-neutral-900 dark:group-hover:text-white transition-colors">Betrouwbaar</span>
              </div>
            </div>
          </div>

          {/* Right Content - Parallax Visual & Widget */}
          <div className="relative h-[400px] lg:h-[600px] w-full hidden lg:block perspective-1000">
             
             {/* Middle Layer: Floating Elements */}
             <div 
               className="absolute inset-0 z-10 will-change-transform"
               style={{ transform: `translateY(${offset * -0.12}px)` }}
             >
                {/* 4K Abstract Visual - Optimized Size and Quality */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-cover bg-no-repeat bg-center opacity-80 dark:opacity-60 pointer-events-none mix-blend-multiply dark:mix-blend-lighten transition-all duration-500"
                     style={{ 
                       backgroundImage: 'url("https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=60&w=1200&auto=format&fit=crop")',
                       maskImage: 'radial-gradient(circle, black 30%, transparent 70%)',
                       WebkitMaskImage: 'radial-gradient(circle, black 30%, transparent 70%)'
                     }}>
                </div>

                {/* Floating Glass Card 1 */}
                <div className="absolute top-10 left-[-20px] bg-white/90 dark:glass-dark p-4 rounded-2xl animate-float-delayed w-60 z-0 hover:scale-105 transition-all duration-500 border border-neutral-200 dark:border-white/10 shadow-xl dark:shadow-[0_0_30px_rgba(0,0,0,0.5)] backdrop-blur-xl">
                   <div className="flex items-center gap-3 mb-3">
                     <div className="p-2.5 bg-blue-50 dark:bg-neutral-900/80 rounded-lg text-blue-500 dark:text-blue-400 shadow-inner ring-1 ring-blue-100 dark:ring-white/10">
                        <Database size={20} />
                     </div>
                     <div>
                       <span className="block text-xs text-neutral-500 dark:text-neutral-400 font-medium">System Update</span>
                       <span className="text-sm font-bold text-neutral-800 dark:text-neutral-100">Data Entry</span>
                     </div>
                   </div>
                   <div className="space-y-2.5">
                      <div className="h-1.5 w-full bg-neutral-100 dark:bg-neutral-800 rounded-full overflow-hidden">
                        <div className="h-full bg-blue-500 w-[92%] rounded-full relative overflow-hidden dark:shadow-[0_0_10px_rgba(59,130,246,0.5)]">
                          <div className="absolute inset-0 bg-white/20 animate-[shine_2s_infinite]"></div>
                        </div>
                      </div>
                      <div className="flex justify-between text-[10px] text-neutral-500 dark:text-neutral-400 font-medium">
                        <span>Verwerken...</span>
                        <span className="text-blue-500 dark:text-blue-400">92%</span>
                      </div>
                   </div>
                </div>

                {/* Floating Glass Card 2 */}
                <div className="absolute bottom-24 right-[-10px] bg-white/90 dark:glass-dark p-4 rounded-2xl animate-float w-60 z-0 hover:scale-105 transition-all duration-500 border border-neutral-200 dark:border-white/10 shadow-xl dark:shadow-[0_0_30px_rgba(0,0,0,0.5)] backdrop-blur-xl">
                   <div className="flex items-center justify-between mb-4">
                     <div className="flex items-center gap-3">
                       <div className="p-2 bg-emerald-50 dark:bg-neutral-900/80 rounded-lg text-emerald-500 dark:text-emerald-400 shadow-inner ring-1 ring-emerald-100 dark:ring-white/10">
                          <FileSpreadsheet size={18} />
                       </div>
                       <span className="text-sm font-bold text-neutral-800 dark:text-neutral-100">Mutaties</span>
                     </div>
                     <span className="flex h-2 w-2 relative">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                     </span>
                   </div>
                   <div className="space-y-2">
                      <div className="flex items-center justify-between p-2 bg-neutral-50 dark:bg-neutral-900/50 rounded-lg border border-neutral-100 dark:border-white/5">
                        <span className="text-[10px] text-neutral-500 dark:text-neutral-400">Rij 1420</span>
                        <span className="text-[10px] text-emerald-500 dark:text-emerald-400 font-mono font-bold">Done</span>
                      </div>
                   </div>
                </div>
             </div>

             {/* Foreground Layer: Quote Widget */}
             <div 
               className="absolute top-1/2 left-1/2 w-full max-w-md z-30 will-change-transform px-4 lg:px-0"
               style={{ transform: `translate(-50%, calc(-50% - ${offset * 0.25}px))` }}
             >
                {/* Widget Card - High Contrast White */}
                <div className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl shadow-neutral-200/50 dark:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.8)] border border-white/50 dark:border-white/20 p-8 animate-float-subtle relative overflow-hidden transition-all duration-300 hover:shadow-brand-900/10 group">
                  
                  {/* Decorative Top Border */}
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-600 via-brand-400 to-brand-600"></div>

                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-brand-50 flex items-center justify-center text-brand-600 shadow-inner ring-1 ring-brand-100 group-hover:scale-110 transition-transform">
                      <Zap size={24} className="fill-brand-600" />
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-neutral-900 text-lg">Snel een indicatie?</h3>
                      <p className="text-xs text-neutral-500 font-medium">Binnen 24u een reactie</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4 text-left">
                    <div>
                      <label className="block text-[11px] font-bold text-neutral-500 mb-1.5 uppercase tracking-wider">Waar heeft u hulp bij?</label>
                      <div className="relative group/select">
                        <select className="w-full p-3 bg-neutral-50 border border-neutral-200 rounded-xl text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 text-neutral-800 appearance-none transition-all cursor-pointer hover:bg-white hover:border-brand-300">
                          <option>Data Entry & Mutaties</option>
                          <option>Administratieve Ondersteuning</option>
                          <option>E-mail & Agenda</option>
                          <option>Anders...</option>
                        </select>
                        <div className="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none text-neutral-400 group-hover/select:text-brand-500 transition-colors">
                          <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" fillRule="evenodd"></path></svg>
                        </div>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                       <div className="col-span-2 sm:col-span-1">
                          <label className="block text-[11px] font-bold text-neutral-500 mb-1.5 uppercase tracking-wider">Uren p/m</label>
                          <input type="number" placeholder="Bijv. 8" className="w-full p-3 bg-neutral-50 border border-neutral-200 rounded-xl text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 transition-all text-neutral-800 hover:bg-white hover:border-brand-300 placeholder:text-neutral-400" />
                       </div>
                       <div className="col-span-2 sm:col-span-1">
                          <label className="block text-[11px] font-bold text-neutral-500 mb-1.5 uppercase tracking-wider">E-mail</label>
                          <input type="email" placeholder="uw@email.nl" className="w-full p-3 bg-neutral-50 border border-neutral-200 rounded-xl text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 transition-all text-neutral-800 hover:bg-white hover:border-brand-300 placeholder:text-neutral-400" />
                       </div>
                    </div>

                    <button className="group/btn w-full py-3.5 bg-neutral-900 text-white rounded-xl font-bold text-sm hover:bg-brand-600 transition-all shadow-xl shadow-brand-900/5 hover:shadow-brand-500/20 flex items-center justify-center gap-2 mt-2 relative overflow-hidden active:scale-[0.98]">
                      <span className="relative z-10 flex items-center gap-2">
                        Ontvang indicatie
                        <Send size={16} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                      </span>
                    </button>
                  </div>
                </div>
             </div>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="hidden sm:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-3 animate-bounce opacity-50 hover:opacity-100 transition-opacity cursor-pointer z-20">
        <span className="text-[10px] uppercase tracking-[0.2em] text-neutral-400 font-medium">Scroll</span>
        <div className="w-[1px] h-8 bg-gradient-to-b from-brand-500 to-transparent"></div>
      </div>
    </section>
  );
};

export default Hero;