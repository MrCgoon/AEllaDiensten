import React from 'react';
import { User, Target, Heart } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden bg-black/20 backdrop-blur-sm border-t border-white/5">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Visual Column */}
          <div className="lg:col-span-5 relative order-2 lg:order-1">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-black/50 border border-white/10 aspect-[4/5] group">
              <img 
                src="https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=1000&auto=format&fit=crop" 
                alt="Ella - Modern Professional" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <div className="px-3 py-1 bg-brand-600/90 backdrop-blur-md text-xs font-bold uppercase tracking-widest inline-block rounded-md mb-2 shadow-lg">
                  Ella
                </div>
                <p className="text-xl font-heading font-bold drop-shadow-md">Uw remote secretaresse</p>
              </div>
            </div>
            {/* Decoration */}
            <div className="absolute -z-10 -bottom-5 -right-5 w-full h-full border border-white/5 rounded-3xl"></div>
          </div>

          {/* Content Column */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-white mb-8 drop-shadow-lg">
              Wie is Ella?
            </h2>
            
            <div className="prose prose-lg text-neutral-300 mb-10 leading-relaxed font-light">
              <p className="mb-6">
                Aangenaam! Ik ben Ella. Met jarenlange ervaring in administratieve en secretariële functies, weet ik als geen ander hoe belangrijk een strakke organisatie is voor een groeiend bedrijf. 
              </p>
              <p className="mb-6">
                Ik ben iemand die rust vindt in structuur, overzicht en het halen van deadlines. Hoewel ik als virtual assistant op afstand werk, voel ik me snel onderdeel van uw team. 
              </p>
              <p>
                U kunt rekenen op een echte aanpakker. Accuraat, direct in de communicatie en met een gezonde dosis Brabantse nuchterheid. Ik zorg dat het geregeld wordt.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
               <div className="p-6 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 hover:border-brand-500/50 hover:bg-white/10 transition-all group shadow-lg hover:shadow-brand-900/10">
                  <User className="w-8 h-8 text-brand-500 mb-4 group-hover:scale-110 transition-transform drop-shadow-[0_0_8px_rgba(244,63,94,0.5)]" />
                  <h4 className="font-bold text-white mb-1">Ervaren</h4>
                  <p className="text-sm text-neutral-400 group-hover:text-neutral-300 transition-colors">Jarenlange expertise.</p>
               </div>
               <div className="p-6 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 hover:border-brand-500/50 hover:bg-white/10 transition-all group shadow-lg hover:shadow-brand-900/10">
                  <Target className="w-8 h-8 text-brand-500 mb-4 group-hover:scale-110 transition-transform drop-shadow-[0_0_8px_rgba(244,63,94,0.5)]" />
                  <h4 className="font-bold text-white mb-1">Accuraat</h4>
                  <p className="text-sm text-neutral-400 group-hover:text-neutral-300 transition-colors">Oog voor detail.</p>
               </div>
               <div className="p-6 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 hover:border-brand-500/50 hover:bg-white/10 transition-all group shadow-lg hover:shadow-brand-900/10">
                  <Heart className="w-8 h-8 text-brand-500 mb-4 group-hover:scale-110 transition-transform drop-shadow-[0_0_8px_rgba(244,63,94,0.5)]" />
                  <h4 className="font-bold text-white mb-1">Betrokken</h4>
                  <p className="text-sm text-neutral-400 group-hover:text-neutral-300 transition-colors">Uw business first.</p>
               </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;