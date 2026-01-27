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
            <ambientLight intensity={0.6} color="#00f3ff" />
            <spotLight position={[5, 10, 5]} angle={0.5} penumbra={1} intensity={4} color="#00f3ff" />
            <pointLight position={[-5, -5, 5]} intensity={3} color="#7B61FF" />
            <rectAreaLight width={10} height={10} position={[0, 5, -5]} color="#FF0055" intensity={5} rotation={[-Math.PI / 2, 0, 0]} />

            {/* Post-Processing: The "Digital Nexus" Glow */}
            <EffectComposer>
                <Bloom
                    luminanceThreshold={1.5} // Higher threshold = fewer glowing pixels
                    mipmapBlur
                    intensity={1.5}
                    radius={0.6}
                />
            </EffectComposer>

            {/* Atmosphere (Optimized) - Stars removed for Light Mode */}
            {/* <Stars radius={100} depth={50} count={1000} factor={4} saturation={0} fade speed={1} /> */}
            <Sparkles count={50} scale={20} size={5} speed={0.4} opacity={0.8} noise={1} color="#00f3ff" />

            <CameraRig />

            {/* The "Shrink-Not-Stack" Group */}
            <group scale={[scale, scale, scale]}>

                {/* LOGIC: Mobile = Bottom Center (Below Text). Desktop = Right Center. */}
                <group
                    position={scale < 0.8 ? [0, -1.2, 0] : [5.5, -0.5, 0]}
                    rotation={scale < 0.8 ? [0, 0, 0] : [0, -Math.PI / 6, 0]}
                    scale={scale < 0.8 ? 0.6 : 0.8}
                >
                    <MechaAnt scale={0.6} />
                    <FloatingTechStack />
                    {/* Shadow baked once (frames=1) to prevent per-frame re-calc */}
                    {/* <ContactShadows frames={1} position={[0, -2, 0]} opacity={0.6} scale={10} blur={2.5} far={4.5} color="#000" /> */}
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
