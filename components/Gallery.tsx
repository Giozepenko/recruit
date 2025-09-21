import React, { useState } from 'react';
import AnimatedSection from './AnimatedSection';

const Gallery: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  // Assumes images 1.jpg through 9.jpg are in a /gallery/ folder inside /public/
  const images = [
    'Screenshot_2025-09-18_173723.png',
    'Screenshot_2025-09-18_173801.png',
    '3333333333333333.png',
    'Screenshot_2025-09-18_174707.png',
    'Screenshot_2025-09-18_173850.png',
    'Screenshot 2025-09-19 015539.png',
    '66666666.png',
    '7777777777777.png',
    '88888888888888888888.png',
    'Screenshot_2025-09-18_175224.png',
    'Screenshot_2025-09-18_180604.png',
    'Screenshot_2025-09-18_181252.png',
    'Screenshot_2025-09-18_182123.png',
    'Screenshot 2025-09-18 211253.png',
    'Screenshot 2025-09-18 211525.png',
    'Screenshot 2025-09-18 211642.png',
    'Screenshot 2025-09-18 211738.png',
    'Screenshot 2025-09-18 211836.png',
    'Screenshot 2025-09-18 155555.png',
    '1.png',
    '2.png',
    '3.png',
    '4.png',
    '13.png',
    '23.png',
    '52.png',
    '51.png',
    '45.png',
    '44.png',
    '43.png',
    '42.png',
    '41.png',
    '33.png'
  ];

  const imagesToShow = isExpanded ? images : images.slice(0, 6);

  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <section className="py-20 sm:py-28 bg-[#111]">
      <AnimatedSection className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-display text-5xl md:text-7xl text-green-400 drop-shadow-md mb-12">
          RECRUITS
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {imagesToShow.map((src, index) => (
            <div key={index} className="bg-[#1e1e1e] border-2 border-green-500 overflow-hidden rounded-lg shadow-lg group">
              <img
                src={src}
                alt={`Gallery image ${index + 1}`}
                className="w-full h-full aspect-square object-contain transform group-hover:scale-110 transition-transform duration-300 ease-in-out"
                loading="lazy"
              />
            </div>
          ))}
        </div>
        {images.length > 6 && (
          <div className="mt-12">
            <button
              onClick={toggleExpansion}
              className="bg-green-500 text-black font-bold py-3 px-8 rounded-full hover:bg-green-400 transition-all duration-300 transform hover:scale-105 text-lg"
            >
              {isExpanded ? 'SHOW LESS' : 'SHOW MORE'}
            </button>
          </div>
        )}
      </AnimatedSection>
    </section>
  );
};

export default Gallery;
