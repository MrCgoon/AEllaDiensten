import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import Logo from './Logo';

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
      const scrollPosition = window.scrollY + 150;

      let currentSection = 'home';
      for (const link of navLinks) {
        const sectionId = link.href.substring(1);
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            currentSection = sectionId;
          }
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isDark = theme === 'dark';
  
  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
      isScrolled 
        ? 'bg-white/90 dark:bg-neutral-900/90 backdrop-blur-md shadow-sm py-2 sm:py-3 border-neutral-200 dark:border-white/10' 
        : 'bg-transparent py-4 sm:py-6 border-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          
          {/* Logo Area */}
          <a href="#home" className="flex items-center gap-2 group shrink-0">
            <div className={`transition-colors duration-300 ${isScrolled || !isDark ? 'text-neutral-900' : 'text-white'}`}>
              <Logo size={36} className="sm:w-[44px] sm:h-[44px]" />
            </div>
            <span className={`text-lg sm:text-2xl font-heading font-bold tracking-tight ${isScrolled || !isDark ? 'text-neutral-900 dark:text-white' : 'text-white'}`}>
              Ellas<span className="text-brand-600">Diensten</span>
            </span>
          </a>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 lg:space-x-8 items-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm uppercase tracking-wide font-medium transition-colors ${
                  activeSection === link.href.substring(1)
                    ? 'text-brand-600'
                    : (isScrolled || !isDark ? 'text-neutral-600 hover:text-brand-600 dark:text-neutral-300' : 'text-white/80 hover:text-white')
                }`}
              >
                {link.name}
              </a>
            ))}
            
            <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/5 transition-colors">
              {isDark ? <Sun size={18} className="text-white" /> : <Moon size={18} className="text-neutral-600" />}
            </button>

            <a href="#contact" className="px-5 py-2 bg-brand-600 text-white rounded-full font-bold text-sm hover:bg-brand-500 transition-all shadow-lg shadow-brand-500/20">
              Offerte
            </a>
          </div>

          {/* Mobile UI */}
          <div className="md:hidden flex items-center gap-2 sm:gap-4">
            <button onClick={toggleTheme} className="p-2 text-neutral-600 dark:text-white/80">
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button onClick={() => setIsOpen(!isOpen)} className="p-2 text-neutral-800 dark:text-white">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white/95 dark:bg-neutral-900/95 backdrop-blur-xl absolute w-full border-t border-neutral-100 dark:border-neutral-800 shadow-2xl">
          <div className="px-4 py-6 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-4 text-base font-bold text-neutral-800 dark:text-white hover:text-brand-600 border-b border-neutral-50 dark:border-neutral-800 last:border-0"
              >
                {link.name}
              </a>
            ))}
            <a href="#contact" onClick={() => setIsOpen(false)} className="block mt-4 w-full py-4 text-center bg-brand-600 text-white rounded-xl font-bold">
              Offerte aanvragen
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;