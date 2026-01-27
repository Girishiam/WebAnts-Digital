import { useRef, useMemo, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sphere, Cylinder, Capsule, Tube, Line } from '@react-three/drei';
import * as THREE from 'three';

export default function MechaAnt(props: any) {
    const group = useRef<THREE.Group>(null);
    const headRef = useRef<THREE.Group>(null);

    // --- Materials (Optimized Standard PBR) ---
    const materials = useMemo(() => ({
        body: new THREE.MeshStandardMaterial({
            color: "#1a1a1a",       // Darker obsidian
            metalness: 0.8,
            roughness: 0.2,         // Removed clearcoat (expensive)
            emissive: "#000000"
        }),
        accent: new THREE.MeshStandardMaterial({
            color: "#3ea4f5",       // Electric Cyan
            metalness: 0.9,
            roughness: 0.1,
            emissive: "#3ea4f5",    // GLOW
            emissiveIntensity: 1.5  // Adjusted for standard
        }),
        brightAccent: new THREE.MeshStandardMaterial({
            color: "#7b61ff",       // Neural Violet
            metalness: 0.5,
            roughness: 0.2,
            emissive: "#7b61ff",
            emissiveIntensity: 2.0,
            toneMapped: false
        }),
        eyeWhite: new THREE.MeshStandardMaterial({
            color: "#ffffff",
            roughness: 0.1,
            metalness: 0.9,
            emissive: "#ffffff",
            emissiveIntensity: 0.5
        }),
        pupil: new THREE.MeshStandardMaterial({
            color: "#000000",
            roughness: 0.0
        }),
        nose: new THREE.MeshStandardMaterial({
            color: "#ff0055", // Cyber Pink
            emissive: "#ff0055",
            emissiveIntensity: 1.5
        }),
        highlight: new THREE.MeshBasicMaterial({ color: "#ffffff" })
    }), []);

    // --- Refs for Animation Parts ---
    const leftAntennaRef = useRef<THREE.Group>(null);
    const rightAntennaRef = useRef<THREE.Group>(null);
    const leftPupilRef = useRef<THREE.Group>(null);
    const rightPupilRef = useRef<THREE.Group>(null);

    // --- Animation Loop ---
    useFrame((state) => {
        const time = state.clock.elapsedTime;
        const pointer = state.pointer; // Normalized mouse coordinates -1 to 1

        if (group.current) {
            // Body Float & Rotation
            group.current.rotation.y = Math.sin(time * 0.5) * 0.05; // Gentle sway
            group.current.position.y = Math.sin(time * 2) * 0.1; // Bobbing
        }

        // HEAD TRACKING
        if (headRef.current) {
            // Smoothly look towards mouse
            // We create a target point in 3D space based on pointer
            // Since ant is rotated -90 deg Y, we adjust logic or just use vector

            const targetX = pointer.x * 2;
            const targetY = pointer.y * 2 + 1.5; // Offset to head height

            // Simple lerp for smooth tracking rotation
            // Head is at [0, 1.5, 2.5]
            headRef.current.rotation.y = THREE.MathUtils.lerp(headRef.current.rotation.y, -pointer.x * 0.5, 0.1);
            headRef.current.rotation.x = THREE.MathUtils.lerp(headRef.current.rotation.x, -pointer.y * 0.5, 0.1);
        }

        // Antennae Wiggle
        if (leftAntennaRef.current) {
            leftAntennaRef.current.rotation.z = Math.sin(time * 3) * 0.3 - 0.2;
        }
        if (rightAntennaRef.current) {
            rightAntennaRef.current.rotation.z = Math.sin(time * 3 + Math.PI) * 0.3 + 0.2;
        }

        // Pupil Tracking (Looking left/right)
        if (leftPupilRef.current && rightPupilRef.current) {
            const lookAngle = Math.sin(time * 0.5) * 0.15;
            // Tracking mouse slightly with eyes too
            const mouseLookX = pointer.x * 0.3;

            leftPupilRef.current.position.x = -0.5 + lookAngle + mouseLookX;
            rightPupilRef.current.position.x = 0.5 + lookAngle + mouseLookX;
        }
    });

    return (
        // Default rotation to face correctly [-X]
        <group ref={group} {...props} rotation={[0, -Math.PI / 2, 0]} dispose={null}>

            {/* ================= HEAD ================= */}
            {/* Wrapped in ref for tracking */}
            <group ref={headRef} position={[0, 1.5, 2.5]}>
                <group scale={[1, 0.95, 0.95]}>
                    <Sphere args={[1.2, 16, 16]} material={materials.body} />
                </group>

                {/* Eyes attached to Head */}
                <group position={[-0.5, 0.2, 0.8]} scale={[1.1, 1.3, 0.8]}>
                    <Sphere args={[0.5, 16, 16]} material={materials.eyeWhite} />
                </group>
                <group position={[0.5, 0.2, 0.8]} scale={[1.1, 1.3, 0.8]}>
                    <Sphere args={[0.5, 16, 16]} material={materials.eyeWhite} />
                </group>

                {/* Pupils */}
                <group ref={leftPupilRef} position={[-0.5, 0.2, 1.2]}>
                    <Sphere args={[0.3, 12, 12]} material={materials.pupil} />
                </group>
                <group ref={rightPupilRef} position={[0.5, 0.2, 1.2]}>
                    <Sphere args={[0.3, 12, 12]} material={materials.pupil} />
                </group>

                {/* Highlights */}
                <Sphere args={[0.12, 8, 8]} position={[-0.4, 0.35, 1.35]} material={materials.highlight} />
                <Sphere args={[0.12, 8, 8]} position={[0.6, 0.35, 1.35]} material={materials.highlight} />

                {/* Nose */}
                <Sphere args={[0.15, 12, 12]} position={[0, -0.3, 1.1]} material={materials.nose} />

                {/* Smile */}
                <Smile position={[0, -0.55, 1.15]} />

                {/* Antennae */}
                <group ref={leftAntennaRef} position={[-0.6, 0.8, 0]}>
                    <Antenna curvePoints={[
                        new THREE.Vector3(0, 0, 0),
                        new THREE.Vector3(0.2, 0.4, 0.1),
                        new THREE.Vector3(0.3, 0.8, 0.2),
                        new THREE.Vector3(0.4, 1.2, 0.1)
                    ]} ballPos={[0.4, 1.2, 0.1]} mat={materials.accent} ballMat={materials.brightAccent} />
                </group>

                <group ref={rightAntennaRef} position={[0.6, 0.8, 0]}>
                    <Antenna curvePoints={[
                        new THREE.Vector3(0, 0, 0),
                        new THREE.Vector3(-0.2, 0.4, 0.1),
                        new THREE.Vector3(-0.3, 0.8, 0.2),
                        new THREE.Vector3(-0.4, 1.2, 0.1)
                    ]} ballPos={[-0.4, 1.2, 0.1]} mat={materials.accent} ballMat={materials.brightAccent} />
                </group>
            </group>
            {/* End Head Group */}


            {/* ================= THORAX ================= */}
            <group position={[0, 1, 0.3]} scale={[1.2, 1, 1]}>
                <Sphere args={[1.1, 16, 16]} material={materials.accent} />
            </group>

            {/* ================= ABDOMEN ================= */}
            <group position={[0, 0.8, -2]} scale={[1.2, 1.1, 1.4]}>
                <Sphere args={[1.5, 16, 16]} material={materials.body} />
            </group>

            {/* Stripes on Abdomen */}
            <AbdomenStripe z={-2.5} material={materials.brightAccent} />
            <AbdomenStripe z={-1.9} material={materials.brightAccent} />
            <AbdomenStripe z={-1.3} material={materials.brightAccent} />
            <AbdomenStripe z={-0.7} material={materials.brightAccent} />


            {/* ================= LEGS ================= */}
            <Leg x={-1} z={1.2} angle={-0.3} materials={materials} />
            <Leg x={1} z={1.2} angle={0.3} materials={materials} mirroring={true} />

            <Leg x={-1.1} z={0.2} angle={-0.5} materials={materials} />
            <Leg x={1.1} z={0.2} angle={0.5} materials={materials} mirroring={true} />

            <Leg x={-1} z={-0.8} angle={-0.7} materials={materials} />
            <Leg x={1} z={-0.8} angle={0.7} materials={materials} mirroring={true} />

        </group>
    );
}

