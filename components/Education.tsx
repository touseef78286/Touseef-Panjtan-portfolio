
import React from 'react';
import { EDUCATION } from '../constants';
import { GraduationCap } from 'lucide-react';

const Education: React.FC = () => {
  return (
    <section id="education" className="py-24 scroll-mt-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Education</h2>
          <div className="w-20 h-1 bg-orange-500 rounded-full mx-auto" />
        </div>

        <div className="max-w-4xl mx-auto space-y-12">
          {EDUCATION.map((item, index) => (
            <div key={index} className="relative pl-8 md:pl-0">
              {/* Timeline Connector */}
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-px bg-white/10" />
              
              <div className={`md:flex items-center justify-between gap-12 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                {/* Content Card */}
                <div className="md:w-[45%] glass p-8 rounded-3xl relative">
                  <div className="absolute top-8 -left-4 md:hidden w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white">
                    <GraduationCap size={16} />
                  </div>
                  <span className="text-orange-500 text-sm font-bold uppercase tracking-wider">{item.period}</span>
                  <h3 className="text-xl font-bold mt-2 mb-1">{item.degree}</h3>
                  <h4 className="text-gray-400 font-medium mb-4">{item.institution}</h4>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
                </div>
                
                {/* Center Icon */}
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-[#0a0a0a] border-4 border-zinc-800 rounded-full items-center justify-center z-10 text-orange-500">
                  <GraduationCap size={20} />
                </div>

                {/* Empty Spacer */}
                <div className="hidden md:block md:w-[45%]" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
