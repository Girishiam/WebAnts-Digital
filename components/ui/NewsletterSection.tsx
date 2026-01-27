'use client';

import { motion } from 'framer-motion';
import { Send, Mail } from 'lucide-react';
import { useState } from 'react';

export default function NewsletterSection() {
    const [email, setEmail] = useState('');
    const [isHovered, setIsHovered] = useState(false);

    return (
        <section className="relative w-full max-w-[1700px] mx-auto px-4 md:px-6 mb-24">

            <div className="relative rounded-[2.5rem] bg-white overflow-hidden py-20 px-6 md:px-12 flex flex-col items-center text-center shadow-lg shadow-gray-200/50">

                {/* Creative Particles/Decor */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                    <motion.div
                        animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
                        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute top-10 left-10 text-electric-cyan/20"
                    >
                        <Mail className="w-12 h-12" />
                    </motion.div>
                    <motion.div
                        animate={{ y: [0, 30, 0], rotate: [0, -10, 0] }}
                        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute bottom-10 right-10 text-electric-cyan/20"
                    >
                        <Send className="w-16 h-16" />
                    </motion.div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-electric-cyan/5 blur-[80px] rounded-full" />
                </div>

                <div className="relative z-10 max-w-3xl w-full">

                    <h2 className="text-3xl md:text-5xl font-monument uppercase text-black mb-6 leading-tight">
                        Subscribe to <span className="text-electric-cyan">Our Newsletter</span>
                    </h2>

                    <p className="text-gray-500 text-lg mb-10 leading-relaxed">
                        Receive the latest technology & business news in your inbox. <br className="hidden md:block" />
                        Select the newsletters you'd like to receive.
                    </p>

                    <form
                        className="relative w-full max-w-xl mx-auto flex items-center bg-gray-50 rounded-full border border-gray-200 p-2 focus-within:border-electric-cyan focus-within:shadow-lg focus-within:shadow-electric-cyan/10 transition-all duration-300"
                        onSubmit={(e) => e.preventDefault()}
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                    >
                        <Mail className="w-5 h-5 text-gray-400 ml-4 shrink-0" />
                        <input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="flex-1 bg-transparent border-none focus:ring-0 text-black placeholder:text-gray-400 px-4 h-12 font-medium"
                        />
                        <button
                            className="bg-[#02182B] text-white px-8 h-12 rounded-full font-bold uppercase tracking-wider text-sm hover:bg-electric-cyan hover:text-black transition-all duration-300 flex items-center gap-2"
                        >
                            Subscribe
                            <motion.div
                                animate={{ x: isHovered ? 3 : 0 }}
                                transition={{ duration: 0.2 }}
                            >
                                <Send className="w-4 h-4" />
                            </motion.div>
                        </button>
                    </form>

                </div>
            </div>
        </section>
    );
}
