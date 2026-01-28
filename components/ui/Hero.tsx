'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import HoneycombPattern from './HoneycombPattern';
import { ArrowRight, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const techLogos = [
    { name: 'React', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'Next.js', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
    { name: 'TypeScript', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
    { name: 'Node.js', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
    { name: 'Python', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
    { name: 'Django', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg' },
    { name: 'FastAPI', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg' },
    { name: 'Docker', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
    { name: 'MongoDB', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
    { name: 'JavaScript', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    { name: 'Redux', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg' },
    { name: 'GraphQL', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg' },
    { name: 'AWS', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg' },
    { name: 'Kubernetes', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg' },
    { name: 'Tailwind', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
    { name: 'Three.js', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/threejs/threejs-original.svg' }
];

const services = [
    "Web Development",
    "Artificial Intelligence",
    "Digital Marketing & Growth"
];

const letterVariants = {
    initial: { y: 20, opacity: 0, filter: "blur(10px)" },
    animate: { y: 0, opacity: 1, filter: "blur(0px)" },
    exit: { y: -20, opacity: 0, filter: "blur(5px)" }
};

function ServicesRotator() {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % services.length);
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    const characters = services[index].split("");
    const firstSpaceIndex = services[index].indexOf(" ");
    const highlightLimit = firstSpaceIndex === -1 ? services[index].length : firstSpaceIndex;

    return (
        <div className="h-20 flex items-center justify-center z-20 overflow-hidden">
            <AnimatePresence mode="wait">
                <motion.div
                    key={index}
                    className="flex flex-wrap justify-center"
                    initial="initial"
                    animate="animate"
                    exit="exit"
                >
                    {characters.map((char, i) => (
                        <motion.span
                            key={`${index}-${i}`}
                            variants={letterVariants}
                            transition={{
                                duration: 0.4,
                                ease: [0.2, 0.65, 0.3, 0.9],
                                delay: i * 0.03, // Tight character stagger
                            }}
                            className={`text-2xl md:text-3xl lg:text-4xl font-black uppercase tracking-widest drop-shadow-[0_0_8px_rgba(90,90,255,0.4)] ${i < highlightLimit ? "text-electric-cyan" : "text-white"}`}
                            style={{ display: "inline-block", width: char === " " ? "0.5em" : "auto" }} // Handle spaces
                        >
                            {char === " " ? "\u00A0" : char}
                        </motion.span>
                    ))}
                </motion.div>
            </AnimatePresence>
        </div>
    );
}

function FloatingTechLogos() {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
            {/* Gradient Overlay for Depth */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#02182B] via-transparent to-[#02182B] z-10" />

            {techLogos.map((tech, i) => (
                <motion.div
                    key={tech.name}
                    className="absolute opacity-80 hover:opacity-100 transition-all duration-500 mix-blend-screen" // 80% visible, no grayscale, screen blend for vibrancy
                    initial={{
                        x: ((i * 137) % 1000) - 200,
                        y: ((i * 73) % 600) - 100,
                        scale: ((i * 13) % 50) / 100 + 0.5
                    }}
                    animate={{
                        y: [0, -30, 0],
                        x: [0, ((i * 17) % 20) - 10, 0],
                        rotate: [0, 5, -5, 0]
                    }}
                    transition={{
                        duration: ((i * 19) % 5) + 5,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: i * 0.2
                    }}
                    style={{
                        left: `${(i / techLogos.length) * 100}%`,
                        top: `${(i % 3) * 30 + 10}%`
                    }}
                >
                    <img
                        src={tech.src}
                        alt={tech.name}
                        className="w-20 h-20 object-contain drop-shadow-[0_0_15px_rgba(255,255,255,0.15)]" // Increased size slightly
                    />
                </motion.div>
            ))}
        </div>
    );
}

export default function Hero() {
    return (
        <section className="relative w-full max-w-[1700px] mx-auto mt-32 px-4 md:px-6 mb-12">
            <div className="relative rounded-[2.5rem] bg-[#02182B] overflow-hidden min-h-[75vh] flex flex-col items-center justify-center py-32 px-6 relative group">

                {/* 1. Dynamic Background Layer */}
                <FloatingTechLogos />

                {/* Background Text Watermark */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden select-none">
                    <h1 className="text-[15vw] font-bold text-white/[0.03] tracking-widest uppercase whitespace-nowrap blur-sm">
                        WebAnts
                    </h1>
                </div>

                {/* 2. Honeycomb Pattern - Subtle & Pulsing */}
                <div className="absolute right-0 top-0 bottom-0 w-full md:w-1/2 opacity-20 mix-blend-screen pointer-events-none">
                    <HoneycombPattern color="#5a5aff" opacity={0.1} scale={50} className="mask-image-linear-fade animate-pulse-slow" />
                </div>

                {/* 3. Central Atmospheric Glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-electric-cyan/20 blur-[120px] rounded-full point-events-none" />

                {/* Full Section Dark Overlay */}
                <div className="absolute inset-0 bg-black/20 z-10 pointer-events-none" />

                {/* 4. Main Content */}
                <div className="relative z-20 flex-1 flex flex-col items-center justify-center text-center max-w-6xl mx-auto">

                    {/* Text Content Wrapper with Subtle Blur */}
                    <div className="relative z-10 max-w-5xl mx-auto mb-10">
                        {/* Main Headline */}
                        <motion.h1
                            className="text-5xl md:text-7xl lg:text-9xl font-monument font-black uppercase text-white leading-[1.05] mb-12 tracking-wide drop-shadow-2xl"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                        >
                            <span className="text-transparent bg-clip-text bg-gradient-to-br from-white via-gray-100 to-gray-500 filter drop-shadow-[0_2px_10px_rgba(255,255,255,0.2)]">WebAnts</span> <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-cyan via-blue-400 to-blue-600 relative inline-block pb-2">
                                Digital
                            </span>
                        </motion.h1>

                        <motion.p
                            className="text-gray-100 text-lg md:text-2xl max-w-4xl mx-auto mb-10 leading-relaxed font-medium tracking-wide"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                        >
                            We Architect <span className="text-electric-cyan font-extrabold drop-shadow-[0_0_10px_rgba(90,90,255,0.3)]">Intelligent Digital Ecosystems</span> — Fusing Web, AI, And Strategic Growth.
                        </motion.p>

                        {/* Animated Services List */}
                        <div className="h-12 flex items-center justify-center overflow-hidden">
                            <ServicesRotator />
                        </div>
                    </div>

                    {/* Buttons */}
                    <motion.div
                        className="flex flex-col md:flex-row items-center gap-6 justify-center"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                    >
                        <Link
                            href="/contact"
                            className="group relative overflow-hidden bg-white text-[#02182B] px-10 py-5 rounded-full font-bold uppercase tracking-wider text-sm hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] transition-all duration-300"
                        >
                            <span className="relative z-10 flex items-center gap-3">
                                <Phone className="w-5 h-5" />
                                Schedule A Call
                            </span>
                            <div className="absolute inset-0 bg-electric-cyan opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                        </Link>

                        <Link
                            href="/services"
                            className="group flex items-center gap-3 px-10 py-5 rounded-full border border-white/20 text-white hover:bg-white/10 hover:border-white transition-all duration-300 font-bold uppercase tracking-wider text-sm backdrop-blur-sm"
                        >
                            <span>Explore More</span>
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
