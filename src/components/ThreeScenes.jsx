import React, { useRef, useMemo } from 'react';
import * as THREE from 'three';
import { Canvas, useFrame } from '@react-three/fiber';
import {
    Float,
    Environment,
    ContactShadows,
    Points,
    PointMaterial,
    MeshDistortMaterial,
    RoundedBox,
    PerspectiveCamera
} from '@react-three/drei';

// Floating Glass UI Cards
const GlassCard = ({ position, rotation, color = "#0070f3" }) => {
    const ref = useRef();
    useFrame((state) => {
        ref.current.rotation.y = rotation[1] + Math.sin(state.clock.getElapsedTime() * 0.5) * 0.1;
        ref.current.rotation.x = rotation[0] + Math.cos(state.clock.getElapsedTime() * 0.5) * 0.05;
    });

    return (
        <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5} position={position}>
            <RoundedBox ref={ref} args={[2, 1.2, 0.05]} radius={0.05} smoothness={4}>
                <meshPhysicalMaterial
                    color={color}
                    transmission={0.8}
                    thickness={0.5}
                    roughness={0.1}
                    metalness={0.1}
                    transparent
                    opacity={0.4}
                />
            </RoundedBox>
        </Float>
    );
};

// Background Swam / Particles (Framer style)
const ParticleSwarm = ({ count = 2000 }) => {
    const points = useMemo(() => {
        const p = new Float32Array(count * 3);
        for (let i = 0; i < count; i++) {
            p[i * 3] = (Math.random() - 0.5) * 20;
            p[i * 3 + 1] = (Math.random() - 0.5) * 20;
            p[i * 3 + 2] = (Math.random() - 0.5) * 20;
        }
        return p;
    }, [count]);

    const ref = useRef();
    useFrame((state) => {
        ref.current.rotation.y = state.clock.getElapsedTime() * 0.02;
    });

    return (
        <Points ref={ref} positions={points} stride={3}>
            <PointMaterial
                transparent
                color="#7000ff"
                size={0.03}
                sizeAttenuation={true}
                depthWrite={false}
                blending={THREE.AdditiveBlending}
            />
        </Points>
    );
};

export const HeroVisual = () => {
    return (
        <Canvas shadows>
            <PerspectiveCamera makeDefault position={[0, 0, 8]} fov={40} />
            <ambientLight intensity={0.5} />
            <spotLight position={[10, 10, 10]} intensity={2} color="#0070f3" />
            <pointLight position={[-10, -10, -10]} intensity={1} color="#7000ff" />

            <GlassCard position={[-2, 1, 0]} rotation={[0.2, 0.3, 0]} color="#0070f3" />
            <GlassCard position={[2, -1, 1]} rotation={[-0.1, -0.4, 0]} color="#7000ff" />
            <GlassCard position={[0, 2, -1]} rotation={[0.4, 0.1, 0]} color="#00f0ff" />

            <ParticleSwarm count={3000} />
            <Environment preset="city" />
            <ContactShadows position={[0, -3, 0]} opacity={0.2} scale={20} blur={2} />
        </Canvas>
    );
};

export const HeroWebGL = () => <HeroVisual />;
export const BackgroundSwarm = () => {
    return (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1, pointerEvents: 'none' }}>
            <Canvas camera={{ position: [0, 0, 5] }}>
                <ParticleSwarm count={1000} />
            </Canvas>
        </div>
    );
};

export const Solution3D = () => null;
export const BackgroundGrid = () => null;
export const FooterSpace3D = () => null;
