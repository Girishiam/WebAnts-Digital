'use client';

import { caseStudies } from '@/data/caseStudies';
import { notFound, useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ExternalLink, Activity, Layers, Zap } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function CaseStudyDetailsPage() {
    const params = useParams();
    const slug = params?.slug as string;
    const project = caseStudies.find(p => p.slug === slug);

    if (!project) {
        return notFound();
    }

    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 1.1]);
    const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

    return (
        <article ref={containerRef} className="bg-starlight-white text-deep-void selection:bg-electric-cyan selection:text-white">

            {/* Navigation Back */}
            <nav className="absolute top-32 left-0 w-full z-40 px-6 md:px-12 text-white">
                <Link href="/case-studies" className="inline-flex items-center gap-2 font-bold uppercase tracking-widest text-xs hover:text-electric-cyan transition-colors">
                    <ArrowLeft className="w-4 h-4" /> Back to Works
                </Link>
            </nav>

            {/* Cinematic Hero */}
            <div className="relative h-[85vh] w-full overflow-hidden bg-deep-void">
                <motion.div
                    style={{ scale: heroScale, opacity: heroOpacity }}
                    className="absolute inset-0 w-full h-full"
                >
                    <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover opacity-60"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-deep-void via-transparent to-deep-void/40" />
                </motion.div>

                <div className="absolute bottom-0 left-0 w-full p-6 md:p-20 z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="max-w-5xl"
                    >
                        <div className="flex items-center gap-4 mb-6">
                            <span className="text-electric-cyan font-bold tracking-widest uppercase text-xs md:text-sm border border-electric-cyan/20 bg-electric-cyan/10 px-4 py-1.5 rounded-full">
                                {project.category}
                            </span>
                        </div>
                        <h1 className="text-4xl md:text-7xl lg:text-8xl font-monument uppercase text-white leading-[0.9] mb-8">
                            {project.title}
                        </h1>
                        <p className="text-lg md:text-2xl text-gray-300 max-w-2xl font-light leading-relaxed">
                            {project.description}
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* Content Section */}
            <div className="relative z-20 bg-starlight-white -mt-20 rounded-t-[3rem] pt-24 pb-24 px-6 md:px-12 shadow-[0_-20px_60px_rgba(0,0,0,0.3)] min-h-screen">
                <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">

                    {/* Sidebar / Metadata */}
                    <div className="lg:col-span-4 space-y-12">
                        <div className="p-8 bg-gray-50 rounded-[2rem] border border-gray-100">
                            <h3 className="font-monument uppercase text-lg mb-6">Project Info</h3>

                            <div className="space-y-8">
                                <div className="grid grid-cols-2 gap-6">
                                    <div>
                                        <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2">Year</p>
                                        <p className="font-monument text-lg">{project.year || '2024'}</p>
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2">Platform</p>
                                        <p className="font-medium text-lg text-gray-800">{project.platform}</p>
                                    </div>
                                </div>

                                <div>
                                    <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2">Industry</p>
                                    <p className="font-medium text-lg text-gray-800">{project.industry}</p>
                                </div>

                                <div>
                                    <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2">Services</p>
                                    <ul className="flex flex-col gap-2">
                                        {project.services?.map(service => (
                                            <li key={service} className="flex items-center gap-2 text-sm font-medium text-gray-600">
                                                <div className="w-1 h-1 rounded-full bg-electric-cyan" />
                                                {service}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div>
                                    <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-3">Tech Stack</p>
                                    <div className="flex flex-wrap gap-2">
                                        {project.techStack.map(tech => (
                                            <span key={tech} className="bg-white border border-gray-200 px-3 py-1.5 rounded-lg text-xs font-bold text-deep-void shadow-sm">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="pt-8 border-t border-gray-200">
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group flex items-center justify-between w-full bg-black text-white px-6 py-4 rounded-xl font-bold uppercase tracking-wider text-xs hover:bg-electric-cyan hover:text-black transition-all duration-300"
                                    >
                                        Visit Live Site <ExternalLink className="w-4 h-4 group-hover:rotate-45 transition-transform" />
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Quick Stats (Mock Data for now, could be added to data structure later) */}
                        <div className="grid grid-cols-2 gap-4">
                            <div className="p-6 bg-[#0B0D12] text-white rounded-[2rem]">
                                <Activity className="w-6 h-6 text-electric-cyan mb-4" />
                                <p className="text-3xl font-monument">100<span className="text-electric-cyan">%</span></p>
                                <p className="text-xs text-gray-400 uppercase tracking-widest mt-1">Lighthouse Score</p>
                            </div>
                            <div className="p-6 bg-[#0B0D12] text-white rounded-[2rem]">
                                <Zap className="w-6 h-6 text-ants-blue mb-4" />
                                <p className="text-3xl font-monument">0.2<span className="text-ants-blue">s</span></p>
                                <p className="text-xs text-gray-400 uppercase tracking-widest mt-1">Load Time</p>
                            </div>
                        </div>
                    </div>

                    {/* Main Narrative */}
                    <div className="lg:col-span-8 space-y-20">
                        {/* Challenge */}
                        <section>
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-12 h-12 rounded-full bg-red-50 text-red-500 flex items-center justify-center">
                                    <span className="font-monument text-lg">01</span>
                                </div>
                                <h2 className="text-3xl md:text-4xl font-monument uppercase">The Challenge</h2>
                            </div>
                            <p className="text-lg md:text-xl text-gray-600 leading-relaxed pl-6 md:pl-16 border-l-2 border-red-100 whitespace-pre-line">
                                {project.challenge}
                            </p>
                        </section>

                        {/* Solution */}
                        <section>
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-12 h-12 rounded-full bg-blue-50 text-ants-blue flex items-center justify-center">
                                    <span className="font-monument text-lg">02</span>
                                </div>
                                <h2 className="text-3xl md:text-4xl font-monument uppercase">Our Solution</h2>
                            </div>
                            <div className="pl-6 md:pl-16 border-l-2 border-blue-50 space-y-8">
                                <p className="text-lg md:text-xl text-gray-600 leading-relaxed whitespace-pre-line">
                                    {project.solution}
                                </p>

                                <div className="bg-gray-50 border border-gray-100 rounded-3xl p-6 md:p-8">
                                    <h4 className="font-bold uppercase tracking-widest text-sm mb-6 flex items-center gap-2">
                                        <Layers className="w-4 h-4 text-ants-blue" /> Key Features
                                    </h4>
                                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        {project.features.map((feature, i) => (
                                            <li key={i} className="flex items-start gap-3 text-gray-600">
                                                <div className="w-1.5 h-1.5 rounded-full bg-ants-blue mt-2.5 shrink-0" />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </section>

                        {/* Result */}
                        <section>
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-12 h-12 rounded-full bg-green-50 text-emerald-500 flex items-center justify-center">
                                    <span className="font-monument text-lg">03</span>
                                </div>
                                <h2 className="text-3xl md:text-4xl font-monument uppercase">The Result</h2>
                            </div>
                            <p className="text-lg md:text-xl text-gray-600 leading-relaxed pl-6 md:pl-16 border-l-2 border-emerald-100 whitespace-pre-line">
                                {project.result}
                            </p>
                        </section>

                        {/* Image Gallery (Placeholder for future extra images) */}
                        <div className="relative aspect-video rounded-[2rem] overflow-hidden">
                            <Image
                                src={project.image}
                                alt="Project Screenshot"
                                fill
                                className="object-cover hover:scale-105 transition-transform duration-700"
                            />
                        </div>
                    </div>

                </div>

                {/* Next Project CTA */}
                <div className="mt-32 pt-16 border-t border-gray-100">
                    <div className="flex flex-col items-center justify-center text-center">
                        <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">Ready for impact?</p>
                        <h2 className="text-4xl md:text-7xl font-monument uppercase mb-8">
                            Start Your <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-cyan to-ants-blue">Transformation</span>
                        </h2>
                        <Link href="/contact" className="bg-deep-void text-white px-10 py-5 rounded-full font-bold uppercase tracking-widest hover:bg-electric-cyan transition-colors">
                            Start a Project
                        </Link>
                    </div>
                </div>
            </div>
        </article>
    );
}
