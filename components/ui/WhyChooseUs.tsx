'use client';

import { motion, useInView, useSpring } from 'framer-motion';
import { ArrowRight, CheckCircle2, Trophy, Users, Zap } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

const stats = [
    { value: 100, suffix: '+', label: 'Projects Delivered', icon: CheckCircle2 },
    { value: 25, suffix: '+', label: 'Industries Catered', icon: Users },
    { value: 98, suffix: '%', label: 'Client Satisfaction', icon: Trophy },
    { value: 10, suffix: '+', label: 'Years Experience', icon: Zap },
];

function Counter({ value, suffix }: { value: number, suffix: string }) {
    const ref = useRef<HTMLSpanElement>(null);
    const inView = useInView(ref, { once: true, margin: "-100px" });
    const springValue = useSpring(0, { duration: 2000, bounce: 0 });

    useEffect(() => {
        if (inView) {
            springValue.set(value);
        }
    }, [inView, value, springValue]);

    useEffect(() => {
        const unsubscribe = springValue.on("change", (latest) => {
            if (ref.current) {
                ref.current.textContent = Math.floor(latest) + suffix;
            }
        });
        return () => unsubscribe();
    }, [springValue, suffix]);

    return <span ref={ref} className="tabular-nums" />;
}

export default function WhyChooseUs() {
    return (
        <section className="relative w-full max-w-[1700px] mx-auto px-4 md:px-6 mb-24">

            <div className="relative rounded-[2.5rem] bg-white overflow-hidden py-24 px-4 md:px-12 shadow-2xl shadow-electric-cyan/5">

                {/* Creative Background Pattern */}
                <div className="absolute inset-0 z-0 opacity-40 pointers-events-none">
                    <div className="absolute top-[-50%] left-[-20%] w-[80%] h-[80%] rounded-full bg-linear-to-r from-electric-cyan/10 to-transparent blur-[120px]" />
                    <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] rounded-full bg-linear-to-l from-ants-blue/5 to-transparent blur-[100px]" />
                    {/* Grid Pattern */}
                    <div className="absolute inset-0"
                        style={{ backgroundImage: 'radial-gradient(#e5e7eb 1px, transparent 1px)', backgroundSize: '30px 30px' }}
                    />
                </div>

                <div className="relative z-10 max-w-[1400px] mx-auto">

                    {/* Top Section: CTA & Intro */}
                    <div className="flex flex-col lg:flex-row gap-16 items-center justify-between mb-24">
                        <div className="max-w-2xl relative">
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                            >
                                <h2 className="text-4xl md:text-6xl font-monument uppercase leading-none mb-8 text-black tracking-tight">
                                    Why Choose <br />
                                    <span className="text-transparent bg-clip-text bg-linear-to-r from-electric-cyan to-ants-blue">
                                        WebAnts?
                                    </span>
                                </h2>
                                <p className="text-gray-600 text-lg md:text-xl leading-relaxed mb-10 border-l-4 border-electric-cyan pl-6">
                                    We don't just build websites; we engineer <span className="font-bold text-black">digital ecosystems</span>.
                                    With a fusion of creative daring and technical precision, we accelerate your market growth and ensuring you don't just compete, but dominate.
                                </p>
                                <Link
                                    href="/contact"
                                    className="group inline-flex items-center gap-4 bg-[#02182B] text-white px-10 py-5 rounded-full font-bold uppercase tracking-wider hover:bg-electric-cyan hover:text-black transition-all duration-300 shadow-lg hover:shadow-electric-cyan/25 hover:scale-105 active:scale-95"
                                >
                                    Start Your Journey
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </motion.div>
                        </div>

                        {/* Creative Visual Element (Abstract 3D-ish shape representation) */}
                        <div className="hidden lg:block relative w-[400px] h-[400px]">
                            <div className="absolute inset-0 bg-linear-to-tr from-electric-cyan to-ants-blue rounded-full opacity-10 blur-3xl animate-pulse" />
                            <div className="relative z-10 grid grid-cols-2 gap-4 rotate-3">
                                {[1, 2, 3, 4].map((i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.1, duration: 0.5 }}
                                        className="bg-white p-6 rounded-2xl shadow-xl border border-gray-100 flex items-center justify-center aspect-square transform hover:-translate-y-2 transition-transform duration-300"
                                    >
                                        <div className={`w-16 h-16 rounded-full bg-gray-50 flex items-center justify-center text-electric-cyan`}>
                                            {i === 1 && <Users className="w-8 h-8" />}
                                            {i === 2 && <Zap className="w-8 h-8" />}
                                            {i === 3 && <Trophy className="w-8 h-8" />}
                                            {i === 4 && <CheckCircle2 className="w-8 h-8" />}
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Interactive Stats Section */}
                    <div className="relative">
                        <div className="text-center mb-16">
                            <h3 className="text-2xl md:text-3xl font-monument uppercase text-black mb-4">
                                Empowering <span className="text-electric-cyan">Transformation</span>
                            </h3>
                            <div className="w-24 h-1 bg-electric-cyan mx-auto rounded-full" />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {stats.map((stat, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1, duration: 0.6 }}
                                    className="group relative bg-gray-50 hover:bg-white p-8 rounded-4xl border border-transparent hover:border-electric-cyan/20 shadow-none hover:shadow-xl hover:shadow-electric-cyan/5 transition-all duration-500 text-center cursor-default overflow-hidden"
                                >
                                    <div className="absolute inset-0 bg-linear-to-b from-transparent to-electric-cyan/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                    <div className="relative z-10">
                                        <div className="mx-auto w-12 h-12 mb-6 rounded-full bg-white border border-gray-100 flex items-center justify-center text-electric-cyan shadow-sm group-hover:scale-110 transition-transform duration-500">
                                            <stat.icon className="w-6 h-6" />
                                        </div>

                                        <div className="text-5xl md:text-6xl font-bold text-black font-monument mb-3 tracking-tighter group-hover:text-electric-cyan transition-colors duration-300">
                                            <Counter value={stat.value} suffix={stat.suffix} />
                                        </div>

                                        <div className="text-gray-500 font-medium text-sm tracking-wide uppercase group-hover:text-gray-800 transition-colors">
                                            {stat.label}
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
