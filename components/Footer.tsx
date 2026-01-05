
import React from 'react';

const LOGO_URL = 'https://res.cloudinary.com/djwiyyxkm/image/upload/v1767568303/All_Logos_54_n8zldo.png';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const EXPERTISE = [
    '3D Product Animation',
    'CGI & VFX videos',
    'Cinematic CGI Videos',
    '3D Rendering',
    '3D Modeling',
    'Environment & Scene Creation',
    'Architectural Visualization',
    'Custom Request'
  ];

  return (
    <footer className="bg-black py-24 border-t border-white/5 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/5 blur-[80px] rounded-full pointer-events-none"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          {/* Brand Column */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <img src={LOGO_URL} alt="Voidcraft Studio" className="h-10 opacity-100" />
              <span className="text-lg font-bold tracking-wider uppercase font-['Outfit']">Voidcraft</span>
            </div>
            <p className="text-zinc-500 text-sm leading-relaxed max-w-xs">
              Crafting cinematic realities through high-end CGI and 3D visualization. We bring imagination to the digital frontier.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/profile.php?id=61583890517533" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center rounded-lg bg-white/5 hover:bg-blue-600/20 text-zinc-400 hover:text-white transition-all border border-white/10">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
              <a href="https://www.instagram.com/voidcraftstudiosofficial/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center rounded-lg bg-white/5 hover:bg-blue-600/20 text-zinc-400 hover:text-white transition-all border border-white/10">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a href="https://www.linkedin.com/company/void-craft-studio/posts/?feedView=all" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center rounded-lg bg-white/5 hover:bg-blue-600/20 text-zinc-400 hover:text-white transition-all border border-white/10">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
            </div>
          </div>

          {/* Navigation Column */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-[0.2em] text-xs mb-8">Studio</h4>
            <ul className="space-y-4">
              <li><a href="#home" className="text-zinc-500 hover:text-blue-400 text-sm transition-colors tracking-wider">Home</a></li>
              <li><a href="#about" className="text-zinc-500 hover:text-blue-400 text-sm transition-colors tracking-wider">Our Story</a></li>
              <li><a href="#projects" className="text-zinc-500 hover:text-blue-400 text-sm transition-colors tracking-wider">Portfolio</a></li>
              <li><a href="#services" className="text-zinc-500 hover:text-blue-400 text-sm transition-colors tracking-wider">Services</a></li>
              <li><a href="#contact" className="text-zinc-500 hover:text-blue-400 text-sm transition-colors tracking-wider">Connect</a></li>
            </ul>
          </div>

          {/* Services Column (Expertise) */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-[0.2em] text-xs mb-8">Expertise</h4>
            <ul className="space-y-4">
              {EXPERTISE.map((item, idx) => (
                <li key={idx} className="text-zinc-500 text-sm tracking-wider hover:text-blue-400 transition-colors cursor-default">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-[0.2em] text-xs mb-8">Inquiries</h4>
            <div className="space-y-4">
              <p className="text-zinc-500 text-sm leading-relaxed tracking-wider break-all">
                VOIDCRAFTSTUDIOOFFICIAL@GMAIL.COM
              </p>
              <p className="text-zinc-500 text-sm tracking-wider">
                +91 7023087402
              </p>
              <p className="text-zinc-500 text-sm tracking-wider">
                Global Operations <br />
                Available 24/7 for Projects
              </p>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-zinc-600 text-[10px] tracking-[0.3em] uppercase font-bold">
            &copy; {currentYear} VOIDCRAFT STUDIO. ALL RIGHTS RESERVED.
          </p>
          <div className="flex space-x-8 text-[10px] tracking-[0.2em] font-bold text-zinc-600 uppercase">
            <a href="#" className="hover:text-zinc-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-zinc-400 transition-colors">Cookies</a>
            <a href="#" className="hover:text-zinc-400 transition-colors">GDRP</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
