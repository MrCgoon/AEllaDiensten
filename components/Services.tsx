import React, { useState } from 'react';
import { Database, Mail, FileBarChart, Keyboard, ArrowUpRight } from 'lucide-react';
import LegalModal from './LegalModal';

const Services: React.FC = () => {
  const [selectedServiceIndex, setSelectedServiceIndex] = useState<number | null>(null);

  const services = [
    {
      title: "Data Entry & Mutaties",
      short: "Nauwkeurig bijwerken van CRM-systemen, Excel-overzichten en klantgegevens. Zo blijft uw data altijd actueel, compleet en betrouwbaar.",
      long: (
        <>
          <p className="mb-4 font-semibold text-neutral-900 dark:text-white text-lg">Data Entry & Mutaties omvat het zorgvuldig invoeren, bijwerken en beheren van digitale gegevens. Dit kan gaan om klantinformatie, productgegevens, adressenbestanden, contractgegevens of andere administratieve data.</p>
          <p className="mb-2 font-medium text-neutral-800 dark:text-neutral-200">Ik ondersteun organisaties bij onder andere:</p>
          <ul className="list-disc pl-5 space-y-2 mb-6 marker:text-brand-500">
            <li>Het invoeren van nieuwe gegevens</li>
            <li>Het verwerken van wijzigingen (mutaties)</li>
            <li>Het corrigeren en opschonen van bestaande data</li>
            <li>Het structureren van Excel- en CRM-bestanden</li>
          </ul>
          <p>Door nauwkeurig te werken en veel aandacht te hebben voor detail, voorkom ik fouten en zorg ik voor betrouwbare informatie. Correcte data is essentieel voor goede communicatie, heldere rapportages en gefundeerde besluitvorming.</p>
        </>
      ),
      icon: <Database className="w-6 h-6 text-brand-600 dark:text-brand-400" />,
      tag: "Specialiteit"
    },
    {
      title: "Rapportages",
      short: "Heldere overzichten in Excel of PDF. Ik zet ruwe data om in duidelijke inzichten, zodat u in één oogopslag ziet wat belangrijk is.",
      long: (
        <>
          <p className="mb-4 font-semibold text-neutral-900 dark:text-white text-lg">Rapportages geven inzicht in prestaties, trends en resultaten. Ik help bij het verzamelen, structureren en analyseren van data en vertaal deze naar overzichtelijke rapporten in Excel of PDF.</p>
          <p className="mb-2 font-medium text-neutral-800 dark:text-neutral-200">Mijn ondersteuning bestaat onder andere uit:</p>
          <ul className="list-disc pl-5 space-y-2 mb-6 marker:text-brand-500">
            <li>Het verwerken en opschonen van ruwe data</li>
            <li>Het maken van duidelijke tabellen en overzichten</li>
            <li>Het visualiseren van gegevens (grafieken, diagrammen) waar dat toegevoegde waarde heeft</li>
            <li>Het aanpassen van rapportages aan uw specifieke wensen en doelen</li>
          </ul>
          <p>Door data begrijpelijk te presenteren, ontstaat er overzicht en grip. U hoeft niet te zoeken in cijfers, maar ziet in één oogopslag wat belangrijk is om op te sturen.</p>
        </>
      ),
      icon: <FileBarChart className="w-6 h-6 text-brand-600 dark:text-brand-400" />,
    },
    {
      title: "Secretariële Support",
      short: "Secretariële ondersteuning die zorgt voor structuur, continuïteit en professionaliteit binnen uw organisatie. Ik neem administratieve en secretariële taken uit handen, zodat u zich kunt richten op uw kernactiviteiten.",
      long: (
        <>
          <p className="mb-4 font-semibold text-neutral-900 dark:text-white text-lg">Secretariële support omvat alle ondersteunende werkzaamheden die zorgen voor structuur, continuïteit en professionaliteit binnen uw organisatie. Ik neem administratieve en secretariële taken uit handen, zodat u tijd en ruimte houdt voor uw kernactiviteiten.</p>
          <p className="mb-2 font-medium text-neutral-800 dark:text-neutral-200">Mijn werkzaamheden kunnen onder andere bestaan uit:</p>
          <ul className="list-disc pl-5 space-y-2 mb-6 marker:text-brand-500">
            <li>Het uitwerken en opmaken van offertes</li>
            <li>Het voorbereiden en beheren van contractdocumenten</li>
            <li>Het uitwerken van voice-overs, notulen en vergaderverslagen</li>
            <li>Diverse ondersteunende secretariaats- en kantoortaken</li>
          </ul>
          <p>Door nauwkeurig en gestructureerd te werken, zorg ik voor duidelijke documentatie en een professionele uitstraling naar uw klanten en relaties.</p>
        </>
      ),
      icon: <Keyboard className="w-6 h-6 text-brand-600 dark:text-brand-400" />,
      tag: "Flexibel"
    },
    {
      title: "Agenda & E-mail",
      short: "Professioneel agenda- en e-mailbeheer voor meer rust en overzicht. Ik filter wat binnenkomt, plan afspraken en zorg dat u alleen ziet wat écht belangrijk is.",
      long: (
        <>
          <p className="mb-4 font-semibold text-neutral-900 dark:text-white text-lg">Agenda- en e-mailbeheer draait om structuur, overzicht en tijdsbesparing. Ik help bij het beheren van complexe agenda’s, het plannen en verzetten van afspraken en het bewaken van belangrijke deadlines.</p>
          <p className="mb-2 font-medium text-neutral-800 dark:text-neutral-200">Daarnaast zorg ik voor een overzichtelijke inbox door:</p>
          <ul className="list-disc pl-5 space-y-2 mb-6 marker:text-brand-500">
            <li>Het filteren en prioriteren van e-mails</li>
            <li>Het aanbrengen van structuur (mappen, labels, regels)</li>
            <li>Het signaleren van urgente berichten</li>
            <li>Het verminderen van onnodige e-maildruk</li>
          </ul>
          <p>Met professioneel agenda- en e-mailbeheer houdt u grip op uw werkdag, mist u geen belangrijke afspraken en kunt u zich volledig richten op uw kerntaken.</p>
        </>
      ),
      icon: <Mail className="w-6 h-6 text-brand-600 dark:text-brand-400" />,
    }
  ];

  const selectedService = selectedServiceIndex !== null ? services[selectedServiceIndex] : null;

  return (
    <section id="services" className="py-24 bg-neutral-50 dark:bg-black/40 backdrop-blur-md border-t border-neutral-200 dark:border-white/5 relative transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-neutral-900 dark:text-white mb-4 drop-shadow-sm dark:drop-shadow-lg transition-colors">
            Waarmee kan Ella u helpen?
          </h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-300 transition-colors">
            Jij je business, Ella de mutaties en administratie. Ik ontzorg u volledig met diverse diensten op afstand.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-start">
          {services.map((service, index) => (
             <div 
               key={index} 
               className="group bg-white dark:bg-white/5 backdrop-blur-xl rounded-3xl p-6 sm:p-8 shadow-md dark:shadow-lg dark:shadow-black/20 hover:shadow-xl dark:hover:shadow-brand-900/20 transition-all duration-300 border border-neutral-200 dark:border-white/10 hover:border-brand-300 dark:hover:border-brand-500/50 relative overflow-hidden flex flex-col h-full"
             >
               {/* Hover Gradient Background */}
               <div className="absolute inset-0 bg-gradient-to-br from-brand-50 to-transparent dark:from-brand-500/10 dark:to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
               
               <div className="relative z-10 flex flex-col h-full">
                 <div className="flex justify-between items-start mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-neutral-100 dark:bg-neutral-900/60 border border-neutral-200 dark:border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-inner ring-1 ring-white/5 flex-shrink-0">
                       {service.icon}
                    </div>
                    {service.tag && (
                      <span className="px-3 py-1 bg-brand-100 dark:bg-brand-500/20 text-brand-600 dark:text-brand-300 border border-brand-200 dark:border-brand-500/30 text-[10px] font-bold uppercase tracking-wider rounded-full shadow-sm dark:shadow-[0_0_10px_rgba(244,63,94,0.2)]">
                        {service.tag}
                      </span>
                    )}
                 </div>
                 
                 <h3 className="text-xl font-heading font-bold text-neutral-900 dark:text-white mb-3 group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
                   {service.title}
                 </h3>
                 
                 <div className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed mb-6 flex-grow">
                   <p className="group-hover:text-neutral-800 dark:group-hover:text-neutral-300 transition-colors">
                     {service.short}
                   </p>
                 </div>
                 
                 <button 
                   onClick={() => setSelectedServiceIndex(index)}
                   className="flex items-center text-brand-600 dark:text-brand-400 font-semibold text-sm hover:text-brand-500 dark:hover:text-brand-300 transition-colors focus:outline-none mt-auto py-2 group/btn"
                 >
                   Meer info <ArrowUpRight className="ml-1 w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                 </button>
               </div>
             </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <a href="#contact" className="inline-block px-8 py-3 rounded-full border border-neutral-300 dark:border-white/20 text-neutral-700 dark:text-white font-semibold hover:bg-neutral-100 dark:hover:bg-white/10 hover:text-brand-600 dark:hover:text-white transition-all hover:scale-105 backdrop-blur-sm shadow-sm dark:shadow-lg">
            Bekijk alle mogelijkheden
          </a>
        </div>
      </div>

      {/* Detail Modal */}
      <LegalModal
        isOpen={selectedServiceIndex !== null}
        onClose={() => setSelectedServiceIndex(null)}
        title={selectedService?.title || ''}
        content={selectedService ? (
          <div>
            <div className="flex items-center gap-4 mb-8 pb-6 border-b border-neutral-100 dark:border-white/5">
                <div className="w-16 h-16 rounded-2xl bg-brand-50 dark:bg-brand-500/10 flex items-center justify-center text-brand-600 dark:text-brand-400 shadow-sm border border-brand-100 dark:border-brand-500/20">
                    {React.cloneElement(selectedService.icon as React.ReactElement, { className: "w-8 h-8" })}
                </div>
                <div>
                    <h4 className="text-lg font-bold text-neutral-900 dark:text-white">Service details</h4>
                    <p className="text-sm text-neutral-500 dark:text-neutral-400">{selectedService.tag ? selectedService.tag : "Professionele ondersteuning"}</p>
                </div>
            </div>
            {selectedService.long}
          </div>
        ) : null}
      />

    </section>
  );
};

export default Services;