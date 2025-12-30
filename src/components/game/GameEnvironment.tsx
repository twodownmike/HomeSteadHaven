import React, { useRef, useMemo, useState, useEffect } from 'react';
import { Sky, Stars, Environment, Sparkles, Cloud } from '@react-three/drei';
import { useFrame, useThree } from '@react-three/fiber';
import { useGameStore } from '../../store';
import * as THREE from 'three';

const Birds: React.FC = () => {
  const count = 5;
  const birds = useMemo(() => Array.from({ length: count }).map(() => ({
    speed: 0.5 + Math.random() * 0.5,
    radius: 20 + Math.random() * 20,
    offset: Math.random() * Math.PI * 2,
    y: 10 + Math.random() * 10,
  })), []);

  const groupRef = useRef<THREE.Group>(null);

  useFrame((state: any) => {
    if (!groupRef.current) return;
    const t = state.clock.elapsedTime;
    groupRef.current.children.forEach((bird, i) => {
      const data = birds[i];
      const angle = t * data.speed + data.offset;
      bird.position.x = Math.cos(angle) * data.radius;
      bird.position.z = Math.sin(angle) * data.radius;
      bird.position.y = data.y + Math.sin(t * 2 + data.offset) * 2;
      bird.rotation.y = -angle + Math.PI / 2;
      // Simple wing flap
      const wing = bird.children[0];
      if (wing) wing.rotation.z = Math.sin(t * 10) * 0.5;
      const wing2 = bird.children[1];
      if (wing2) wing2.rotation.z = -Math.sin(t * 10) * 0.5;
    });
  });

  return (
    <group ref={groupRef}>
      {birds.map((_, i) => (
        <group key={i}>
          {/* Bird Body */}
          <mesh>
            <boxGeometry args={[0.2, 0.1, 0.4]} />
            <meshStandardMaterial color="#333" />
          </mesh>
          {/* Wings */}
          <mesh position={[0.15, 0, 0]}>
            <boxGeometry args={[0.3, 0.02, 0.2]} />
            <meshStandardMaterial color="#444" />
          </mesh>
          <mesh position={[-0.15, 0, 0]}>
            <boxGeometry args={[0.3, 0.02, 0.2]} />
            <meshStandardMaterial color="#444" />
          </mesh>
        </group>
      ))}
    </group>
  );
};

const Lightning: React.FC<{ active: boolean }> = ({ active }) => {
  const [visible, setVisible] = useState(false);
  const { camera } = useThree();
  const originalPos = useRef(new THREE.Vector3());

  useEffect(() => {
    if (!active) return;
    const trigger = () => {
      if (Math.random() > 0.98) {
        setVisible(true);
        originalPos.current.copy(camera.position);
        setTimeout(() => setVisible(false), 100 + Math.random() * 200);
      }
    };
    const interval = setInterval(trigger, 500);
    return () => clearInterval(interval);
  }, [active, camera]);

  useFrame(() => {
    if (visible) {
      camera.position.x += (Math.random() - 0.5) * 0.5;
      camera.position.z += (Math.random() - 0.5) * 0.5;
    }
  });

  if (!visible) return null;

  return (
    <pointLight position={[0, 50, 0]} intensity={50} color="#fff" distance={200} />
  );
};

export const GameEnvironment: React.FC = () => {
  const { day, weather } = useGameStore();
  const directionalLightRef = useRef<THREE.DirectionalLight>(null);

  // Calculate time of day (0 to 1)
  const timeOfDay = day % 1;
  
  // Calculate sun position
  // 0.25 = Sunrise, 0.5 = Noon, 0.75 = Sunset, 0.0/1.0 = Midnight
  const sunPosition: [number, number, number] = [
    Math.sin(timeOfDay * Math.PI * 2) * 100,
    Math.cos(timeOfDay * Math.PI * 2 + Math.PI) * 100, 
    20 // slight Z offset
  ];

  // Calculate light intensity based on sun height (Y)
  const sunHeight = sunPosition[1] / 100; // -1 to 1
  let intensity = Math.max(0, sunHeight);
  
  // Weather adjustments
  if (weather !== 'sunny') {
      intensity *= 0.5; // Darker when raining/snowing
  }

  const ambientIntensity = Math.max(0.1, intensity * 0.5);

  // Fog color changes based on time and weather
  let fogColor = intensity > 0.2 ? '#87CEEB' : '#050510';
  if (weather === 'rain') fogColor = '#708090'; // SlateGray
  if (weather === 'snow') fogColor = '#E0FFFF'; // LightCyan (foggy snow)
  if (weather !== 'sunny' && intensity < 0.2) fogColor = '#050510'; // Night is still dark

  return (
    <>
      <Birds />
      <Lightning active={weather === 'rain'} />
      <Sky 
        sunPosition={sunPosition} 
        turbidity={weather !== 'sunny' ? 10 : 0.5} 
        rayleigh={weather !== 'sunny' ? 0.1 : 0.5 + (1 - intensity) * 0.5} 
        mieCoefficient={0.005} 
        mieDirectionalG={0.7} 
      />
      
      {/* Stars appear at night */}
      {intensity < 0.2 && weather === 'sunny' && (
         <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
      )}

      {/* Fireflies/Sparkles at night (Clear weather only) */}
      {intensity < 0.3 && weather === 'sunny' && (
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

      {/* Rain Effect */}
      {weather === 'rain' && (
        <>
            <Sparkles 
                count={2000}
                scale={[50, 20, 50]}
                size={2}
                speed={2} // Fast falling
                opacity={0.6}
                color="#aaaaaa"
                position={[0, 10, 0]}
            />
            <Cloud position={[-10, 15, -10]} opacity={0.5} speed={0.2} />
            <Cloud position={[10, 15, 10]} opacity={0.5} speed={0.2} />
        </>
      )}

      {/* Snow Effect */}
      {weather === 'snow' && (
        <>
            <Sparkles 
                count={2000}
                scale={[50, 20, 50]}
                size={4}
                speed={0.5} // Slow falling
                opacity={0.8}
                color="#ffffff"
                position={[0, 10, 0]}
            />
            <Cloud position={[-10, 15, -10]} opacity={0.3} speed={0.1} color="#ffffff" />
            <Cloud position={[10, 15, 10]} opacity={0.3} speed={0.1} color="#ffffff" />
        </>
      )}

      <Environment preset={weather === 'sunny' ? "forest" : "city"} background={false} />
      
      <ambientLight intensity={ambientIntensity} color={weather === 'snow' ? "#E0FFFF" : (intensity < 0.2 ? "#1a1a2e" : "#ffffff")} />
      
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
