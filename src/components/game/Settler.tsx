import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Html } from '@react-three/drei';
import * as THREE from 'three';
import { Settler as SettlerType } from '../../types';

interface SettlerProps {
    settler: SettlerType;
}

export const Settler: React.FC<SettlerProps> = ({ settler }) => {
    const meshRef = useRef<THREE.Group>(null);
    
    // Smooth interpolation for movement could go here, 
    // but we are updating position directly in store for now which triggers re-renders.
    // For smoother movement, we might want to interpolate in useFrame based on target.
    // However, since we are doing 60fps React renders for the game loop, direct prop update might be "okay" for low count.
    // Optimization: Store updates at lower tick rate, visual interpolation here.
    
    useFrame((state) => {
        if (meshRef.current) {
            // Simple bobbing animation
            meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 5) * 0.1;
            
            // Face direction of movement if walking
            if (settler.state === 'walking' && settler.targetPosition) {
                meshRef.current.lookAt(settler.targetPosition[0], 0, settler.targetPosition[2]);
            }
        }
    });

    return (
        <group position={settler.position} ref={meshRef}>
            {/* Body */}
            <mesh position={[0, 0.5, 0]} castShadow>
                <capsuleGeometry args={[0.2, 0.6, 4, 8]} />
                <meshStandardMaterial color="#3b82f6" />
            </mesh>
            
            {/* Head */}
            <mesh position={[0, 0.9, 0]} castShadow>
                <sphereGeometry args={[0.2, 16, 16]} />
                <meshStandardMaterial color="#ffdbac" />
            </mesh>
            
            {/* Name Tag */}
            <Html position={[0, 1.4, 0]} center distanceFactor={10}>
                <div className="bg-black/50 text-white text-[10px] px-1 rounded backdrop-blur-sm whitespace-nowrap pointer-events-none">
                    {settler.name}
                </div>
            </Html>
            
            {/* Shadow blob */}
            <mesh position={[0, 0.01, 0]} rotation={[-Math.PI/2, 0, 0]}>
                <circleGeometry args={[0.25, 16]} />
                <meshBasicMaterial color="black" opacity={0.3} transparent />
            </mesh>
        </group>
    );
};
