
import React from 'react';
import { Globe, GraduationCap, Microscope, Database } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="order-2 lg:order-1 relative">
            <div className="aspect-[4/5] bg-warm-off-white relative overflow-hidden rounded-sm shadow-2xl">
              {/* Founder Image - User to replace with founder.jpg */}
              <img 
                src="https://raw.githubusercontent.com/stackblitz/stackblitz-images/main/zuri-founder.jpg" 
                alt="Founder of Geospatial Zuri" 
                className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-700"
                onError={(e) => {
                   e.currentTarget.src = "https://picsum.photos/seed/portrait/800/1000";
                }}
              />
              <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-charcoal/80 to-transparent text-white">
                <p className="font-serif text-3xl mb-1">Meet the Founder</p>
                <p className="text-sage text-sm uppercase tracking-widest font-medium">Lead Climate Strategist</p>
              </div>
            </div>
            <div className="absolute -top-6 -left-6 w-32 h-32 border-t-2 border-l-2 border-sage opacity-30" />
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border-b-2 border-r-2 border-sage opacity-30" />
          </div>

          <div className="order-1 lg:order-2">
            <div className="mb-8">
              <h4 className="text-sage font-medium tracking-[0.2em] uppercase text-xs mb-4">Our Leadership</h4>
              <h2 className="text-4xl md:text-5xl font-semibold mb-8">Expertise in <span className="italic">Environmental Intelligence</span>.</h2>
              <p className="text-gray-600 leading-relaxed text-lg mb-6">
                Geospatial Zuri was founded with a clear vision: to make high-level climate data accessible and actionable for those who need it most.
              </p>
              <p className="text-gray-600 leading-relaxed text-lg italic border-l-2 border-sage pl-6">
                "We don't just provide maps; we provide the narrative that helps organizations navigate the complexities of environmental change."
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-12">
              <div className="p-4 border border-gray-50 bg-warm-off-white/50">
                <GraduationCap className="text-sage mb-3" size={24} />
                <h4 className="font-semibold mb-1">Academic Rigor</h4>
                <p className="text-xs text-gray-500">Grounded in advanced climate science and research.</p>
              </div>
              <div className="p-4 border border-gray-50 bg-warm-off-white/50">
                <Database className="text-sage mb-3" size={24} />
                <h4 className="font-semibold mb-1">Advanced GIS</h4>
                <p className="text-xs text-gray-500">Utilizing state-of-the-art spatial analysis tools.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
