import React from 'react';
import AnimatedSection from './AnimatedSection';
import PillIcon from './icons/PillIcon';
import helmetLogo from './icons/HelmetLogo.svg';

const BringBack: React.FC = () => {
  const coinUrl = "https://pump.fun/Will be updated within 5 minutes after launch/check X for CA";

  return (
    <section className="py-20 sm:py-32 bg-gradient-to-b from-green-500 to-emerald-600 text-center" style={{backgroundImage: 'url("https://www.transparenttextures.com/patterns/green-gobbler.png")'}}>
      <AnimatedSection className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-display text-5xl md:text-7xl text-white drop-shadow-md">
          JOIN THE TRENCHES
        </h2>
        <div className="mt-12 flex justify-center relative">
          <PillIcon className="absolute -top-10 -z-0 w-48 h-48 opacity-20" />
          <img src={helmetLogo} alt="$RECRUIT Helmet Logo" className="w-full max-w-lg drop-shadow-2xl" />
        </div>
        <p className="mt-8 text-white text-lg leading-relaxed max-w-2xl mx-auto">
          Pump.fun was built to shake up everything. However, not enough people know about it yet. It is our duty as trenchers to recruit the normies and show them this new amazing world that could change their lives in the long run - the same way it changed our lives.
        </p>
        <p className="mt-4 text-white text-lg font-bold">Recruiting normies - one new trencher at a time!.</p>
        <div className="mt-10">
          <a href={coinUrl} target="_blank" rel="noopener noreferrer" className="bg-white text-green-600 font-bold py-3 px-8 rounded-full hover:bg-gray-200 transition-all duration-300 transform hover:scale-105 text-lg">
            ENLIST NOW
          </a>
        </div>
      </AnimatedSection>
    </section>
  );
};

export default BringBack;