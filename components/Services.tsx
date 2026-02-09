import React from 'react';

const SERVICES = [
  {
    title: '3D Product Animation',
    desc: 'Bringing your physical products to life with detail that matches reality.',
    video: 'https://player.cloudinary.com/embed/?cloud_name=dzdfz5ron&public_id=for_product_animation_kb756b'
  },
  {
    title: 'CGI & VFX videos',
    desc: 'Integrating digital elements seamlessly with real-world footage.',
    video: 'https://player.cloudinary.com/embed/?cloud_name=dzdfz5ron&public_id=for_vfx_cgi_nu0ihj'
  },
  {
    title: 'Cinematic CGI Videos',
    desc: 'Epic visual storytelling for brand identity and narrative commercials.',
    video: 'https://player.cloudinary.com/embed/?cloud_name=dzdfz5ron&public_id=cinemetic_cgi_video_ijfjsv'
  },
  {
    title: '3D Rendering',
    desc: 'Precise physically based lighting and high-quality renders.',
    video: 'https://player.cloudinary.com/embed/?cloud_name=dzdfz5ron&public_id=for_rendering_1_tsnepf'
  },
  {
    title: '3D Modeling',
    desc: 'High-fidelity geometric modeling for all digital applications.',
    video: 'https://player.cloudinary.com/embed/?cloud_name=dzdfz5ron&public_id=for_3d_modeling_snzqyb'
  },
  {
    title: 'Environment & Scene Creation',
    desc: 'Building immersive digital worlds from scratch.',
    video: 'https://player.cloudinary.com/embed/?cloud_name=dzdfz5ron&public_id=Untitled_design_25_h7opux'
  },
  {
    title: 'Architectural Visualization',
    desc: 'Photorealistic interiors and exteriors for architectural projects.',
    video: 'https://player.cloudinary.com/embed/?cloud_name=dzdfz5ron&public_id=From_KlickPin_CF_Pin_by_Cozy_Nest___Home_Decor_Desig_on_%D0%92%D0%B0%D1%88%D0%B8_%D0%BF%D0%B8%D0%BD%D1%8B___Interior_design_renderings_Interior_design_instagram_Interior_design_hijqdo'
  },
  {
    title: 'Custom Request',
    desc: 'Tailored solutions for your most ambitious creative visions.',
    video: 'https://player.cloudinary.com/embed/?cloud_name=dzdfz5ron&public_id=From_KlickPin_CF_Pin_auf_Thoughts_in_Art_tpbuut'
  }
];

const Services: React.FC = () => {
  const getMediaSource = (url: string) => {
    // Cloudinary Player detection
    if (url.includes('player.cloudinary.com/embed')) {
      // Ensure we have autoplay, muted, loop, and no controls for background effect
      const base = url.includes('?') ? url : `${url}?`;
      const optimizedUrl = `${base}&autoplay=true&muted=true&loop=true&controls=false`;
      return { type: 'iframe', src: optimizedUrl };
    }

    // YouTube / Shorts detection
    if (url.includes('youtube.com') || url.includes('youtu.be')) {
      let id = '';
      if (url.includes('shorts/')) {
        id = url.split('shorts/')[1].split(/[?#&]/)[0];
      } else if (url.includes('v=')) {
        id = url.split('v=')[1].split(/[?#&]/)[0];
      } else {
        id = url.split('/').pop()?.split(/[?#&]/)[0] || '';
      }
      return { 
        type: 'iframe', 
        src: `https://www.youtube.com/embed/${id}?autoplay=1&mute=1&loop=1&playlist=${id}&controls=0&modestbranding=1&rel=0&showinfo=0&iv_load_policy=3&enablejsapi=1` 
      };
    }
    
    if (url.includes('vimeo.com')) {
      const id = url.split('/').pop()?.split('?')[0];
      return { type: 'iframe', src: `https://player.vimeo.com/video/${id}?autoplay=1&loop=1&muted=1&background=1&transparent=1` };
    }
    
    if (url.includes('playbook.com')) {
      const embedUrl = url.replace('/s/', '/e/');
      return { type: 'iframe', src: embedUrl };
    }
    
    if (url.includes('drive.google.com')) {
      // Robustly extract file ID and ensure /preview suffix for embedding
      let embedUrl = url;
      if (url.includes('/file/d/')) {
        const id = url.split('/file/d/')[1].split('/')[0];
        embedUrl = `https://drive.google.com/file/d/${id}/preview`;
      }
      return { type: 'iframe', src: embedUrl };
    }

    if (url.includes('mediafire.com')) {
      return { type: 'direct', src: url };
    }
    
    return { type: 'direct', src: url };
  };

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
        {SERVICES.map((service, idx) => {
          const media = getMediaSource(service.video);
          
          return (
            <div 
              key={idx} 
              className="group relative h-[450px] overflow-hidden border-r border-b border-white/5 cursor-pointer"
            >
              {/* Background Media */}
              <div className="absolute inset-0 w-full h-full grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-110 pointer-events-none">
                {media.type === 'iframe' ? (
                  <iframe
                    src={media.src}
                    className="absolute top-1/2 left-1/2 w-[250%] h-[250%] -translate-x-1/2 -translate-y-1/2 object-cover border-none"
                    frameBorder="0"
                    allow="autoplay; fullscreen; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                ) : (
                  <video 
                    autoPlay 
                    muted 
                    loop 
                    playsInline 
                    className="absolute inset-0 w-full h-full object-cover"
                  >
                    <source src={media.src} type="video/mp4" />
                  </video>
                )}
              </div>
              
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
          );
        })}
      </div>
    </section>
  );
};

export default Services;