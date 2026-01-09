
import React, { useState } from 'react';
import { Mail, Send, MapPin, Github, Linkedin, ExternalLink } from 'lucide-react';
import { SOCIAL_LINKS } from '../constants';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus('idle'), 3000);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="contact" className="py-24 bg-[#0d0d0d] scroll-mt-24">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div className="space-y-12">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Let's Connect</h2>
                <div className="w-20 h-1 bg-orange-500 rounded-full mb-8" />
                <p className="text-gray-400 text-lg leading-relaxed">
                  Have a project in mind or just want to chat about tech? Feel free to reach out. I'm always open to new collaborations and exciting opportunities.
                </p>
              </div>

              <div className="space-y-8">
                {/* Contact Details */}
                <div className="flex items-center gap-6 group">
                  <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center group-hover:bg-orange-500 transition-all duration-300 border border-white/5 group-hover:border-orange-500 shadow-lg group-hover:shadow-orange-500/20">
                    <Mail className="text-orange-500 group-hover:text-white" size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Email Me</p>
                    <a href={SOCIAL_LINKS.email} className="text-lg font-medium hover:text-orange-500 transition-colors">touseefpanjtan52@gmail.com</a>
                  </div>
                  </div>

                <div className="flex items-center gap-6 group">
                  <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center group-hover:bg-orange-500 transition-all duration-300 border border-white/5 group-hover:border-orange-500 shadow-lg group-hover:shadow-orange-500/20">
                    <MapPin className="text-orange-500 group-hover:text-white" size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Location</p>
                    <p className="text-lg font-medium">Remote / Global</p>
                  </div>
                </div>

                {/* Social Media Icons Section */}
                <div className="pt-10 border-t border-white/10">
                  <p className="text-sm font-semibold text-gray-500 uppercase tracking-widest mb-6">Social Profiles</p>
                  <div className="flex gap-4">
                    <a 
                      href={SOCIAL_LINKS.github} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      aria-label="GitHub Profile"
                      className="group/social relative p-5 glass rounded-[1.5rem] hover:bg-orange-500 hover:text-white transition-all duration-300 text-gray-400 flex items-center justify-center border-white/5 hover:border-orange-500 shadow-xl hover:shadow-orange-500/20"
                    >
                      <Github size={28} className="group-hover/social:scale-110 transition-transform duration-300" />
                      <div className="absolute -top-1 -right-1 opacity-0 group-hover/social:opacity-100 transition-opacity">
                        <div className="w-3 h-3 bg-white rounded-full animate-ping" />
                      </div>
                    </a>
                    
                    <a 
                      href={SOCIAL_LINKS.linkedin} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      aria-label="LinkedIn Profile"
                      className="group/social relative p-5 glass rounded-[1.5rem] hover:bg-orange-500 hover:text-white transition-all duration-300 text-gray-400 flex items-center justify-center border-white/5 hover:border-orange-500 shadow-xl hover:shadow-orange-500/20"
                    >
                      <Linkedin size={28} className="group-hover/social:scale-110 transition-transform duration-300" />
                      <div className="absolute -top-1 -right-1 opacity-0 group-hover/social:opacity-100 transition-opacity">
                        <div className="w-3 h-3 bg-white rounded-full animate-ping" />
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass p-8 md:p-12 rounded-[2.5rem] relative border border-white/5 shadow-2xl overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/5 blur-3xl rounded-full -mr-16 -mt-16" />
              
              {status === 'success' && (
                <div className="absolute inset-0 z-10 glass rounded-[2.5rem] flex flex-col items-center justify-center text-center p-8 animate-fade-in bg-[#0d0d0d]/90 backdrop-blur-xl">
                  <div className="w-20 h-20 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mb-6 shadow-lg shadow-green-500/10">
                    <Send size={40} />
                  </div>
                  <h3 className="text-3xl font-bold mb-2">Message Sent!</h3>
                  <p className="text-gray-400">Thank you for reaching out. I'll get back to you shortly.</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-400 ml-1">Your Name</label>
                    <input 
                      required
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your Name" 
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-orange-500/50 focus:ring-4 focus:ring-orange-500/5 transition-all text-white placeholder:text-gray-600"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-400 ml-1">Email Address</label>
                    <input 
                      required
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Email Address" 
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-orange-500/50 focus:ring-4 focus:ring-orange-500/5 transition-all text-white placeholder:text-gray-600"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-400 ml-1">Subject</label>
                  <input 
                    required
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Subject" 
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-orange-500/50 focus:ring-4 focus:ring-orange-500/5 transition-all text-white placeholder:text-gray-600"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-400 ml-1">Message</label>
                  <textarea 
                    required
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your Message..." 
                    rows={5}
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-orange-500/50 focus:ring-4 focus:ring-orange-500/5 transition-all text-white placeholder:text-gray-600 resize-none"
                  />
                </div>
                <button 
                  disabled={status === 'sending'}
                  type="submit" 
                  className="group/btn w-full bg-orange-500 hover:bg-orange-600 disabled:bg-gray-800 text-white font-bold rounded-2xl py-5 transition-all duration-300 flex items-center justify-center gap-3 shadow-lg shadow-orange-500/20 hover:shadow-orange-500/40 active:scale-[0.98] disabled:cursor-not-allowed"
                >
                  {status === 'sending' ? 'Sending Message...' : 'Send Message'}
                  <Send size={20} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
