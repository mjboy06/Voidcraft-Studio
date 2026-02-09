import React from 'react';

const BRAND_LOGOS = [
  'https://res.cloudinary.com/dzdfz5ron/image/upload/v1770638829/black_54_tbkw55.png',
  'https://res.cloudinary.com/dzdfz5ron/image/upload/v1770638827/Untitled_design_-_2026-01-06T032451.392_qtmjiz.png',
  'https://res.cloudinary.com/dzdfz5ron/image/upload/v1770638826/black_58_snzoqh.png',
  'https://res.cloudinary.com/dzdfz5ron/image/upload/v1770638824/black_57_badrln.png',
  'https://res.cloudinary.com/dzdfz5ron/image/upload/v1770638822/black_56_i1h8fs.png',
  'https://res.cloudinary.com/dzdfz5ron/image/upload/v1770638820/black_55_qvrm93.png'
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
                className="h-20 md:h-24 w-auto object-contain transition-transform duration-500 hover:scale-110 brightness-75 hover:brightness-100"
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
            animation: marquee 20s linear infinite;
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