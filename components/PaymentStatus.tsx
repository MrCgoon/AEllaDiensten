import React, { useEffect, useState } from 'react';
import { CheckCircle2, XCircle, X } from 'lucide-react';

const PaymentStatus: React.FC = () => {
  const [status, setStatus] = useState<'success' | 'canceled' | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check URL parameters for Stripe return values
    const query = new URLSearchParams(window.location.search);

    if (query.get('payment') === 'success') {
      setStatus('success');
      setIsVisible(true);
      // Clean up URL without refresh
      window.history.replaceState({}, '', window.location.pathname);
    }

    if (query.get('payment') === 'canceled') {
      setStatus('canceled');
      setIsVisible(true);
      window.history.replaceState({}, '', window.location.pathname);
    }
  }, []);

  if (!isVisible || !status) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-neutral-900/60 dark:bg-black/80 backdrop-blur-sm animate-in fade-in duration-300"
        onClick={() => setIsVisible(false)}
      ></div>

      {/* Modal */}
      <div className="relative bg-white dark:bg-neutral-900 rounded-3xl p-8 max-w-md w-full shadow-2xl ring-1 ring-neutral-200 dark:ring-white/10 animate-in zoom-in-95 duration-300 text-center overflow-hidden">
        
        {/* Close button */}
        <button 
          onClick={() => setIsVisible(false)}
          className="absolute top-4 right-4 text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-200 transition-colors"
        >
          <X size={20} />
        </button>

        {status === 'success' ? (
          <>
            {/* Confetti / Success Visual */}
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-green-400 via-green-500 to-green-400"></div>
            <div className="w-20 h-20 bg-green-100 dark:bg-green-500/20 rounded-full flex items-center justify-center text-green-600 dark:text-green-400 mx-auto mb-6 shadow-[0_0_20px_rgba(34,197,94,0.3)]">
              <CheckCircle2 size={40} />
            </div>
            
            <h3 className="text-2xl font-heading font-bold text-neutral-900 dark:text-white mb-2">
              Betaling geslaagd!
            </h3>
            <p className="text-neutral-600 dark:text-neutral-300 mb-6">
              Bedankt voor uw vertrouwen in Ellas Diensten. Ik heb de bevestiging ontvangen en neem binnen 24 uur contact met u op voor de start.
            </p>
            
            <button
              onClick={() => setIsVisible(false)}
              className="w-full py-3 bg-brand-600 text-white font-bold rounded-xl hover:bg-brand-500 transition-colors shadow-lg shadow-brand-500/20"
            >
              Terug naar de website
            </button>
          </>
        ) : (
          <>
             <div className="w-20 h-20 bg-red-100 dark:bg-red-500/20 rounded-full flex items-center justify-center text-red-600 dark:text-red-400 mx-auto mb-6">
              <XCircle size={40} />
            </div>
            
            <h3 className="text-2xl font-heading font-bold text-neutral-900 dark:text-white mb-2">
              Betaling geannuleerd
            </h3>
            <p className="text-neutral-600 dark:text-neutral-300 mb-6">
              De betaling is niet afgerond. Heeft u vragen over het pakket of lukt er iets niet? Neem gerust contact op.
            </p>
            
            <div className="flex gap-3">
              <button
                onClick={() => setIsVisible(false)}
                className="flex-1 py-3 bg-neutral-100 dark:bg-white/10 text-neutral-700 dark:text-white font-bold rounded-xl hover:bg-neutral-200 dark:hover:bg-white/20 transition-colors"
              >
                Sluiten
              </button>
              <a
                href="#contact"
                onClick={() => setIsVisible(false)}
                className="flex-1 py-3 bg-brand-600 text-white font-bold rounded-xl hover:bg-brand-500 transition-colors flex items-center justify-center"
              >
                Contact opnemen
              </a>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default PaymentStatus;