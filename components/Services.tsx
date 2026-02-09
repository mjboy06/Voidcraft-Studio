import React from 'react';

const SERVICES = [
  {
    title: '3D Product Animation',
    desc: 'Bringing your physical products to life with detail that matches reality.',
    video: 'https://drive.google.com/uc?id=1sfq4WhzLF-gS_QAafXwc8nyzNzCUrj4s&export=download'
  },
  {
    title: 'CGI & VFX videos',
    desc: 'Integrating digital elements seamlessly with real-world footage.',
    video: 'https://www.dropbox.com/scl/fi/wx3nt4rk43zwgpszf5twl/for-vfx-cgi.mp4?rlkey=my76pivy6ty0f7sgjw1vebuys&st=i8peqoaj&raw=1'
  },
  {
    title: 'Cinematic CGI Videos',
    desc: 'Epic visual storytelling for brand identity and narrative commercials.',
    video: 'https://www.dropbox.com/scl/fi/ylrwn3ytkct2e1dbij3zg/cinemetic-cgi-video.mp4?rlkey=vtmyqh1oryhbdu5y3a5q7weox&st=u6qmwmw5&raw=1'
  },
  {
    title: '3D Rendering',
    desc: 'Precise physically based lighting and high-quality renders.',
    video: 'https://www.dropbox.com/scl/fi/8wfl0jvhbi6a4bcgttajs/for-rendering-1.mp4?rlkey=6trzp8vpj45kxwwpkjsczobu7&st=21kpxqkc&raw=1'
  },
  {
    title: '3D Modeling',
    desc: 'High-fidelity geometric modeling for all digital applications.',
    video: 'https://www.dropbox.com/scl/fi/fv5995rsxhx45akth3egw/for-3d-modeling.mp4?rlkey=xuai1giv4g0ooyuw116k42nmx&st=0ownro8w&raw=1'
  },
  {
    title: 'Environment & Scene Creation',
    desc: 'Building immersive digital worlds from scratch.',
    video: 'https://www.dropbox.com/scl/fi/g2hyofa6ugd77y53z6a0h/Untitled-design-25.mp4?rlkey=lyv6zl1pl0h9xr5ybvh4edxfh&st=oftje8m2&raw=1'
  },
  {
    title: 'Architectural Visualization',
    desc: 'Photorealistic interiors and exteriors for architectural projects.',
    video: 'https://www.dropbox.com/scl/fi/845vq4j2o6dgv2u4xq7b8/From-KlickPin-CF-Pin-by-Cozy-Nest-_-Home-Decor-Desig-on-_-Interior-design-renderings-Interior-design-instagram-Interior-design.mp4?rlkey=pamru3rn7suz964ml4v7vh87r&st=3hdedv46&raw=1'
  },
  {
    title: 'Custom Request',
    desc: 'Tailored solutions for your most ambitious creative visions.',
    video: 'https://www.dropbox.com/scl/fi/59yrjh3zxul5026siarfp/From-KlickPin-CF-Pin-auf-Thoughts-in-Art.mp4?rlkey=xvy69yn8wwtiiskuadl4q2qzl&st=3l9px3ex&raw=1'
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="bg-zinc-950">
      {/* Introduction */}
      <div className="py-24 container mx-auto px-6">
        <div className="reveal opacity-0 translate-y-10 transition-all duration-700">
          <span className="text-zinc-500 text-xs tracking-widest uppercase mb-2 block">Expertise</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h2>
          <div className="w-12 h-1 bg-blue-500 mb-8"></div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full">
        {SERVICES.map((service, idx) => (
          <div 
            key={idx} 
            className="group relative h-[450px] overflow-hidden border-r border-b border-white/5 cursor-pointer"
          >
            {/* Background Video */}
            <video 
              autoPlay 
              muted 
              loop 
              playsInline 
              className="absolute inset-0 w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-110"
            >
              <source src={service.video} type="video/mp4" />
            </video>
            
            <div className="absolute inset-0 bg-black/60 group-hover:bg-black/30 transition-colors" />
            
            <div className="absolute inset-0 p-8 flex flex-col justify-end z-10">
              <h3 className="text-xl font-bold mb-2 group-hover:text-blue-400 transition-colors leading-tight tracking-wide">
                {service.title}
              </h3>
              <p className="text-sm text-zinc-400 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                {service.desc}
              </p>
              <div className="mt-4 w-0 group-hover:w-full h-[1px] bg-blue-500 transition-all duration-500"></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;