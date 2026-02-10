import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';

interface NavbarProps {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Over mij', href: '#about' },
  { name: 'Diensten', href: '#services' },
  { name: 'Werkwijze', href: '#process' },
  { name: 'Tarieven', href: '#pricing' },
  { name: 'Contact', href: '#contact' },
];

const Navbar: React.FC<NavbarProps> = ({ theme, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const scrollOffset = 150;
      const scrollPosition = window.scrollY + scrollOffset;

      let currentSection = '';
      const scrolledToBottom = 
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 50;

      if (scrolledToBottom) {
        currentSection = 'contact';
      } else {
        for (const link of navLinks) {
          const sectionId = link.href.substring(1);
          const element = document.getElementById(sectionId);
          
          if (element) {
            const rect = element.getBoundingClientRect();
            const elementTop = rect.top + window.scrollY;
            const elementBottom = elementTop + rect.height;

            if (scrollPosition >= elementTop && scrollPosition < elementBottom) {
              currentSection = sectionId;
            }
          }
        }
        
        if (window.scrollY < 100 && currentSection !== 'home') {
          currentSection = 'home';
        }
      }

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isDark = theme === 'dark';
  
  const navClasses = `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out border-b ${
    isScrolled 
      ? 'bg-white/90 dark:bg-neutral-900/90 backdrop-blur-md shadow-sm py-3 border-neutral-200 dark:border-white/10' 
      : 'bg-transparent py-6 border-transparent'
  }`;

  const textColor = isScrolled || !isDark
    ? 'text-neutral-700 dark:text-neutral-200' 
    : 'text-white';

  const hoverColor = 'hover:text-brand-600 dark:hover:text-brand-400';
  
  const logoText = isScrolled || !isDark ? 'text-neutral-900 dark:text-white' : 'text-white';
  const logoAccent = 'text-brand-600';

  const buttonStyles = 'bg-brand-600 text-white hover:bg-brand-500 shadow-lg shadow-brand-500/30';

  return (
    <nav className={navClasses}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          
          {/* Logo Container */}
          <div className={`flex-shrink-0 flex items-center group cursor-pointer transition-transform duration-300 ${isScrolled ? 'scale-95' : 'scale-100'}`}>
            <a href="#home" className={`flex items-center gap-3 group-hover:opacity-90 transition-opacity`}>
              <div className={`${logoText}`}>
                {/* Custom 'ED' Power Button Logo - 1:1 Ratio, Text Horizontal */}
                <svg viewBox="0 0 100 100" className="h-10 w-10 sm:h-12 sm:w-12" fill="none" xmlns="http://www.w3.org/2000/svg">
                   {/* Main Outer Ring (Open at top) */}
                   <path d="M62 18 A 36 36 0 1 1 38 18" stroke="currentColor" strokeWidth="7" strokeLinecap="round" />
                   
                   {/* Red Power Line */}
                   <line x1="50" y1="8" x2="50" y2="30" stroke="#e11d48" strokeWidth="8" strokeLinecap="round" />
                   
                   {/* Letters ED Centered - Moved up slightly for balance */}
                   <text x="50" y="56" textAnchor="middle" fill="currentColor" fontSize="30" fontWeight="900" fontFamily="'Montserrat', sans-serif">ED</text>
                   
                   {/* Horizontal Text inside the circle - Increased size for readability */}
                   <text x="50" y="75" textAnchor="middle" fill="currentColor" fontSize="7.5" fontWeight="800" fontFamily="'Montserrat', sans-serif" letterSpacing="0.2">ELLA&apos;S DIENSTEN</text>
                </svg>
              </div>
              <span className={`text-xl sm:text-2xl font-heading font-bold tracking-tight ${logoText}`}>
                Ellas<span className={logoAccent}>Diensten</span>
              </span>
            </a>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`
                    ${isActive ? 'text-brand-600 dark:text-brand-400 font-bold' : `${textColor} font-medium`} 
                    ${!isActive ? hoverColor : ''} 
                    text-sm uppercase tracking-wide transition-all duration-300 relative 
                    after:content-[''] after:absolute after:w-full after:h-0.5 after:bottom-0 after:left-0 
                    after:bg-brand-600 dark:after:bg-brand-400 after:transition-transform after:duration-300 
                    ${isActive ? 'after:scale-x-100 after:origin-bottom-left' : 'after:scale-x-0 after:origin-bottom-right hover:after:scale-x-100 hover:after:origin-bottom-left'}
                  `}
                >
                  {link.name}
                </a>
              );
            })}
            
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full transition-colors ${isScrolled || !isDark ? 'text-neutral-600 hover:bg-neutral-100 dark:text-neutral-300 dark:hover:bg-neutral-800' : 'text-white/80 hover:bg-white/10'}`}
              aria-label="Toggle theme"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            <a 
              href="#contact" 
              className={`ml-4 px-5 rounded-full font-medium text-sm transition-all flex items-center justify-center ${buttonStyles} ${isScrolled ? 'py-2' : 'py-2.5'}`}
            >
              Offerte aanvragen
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
             <button
              onClick={toggleTheme}
              className={`p-2 rounded-full transition-colors ${isScrolled || !isDark ? 'text-neutral-600 hover:bg-neutral-100 dark:text-neutral-300 dark:hover:bg-neutral-800' : 'text-white/80 hover:bg-white/10'}`}
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`${isScrolled || !isDark ? 'text-neutral-800 dark:text-white' : 'text-white'} hover:text-brand-600 focus:outline-none p-2 transition-colors`}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white/95 dark:bg-neutral-900/95 backdrop-blur-xl shadow-2xl absolute w-full left-0 top-full border-t border-neutral-100 dark:border-neutral-800 animate-in slide-in-from-top-5 duration-300">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navLinks.map((link) => {
               const isActive = activeSection === link.href.substring(1);
               return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-4 text-base font-medium rounded-lg transition-colors border-b border-neutral-50 dark:border-neutral-800 last:border-0 ${isActive ? 'text-brand-600 dark:text-brand-400 bg-brand-50 dark:bg-brand-900/20' : 'text-neutral-800 dark:text-neutral-200 hover:text-brand-600 dark:hover:text-brand-400 hover:bg-neutral-50 dark:hover:bg-neutral-800'}`}
                >
                  {link.name}
                </a>
              );
            })}
            <a 
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="block mt-4 px-3 py-4 text-center text-base font-bold text-white bg-brand-600 rounded-lg shadow-md hover:bg-brand-500"
            >
              Offerte aanvragen
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;