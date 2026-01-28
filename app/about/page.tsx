
'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';
import { ArrowDown, CheckCircle2, Zap, Globe, Users, Trophy } from 'lucide-react';
import Link from 'next/link';

// Timeline Data
const timelineEvents = [
    {
        year: '2020',
        title: 'The Inception',
        description: 'WebAnts born with a singular vision: to bridge the gap between aesthetic design and robust engineering. We started as a small team of three, working out of a shared garage, fueled by caffeine and big dreams.',
        icon: Zap
    },
    {
        year: '2021',
        title: 'Global Expansion',
        description: 'Our commitment to quality quickly crossed borders. We secured our first international enterprise clients and expanded our team to 15 specialists, establishing a 24/7 workflow to serve global time zones.',
        icon: Globe
    },
    {
        year: '2022',
        title: 'AI Integration',
        description: 'Recognizing the shift in the digital landscape, we pivoted early to integrate Artificial Intelligence into our workflow. We launched our first AI-powered chatbot solutions and automated internal processes.',
        icon: Users
    },
    {
        year: '2023',
        title: 'Enterprise Excellence',
        description: 'Scaled our operations to handle high-concurrency applications. Partnered with major tech firms to deliver mission-critical infrastructure. Our code now powers platforms used by millions daily.',
        icon: Trophy
    },
    {
        year: '2024',
        title: 'Top Rated Plus',
        description: 'Achieved "Top Rated Plus" status on major platforms, placing us in the top 3% of global talent. We continue to push boundaries with Next.js 14, RAG Systems, and immersive 3D web experiences.',
        icon: CheckCircle2
    }
];

export default function AboutPage() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

    return (
        <main ref={containerRef} className="min-h-screen bg-starlight-white text-deep-void selection:bg-electric-cyan selection:text-white overflow-hidden">

            {/* Background Ambience */}
            <div className="fixed inset-0 pointer-events-none z-0">
                <div className="absolute top-[-20%] right-[-20%] w-[1000px] h-[1000px] bg-electric-cyan/5 rounded-full blur-[150px]" />
                <div className="absolute bottom-[-20%] left-[-20%] w-[800px] h-[800px] bg-ants-blue/5 rounded-full blur-[150px]" />
                <div className="absolute inset-0 opacity-[0.4]"
                    style={{ backgroundImage: 'radial-gradient(#ccc 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
                </div>
            </div>

            {/* Hero Section */}
            <section className="relative z-10 pt-48 pb-32 px-6 md:px-12 max-w-[1600px] mx-auto text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-electric-cyan font-bold tracking-[0.2em] uppercase text-sm mb-6">
                        Established 2020
                    </h2>
                    <h1 className="text-5xl md:text-8xl font-monument uppercase leading-[0.9] mb-8 text-deep-void">
                        Engineering <br /> The <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-cyan to-ants-blue">Future</span>
                    </h1>
                    <p className="text-lg md:text-2xl text-gray-500 max-w-3xl mx-auto font-light leading-relaxed">
                        We are a digital product agency that combines data-driven strategy with world-class engineering to build brands that matter.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 1 }}
                    className="mt-24 flex justify-center"
                >
                    <div className="w-12 h-20 rounded-full border border-gray-300 p-2 flex justify-center">
                        <motion.div
                            animate={{ y: [0, 24, 0] }}
                            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                            className="w-2 h-2 bg-deep-void rounded-full"
                        />
                    </div>
                </motion.div>
            </section>

            {/* Stats Section */}
            <section className="relative z-10 py-24 border-y border-gray-200 bg-white/50 backdrop-blur-md">
                <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
                    {[
                        { label: 'Years Experience', value: '4+' },
                        { label: 'Projects Delivered', value: '150+' },
                        { label: 'Team Members', value: '25+' },
                        { label: 'Client Retention', value: '96%' },
                    ].map((stat, idx) => (
                        <div key={idx}>
                            <h3 className="text-4xl md:text-6xl font-monument text-deep-void mb-2">{stat.value}</h3>
                            <p className="text-sm font-bold uppercase tracking-widest text-gray-500">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Timeline Section */}
            <section className="relative z-10 py-32 px-6 md:px-12 max-w-[1200px] mx-auto">
                <div className="text-center mb-24">
                    <h2 className="text-4xl md:text-5xl font-monument uppercase mb-6">Our <span className="text-electric-cyan">Journey</span></h2>
                    <p className="text-gray-500 max-w-xl mx-auto">From a shared garage to a global digital powerhouse. Here is how we got here.</p>
                </div>

                <div className="relative">
                    {/* Vertical Line */}
                    <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gray-200 -translate-x-1/2 hidden md:block" />
                    <div className="absolute left-4 top-0 bottom-0 w-px bg-gray-200 md:hidden" />

                    <div className="space-y-24">
                        {timelineEvents.map((event, idx) => {
                            const isEven = idx % 2 === 0;
                            return (
                                <motion.div
                                    key={event.year}
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ duration: 0.6 }}
                                    className={`relative flex flex-col md:flex-row items-center gap-8 md:gap-0 ${isEven ? 'md:flex-row-reverse' : ''}`}
                                >
                                    {/* Content Info */}
                                    <div className={`w-full md:w-1/2 pl-12 md:pl-0 ${isEven ? 'md:pl-16 text-left' : 'md:pr-16 md:text-right'}`}>
                                        <span className="text-6xl md:text-8xl font-monument text-gray-100 absolute -top-10 -z-10 select-none opacity-50">
                                            {event.year}
                                        </span>
                                        <div className="relative z-10">
                                            <h3 className="text-2xl font-monument uppercase mb-4 text-deep-void">{event.title}</h3>
                                            <p className="text-gray-600 leading-relaxed text-lg">
                                                {event.description}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Center Icon */}
                                    <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-white border border-gray-200 flex items-center justify-center z-20 shadow-lg shadow-electric-cyan/10">
                                        <event.icon className="w-5 h-5 text-electric-cyan" />
                                    </div>

                                    {/* Empty Spacer for alternating layout */}
                                    <div className="w-full md:w-1/2" />
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Values / CTA */}
            <section className="relative z-10 py-32 bg-black text-white rounded-t-[4rem] text-center px-6">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-4xl md:text-6xl font-monument uppercase mb-12">Ready to write <br /> <span className="text-electric-cyan">History?</span></h2>
                    <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
                        Join the hundreds of brands that have trusted WebAnts to architect their digital future.
                    </p>
                    <Link href="/contact" className="inline-block bg-white text-black px-12 py-5 rounded-full font-bold uppercase tracking-wider hover:bg-electric-cyan transition-colors">
                        Start a Project
                    </Link>
                </div>
            </section>

        </main>
    );
}
