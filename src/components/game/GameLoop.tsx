import { useEffect } from 'react';
import { useGameStore } from '../../store';

export const GameLoop = () => {
  const tick = useGameStore((state) => state.tick);

  useEffect(() => {
    const interval = setInterval(() => {
      tick();
    }, 1000); // 1 tick per second

    return () => clearInterval(interval);
  }, [tick]);

  return null;
};
