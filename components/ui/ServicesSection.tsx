'use client';

import { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const services = [
    {
        id: '01',
        title: 'Web Engineering',
        description: 'Scalable platforms using Next.js & Distributed Systems.',
        tags: ['Next.js 14', 'Django', 'Kubernetes', 'R3F'],
        image: '/services/web-engineering.png',
        slug: 'web'
    },
    {
        id: '02',
        title: 'Generative AI',
        description: 'Custom LLMs, RAG Systems & Autonomous Agents.',
        tags: ['RAG Systems', 'Vector DBs', 'AutoGPT', 'LangChain'],
        image: '/services/gen-ai.png',
        slug: 'llm'
    },
    {
        id: '03',
        title: 'Growth Engineering',
        description: 'Data-driven SEO, AEO & Conversion Optimization.',
        tags: ['Technical SEO', 'Local Pack', 'PPC Ads', 'CRO'],
        image: '/services/growth.png',
        slug: 'marketing'
    },
    {
        id: '04',
        title: 'Branding & Design',
        description: 'Immersive 3D Aesthetics & User-Centric Interfaces.',
        tags: ['3D Web', 'Motion Design', 'Brand Identity'],
        image: '/services/branding.png',
        slug: 'frontend'
    },
    {
        id: '05',
        title: 'Local SEO',
        description: 'Dominate Google Maps & Attract Local Customers.',
        tags: ['GMB Optimization', 'Local Citations', 'Geo-Targeting'],
        image: '/services/local-seo.png',
        slug: 'local-seo'
    }
];

export default function ServicesSection() {
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const [progress, setProgress] = useState(0);

    const ticking = useRef(false);

    const updateProgress = () => {
        if (scrollContainerRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
            const scrollRange = scrollWidth - clientWidth;
            const currentProgress = scrollRange > 0 ? (scrollLeft / scrollRange) * 100 : 0;
            setProgress(Math.min(100, Math.max(0, currentProgress)));
        }
    };

    useEffect(() => {
        const container = scrollContainerRef.current;
        if (container) {
            container.addEventListener('scroll', updateProgress, { passive: true });
            window.addEventListener('resize', updateProgress, { passive: true });
            updateProgress();
        }
        return () => {
            container?.removeEventListener('scroll', updateProgress);
            window.removeEventListener('resize', updateProgress);
        };
    }, []);

    const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            if (!isPaused) {
                handleScroll('right');
            }
        }, 3000);
        return () => clearInterval(interval);
    }, [isPaused]);

    const handleScroll = (direction: 'left' | 'right') => {
        if (scrollContainerRef.current) {
            const container = scrollContainerRef.current;
            const scrollAmount = container.clientWidth < 768 ? container.clientWidth : 420;
            const maxScroll = container.scrollWidth - container.clientWidth;

            if (direction === 'right') {
                if (container.scrollLeft >= maxScroll - 10) {
                    container.scrollTo({ left: 0, behavior: 'smooth' });
                } else {
                    container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
                }
            } else {
                container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
            }
        }
    };

    return (
        <section className="relative w-full max-w-[1700px] mx-auto px-4 md:px-6 mb-24" id="services">

            <div className="relative rounded-[2.5rem] bg-[#02182B] overflow-hidden py-24 px-4 md:px-12">
                {/* Background Ambience */}
                <div className="absolute inset-0 opacity-[0.03] z-0"
                    style={{ backgroundImage: 'linear-gradient(#4b5563 1px, transparent 1px), linear-gradient(90deg, #4b5563 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
                </div>
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-electric-cyan/5 rounded-full blur-[120px] pointer-events-none z-0" />
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-ants-blue/5 rounded-full blur-[120px] pointer-events-none z-0" />

                <div className="relative z-10 w-full">

                    {/* Header & Controls */}
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
                        <div>
                            <h2 className="text-electric-cyan font-bold tracking-widest uppercase mb-4 text-xs">
                                Our Services
                            </h2>
                            <h3 className="text-3xl md:text-5xl font-monument uppercase tracking-wider text-white">
                                Architecting <span className="text-gray-500">The Future</span>
                            </h3>
                        </div>


                    </div>

                    {/* Carousel Track with Absolute Actions */}
                    <div
                        className="relative"
                        onMouseEnter={() => setIsPaused(true)}
                        onMouseLeave={() => setIsPaused(false)}
                    >
                        {/* Left Button */}
                        <button
                            onClick={() => handleScroll('left')}
                            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-20 p-3 rounded-full border border-white/10 transition-all duration-300 hover:bg-electric-cyan hover:text-black hover:border-electric-cyan text-white bg-[#02182B]/90 backdrop-blur-md shadow-lg active:scale-95 hidden md:flex items-center justify-center"
                            aria-label="Scroll left"
                        >
                            <ChevronLeft className="w-6 h-6" />
                        </button>

                        <div
                            ref={scrollContainerRef}
                            className="flex gap-6 md:gap-8 overflow-x-auto snap-x snap-mandatory pb-8 -mb-8 scrollbar-hide"
                            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                        >
                            {services.map((service) => (
                                <div key={service.id} className="snap-center flex-none">
                                    <ServiceCard service={service} />
                                </div>
                            ))}
                        </div>

                        {/* Right Button */}
                        <button
                            onClick={() => handleScroll('right')}
                            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-20 p-3 rounded-full border border-white/10 transition-all duration-300 hover:bg-electric-cyan hover:text-black hover:border-electric-cyan text-white bg-[#02182B]/90 backdrop-blur-md shadow-lg active:scale-95 hidden md:flex items-center justify-center"
                            aria-label="Scroll right"
                        >
                            <ChevronRight className="w-6 h-6" />
                        </button>
                    </div>

                    {/* Progress Bar */}
                    <div className="mt-12 w-full h-px bg-white/10 relative overflow-hidden">
                        <motion.div
                            className="absolute top-0 left-0 h-full bg-electric-cyan"
                            initial={{ width: 0 }}
                            animate={{ width: `${Math.max(5, progress)}%` }}
                            transition={{ duration: 0.1 }}
                        />
                    </div>

                    {/* Explore Link */}
                    <div className="mt-12 text-center">
                        <Link
                            href="/services"
                            className="inline-flex items-center gap-2 text-white border-b border-electric-cyan pb-1 hover:text-electric-cyan transition-colors uppercase tracking-widest text-xs font-bold"
                        >
                            Explore Our Services <ArrowUpRight className="w-4 h-4" />
                        </Link>
                    </div>

                </div>
            </div>
        </section>
    );
}

function ServiceCard({ service }: { service: typeof services[0] }) {
    return (
        <Link href={`/services/${service.slug}`} className="block group relative w-[85vw] md:w-[400px] min-w-[85vw] md:min-w-[400px] flex-none h-[450px] md:h-[550px] overflow-hidden rounded-3xl bg-neutral-900 border border-white/10 flex flex-col justify-end transition-all duration-500 hover:border-electric-cyan/50 hover:shadow-[0_0_30px_rgba(0,255,240,0.1)]">

            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 768px) 85vw, 400px"
                    className="object-cover opacity-60 group-hover:opacity-80 group-hover:scale-110 transition-transform duration-700 ease-in-out"
                />
                <div className="absolute inset-0 bg-linear-to-t from-[#02182B] via-[#02182B]/80 to-transparent" />
            </div>

            {/* Content */}
            <div className="relative z-10 p-8 flex flex-col h-full justify-end">

                {/* ID - Floating top right */}
                <div className="absolute top-8 right-8 w-12 h-12 rounded-full border border-white/20 bg-black/30 backdrop-blur-md flex items-center justify-center group-hover:bg-electric-cyan group-hover:text-black group-hover:border-electric-cyan transition-all duration-300">
                    <span className="font-bold text-sm tracking-tighter">{service.id}</span>
                </div>

                {/* Main Text */}
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <h4 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-electric-cyan transition-colors duration-300">
                        {service.title}
                    </h4>

                    <p className="text-gray-400 text-sm md:text-base mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                        {service.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-6 opacity-80 group-hover:opacity-100 transition-opacity">
                        {service.tags.map(tag => (
                            <span key={tag} className="text-[10px] uppercase tracking-wider text-gray-300 border border-white/10 px-2 py-1 rounded-full bg-white/5">
                                {tag}
                            </span>
                        ))}
                    </div>

                    <div className="flex items-center gap-2 text-sm text-electric-cyan font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200">
                        Learn More <ArrowUpRight className="w-4 h-4" />
                    </div>
                </div>
            </div>
        </Link>
    );
}
