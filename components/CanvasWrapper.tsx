"use client";

import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Experience from "./3d/Experience";
import { Loader } from "@react-three/drei";

export default function CanvasWrapper() {
    return (
        <>
            <div className="fixed inset-0 z-0">
                <Canvas
                    shadows
                    camera={{ position: [0, 0, 5], fov: 45 }}
                    gl={{ antialias: true, alpha: true }}
                    dpr={[1, 2]} // Optimize for pixel density
                >
                    <color attach="background" args={["#F9F9F9"]} />
                    <Suspense fallback={null}>
                        <Experience />
                    </Suspense>
                </Canvas>
            </div>
            <Loader />
        </>
    );
}
