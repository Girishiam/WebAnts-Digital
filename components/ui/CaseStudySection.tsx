'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight, ExternalLink } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const cases = [
    {
        id: 1,
        title: 'Neon Horizon',
        category: 'FinTech / Web3',
        description: 'Redefining the digital banking experience with immersive 3D interfaces and real-time blockchain visualization.',
        image: 'https://images.unsplash.com/photo-1639322537228-ad506d134c11?q=80&w=1000&auto=format&fit=crop',
        tags: ['Next.js', 'WebGL', 'Solidity'],
        stats: { value: '400%', label: 'User Growth' }
    },
    {
        id: 2,
        title: 'Aura Systems',
        category: 'SaaS / AI',
        description: 'An autonomous agent platform interface designed for clarity, speed, and human-AI collaboration.',
        image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1000&auto=format&fit=crop',
        tags: ['React', 'Python', 'Tailwind'],
        stats: { value: '10x', label: 'Workflow Speed' }
    },
    {
        id: 3,
        title: 'Velvet Space',
        category: 'Architecture / Luxury',
        description: 'A minimalist portfolio for high-end architects, featuring smooth transitions and gallery-grade layouts.',
        image: 'https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=1000&auto=format&fit=crop',
        tags: ['Framer Motion', 'GSAP', 'Sanity'],
        stats: { value: '2.5s', label: 'Avg. Load Time' }
    }
];

export default function CaseStudySection() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <section className="relative w-full max-w-[1700px] mx-auto px-4 md:px-6 mb-24">

            <div className="relative rounded-[2.5rem] bg-[#02182B] overflow-hidden py-24 px-4 md:px-12 group/container">

                {/* Creative Ambient Background */}
                <div className="absolute inset-0 opacity-20 pointer-events-none">
                    <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-electric-cyan/20 blur-[150px] rounded-full mix-blend-screen animate-pulse" />
                    <div className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] bg-ants-blue/20 blur-[150px] rounded-full mix-blend-screen" />
                </div>

                <div className="relative z-10 max-w-[1400px] mx-auto">

                    {/* Header */}
                    <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
                        <div>
                            <h2 className="text-electric-cyan font-bold tracking-widest uppercase mb-4 text-xs">
                                Selected Works
                            </h2>
                            <h3 className="text-3xl md:text-5xl font-monument uppercase text-white leading-tight">
                                Digital <br />
                                <span className="text-transparent bg-clip-text bg-linear-to-r from-electric-cyan to-white">
                                    Masterpieces
                                </span>
                            </h3>
                        </div>
                        <Link href="/case-studies" className="hidden md:flex items-center gap-2 text-white border-b border-electric-cyan pb-1 hover:text-electric-cyan transition-colors uppercase tracking-widest text-xs font-bold">
                            View All Projects <ArrowUpRight className="w-4 h-4" />
                        </Link>
                    </div>

                    {/* Case Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {cases.map((project, index) => (
                            <motion.div
                                key={project.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 }}
                                onMouseEnter={() => setHoveredIndex(index)}
                                onMouseLeave={() => setHoveredIndex(null)}
                                className="group relative h-[500px] rounded-4xl overflow-hidden cursor-pointer bg-neutral-900 border border-white/5"
                            >
                                {/* Background Image */}
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-40"
                                />
                                <div className="absolute inset-0 bg-linear-to-t from-[#02182B] via-[#02182B]/50 to-transparent" />

                                {/* Overlay Content */}
                                <div className="absolute inset-0 p-8 flex flex-col justify-end z-10">

                                    {/* Top Tags */}
                                    <div className="absolute top-8 left-8 flex gap-2">
                                        {project.tags.map(tag => (
                                            <span key={tag} className="text-[10px] uppercase tracking-wider bg-white/10 backdrop-blur-md text-white px-3 py-1 rounded-full border border-white/10">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Main Info */}
                                    <div className="transform transition-transform duration-500 group-hover:-translate-y-4">
                                        <p className="text-electric-cyan text-xs font-bold uppercase tracking-widest mb-2">
                                            {project.category}
                                        </p>
                                        <h4 className="text-3xl font-monument text-white mb-4 group-hover:text-electric-cyan transition-colors">
                                            {project.title}
                                        </h4>
                                        <p className="text-gray-400 text-sm leading-relaxed mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 line-clamp-2">
                                            {project.description}
                                        </p>
                                    </div>

                                    {/* Bottom Stats & Action */}
                                    <div className="flex items-center justify-between border-t border-white/10 pt-6 mt-2 opacity-80 group-hover:opacity-100 transition-opacity">
                                        <div>
                                            <p className="text-2xl font-bold text-white font-monument">{project.stats.value}</p>
                                            <p className="text-[10px] text-gray-400 uppercase tracking-wider">{project.stats.label}</p>
                                        </div>
                                        <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-electric-cyan group-hover:text-black group-hover:border-electric-cyan transition-all duration-300">
                                            <ExternalLink className="w-5 h-5" />
                                        </div>
                                    </div>

                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <div className="mt-12 md:hidden text-center">
                        <Link href="/case-studies" className="inline-flex items-center gap-2 text-white border-b border-electric-cyan pb-1 hover:text-electric-cyan transition-colors uppercase tracking-widest text-xs font-bold">
                            View All Projects <ArrowUpRight className="w-4 h-4" />
                        </Link>
                    </div>

                </div>
            </div>
        </section>
    );
}
