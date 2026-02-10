import React, { useState } from 'react';
import { Database, Mail, FileBarChart, Keyboard, ArrowUpRight } from 'lucide-react';
import LegalModal from './LegalModal';

const Services: React.FC = () => {
  const [selectedServiceIndex, setSelectedServiceIndex] = useState<number | null>(null);

  const services = [
    {
      title: "Data Entry & Mutaties",
      short: "Nauwkeurig bijwerken van CRM-systemen en Excel-overzichten. Zo blijft uw data altijd actueel en betrouwbaar.",
      long: (
        <div className="space-y-6 text-lg leading-loose text-neutral-600 dark:text-neutral-300">
          <p className="font-medium text-neutral-900 dark:text-white text-xl">
            Correcte data is essentieel voor goede communicatie en heldere rapportages.
          </p>
          <ul className="list-disc pl-6 space-y-3 marker:text-brand-500">
            <li>Invoeren van nieuwe gegevens</li>
            <li>Verwerken van wijzigingen (mutaties)</li>
            <li>Opschonen van bestaande data</li>
            <li>Structureren van bestanden</li>
          </ul>
        </div>
      ),
      icon: <Database className="w-6 h-6 text-brand-600 dark:text-brand-400" />,
      tag: "Specialiteit"
    },
    {
      title: "Rapportages",
      short: "Heldere overzichten in Excel of PDF. Ik zet ruwe data om in inzichten, zodat u ziet wat belangrijk is.",
      long: (
        <div className="space-y-6 text-lg leading-loose text-neutral-600 dark:text-neutral-300">
          <p className="font-medium text-neutral-900 dark:text-white text-xl">
            Ik help bij het verzamelen en analyseren van data en vertaal deze naar overzichtelijke rapporten.
          </p>
          <ul className="list-disc pl-6 space-y-3 marker:text-brand-500">
            <li>Verwerken van ruwe data</li>
            <li>Maken van tabellen en overzichten</li>
            <li>Visualiseren van gegevens</li>
          </ul>
        </div>
      ),
      icon: <FileBarChart className="w-6 h-6 text-brand-600 dark:text-brand-400" />,
    },
    {
      title: "Secretariële Support",
      short: "Ondersteuning die zorgt voor structuur en continuïteit. Ik neem administratieve taken uit handen.",
      long: (
        <div className="space-y-6 text-lg leading-loose text-neutral-600 dark:text-neutral-300">
          <p className="font-medium text-neutral-900 dark:text-white text-xl">
            Ik neem secretariële taken uit handen, zodat u tijd houdt voor uw kernactiviteiten.
          </p>
          <ul className="list-disc pl-6 space-y-3 marker:text-brand-500">
            <li>Uitschrijven van notulen</li>
            <li>Opmaak van offertes</li>
            <li>Beheer van contracten</li>
          </ul>
        </div>
      ),
      icon: <Keyboard className="w-6 h-6 text-brand-600 dark:text-brand-400" />,
      tag: "Flexibel"
    },
    {
      title: "Agenda & E-mail",
      short: "Professioneel beheer voor meer rust en overzicht. Ik filter uw inbox en plan uw afspraken in.",
      long: (
        <div className="space-y-6 text-lg leading-loose text-neutral-600 dark:text-neutral-300">
          <p className="font-medium text-neutral-900 dark:text-white text-xl">
            Agenda- en e-mailbeheer draait om structuur, overzicht en tijdsbesparing.
          </p>
          <ul className="list-disc pl-6 space-y-3 marker:text-brand-500">
            <li>Prioriteren van e-mails</li>
            <li>Signaleren van urgente zaken</li>
            <li>Beheren van complexe agenda's</li>
          </ul>
        </div>
      ),
      icon: <Mail className="w-6 h-6 text-brand-600 dark:text-brand-400" />,
    }
  ];

  const selectedService = selectedServiceIndex !== null ? services[selectedServiceIndex] : null;

  return (
    <section id="services" className="py-20 lg:py-24 bg-neutral-50 dark:bg-black/40 backdrop-blur-md border-t border-neutral-200 dark:border-white/5 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-neutral-900 dark:text-white mb-4 transition-colors">
            Wat kan Ella voor u betekenen?
          </h2>
          <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400">
            Van data-entry tot volledig secretarieel beheer: ik ontzorg u op afstand.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
             <div 
               key={index} 
               className="group bg-white dark:bg-white/5 backdrop-blur-xl rounded-3xl p-6 lg:p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-neutral-200 dark:border-white/10 flex flex-col min-h-[300px] lg:min-h-[340px]"
             >
               <div className="flex justify-between items-start mb-6">
                  <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-2xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform shadow-inner">
                     {service.icon}
                  </div>
                  {service.tag && (
                    <span className="px-3 py-1 bg-brand-50 dark:bg-brand-500/10 text-brand-600 dark:text-brand-400 border border-brand-100 dark:border-brand-500/20 text-[10px] font-bold uppercase tracking-wider rounded-full">
                      {service.tag}
                    </span>
                  )}
               </div>
               
               <h3 className="text-xl font-heading font-bold text-neutral-900 dark:text-white mb-3 group-hover:text-brand-600 transition-colors">
                 {service.title}
               </h3>
               
               <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed mb-6 flex-grow">
                 {service.short}
               </p>
               
               <button 
                 onClick={() => setSelectedServiceIndex(index)}
                 className="flex items-center text-brand-600 dark:text-brand-400 font-bold text-sm hover:translate-x-1 transition-all py-2 mt-auto"
               >
                 Lees meer <ArrowUpRight className="ml-1 w-4 h-4" />
               </button>
             </div>
          ))}
        </div>
      </div>

      <LegalModal
        isOpen={selectedServiceIndex !== null}
        onClose={() => setSelectedServiceIndex(null)}
        title={selectedService?.title || ''}
        content={selectedService ? (
          <div>
            <div className="flex items-center gap-4 mb-6 pb-6 border-b border-neutral-100 dark:border-white/5">
                <div className="w-14 h-14 rounded-2xl bg-brand-50 dark:bg-brand-500/10 flex items-center justify-center text-brand-600">
                    {selectedService.icon}
                </div>
                <h4 className="text-lg font-bold text-neutral-900 dark:text-white">Dienst omschrijving</h4>
            </div>
            {selectedService.long}
          </div>
        ) : null}
      />
    </section>
  );
};

export default Services;