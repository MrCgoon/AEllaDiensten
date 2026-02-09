import React, { useState } from 'react';
import { Mail, Phone, Clock, Send, MapPin, CheckCircle2, Loader2, ArrowRight } from 'lucide-react';

const Contact: React.FC = () => {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    
    const formData = new FormData(e.target as HTMLFormElement);
    
    // Add configuration for FormSubmit
    formData.append("_subject", `Nieuwe aanvraag via website: ${formData.get('name')}`);
    formData.append("_template", "table");
    formData.append("_captcha", "false");

    try {
      const response = await fetch("https://formsubmit.co/ajax/contact@ellasdiensten.nl", {
        method: "POST",
        body: formData,
        headers: { 
            'Accept': 'application/json'
        }
      });
      
      if (response.ok) {
        setFormStatus('success');
      } else {
        console.error("Form submission failed");
        setFormStatus('error');
      }
    } catch (error) {
       console.error("Form submission error", error);
       setFormStatus('error');
    }
  };

  return (
    <section id="contact" className="py-24 bg-white dark:bg-black/20 backdrop-blur-sm border-t border-neutral-200 dark:border-white/5 relative transition-colors duration-500 overflow-hidden">
      
      {/* Ambient Background Glows */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-brand-500/5 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-500/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Contact Info */}
          <div className="lg:col-span-5 order-2 lg:order-1 flex flex-col justify-center h-full">
            <div className="mb-8">
              <span className="inline-block py-1 px-3 rounded-full bg-brand-100 dark:bg-brand-500/10 text-brand-600 dark:text-brand-400 text-xs font-bold uppercase tracking-widest mb-4 border border-brand-200 dark:border-brand-500/20">
                Contact
              </span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-neutral-900 dark:text-white mb-6 drop-shadow-sm dark:drop-shadow-md transition-colors">
                Laten we kennismaken
              </h2>
              <p className="text-lg text-neutral-600 dark:text-neutral-300 transition-colors leading-relaxed">
                Klaar voor meer structuur en rust in uw onderneming? Stuur uw vraag of plan direct een vrijblijvend gesprek.
              </p>
            </div>

            <div className="space-y-6">
              {/* Email Card */}
              <a href="mailto:contact@ellasdiensten.nl" className="flex items-start p-4 rounded-2xl bg-neutral-50 dark:bg-white/5 border border-neutral-200 dark:border-white/10 hover:bg-white dark:hover:bg-white/10 hover:border-brand-300 dark:hover:border-brand-500/50 transition-all duration-300 group">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-xl bg-white dark:bg-neutral-900/80 border border-neutral-100 dark:border-white/10 flex items-center justify-center text-brand-600 dark:text-brand-500 group-hover:scale-110 transition-transform shadow-sm">
                    <Mail size={22} />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-sm font-bold text-neutral-900 dark:text-white uppercase tracking-wide mb-1">E-mail</h3>
                  <p className="text-base text-neutral-600 dark:text-neutral-400 group-hover:text-brand-600 dark:group-hover:text-brand-300 transition-colors">contact@ellasdiensten.nl</p>
                </div>
              </a>

              {/* Phone Card */}
              <a href="tel:+31403098094" className="flex items-start p-4 rounded-2xl bg-neutral-50 dark:bg-white/5 border border-neutral-200 dark:border-white/10 hover:bg-white dark:hover:bg-white/10 hover:border-brand-300 dark:hover:border-brand-500/50 transition-all duration-300 group">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-xl bg-white dark:bg-neutral-900/80 border border-neutral-100 dark:border-white/10 flex items-center justify-center text-brand-600 dark:text-brand-500 group-hover:scale-110 transition-transform shadow-sm">
                    <Phone size={22} />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-sm font-bold text-neutral-900 dark:text-white uppercase tracking-wide mb-1">Telefoon / WhatsApp</h3>
                  <p className="text-base text-neutral-600 dark:text-neutral-400 group-hover:text-brand-600 dark:group-hover:text-brand-300 transition-colors">040-309 8094</p>
                </div>
              </a>

              {/* Location Card */}
              <div className="flex items-start p-4 rounded-2xl bg-neutral-50 dark:bg-white/5 border border-neutral-200 dark:border-white/10 transition-all duration-300 group">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-xl bg-white dark:bg-neutral-900/80 border border-neutral-100 dark:border-white/10 flex items-center justify-center text-brand-600 dark:text-brand-500 shadow-sm">
                    <MapPin size={22} />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-sm font-bold text-neutral-900 dark:text-white uppercase tracking-wide mb-1">Locatie</h3>
                  <p className="text-base text-neutral-600 dark:text-neutral-400">Eindhoven & Omgeving<br/><span className="text-xs opacity-75">(Remote beschikbaar in heel NL)</span></p>
                </div>
              </div>

               {/* Hours Card */}
               <div className="flex items-start p-4 rounded-2xl bg-neutral-50 dark:bg-white/5 border border-neutral-200 dark:border-white/10 transition-all duration-300 group">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-xl bg-white dark:bg-neutral-900/80 border border-neutral-100 dark:border-white/10 flex items-center justify-center text-brand-600 dark:text-brand-500 shadow-sm">
                    <Clock size={22} />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-sm font-bold text-neutral-900 dark:text-white uppercase tracking-wide mb-1">Werktijden</h3>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400">Ma - Do: 09:00 – 17:00</p>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400">Vr: 09:00 – 12:00</p>
                </div>
              </div>
            </div>

            <div className="mt-8 pl-4 flex items-center gap-4 text-xs font-medium text-neutral-400 dark:text-neutral-500 uppercase tracking-wider">
               <span>KvK: 89249429</span>
               <span className="w-1 h-1 rounded-full bg-brand-500"></span>
               <span>NL</span>
            </div>
          </div>

          {/* Right Column: Premium Form */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <div className="relative bg-white dark:bg-neutral-900/60 backdrop-blur-xl rounded-3xl p-8 md:p-10 shadow-2xl shadow-neutral-200/50 dark:shadow-black/50 border border-neutral-200 dark:border-white/10 overflow-hidden">
              
              {/* Dynamic Glow Behind Form */}
              <div className="absolute -top-[20%] -right-[20%] w-[60%] h-[60%] bg-brand-500/10 rounded-full blur-[80px] pointer-events-none animate-pulse-slow"></div>

              {formStatus === 'success' ? (
                <div className="h-[500px] flex flex-col items-center justify-center text-center animate-in fade-in zoom-in duration-500">
                  <div className="w-20 h-20 bg-green-100 dark:bg-green-500/20 rounded-full flex items-center justify-center text-green-600 dark:text-green-400 mb-6 shadow-[0_0_20px_rgba(34,197,94,0.3)]">
                    <CheckCircle2 size={40} />
                  </div>
                  <h3 className="text-2xl font-heading font-bold text-neutral-900 dark:text-white mb-2">Bedankt!</h3>
                  <p className="text-neutral-600 dark:text-neutral-300 max-w-sm mx-auto mb-8">
                    Uw bericht is succesvol verzonden. Ik neem binnen 1-2 werkdagen contact met u op.
                  </p>
                  <button 
                    onClick={() => setFormStatus('idle')}
                    className="px-6 py-2 rounded-full border border-neutral-200 dark:border-white/20 text-neutral-600 dark:text-neutral-400 text-sm font-medium hover:bg-neutral-50 dark:hover:bg-white/10 transition-colors"
                  >
                    Nog een bericht sturen
                  </button>
                </div>
              ) : formStatus === 'error' ? (
                <div className="h-[500px] flex flex-col items-center justify-center text-center animate-in fade-in zoom-in duration-500">
                  <div className="w-20 h-20 bg-red-100 dark:bg-red-500/20 rounded-full flex items-center justify-center text-red-600 dark:text-red-400 mb-6">
                    <CheckCircle2 size={40} className="rotate-45" />
                  </div>
                  <h3 className="text-2xl font-heading font-bold text-neutral-900 dark:text-white mb-2">Er ging iets mis</h3>
                  <p className="text-neutral-600 dark:text-neutral-300 max-w-sm mx-auto mb-8">
                    Het versturen is niet gelukt. Probeer het later opnieuw of stuur direct een mail naar contact@ellasdiensten.nl.
                  </p>
                  <button 
                    onClick={() => setFormStatus('idle')}
                    className="px-6 py-2 rounded-full border border-neutral-200 dark:border-white/20 text-neutral-600 dark:text-neutral-400 text-sm font-medium hover:bg-neutral-50 dark:hover:bg-white/10 transition-colors"
                  >
                    Opnieuw proberen
                  </button>
                </div>
              ) : (
                <>
                  <div className="relative z-10 mb-8">
                    <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-2">Stuur een bericht</h3>
                    <p className="text-neutral-500 dark:text-neutral-400 text-sm">Velden met een * zijn verplicht.</p>
                  </div>
                  
                  <form className="space-y-6 relative z-10" onSubmit={handleSubmit}>
                    {/* Hidden input for honeypot spam protection if supported, but FormSubmit handles this. 
                        We keep structure simple. */}
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-xs font-bold text-neutral-500 dark:text-neutral-400 uppercase tracking-wider ml-1">Naam *</label>
                        <input required type="text" id="name" name="name" className="w-full px-4 py-3 bg-neutral-50 dark:bg-black/20 rounded-xl border border-neutral-200 dark:border-white/10 focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 outline-none transition-all text-neutral-900 dark:text-white placeholder-neutral-400 dark:placeholder-neutral-600" placeholder="Uw naam" />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="company" className="text-xs font-bold text-neutral-500 dark:text-neutral-400 uppercase tracking-wider ml-1">Bedrijf</label>
                        <input type="text" id="company" name="company" className="w-full px-4 py-3 bg-neutral-50 dark:bg-black/20 rounded-xl border border-neutral-200 dark:border-white/10 focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 outline-none transition-all text-neutral-900 dark:text-white placeholder-neutral-400 dark:placeholder-neutral-600" placeholder="Bedrijfsnaam (optioneel)" />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-xs font-bold text-neutral-500 dark:text-neutral-400 uppercase tracking-wider ml-1">E-mail *</label>
                        <input required type="email" id="email" name="email" className="w-full px-4 py-3 bg-neutral-50 dark:bg-black/20 rounded-xl border border-neutral-200 dark:border-white/10 focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 outline-none transition-all text-neutral-900 dark:text-white placeholder-neutral-400 dark:placeholder-neutral-600" placeholder="uw@email.nl" />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="phone" className="text-xs font-bold text-neutral-500 dark:text-neutral-400 uppercase tracking-wider ml-1">Telefoon</label>
                        <input type="tel" id="phone" name="phone" className="w-full px-4 py-3 bg-neutral-50 dark:bg-black/20 rounded-xl border border-neutral-200 dark:border-white/10 focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 outline-none transition-all text-neutral-900 dark:text-white placeholder-neutral-400 dark:placeholder-neutral-600" placeholder="06 12345678" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="service" className="text-xs font-bold text-neutral-500 dark:text-neutral-400 uppercase tracking-wider ml-1">Dienst</label>
                      <div className="relative">
                        <select id="service" name="service" className="w-full px-4 py-3 bg-neutral-50 dark:bg-black/20 rounded-xl border border-neutral-200 dark:border-white/10 focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 outline-none transition-all text-neutral-900 dark:text-white cursor-pointer appearance-none">
                          <option className="bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white">Data Entry & Mutaties</option>
                          <option className="bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white">Agendabeheer</option>
                          <option className="bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white">Rapportages</option>
                          <option className="bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white">Secretariële Ondersteuning</option>
                          <option className="bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white">Anders</option>
                        </select>
                        <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-neutral-500">
                           <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" fillRule="evenodd"></path></svg>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="message" className="text-xs font-bold text-neutral-500 dark:text-neutral-400 uppercase tracking-wider ml-1">Uw bericht</label>
                      <textarea id="message" name="message" rows={4} className="w-full px-4 py-3 bg-neutral-50 dark:bg-black/20 rounded-xl border border-neutral-200 dark:border-white/10 focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 outline-none transition-all text-neutral-900 dark:text-white placeholder-neutral-400 dark:placeholder-neutral-600 resize-none" placeholder="Waarmee kan ik u helpen?"></textarea>
                    </div>

                    <button 
                      type="submit" 
                      disabled={formStatus === 'submitting'}
                      className="group w-full py-4 px-6 rounded-xl shadow-lg shadow-brand-500/20 text-base font-bold text-white bg-brand-600 hover:bg-brand-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-500 disabled:opacity-70 disabled:cursor-not-allowed transition-all transform hover:-translate-y-1 active:scale-[0.98] flex items-center justify-center relative overflow-hidden"
                    >
                      <span className="relative z-10 flex items-center gap-2">
                        {formStatus === 'submitting' ? (
                          <>
                            <Loader2 size={20} className="animate-spin" />
                            Verzenden...
                          </>
                        ) : (
                          <>
                            Verstuur aanvraag 
                            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                          </>
                        )}
                      </span>
                      {/* Shine effect on hover */}
                      <div className="absolute top-0 -left-[100%] w-[100%] h-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:left-[100%] transition-all duration-700 ease-in-out"></div>
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;