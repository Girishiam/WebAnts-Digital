
'use client';

import ContactSection from '@/components/ui/ContactSection';
import { motion } from 'framer-motion';

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-starlight-white pt-32 pb-24">

            {/* Simple Header */}
            <div className="text-center mb-12 px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-electric-cyan font-bold tracking-[0.2em] uppercase text-sm mb-4">
                        Get In Touch
                    </h2>
                    <h1 className="text-4xl md:text-6xl font-monument uppercase text-deep-void">
                        Let's Talk <br /> <span className="text-gray-400">Project</span>
                    </h1>
                </motion.div>
            </div>

            {/* Reusing the robust Main Contact Section */}
            <ContactSection />

        </main>
    );
}