// --- Helpers ---

function Smile({ position }: any) {
    return (
        <group position={position} rotation={[0, 0, 0]}>
            {/* Use Torus for a thick, 3D smile */}
            {/* args: [radius, tube, radialSegments, tubularSegments, arc] */}
            {/* rotated to look like a smile */}
            <mesh rotation={[0, 0, Math.PI * 0.85]}>
                <torusGeometry args={[0.35, 0.04, 12, 32, Math.PI * 0.7]} />
                <meshStandardMaterial
                    color="#ffffff"
                    emissive="#ffffff"
                    emissiveIntensity={0.8}
                    roughness={0.2}
                />
            </mesh>
        </group>
    )
}

function Antenna({ curvePoints, ballPos, mat, ballMat }: any) {
    const path = useMemo(() => new THREE.CatmullRomCurve3(curvePoints), [curvePoints]);
    return (
        <group>
            <Tube args={[path, 20, 0.08, 8, false]} material={mat} />
            <Sphere args={[0.2, 16, 16]} position={ballPos} material={ballMat} />
        </group>
    )
}

function AbdomenStripe({ z, material }: any) {
    return (
        <mesh position={[0, 0.8, z]} rotation={[Math.PI / 2, 0, 0]}>
            <sphereGeometry args={[1.52, 24, 24, 0, Math.PI * 2, 0, Math.PI * 0.3]} />
            <primitive object={material} />
        </mesh>
    )
}

function Leg({ x, z, angle, materials, mirroring }: any) {
    return (
        <group position={[x, 1, z]}>
            {/* Upper Leg */}
            <group position={[0, -0.4, 0]} rotation={[0, 0, angle]}>
                <Capsule args={[0.2, 1]} material={materials.body} />
            </group>

            {/* Joint */}
            <group position={[Math.sin(angle) * 0.5, -0.8, 0]}>
                <Sphere args={[0.22, 12, 12]} material={materials.accent} />
            </group>

            {/* Lower Leg */}
            <group position={[Math.sin(angle) * 0.5, -1.3, 0]} rotation={[0, 0, -angle * 0.5]}>
                <Capsule args={[0.18, 0.8]} material={materials.accent} />
            </group>

            {/* Foot */}
            <group position={[Math.sin(angle) * 0.3, -1.7, 0]} scale={[1.3, 0.8, 1]}>
                <Sphere args={[0.15, 12, 12]} material={materials.brightAccent} />
            </group>
        </group>
    )
}
