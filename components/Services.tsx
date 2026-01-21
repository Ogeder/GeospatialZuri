
import React from 'react';
import { Waves, Building2, Map, LineChart } from 'lucide-react';

const serviceData = [
  {
    icon: <Waves className="text-sage" size={32} />,
    title: "Flood Risk & Hazard Mapping",
    description: "Detailed analysis of current and future flood vulnerabilities using advanced spatial modeling.",
    features: ["Flood susceptibility mapping", "Historical analysis", "Future risk projections"]
  },
  {
    icon: <Building2 className="text-sage" size={32} />,
    title: "Climate-Resilient Infrastructure",
    description: "Advisory for building strategies that withstand the changing climate and environmental stressors.",
    features: ["Risk-informed site assessment", "Adaptation-ready planning", "Resilience advisory"]
  },
  {
    icon: <Map className="text-sage" size={32} />,
    title: "Geospatial & Data Analytics",
    description: "Leveraging remote sensing and GIS to uncover patterns and actionable environmental insights.",
    features: ["GIS spatial analysis", "Remote sensing applications", "Environmental data modeling"]
  },
  {
    icon: <LineChart className="text-sage" size={32} />,
    title: "Decision Support & Research",
    description: "Turning complex data into clear pathways for policy makers and development organizations.",
    features: ["Technical reports", "Visualizations", "Academic collaborations"]
  }
];

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h4 className="text-sage font-medium tracking-[0.2em] uppercase text-xs mb-4">Our Expertise</h4>
            <h2 className="text-4xl md:text-5xl font-semibold">Practical, science-based solutions for <span className="italic">climate adaptation</span>.</h2>
          </div>
          <p className="text-gray-500 max-w-sm mb-2">
            We bridge the gap between complex climate science and actionable infrastructure decisions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {serviceData.map((service, idx) => (
            <div key={idx} className="p-8 border border-gray-100 hover:border-sage transition-all duration-300 group bg-warm-off-white/30">
              <div className="mb-6 group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
              <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">{service.description}</p>
              <ul className="space-y-3">
                {service.features.map((feature, fIdx) => (
                  <li key={fIdx} className="text-xs flex items-center gap-2 text-gray-400">
                    <div className="w-1 h-1 bg-sage rounded-full" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
