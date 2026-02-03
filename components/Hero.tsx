import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover brightness-75"
        >
          <source src="https://www.dropbox.com/scl/fi/m4mjmgs6pnq2y2ttkc0ns/for-voidcraft-website.mp4?rlkey=h9vijgb92lynyu1aneznt5udd&st=mhwf1kr3&raw=1" type="video/mp4" />
        </video>
        {/* Enhanced black overlay for better text contrast */}
        <div className="absolute inset-0 bg-black/40 z-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/90 z-10" />
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-6 text-center">
        <div className="reveal opacity-0 translate-y-10 transition-all duration-1000 delay-300">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extralight tracking-tight mb-8 text-white leading-tight">
            Crafting the <span className="font-bold italic">Future</span> <br />
            <span className="bg-gradient-to-r from-blue-300 via-white to-emerald-300 bg-clip-text text-transparent uppercase tracking-[0.2em]">of CGI & 3D</span>
          </h1>
          <p className="text-sm md:text-base text-zinc-300 max-w-lg mx-auto mb-12 font-medium tracking-[0.3em] uppercase opacity-70">
            Hyper-realistic product animation & cinematic visuals.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a 
              href="#contact" 
              className="px-10 py-4 bg-white text-black font-bold rounded-full hover:bg-blue-500 hover:text-white transition-all transform hover:scale-105 tracking-[0.15em] uppercase text-[10px] w-full sm:w-auto shadow-[0_0_30px_rgba(255,255,255,0.1)]"
            >
              Start Your Project
            </a>
            <a 
              href="#projects" 
              className="px-10 py-4 bg-transparent border border-white/20 text-white font-bold rounded-full hover:bg-white/10 hover:border-white/40 transition-all backdrop-blur-md tracking-[0.15em] uppercase text-[10px] w-full sm:w-auto"
            >
              View Work
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 opacity-50">
        <div className="flex flex-col items-center gap-2">
            <span className="text-[9px] uppercase tracking-[0.5em] text-zinc-400 font-bold mb-2">Scroll Down</span>
            <div className="w-[1px] h-10 bg-gradient-to-b from-blue-500 to-transparent"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;