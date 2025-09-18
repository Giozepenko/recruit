import React from 'react';
import dollaSign from './icons/dollasign.png'; // use PNG instead of component

const Marquee: React.FC = () => {
  const MarqueeSegment: React.FC = () => (
    <span className="font-display text-2xl md:text-3xl tracking-wider text-white flex items-center flex-shrink-0 mx-2">
      RECRUITING NORMIES TO THE TRENCHES IRL •
      <img
        src={dollaSign}
        alt="Recruit Logo"
        className="h-[0.99em] w-auto mx-0 object-contain relative top-[-0.05em]"
      />
      RECRUIT •
    </span>
  );

  return (
    <div className="bg-black py-4 overflow-hidden whitespace-nowrap">
      <div className="marquee-track flex">
        <div className="marquee-item flex">
          {Array.from({ length: 10 }).map((_, i) => (
            <MarqueeSegment key={`a-${i}`} />
          ))}
        </div>
        <div className="marquee-item flex" aria-hidden="true">
          {Array.from({ length: 10 }).map((_, i) => (
            <MarqueeSegment key={`b-${i}`} />
          ))}
        </div>
      </div>
      <style jsx>{`
        .marquee-track {
          display: flex;
          width: max-content;
          animation: marquee 44s linear infinite; /* faster + seamless */
        }
        @keyframes marquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
        .marquee-item {
          display: flex;
        }
      `}</style>
    </div>
  );
};

export default Marquee;
