
import React from 'react';
import { X, Printer, Mail, Github, Linkedin, MapPin, Globe, Award, Target } from 'lucide-react';
import { FULL_NAME, EDUCATION, SKILLS, PROJECTS, SOCIAL_LINKS, RESUME_SUMMARY } from '../constants';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-hidden">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/90 backdrop-blur-xl" onClick={onClose} />
      
      {/* Modal Container */}
      <div className="relative w-full max-w-5xl max-h-[95vh] bg-white rounded-[2rem] overflow-hidden flex flex-col shadow-[0_0_100px_rgba(0,0,0,0.5)] animate-in zoom-in duration-300">
        
        {/* Header (Non-printable) */}
        <div className="flex justify-between items-center p-6 border-b border-gray-100 bg-gray-50/50 print:hidden">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center text-white font-bold text-xs shadow-lg shadow-orange-500/20">CV</div>
            <h2 className="text-lg font-bold text-gray-900">Professional Resume</h2>
          </div>
          <div className="flex gap-3">
            <button 
              onClick={handlePrint}
              className="flex items-center gap-2 px-6 py-2.5 bg-gray-900 text-white rounded-xl font-bold text-sm hover:bg-orange-600 transition-all shadow-xl active:scale-95"
            >
              <Printer size={18} /> Print to PDF
            </button>
            <button
              onClick={onClose} 
              className="p-2.5 text-gray-400 hover:text-gray-900 hover:bg-gray-200/50 rounded-xl transition-all"
            >
              <X size={24} />
            </button>
          </div>
        </div>

        {/* CV Content (Printable) */}
        <div id="resume-content" className="flex-1 overflow-y-auto bg-white p-8 sm:p-16 text-gray-800 print:p-0 print:overflow-visible">
          {/* Main Layout Grid */}
          <div className="max-w-4xl mx-auto">
            
            {/* CV Header */}
            <header className="mb-12 border-b-4 border-orange-500 pb-10">
              <div className="flex flex-col md:flex-row justify-between items-end gap-6">
                <div className="text-left w-full">
                  <h1 className="text-5xl font-black text-gray-900 mb-2 uppercase tracking-tight leading-none">{FULL_NAME}</h1>
                  <p className="text-orange-600 font-extrabold text-xl mb-6 tracking-wide italic">
                    Software Engineer • AI & Web3D Developer • Creative Technologist
                  </p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-3 gap-x-8 text-sm font-bold text-gray-600">
                    <div className="flex items-center gap-2">
                      <Mail size={16} className="text-orange-500 shrink-0" /> touseefpanjtan52@gmail.com
                    </div>
                    <div className="flex items-center gap-2">
                      <Linkedin size={16} className="text-orange-500 shrink-0" /> linkedin.com/in/touseef-panjtan
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin size={16} className="text-orange-500 shrink-0" /> Islamabad, Pakistan
                    </div>
                    <div className="flex items-center gap-2">
                      <Globe size={16} className="text-orange-500 shrink-0" /> github.com/touseef78286
                    </div>
                  </div>
                </div>
              </div>
            </header>

            <div className="grid md:grid-cols-12 gap-12">
              {/* Left Column (Main Content) */}
              <div className="md:col-span-8 space-y-12">
                
                {/* Summary */}
                <section>
                  <div className="flex items-center gap-3 mb-6">
                    <Target size={24} className="text-orange-500" />
                    <h3 className="text-xl font-black text-gray-900 uppercase tracking-widest border-b-2 border-gray-100 flex-1 pb-1">Profile</h3>
                  </div>
                  <p className="leading-relaxed text-gray-700 text-lg font-medium">{RESUME_SUMMARY}</p>
                </section>

                {/* Projects */}
                <section>
                  <div className="flex items-center gap-3 mb-8">
                    <Award size={24} className="text-orange-500" />
                    <h3 className="text-xl font-black text-gray-900 uppercase tracking-widest border-b-2 border-gray-100 flex-1 pb-1">Featured Projects</h3>
                  </div>
                  <div className="space-y-8">
                    {PROJECTS.map((project) => (
                      <div key={project.id} className="group relative pl-6 border-l-2 border-orange-500/20 hover:border-orange-500 transition-colors">
                        <div className="flex justify-between items-baseline mb-2">
                          <h4 className="text-xl font-black text-gray-900">{project.name}</h4>
                          <span className="text-[11px] font-black text-orange-600 bg-orange-50 px-2 py-0.5 rounded uppercase tracking-tighter">
                            {project.tech.slice(0, 3).join(' • ')}
                          </span>
                        </div>
                        <p className="text-gray-600 leading-relaxed font-medium">{project.description}</p>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Education */}
                <section>
                  <div className="flex items-center gap-3 mb-8">
                    <Award size={24} className="text-orange-500" />
                    <h3 className="text-xl font-black text-gray-900 uppercase tracking-widest border-b-2 border-gray-100 flex-1 pb-1">Education</h3>
                  </div>
                  {EDUCATION.map((edu, idx) => (
                    <div key={idx} className="relative">
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-3">
                        <h4 className="text-xl font-black text-gray-900">{edu.degree}</h4>
                        <span className="text-sm font-black text-white bg-orange-500 px-3 py-1 rounded-full">{edu.period}</span>
                      </div>
                      <p className="text-lg font-bold text-orange-600 mb-3 uppercase tracking-wider">{edu.institution}</p>
                      <p className="text-gray-600 leading-relaxed font-medium bg-gray-50 p-4 rounded-2xl italic border-l-4 border-orange-200">{edu.description}</p>
                    </div>
                  ))}
                </section>
              </div>

              {/* Right Column (Sidebar) */}
              <div className="md:col-span-4 space-y-12">
                
                {/* Core Competencies */}
                <section>
                  <h3 className="text-lg font-black text-gray-900 mb-6 uppercase tracking-widest bg-gray-900 text-white px-4 py-2 rounded-lg text-center">Core Expertise</h3>
                  <div className="space-y-4">
                    {SKILLS.map((skill) => (
                      <div key={skill.name}>
                        <div className="flex justify-between text-xs font-black uppercase tracking-widest text-gray-500 mb-1.5">
                          <span>{skill.name}</span>
                        </div>
                        <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                          <div className="h-full bg-orange-500" style={{ width: `${skill.level}%` }} />
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Tech Stack Cloud */}
                <section>
                  <h3 className="text-lg font-black text-gray-900 mb-6 uppercase tracking-widest bg-gray-900 text-white px-4 py-2 rounded-lg text-center">Tech Stack</h3>
                  <div className="flex flex-wrap gap-2">
                    {["React 19", "Three.js", "TypeScript", "Node.js", "Python", "GLSL", "TensorFlow", "Next.js", "Firebase", "Web3", "Unity", "PostgreSQL"].map(tech => (
                      <span key={tech} className="px-3 py-1.5 bg-orange-50 text-orange-700 rounded-lg text-[10px] font-black uppercase tracking-wider border border-orange-100">
                        {tech}
                      </span>
                    ))}
                  </div>
                </section>

                {/* Interests */}
                <section>
                  <h3 className="text-lg font-black text-gray-900 mb-6 uppercase tracking-widest bg-gray-900 text-white px-4 py-2 rounded-lg text-center">Focus Verticals</h3>
                  <ul className="space-y-4 text-sm font-bold text-gray-600">
                    <li className="flex items-center gap-3">
                      <span className="w-2 h-2 bg-orange-500 rounded-full" /> Spatial Computing
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="w-2 h-2 bg-orange-500 rounded-full" /> Generative AI (LLMs)
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="w-2 h-2 bg-orange-500 rounded-full" /> Computer Vision
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="w-2 h-2 bg-orange-500 rounded-full" /> Interactive Narratives
                    </li>
                  </ul>
                </section>

                {/* Footer Signature */}
                <div className="pt-10 text-center opacity-30 italic font-medium text-xs">
                  Generated via Touseef Portfolio 2.0
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media print {
          body * {
            visibility: hidden;
            background: white !important;
            color: black !important;
          }
          #resume-content, #resume-content * {
            visibility: visible;
          }
          #resume-content {
            position: fixed;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            padding: 40px !important;
            margin: 0;
            box-shadow: none !important;
          }
          .print\\:hidden { display: none !important; }
          .bg-orange-500 { background-color: #f97316 !important; -webkit-print-color-adjust: exact; }
          .text-orange-600 { color: #ea580c !important; }
          .bg-gray-900 { background-color: #111827 !important; }
          .bg-orange-50 { background-color: #fff7ed !important; }
        }
      `}</style>
    </div>
  );
};

export default ResumeModal;
