
'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

export default function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            // Using a simple check; requestAnimationFrame could be used for extreme optimization but usually not needed for this.
            if (window.scrollY > 500) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <motion.button
            // Always mounted, animating visual properties instead of mounting/unmounting
            initial={false}
            animate={{
                opacity: isVisible ? 1 : 0,
                scale: isVisible ? 1 : 0.8,
                y: isVisible ? 0 : 20
            }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            onClick={scrollToTop}
            className={`fixed bottom-8 right-8 z-50 p-3 rounded-full bg-black text-white border border-white/10 shadow-xl transition-colors duration-300 hover:bg-electric-cyan hover:text-black ${isVisible ? 'pointer-events-auto cursor-pointer' : 'pointer-events-none'}`}
            aria-label="Scroll to top"
        >
            <ArrowUp className="w-5 h-5" />
        </motion.button>
    );
}
