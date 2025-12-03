import React from 'react';
import { Check } from 'lucide-react';

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-24 bg-neutral-50 dark:bg-black/40 backdrop-blur-md border-t border-neutral-200 dark:border-white/5 relative overflow-hidden transition-colors duration-500">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-neutral-900 dark:text-white mb-4 drop-shadow-sm dark:drop-shadow-lg transition-colors">
            Transparante tarieven
          </h2>
          <p className="text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto transition-colors">
            Geen verrassingen achteraf. Kies de vorm die bij uw vraag past.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Card 1 */}
          <div className="bg-white dark:bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-neutral-200 dark:border-white/10 hover:border-brand-300 dark:hover:border-brand-500/50 transition-all duration-300 flex flex-col hover:-translate-y-2 group shadow-md hover:shadow-xl dark:shadow-xl">
            <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-2">Los uurtarief</h3>
            <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-6">Voor eenmalige klussen</p>
            <div className="mb-6">
              <span className="text-4xl font-bold text-brand-600 dark:text-white">€ 42,-</span>
              <span className="text-neutral-500 dark:text-neutral-400 text-sm"> / uur</span>
            </div>
            <ul className="space-y-3 mb-8 flex-grow">
               <li className="flex items-center text-sm text-neutral-600 dark:text-neutral-300"><Check className="w-4 h-4 text-brand-500 mr-3" /> Flexibel inzetbaar</li>
               <li className="flex items-center text-sm text-neutral-600 dark:text-neutral-300"><Check className="w-4 h-4 text-brand-500 mr-3" /> Geen vast contract</li>
               <li className="flex items-center text-sm text-neutral-600 dark:text-neutral-300"><Check className="w-4 h-4 text-brand-500 mr-3" /> Ideaal voor spoedjes</li>
            </ul>
            <a href="#contact" className="block text-center w-full py-3 px-4 bg-neutral-100 dark:bg-white/10 hover:bg-neutral-200 dark:hover:bg-white/20 text-neutral-900 dark:text-white font-semibold rounded-xl transition-all border border-neutral-200 dark:border-white/5 hover:shadow-lg">
              Aanvragen
            </a>
          </div>

          {/* Card 2 - Featured */}
          <div className="bg-neutral-900 dark:bg-neutral-900/80 backdrop-blur-xl rounded-3xl p-8 border border-neutral-800 dark:border-brand-500/50 shadow-2xl dark:shadow-brand-900/20 flex flex-col transform md:-translate-y-4 hover:-translate-y-6 duration-300 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-b from-brand-900/20 to-transparent pointer-events-none"></div>
            
            <div className="relative z-10">
              <div className="flex justify-between items-center mb-2">
                 <h3 className="text-xl font-bold text-white">Strippenkaart</h3>
                 <span className="px-2 py-1 bg-brand-500 text-white text-[10px] font-bold rounded uppercase tracking-wider shadow-[0_0_10px_rgba(244,63,94,0.5)]">Populair</span>
              </div>
              <p className="text-sm text-brand-200/80 mb-6">5 uur tegoed</p>
              <div className="mb-6">
                <span className="text-4xl font-bold text-white">€ 190,-</span>
                <span className="text-brand-200/60 text-sm"> / totaal</span>
              </div>
              <p className="text-xs text-brand-100 mb-6 font-medium bg-brand-500/20 border border-brand-500/30 inline-block px-3 py-1 rounded-full w-max">
                Komt neer op € 38,- per uur
              </p>
              <ul className="space-y-3 mb-8 flex-grow">
                 <li className="flex items-center text-sm text-white"><Check className="w-4 h-4 text-brand-400 mr-3 shadow-[0_0_8px_rgba(244,63,94,0.6)] rounded-full" /> 6 maanden geldig</li>
                 <li className="flex items-center text-sm text-white"><Check className="w-4 h-4 text-brand-400 mr-3 shadow-[0_0_8px_rgba(244,63,94,0.6)] rounded-full" /> Op afroep beschikbaar</li>
                 <li className="flex items-center text-sm text-white"><Check className="w-4 h-4 text-brand-400 mr-3 shadow-[0_0_8px_rgba(244,63,94,0.6)] rounded-full" /> Zonder zorgen uitbesteden</li>
              </ul>
              <a href="#contact" className="block text-center w-full py-3 px-4 bg-brand-600 hover:bg-brand-500 text-white font-bold rounded-xl transition-all shadow-[0_4px_14px_0_rgba(244,63,94,0.39)] hover:shadow-[0_6px_20px_rgba(244,63,94,0.23)]">
                Bestel Strippenkaart
              </a>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white dark:bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-neutral-200 dark:border-white/10 hover:border-brand-300 dark:hover:border-brand-500/50 transition-all duration-300 flex flex-col hover:-translate-y-2 group shadow-md hover:shadow-xl dark:shadow-xl">
            <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-2">Abonnement</h3>
            <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-6">Vast aantal uren p/m</p>
            <div className="mb-6">
              <span className="text-4xl font-bold text-brand-600 dark:text-white">€ 35,-</span>
              <span className="text-neutral-500 dark:text-neutral-400 text-sm"> / uur</span>
            </div>
            <ul className="space-y-3 mb-8 flex-grow">
               <li className="flex items-center text-sm text-neutral-600 dark:text-neutral-300"><Check className="w-4 h-4 text-brand-500 mr-3" /> Continuïteit verzekerd</li>
               <li className="flex items-center text-sm text-neutral-600 dark:text-neutral-300"><Check className="w-4 h-4 text-brand-500 mr-3" /> Vaste afspraken</li>
               <li className="flex items-center text-sm text-neutral-600 dark:text-neutral-300"><Check className="w-4 h-4 text-brand-500 mr-3" /> Voordeligste tarief</li>
            </ul>
            <a href="#contact" className="block text-center w-full py-3 px-4 bg-neutral-100 dark:bg-white/10 hover:bg-neutral-200 dark:hover:bg-white/20 text-neutral-900 dark:text-white font-semibold rounded-xl transition-all border border-neutral-200 dark:border-white/5 hover:shadow-lg">
              Bespreken
            </a>
          </div>

        </div>
        <p className="text-center text-neutral-500 text-sm mt-12">
          Alle genoemde tarieven zijn exclusief btw.
        </p>
      </div>
    </section>
  );
};

export default Pricing;