import React from 'react';
import AnimatedSection from './AnimatedSection';
import PillIcon from './icons/PillIcon';
import XIcon from './icons/XIcon';
import LivePumpFunIcon from './icons/PumpFunIcon';
import dollaSign from './icons/dollasign.png'; // use PNG instead of component

const HowToBuy: React.FC = () => {
  const coinUrl = "https://pump.fun/3xqp9ybyD9ijcwwt2GVja1WFVioFZxgc283Jma2Spump";

  const steps = [
    'DOWNLOAD PUMP.FUN',
    'OPEN PUMP.FUN',
    'CREATE ACCOUNT',
    'CLICK PROFILE ICON',
    'SELECT "INSTANT DEPOSIT"',
    'CHOOSE AMOUNT TO DEPOSIT',
    'CONFIRM TRANSACTION',
    'APE',
  ];

  return (
    <AnimatedSection className="bg-[#1e1e1e] border-2 border-green-500 p-11 rounded-lg flex flex-col justify-between">
      <div>
        <h3 className="font-display text-5xl text-center text-white mb-8 flex items-center justify-center">
          <img
            src={dollaSign}
            alt="Recruit Logo"
            className="h-[0.9em] w-auto mr- object-contain relative top-[-0.05em]"  // mr-2 → mr-4
          />
          RECRUIT
        </h3>
        <ul className="space-y-4">
          {steps.map((step, index) => (
            <li key={index} className="flex items-center">
              <PillIcon className="w-8 h-8 mr-4 text-green-400" />
              <span className="font-display text-xl tracking-wide text-gray-200">{step}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-12 text-center">
        <div className="border-t border-green-700 w-1/2 mx-auto"></div>
        <p className="font-display text-green-400 mt-4">SIGN UP TO JOIN THE TRENCHES</p>
        <div className="mt-6 flex justify-center items-center space-x-4">
          <div className="flex items-center space-x-3">
            <a
              href="https://x.com/RECRUIT_PF"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X page"
            >
              <XIcon className="w-5 h-5 hover:text-green-400 transition-colors" />
            </a>
            <span className="font-display text-white-400 ">RECRUIT_PF</span>
          </div>
          <a
            href={coinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 transition-opacity"
          >
            <LivePumpFunIcon />
          </a>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default HowToBuy;
