import React, { useState, useEffect } from 'react';
import AnimatedSection from './AnimatedSection';
import helmetLogo from './icons/HelmetLogo.svg';

const Hero: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  const contractAddress = 'Updated 5 min post-launch/check X';

  const handleCopy = () => {
    navigator.clipboard.writeText(contractAddress).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Calculate dynamic styles based on scroll
  const bgZoom = 1 + scrollY / 2000; // Gentle zoom in
  const parallaxOffset = scrollY * 0.3; // Parallax speed for the texture

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 pt-20 pb-12 overflow-hidden">
      
      {/* BACKGROUND LAYERS */}
      {/* Layer 1: Main Background Image (Your image will go here) */}
      {/* This layer will have a subtle zoom effect on scroll */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          // TODO: Replace this placeholder URL with the image you will provide.
          backgroundImage: 'url("https://www.transparenttextures.com/patterns/asfalt-light.png")',
          transform: `scale(${bgZoom})`,
          willChange: 'transform',
        }}
      ></div>

      {/* Layer 2: Parallax Texture Overlay */}
      {/* This layer moves at a different speed to create a depth effect. */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{
          backgroundImage: 'url("https://www.transparenttextures.com/patterns/subtle-carbon.png")',
          transform: `translateY(${parallaxOffset}px)`,
          willChange: 'transform',
        }}
      ></div>

      {/* Layer 3: Darkening Overlay */}
      {/* This ensures the text on top is always readable. */}
      <div className="absolute inset-0 bg-black opacity-60"></div>

      {/* HERO CONTENT */}
      <AnimatedSection className="relative z-10">
        <h2 className="font-display text-5xl md:text-7xl lg:text-8xl leading-tight drop-shadow-lg">
          RECRUITING NORMIES
        </h2>
        <h2 className="font-display text-5xl md:text-7xl lg:text-8xl leading-tight text-green-400 drop-shadow-lg mt-2">
          TO THE TRENCHES IRL.
        </h2>
        
        <div className="mt-12 flex justify-center">
            <img src={helmetLogo} alt="$RECRUIT Helmet Logo" className="w-full max-w-lg drop-shadow-2xl" />
        </div>

        <div className="mt-12 max-w-md mx-auto">
          <div className="flex items-center bg-gray-900 border border-gray-700 rounded-lg p-2">
            <input 
              type="text" 
              readOnly 
              value={contractAddress}
              className="bg-transparent text-gray-400 text-sm w-full outline-none truncate"
            />
            <button
              onClick={handleCopy}
              className="bg-green-500 text-black font-bold text-sm py-2 px-4 rounded-md hover:bg-green-400 transition-colors w-28 flex-shrink-0"
            >
              {copied ? 'Copied!' : 'Copy CA'}
            </button>
          </div>
        </div>

        <p className="mt-6 max-w-xl mx-auto text-gray-300">
          We're hitting the streets and livestreaming on pump.fun, finding random people and giving them SOL from the $RECRUIT creator rewards to welcome them to the trenches. 
        </p>
      </AnimatedSection>
    </section>
  );
};

export default Hero;