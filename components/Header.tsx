import React from 'react';
import XIcon from './icons/XIcon';
import PillIcon from './icons/PillIcon';
// import DollarSignIcon from './icons/DollarSignIcon'; // remove this
import dollaSign from './icons/dollasign.png'; // ✅ import your PNG instead

const Header: React.FC = () => {
  const coinUrl = "https://pump.fun/Will be updated within 5 minutes after launch/check X for CA";

  return (
    <header className="py-4 px-4 sm:px-6 lg:px-8 bg-[#1a1a1a] bg-opacity-80 backdrop-blur-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <h1 className="font-display text-4xl text-green-400 flex items-center">
          <img
            src={dollaSign}
            alt="Recruit Logo"
            className="h-8 w-auto mr object-contain"  // increase mr-2 → mr-4
          />
          RECRUIT
        </h1>

        {/* Right-side links */}
        <div className="flex items-center space-x-4">
          {/* X link */}
          <a
            href="https://x.com/RECRUIT_PF"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="X page"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <XIcon className="w-5 h-5" />
          </a>

          {/* pump.fun link */}
          <a
            href={coinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-.4 text-gray-400 hover:text-white transition-colors font-bold"
          >
            <PillIcon className="w-5 h-5" />
            <span>pump.fun</span>
          </a>

          {/* Buy Now button */}
          <a
            href={coinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 text-black font-bold py-1 px-3 rounded-full hover:bg-green-400 transition-all duration-300 transform hover:scale-105"
          >
            Buy Now
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
