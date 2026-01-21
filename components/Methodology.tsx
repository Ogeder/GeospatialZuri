
import React from 'react';

const steps = [
  {
    number: "01",
    title: "Understand the Context",
    description: "We begin by identifying the specific social, physical, and economic risk factors unique to your location."
  },
  {
    number: "02",
    title: "Analyze Spatial & Climate Data",
    description: "Our team applies GIS, remote sensing, and ML to process layers of historical and predictive data."
  },
  {
    number: "03",
    title: "Translate Insights into Decisions",
    description: "We turn complex data visualizations into clear, risk-informed advisory for infrastructure planning."
  },
  {
    number: "04",
    title: "Support Implementation",
    description: "Continuous monitoring and learning ensure that resilience strategies remain effective over time."
  }
];

export const Methodology: React.FC = () => {
  return (
    <section id="approach" className="py-24 bg-charcoal text-white">
      <div className="container mx-auto px-6">
        <div className="mb-20">
          <h4 className="text-sage font-medium tracking-[0.2em] uppercase text-xs mb-4">Our Methodology</h4>
          <h2 className="text-4xl md:text-5xl font-semibold max-w-3xl">How we create <span className="italic">impact</span>.</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-0 divide-y md:divide-y-0 md:divide-x divide-white/10">
          {steps.map((step, idx) => (
            <div key={idx} className="py-12 md:py-0 md:px-10 first:pl-0 last:pr-0">
              <span className="text-sage font-serif text-5xl opacity-50 block mb-6">{step.number}</span>
              <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-20 p-8 border border-white/10 bg-white/5 rounded-sm flex flex-col md:flex-row items-center justify-between gap-8">
          <p className="text-lg font-light max-w-2xl italic">
            "This structured approach helps technical and institutional clients trust our process and the data-driven outcomes we deliver."
          </p>
          <a href="#contact" className="text-sage border-b border-sage hover:text-white hover:border-white transition-all pb-1 font-medium">
            Learn more about our framework
          </a>
        </div>
      </div>
    </section>
  );
};
