
import React from 'react';

export const FieldIntelligence: React.FC = () => {
  return (
    <section className="py-24 bg-warm-off-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h4 className="text-sage font-medium tracking-[0.2em] uppercase text-xs mb-4">Field Intelligence</h4>
            <h2 className="text-4xl md:text-5xl font-semibold">Grounded in <span className="italic">Real-World Observation</span>.</h2>
          </div>
          <p className="text-gray-500 max-w-sm mb-2 text-right">
            Visual data collection is at the core of our ground-truthing process.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div className="aspect-video bg-gray-200 overflow-hidden rounded-sm shadow-lg group">
              {/* Wetland Image - User to replace with flood-2.jpg */}
              <img 
                src="https://raw.githubusercontent.com/stackblitz/stackblitz-images/main/zuri-flood-2.jpg" 
                alt="Wetland environment" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                onError={(e) => {
                   e.currentTarget.src = "https://picsum.photos/seed/wetland/800/450";
                }}
              />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Ecosystem Monitoring</h3>
              <p className="text-sm text-gray-500 italic">Analyzing the health of natural buffer zones and wetlands in coastal regions.</p>
            </div>
          </div>

          <div className="space-y-6 md:mt-24">
            <div className="aspect-video bg-gray-200 overflow-hidden rounded-sm shadow-lg group">
              {/* Dead tree image - User to replace with flood-3.jpg */}
              <img 
                src="https://raw.githubusercontent.com/stackblitz/stackblitz-images/main/zuri-flood-3.jpg" 
                alt="Climate impact" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                onError={(e) => {
                   e.currentTarget.src = "https://picsum.photos/seed/impact/800/450";
                }}
              />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Impact Assessment</h3>
              <p className="text-sm text-gray-500 italic">Visualizing the long-term effects of rising water levels on local flora and infrastructure.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
