
import React from 'react';

export const FieldIntelligence: React.FC = () => {
  return (
    <section className="py-32 bg-warm-off-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-3xl">
            <h4 className="text-sage font-medium tracking-[0.3em] uppercase text-xs mb-6">Field Intelligence</h4>
            <h2 className="text-5xl md:text-6xl font-semibold leading-tight">Grounded in <span className="italic text-sage">Real-World Observation</span>.</h2>
          </div>
          <p className="text-gray-500 max-w-sm mb-2 text-lg font-light leading-relaxed">
            Visual data collection is at the core of our ground-truthing process, ensuring models reflect reality.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div className="space-y-8">
            <div className="aspect-[16/10] bg-gray-200 overflow-hidden rounded-sm shadow-xl group border-b-8 border-sage">
              <img 
                src="flood-wetland.jpg" 
                alt="Wetland environment" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                onError={(e) => {
                   e.currentTarget.src = "https://picsum.photos/seed/wetland/800/450";
                }}
              />
            </div>
            <div>
              <div className="inline-block px-3 py-1 bg-sage/10 text-sage text-[10px] font-bold uppercase tracking-widest mb-4">Case Study: 01</div>
              <h3 className="text-3xl font-serif mb-3">Ecosystem Health Monitoring</h3>
              <p className="text-gray-600 leading-relaxed text-lg">Analyzing the natural buffer zones of wetlands in coastal regions to predict flood mitigation capacity.</p>
            </div>
          </div>

          <div className="space-y-8 md:mt-32">
            <div className="aspect-[16/10] bg-gray-200 overflow-hidden rounded-sm shadow-xl group border-b-8 border-charcoal">
              <img 
                src="flood-tree.jpg" 
                alt="Climate impact" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                onError={(e) => {
                   e.currentTarget.src = "https://picsum.photos/seed/impact/800/450";
                }}
              />
            </div>
            <div>
              <div className="inline-block px-3 py-1 bg-charcoal/10 text-charcoal text-[10px] font-bold uppercase tracking-widest mb-4">Case Study: 02</div>
              <h3 className="text-3xl font-serif mb-3">Vulnerability Mapping</h3>
              <p className="text-gray-600 leading-relaxed text-lg">Visualizing the long-term stress of rising water tables on indigenous flora and essential infrastructure.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
