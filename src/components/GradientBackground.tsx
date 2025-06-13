import React, { useEffect, useState } from 'react';

const GradientBackground: React.FC = () => {
  const [currentGradient, setCurrentGradient] = useState(() => {
    // Generate random gradient on first load
    return Math.floor(Math.random() * 3);
  });
  
  const gradients = [
    'from-green-400 via-green-500 to-emerald-600',
    'from-purple-400 via-purple-500 to-violet-600',
    'from-gray-400 via-gray-500 to-slate-600'
  ];

  return (
    <div className="fixed inset-0 -z-10">
      <div 
        className={`absolute inset-0 bg-gradient-to-br ${gradients[currentGradient]} transition-all duration-2000 ease-in-out opacity-100`}
      />
      <div className="absolute inset-0 bg-black/10" />
    </div>
  );
};

export default GradientBackground;