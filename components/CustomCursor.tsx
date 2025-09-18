import React, { useState, useEffect } from 'react';
import PillIcon from './icons/PillIcon';

const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 }); // Start off-screen

  useEffect(() => {
    const updateMousePosition = (ev: MouseEvent) => {
      setPosition({ x: ev.clientX, y: ev.clientY });
    };
    window.addEventListener('mousemove', updateMousePosition);
    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, []);

  return (
    <div
      className="custom-cursor-wrapper"
      style={{ transform: `translate3d(${position.x}px, ${position.y}px, 0)` }}
    >
      <div className="custom-cursor-rotator">
        <PillIcon className="w-8 h-8" />
      </div>
    </div>
  );
};

export default CustomCursor;
