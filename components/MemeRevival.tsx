import React from 'react';
import AnimatedSection from './AnimatedSection';
import PillIcon from './icons/PillIcon';

const MemeRevival: React.FC = () => {
  return (
    <section className="bg-emerald-900 py-20 sm:py-28">
      <AnimatedSection className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="flex justify-center md:justify-start">
          <PillIcon className="w-64 h-64 md:w-80 md:h-80 coin-float text-green-400" />
        </div>
        <div className="text-center md:text-left">
          <h3 className="font-display text-4xl md:text-5xl text-green-400">The Recruitment</h3>
          <p className="mt-6 text-gray-300 leading-relaxed">
            We are helping them take their first steps in the trenches by funding their pump.fun wallets with $100.
          </p>
        </div>
      </AnimatedSection>
    </section>
  );
};

export default MemeRevival;