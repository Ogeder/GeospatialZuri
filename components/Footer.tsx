
import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="py-24 border-t border-gray-100 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-4 mb-8">
              <img 
                src="symbol-black.png" 
                alt="Zuri Symbol" 
                className="h-12 w-auto"
                onError={(e) => {
                   e.currentTarget.style.display = 'none';
                }}
              />
              <span className="font-serif text-3xl font-semibold tracking-tight">Geospatial Zuri</span>
            </div>
            <p className="text-gray-500 max-w-md text-lg leading-relaxed mb-8">
              Empowering global organizations with precision geospatial intelligence and climate risk advisory to build a more resilient future.
            </p>
            <div className="flex gap-4">
              <div className="w-10 h-10 border border-gray-100 rounded-full flex items-center justify-center hover:bg-sage hover:text-white transition-all cursor-pointer">
                <span className="text-xs font-bold">IN</span>
              </div>
              <div className="w-10 h-10 border border-gray-100 rounded-full flex items-center justify-center hover:bg-sage hover:text-white transition-all cursor-pointer">
                <span className="text-xs font-bold">X</span>
              </div>
            </div>
          </div>
          
          <div>
            <h5 className="font-bold mb-8 uppercase text-[10px] tracking-[0.3em] text-gray-400">Services</h5>
            <ul className="space-y-5 text-sm font-medium text-gray-600">
              <li><a href="#services" className="hover:text-sage transition-colors">Flood Hazard Mapping</a></li>
              <li><a href="#services" className="hover:text-sage transition-colors">Infrastructure Resilience</a></li>
              <li><a href="#services" className="hover:text-sage transition-colors">GIS Data Analytics</a></li>
              <li><a href="#services" className="hover:text-sage transition-colors">Climate Research</a></li>
            </ul>
          </div>

          <div>
            <h5 className="font-bold mb-8 uppercase text-[10px] tracking-[0.3em] text-gray-400">Consultancy</h5>
            <ul className="space-y-5 text-sm font-medium text-gray-600">
              <li><a href="#about" className="hover:text-sage transition-colors">Our Story</a></li>
              <li><a href="#approach" className="hover:text-sage transition-colors">Methodology</a></li>
              <li><a href="#contact" className="hover:text-sage transition-colors">Careers</a></li>
              <li><a href="#contact" className="hover:text-sage transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[11px] text-gray-400 font-medium uppercase tracking-widest">
            © {new Date().getFullYear()} Geospatial Zuri. Precision Climate Risk Intelligence.
          </p>
          <div className="flex items-center gap-4">
             <div className="w-2 h-2 bg-sage rounded-full animate-pulse" />
             <span className="text-[11px] uppercase tracking-widest text-charcoal font-bold">Zuri maps it.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
