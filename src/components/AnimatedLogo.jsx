import React, { useState, useEffect } from 'react';

const AnimatedLogo = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setMousePosition({
      x: (window.innerWidth - e.pageX) / 100,
      y: (window.innerHeight - e.pageY) / 100,
    });
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div
      style={{
        transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
        transition: 'transform 0.2s ease-out',
      }}
      className="w-[953px] h-[1000px] md:w-[953px] md:h-[1000px]"
    >
      <img 
        src="/logo.jpg" 
        alt="Logo" 
        className="w-full h-full object-contain"
      />
    </div>
  );
};

export default AnimatedLogo;