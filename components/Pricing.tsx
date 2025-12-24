import React from 'react';
import { Check, Sparkles, Zap, BarChart3, ArrowRight } from 'lucide-react';

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-24 bg-neutral-50 dark:bg-black/40 backdrop-blur-md border-t border-neutral-200 dark:border-white/5 relative overflow-hidden transition-colors duration-500">
      
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-500/5 rounded-full blur-[128px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-500/5 rounded-full blur-[128px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block py-1 px-3 rounded-full bg-brand-100 dark:bg-brand-500/10 text-brand-600 dark:text-brand-400 text-xs font-bold uppercase tracking-widest mb-4 border border-brand-200 dark:border-brand-500/20">
            Tarieven
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-neutral-900 dark:text-white mb-6 drop-shadow-sm dark:drop-shadow-lg transition-colors">
            Pakketten & <span className="text-gradient-shine">tarieven</span>
          </h2>
          <p className="text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto transition-colors text-lg font-light">
            Kies het pakket dat past bij de hoeveelheid ondersteuning die u nodig heeft. Voor elk pakket geldt een vast uurtarief op basis van een minimaal aantal uren per maand.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          
          {/* Package 1: Basis */}
          <div className="flex flex-col bg-white dark:bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-neutral-200 dark:border-white/10 hover:border-brand-300 dark:hover:border-brand-500/30 transition-all duration-300 group hover:-translate-y-2 shadow-sm hover:shadow-xl dark:shadow-lg">
            <div className="mb-6">
              <div className="w-12 h-12 bg-neutral-100 dark:bg-white/10 rounded-xl flex items-center justify-center text-neutral-600 dark:text-white mb-4 group-hover:scale-110 transition-transform">
                <Sparkles size={24} />
              </div>
              <h3 className="text-2xl font-heading font-bold text-neutral-900 dark:text-white">Basis</h3>
              <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-2 min-h-[40px]">
                Kleine mutaties en lichte administratieve ondersteuning, ideaal als u af en toe extra handen nodig heeft.
              </p>
            </div>
            
            <div className="mb-8 p-4 bg-neutral-50 dark:bg-white/5 rounded-2xl border border-neutral-100 dark:border-white/5">
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-bold text-neutral-900 dark:text-white">€ 55</span>
                <span className="text-neutral-500 dark:text-neutral-400 font-medium">/ uur</span>
              </div>
              <div className="mt-2 text-xs font-bold text-brand-600 dark:text-brand-400 uppercase tracking-wide">
                Minimaal 5 uur p/m
              </div>
            </div>

            <ul className="space-y-4 mb-8 flex-grow">
               <li className="flex items-start text-sm text-neutral-600 dark:text-neutral-300">
                 <Check className="w-5 h-5 text-brand-500 mr-3 flex-shrink-0" /> 
                 <span>Ideaal voor incidentele taken</span>
               </li>
               <li className="flex items-start text-sm text-neutral-600 dark:text-neutral-300">
                 <Check className="w-5 h-5 text-brand-500 mr-3 flex-shrink-0" /> 
                 <span>Geen langdurige verplichtingen</span>
               </li>
               <li className="flex items-start text-sm text-neutral-600 dark:text-neutral-300">
                 <Check className="w-5 h-5 text-brand-500 mr-3 flex-shrink-0" /> 
                 <span>Directe communicatie</span>
               </li>
            </ul>
            
            <a href="#contact" className="w-full py-3.5 px-4 bg-neutral-100 dark:bg-white/10 hover:bg-neutral-200 dark:hover:bg-white/20 text-neutral-900 dark:text-white font-bold rounded-xl transition-all flex items-center justify-center gap-2 group-hover:bg-brand-600 group-hover:text-white dark:group-hover:bg-brand-600">
              Kies Basis
            </a>
          </div>

          {/* Package 2: Standaard (Highlighted) */}
          <div className="flex flex-col relative bg-neutral-900 dark:bg-neutral-900/80 backdrop-blur-xl rounded-3xl p-8 border border-neutral-800 dark:border-brand-500/50 shadow-2xl dark:shadow-brand-900/20 transform md:-translate-y-4 z-10 hover:-translate-y-6 duration-300 group overflow-hidden">
            {/* Top Shine */}
            <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-brand-600 via-brand-400 to-brand-600"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-brand-900/10 to-transparent pointer-events-none"></div>

            <div className="mb-6 relative z-10">
              <div className="flex justify-between items-start mb-4">
                <div className="w-12 h-12 bg-brand-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-brand-600/30 group-hover:scale-110 transition-transform">
                  <Zap size={24} className="fill-white" />
                </div>
                <span className="px-3 py-1 bg-brand-500 text-white text-[10px] font-bold rounded-full uppercase tracking-wider shadow-[0_0_10px_rgba(244,63,94,0.5)]">
                  Meest Gekozen
                </span>
              </div>
              <h3 className="text-2xl font-heading font-bold text-white">Standaard</h3>
              <p className="text-sm text-neutral-400 mt-2 min-h-[40px]">
                Structurele mutaties en doorlopende ondersteuning. Geschikt als u regelmatig terugkerende taken wilt uitbesteden.
              </p>
            </div>
            
            <div className="mb-8 p-4 bg-white/5 rounded-2xl border border-white/10 relative z-10">
              <div className="flex items-baseline gap-1">
                <span className="text-5xl font-bold text-white">€ 50</span>
                <span className="text-neutral-400 font-medium">/ uur</span>
              </div>
              <div className="mt-2 text-xs font-bold text-brand-400 uppercase tracking-wide">
                Minimaal 10 uur p/m
              </div>
            </div>

            <ul className="space-y-4 mb-8 flex-grow relative z-10">
               <li className="flex items-start text-sm text-white">
                 <div className="p-0.5 rounded-full bg-brand-500/20 mr-3">
                   <Check className="w-4 h-4 text-brand-400" />
                 </div>
                 <span>Continuïteit gewaarborgd</span>
               </li>
               <li className="flex items-start text-sm text-white">
                 <div className="p-0.5 rounded-full bg-brand-500/20 mr-3">
                   <Check className="w-4 h-4 text-brand-400" />
                 </div>
                 <span>Vaste taken uit handen</span>
               </li>
               <li className="flex items-start text-sm text-white">
                 <div className="p-0.5 rounded-full bg-brand-500/20 mr-3">
                   <Check className="w-4 h-4 text-brand-400" />
                 </div>
                 <span>Scherper uurtarief</span>
               </li>
                <li className="flex items-start text-sm text-white">
                 <div className="p-0.5 rounded-full bg-brand-500/20 mr-3">
                   <Check className="w-4 h-4 text-brand-400" />
                 </div>
                 <span>Pro-actieve houding</span>
               </li>
            </ul>
            
            <a href="#contact" className="relative z-10 w-full py-4 px-4 bg-brand-600 hover:bg-brand-500 text-white font-bold rounded-xl transition-all shadow-[0_4px_14px_0_rgba(244,63,94,0.39)] hover:shadow-[0_6px_20px_rgba(244,63,94,0.23)] flex items-center justify-center gap-2 group-hover:scale-[1.02]">
              Kies Standaard <ArrowRight size={18} />
            </a>
          </div>

          {/* Package 3: Intensief */}
          <div className="flex flex-col bg-white dark:bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-neutral-200 dark:border-white/10 hover:border-brand-300 dark:hover:border-brand-500/30 transition-all duration-300 group hover:-translate-y-2 shadow-sm hover:shadow-xl dark:shadow-lg">
            <div className="mb-6">
              <div className="w-12 h-12 bg-neutral-100 dark:bg-white/10 rounded-xl flex items-center justify-center text-neutral-600 dark:text-white mb-4 group-hover:scale-110 transition-transform">
                <BarChart3 size={24} />
              </div>
              <h3 className="text-2xl font-heading font-bold text-neutral-900 dark:text-white">Intensief</h3>
              <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-2 min-h-[40px]">
                Grote volumes en complexere mutaties, voor organisaties die veel data- en administratief werk willen overdragen.
              </p>
            </div>
            
            <div className="mb-8 p-4 bg-neutral-50 dark:bg-white/5 rounded-2xl border border-neutral-100 dark:border-white/5">
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-bold text-neutral-900 dark:text-white">€ 45</span>
                <span className="text-neutral-500 dark:text-neutral-400 font-medium">/ uur</span>
              </div>
              <div className="mt-2 text-xs font-bold text-brand-600 dark:text-brand-400 uppercase tracking-wide">
                Minimaal 20 uur p/m
              </div>
            </div>

            <ul className="space-y-4 mb-8 flex-grow">
               <li className="flex items-start text-sm text-neutral-600 dark:text-neutral-300">
                 <Check className="w-5 h-5 text-brand-500 mr-3 flex-shrink-0" /> 
                 <span>Hoogste schaalvoordeel</span>
               </li>
               <li className="flex items-start text-sm text-neutral-600 dark:text-neutral-300">
                 <Check className="w-5 h-5 text-brand-500 mr-3 flex-shrink-0" /> 
                 <span>Complexe data entry</span>
               </li>
               <li className="flex items-start text-sm text-neutral-600 dark:text-neutral-300">
                 <Check className="w-5 h-5 text-brand-500 mr-3 flex-shrink-0" /> 
                 <span>Prioriteit in planning</span>
               </li>
            </ul>
            
            <a href="#contact" className="w-full py-3.5 px-4 bg-neutral-100 dark:bg-white/10 hover:bg-neutral-200 dark:hover:bg-white/20 text-neutral-900 dark:text-white font-bold rounded-xl transition-all flex items-center justify-center gap-2 group-hover:bg-brand-600 group-hover:text-white dark:group-hover:bg-brand-600">
              Kies Intensief
            </a>
          </div>

        </div>

        {/* Customization & Disclaimer */}
        <div className="mt-16 text-center space-y-4">
           <div className="inline-flex flex-col sm:flex-row items-center gap-3 px-6 py-3 rounded-2xl bg-white/50 dark:bg-white/5 border border-neutral-200 dark:border-white/10 backdrop-blur-sm">
              <span className="relative flex h-2 w-2 flex-shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500"></span>
              </span>
              <p className="text-sm font-medium text-neutral-700 dark:text-neutral-200 text-center sm:text-left">
                <span className="font-bold block sm:inline">Incidentele ondersteuning? </span>
                Voor eenmalige of kortdurende opdrachten is dit mogelijk zonder pakket. Tarief: <span className="text-brand-600 dark:text-brand-400 font-bold">€ 60,- per uur</span>
              </p>
           </div>
           
           <p className="text-neutral-400 dark:text-neutral-500 text-xs">
            Alle tarieven zijn exclusief btw. Maatwerk is altijd mogelijk; neem gerust contact op om uw situatie te bespreken.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;