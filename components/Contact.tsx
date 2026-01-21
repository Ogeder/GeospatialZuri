
import React, { useState } from 'react';
import { Mail, Linkedin, MapPin, Send } from 'lucide-react';

export const Contact: React.FC = () => {
  const [status, setStatus] = useState<null | 'success'>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('success');
    setTimeout(() => setStatus(null), 5000);
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
            <div className="lg:col-span-2">
              <h4 className="text-sage font-medium tracking-[0.2em] uppercase text-xs mb-4">Get In Touch</h4>
              <h2 className="text-4xl font-semibold mb-8">Let’s discuss how data can support <span className="italic">climate-resilient</span> decisions.</h2>
              
              <div className="space-y-8 mt-12">
                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-full border border-gray-100 flex items-center justify-center group-hover:bg-sage group-hover:text-white transition-all">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 uppercase tracking-widest mb-1">Email</p>
                    <p className="font-medium">consult@geospatialzuri.com</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-full border border-gray-100 flex items-center justify-center group-hover:bg-sage group-hover:text-white transition-all">
                    <Linkedin size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 uppercase tracking-widest mb-1">LinkedIn</p>
                    <p className="font-medium">Geospatial Zuri</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-full border border-gray-100 flex items-center justify-center group-hover:bg-sage group-hover:text-white transition-all">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 uppercase tracking-widest mb-1">Location</p>
                    <p className="font-medium">Nairobi, Kenya (Global Reach)</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-3 bg-warm-off-white/50 p-10 rounded-sm">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-semibold uppercase tracking-wider text-gray-500">Name</label>
                    <input 
                      type="text" 
                      required
                      placeholder="Your name" 
                      className="w-full bg-transparent border-b border-gray-200 py-3 focus:outline-none focus:border-sage transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-semibold uppercase tracking-wider text-gray-500">Email</label>
                    <input 
                      type="email" 
                      required
                      placeholder="your@email.com" 
                      className="w-full bg-transparent border-b border-gray-200 py-3 focus:outline-none focus:border-sage transition-all"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-semibold uppercase tracking-wider text-gray-500">Organization</label>
                  <input 
                    type="text" 
                    placeholder="Company or project name" 
                    className="w-full bg-transparent border-b border-gray-200 py-3 focus:outline-none focus:border-sage transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-semibold uppercase tracking-wider text-gray-500">Message</label>
                  <textarea 
                    rows={4} 
                    required
                    placeholder="How can we help?" 
                    className="w-full bg-transparent border-b border-gray-200 py-3 focus:outline-none focus:border-sage transition-all resize-none"
                  ></textarea>
                </div>
                
                <button 
                  type="submit"
                  className="w-full bg-charcoal text-white py-4 font-medium flex items-center justify-center gap-2 hover:bg-sage transition-all disabled:bg-gray-400"
                  disabled={status === 'success'}
                >
                  {status === 'success' ? 'Inquiry Sent' : 'Request Consultation'}
                  <Send size={18} />
                </button>

                {status === 'success' && (
                  <p className="text-sage text-sm text-center font-medium mt-4">
                    Thank you. We will get back to you within 24 hours.
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
