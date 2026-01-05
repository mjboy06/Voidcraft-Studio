
import React from 'react';

const BRAND_LOGOS = [
  'https://res.cloudinary.com/djwiyyxkm/image/upload/v1767650141/Untitled_design_-_2026-01-06T032451.392_lxn2lg.png',
  'https://res.cloudinary.com/djwiyyxkm/image/upload/v1767650143/black_58_einl8i.png',
  'https://res.cloudinary.com/djwiyyxkm/image/upload/v1767650143/black_57_ejywec.png',
  'https://res.cloudinary.com/djwiyyxkm/image/upload/v1767650143/black_56_lxehzo.png',
  'https://res.cloudinary.com/djwiyyxkm/image/upload/v1767650143/black_55_labjix.png',
  'https://res.cloudinary.com/djwiyyxkm/image/upload/v1767650144/black_54_dmmn6p.png'
];

const Brands: React.FC = () => {
  return (
    <section className="py-24 bg-black overflow-hidden">
      <div className="container mx-auto px-6 mb-16">
        <div className="text-center reveal opacity-0 translate-y-10 transition-all duration-700">
          <p className="text-zinc-500 text-sm tracking-widest uppercase mb-4">Leading industry partners</p>
          <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-tight">Brands That Trust Us</h2>
        </div>
      </div>

      {/* Marquee Container */}
      <div className="relative flex overflow-x-hidden group">
        <div className="flex animate-marquee whitespace-nowrap py-12 items-center">
          {[...BRAND_LOGOS, ...BRAND_LOGOS].map((logo, idx) => (
            <div 
              key={idx} 
              className="mx-12 flex-shrink-0"
            >
              <img 
                src={logo} 
                alt={`Partner Brand ${idx + 1}`} 
                className="h-24 md:h-32 w-auto object-contain transition-transform duration-500 hover:scale-110"
              />
            </div>
          ))}
        </div>

        {/* CSS for marquee animation */}
        <style dangerouslySetInnerHTML={{ __html: `
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee {
            animation: marquee 15s linear infinite;
          }
          .group:hover .animate-marquee {
            animation-play-state: paused;
          }
        `}} />
      </div>
    </section>
  );
};

export default Brands;
