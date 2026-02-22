import React from 'react';
import { User, Target, Heart } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden bg-white dark:bg-black/20 backdrop-blur-sm border-t border-neutral-100 dark:border-white/5 transition-colors duration-500">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Visual Column */}
          <div className="lg:col-span-5 relative order-2 lg:order-1 sticky top-32">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-neutral-200/50 dark:shadow-black/50 border border-white/20 dark:border-white/10 aspect-[4/5] group">
              <img 
                src="https://images.unsplash.com/photo-1573164713988-8665fc963095?q=65&w=800&auto=format&fit=crop"
                srcSet="https://images.unsplash.com/photo-1573164713988-8665fc963095?q=65&w=400&auto=format&fit=crop 400w,
                        https://images.unsplash.com/photo-1573164713988-8665fc963095?q=65&w=800&auto=format&fit=crop 800w,
                        https://images.unsplash.com/photo-1573164713988-8665fc963095?q=65&w=1200&auto=format&fit=crop 1200w"
                sizes="(min-width: 1024px) 450px, (min-width: 768px) 50vw, 100vw"
                alt="Ella - Virtual Assistant en Data Specialist" 
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-100 dark:opacity-90 dark:hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <div className="px-3 py-1 bg-brand-600/90 backdrop-blur-md text-xs font-bold uppercase tracking-widest inline-block rounded-md mb-2 shadow-lg">
                  Ella
                </div>
                <p className="text-xl font-heading font-bold drop-shadow-md">Uw remote secretaresse</p>
              </div>
            </div>
            {/* Decoration */}
            <div className="absolute -z-10 -bottom-5 -right-5 w-full h-full border border-neutral-200 dark:border-white/5 rounded-3xl"></div>
          </div>

          {/* Content Column */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-neutral-900 dark:text-white mb-8 drop-shadow-sm dark:drop-shadow-lg transition-colors">
              Over mij
            </h2>
            
            <div className="prose prose-lg text-neutral-600 dark:text-neutral-300 mb-10 leading-relaxed font-light transition-colors">
              <p className="mb-6">
                Aangenaam, ik ben Ella. Met jarenlange ervaring in administratieve en secretariële functies, weet ik als geen ander hoe belangrijk een strakke organisatie is voor een groeiend bedrijf. 
              </p>
              <p className="mb-6">
                Ik ben iemand die rust vindt in structuur, overzicht en het halen van deadlines. Hoewel ik als virtual assistant op afstand werk, voel ik me snel onderdeel van uw team. 
              </p>
              <p className="mb-8">
                U kunt rekenen op een echte aanpakker. Accuraat, direct in de communicatie en met een gezonde dosis Brabantse nuchterheid. Ik zorg dat het geregeld wordt.
              </p>

              <div className="bg-neutral-50 dark:bg-white/5 p-8 rounded-2xl border border-neutral-200 dark:border-white/10">
                <h3 className="text-xl font-heading font-bold text-neutral-900 dark:text-white mb-4">Voor wie?</h3>
                <p className="mb-4 text-base">
                  Mijn dienstverlening is geschikt voor organisaties die behoefte hebben aan betrouwbare, flexibele ondersteuning op administratief en secretarieel vlak, zoals:
                </p>
                <ul className="list-none space-y-2 mb-4 text-base">
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-brand-500"></div> MKB en grotere organisaties</li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-brand-500"></div> Zorginstellingen</li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-brand-500"></div> Onderwijsorganisaties</li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-brand-500"></div> Overheid en semi-overheid</li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-brand-500"></div> Zakelijke dienstverleners</li>
                </ul>
                <p className="text-base font-medium text-neutral-800 dark:text-neutral-200">
                  Of het nu gaat om tijdelijke ondersteuning tijdens drukke periodes of om structurele uitbesteding van taken: samen kijken we wat het beste past bij uw organisatie.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
               <div className="p-6 bg-neutral-50 dark:bg-white/5 backdrop-blur-md rounded-2xl border border-neutral-200 dark:border-white/10 hover:border-brand-500/50 hover:bg-white dark:hover:bg-white/10 transition-all group shadow-sm hover:shadow-md dark:hover:shadow-brand-900/10">
                  <User className="w-8 h-8 text-brand-600 dark:text-brand-500 mb-4 group-hover:scale-110 transition-transform dark:drop-shadow-[0_0_8px_rgba(244,63,94,0.5)]" />
                  <h4 className="font-bold text-neutral-900 dark:text-white mb-1">Ervaren</h4>
                  <p className="text-sm text-neutral-500 dark:text-neutral-400 group-hover:text-neutral-700 dark:group-hover:text-neutral-300 transition-colors">Jarenlange expertise.</p>
               </div>
               <div className="p-6 bg-neutral-50 dark:bg-white/5 backdrop-blur-md rounded-2xl border border-neutral-200 dark:border-white/10 hover:border-brand-500/50 hover:bg-white dark:hover:bg-white/10 transition-all group shadow-sm hover:shadow-md dark:hover:shadow-brand-900/10">
                  <Target className="w-8 h-8 text-brand-600 dark:text-brand-500 mb-4 group-hover:scale-110 transition-transform dark:drop-shadow-[0_0_8px_rgba(244,63,94,0.5)]" />
                  <h4 className="font-bold text-neutral-900 dark:text-white mb-1">Accuraat</h4>
                  <p className="text-sm text-neutral-500 dark:text-neutral-400 group-hover:text-neutral-700 dark:group-hover:text-neutral-300 transition-colors">Oog voor detail.</p>
               </div>
               <div className="p-6 bg-neutral-50 dark:bg-white/5 backdrop-blur-md rounded-2xl border border-neutral-200 dark:border-white/10 hover:border-brand-500/50 hover:bg-white dark:hover:bg-white/10 transition-all group shadow-sm hover:shadow-md dark:hover:shadow-brand-900/10">
                  <Heart className="w-8 h-8 text-brand-600 dark:text-brand-500 mb-4 group-hover:scale-110 transition-transform dark:drop-shadow-[0_0_8px_rgba(244,63,94,0.5)]" />
                  <h4 className="font-bold text-neutral-900 dark:text-white mb-1">Betrokken</h4>
                  <p className="text-sm text-neutral-500 dark:text-neutral-400 group-hover:text-neutral-700 dark:group-hover:text-neutral-300 transition-colors">Uw business first.</p>
               </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;