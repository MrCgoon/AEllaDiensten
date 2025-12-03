import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-neutral-900/90 dark:bg-black/80 backdrop-blur-xl text-neutral-400 dark:text-neutral-500 py-12 border-t border-neutral-800 dark:border-white/10 relative z-10 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
        
        <div className="mb-6 md:mb-0 text-center md:text-left">
          <span className="text-xl font-heading font-bold text-white tracking-tight">
            Ellas<span className="text-neutral-400 dark:text-neutral-500 font-light">Diensten</span>
          </span>
          <p className="text-sm mt-2">
            &copy; {new Date().getFullYear()} Ellas Diensten. Alle rechten voorbehouden.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6 text-sm">
          <a href="#" className="hover:text-white transition-colors">Algemene Voorwaarden</a>
          <a href="#" className="hover:text-white transition-colors">Privacyverklaring</a>
          <a href="#" className="hover:text-white transition-colors">Cookiebeleid</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;