import React, { useState } from 'react';
import LegalModal from './LegalModal';

const Footer: React.FC = () => {
  const [activeDoc, setActiveDoc] = useState<'terms' | 'privacy' | 'cookies' | null>(null);

  const renderContent = () => {
    switch (activeDoc) {
      case 'terms':
        return (
          <div className="space-y-6">
            <div className="p-4 bg-neutral-50 dark:bg-white/5 rounded-lg border border-neutral-200 dark:border-white/10 text-xs font-mono">
              <p><strong>Ella Diensten</strong></p>
              <p>KvK: 89249429</p>
            </div>
            
            <section>
              <h4 className="text-lg font-bold text-neutral-900 dark:text-white mb-2">1. Toepasselijkheid</h4>
              <p>Deze voorwaarden zijn van toepassing op alle offertes, overeenkomsten en werkzaamheden van Ella Diensten. Afwijkingen zijn alleen geldig indien schriftelijk overeengekomen. Algemene voorwaarden van opdrachtgevers worden uitdrukkelijk uitgesloten.</p>
            </section>

            <section>
              <h4 className="text-lg font-bold text-neutral-900 dark:text-white mb-2">2. Diensten</h4>
              <p>Ella Diensten ondersteunt ondernemers met data entry, administratieve mutaties en secretariële werkzaamheden. De werkzaamheden worden zorgvuldig, accuraat en resultaatgericht uitgevoerd, op basis van de door opdrachtgever aangeleverde informatie.</p>
            </section>

            <section>
              <h4 className="text-lg font-bold text-neutral-900 dark:text-white mb-2">3. Offertes en overeenkomst</h4>
              <p>Offertes zijn vrijblijvend, tenzij anders vermeld. Een overeenkomst komt tot stand na schriftelijke of digitale bevestiging, of zodra Ella Diensten met de uitvoering start.</p>
            </section>

            <section>
              <h4 className="text-lg font-bold text-neutral-900 dark:text-white mb-2">4. Uitvoering en termijnen</h4>
              <p>Afgesproken termijnen zijn indicatief en geen fatale termijnen. Vertragingen door onvolledige, onjuiste of te late aanlevering van gegevens door opdrachtgever komen voor rekening van de opdrachtgever.</p>
            </section>

            <section>
              <h4 className="text-lg font-bold text-neutral-900 dark:text-white mb-2">5. Verantwoordelijkheid opdrachtgever</h4>
              <p>De opdrachtgever is verantwoordelijk voor de juistheid en volledigheid van alle aangeleverde informatie. Ella Diensten is niet aansprakelijk voor fouten die hieruit voortvloeien.</p>
            </section>

            <section>
              <h4 className="text-lg font-bold text-neutral-900 dark:text-white mb-2">6. Wijzigingen en meerwerk</h4>
              <p>Wijzigingen in de opdracht kunnen gevolgen hebben voor planning en kosten. Meerwerk wordt uitgevoerd na overleg en apart in rekening gebracht tegen het afgesproken tarief.</p>
            </section>

            <section>
              <h4 className="text-lg font-bold text-neutral-900 dark:text-white mb-2">7. Aansprakelijkheid</h4>
              <p>De aansprakelijkheid van Ella Diensten is beperkt tot het bedrag dat voor de betreffende opdracht in rekening is gebracht. Ella Diensten is niet aansprakelijk voor indirecte schade, gevolgschade of gederfde winst.</p>
            </section>

            <section>
              <h4 className="text-lg font-bold text-neutral-900 dark:text-white mb-2">8. Klachten</h4>
              <p>Klachten over de uitgevoerde werkzaamheden dienen binnen 14 dagen na oplevering schriftelijk te worden gemeld. Na deze termijn wordt de opdracht als correct uitgevoerd beschouwd.</p>
            </section>

            <section>
              <h4 className="text-lg font-bold text-neutral-900 dark:text-white mb-2">9. Betaling</h4>
              <p>Facturen dienen te worden voldaan binnen de vermelde betalingstermijn. Bij niet-tijdige betaling is de opdrachtgever van rechtswege in verzuim en kunnen incassokosten in rekening worden gebracht.</p>
            </section>
          </div>
        );
      case 'privacy':
        return (
          <div className="space-y-6">
            <div className="p-4 bg-neutral-50 dark:bg-white/5 rounded-lg border border-neutral-200 dark:border-white/10 text-xs font-mono mb-6">
              <p><strong>Privacyverklaring (AVG)</strong></p>
            </div>
            
            <section>
              <h4 className="text-lg font-bold text-neutral-900 dark:text-white mb-2">Verwerking van persoonsgegevens</h4>
              <p>Ella Diensten verwerkt uitsluitend persoonsgegevens die noodzakelijk zijn voor de uitvoering van de overeengekomen werkzaamheden, zoals naam, contactgegevens en administratieve gegevens.</p>
            </section>

            <section>
              <h4 className="text-lg font-bold text-neutral-900 dark:text-white mb-2">Doel en grondslag</h4>
              <p className="mb-2">Persoonsgegevens worden gebruikt voor:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>uitvoering van diensten</li>
                <li>communicatie met opdrachtgever</li>
                <li>administratieve en wettelijke verplichtingen</li>
              </ul>
            </section>

            <section>
              <h4 className="text-lg font-bold text-neutral-900 dark:text-white mb-2">Vertrouwelijkheid</h4>
              <p>Alle gegevens worden vertrouwelijk behandeld en niet verstrekt aan derden, tenzij dit wettelijk verplicht is of noodzakelijk voor de uitvoering van de overeenkomst.</p>
            </section>

            <section>
              <h4 className="text-lg font-bold text-neutral-900 dark:text-white mb-2">Bewaartermijn</h4>
              <p>Persoonsgegevens worden niet langer bewaard dan noodzakelijk is voor het doel waarvoor ze zijn verzameld, conform wettelijke bewaartermijnen.</p>
            </section>

            <section>
              <h4 className="text-lg font-bold text-neutral-900 dark:text-white mb-2">Rechten van betrokkenen</h4>
              <p>Opdrachtgevers hebben het recht hun persoonsgegevens in te zien, te laten corrigeren of te laten verwijderen. Verzoeken kunnen schriftelijk worden ingediend bij Ella Diensten.</p>
            </section>
          </div>
        );
      case 'cookies':
        return (
          <div className="space-y-6">
            <p>Ella Diensten maakt op deze website gebruik van cookies. Een cookie is een eenvoudig klein bestandje dat met pagina’s van deze website wordt meegestuurd en door uw browser op uw harde schrijf van uw computer wordt opgeslagen.</p>
            
            <section>
              <h4 className="text-lg font-bold text-neutral-900 dark:text-white mb-2">Functionele cookies</h4>
              <p>Wij gebruiken functionele cookies om de technische werking van de website te garanderen en uw voorkeursinstellingen (zoals dark/light mode) te onthouden. Deze cookies maken geen inbreuk op uw privacy.</p>
            </section>

            <section>
              <h4 className="text-lg font-bold text-neutral-900 dark:text-white mb-2">Analytische cookies</h4>
              <p>Via onze website kunnen cookies worden geplaatst van het Amerikaanse bedrijf Google, als deel van de “Analytics”-dienst. Wij gebruiken deze dienst om bij te houden en rapportages te krijgen over hoe bezoekers de website gebruiken. Wij hebben Google niet toegestaan de verkregen analytics informatie te gebruiken voor andere Google diensten.</p>
            </section>

            <section>
              <h4 className="text-lg font-bold text-neutral-900 dark:text-white mb-2">In- en uitschakelen van cookies</h4>
              <p>Meer informatie omtrent het in- en uitschakelen en het verwijderen van cookies kunt u vinden in de instructies en/of met behulp van de Help-functie van uw browser.</p>
            </section>
          </div>
        );
      default:
        return null;
    }
  };

  const getTitle = () => {
    switch (activeDoc) {
      case 'terms': return 'Algemene Voorwaarden';
      case 'privacy': return 'Privacyverklaring';
      case 'cookies': return 'Cookiebeleid';
      default: return '';
    }
  };

  return (
    <>
      <footer className="bg-neutral-900/90 dark:bg-black/80 backdrop-blur-xl text-neutral-400 dark:text-neutral-500 py-12 border-t border-neutral-800 dark:border-white/10 relative z-10 transition-colors duration-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row justify-between items-center gap-6">
          
          <div className="text-center lg:text-left">
            <span className="text-xl font-heading font-extrabold text-white tracking-tight block">
              Ellas<span className="text-neutral-400 dark:text-neutral-500 font-bold">Diensten</span>
            </span>
             <a href="mailto:contact@ellasdiensten.nl" className="text-sm font-medium text-neutral-500 hover:text-white transition-colors mt-1 inline-block">
                contact@ellasdiensten.nl
             </a>
          </div>

          <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-8 text-sm">
            <div className="flex flex-wrap justify-center gap-6">
              <button 
                onClick={() => setActiveDoc('terms')}
                className="hover:text-white transition-colors cursor-pointer"
              >
                Algemene Voorwaarden
              </button>
              <button 
                onClick={() => setActiveDoc('privacy')}
                className="hover:text-white transition-colors cursor-pointer"
              >
                Privacyverklaring
              </button>
              <button 
                onClick={() => setActiveDoc('cookies')}
                className="hover:text-white transition-colors cursor-pointer"
              >
                Cookiebeleid
              </button>
            </div>

            <div className="hidden lg:block w-px h-4 bg-neutral-700/50"></div>

            <div className="flex flex-col lg:flex-row items-center gap-2 lg:gap-4 text-center lg:text-right text-neutral-500">
               <span>&copy; {new Date().getFullYear()} Ellas Diensten.</span>
               <span className="hidden lg:block text-neutral-700">•</span>
               <span className="opacity-70 hover:opacity-100 transition-opacity">Made & Design by A3 Automation Agency</span>
            </div>
          </div>
        </div>
      </footer>

      <LegalModal 
        isOpen={!!activeDoc} 
        onClose={() => setActiveDoc(null)} 
        title={getTitle()} 
        content={renderContent()} 
      />
    </>
  );
};

export default Footer;