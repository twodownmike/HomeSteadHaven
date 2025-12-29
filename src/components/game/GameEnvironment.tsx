import React, { useRef } from 'react';
import { Sky, Stars, Environment, Sparkles } from '@react-three/drei';
import { useGameStore } from '../../store';
import * as THREE from 'three';

export const GameEnvironment: React.FC = () => {
  const day = useGameStore((state) => state.day);
  const directionalLightRef = useRef<THREE.DirectionalLight>(null);

  // Calculate time of day (0 to 1)
  const timeOfDay = day % 1;
  
  // Calculate sun position
  // 0.25 = Sunrise, 0.5 = Noon, 0.75 = Sunset, 0.0/1.0 = Midnight
  // We want the sun to rotate around the X axis (East to West)
  
  // Using typical inclination
  const sunPosition: [number, number, number] = [
    Math.sin(timeOfDay * Math.PI * 2) * 100,
    Math.cos(timeOfDay * Math.PI * 2 + Math.PI) * 100, 
    20 // slight Z offset
  ];

  // Calculate light intensity based on sun height (Y)
  // Max intensity at noon, 0 at night
  const sunHeight = sunPosition[1] / 100; // -1 to 1
  const intensity = Math.max(0, sunHeight);
  const ambientIntensity = Math.max(0.1, intensity * 0.5);

  // Fog color changes based on time
  const fogColor = intensity > 0.2 ? '#87CEEB' : '#050510';

  return (
    <>
      <Sky 
        sunPosition={sunPosition} 
        turbidity={0.5} 
        rayleigh={0.5 + (1 - intensity) * 0.5} // More scattering at sunset/sunrise
        mieCoefficient={0.005} 
        mieDirectionalG={0.7} 
      />
      
      {/* Stars appear at night */}
      {intensity < 0.2 && (
         <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
      )}

      {/* Fireflies/Sparkles at night */}
      {intensity < 0.3 && (
        <Sparkles 
          count={100}
          scale={50}
          size={4}
          speed={0.4}
          opacity={0.7}
          color="#ffff00"
          position={[0, 5, 0]}
        />
      )}

      <Environment preset="forest" background={false} />
      
      <ambientLight intensity={ambientIntensity} color={intensity < 0.2 ? "#1a1a2e" : "#ffffff"} />
      
      <directionalLight 
        ref={directionalLightRef}
        position={sunPosition} 
        intensity={intensity * 2} 
        castShadow 
        shadow-mapSize={[2048, 2048]}
        shadow-bias={-0.0001}
      >
        <orthographicCamera attach="shadow-camera" args={[-50, 50, 50, -50]} />
      </directionalLight>

      {/* Fog for depth */}
      <fog attach="fog" args={[fogColor, 10, 80]} />
    </>
  );
};
