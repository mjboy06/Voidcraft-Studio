
import React, { useState, useEffect } from 'react';

const LOGO_URL = 'https://res.cloudinary.com/djwiyyxkm/image/upload/v1767568303/All_Logos_54_n8zldo.png';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

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
    { label: 'Services', href: '#services' },
    { label: 'Contact', href: '#contact' }
  ];

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'py-4 glass' : 'py-8 bg-transparent'}`}>
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo and Brand Text */}
        <a href="#home" className="flex items-center group">
          <img 
            src={LOGO_URL} 
            alt="Voidcraft Studio Logo" 
            className="h-10 md:h-12 w-auto object-contain hover:brightness-125 transition-all"
          />
          <span className="ml-3 text-lg md:text-xl font-bold tracking-[0.2em] uppercase text-white font-['Outfit'] hidden sm:block group-hover:text-blue-400 transition-colors">
            Voidcraft Studio
          </span>
        </a>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-10">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-zinc-400 hover:text-white transition-colors relative group tracking-widest uppercase"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-blue-500 transition-all duration-300 group-hover:w-full group-hover:shadow-[0_0_8px_#3b82f6]"></span>
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button (simplified) */}
        <div className="md:hidden">
          <button className="text-white p-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
