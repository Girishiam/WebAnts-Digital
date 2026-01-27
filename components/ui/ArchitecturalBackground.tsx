"use client";

import { useEffect, useState } from "react";

export default function ArchitecturalBackground() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <div className="absolute inset-0 pointer-events-none overflow-hidden select-none" style={{ zIndex: 0 }}>
            <style>{`
                @keyframes spin-slow {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
                @keyframes spin-reverse-slower {
                    from { transform: rotate(360deg); }
                    to { transform: rotate(0deg); }
                }
                @keyframes scan-line {
                    0% { top: -10%; opacity: 0; }
                    50% { opacity: 1; }
                    100% { top: 110%; opacity: 0; }
                }
                @keyframes blink {
                    0%, 100% { opacity: 0.3; }
                    50% { opacity: 1; }
                }
            `}</style>

            {/* Main SVG Container */}
            <svg className="absolute inset-0 w-full h-full text-ants-blue/20" xmlns="http://www.w3.org/2000/svg">

                {/* 1. Large Orbital Ring (Right) */}
                <g className="scale-75 translate-x-[20%] translate-y-[20%] md:scale-100 md:translate-x-[50%] md:translate-y-[0%]" style={{ transformBox: 'fill-box', transformOrigin: 'center' }}>
                    <circle cx="50%" cy="50%" r="35%" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="10 20" style={{ animation: "spin-slow 60s linear infinite", transformOrigin: '50% 50%' }} />
                    <circle cx="50%" cy="50%" r="32%" fill="none" stroke="currentColor" strokeWidth="1" strokeOpacity="0.5" strokeDasharray="50 50" style={{ animation: "spin-reverse-slower 80s linear infinite", transformOrigin: '50% 50%' }} />
                    {/* Decorative arc segments */}
                    <path d="M 50% 15% A 35% 35% 0 0 1 85% 50%" fill="none" stroke="currentColor" strokeWidth="2" strokeOpacity="0.8" />
                </g>

                {/* 2. Grid Lines (Perspective Floor) */}
                <g className="text-electric-cyan/10">
                    <line x1="0" y1="80%" x2="100%" y2="80%" stroke="currentColor" strokeWidth="1" />
                    <line x1="0" y1="90%" x2="100%" y2="90%" stroke="currentColor" strokeWidth="1" />
                    {/* Angled lines */}
                    <line x1="10%" y1="100%" x2="40%" y2="50%" stroke="currentColor" strokeWidth="1" />
                    <line x1="90%" y1="100%" x2="60%" y2="50%" stroke="currentColor" strokeWidth="1" />
                </g>

                {/* 3. Crosshairs & Tech Markers */}
                <g className="text-ants-blue/40">
                    {/* Top Left */}
                    <line x1="40" y1="40" x2="100" y2="40" stroke="currentColor" strokeWidth="2" />
                    <line x1="40" y1="40" x2="40" y2="100" stroke="currentColor" strokeWidth="2" />
                    <text x="50" y="60" fontSize="10" fontFamily="monospace" fill="currentColor">SYS.INIT_01</text>

                    {/* Top Right */}
                    <line x1="calc(100% - 40px)" y1="40" x2="calc(100% - 100px)" y2="40" stroke="currentColor" strokeWidth="2" />
                    <line x1="calc(100% - 40px)" y1="40" x2="calc(100% - 40px)" y2="100" stroke="currentColor" strokeWidth="2" />

                    {/* Bottom Right */}
                    <line x1="calc(100% - 40px)" y1="calc(100% - 40px)" x2="calc(100% - 100px)" y2="calc(100% - 40px)" stroke="currentColor" strokeWidth="2" />
                    <line x1="calc(100% - 40px)" y1="calc(100% - 40px)" x2="calc(100% - 40px)" y2="calc(100% - 100px)" stroke="currentColor" strokeWidth="2" />
                    <circle cx="calc(100% - 60px)" cy="calc(100% - 60px)" r="10" fill="none" stroke="currentColor" strokeWidth="1" style={{ animation: "blink 2s infinite" }} />
                </g>

                {/* 4. Scanner Line */}
                <line x1="0" y1="0" x2="100%" y2="0" stroke="url(#scan-gradient)" strokeWidth="2" style={{ animation: "scan-line 5s linear infinite" }} />
                <defs>
                    <linearGradient id="scan-gradient" x1="0" y1="0" x2="1" y2="0">
                        <stop offset="0%" stopColor="transparent" />
                        <stop offset="50%" stopColor="#00f3ff" stopOpacity="0.5" />
                        <stop offset="100%" stopColor="transparent" />
                    </linearGradient>
                </defs>

            </svg>

            {/* Vignette Overlay to focus center */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(255,255,255,0.8)_100%)] mix-blend-overlay opacity-50" />
        </div>
    );
}
