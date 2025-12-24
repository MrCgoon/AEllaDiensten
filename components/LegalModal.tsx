import React, { useEffect } from 'react';
import { X } from 'lucide-react';

interface LegalModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  content: React.ReactNode;
}

const LegalModal: React.FC<LegalModalProps> = ({ isOpen, onClose, title, content }) => {
  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6" aria-modal="true" role="dialog">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-neutral-900/60 dark:bg-black/80 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      ></div>

      {/* Modal Content */}
      <div className="relative w-full max-w-3xl max-h-[90vh] flex flex-col bg-white dark:bg-neutral-900 rounded-2xl shadow-2xl ring-1 ring-neutral-200 dark:ring-white/10 animate-in fade-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="flex items-center justify-between p-5 md:p-6 border-b border-neutral-100 dark:border-white/5 bg-white/50 dark:bg-white/5 backdrop-blur-xl rounded-t-2xl z-10 shrink-0">
          <h3 className="text-lg md:text-xl font-heading font-bold text-neutral-900 dark:text-white line-clamp-1">
            {title}
          </h3>
          <button
            onClick={onClose}
            className="p-2 -mr-2 md:mr-0 rounded-full hover:bg-neutral-100 dark:hover:bg-white/10 text-neutral-500 dark:text-neutral-400 transition-colors"
            aria-label="Sluiten"
          >
            <X size={20} />
          </button>
        </div>

        {/* Scrollable Body */}
        <div className="overflow-y-auto p-5 md:p-8 space-y-4 text-neutral-600 dark:text-neutral-300 leading-relaxed text-sm md:text-base selection:bg-brand-500/30">
          {content}
        </div>

        {/* Footer */}
        <div className="p-5 md:p-6 border-t border-neutral-100 dark:border-white/5 bg-neutral-50/50 dark:bg-white/5 rounded-b-2xl flex justify-end shrink-0">
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-6 py-2.5 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 font-medium rounded-xl hover:opacity-90 transition-opacity"
          >
            Sluiten
          </button>
        </div>

      </div>
    </div>
  );
};

export default LegalModal;