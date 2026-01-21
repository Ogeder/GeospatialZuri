
import React from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-warm-off-white">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-4xl">
            <h4 className="text-sage font-medium tracking-[0.2em] uppercase text-xs mb-6">Climate Risk & Geospatial Intelligence</h4>
            <h1 className="text-5xl md:text-8xl font-semibold leading-[1.1] mb-8 text-charcoal">
              Data-Driven Intelligence for <span className="italic text-sage">Resilient Communities</span>
            </h1>
            <p className="text-xl text-gray-600 font-light max-w-xl leading-relaxed mb-10">
              We translate complex environmental data into actionable insights, helping leaders prepare for a changing climate through advanced spatial analytics.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-16">
              <a 
                href="#contact" 
                className="bg-sage text-white px-10 py-5 rounded-sm font-medium inline-flex items-center justify-center gap-2 hover:bg-charcoal transition-all group"
              >
                Start a Consultation
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="#services" 
                className="border border-charcoal text-charcoal px-10 py-5 rounded-sm font-medium inline-flex items-center justify-center hover:bg-charcoal hover:text-white transition-all"
              >
                Our Expertise
              </a>
            </div>

            <div className="hidden md:grid grid-cols-3 gap-12 border-t border-gray-200 pt-8">
              <div>
                <p className="font-serif text-2xl mb-1">Precision</p>
                <p className="text-[10px] text-gray-400 uppercase tracking-widest font-bold">Spatial Mapping</p>
              </div>
              <div>
                <p className="font-serif text-2xl mb-1">Impact</p>
                <p className="text-[10px] text-gray-400 uppercase tracking-widest font-bold">Science-Led Advisory</p>
              </div>
              <div>
                <p className="font-serif text-2xl mb-1">Vision</p>
                <p className="text-[10px] text-gray-400 uppercase tracking-widest font-bold">Adaptation Strategy</p>
              </div>
            </div>
          </div>

          <div className="relative h-[450px] lg:h-[700px] w-full">
            <div className="absolute inset-0 bg-sage/5 rounded-sm overflow-hidden shadow-2xl rotate-1">
              <img 
                src="flood-hero.jpg" 
                alt="Environmental context" 
                className="w-full h-full object-cover"
                onError={(e) => {
                   e.currentTarget.src = "https://picsum.photos/seed/flood/800/1200";
                }}
              />
              <div className="absolute inset-0 bg-charcoal/5" />
            </div>
            {/* Design Element - Green Symbol Overlay */}
            <div className="absolute -top-10 -right-10 w-40 h-40 opacity-20 pointer-events-none">
              <img src="symbol-green.png" alt="" className="w-full h-full object-contain" />
            </div>
            {/* Floating UI Elements */}
            <div className="absolute -bottom-8 -left-8 bg-white p-8 shadow-2xl max-w-[240px] border-l-8 border-sage">
              <p className="text-[10px] uppercase tracking-widest text-gray-400 mb-2 font-bold">Field Intelligence</p>
              <p className="text-md font-medium italic text-charcoal leading-snug">"Understanding the terrain is the first step in successful climate adaptation."</p>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-10 hidden lg:block animate-bounce text-gray-300">
        <ChevronDown size={40} />
      </div>
    </section>
  );
};
