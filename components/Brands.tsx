import React from 'react';

const BRAND_LOGOS = [
  'https://www.dropbox.com/scl/fi/sb0fxdnn8910p04623fdm/black-54.png?rlkey=yphhcu6dr8zhnwt411dq2y7bk&st=0z90xqqo&raw=1',
  'https://www.dropbox.com/scl/fi/ghrest1s4mvcteswgb11r/black-55.png?rlkey=c6ie3lp7o5hd6f5438vko2vm6&st=n7diwmaq&raw=1',
  'https://www.dropbox.com/scl/fi/ew1nrgxqd94t2v4cqla27/black-56.png?rlkey=b5ltx3sa77qyi6omzx5ayjtyf&st=97soo77e&raw=1',
  'https://www.dropbox.com/scl/fi/jivt7u87gmf1qqmqj4x45/black-57.png?rlkey=47d9zzqu4qzu15xwfcyxieaku&st=lhd099ar&raw=1',
  'https://www.dropbox.com/scl/fi/xz9eqryrjdfez49hphj90/black-58.png?rlkey=leznan1c81t8g4j5baik3z0g9&st=trj8qd01&raw=1'
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