'use client';

import Link from 'next/link';
import HoneycombPattern from './HoneycombPattern';
import { ArrowRight, Phone } from 'lucide-react';
import { motion } from 'framer-motion';

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
            <div className="relative rounded-[2.5rem] bg-[#02182B] overflow-hidden min-h-[75vh] flex flex-col items-center justify-center py-24 px-6 relative group">

                {/* 1. Dynamic Background Layer */}
                <FloatingTechLogos />

                {/* 2. Honeycomb Pattern - Subtle & Pulsing */}
                <div className="absolute right-0 top-0 bottom-0 w-full md:w-1/2 opacity-20 mix-blend-screen pointer-events-none">
                    <HoneycombPattern color="#00f3ff" opacity={0.1} scale={50} className="mask-image-linear-fade animate-pulse-slow" />
                </div>

                {/* 3. Central Atmospheric Glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-electric-cyan/15 blur-[120px] rounded-full point-events-none" />

                {/* 4. Main Content */}
                <div className="relative z-20 flex-1 flex flex-col items-center justify-center text-center max-w-6xl mx-auto">

                    {/* Intro Tag */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="mb-8"
                    >
                        <h2 className="relative inline-block text-electric-cyan text-base md:text-lg font-bold tracking-[0.3em] uppercase px-8 py-3 border border-electric-cyan/30 rounded-full bg-[#02182B]/80 backdrop-blur-md shadow-[0_0_20px_rgba(0,243,255,0.2)]">
                            Welcome to WebAnts
                            <span className="absolute -top-1 -right-1 w-3 h-3 bg-white rounded-full animate-ping" />
                        </h2>
                    </motion.div>

                    {/* Main Headline */}
                    <motion.h1
                        className="text-5xl md:text-7xl lg:text-8xl font-monument uppercase text-white leading-[1.1] mb-12 tracking-wide drop-shadow-2xl"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    >
                        <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400">WebAnts</span> <br />
                        <span className="text-electric-cyan drop-shadow-[0_0_30px_rgba(0,243,255,0.6)]">Digital</span>
                    </motion.h1>

                    <motion.p
                        className="text-gray-300 text-lg md:text-2xl max-w-3xl mb-12 leading-relaxed font-light"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        We architect <span className="text-white font-semibold">immersive digital experiences</span> that propel brands to the forefront of the future.
                    </motion.p>

                    {/* Buttons */}
                    <motion.div
                        className="flex flex-col md:flex-row items-center gap-6"
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
                            className="group flex items-center gap-3 px-10 py-5 rounded-full border border-white/20 text-white hover:bg-white/10 hover:border-white transition-all duration-300 font-semibold uppercase tracking-wider text-sm backdrop-blur-sm"
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
