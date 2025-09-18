import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-500">
        <p>&copy; {new Date().getFullYear()} RECRUITING THE NORMIES</p>
      </div>
    </footer>
  );
};

export default Footer;