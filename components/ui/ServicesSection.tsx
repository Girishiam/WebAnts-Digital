'use client';

import { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';

const services = [
    {
        id: '01',
        title: 'Web Engineering',
        description: 'Scalable platforms using Next.js & Distributed Systems.',
        tags: ['Next.js 14', 'Django', 'Kubernetes', 'R3F'],
        image: '/services/web-engineering.png'
    },
    {
        id: '02',
        title: 'Generative AI',
        description: 'Custom LLMs, RAG Systems & Autonomous Agents.',
        tags: ['RAG Systems', 'Vector DBs', 'AutoGPT', 'LangChain'],
        image: '/services/gen-ai.png'
    },
    {
        id: '03',
        title: 'Growth Engineering',
        description: 'Data-driven SEO, AEO & Conversion Optimization.',
        tags: ['Technical SEO', 'Local Pack', 'PPC Ads', 'CRO'],
        image: '/services/growth.png'
    },
    {
        id: '04',
        title: 'Branding & Design',
        description: 'Immersive 3D Aesthetics & User-Centric Interfaces.',
        tags: ['3D Web', 'Motion Design', 'Brand Identity'],
        image: '/services/branding.png'
    },
    {
        id: '05',
        title: 'Local SEO',
        description: 'Dominate Google Maps & Attract Local Customers.',
        tags: ['GMB Optimization', 'Local Citations', 'Geo-Targeting'],
        image: '/services/local-seo.png'
    }
];

export default function ServicesSection() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        if (currentIndex < services.length - 1) {
            setCurrentIndex(prev => prev + 1);
        }
    };

    const handlePrev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(prev => prev - 1);
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

                        {/* Navigation Buttons */}
                        <div className="flex gap-4">
                            <button
                                onClick={handlePrev}
                                disabled={currentIndex === 0}
                                className={`p-4 rounded-full border border-white/10 transition-all duration-300 ${currentIndex === 0
                                        ? 'opacity-30 cursor-not-allowed text-gray-500'
                                        : 'hover:bg-electric-cyan hover:text-black hover:border-electric-cyan text-white bg-white/5'
                                    }`}
                            >
                                <ChevronLeft className="w-6 h-6" />
                            </button>
                            <button
                                onClick={handleNext}
                                disabled={currentIndex >= services.length - 1} // Logic might need adjustment if showing multiple cards
                                className={`p-4 rounded-full border border-white/10 transition-all duration-300 ${currentIndex >= services.length - 1
                                        ? 'opacity-30 cursor-not-allowed text-gray-500'
                                        : 'hover:bg-electric-cyan hover:text-black hover:border-electric-cyan text-white bg-white/5'
                                    }`}
                            >
                                <ChevronRight className="w-6 h-6" />
                            </button>
                        </div>
                    </div>

                    {/* Carousel Track */}
                    <div className="overflow-hidden">
                        <motion.div
                            animate={{ x: `-${currentIndex * (100 / (typeof window !== 'undefined' && window.innerWidth < 768 ? 1.1 : 3.2))}%` }}
                            transition={{ duration: 0.6, ease: "easeInOut" }}
                            className="flex gap-8 cursor-grab active:cursor-grabbing"
                        >
                            {services.map((service) => (
                                <ServiceCard key={service.id} service={service} />
                            ))}
                        </motion.div>
                    </div>

                    {/* Progress Bar */}
                    <div className="mt-12 w-full h-px bg-white/10 relative overflow-hidden">
                        <motion.div
                            className="absolute top-0 left-0 h-full bg-electric-cyan"
                            initial={{ width: 0 }}
                            animate={{ width: `${((currentIndex + 1) / services.length) * 100}%` }}
                            transition={{ duration: 0.5 }}
                        />
                    </div>

                </div>
            </div>
        </section>
    );
}

function ServiceCard({ service }: { service: typeof services[0] }) {
    return (
        <div className="group relative w-[300px] md:w-[400px] h-[450px] md:h-[550px] overflow-hidden rounded-3xl bg-neutral-900 border border-white/10 flex flex-col justify-end transition-all duration-500 hover:border-electric-cyan/50 hover:shadow-[0_0_30px_rgba(0,255,240,0.1)]">

            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover opacity-60 group-hover:opacity-80 group-hover:scale-110 transition-transform duration-700 ease-in-out"
                />
                <div className="absolute inset-0 bg-linear-to-t from-[#02182B] via-[#02182B]/80 to-transparent" />
            </div>

            {/* Content */}
            <div className="relative z-10 p-8 flex flex-col h-full justify-end">

                {/* ID - Floating top right */}
                <div className="absolute top-8 right-8 w-12 h-12 rounded-full border border-white/20 bg-black/30 backdrop-blur-md flex items-center justify-center group-hover:bg-electric-cyan group-hover:text-black group-hover:border-electric-cyan transition-all duration-300">
                    <span className="font-mono text-sm">{service.id}</span>
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
        </div>
    );
}
