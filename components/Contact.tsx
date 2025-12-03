import React from 'react';
import { Mail, Phone, Clock, Send } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-white dark:bg-black/20 backdrop-blur-sm border-t border-neutral-200 dark:border-white/5 relative transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Info */}
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-neutral-900 dark:text-white mb-6 drop-shadow-sm dark:drop-shadow-md transition-colors">
              Contact & Bereikbaarheid
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-300 mb-10 transition-colors">
              Klaar voor meer structuur? Stuur uw vraag of plan direct een vrijblijvend gesprek.
            </p>

            <div className="bg-neutral-50 dark:bg-white/5 backdrop-blur-xl p-8 rounded-3xl border border-neutral-200 dark:border-white/10 space-y-8 shadow-lg hover:shadow-xl dark:shadow-xl hover:bg-white dark:hover:bg-white/10 transition-colors duration-500">
              <div className="flex items-start group">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-xl bg-white dark:bg-neutral-900/60 border border-neutral-200 dark:border-white/10 flex items-center justify-center text-brand-600 dark:text-brand-500 group-hover:scale-110 transition-transform shadow-inner ring-1 ring-neutral-100 dark:ring-white/5 group-hover:border-brand-500/30 group-hover:shadow-[0_0_15px_rgba(244,63,94,0.2)]">
                    <Mail size={24} />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-bold text-neutral-900 dark:text-white group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">E-mail</h3>
                  <a href="mailto:contact@ellasdiensten.nl" className="text-neutral-500 dark:text-neutral-400 hover:text-brand-600 dark:hover:text-white transition-colors">
                    contact@ellasdiensten.nl
                  </a>
                </div>
              </div>

              <div className="flex items-start group">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-xl bg-white dark:bg-neutral-900/60 border border-neutral-200 dark:border-white/10 flex items-center justify-center text-brand-600 dark:text-brand-500 group-hover:scale-110 transition-transform shadow-inner ring-1 ring-neutral-100 dark:ring-white/5 group-hover:border-brand-500/30 group-hover:shadow-[0_0_15px_rgba(244,63,94,0.2)]">
                    <Phone size={24} />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-bold text-neutral-900 dark:text-white group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">Telefoon & WhatsApp</h3>
                  <a href="tel:+31403098094" className="text-neutral-500 dark:text-neutral-400 hover:text-brand-600 dark:hover:text-white transition-colors">
                    040-309 8094
                  </a>
                </div>
              </div>

              <div className="flex items-start group">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-xl bg-white dark:bg-neutral-900/60 border border-neutral-200 dark:border-white/10 flex items-center justify-center text-brand-600 dark:text-brand-500 group-hover:scale-110 transition-transform shadow-inner ring-1 ring-neutral-100 dark:ring-white/5 group-hover:border-brand-500/30 group-hover:shadow-[0_0_15px_rgba(244,63,94,0.2)]">
                    <Clock size={24} />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-bold text-neutral-900 dark:text-white group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">Werktijden</h3>
                  <p className="text-neutral-500 dark:text-neutral-400">Ma - Do: 09:00 – 17:00</p>
                  <p className="text-neutral-500 dark:text-neutral-400">Vr: 09:00 – 12:00</p>
                </div>
              </div>
            </div>

            <div className="mt-8 text-sm text-neutral-500 pl-4">
              <p>KvK: 89249429 | Bank: NL32 KNAB 0607 5907 42</p>
            </div>
          </div>

          {/* Detailed Form */}
          <div className="order-1 lg:order-2 bg-neutral-900 dark:bg-neutral-900/60 backdrop-blur-xl rounded-3xl p-8 lg:p-10 shadow-2xl shadow-neutral-900/20 dark:shadow-black/50 border border-neutral-800 dark:border-white/10 relative overflow-hidden group">
            {/* Glow effect */}
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-brand-500/10 rounded-full blur-[80px] pointer-events-none group-hover:bg-brand-500/20 transition-colors duration-1000"></div>
            
            <h3 className="text-2xl font-bold text-white mb-2 relative z-10">Vrijblijvende offerte</h3>
            <p className="text-neutral-400 mb-8 text-sm relative z-10">Vul het formulier in en u ontvangt binnen 1-2 werkdagen een reactie.</p>
            
            <form className="space-y-5 relative z-10" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-xs font-bold text-neutral-400 mb-2 uppercase tracking-wider">Naam</label>
                  <input type="text" id="name" className="w-full px-4 py-3 bg-neutral-800/50 dark:bg-black/40 rounded-xl border border-neutral-700 dark:border-white/10 focus:ring-2 focus:ring-brand-500/50 focus:border-brand-500 outline-none transition-all text-white placeholder-neutral-600 hover:border-neutral-600 dark:hover:border-white/20" placeholder="Uw naam" />
                </div>
                <div>
                  <label htmlFor="company" className="block text-xs font-bold text-neutral-400 mb-2 uppercase tracking-wider">Bedrijfsnaam</label>
                  <input type="text" id="company" className="w-full px-4 py-3 bg-neutral-800/50 dark:bg-black/40 rounded-xl border border-neutral-700 dark:border-white/10 focus:ring-2 focus:ring-brand-500/50 focus:border-brand-500 outline-none transition-all text-white placeholder-neutral-600 hover:border-neutral-600 dark:hover:border-white/20" placeholder="Optioneel" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="email" className="block text-xs font-bold text-neutral-400 mb-2 uppercase tracking-wider">E-mailadres</label>
                  <input type="email" id="email" className="w-full px-4 py-3 bg-neutral-800/50 dark:bg-black/40 rounded-xl border border-neutral-700 dark:border-white/10 focus:ring-2 focus:ring-brand-500/50 focus:border-brand-500 outline-none transition-all text-white placeholder-neutral-600 hover:border-neutral-600 dark:hover:border-white/20" placeholder="uw@email.nl" />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-xs font-bold text-neutral-400 mb-2 uppercase tracking-wider">Telefoonnummer</label>
                  <input type="tel" id="phone" className="w-full px-4 py-3 bg-neutral-800/50 dark:bg-black/40 rounded-xl border border-neutral-700 dark:border-white/10 focus:ring-2 focus:ring-brand-500/50 focus:border-brand-500 outline-none transition-all text-white placeholder-neutral-600 hover:border-neutral-600 dark:hover:border-white/20" placeholder="06 12345678" />
                </div>
              </div>

              <div>
                <label htmlFor="service" className="block text-xs font-bold text-neutral-400 mb-2 uppercase tracking-wider">Waar heeft u hulp bij nodig?</label>
                <div className="relative group/select">
                  <select id="service" className="w-full px-4 py-3 bg-neutral-800/50 dark:bg-black/40 rounded-xl border border-neutral-700 dark:border-white/10 focus:ring-2 focus:ring-brand-500/50 focus:border-brand-500 outline-none transition-all text-white cursor-pointer hover:border-neutral-600 dark:hover:border-white/20 appearance-none">
                    <option className="bg-neutral-900 text-white">Data Entry & Mutaties</option>
                    <option className="bg-neutral-900 text-white">Agendabeheer</option>
                    <option className="bg-neutral-900 text-white">Rapportages</option>
                    <option className="bg-neutral-900 text-white">Allround ondersteuning</option>
                    <option className="bg-neutral-900 text-white">Anders</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-neutral-500 group-hover/select:text-brand-500 transition-colors">
                     <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" fillRule="evenodd"></path></svg>
                  </div>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-bold text-neutral-400 mb-2 uppercase tracking-wider">Opmerkingen of specifieke wensen</label>
                <textarea id="message" rows={4} className="w-full px-4 py-3 bg-neutral-800/50 dark:bg-black/40 rounded-xl border border-neutral-700 dark:border-white/10 focus:ring-2 focus:ring-brand-500/50 focus:border-brand-500 outline-none transition-all text-white placeholder-neutral-600 hover:border-neutral-600 dark:hover:border-white/20" placeholder="Vertel kort wat u nodig heeft..."></textarea>
              </div>

              <button type="submit" className="group w-full py-4 px-6 rounded-xl shadow-xl text-base font-bold text-white bg-brand-600 hover:bg-brand-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-500 transition-all transform hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(244,63,94,0.4)] flex items-center justify-center relative overflow-hidden">
                <span className="relative z-10 flex items-center gap-2">
                  Verstuur uw aanvraag <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;