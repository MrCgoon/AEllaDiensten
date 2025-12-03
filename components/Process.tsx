import React from 'react';
import { Send, ClipboardCheck, Play, Smile } from 'lucide-react';

const Process: React.FC = () => {
  const steps = [
    {
      icon: <Send className="w-6 h-6" />,
      title: "1. U stuurt uw vraag",
      desc: "Via mail of telefoon geeft u de opdracht door."
    },
    {
      icon: <ClipboardCheck className="w-6 h-6" />,
      title: "2. Inschatting",
      desc: "Ella maakt een planning en bevestigt de afspraken."
    },
    {
      icon: <Play className="w-6 h-6" />,
      title: "3. Aan de slag",
      desc: "Ik ga aan het werk en houd u op de hoogte."
    },
    {
      icon: <Smile className="w-6 h-6" />,
      title: "4. Resultaat",
      desc: "U ontvangt alles netjes, accuraat en op tijd."
    }
  ];

  return (
    <section id="process" className="py-24 bg-black/20 backdrop-blur-sm border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div>
            <div className="inline-block px-3 py-1 bg-white/5 backdrop-blur-md rounded-full border border-white/10 text-xs font-semibold text-neutral-300 mb-6 uppercase tracking-wider">
              Werkwijze
            </div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6 drop-shadow-md">
              Zo werkt het <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-brand-600">samenwerken</span>
            </h2>
            <p className="text-lg text-neutral-300 mb-8 leading-relaxed">
              Ik ben een teamplayer op afstand. Ik verlies het doel en de deadline nooit uit het oog. 
              U weet dat uw klus in goede handen is, zodat u zich op uw core business kunt focussen.
            </p>
            <a href="#contact" className="text-brand-400 font-bold hover:text-brand-300 transition-colors flex items-center group">
              Start vandaag nog een samenwerking 
              <span className="inline-block ml-2 transition-transform group-hover:translate-x-1">&rarr;</span>
            </a>
          </div>

          <div className="relative space-y-6">
            {/* Connecting Line Effect */}
            <div className="absolute left-6 top-8 bottom-8 w-0.5 bg-gradient-to-b from-brand-500/50 via-neutral-700/50 to-transparent hidden sm:block"></div>

            {steps.map((step, idx) => (
              <div key={idx} className="relative flex items-start bg-white/5 backdrop-blur-md p-6 rounded-2xl transition-all hover:bg-white/10 border border-white/5 hover:border-white/20 group hover:-translate-x-[-4px] duration-300 shadow-lg">
                <div className="relative z-10 flex-shrink-0 w-12 h-12 bg-neutral-900/80 rounded-xl shadow-lg border border-white/10 flex items-center justify-center text-brand-500 mr-5 group-hover:scale-110 transition-transform duration-300 group-hover:border-brand-500/30">
                  {step.icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-1 group-hover:text-brand-200 transition-colors">{step.title}</h3>
                  <p className="text-neutral-400 text-sm">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Process;