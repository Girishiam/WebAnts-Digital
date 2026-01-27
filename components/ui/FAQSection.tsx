'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Plus, Minus } from 'lucide-react';
import { useState } from 'react';

const faqs = [
    {
        question: 'What Services Do WebAnts Offer?',
        answer: 'We offer a comprehensive suite of digital services including Custom Layout Design & Development, SEO Optimization, PPC Campaign Management, UI/UX Design, and scalable Web Application development using Next.js and various modern technologies.'
    },
    {
        question: 'How Do You Process At WebAnts?',
        answer: 'Our process is agile and client-focused. We begin with a deep-dive discovery phase, followed by strategic planning, design prototyping, agile development sprints, rigorous QA testing, and finally, deployment and post-launch support.'
    },
    {
        question: 'Do You Offer Free Consultation?',
        answer: 'Yes! We believe in understanding your specific needs before making any commitments. You can schedule a free initial consultation with our experts to discuss your project goals and how we can help you achieve them.'
    },
    {
        question: 'How Does WebAnts Ensure Quality Standards?',
        answer: 'Quality is at our core. We implement strict code reviews, automated testing, and manual QA sessions. We adhere to industry best practices for accessibility, performance, and security to ensure every deliverable is top-tier.'
    },
    {
        question: 'Does WebAnts Provide Customer Support After Project Delivery?',
        answer: 'Absolutely. We offer various support and maintenance packages to keep your digital assets secure, up-to-date, and performing optimally long after launch.'
    }
];

export default function FAQSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="relative w-full max-w-[1700px] mx-auto px-4 md:px-6 mb-24">

            <div className="relative rounded-[2.5rem] bg-white overflow-hidden py-24 px-4 md:px-12">
                <div className="max-w-[1000px] mx-auto">

                    {/* Header */}
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-monument uppercase text-black leading-tight mb-6">
                            Got <span className="text-electric-cyan">Questions?</span> <br className="hidden md:block" />
                            We've Got <span className="text-electric-cyan">Answers!</span>
                        </h2>
                    </div>

                    {/* Accordion Grid */}
                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${openIndex === index
                                    ? 'bg-gray-50 border-electric-cyan/30 shadow-lg shadow-electric-cyan/5'
                                    : 'bg-white border-gray-100 hover:border-gray-200'
                                    }`}
                            >
                                <button
                                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                    className="w-full flex items-center justify-between p-6 md:p-8 text-left outline-none"
                                >
                                    <span className={`text-lg md:text-xl font-bold font-monument transition-colors ${openIndex === index ? 'text-black' : 'text-gray-700'
                                        }`}>
                                        {faq.question}
                                    </span>
                                    <div className={`shrink-0 ml-4 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${openIndex === index
                                        ? 'bg-electric-cyan text-black rotate-180'
                                        : 'bg-gray-100 text-gray-500'
                                        }`}>
                                        <ChevronDown className="w-5 h-5" />
                                    </div>
                                </button>

                                <AnimatePresence>
                                    {openIndex === index && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3, ease: "easeInOut" }}
                                        >
                                            <div className="px-6 md:px-8 pb-8 text-gray-600 leading-relaxed text-base md:text-lg border-t border-gray-100/50 pt-4">
                                                {faq.answer}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}
