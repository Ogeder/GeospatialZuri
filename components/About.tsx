
import React from 'react';
import { GraduationCap, Database, ShieldCheck, Zap } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-32 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="order-2 lg:order-1 relative">
            <div className="aspect-[3/4] bg-warm-off-white relative overflow-hidden rounded-sm shadow-2xl">
              <img 
                src="founder.jpg" 
                alt="Founder of Geospatial Zuri" 
                className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-1000"
                onError={(e) => {
                   e.currentTarget.src = "https://picsum.photos/seed/portrait/800/1000";
                }}
              />
              <div className="absolute bottom-0 left-0 w-full p-10 bg-gradient-to-t from-charcoal/90 to-transparent text-white">
                <p className="font-serif text-4xl mb-2">Meet the Founder</p>
                <p className="text-sage text-sm uppercase tracking-[0.3em] font-bold">Lead Climate Risk Strategist</p>
              </div>
            </div>
            <div className="absolute -top-8 -left-8 w-48 h-48 border-t-4 border-l-4 border-sage opacity-20" />
            <div className="absolute -bottom-8 -right-8 w-48 h-48 border-b-4 border-r-4 border-sage opacity-20" />
          </div>

          <div className="order-1 lg:order-2">
            <div className="mb-12">
              <h4 className="text-sage font-medium tracking-[0.3em] uppercase text-xs mb-6">Our Leadership</h4>
              <h2 className="text-5xl md:text-6xl font-semibold mb-8 leading-tight">Expertise in <span className="italic">Environmental Intelligence</span>.</h2>
              <p className="text-gray-600 leading-relaxed text-xl mb-8">
                Geospatial Zuri was founded with a clear vision: to make high-level climate data accessible and actionable for the organizations building our future.
              </p>
              <div className="bg-warm-off-white p-8 border-l-4 border-sage shadow-sm">
                <p className="text-charcoal leading-relaxed text-xl italic font-serif">
                  "We don't just provide maps; we provide the narrative that helps leaders navigate the profound complexities of environmental change."
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-12">
              <div className="flex gap-4">
                <div className="shrink-0 w-12 h-12 bg-sage/10 flex items-center justify-center rounded-full text-sage">
                  <GraduationCap size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-charcoal mb-1">Academic Rigor</h4>
                  <p className="text-sm text-gray-500">Deep background in climate science and research-based methodologies.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="shrink-0 w-12 h-12 bg-sage/10 flex items-center justify-center rounded-full text-sage">
                  <Database size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-charcoal mb-1">Spatial Power</h4>
                  <p className="text-sm text-gray-500">Leveraging high-resolution GIS and remote sensing data.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
