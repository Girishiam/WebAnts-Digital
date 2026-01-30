'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight, ExternalLink } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { caseStudies } from '@/data/caseStudies';

export default function CaseStudySection() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    // Display only the first 3 case studies on the home page
    const featuredCases = caseStudies.slice(0, 3);

    return (
        <section className="relative w-full max-w-[1700px] mx-auto px-4 md:px-6 mb-24">

            <div className="relative rounded-[2.5rem] bg-deep-void overflow-hidden py-24 px-4 md:px-12 group/container">

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
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-cyan to-white">
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
                        {featuredCases.map((project, index) => (
                            <Link
                                href={`/case-studies/${project.slug}`}
                                key={project.id}
                                className="block"
                            >
                                <motion.div
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
                                    <div className="absolute inset-0 bg-gradient-to-t from-deep-void via-deep-void/50 to-transparent" />

                                    {/* Overlay Content */}
                                    <div className="absolute inset-0 p-8 flex flex-col justify-end z-10">

                                        {/* Top Tags */}
                                        <div className="absolute top-8 left-8 flex flex-wrap gap-2">
                                            {project.techStack.slice(0, 3).map(tag => (
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
                                                <span className="text-xs text-electric-cyan uppercase tracking-widest font-bold">Read Case Study</span>
                                            </div>
                                            <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-electric-cyan group-hover:text-black group-hover:border-electric-cyan transition-all duration-300">
                                                <ExternalLink className="w-5 h-5" />
                                            </div>
                                        </div>

                                    </div>
                                </motion.div>
                            </Link>
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
