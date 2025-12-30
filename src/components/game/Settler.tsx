import React, { useMemo, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Html } from '@react-three/drei';
import * as THREE from 'three';
import { Settler as SettlerType } from '../../types';
import { useGameStore } from '../../store';
import { useAudioManager } from '../../hooks/useAudio';
import { Utensils, Zap, Pill } from 'lucide-react';

interface SettlerProps {
    settler: SettlerType;
}

export const Settler: React.FC<SettlerProps> = ({ settler }) => {
    const buildings = useGameStore(state => state.buildings);
    const { playSound } = useAudioManager();
    const groupRef = useRef<THREE.Group>(null);
    const lastHammerSound = useRef<number>(0);
    const bodyRef = useRef<THREE.Group>(null);
    const leftArmRef = useRef<THREE.Mesh>(null);
    const rightArmRef = useRef<THREE.Mesh>(null);
    const leftLegRef = useRef<THREE.Mesh>(null);
    const rightLegRef = useRef<THREE.Mesh>(null);

    // Visual variety based on ID
    const colors = useMemo(() => {
        // Use hash of ID to pick consistent colors
        const hash = settler.id.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
        const shirtColors = ['#3b82f6', '#ef4444', '#10b981', '#f59e0b', '#6366f1', '#8b5cf6'];
        const pantsColors = ['#1e40af', '#991b1b', '#065f46', '#92400e', '#3730a3', '#5b21b6'];
        const hairColors = ['#452721', '#241c11', '#e6be8a', '#6a4e32'];
        
        return {
            shirt: shirtColors[hash % shirtColors.length],
            pants: pantsColors[hash % pantsColors.length],
            hair: hairColors[hash % hairColors.length],
            skin: '#ffdbac'
        };
    }, [settler.id]);

    const scale = settler.traits?.some(t => t.type === 'strong') ? 1.1 : 1;

    // Track visual state for interpolation
    const visualPosition = useRef(new THREE.Vector3(...settler.position));
    const targetVector = new THREE.Vector3();
    
    useFrame((state) => {
        if (!groupRef.current) return;

        const time = state.clock.elapsedTime;

        // Smoothly interpolate position
        targetVector.set(settler.position[0], settler.position[1], settler.position[2]);
        visualPosition.current.lerp(targetVector, 0.1);
        groupRef.current.position.copy(visualPosition.current);
        
        // Face direction of movement if walking
        if (settler.state === 'walking' && settler.targetPosition) {
            const dx = settler.targetPosition[0] - settler.position[0];
            const dz = settler.targetPosition[2] - settler.position[2];
            const angle = Math.atan2(dx, dz);
            // Smoothly interpolate rotation
            const currentRotation = groupRef.current.rotation.y;
            let diff = angle - currentRotation;
            while (diff < -Math.PI) diff += Math.PI * 2;
            while (diff > Math.PI) diff -= Math.PI * 2;
            groupRef.current.rotation.y = currentRotation + diff * 0.1;
        }

        // Animations based on state
        if (settler.state === 'walking') {
            const walkSpeed = 10;
            const walkAmount = 0.5;
            
            // Leg movement
            if (leftLegRef.current) leftLegRef.current.rotation.x = Math.sin(time * walkSpeed) * walkAmount;
            if (rightLegRef.current) rightLegRef.current.rotation.x = Math.sin(time * walkSpeed + Math.PI) * walkAmount;
            
            // Arm movement - if carrying, arms are fixed forward
            if (settler.carrying) {
                if (leftArmRef.current) {
                    leftArmRef.current.rotation.x = -Math.PI / 3;
                    leftArmRef.current.rotation.y = 0.2;
                }
                if (rightArmRef.current) {
                    rightArmRef.current.rotation.x = -Math.PI / 3;
                    rightArmRef.current.rotation.y = -0.2;
                }
            } else {
                if (leftArmRef.current) {
                    leftArmRef.current.rotation.x = Math.sin(time * walkSpeed + Math.PI) * walkAmount;
                    leftArmRef.current.rotation.y = 0;
                }
                if (rightArmRef.current) {
                    rightArmRef.current.rotation.x = Math.sin(time * walkSpeed) * walkAmount;
                    rightArmRef.current.rotation.y = 0;
                }
            }
            
            // Body bob
            if (bodyRef.current) bodyRef.current.position.y = Math.abs(Math.sin(time * walkSpeed)) * 0.05;
        } else if (settler.state === 'working') {
            const workplace = buildings.find(b => b.id === settler.job);
            const jobType = workplace?.type;
            const workSpeed = 8;
            
            if (jobType === 'farm') {
                // Bending/harvesting motion
                const bendAmount = Math.sin(time * 3) * 0.3 + 0.3;
                if (bodyRef.current) bodyRef.current.rotation.x = bendAmount;
                if (rightArmRef.current) rightArmRef.current.rotation.x = -bendAmount - 0.5;
                if (leftArmRef.current) leftArmRef.current.rotation.x = -bendAmount - 0.5;
            } else if (jobType === 'mine') {
                // Heavy overhead swinging
                const swing = Math.sin(time * 5);
                if (rightArmRef.current) rightArmRef.current.rotation.x = -Math.PI / 2 + swing * 1.2;
                if (bodyRef.current) bodyRef.current.rotation.x = Math.max(0, swing * 0.2);
            } else if (jobType === 'lumberMill') {
                // Sawing motion
                const saw = Math.sin(time * 10) * 0.2;
                if (rightArmRef.current) {
                    rightArmRef.current.position.z = saw;
                    rightArmRef.current.rotation.x = -Math.PI / 3;
                }
            } else if (workplace?.constructionProgress !== undefined && workplace.constructionProgress < 1) {
                // Construction hammering motion
                const hammer = Math.sin(time * 12);
                if (rightArmRef.current) {
                    rightArmRef.current.rotation.x = -Math.PI / 2 + hammer * 0.8;
                }
                if (bodyRef.current) {
                    bodyRef.current.rotation.x = Math.max(0, hammer * 0.1);
                }
                
                // Trigger hammer sound at the bottom of the swing
                if (hammer < -0.8 && time - lastHammerSound.current > 0.4) {
                    playSound('hammer');
                    lastHammerSound.current = time;
                }
            } else {
                // Default Chopping/Hammering motion
                if (rightArmRef.current) {
                    rightArmRef.current.rotation.x = -Math.PI / 4 + Math.sin(time * workSpeed) * 0.5;
                }
                if (leftArmRef.current) {
                    leftArmRef.current.rotation.x = -Math.PI / 6;
                }
                if (bodyRef.current) {
                    bodyRef.current.position.y = Math.sin(time * workSpeed) * 0.02;
                }
            }
        } else {
            // Idle/Resting: reset positions
            if (bodyRef.current) {
                bodyRef.current.rotation.x = THREE.MathUtils.lerp(bodyRef.current.rotation.x, 0, 0.1);
            }
            if (rightArmRef.current) {
                rightArmRef.current.position.z = THREE.MathUtils.lerp(rightArmRef.current.position.z, 0, 0.1);
            }
            if (leftLegRef.current) leftLegRef.current.rotation.x = THREE.MathUtils.lerp(leftLegRef.current.rotation.x, 0, 0.1);
            if (rightLegRef.current) rightLegRef.current.rotation.x = THREE.MathUtils.lerp(rightLegRef.current.rotation.x, 0, 0.1);
            if (leftArmRef.current) leftArmRef.current.rotation.x = THREE.MathUtils.lerp(leftArmRef.current.rotation.x, 0, 0.1);
            if (rightArmRef.current) rightArmRef.current.rotation.x = THREE.MathUtils.lerp(rightArmRef.current.rotation.x, 0, 0.1);
            
            // Gentle breathing bob
            if (bodyRef.current) bodyRef.current.position.y = Math.sin(time * 2) * 0.01;
        }
    });

    return (
        <group ref={groupRef} scale={[scale, scale, scale]}>
            <group ref={bodyRef}>
                {/* Torso */}
                <mesh position={[0, 0.5, 0]} castShadow>
                    <boxGeometry args={[0.3, 0.45, 0.2]} />
                    <meshStandardMaterial color={colors.shirt} />
                </mesh>
                
                {/* Head */}
                <mesh position={[0, 0.85, 0]} castShadow>
                    <boxGeometry args={[0.25, 0.25, 0.25]} />
                    <meshStandardMaterial color={colors.skin} />
                </mesh>

                {/* Hair */}
                <mesh position={[0, 0.95, 0]} castShadow>
                    <boxGeometry args={[0.28, 0.1, 0.28]} />
                    <meshStandardMaterial color={colors.hair} />
                </mesh>

                {/* Left Arm */}
                <mesh ref={leftArmRef} position={[-0.2, 0.6, 0]} castShadow>
                    <boxGeometry args={[0.1, 0.35, 0.1]} />
                    <meshStandardMaterial color={colors.shirt} />
                </mesh>

                {/* Right Arm */}
                <mesh ref={rightArmRef} position={[0.2, 0.6, 0]} castShadow>
                    <boxGeometry args={[0.1, 0.35, 0.1]} />
                    <meshStandardMaterial color={colors.shirt} />
                    {settler.hasTool && (
                        <group position={[0, -0.2, 0.1]} rotation={[Math.PI / 4, 0, 0]}>
                            {/* Hammer Handle */}
                            <mesh position={[0, 0, 0]}>
                                <boxGeometry args={[0.04, 0.3, 0.04]} />
                                <meshStandardMaterial color="#5d4037" />
                            </mesh>
                            {/* Hammer Head */}
                            <mesh position={[0, 0.15, 0]}>
                                <boxGeometry args={[0.12, 0.08, 0.08]} />
                                <meshStandardMaterial color="#757575" metalness={0.8} roughness={0.2} />
                            </mesh>
                        </group>
                    )}
                </mesh>

                {/* Carrying Visual (Box) */}
                {settler.carrying && (
                    <group position={[0, 0.5, 0.25]}>
                        <mesh castShadow>
                            <boxGeometry args={[0.25, 0.2, 0.2]} />
                            <meshStandardMaterial 
                                color={
                                    settler.carrying === 'wood' ? '#78350f' :
                                    settler.carrying === 'food' ? '#fde047' :
                                    settler.carrying === 'stone' ? '#78716c' :
                                    settler.carrying === 'iron' ? '#475569' :
                                    settler.carrying === 'tools' ? '#3b82f6' :
                                    '#451a03'
                                } 
                            />
                        </mesh>
                    </group>
                )}
            </group>

            {/* Left Leg */}
            <mesh ref={leftLegRef} position={[-0.1, 0.2, 0]} castShadow>
                <boxGeometry args={[0.12, 0.4, 0.12]} />
                <meshStandardMaterial color={colors.pants} />
            </mesh>

            {/* Right Leg */}
            <mesh ref={rightLegRef} position={[0.1, 0.2, 0]} castShadow>
                <boxGeometry args={[0.12, 0.4, 0.12]} />
                <meshStandardMaterial color={colors.pants} />
            </mesh>
            
            {/* Name Tag */}
            <Html position={[0, 1.3, 0]} center distanceFactor={10}>
                <div className="flex flex-col items-center gap-1 pointer-events-none select-none">
                    <div className="flex gap-1">
                        {settler.hunger < 30 && (
                            <div className="bg-orange-500/80 p-0.5 rounded shadow-lg animate-pulse">
                                <Utensils className="w-3 h-3 text-white" />
                            </div>
                        )}
                        {settler.energy < 30 && (
                            <div className="bg-yellow-500/80 p-0.5 rounded shadow-lg animate-pulse">
                                <Zap className="w-3 h-3 text-white" />
                            </div>
                        )}
                        {settler.isSick && (
                            <div className="bg-red-500/80 p-0.5 rounded shadow-lg animate-pulse">
                                <Pill className="w-3 h-3 text-white" />
                            </div>
                        )}
                    </div>
                    <div className="bg-black/50 text-white text-[10px] px-1 rounded backdrop-blur-sm whitespace-nowrap">
                        {settler.name} {settler.carrying && <span className="text-yellow-400 ml-1">({settler.carrying})</span>}
                    </div>
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

