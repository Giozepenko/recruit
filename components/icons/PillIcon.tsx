import React from 'react';

const PillIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    viewBox="0 0 32 32"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g transform="rotate(45 16 16)">
      {/* Green part */}
      <path 
        d="M8,16 L8,24 C8,28.4183 11.5817,32 16,32 C20.4183,32 24,28.4183 24,24 L24,16 Z" 
        fill="#00B140"
      />
      {/* Grey part */}
      <path 
        d="M24,16 L24,8 C24,3.58172 20.4183,0 16,0 C11.5817,0 8,3.58172 8,8 L8,16 Z" 
        fill="#DCDFE4"
      />
      {/* Outline */}
      <path 
        d="M16,0 C11.5817,0 8,3.58172 8,8 L8,24 C8,28.4183 11.5817,32 16,32 C20.4183,32 24,28.4183 24,24 L24,8 C24,3.58172 20.4183,0 16,0 Z" 
        stroke="#232947" 
        strokeWidth="3" 
        fill="none" 
      />
      {/* Center line */}
      <line 
        x1="8" 
        y1="16" 
        x2="24" 
        y2="16" 
        stroke="#232947" 
        strokeWidth="3" 
      />
    </g>
  </svg>
);

export default PillIcon;