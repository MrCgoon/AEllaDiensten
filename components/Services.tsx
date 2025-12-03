import React from 'react';
import { Database, Mail, FileBarChart, Keyboard, ArrowUpRight } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      title: "Data Entry & Mutaties",
      description: "Nauwkeurig bijwerken van CRM-systemen, Excel-lijsten en klantgegevens. Uw data altijd up-to-date.",
      icon: <Database className="w-6 h-6 text-brand-400" />,
      tag: "Specialiteit"
    },
    {
      title: "Agenda & E-mail",
      description: "Complex agendabeheer en het filteren van uw inbox. U ziet alleen wat écht belangrijk is.",
      icon: <Mail className="w-6 h-6 text-brand-400" />,
    },
    {
      title: "Rapportages",
      description: "Heldere overzichten maken in Excel of PDF. Ik zet ruwe data om in bruikbare inzichten.",
      icon: <FileBarChart className="w-6 h-6 text-brand-400" />,
    },
    {
      title: "Secretariële Support",
      description: "Offertes uittypen, contracten voorbereiden of vergaderingen notuleren. Allround ondersteuning.",
      icon: <Keyboard className="w-6 h-6 text-brand-400" />,
      tag: "Flexibel"
    }
  ];

  return (
    <section id="services" className="py-24 bg-black/40 backdrop-blur-md border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4 drop-shadow-lg">
            Waarmee kan Ella u helpen?
          </h2>
          <p className="text-lg text-neutral-300">
            Jij je business, Ella de mutaties en administratie. Ik ontzorg u volledig met diverse diensten op afstand.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group bg-white/5 backdrop-blur-xl rounded-3xl p-8 shadow-lg shadow-black/20 hover:shadow-brand-900/20 transition-all duration-300 border border-white/10 hover:border-brand-500/50 hover:-translate-y-2 relative overflow-hidden"
            >
              {/* Hover Gradient Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-6">
                   <div className="w-14 h-14 rounded-2xl bg-neutral-900/60 border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-inner ring-1 ring-white/5">
                      {service.icon}
                   </div>
                   {service.tag && (
                     <span className="px-3 py-1 bg-brand-500/20 text-brand-300 border border-brand-500/30 text-[10px] font-bold uppercase tracking-wider rounded-full shadow-[0_0_10px_rgba(244,63,94,0.2)]">
                       {service.tag}
                     </span>
                   )}
                </div>
                
                <h3 className="text-xl font-heading font-bold text-white mb-3 group-hover:text-brand-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-neutral-400 text-sm leading-relaxed mb-6 group-hover:text-neutral-300 transition-colors">
                  {service.description}
                </p>
                
                <div className="flex items-center text-brand-400 font-semibold text-sm group-hover:translate-x-2 transition-transform cursor-pointer">
                  Meer info <ArrowUpRight className="ml-1 w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <a href="#contact" className="inline-block px-8 py-3 rounded-full border border-white/20 text-white font-semibold hover:bg-white/10 hover:text-white transition-all hover:scale-105 backdrop-blur-sm shadow-lg">
            Bekijk alle mogelijkheden
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;