'use client';

import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';

export default function ServicesSection() {
    const [activeService, setActiveService] = useState('01');

    const services = [
        {
            id: '01',
            title: 'Web Engineering',
            description: 'Scalable platforms using Next.js & Distributed Systems.',
            tags: ['Next.js 14', 'Django', 'Kubernetes', 'WebSockets', 'R3F'],
            image: '/services/web-engineering.png'
        },
        {
            id: '02',
            title: 'Generative AI',
            description: 'Custom LLMs, RAG Systems & Autonomous Agents.',
            tags: ['RAG Systems', 'Vector DBs', 'AutoGPT', 'n8n', 'LangChain'],
            image: '/services/gen-ai.png'
        },
        {
            id: '03',
            title: 'Growth Engineering',
            description: 'Data-driven SEO, AEO & Conversion Optimization.',
            tags: ['Technical SEO', 'Local Pack', 'PPC Ads', 'Lead Gen', 'CRO'],
            image: '/services/growth.png'
        },
        {
            id: '04',
            title: 'Branding & Design',
            description: 'Immersive 3D Aesthetics & User-Centric Interfaces.',
            tags: ['3D Web', 'Motion Design', 'Brand Identity', 'Design Systems'],
            image: '/services/branding.png'
        },
        {
            id: '05',
            title: 'Local SEO',
            description: 'Dominate Google Maps & Attract Local Customers.',
            tags: ['GMB Optimization', 'Local Citations', 'Geo-Targeting', 'Map Pack'],
            image: '/services/local-seo.png'
        }
    ];

    return (
        <section className="relative w-full max-w-[1700px] mx-auto px-4 md:px-6 mb-24" id="services">
            <div className="relative rounded-[2.5rem] bg-[#02182B] text-white overflow-hidden py-24 px-6 md:px-12">

                {/* Background Ambience */}
                <div className="absolute inset-0 opacity-[0.02]"
                    style={{ backgroundImage: 'linear-gradient(#4b5563 1px, transparent 1px), linear-gradient(90deg, #4b5563 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
                </div>

                {/* Soft glows */}
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-electric-cyan/5 rounded-full blur-[120px] pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-ants-blue/5 rounded-full blur-[120px] pointer-events-none" />

                <div className="w-full max-w-[1400px] mx-auto relative z-10">

                    {/* Section Header */}
                    <div className="mb-20">
                        <h2 className="text-electric-cyan font-bold tracking-widest uppercase mb-4 text-xs">
                            Our Services
                        </h2>
                        <h3 className="text-3xl md:text-5xl font-monument uppercase tracking-wider">
                            Architecting <span className="text-gray-500">The Future</span>
                        </h3>
                    </div>

                    <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">

                        {/* Left Column: Navigation / List */}
                        <div className="lg:w-1/2 flex flex-col gap-2">
                            {services.map((service) => (
                                <div
                                    key={service.id}
                                    onMouseEnter={() => setActiveService(service.id)}
                                    className={`group relative p-8 cursor-pointer transition-all duration-500 border-l-2 ${activeService === service.id
                                        ? 'border-electric-cyan bg-white/3'
                                        : 'border-white/10 hover:border-white/30 hover:bg-white/1'
                                        }`}
                                >
                                    <div className="flex items-start justify-between">
                                        <div className="space-y-4">
                                            <div className="flex items-center gap-4">
                                                <span className={`font-mono text-sm transition-colors duration-300 ${activeService === service.id ? 'text-electric-cyan' : 'text-gray-600'
                                                    }`}>
                                                    /{service.id}
                                                </span>
                                                <h4 className={`text-2xl md:text-3xl font-bold transition-colors duration-300 ${activeService === service.id ? 'text-white' : 'text-gray-400 group-hover:text-gray-200'
                                                    }`}>
                                                    {service.title}
                                                </h4>
                                            </div>

                                            <p className={`text-sm md:text-base leading-relaxed max-w-md transition-all duration-500 ${activeService === service.id ? 'text-gray-300 opacity-100 max-h-24' : 'text-gray-500 opacity-60 max-h-0 lg:max-h-24 overflow-hidden lg:overflow-visible'
                                                }`}>
                                                {service.description}
                                            </p>

                                            {/* Tags only visible when active on mobile, always on desktop if room permits, or strictly strictly active */}
                                            <div className={`flex flex-wrap gap-2 transition-all duration-500 ${activeService === service.id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 lg:opacity-50 lg:translate-y-0'
                                                }`}>
                                                {service.tags.map(tag => (
                                                    <span key={tag} className="text-[10px] uppercase tracking-wider text-gray-500 border border-white/5 px-2 py-1 rounded bg-white/5">
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        <ArrowUpRight className={`w-6 h-6 transition-all duration-500 ${activeService === service.id ? 'text-electric-cyan rotate-45' : 'text-gray-700'
                                            }`} />
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Right Column: Sticky Visuals */}
                        <div className="lg:w-1/2 relative h-[500px] lg:h-auto hidden lg:block">
                            <div className="sticky top-24 w-full aspect-square rounded-2xl overflow-hidden border border-white/10 bg-black/20 backdrop-blur-sm">
                                {services.map((service) => (
                                    <div
                                        key={service.id}
                                        className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${activeService === service.id ? 'opacity-100 z-10' : 'opacity-0 z-0'
                                            }`}
                                    >
                                        <Image
                                            src={service.image}
                                            alt={service.title}
                                            fill
                                            className="object-cover"
                                            priority={service.id === '01'}
                                        />
                                        {/* Overlay Gradient for Text Contrast if needed, but these are abstract arts */}
                                        <div className="absolute inset-0 bg-linear-to-t from-[#02182B] via-transparent to-transparent opacity-60" />

                                        {/* Floating Label in the visual */}
                                        <div className="absolute bottom-8 left-8 right-8 z-20">
                                            <div className="inline-block px-3 py-1 bg-black/60 backdrop-blur-md border border-white/10 rounded-lg text-white/90 text-sm font-medium">
                                                {service.title} Visualization
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}
