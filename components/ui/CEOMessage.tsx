'use client';

import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import Image from 'next/image';

export default function CEOMessage() {
    return (
        <section className="relative w-full max-w-[1700px] mx-auto px-4 md:px-6 mb-24">

            <div className="relative rounded-[2.5rem] bg-white overflow-hidden p-8 md:p-16">

                <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">

                    {/* Text Content */}
                    <div className="order-2 lg:order-1">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className="text-3xl md:text-5xl font-monument uppercase leading-tight mb-8 text-black"
                        >
                            Message From the <span className="text-electric-cyan">CEO</span>
                        </motion.h2>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="mb-6"
                        >
                            <Quote className="w-16 h-16 text-electric-cyan" />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            viewport={{ once: true }}
                            className="space-y-6 text-gray-600 text-lg leading-relaxed text-justify"
                        >
                            <p>
                                Our vision was not only to offer digital solutions and services but also to create synergy with our customers. We have developed an effective workflow that has helped multiple institutions and brands to take their businesses to the next level. Our team always focuses on transforming our business model into a viable solution.
                            </p>
                            <p>
                                We have embraced gender balance and diversity and believe in empowering our customers. We strive to understand your requirements and come up with the best formula to assist you in achieving your business goals. Our team brings passion to every endeavor. We take the responsibility to help our clients succeed in the digital culture with innovative digital solutions.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            viewport={{ once: true }}
                            className="mt-8 pt-8 border-t border-gray-100"
                        >
                            <h4 className="text-xl font-bold font-monument text-black">John Doe</h4>
                            <p className="text-electric-cyan font-medium uppercase tracking-widest text-sm">Founder & CEO</p>
                        </motion.div>
                    </div>

                    {/* Image */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="order-1 lg:order-2 relative h-[500px] md:h-[600px] w-full max-w-md mx-auto lg:max-w-none rounded-4xl overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-linear-to-tr from-electric-cyan/10 to-transparent z-10 mix-blend-overlay" />
                        <Image
                            src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1000&auto=format&fit=crop"
                            alt="CEO"
                            fill
                            className="object-cover object-top"
                        />

                        {/* Decorative Frame */}
                        <div className="absolute inset-4 border border-white/20 rounded-3xl z-20 pointer-events-none" />
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
