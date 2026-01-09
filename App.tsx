
import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ResumeModal from './components/Resume';
import { ChevronUp } from 'lucide-react';

const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 z-50 p-4 bg-orange-500 text-white rounded-full shadow-lg shadow-orange-500/20 transition-all duration-500 transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
      } hover:bg-orange-600 hover:scale-110 active:scale-95`}
    >
      <ChevronUp size={24} />
    </button>
  );
};

const App: React.FC = () => {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  useEffect(() => {
    const reveal = () => {
      const reveals = document.querySelectorAll('.reveal');
      for (let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight;
        const revealTop = reveals[i].getBoundingClientRect().top;
        const revealPoint = 150;
        if (revealTop < windowHeight - revealPoint) {
          reveals[i].classList.add('active');
        }
      }
    };

    window.addEventListener('scroll', reveal);
    reveal(); 
    return () => window.removeEventListener('scroll', reveal);
  }, []);

  return (
    <div className="bg-[#0a0a0a] min-h-screen selection:bg-orange-500/30">
      <Navbar onOpenResume={() => setIsResumeOpen(true)} />
      <main>
        <Hero onOpenResume={() => setIsResumeOpen(true)} />
        <div className="reveal"><About /></div>
        <div className="reveal"><Education /></div>
        <div className="reveal"><Skills /></div>
        <div className="reveal"><Projects /></div>
        <div className="reveal"><Testimonials /></div>
        <div className="reveal"><Contact /></div>
      </main>
      <Footer />
      <ScrollToTop />
      <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
    </div>
  );
};

export default App;
