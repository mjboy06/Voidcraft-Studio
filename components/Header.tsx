import React, { useState, useEffect } from 'react';

const LOGO_URL = 'https://res.cloudinary.com/dzdfz5ron/image/upload/v1770638819/All_Logos_54_kcxvyv.png';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Services', href: '#services' }
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'py-4 glass' : 'py-8 bg-transparent'}`}>
        <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
          {/* Logo and Brand Text - Visible on all screens */}
          <a href="#home" className="flex items-center group relative z-50">
            <img 
              src={LOGO_URL} 
              alt="Voidcraft Studio Logo" 
              className="h-8 md:h-12 w-auto object-contain hover:brightness-125 transition-all"
            />
            <span className="ml-2.5 md:ml-3 text-[13px] sm:text-lg md:text-xl font-bold tracking-[0.1em] sm:tracking-[0.2em] uppercase text-white font-['Outfit'] group-hover:text-blue-400 transition-colors whitespace-nowrap">
              Voidcraft Studio
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-10">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-xs font-medium text-zinc-400 hover:text-white transition-colors relative group tracking-widest uppercase"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-blue-500 transition-all duration-300 group-hover:w-full group-hover:shadow-[0_0_8px_#3b82f6]"></span>
              </a>
            ))}
            <a 
              href="#contact" 
              className="px-6 py-2.5 bg-blue-600 text-white text-[10px] font-bold rounded-full hover:bg-blue-500 transition-all transform hover:scale-105 tracking-[0.15em] uppercase shadow-lg shadow-blue-500/20"
            >
              Contact Us
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMenu}
            className="md:hidden relative z-50 text-white p-2 focus:outline-none"
            aria-label="Toggle Menu"
          >
            <div className="w-6 h-5 flex flex-col justify-between overflow-hidden">
              <span className={`w-full h-[2px] bg-white transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`w-full h-[2px] bg-white transition-all duration-300 ${isMenuOpen ? 'opacity-0 translate-x-10' : ''}`}></span>
              <span className={`w-full h-[2px] bg-white transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </div>
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-40 bg-black transition-all duration-500 ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <div className="flex flex-col items-center justify-center h-full space-y-8 p-6">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setIsMenuOpen(false)}
              className="text-2xl font-bold text-white tracking-widest uppercase hover:text-blue-500 transition-colors"
            >
              {item.label}
            </a>
          ))}
          <a 
            href="#contact" 
            onClick={() => setIsMenuOpen(false)}
            className="px-12 py-5 bg-blue-600 text-white text-sm font-bold rounded-full hover:bg-blue-500 transition-all transform active:scale-95 tracking-[0.2em] uppercase shadow-xl shadow-blue-500/20"
          >
            Contact Us
          </a>
        </div>
      </div>
    </>
  );
};

export default Header;