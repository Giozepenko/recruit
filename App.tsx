import React, { useState, MouseEvent } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import MemeRevival from './components/MemeRevival';
import Marquee from './components/Marquee';
import BringBack from './components/BringBack';
import HowToBuy from './components/HowToBuy';
import TrenchTerms from './components/TrenchTerms';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import Gallery from './components/Gallery';

interface PlusOne {
  id: number;
  x: number;
  y: number;
}

const App: React.FC = () => {
  const [plusOnes, setPlusOnes] = useState<PlusOne[]>([]);
  let plusOneIdCounter = 0;

  const handleClick = (e: MouseEvent<HTMLDivElement>) => {
    // This check prevents the "+1" from firing when clicking on interactive elements like buttons or links
    if (e.target instanceof HTMLInputElement || e.target instanceof HTMLButtonElement || e.target instanceof HTMLAnchorElement) {
        return;
    }
      
    const newId = Date.now() + Math.random(); // More robust unique ID
    
    // Add randomness to the position to avoid stacking
    const x = e.clientX + (Math.random() - 0.5) * 40;
    const y = e.clientY + (Math.random() - 0.5) * 40;
    
    const newPlusOne: PlusOne = { id: newId, x, y };

    setPlusOnes(prev => [...prev, newPlusOne]);

    setTimeout(() => {
      setPlusOnes(prev => prev.filter(p => p.id !== newId));
    }, 1000); // Duration of the animation
  };
  
  return (
    <div className="bg-black text-white font-sans min-h-screen" onClick={handleClick}>
      <CustomCursor />
      {plusOnes.map(p => (
        <div 
          key={p.id} 
          className="plus-one-animation" 
          style={{ left: p.x, top: p.y }}
        >
          +1
        </div>
      ))}
      <Header />
      <main>
        <Hero />
        <Marquee />
        <MemeRevival />
        <section className="py-20 sm:py-28 bg-[#111]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-start justify-center gap-8 md:gap-40">
                <HowToBuy />
                <TrenchTerms />
            </div>
        </section>
        <BringBack />
        <Gallery />
      </main>
      <Footer />
    </div>
  );
};

export default App;
