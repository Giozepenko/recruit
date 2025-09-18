import React from 'react';

// Using an <img> tag as requested for the PNG file.
// Assuming the PNG is located at /icons/dollar-sign.png in the public folder.
const DollarSignIcon: React.FC<React.ImgHTMLAttributes<HTMLImageElement>> = (props) => (
  <img src="/icons/dollasign.png" alt="$" {...props} />
);

export default DollarSignIcon;
