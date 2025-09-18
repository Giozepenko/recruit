import React from 'react';
import PillIcon from './PillIcon';

const LivePumpFunIcon: React.FC<{className?: string}> = ({ className }) => {
  return (
    <div className={`flex items-center space-x-2 ${className}`}>
        <div className="flex items-center space-x-1.5 text-white font-display text-base tracking-wider">
            <span className="text-red-500">[</span>
            <div className="w-2 h-2 rounded-full bg-red-500 live-pulse"></div>
            <span>LIVE</span>
            <span className="text-red-500">]</span>
        </div>
      <PillIcon className="w-6 h-6"/>
      <span className="font-bold font-sans">Pump.fun</span>
    </div>
  );
};

export default LivePumpFunIcon;
