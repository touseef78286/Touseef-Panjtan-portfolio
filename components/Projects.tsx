
import React from 'react';
import { PROJECTS, TECH_DESCRIPTIONS } from '../constants';
import { Github, ExternalLink, ArrowUpRight } from 'lucide-react';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 scroll-mt-24">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Selected Projects</h2>
            <div className="w-20 h-1 bg-orange-500 rounded-full" />
          </div>
          <a 
            href="https://github.com/touseef78286" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
          >
            View more on GitHub <ArrowUpRight size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {PROJECTS.map((project) => (
            <div 
              key={project.id} 
              className="group glass rounded-[2.5rem] overflow-hidden border-white/5 hover:border-orange-500/40 hover:-translate-y-4 hover:scale-[1.02] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] flex flex-col shadow-2xl hover:shadow-[0_40px_100px_-20px_rgba(249,115,22,0.4),0_20px_40px_-15px_rgba(249,115,22,0.2),0_0_50px_rgba(249,115,22,0.1)]"
            >
              <div className="relative aspect-video overflow-hidden bg-zinc-900">
                <img 
                  src={project.imageUrl} 
                  alt={project.name} 
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1.5s] ease-[cubic-bezier(0.16,1,0.3,1)]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-6 left-6 flex flex-wrap gap-2">
                  {project.tech.map(t => (
                    <div key={t} className="group/tag relative cursor-help">
                      <span className="px-4 py-1.5 bg-black/60 backdrop-blur-md border border-white/10 rounded-full text-[10px] font-bold uppercase tracking-wider text-white group-hover/tag:bg-orange-500 group-hover/tag:border-orange-500 transition-all duration-300">
                        {t}
                      </span>
                      {/* Tooltip */}
                      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 w-56 p-4 bg-zinc-900 border border-white/10 rounded-2xl text-[12px] text-gray-400 leading-relaxed opacity-0 invisible group-hover/tag:opacity-100 group-hover/tag:visible transition-all duration-300 transform group-hover/tag:translate-y-0 translate-y-2 z-20 pointer-events-none shadow-2xl">
                        <div className="font-bold text-orange-500 mb-1.5">{t}</div>
                        {TECH_DESCRIPTIONS[t] || "A key technology used to deliver high performance."}
                        {/* Tooltip Arrow */}
                        <div className="absolute top-full left-1/2 -translate-x-1/2 border-8 border-transparent border-t-zinc-900" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="p-10 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-orange-500 transition-colors duration-500">{project.name}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-8 group-hover:text-gray-300 transition-colors duration-500">
                    {project.description}
                  </p>
                </div>
                
                <div className="flex gap-4">
                  <a 
                    href={project.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-4 bg-white/5 hover:bg-white/10 rounded-2xl transition-all text-gray-300 hover:text-white border border-white/5 hover:border-white/20"
                  >
                    <Github size={22} />
                  </a>
                  <a 
                    href={project.demoUrl || "#"} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-3 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-2xl transition-all px-6 py-4 shadow-lg shadow-orange-500/20 active:scale-95"
                  >
                    Live Preview <ExternalLink size={20} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
