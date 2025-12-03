import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Wie is Ella', href: '#about' },
    { name: 'Diensten', href: '#services' },
    { name: 'Werkwijze', href: '#process' },
    { name: 'Tarieven', href: '#pricing' },
    { name: 'Contact', href: '#contact' },
  ];

  // Dynamic colors based on scroll state (Dark Hero support)
  const textColor = isScrolled ? 'text-neutral-600' : 'text-neutral-300';
  const hoverColor = isScrolled ? 'hover:text-brand-600' : 'hover:text-white';
  const logoText = isScrolled ? 'text-neutral-900' : 'text-white';
  const logoAccent = 'text-brand-600'; // Brand color stays consistent or could be lighter on dark
  
  const buttonStyles = isScrolled 
    ? 'bg-neutral-900 text-white hover:bg-brand-600 shadow-brand-500/20' 
    : 'bg-white text-neutral-900 hover:bg-neutral-100 shadow-white/10';

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 border-b border-transparent ${isScrolled ? 'glass shadow-sm py-3 border-neutral-100' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0 flex items-center group cursor-pointer">
            <a href="#home" className={`text-2xl font-heading font-bold tracking-tight group-hover:opacity-80 transition-opacity ${logoText}`}>
              Ellas<span className={logoAccent}>Diensten</span>
            </a>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`${textColor} ${hoverColor} font-medium text-sm uppercase tracking-wide transition-colors relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-brand-600 after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left`}
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#contact" 
              className={`ml-4 px-5 py-2.5 rounded-full font-medium text-sm transition-all shadow-lg ${buttonStyles}`}
            >
              Offerte aanvragen
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`${isScrolled ? 'text-neutral-800' : 'text-white'} hover:text-brand-600 focus:outline-none p-2 transition-colors`}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-2xl absolute w-full left-0 top-full border-t border-neutral-100 animate-in slide-in-from-top-5 duration-300">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-4 text-base font-medium text-neutral-800 hover:text-brand-600 hover:bg-neutral-50 rounded-lg transition-colors border-b border-neutral-50 last:border-0"
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="block mt-4 px-3 py-4 text-center text-base font-bold text-white bg-brand-600 rounded-lg shadow-md"
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