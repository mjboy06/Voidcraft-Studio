import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-[100dvh] min-h-[600px] w-full overflow-hidden flex items-center justify-center bg-black">
      {/* Background Video Container */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* We use a dynamic calculation for the iframe to act as a background cover across all aspect ratios */}
        <iframe
          src="https://player.cloudinary.com/embed/?cloud_name=dzdfz5ron&public_id=for_voidcraft_website_qgehky&autoplay=true&muted=true&loop=true&controls=false"
          className="absolute top-1/2 left-1/2 w-[250vw] h-[100dvh] min-w-[177.77vh] md:w-[110%] md:h-[110%] -translate-x-1/2 -translate-y-1/2 object-cover brightness-[0.6] border-none"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
        ></iframe>
        
        {/* Cinematic overlays for better text readability */}
        <div className="absolute inset-0 bg-black/40 z-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black z-10" />
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-6 text-center">
        <div className="reveal opacity-0 translate-y-10 transition-all duration-1000 delay-300">
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-extralight tracking-tight mb-8 text-white leading-tight">
            Crafting the <span className="font-bold italic">Future</span> <br />
            <span className="bg-gradient-to-r from-blue-400 via-white to-emerald-400 bg-clip-text text-transparent uppercase tracking-[0.1em] md:tracking-[0.2em]">of CGI & 3D</span>
          </h1>
          <p className="text-[10px] md:text-base text-zinc-300 max-w-lg mx-auto mb-12 font-medium tracking-[0.3em] uppercase opacity-70 px-4">
            Hyper-realistic product animation & cinematic visuals.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 px-4">
            <a 
              href="#contact" 
              className="px-10 py-4 bg-white text-black font-bold rounded-full hover:bg-blue-600 hover:text-white transition-all transform hover:scale-105 tracking-[0.15em] uppercase text-[10px] w-full sm:w-auto shadow-[0_0_30px_rgba(255,255,255,0.1)]"
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
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 opacity-40 hidden sm:block">
        <div className="flex flex-col items-center gap-2">
            <span className="text-[8px] uppercase tracking-[0.6em] text-zinc-400 font-bold mb-1">Scroll</span>
            <div className="w-[1px] h-12 bg-gradient-to-b from-blue-500 to-transparent"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;