import React from 'react';

const PROJECTS = [
  {
    id: '1',
    title: 'Castle Scene',
    category: 'Short Movie',
    image: 'https://res.cloudinary.com/djwiyyxkm/image/upload/v1767648076/9_nyhflt.png',
    description: 'Cinematic environment design featuring a majestic medieval castle.'
  },
  {
    id: '2',
    title: 'Cabai Box',
    category: 'Product Visualization',
    image: 'https://res.cloudinary.com/djwiyyxkm/image/upload/v1767648077/1_47_oiswhy.png',
    description: 'High-end product visualization for luxury packaging.'
  },
  {
    id: '3',
    title: '3D Architecture',
    category: 'Room Architect',
    image: 'https://res.cloudinary.com/djwiyyxkm/image/upload/v1767648077/7_olohtj.png',
    description: 'Detailed interior architectural rendering with realistic lighting.'
  },
  {
    id: '4',
    title: 'Doorderma product',
    category: 'Product Animation',
    image: 'https://res.cloudinary.com/djwiyyxkm/image/upload/v1767648086/3_2_zxifnq.png',
    description: 'Dynamic animation showcasing product features and utility.'
  },
  {
    id: '5',
    title: 'CGI Ad',
    category: 'CGI Animation',
    image: 'https://res.cloudinary.com/djwiyyxkm/image/upload/v1767648087/4_utopge.png',
    description: 'Immersive CGI advertisement for digital marketing.'
  },
  {
    id: '6',
    title: 'Banner Promotion',
    category: 'CGI Animation',
    image: 'https://res.cloudinary.com/djwiyyxkm/image/upload/v1767648084/5_12_skbbzh.png',
    description: 'Visual promotion design using advanced 3D elements.'
  },
  {
    id: '7',
    title: 'Light Showcase',
    category: 'Room Architect',
    image: 'https://res.cloudinary.com/djwiyyxkm/image/upload/v1767648667/8_1_qoymvc.jpg',
    description: 'A study in lighting and interior ambiance.'
  },
  {
    id: '8',
    title: 'Australian Forest',
    category: 'Enviroment Scene',
    image: 'https://res.cloudinary.com/djwiyyxkm/image/upload/v1767648667/2_2_dpyttu.jpg',
    description: 'Hyper-realistic nature environment recreation.'
  }
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 bg-black">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
          <div className="reveal opacity-0 translate-y-10 transition-all duration-700">
            <span className="text-zinc-500 text-xs tracking-widest uppercase mb-2 block">Our Portfolio</span>
            <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tight">Our Works</h2>
          </div>
          <div className="reveal opacity-0 translate-y-10 transition-all duration-700">
             <div className="w-16 h-[2px] bg-blue-500"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROJECTS.map((project, index) => (
            <div 
              key={project.id} 
              className="reveal opacity-0 translate-y-10 transition-all duration-1000"
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              <div className="group relative overflow-hidden rounded-xl aspect-[3/4] cursor-pointer bg-zinc-900 border border-white/5 shadow-2xl">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-70 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
                
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <span className="text-blue-400 text-[10px] font-bold tracking-[0.3em] uppercase mb-2 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                    {project.category}
                  </span>
                  <h3 className="text-lg font-bold mb-1 tracking-wide">{project.title}</h3>
                  <div className="w-0 group-hover:w-full h-[1px] bg-white/20 transition-all duration-700"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Download Portfolio Section */}
        <div className="mt-32 py-16 px-8 rounded-3xl bg-zinc-900/50 border border-white/5 flex flex-col items-center text-center reveal opacity-0 translate-y-10 transition-all duration-1000">
          <div className="w-16 h-16 rounded-2xl bg-blue-500/10 flex items-center justify-center mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-blue-400">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <polyline points="7 10 12 15 17 10"></polyline>
              <line x1="12" y1="15" x2="12" y2="3"></line>
            </svg>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 uppercase tracking-tighter">Download our Portfolio</h2>
          <p className="text-zinc-400 max-w-lg mb-10 text-sm tracking-wide">
            Get a comprehensive look at our technical capabilities and a curated selection of our high-end CGI productions.
          </p>
          <a 
            href="https://drive.google.com/file/d/1h3AblSaVjb258EKv6-aY-vm1ulk_yJgA/view?usp=sharing" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group relative px-12 py-5 bg-white text-black font-black uppercase text-xs tracking-[0.2em] rounded-full overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-[0_20px_40px_rgba(0,0,0,0.4)] block text-center"
          >
            <span className="relative z-10">Get PDF Portfolio</span>
            <div className="absolute inset-0 bg-blue-500 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;