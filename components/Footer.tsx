
import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="py-16 border-t border-gray-100 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              {/* Black symbol - user to replace src with actual symbol-black.png */}
              <img 
                src="https://raw.githubusercontent.com/stackblitz/stackblitz-images/main/zuri-symbol-black.png" 
                alt="Zuri Symbol" 
                className="h-8 w-auto grayscale"
                onError={(e) => {
                   e.currentTarget.style.display = 'none';
                }}
              />
              <span className="font-serif text-2xl font-semibold tracking-tight">Geospatial Zuri</span>
            </div>
            <p className="text-gray-500 max-w-md leading-relaxed">
              Empowering organizations with high-precision geospatial intelligence and climate risk advisory to build a more resilient and sustainable future.
            </p>
          </div>
          
          <div>
            <h5 className="font-semibold mb-6 uppercase text-[10px] tracking-widest text-gray-400">Navigation</h5>
            <ul className="space-y-4 text-sm text-gray-600">
              <li><a href="#services" className="hover:text-sage transition-colors">Our Services</a></li>
              <li><a href="#approach" className="hover:text-sage transition-colors">Methodology</a></li>
              <li><a href="#about" className="hover:text-sage transition-colors">About Us</a></li>
              <li><a href="#contact" className="hover:text-sage transition-colors">Get in Touch</a></li>
            </ul>
          </div>

          <div>
            <h5 className="font-semibold mb-6 uppercase text-[10px] tracking-widest text-gray-400">Legal</h5>
            <ul className="space-y-4 text-sm text-gray-600">
              <li><a href="#" className="hover:text-sage transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-sage transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-sage transition-colors">Cookie Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-400">
            © {new Date().getFullYear()} Geospatial Zuri. Professional Geospatial Intelligence.
          </p>
          <div className="flex items-center gap-6">
             <span className="text-[10px] uppercase tracking-widest text-sage font-bold">Mapping the invisible risks of tomorrow.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
