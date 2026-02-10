import React from 'react';
import { Check, Sparkles, Zap, BarChart3, ArrowRight, CreditCard, Star } from 'lucide-react';

// INSTRUCTIE: Plak hieronder tussen de aanhalingstekens je Stripe Payment Links
const STRIPE_LINKS = {
  basis: "", 
  standaard: "", 
  intensief: ""
};

const Pricing: React.FC = () => {

  const handlePurchase = (tier: keyof typeof STRIPE_LINKS) => {
    const link = STRIPE_LINKS[tier];
    if (link && link.length > 0) {
      window.location.href = link;
    } else {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="pricing" className="py-24 bg-neutral-50 dark:bg-black/40 backdrop-blur-md border-t border-neutral-200 dark:border-white/5 relative overflow-hidden transition-colors duration-500">
      
      {/* Dynamic Background Accents */}
      <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-brand-500/5 rounded-full blur-[120px] pointer-events-none animate-pulse-slow"></div>
      <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-[120px] pointer-events-none animate-pulse-slow"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 py-1 px-3 rounded-full bg-brand-100 dark:bg-brand-500/10 text-brand-600 dark:text-brand-400 text-xs font-bold uppercase tracking-widest mb-4 border border-brand-200 dark:border-brand-500/20">
            <Star size={12} className="fill-current" />
            Investeer in rust
          </div>
          <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-neutral-900 dark:text-white mb-6 tracking-tight transition-colors">
            Pakketten die met u <span className="text-gradient-shine">meegroeien</span>
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto transition-colors text-lg font-light leading-relaxed">
            Kies voor structuur en continuïteit. Mijn pakketten zijn ontworpen om u precies de ondersteuning te bieden die u nodig heeft, met een scherper tarief naarmate u meer uitbesteedt.
          </p>
          <div className="mt-6 flex items-center justify-center gap-3 text-sm text-neutral-400 dark:text-neutral-500 font-medium">
             <div className="flex -space-x-1">
               {[1,2,3].map(i => (
                 <div key={i} className="w-6 h-6 rounded-full border-2 border-white dark:border-neutral-900 bg-neutral-200 dark:bg-neutral-800 flex items-center justify-center">
                    <Check size={10} className="text-brand-500" />
                 </div>
               ))}
             </div>
             <span>Veilig & snel afrekenen via Stripe</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          
          {/* Package 1: Basis */}
          <div className="flex flex-col bg-white dark:bg-neutral-900/40 backdrop-blur-xl rounded-[2.5rem] p-8 border border-neutral-200 dark:border-white/5 hover:border-brand-300 dark:hover:border-brand-500/20 transition-all duration-500 group hover:-translate-y-2 shadow-sm hover:shadow-2xl">
            <div className="mb-8">
              <div className="inline-block mb-4 px-3 py-1 rounded-full bg-neutral-100 dark:bg-white/5 text-[10px] font-bold text-neutral-500 dark:text-neutral-400 uppercase tracking-widest">
                Instapmodel
              </div>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-neutral-100 dark:bg-white/10 rounded-2xl flex items-center justify-center text-neutral-600 dark:text-white group-hover:scale-110 transition-transform">
                  <Sparkles size={24} />
                </div>
                <h3 className="text-2xl font-heading font-bold text-neutral-900 dark:text-white">Basis</h3>
              </div>
              <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed min-h-[60px]">
                Ideaal voor de startende ondernemer of kleine projecten die incidentele administratieve hulp nodig hebben.
              </p>
            </div>
            
            <div className="mb-8 p-6 bg-neutral-50 dark:bg-white/5 rounded-3xl border border-neutral-100 dark:border-white/5 relative overflow-hidden group/price">
              <div className="absolute inset-0 bg-gradient-to-br from-brand-500/5 to-transparent opacity-0 group-hover/price:opacity-100 transition-opacity"></div>
              <div className="relative z-10">
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-extrabold text-neutral-900 dark:text-white">€ 55</span>
                  <span className="text-neutral-500 dark:text-neutral-400 font-medium">/ uur</span>
                </div>
                <div className="mt-2 text-xs font-bold text-brand-600 dark:text-brand-400 uppercase tracking-wider">
                  Vanaf 5 uur p/m
                </div>
              </div>
            </div>

            <ul className="space-y-4 mb-10 flex-grow">
               {[
                 "Nauwkeurige data entry",
                 "Incidentele mutaties",
                 "Basis rapportages",
                 "Flexibele maandelijkse afname"
               ].map((item, idx) => (
                 <li key={idx} className="flex items-start text-sm text-neutral-600 dark:text-neutral-300">
                   <div className="w-5 h-5 rounded-full bg-brand-50 dark:bg-brand-500/10 flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-brand-500" /> 
                   </div>
                   <span>{item}</span>
                 </li>
               ))}
            </ul>
            
            <button 
              onClick={() => handlePurchase('basis')}
              className="w-full py-4 px-6 bg-neutral-900 dark:bg-white/5 hover:bg-brand-600 dark:hover:bg-brand-600 text-white font-bold rounded-2xl transition-all shadow-lg hover:shadow-brand-500/25 active:scale-95"
            >
              Start met Basis
            </button>
          </div>

          {/* Package 2: Standaard (The Hero) */}
          <div className="flex flex-col relative bg-neutral-900 dark:bg-neutral-950 rounded-[2.5rem] p-8 border border-neutral-800 dark:border-brand-500/30 shadow-2xl md:-translate-y-6 z-10 transition-all duration-500 group hover:-translate-y-8 overflow-hidden">
            
            {/* Animated Glow Border */}
            <div className="absolute inset-0 border-2 border-transparent group-hover:border-brand-500/50 rounded-[2.5rem] transition-all duration-500"></div>
            
            {/* Top Badge */}
            <div className="absolute top-0 inset-x-0 flex justify-center">
              <div className="bg-brand-600 text-white text-[10px] font-bold px-4 py-1.5 rounded-b-xl uppercase tracking-widest shadow-lg shadow-brand-500/20 animate-pulse-slow">
                Populairste Keuze
              </div>
            </div>

            <div className="mt-6 mb-8 relative z-10">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-brand-600 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-brand-600/30 group-hover:scale-110 transition-transform">
                  <Zap size={24} className="fill-white" />
                </div>
                <h3 className="text-2xl font-heading font-bold text-white">Standaard</h3>
              </div>
              <p className="text-sm text-neutral-400 leading-relaxed min-h-[60px]">
                De perfecte balans tussen continuïteit en kosten. Ik neem uw dagelijkse mutaties volledig uit handen.
              </p>
            </div>
            
            <div className="mb-8 p-6 bg-white/5 rounded-3xl border border-white/10 relative z-10 group/price">
              <div className="absolute inset-0 bg-brand-500/10 opacity-0 group-hover/price:opacity-100 transition-opacity"></div>
              <div className="relative z-10">
                <div className="flex items-baseline gap-1">
                  <span className="text-5xl font-extrabold text-white">€ 50</span>
                  <span className="text-neutral-400 font-medium">/ uur</span>
                </div>
                <div className="mt-2 text-xs font-bold text-brand-400 uppercase tracking-wider">
                  Vanaf 10 uur p/m
                </div>
              </div>
            </div>

            <ul className="space-y-4 mb-10 flex-grow relative z-10">
               {[
                 "Inclusief Agendabeheer",
                 "Structurele CRM mutaties",
                 "Wekelijkse status updates",
                 "Scherp uurtarief",
                 "Prioriteit bij spoedklussen"
               ].map((item, idx) => (
                 <li key={idx} className="flex items-start text-sm text-neutral-200">
                   <div className="w-5 h-5 rounded-full bg-brand-600/20 border border-brand-500/30 flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-brand-400" /> 
                   </div>
                   <span>{item}</span>
                 </li>
               ))}
            </ul>
            
            <button 
              onClick={() => handlePurchase('standaard')}
              className="relative z-10 w-full py-4 px-6 bg-brand-600 hover:bg-brand-500 text-white font-bold rounded-2xl transition-all shadow-xl shadow-brand-600/30 hover:shadow-brand-600/50 flex items-center justify-center gap-2 active:scale-95"
            >
              Kies Standaard <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Package 3: Intensief */}
          <div className="flex flex-col bg-white dark:bg-neutral-900/40 backdrop-blur-xl rounded-[2.5rem] p-8 border border-neutral-200 dark:border-white/5 hover:border-brand-300 dark:hover:border-brand-500/20 transition-all duration-500 group hover:-translate-y-2 shadow-sm hover:shadow-2xl">
            <div className="mb-8">
              <div className="inline-block mb-4 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-500/10 text-[10px] font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-widest">
                Beste Waarde
              </div>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-neutral-100 dark:bg-white/10 rounded-2xl flex items-center justify-center text-neutral-600 dark:text-white group-hover:scale-110 transition-transform">
                  <BarChart3 size={24} />
                </div>
                <h3 className="text-2xl font-heading font-bold text-neutral-900 dark:text-white">Intensief</h3>
              </div>
              <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed min-h-[60px]">
                Maximale ondersteuning voor groeiende bedrijven met grote volumes data en complexe administratieve stromen.
              </p>
            </div>
            
            <div className="mb-8 p-6 bg-neutral-50 dark:bg-white/5 rounded-3xl border border-neutral-100 dark:border-white/5 relative overflow-hidden group/price">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover/price:opacity-100 transition-opacity"></div>
              <div className="relative z-10">
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-extrabold text-neutral-900 dark:text-white">€ 45</span>
                  <span className="text-neutral-500 dark:text-neutral-400 font-medium">/ uur</span>
                </div>
                <div className="mt-2 text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
                  Vanaf 20 uur p/m
                </div>
              </div>
            </div>

            <ul className="space-y-4 mb-10 flex-grow">
               {[
                 "Complexe data analyses",
                 "Volledige procesbewaking",
                 "Laagste uurtarief",
                 "Toegewezen focus-tijd",
                 "Maandelijkse strategie call"
               ].map((item, idx) => (
                 <li key={idx} className="flex items-start text-sm text-neutral-600 dark:text-neutral-300">
                   <div className="w-5 h-5 rounded-full bg-emerald-50 dark:bg-emerald-500/10 flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-emerald-500" /> 
                   </div>
                   <span>{item}</span>
                 </li>
               ))}
            </ul>
            
            <button 
              onClick={() => handlePurchase('intensief')}
              className="w-full py-4 px-6 bg-neutral-900 dark:bg-white/5 hover:bg-neutral-800 dark:hover:bg-emerald-600 text-white font-bold rounded-2xl transition-all shadow-lg active:scale-95"
            >
              Kies Intensief
            </button>
          </div>

        </div>

        {/* Customization & Extra Option Card */}
        <div className="mt-16 relative">
           <div className="max-w-4xl mx-auto p-8 rounded-[2rem] bg-gradient-to-r from-white to-neutral-50 dark:from-neutral-900 dark:to-neutral-950 border border-neutral-200 dark:border-white/10 backdrop-blur-sm shadow-xl flex flex-col md:flex-row items-center justify-between gap-8 overflow-hidden group">
              {/* Shine effect */}
              <div className="absolute top-0 -left-[100%] w-[50%] h-full bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:left-[100%] transition-all duration-1000"></div>

              <div className="flex-grow text-center md:text-left relative z-10">
                <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
                  <CreditCard className="text-brand-500" size={20} />
                  <span className="text-sm font-bold text-brand-600 dark:text-brand-400 uppercase tracking-widest">Incidentele Hulp</span>
                </div>
                <h4 className="text-xl font-heading font-bold text-neutral-900 dark:text-white mb-2">Liever geen pakket?</h4>
                <p className="text-neutral-500 dark:text-neutral-400 text-sm max-w-md">
                  Voor eenmalige opdrachten of kortdurende projecten hanteer ik een flexibel tarief van <span className="font-bold text-neutral-900 dark:text-white">€ 60,- per uur</span> (excl. btw).
                </p>
              </div>

              <div className="flex-shrink-0 relative z-10">
                <a 
                  href="#contact" 
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white dark:bg-white/5 border border-neutral-200 dark:border-white/10 rounded-2xl text-neutral-900 dark:text-white font-bold hover:bg-neutral-50 dark:hover:bg-white/10 transition-all shadow-sm hover:shadow-md hover:scale-105"
                >
                  Bespreek uw klus
                  <ArrowRight size={18} />
                </a>
              </div>
           </div>
           
           <p className="mt-8 text-center text-neutral-400 dark:text-neutral-500 text-xs font-medium max-w-2xl mx-auto">
            * Alle genoemde tarieven zijn exclusief 21% BTW. Facturatie vindt maandelijks vooraf plaats voor pakketten. Maatwerk op basis van specifieke SLA-eisen is op aanvraag mogelijk.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;