
import React, { useState, useEffect } from 'react';
import { 
  Menu,
  X
} from 'lucide-react';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { About } from './components/About';
import { Methodology } from './components/Methodology';
import { FieldIntelligence } from './components/FieldIntelligence';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Approach', href: '#approach' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-2' : 'bg-transparent py-5'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <img 
              src="/images/logo-full.png" 
              alt="Geospatial Zuri" 
              className="h-10 md:h-14 w-auto object-contain"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                if (e.currentTarget.parentElement) {
                  e.currentTarget.parentElement.innerHTML = '<span class="font-serif text-2xl font-bold">Geospatial Zuri</span>';
                }
              }}
            />
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className={`text-sm font-medium transition-colors ${scrolled ? 'text-charcoal hover:text-sage' : 'text-charcoal hover:text-sage'}`}
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#contact" 
              className="bg-charcoal text-white px-5 py-2 rounded-sm text-sm font-medium hover:bg-sage transition-all"
            >
              Consultation
            </a>
          </div>

          {/* Mobile Toggle */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white border-t border-gray-100 py-6 px-6 flex flex-col gap-4 shadow-xl">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-lg font-medium" 
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#contact" 
              className="bg-sage text-white px-5 py-3 rounded-sm text-center font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Request a Consultation
            </a>
          </div>
        )}
      </nav>

      <main>
        <Hero />
        <Services />
        <FieldIntelligence />
        <Methodology />
        <About />
        <Contact />
      </main>

      <Footer />
    </div>
  );
};

export default App;
