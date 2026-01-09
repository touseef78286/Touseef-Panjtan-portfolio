
import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, FileText } from 'lucide-react';
import { NAV_LINKS, SOCIAL_LINKS, FULL_NAME } from '../constants';

interface NavbarProps {
  onOpenResume: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onOpenResume }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = NAV_LINKS.map(link => link.href.substring(1));
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element && element.getBoundingClientRect().top < 150) {
          setActiveSection(section);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const ResumeButton = ({ className = "" }: { className?: string }) => (
    <button 
      onClick={onOpenResume}
      className={`flex items-center gap-2 px-5 py-2 rounded-full border border-orange-500/40 text-orange-500 font-bold text-sm transition-all hover:bg-orange-500 hover:text-white shadow-lg shadow-orange-500/5 active:scale-95 ${className}`}
    >
      <FileText size={16} /> CV
    </button>
  );

  // Extract initials for logo
  const initials = FULL_NAME.split(' ').map(n => n[0]).join('').substring(0, 2);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'glass py-4 shadow-xl' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#home" className="text-2xl font-bold flex items-center gap-2 group">
          <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center text-white font-black group-hover:rotate-12 transition-transform shadow-lg shadow-orange-500/20">{initials}</div>
          <span className="hidden lg:inline text-lg">{FULL_NAME}</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          <div className="flex items-center gap-6">
            {NAV_LINKS.map((link) => (
              <a 
                key={link.label} 
                href={link.href} 
                className={`text-sm font-medium transition-all duration-300 relative py-1 px-1 group ${activeSection === link.href.substring(1) ? 'text-orange-500' : 'text-gray-400 hover:text-white'}`}
              >
                {link.label}
                <span className={`absolute bottom-0 left-0 h-0.5 bg-orange-500 transition-all duration-300 ${activeSection === link.href.substring(1) ? 'w-full' : 'w-0 group-hover:w-full'}`} />
              </a>
            ))}
          </div>
          
          <div className="flex items-center gap-6 border-l border-white/10 pl-8">
            <ResumeButton />
            <div className="flex items-center gap-4">
              <a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Github size={20} />
              </a>
              <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>

        <button className="md:hidden p-2 text-gray-300 hover:text-orange-500 transition-colors" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      <div className={`md:hidden absolute top-full left-0 right-0 glass border-t border-white/10 transition-all duration-500 ease-in-out ${isOpen ? 'max-h-[80vh] opacity-100 py-6' : 'max-h-0 opacity-0 py-0 pointer-events-none'}`}>
        <div className="flex flex-col px-6 gap-6">
          <div className="flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <a 
                key={link.label} 
                href={link.href} 
                className={`text-lg font-medium transition-colors ${activeSection === link.href.substring(1) ? 'text-orange-500' : 'text-gray-300'}`}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>
          
          <div className="pt-4 border-t border-white/10 space-y-6">
            <ResumeButton className="w-full justify-center py-4" />
            <div className="flex gap-8 justify-center pb-2">
              <a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Github size={28} />
              </a>
              <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={28} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
