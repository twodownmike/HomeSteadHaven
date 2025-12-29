import { useEffect } from 'react';
import { useGameStore } from '../../store';

export const GameLoop = () => {
  const tick = useGameStore((state) => state.tick);
  const tickRate = useGameStore((state) => state.tickRate);

  useEffect(() => {
    const interval = setInterval(() => {
      tick();
    }, tickRate);

    return () => clearInterval(interval);
  }, [tick, tickRate]);

  return null;
};
