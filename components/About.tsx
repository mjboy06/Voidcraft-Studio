
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 md:py-40 bg-black relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/10 blur-[120px] rounded-full z-0 pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <div className="max-w-4xl mx-auto">
          <span className="text-blue-500 text-xs tracking-[0.3em] uppercase font-bold mb-6 block reveal opacity-0 translate-y-10 transition-all duration-700">
            About Voidcraft
          </span>
          <h2 className="text-3xl md:text-5xl font-medium text-zinc-400 leading-snug reveal opacity-0 translate-y-10 transition-all duration-700 delay-100">
            At Voidcraft Studio, we create <span className="text-white font-bold">stunning digital experiences</span> that redefine reality.
          </h2>
          <p className="mt-8 text-2xl md:text-4xl font-medium text-zinc-400 reveal opacity-0 translate-y-10 transition-all duration-700 delay-200">
            We empower brands through world-class <span className="text-white font-bold">3D Animation, CGI & Visual Storytelling.</span>
          </p>
          <div className="mt-12 w-20 h-1 bg-gradient-to-r from-blue-500 to-transparent mx-auto reveal opacity-0 translate-y-10 transition-all duration-700 delay-300"></div>
          <p className="mt-8 text-xl text-zinc-500 font-light reveal opacity-0 translate-y-10 transition-all duration-700 delay-400 tracking-wider">
            Where imagination meets precision.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
