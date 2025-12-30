import React, { useState, useEffect } from 'react';
import { Html } from '@react-three/drei';

interface FloatingTextProps {
  text: string;
  position: [number, number, number];
  color?: string;
  onComplete?: () => void;
}

export const FloatingText: React.FC<FloatingTextProps> = ({ text, position, color = 'text-white', onComplete }) => {
  const [offset, setOffset] = useState(0);
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    let startTime = Date.now();
    const duration = 1000;

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      setOffset(progress * 1.5);
      setOpacity(1 - progress);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else if (onComplete) {
        onComplete();
      }
    };

    const animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, [onComplete]);

  return (
    <Html position={[position[0], position[1] + offset, position[2]]} center distanceFactor={10} zIndexRange={[100, 0]}>
      <div 
        className={`${color} font-bold text-sm pointer-events-none whitespace-nowrap drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]`}
        style={{ opacity }}
      >
        {text}
      </div>
    </Html>
  );
};
