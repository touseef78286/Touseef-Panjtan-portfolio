
import React from 'react';
import { Download, ChevronRight, ExternalLink } from 'lucide-react';
import { SOCIAL_LINKS, CV_URL } from '../constants';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen pt-32 pb-20 flex items-center relative overflow-hidden scroll-mt-24">
      {/* Decorative background elements */}
      <div className="absolute top-1/4 -right-20 w-80 h-80 bg-orange-500/10 rounded-full blur-[100px]" />
      <div className="absolute bottom-1/4 -left-20 w-80 h-80 bg-blue-500/10 rounded-full blur-[100px]" />

      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
        <div className="order-2 md:order-1 text-center md:text-left">
          <span className="inline-block py-1 px-4 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-500 font-medium mb-6 text-sm animate-pulse">
            Open for opportunities
          </span>
          <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
            Hi, I'm <span className="orange-gradient-text">Touseef Panjtan</span>
          </h1>
          <p className="text-xl text-gray-400 mb-8 max-w-xl leading-relaxed">
            A passionate <span className="text-white font-medium">Frontend Web Developer</span> crafting high-performance, accessible, and stunning digital experiences using modern technologies.
          </p>
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <a href="#contact" className="px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white rounded-full font-bold transition-all shadow-lg shadow-orange-500/20 flex items-center gap-2 group">
              Contact Me <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#projects" className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-full font-bold transition-all flex items-center gap-2">
              View Projects
            </a>
            <a 
              href={CV_URL} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-full sm:w-auto px-8 py-4 border border-orange-500/30 text-orange-500 hover:bg-orange-500 hover:text-white rounded-full font-bold transition-all flex items-center justify-center gap-2"
            >
              <Download size={18} /> Download CV
            </a>
          </div>
        </div>

        <div className="order-1 md:order-2 flex justify-center items-center">
          <div className="relative animate-float">
            <div className="absolute inset-0 bg-orange-500 rounded-full blur-[60px] opacity-10" />
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full p-2 bg-gradient-to-tr from-orange-500 to-transparent">
              <div className="w-full h-full rounded-full overflow-hidden border-4 border-[#0a0a0a] bg-zinc-900 shadow-2xl">
                <img 
                  src="https://picsum.photos/seed/touseef/600/600" 
                  alt="Touseef Panjtan" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 scale-105"
                />
              </div>
            </div>
            {/* Badges/Icons around photo */}
            <div className="absolute -bottom-4 -right-4 glass p-4 rounded-2xl shadow-xl flex items-center gap-3 shadow-orange-500/10">
              <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center">
                <ExternalLink size={20} className="text-white" />
              </div>
              <div>
                <p className="text-xs text-gray-400">Experience</p>
                <p className="text-sm font-bold text-white">2+ Years</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
