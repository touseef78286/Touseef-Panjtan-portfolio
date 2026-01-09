
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-[#0d0d0d] scroll-mt-24">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          <div className="flex-1 space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
              <div className="w-20 h-1 bg-orange-500 rounded-full" />
            </div>
            <p className="text-lg text-gray-400 leading-relaxed">
              I am a results-oriented Frontend Web Developer with a strong focus on building user-centric interfaces. With a deep foundation in React, TypeScript, and modern styling tools like Tailwind CSS, I bridge the gap between design and technology.
            </p>
            <p className="text-lg text-gray-400 leading-relaxed">
              My journey started with a fascination for how things work on the web. Since then, I've contributed to various open-source projects and professional ventures, always aiming for clean code, high performance, and exceptional UX.
            </p>
            <div className="grid grid-cols-2 gap-8 pt-4">
              <div>
                <p className="text-orange-500 font-bold text-3xl">15+</p>
                <p className="text-gray-400 text-sm">Projects Completed</p>
              </div>
              <div>
                <p className="text-orange-500 font-bold text-3xl">500+</p>
                <p className="text-gray-400 text-sm">Git Contributions</p>
              </div>
            </div>
          </div>
          <div className="flex-1 w-full grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="glass p-6 rounded-2xl">
                <h4 className="font-bold mb-2">Frontend Mastery</h4>
                <p className="text-xs text-gray-500">Expertise in React and contemporary web standards.</p>
              </div>
              <div className="glass p-6 rounded-2xl bg-orange-500/5 border-orange-500/10">
                <h4 className="font-bold mb-2">Clean Coding</h4>
                <p className="text-xs text-gray-500">Writing maintainable and scalable TypeScript codebases.</p>
              </div>
            </div>
            <div className="space-y-4 pt-12">
              <div className="glass p-6 rounded-2xl bg-white/5">
                <h4 className="font-bold mb-2">UI Engineering</h4>
                <p className="text-xs text-gray-500">Translating complex designs into pixel-perfect reality.</p>
              </div>
              <div className="glass p-6 rounded-2xl">
                <h4 className="font-bold mb-2">Fast Delivery</h4>
                <p className="text-xs text-gray-500">Agile workflows and efficient project management.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
