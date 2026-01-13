
import React from 'react';
import { X, Printer, Mail, Github, Linkedin, MapPin, Globe, Award, Target, Briefcase, GraduationCap, Languages } from 'lucide-react';
import { FULL_NAME, EDUCATION, SKILLS, PROJECTS, EXPERIENCE, CERTIFICATIONS, RESUME_SUMMARY } from '../constants';

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
            <h2 className="text-lg font-bold text-gray-900">Professional CV Generator</h2>
          </div>
          <div className="flex gap-3">
            <button 
              onClick={handlePrint}
              className="flex items-center gap-2 px-6 py-2.5 bg-gray-900 text-white rounded-xl font-bold text-sm hover:bg-orange-600 transition-all shadow-xl active:scale-95"
            >
              <Printer size={18} /> Print PDF
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
        <div id="resume-content" className="flex-1 overflow-y-auto bg-white p-8 sm:p-12 text-gray-800 print:p-0 print:overflow-visible">
          <div className="max-w-4xl mx-auto">
            
            {/* CV Header */}
            <header className="mb-10 border-b-4 border-orange-500 pb-8">
              <div className="flex flex-col md:flex-row justify-between items-center md:items-end gap-6 text-center md:text-left">
                <div className="w-full">
                  <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-2 uppercase tracking-tight leading-none">{FULL_NAME}</h1>
                  <p className="text-orange-600 font-extrabold text-lg mb-6 tracking-wide italic">
                    Software Engineering Student • AI & Web3D Specialist
                  </p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-3 gap-x-8 text-xs font-bold text-gray-600">
                    <div className="flex items-center gap-2 justify-center md:justify-start">
                      <Mail size={14} className="text-orange-500 shrink-0" /> touseefpanjtan52@gmail.com
                    </div>
                    <div className="flex items-center gap-2 justify-center md:justify-start">
                      <Linkedin size={14} className="text-orange-500 shrink-0" /> linkedin.com/in/touseef-panjtan
                    </div>
                    <div className="flex items-center gap-2 justify-center md:justify-start">
                      <MapPin size={14} className="text-orange-500 shrink-0" /> Islamabad, Pakistan
                    </div>
                    <div className="flex items-center gap-2 justify-center md:justify-start">
                      <Globe size={14} className="text-orange-500 shrink-0" /> github.com/touseef78286
                    </div>
                  </div>
                </div>
              </div>
            </header>

            <div className="grid md:grid-cols-12 gap-10">
              {/* Left Column */}
              <div className="md:col-span-8 space-y-10">
                
                {/* Summary */}
                <section>
                  <div className="flex items-center gap-3 mb-4">
                    <Target size={20} className="text-orange-500" />
                    <h3 className="text-lg font-black text-gray-900 uppercase tracking-widest border-b-2 border-gray-100 flex-1 pb-1">Profile Summary</h3>
                  </div>
                  <p className="leading-relaxed text-gray-700 font-medium text-sm md:text-base">{RESUME_SUMMARY}</p>
                </section>

                {/* Experience */}
                <section>
                  <div className="flex items-center gap-3 mb-6">
                    <Briefcase size={20} className="text-orange-500" />
                    <h3 className="text-lg font-black text-gray-900 uppercase tracking-widest border-b-2 border-gray-100 flex-1 pb-1">Experience</h3>
                  </div>
                  <div className="space-y-6">
                    {EXPERIENCE.map((exp, idx) => (
                      <div key={idx} className="relative pl-5 border-l-2 border-orange-500/20">
                        <div className="flex justify-between items-baseline mb-1">
                          <h4 className="text-base font-black text-gray-900">{exp.position}</h4>
                          <span className="text-[10px] font-bold text-gray-500 whitespace-nowrap">{exp.period}</span>
                        </div>
                        <p className="text-orange-600 text-xs font-bold mb-2 uppercase">{exp.company}</p>
                        <ul className="text-xs text-gray-600 space-y-1 list-disc pl-4 font-medium">
                          {exp.description.map((item, i) => <li key={i}>{item}</li>)}
                        </ul>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Projects */}
                <section>
                  <div className="flex items-center gap-3 mb-6">
                    <Award size={20} className="text-orange-500" />
                    <h3 className="text-lg font-black text-gray-900 uppercase tracking-widest border-b-2 border-gray-100 flex-1 pb-1">Key Projects</h3>
                  </div>
                  <div className="space-y-6">
                    {PROJECTS.map((project) => (
                      <div key={project.id} className="relative pl-5 border-l-2 border-orange-500/20">
                        <div className="flex justify-between items-baseline mb-1">
                          <h4 className="text-base font-black text-gray-900">{project.name}</h4>
                        </div>
                        <p className="text-xs text-gray-600 mb-2 leading-relaxed font-medium">{project.description}</p>
                        <div className="flex flex-wrap gap-1">
                          {project.tech.map(t => (
                            <span key={t} className="text-[9px] bg-gray-100 px-2 py-0.5 rounded text-gray-700 font-bold">{t}</span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              </div>

              {/* Right Column */}
              <div className="md:col-span-4 space-y-10">
                
                {/* Education */}
                <section>
                  <div className="flex items-center gap-3 mb-4">
                    <GraduationCap size={20} className="text-orange-500" />
                    <h3 className="text-base font-black text-gray-900 uppercase tracking-widest">Education</h3>
                  </div>
                  {EDUCATION.map((edu, idx) => (
                    <div key={idx} className="space-y-1">
                      <p className="text-sm font-black text-gray-900 leading-tight">{edu.degree}</p>
                      <p className="text-xs font-bold text-orange-600">{edu.institution}</p>
                      <p className="text-[10px] text-gray-500 font-bold">{edu.period}</p>
                    </div>
                  ))}
                </section>

                {/* Core Skills */}
                <section>
                  <h3 className="text-sm font-black text-gray-900 mb-4 uppercase tracking-widest bg-gray-900 text-white px-3 py-1.5 rounded text-center">Core Expertise</h3>
                  <div className="space-y-3">
                    {SKILLS.map((skill) => (
                      <div key={skill.name}>
                        <div className="flex justify-between text-[10px] font-black uppercase tracking-widest text-gray-600 mb-1">
                          <span>{skill.name}</span>
                          <span>{skill.level}%</span>
                        </div>
                        <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
                          <div className="h-full bg-orange-500" style={{ width: `${skill.level}%` }} />
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Certifications */}
                <section>
                  <h3 className="text-sm font-black text-gray-900 mb-4 uppercase tracking-widest bg-gray-900 text-white px-3 py-1.5 rounded text-center">Credentials</h3>
                  <div className="space-y-3">
                    {CERTIFICATIONS.map((cert, i) => (
                      <div key={i} className="text-[10px] border-b border-gray-100 pb-2 last:border-0">
                        <p className="font-black text-gray-800 uppercase">{cert.name}</p>
                        <p className="text-orange-600 font-bold">{cert.issuer} • {cert.date}</p>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Spoken Languages */}
                <section>
                  <div className="flex items-center gap-3 mb-4">
                    <Languages size={18} className="text-orange-500" />
                    <h3 className="text-sm font-black text-gray-900 uppercase tracking-widest">Languages</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {["English (Fluent)", "Urdu (Native)", "Punjabi (Native)"].map(lang => (
                      <span key={lang} className="text-[10px] font-bold text-gray-600 bg-gray-50 px-2 py-1 rounded border border-gray-100">{lang}</span>
                    ))}
                  </div>
                </section>
              </div>
            </div>
            
            <div className="mt-12 pt-6 border-t border-gray-100 text-center opacity-30 text-[10px] font-bold italic">
              Digital Portfolio Verified • Syed Touseef Panjtan 2024
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media print {
          @page { size: A4; margin: 1cm; }
          body * { visibility: hidden; }
          #resume-content, #resume-content * { visibility: visible; color: black !important; }
          #resume-content {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            padding: 0 !important;
            box-shadow: none !important;
          }
          .print\\:hidden { display: none !important; }
          .bg-orange-500 { background-color: #f97316 !important; -webkit-print-color-adjust: exact; }
          .text-orange-600 { color: #ea580c !important; }
          .bg-gray-900 { background-color: #111827 !important; -webkit-print-color-adjust: exact; }
        }
      `}</style>
    </div>
  );
};

export default ResumeModal;
