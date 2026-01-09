
import React, { useState, useEffect, useRef } from 'react';
import { SKILLS } from '../constants';

const CountUp: React.FC<{ end: number; duration: number; start: boolean }> = ({ end, duration, start }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;
    
    let startTime: number | null = null;
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      // Using easeOutQuart for the number count
      const easedProgress = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easedProgress * end));
      
      if (progress < 1) {
        window.requestAnimationFrame(animate);
      }
    };
    
    window.requestAnimationFrame(animate);
  }, [end, duration, start]);

  return <>{count}%</>;
};

const Skills: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (sectionRef.current) {
            observer.unobserve(sectionRef.current);
          }
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="skills" ref={sectionRef} className="py-24 bg-[#0d0d0d] scroll-mt-24">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          <div className="md:w-1/3">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Technical Skills</h2>
            <div className="w-20 h-1 bg-orange-500 rounded-full mb-8" />
            <p className="text-gray-400 mb-8 leading-relaxed">
              My technical toolkit is focused on the modern JavaScript ecosystem. I specialize in building scalable frontend architectures and responsive, accessible interfaces.
            </p>
            <div className="flex flex-wrap gap-3">
              {["React", "TypeScript", "Tailwind", "Node", "PostgreSQL", "Git", "Figma", "Redux"].map((tag, idx) => (
                <span 
                  key={tag} 
                  className={`px-4 py-2 glass rounded-lg text-xs font-bold text-gray-400 hover:text-orange-500 transition-all duration-700 cursor-default border-white/5 hover:border-orange-500/30 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
                  style={{ transitionDelay: `${idx * 50}ms` }}
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
          
          <div className="md:w-2/3 w-full grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-10">
            {SKILLS.map((skill, index) => (
              <div key={skill.name} className="space-y-4">
                <div className="flex justify-between items-end">
                  <span 
                    className={`font-medium text-gray-200 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`} 
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    {skill.name}
                  </span>
                  <span 
                    className={`text-orange-500 font-bold text-xs transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`} 
                    style={{ transitionDelay: `${index * 150}ms` }}
                  >
                    <CountUp end={skill.level} duration={1500} start={isVisible} />
                  </span>
                </div>
                <div className="h-3 w-full bg-white/5 rounded-full overflow-hidden border border-white/5 p-[2px]">
                  <div 
                    className="h-full bg-gradient-to-r from-orange-600 to-orange-400 rounded-full transition-all duration-[1500ms] ease-[cubic-bezier(0.22,1,0.36,1)] relative shadow-[0_0_15px_rgba(249,115,22,0.2)]"
                    style={{ 
                      width: isVisible ? `${skill.level}%` : '0%',
                      transitionDelay: `${index * 100}ms`,
                    }}
                  >
                    {/* Animated Shine Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full animate-[shimmer_3s_infinite]" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
