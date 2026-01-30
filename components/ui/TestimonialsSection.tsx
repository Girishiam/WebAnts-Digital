'use client';

import { motion } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';
import Image from 'next/image';

import { testimonials, testimonialsHeader } from '@/data/testimonials';

export default function TestimonialsSection() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {
        if (isPaused) return;

        const interval = setInterval(() => {
            handleNext();
        }, 4000); // Auto-scroll every 4 seconds

        return () => clearInterval(interval);
    }, [currentIndex, isPaused]);

    const handleNext = () => {
        const visibleItems = (typeof window !== 'undefined' && window.innerWidth >= 1024 ? 3 : 1);
        if (currentIndex < testimonials.length - visibleItems) {
            setCurrentIndex(prev => prev + 1);
        } else {
            setCurrentIndex(0); // Loop back to start
        }
    };

    const handlePrev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(prev => prev - 1);
        } else {
            const visibleItems = (typeof window !== 'undefined' && window.innerWidth >= 1024 ? 3 : 1);
            setCurrentIndex(testimonials.length - visibleItems); // Loop to end
        }
    };

    return (
        <section className="relative w-full py-24 bg-white overflow-hidden" id="testimonials">

            {/* Ambient Background - Subtle Light */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-electric-cyan/5 blur-[100px] rounded-full pointer-events-none" />

            <div className="relative z-10 max-w-[1400px] mx-auto px-4 md:px-12">

                {/* Header */}
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-electric-cyan font-bold tracking-widest uppercase text-xs">
                        client feedback
                    </h2>
                    <h3 className="text-3xl md:text-5xl font-monument uppercase text-black">
                        Voices From <span className="text-electric-cyan">The Hive</span>
                    </h3>
                    <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
                        {testimonialsHeader.subtitle}
                    </p>
                </div>

                {/* Carousel Container */}
                <div
                    className="relative"
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                >

                    {/* Controls (Desktop: Outside / Mobile: Hidden or Bottom) */}
                    <div className="hidden lg:flex justify-end gap-4 mb-8">
                        <button
                            onClick={handlePrev}
                            className={`p-3 rounded-full border border-black/10 transition-colors hover:bg-electric-cyan hover:text-black hover:border-electric-cyan text-black`}
                        >
                            <ChevronLeft className="w-6 h-6" />
                        </button>
                        <button
                            onClick={handleNext}
                            className={`p-3 rounded-full border border-black/10 transition-colors hover:bg-electric-cyan hover:text-black hover:border-electric-cyan text-black`}
                        >
                            <ChevronRight className="w-6 h-6" />
                        </button>
                    </div>

                    <div className="overflow-hidden p-4 -m-4">
                        <motion.div
                            className="flex gap-6 md:gap-8"
                            initial={false}
                            animate={{ x: `-${currentIndex * (typeof window !== 'undefined' && window.innerWidth < 1024 ? 100 : 33.33)}%` }}
                            transition={{ ease: "easeInOut", duration: 0.5 }}
                        >
                            {testimonials.map((t) => (
                                <div key={t.id} className="min-w-full lg:min-w-[calc(33.33%-1.33rem)]">
                                    <div className="h-full p-8 rounded-3xl bg-gray-50 border border-gray-200 hover:border-electric-cyan/50 hover:shadow-lg transition-all duration-300 flex flex-col justify-between">

                                        <div>
                                            {/* Stars */}
                                            <div className="flex gap-1 mb-6 text-amber-400">
                                                {[...Array(5)].map((_, i) => (
                                                    <Star
                                                        key={i}
                                                        className={`w-4 h-4 ${i < t.stars ? 'fill-current' : 'text-gray-300'}`}
                                                    />
                                                ))}
                                            </div>

                                            {/* Quote */}
                                            <Quote className="w-8 h-8 text-electric-cyan/20 mb-4" />
                                            <p className="text-gray-700 leading-relaxed mb-6 italic">
                                                "{t.content}"
                                            </p>
                                        </div>

                                        {/* Author */}
                                        <div className="flex items-center gap-4 pt-6 border-t border-gray-200">
                                            <div className="relative w-12 h-12 rounded-full overflow-hidden border border-gray-200">
                                                <Image
                                                    src={t.image}
                                                    alt={t.name}
                                                    fill
                                                    className="object-cover"
                                                />
                                            </div>
                                            <div>
                                                <h4 className="text-black font-bold text-sm uppercase tracking-wide">
                                                    {t.name}
                                                </h4>
                                                <p className="text-electric-cyan text-xs font-bold tracking-wider">
                                                    {t.role}
                                                </p>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    </div>

                    {/* Progress Dots (Mobile Only) */}
                    <div className="flex lg:hidden justify-center gap-2 mt-8">
                        {testimonials.map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => setCurrentIndex(idx)}
                                className={`w-2 h-2 rounded-full transition-all ${idx === currentIndex ? 'bg-electric-cyan w-6' : 'bg-gray-300'}`}
                            />
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}
