
import React from 'react';

const SERVICES = [
  {
    title: '3D Product Animation',
    desc: 'Bringing your physical products to life with detail that matches reality.',
    video: 'https://res.cloudinary.com/djwiyyxkm/video/upload/v1767649024/for_product_animation_vkppxc.mp4'
  },
  {
    title: 'CGI & VFX videos',
    desc: 'Integrating digital elements seamlessly with real-world footage.',
    video: 'https://res.cloudinary.com/djwiyyxkm/video/upload/v1767649038/for_vfx_cgi_emxdku.mp4'
  },
  {
    title: 'Cinematic CGI Videos',
    desc: 'Epic visual storytelling for brand identity and narrative commercials.',
    video: 'https://res.cloudinary.com/djwiyyxkm/video/upload/v1767649024/cinemetic_cgi_video_dr5tgv.mp4'
  },
  {
    title: '3D Rendering',
    desc: 'Precise physically based lighting and high-quality renders.',
    video: 'https://res.cloudinary.com/djwiyyxkm/video/upload/v1767649023/for_rendering_2_zsejmc.mp4'
  },
  {
    title: '3D Modeling',
    desc: 'High-fidelity geometric modeling for all digital applications.',
    video: 'https://res.cloudinary.com/djwiyyxkm/video/upload/v1767649025/for_3d_modeling_yqwdvc.mp4'
  },
  {
    title: 'Environment & Scene Creation',
    desc: 'Building immersive digital worlds from scratch.',
    video: 'https://res.cloudinary.com/djwiyyxkm/video/upload/v1767649462/Untitled_design_25_gvdroy.mp4'
  },
  {
    title: 'Architectural Visualization',
    desc: 'Photorealistic interiors and exteriors for architectural projects.',
    video: 'https://res.cloudinary.com/djwiyyxkm/video/upload/v1767649765/From_KlickPin_CF_Pin_by_Cozy_Nest___Home_Decor_Desig_on_%D0%92%D0%B0%D1%88%D0%B8_%D0%BF%D0%B8%D0%BD%D1%8B___Interior_design_renderings_Interior_design_instagram_Interior_design_trbcn8.mp4'
  },
  {
    title: 'Custom Request',
    desc: 'Tailored solutions for your most ambitious creative visions.',
    video: 'https://res.cloudinary.com/djwiyyxkm/video/upload/v1767649937/From_KlickPin_CF_Pin_auf_Thoughts_in_Art_a71ffl.mp4'
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
