
import React from 'react';
import { Download, ChevronRight, ExternalLink } from 'lucide-react';
import { SOCIAL_LINKS, FULL_NAME, PROFILE_PIC_URL } from '../constants';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen pt-32 pb-20 flex items-center relative overflow-hidden scroll-mt-24">
      {/* Background Glows */}
      <div className="absolute top-1/4 -right-20 w-80 h-80 bg-orange-500/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 -left-20 w-80 h-80 bg-blue-500/10 rounded-full blur-[120px]" />

      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
        <div className="order-2 md:order-1 text-center md:text-left">
          <span className="inline-block py-2 px-5 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-500 font-bold mb-8 text-xs tracking-widest uppercase animate-pulse">
            Available for freelance
          </span>
          <h1 className="text-5xl lg:text-8xl font-black mb-6 leading-none tracking-tight">
            Hi, I'm <br />
            <span className="orange-gradient-text">Touseef Panjtan</span>
          </h1>
          <p className="text-xl text-gray-400 mb-10 max-w-xl leading-relaxed">
            Building the next generation of <span className="text-white font-semibold">Web Experiences</span>. I turn complex ideas into elegant, pixel-perfect reality.
          </p>
          <div className="flex flex-wrap gap-5 justify-center md:justify-start">
            <a href="#contact" className="px-10 py-5 bg-orange-500 hover:bg-orange-600 text-white rounded-2xl font-black transition-all shadow-xl shadow-orange-500/30 flex items-center gap-2 group active:scale-95">
              Hire Me <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href={FULL_NAME} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="px-10 py-5 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-2xl font-black transition-all flex items-center gap-2 active:scale-95"
            >
              <Download size={20} /> My Resume
            </a>
          </div>
        </div>

        <div className="order-1 md:order-2 flex justify-center items-center">
          <div className="relative group">
            {/* Animated Ring */}
            <div className="absolute inset-0 bg-orange-500 rounded-full blur-[40px] opacity-20 group-hover:opacity-40 transition-opacity duration-700" />
            
            {/* Image Container */}
            <div className="relative w-72 h-72 md:w-[450px] md:h-[450px] rounded-full p-3 bg-gradient-to-br from-orange-500 via-orange-500/20 to-transparent shadow-[0_0_50px_rgba(249,115,22,0.2)]">
              <div className="w-full h-full rounded-full overflow-hidden border-[6px] border-[#0a0a0a] bg-zinc-900 relative">
                <img 
                  src={PROFILE_PIC_URL} 
                  alt="Touseef Panjtan" 
                  className="w-full h-full object-cover object-top transition-all duration-1000 group-hover:scale-110"
                />
                {/* Subtle Overlay for contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />
              </div>
            </div>

            {/* Floating Experience Badge */}
            <div className="absolute -bottom-2 -right-2 glass p-5 rounded-[2rem] border border-white/10 shadow-2xl flex items-center gap-4 animate-float backdrop-blur-xl">
              <div className="w-12 h-12 bg-orange-500 rounded-2xl flex items-center justify-center shadow-lg shadow-orange-500/40">
                <ExternalLink size={24} className="text-white" />
              </div>
              <div>
                <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">Experience</p>
                <p className="text-lg font-black text-white">2+ Years</p>
              </div>
            </div>
            
            {/* Small decorative dot */}
            <div className="absolute -top-4 -left-4 w-12 h-12 border-2 border-orange-500/30 rounded-full animate-ping" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
