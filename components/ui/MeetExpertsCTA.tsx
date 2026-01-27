'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Calendar } from 'lucide-react';
import Link from 'next/link';
import HoneycombPattern from './HoneycombPattern';

export default function MeetExpertsCTA() {
    return (
        <section className="relative w-full max-w-[1700px] mx-auto px-4 md:px-6 mb-24">

            <div className="relative rounded-[2.5rem] bg-[#02182B] overflow-hidden p-8 md:p-16 flex items-center justify-between shadow-2xl shadow-electric-cyan/10 group">

                {/* Honeycomb Background Graphic */}
                <div className="absolute right-0 top-0 bottom-0 w-1/2 opacity-30 pointer-events-none overflow-hidden">
                    <div className="absolute inset-0 bg-linear-to-l from-[#02182B] via-transparent to-[#02182B] z-10" />
                    <HoneycombPattern color="#00f3ff" opacity={0.15} scale={30} className="mask-image-linear-fade" />
                </div>

                {/* Content */}
                <div className="relative z-10 max-w-2xl w-full">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-5xl font-monument uppercase text-white mb-6 leading-tight">
                            Meet Our <span className="text-electric-cyan">Experts</span>
                        </h2>
                        <p className="text-gray-400 text-lg mb-10 max-w-lg leading-relaxed">
                            Book a consultation with us and select a time slot that suits you best. Let's discuss how we can elevate your digital presence.
                        </p>

                        <Link
                            href="/consultation"
                            className="inline-flex items-center gap-3 bg-electric-cyan text-black px-8 py-4 rounded-full font-bold uppercase tracking-wider hover:bg-white transition-all duration-300 transform hover:translate-x-1"
                        >
                            <Calendar className="w-5 h-5" />
                            Book a Consultation
                            <ArrowRight className="w-5 h-5 ml-1" />
                        </Link>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
