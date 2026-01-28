'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const loaderText = [
    "Initializing Core Systems...",
    "Connecting to Hive Mind...",
    "Architecting Digital Reality..."
];

const techIcons = [
    { name: 'React', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'Next.js', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
    { name: 'TypeScript', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
    { name: 'Node.js', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
    { name: 'Python', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
    { name: 'AWS', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg' },
    { name: 'Tailwind', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
    { name: 'Three.js', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/threejs/threejs-original.svg' }
];

export default function GlobalLoader() {
    const [isLoading, setIsLoading] = useState(true);
    const [textIndex, setTextIndex] = useState(0);

    useEffect(() => {
        // Cycle text faster for a snappier feel
        const textInterval = setInterval(() => {
            setTextIndex(prev => (prev + 1) % loaderText.length);
        }, 600);

        // Finish loading slightly faster
        const timer = setTimeout(() => {
            setIsLoading(false);
            clearInterval(textInterval);
        }, 2500);

        return () => {
            clearTimeout(timer);
            clearInterval(textInterval);
        };
    }, []);

    return (
        <AnimatePresence mode="wait">
            {isLoading && (
                <motion.div
                    className="fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-[#02182B] text-white overflow-hidden"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)", transition: { duration: 0.8, ease: "easeInOut" } }}
                >
                    {/* Background Effects */}
                    <div className="absolute inset-0 z-0">
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-electric-cyan/5 rounded-full blur-[100px] animate-pulse" />
                    </div>

                    <div className="relative z-10 flex flex-col items-center">

                        {/* Main Logo & Orbiting Tech */}
                        <div className="relative w-64 h-64 md:w-80 md:h-80 mb-12 flex items-center justify-center">

                            {/* Central Logo */}
                            <motion.div
                                initial={{ scale: 0.5, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ duration: 0.8, ease: "backOut" }}
                                className="relative z-20 w-32 h-32 md:w-40 md:h-40"
                            >
                                <Image
                                    src="/WebAnts.svg"
                                    alt="WebAnts Loading"
                                    fill
                                    className="object-contain drop-shadow-[0_0_25px_rgba(90,90,255,0.6)]"
                                    priority
                                />
                            </motion.div>

                            {/* Orbiting Tech Icons */}
                            {techIcons.map((tech, i) => (
                                <motion.div
                                    key={tech.name}
                                    className="absolute w-8 h-8 md:w-10 md:h-10 z-10"
                                    initial={{ opacity: 0, scale: 0 }}
                                    animate={{
                                        opacity: 1,
                                        scale: 1,
                                        x: Math.cos((i / techIcons.length) * Math.PI * 2) * 140,
                                        y: Math.sin((i / techIcons.length) * Math.PI * 2) * 140
                                    }}
                                    transition={{
                                        duration: 0.5,
                                        delay: i * 0.1,
                                        ease: "backOut"
                                    }}
                                    style={{
                                        top: '50%',
                                        left: '50%',
                                        marginTop: -20, // Half of height
                                        marginLeft: -20, // Half of width
                                    }}
                                >
                                    <motion.div
                                        animate={{ rotate: 360 }}
                                        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                                        className="relative w-full h-full bg-white/10 backdrop-blur-sm rounded-full p-2 border border-white/10 shadow-[0_0_15px_rgba(90,90,255,0.2)]"
                                    >
                                        <Image
                                            src={tech.src}
                                            alt={tech.name}
                                            fill
                                            className="object-contain p-1"
                                        />
                                    </motion.div>
                                </motion.div>
                            ))}

                            {/* Rotating Rings for Structure */}
                            <motion.div
                                className="absolute inset-0 border border-electric-cyan/20 rounded-full"
                                animate={{ rotate: 360, scale: [1, 1.05, 1] }}
                                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                            />
                            <motion.div
                                className="absolute inset-16 border border-dashed border-ants-blue/20 rounded-full"
                                animate={{ rotate: -360 }}
                                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                            />
                        </div>

                        {/* Text Animation */}
                        <div className="h-8 overflow-hidden flex flex-col items-center justify-center mb-8">
                            <AnimatePresence mode="wait">
                                <motion.p
                                    key={textIndex}
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    exit={{ y: -20, opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="text-electric-cyan font-monument uppercase tracking-[0.2em] text-xs md:text-sm text-center"
                                >
                                    {loaderText[textIndex]}
                                </motion.p>
                            </AnimatePresence>
                        </div>

                        {/* Creative Loader Line */}
                        <div className="relative w-64 h-[2px] bg-white/5 overflow-hidden">
                            <motion.div
                                className="absolute top-0 left-0 h-full w-20 bg-gradient-to-r from-transparent via-electric-cyan to-transparent"
                                animate={{ left: [-100, 300] }}
                                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                            />
                        </div>
                    </div>

                    {/* Footer Tech Text */}
                    <div className="absolute bottom-8 flex justify-between w-full max-w-[90%] px-8 text-[9px] font-mono text-white/20 uppercase tracking-widest">
                        <span>v2.5.0 Safe Mode</span>
                        <span>Secure Connection Est.</span>
                    </div>

                </motion.div>
            )}
        </AnimatePresence>
    );
}
