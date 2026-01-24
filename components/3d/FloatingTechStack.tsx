import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { useTexture, Billboard } from '@react-three/drei';
import * as THREE from 'three';

export default function FloatingTechStack() {
    // --- TECH DATA (Expanded) ---
    const allTech = useMemo(() => [
        { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
        { name: 'Next.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
        { name: 'TypeScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
        { name: 'Node.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
        { name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
        { name: 'Django', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg' },
        { name: 'FastAPI', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg' },
        { name: 'Docker', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
        { name: 'MongoDB', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
        { name: 'JavaScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
        { name: 'Redux', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg' },
        { name: 'GraphQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg' },
        { name: 'AWS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg' },
        { name: 'Kubernetes', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg' },
        { name: 'Tailwind', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
        { name: 'Three.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/threejs/threejs-original.svg' }
    ], []);

    return (
        <group position={[0, 0.5, 0]}> {/* Centered relative to Ant */}
            <TechHalo items={allTech} radius={4.5} />
        </group>
    );
}

function TechHalo({ items, radius }: any) {
    const group = useRef<THREE.Group>(null);

    useFrame((state) => {
        if (group.current) {
            // Smooth, slow, hypnotic rotation
            group.current.rotation.y += 0.002;
        }
    });

    return (
        <group ref={group} rotation={[0.2, 0, 0]}> {/* Slight tilt for depth */}

            {/* ICONS ON THE RING (No visible backing) */}
            {items.map((item: any, i: number) => {
                const angle = (i / items.length) * Math.PI * 2;
                return (
                    <HaloItem
                        key={item.name}
                        item={item}
                        radius={radius}
                        angle={angle}
                    />
                )
            })}
        </group>
    )
}

function HaloItem({ item, radius, angle }: any) {
    const texture = useTexture(item.logo) as THREE.Texture;

    return (
        <group position={[Math.cos(angle) * radius, 0.5, Math.sin(angle) * radius]}>
            {/* Floating */}
            <Billboard>
                <mesh>
                    <planeGeometry args={[0.9, 0.9]} />
                    <meshBasicMaterial map={texture} transparent />
                </mesh>
            </Billboard>
        </group>
    )
}
