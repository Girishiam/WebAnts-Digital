import { useRef, useMemo } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { useResponsiveScale } from '@/hooks/useResponsiveScale';
import { Environment, ContactShadows, PerspectiveCamera, Sparkles, Stars } from '@react-three/drei';
import { EffectComposer, Bloom } from '@react-three/postprocessing';
import * as THREE from 'three';
import MechaAnt from './MechaAnt';
import FloatingTechStack from './FloatingTechStack';

export default function Experience() {
    const scale = useResponsiveScale();

    return (
        <>
            <PerspectiveCamera makeDefault position={[0, 0, 10]} />
            <Environment preset="city" />

            {/* Cinematic Lighting (Optimized: No Realtime Shadows) */}
            <ambientLight intensity={0.4} color="#1A7CD8" />
            <spotLight position={[5, 10, 5]} angle={0.5} penumbra={1} intensity={3} color="#3EA4F5" />
            <pointLight position={[-5, -5, 5]} intensity={2} color="#7B61FF" />
            <rectAreaLight width={10} height={10} position={[0, 5, -5]} color="#FF0055" intensity={5} rotation={[-Math.PI / 2, 0, 0]} />

            {/* Post-Processing: The "Digital Nexus" Glow */}
            <EffectComposer>
                <Bloom
                    luminanceThreshold={1.5} // Higher threshold = fewer glowing pixels
                    mipmapBlur
                    intensity={1.2}
                    radius={0.5}
                />
            </EffectComposer>

            {/* Atmosphere (Optimized) */}
            <Stars radius={100} depth={50} count={1000} factor={4} saturation={0} fade speed={1} />
            <Sparkles count={50} scale={20} size={3} speed={0.4} opacity={0.5} noise={1} color="#3ea4f5" />

            <CameraRig />

            {/* The "Shrink-Not-Stack" Group */}
            <group scale={[scale, scale, scale]}>

                {/* RIGHT SIDE: The Ant & Stack */}
                <group position={[4, -1, 0]} rotation={[0, -Math.PI / 2.5, 0]}>
                    <MechaAnt scale={0.6} />
                    <FloatingTechStack />
                    {/* Shadow baked once (frames=1) to prevent per-frame re-calc */}
                    <ContactShadows frames={1} position={[0, -2, 0]} opacity={0.6} scale={10} blur={2.5} far={4.5} color="#000" />
                </group>

            </group>
        </>
    );
}

function CameraRig() {
    useFrame((state, delta) => {
        // Subtle Mouse Parallax
        const x = -state.pointer.x * 0.5;
        const y = -state.pointer.y * 0.5;

        state.camera.position.x = THREE.MathUtils.lerp(state.camera.position.x, x, delta * 2);
        state.camera.position.y = THREE.MathUtils.lerp(state.camera.position.y, y, delta * 2);
        state.camera.lookAt(0, 0, 0); // Keep focused on center
    })
    return null;
}
