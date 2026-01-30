'use client';

import { motion } from 'framer-motion';
import { Send, Mail, Loader2, CheckCircle2 } from 'lucide-react';
import { useState } from 'react';
import { useEmail } from '@/hooks/use-email';

export default function NewsletterSection() {
    const [email, setEmail] = useState('');
    const [isHovered, setIsHovered] = useState(false);
    const { sendNewsletterSignup, isLoading, status, resetStatus } = useEmail();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!email) return;

        const success = await sendNewsletterSignup({ email });
        if (success) {
            setEmail('');
            setTimeout(resetStatus, 5000);
        }
    };

    return (
        <section className="relative w-full max-w-[1700px] mx-auto px-4 md:px-6 mb-24">

            <div className="relative rounded-[2.5rem] bg-white overflow-hidden py-16 px-6 md:px-12 md:py-24 flex flex-col items-center text-center shadow-2xl shadow-gray-200/50 border border-gray-100">

                {/* Creative Particles/Decor */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                    {/* Gradient Glows */}
                    <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-electric-cyan/5 blur-[100px] rounded-full" />
                    <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-blue-500/5 blur-[80px] rounded-full" />

                    {/* Animated Icons */}
                    <motion.div
                        animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
                        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute top-8 left-8 text-electric-cyan/40 hidden md:block"
                    >
                        <Mail className="w-10 h-10" />
                    </motion.div>
                    <motion.div
                        animate={{ y: [0, 20, 0], rotate: [0, -10, 0] }}
                        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute bottom-8 right-8 text-blue-500/40 hidden md:block"
                    >
                        <Send className="w-12 h-12" />
                    </motion.div>
                </div>

                <div className="relative z-10 max-w-4xl w-full">

                    <h2 className="text-3xl md:text-5xl lg:text-6xl font-monument uppercase text-deep-void mb-6 leading-tigher">
                        Subscribe to our <br className="md:hidden" />
                        <span className="text-electric-cyan"> Newsletter</span>
                    </h2>

                    <p className="text-gray-500 text-base md:text-lg mb-10 leading-relaxed max-w-2xl mx-auto">
                        Stay ahead of the curve. Get the latest insights on AI, design, and development delivered straight to your inbox.
                    </p>

                    <form
                        className="relative w-full max-w-lg mx-auto flex flex-col md:flex-row items-center bg-gray-50 md:bg-white md:rounded-full border border-gray-200 p-2 focus-within:border-electric-cyan focus-within:shadow-lg focus-within:shadow-electric-cyan/10 transition-all duration-300 gap-2 md:gap-0 rounded-2xl"
                        onSubmit={handleSubmit}
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                    >
                        <Mail className="hidden md:block w-5 h-5 text-gray-400 ml-4 shrink-0 transition-colors" />

                        <input
                            required
                            type="email"
                            placeholder="Enter your email address..."
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full md:flex-1 bg-white md:bg-transparent border border-gray-200 md:border-none rounded-xl md:rounded-none focus:ring-0 text-deep-void placeholder:text-gray-400 px-4 h-12 md:h-14 font-medium outline-none focus:border-electric-cyan md:focus:border-none transition-all"
                        />

                        <button
                            disabled={isLoading || status === 'success'}
                            className={`w-full md:w-auto px-8 h-12 md:h-14 rounded-xl md:rounded-full font-bold uppercase tracking-wider text-sm transition-all duration-300 flex items-center justify-center gap-2 shrink-0 shadow-lg ${status === 'success'
                                ? 'bg-green-500 text-white pointer-events-none'
                                : 'bg-[#02182B] text-white hover:bg-electric-cyan hover:text-black shadow-black/10'
                                }`}
                        >
                            {isLoading ? (
                                <Loader2 className="w-5 h-5 animate-spin" />
                            ) : status === 'success' ? (
                                <>
                                    Sent
                                    <CheckCircle2 className="w-5 h-5" />
                                </>
                            ) : (
                                <>
                                    Subscribe
                                    <motion.div
                                        animate={{ x: isHovered ? 3 : 0 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <Send className="w-4 h-4" />
                                    </motion.div>
                                </>
                            )}
                        </button>
                    </form>

                    <p className="mt-6 text-xs text-gray-400 font-medium tracking-wide">
                        Join 5,000+ subscribers. No spam, ever.
                    </p>
                    {status === 'error' && (
                        <p className="mt-2 text-sm text-red-500">Something went wrong. Please try again.</p>
                    )}

                </div>
            </div>
        </section>
    );
}
