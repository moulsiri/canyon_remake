import React from 'react';
import Image from 'next/image';

const mindStates = [
  { id: 1, src: '/assets/REset.png', alt: 'Reset Pathway' },
  { id: 2, src: '/assets/REconnect.png', alt: 'Reconnect Pathway' },
  { id: 3, src: '/assets/Discover.png', alt: 'Discover Pathway' },
  { id: 4, src: '/assets/strength.png', alt: 'Strength Pathway' },
  { id: 5, src: '/assets/transform.png', alt: 'Transform Pathway' },
  { id: 6, src: '/assets/Re.png', alt: 'Re Pathway' },
];

const StateOfMind = () => {
  return (
    <div className="w-full mt-16 mb-24 max-w-[1400px] mx-auto px-4 md:px-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {mindStates.map((state) => (
          <div 
            key={state.id} 
            className="group relative w-full aspect-[5/5] overflow-hidden rounded-3xl shadow-xl cursor-pointer"
          >
            <div className="absolute inset-0 bg-stone-900/10 group-hover:bg-transparent z-10 transition-colors duration-500"></div>
            <Image 
              src={state.src} 
              alt={state.alt}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 30vw, 33vw"
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default StateOfMind;