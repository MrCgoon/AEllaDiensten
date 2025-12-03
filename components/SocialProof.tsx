import React from 'react';
import { ShieldCheck, Clock, Zap } from 'lucide-react';

const SocialProof: React.FC = () => {
  return (
    <section className="py-20 bg-neutral-50 dark:bg-black/40 backdrop-blur-md border-t border-neutral-200 dark:border-white/5 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
           <h2 className="text-2xl font-heading font-bold text-neutral-900 dark:text-white drop-shadow-sm dark:drop-shadow-md transition-colors">
            Waarom kiezen voor Ella?
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div className="flex flex-col items-center text-center p-8 rounded-2xl bg-white dark:bg-white/5 border border-neutral-200 dark:border-white/5 hover:bg-neutral-50 dark:hover:bg-white/10 hover:border-brand-300 dark:hover:border-brand-500/30 transition-all duration-300 group shadow-md hover:shadow-xl dark:shadow-lg dark:hover:shadow-brand-900/10">
            <div className="w-14 h-14 bg-neutral-100 dark:bg-neutral-800/80 rounded-full flex items-center justify-center text-brand-600 dark:text-brand-500 mb-6 shadow-md dark:shadow-lg dark:shadow-black/30 group-hover:scale-110 transition-transform relative overflow-hidden ring-1 ring-neutral-100 dark:ring-white/5">
               <div className="absolute inset-0 bg-brand-500/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity"></div>
               <ShieldCheck className="w-7 h-7 relative z-10" />
            </div>
            <h3 className="text-lg font-bold text-neutral-900 dark:text-white mb-2 transition-colors">Accuraat & Zorgvuldig</h3>
            <p className="text-neutral-600 dark:text-neutral-400 transition-colors">Ik ga voor 100% kwaliteit. Foutloos werken is mijn standaard.</p>
          </div>

          <div className="flex flex-col items-center text-center p-8 rounded-2xl bg-white dark:bg-white/5 border border-neutral-200 dark:border-white/5 hover:bg-neutral-50 dark:hover:bg-white/10 hover:border-brand-300 dark:hover:border-brand-500/30 transition-all duration-300 group shadow-md hover:shadow-xl dark:shadow-lg dark:hover:shadow-brand-900/10">
            <div className="w-14 h-14 bg-neutral-100 dark:bg-neutral-800/80 rounded-full flex items-center justify-center text-brand-600 dark:text-brand-500 mb-6 shadow-md dark:shadow-lg dark:shadow-black/30 group-hover:scale-110 transition-transform relative overflow-hidden ring-1 ring-neutral-100 dark:ring-white/5">
               <div className="absolute inset-0 bg-brand-500/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity"></div>
               <Clock className="w-7 h-7 relative z-10" />
            </div>
            <h3 className="text-lg font-bold text-neutral-900 dark:text-white mb-2 transition-colors">Flexibel inzetbaar</h3>
            <p className="text-neutral-600 dark:text-neutral-400 transition-colors">Geen 9-tot-5 mentaliteit als het er echt op aankomt.</p>
          </div>

          <div className="flex flex-col items-center text-center p-8 rounded-2xl bg-white dark:bg-white/5 border border-neutral-200 dark:border-white/5 hover:bg-neutral-50 dark:hover:bg-white/10 hover:border-brand-300 dark:hover:border-brand-500/30 transition-all duration-300 group shadow-md hover:shadow-xl dark:shadow-lg dark:hover:shadow-brand-900/10">
            <div className="w-14 h-14 bg-neutral-100 dark:bg-neutral-800/80 rounded-full flex items-center justify-center text-brand-600 dark:text-brand-500 mb-6 shadow-md dark:shadow-lg dark:shadow-black/30 group-hover:scale-110 transition-transform relative overflow-hidden ring-1 ring-neutral-100 dark:ring-white/5">
               <div className="absolute inset-0 bg-brand-500/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity"></div>
               <Zap className="w-7 h-7 relative z-10" />
            </div>
            <h3 className="text-lg font-bold text-neutral-900 dark:text-white mb-2 transition-colors">Volledig ontzorgd</h3>
            <p className="text-neutral-600 dark:text-neutral-400 transition-colors">U geeft de klus uit handen en krijgt rust en resultaat terug.</p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default SocialProof;