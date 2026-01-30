'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, ArrowDown, CheckCircle2 } from 'lucide-react';

import { openPositions } from '@/data/jobs';

export default function JobBoard() {
    const [expandedId, setExpandedId] = useState<number | null>(null);

    const toggleJob = (id: number) => {
        setExpandedId(expandedId === id ? null : id);
    };

    return (
        <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-monument uppercase mb-12 text-center">Open Roles</h2>
            <div className="space-y-4">
                {openPositions.map((job) => (
                    <div
                        key={job.id}
                        className={`bg-white rounded-3xl border transition-all duration-300 overflow-hidden ${expandedId === job.id
                            ? 'border-electric-cyan shadow-lg shadow-electric-cyan/10 ring-1 ring-electric-cyan/20'
                            : 'border-gray-100 hover:border-electric-cyan/30 hover:shadow-md'
                            }`}
                    >
                        <button
                            onClick={() => toggleJob(job.id)}
                            className="w-full text-left p-8 flex flex-col md:flex-row md:items-center justify-between gap-6"
                        >
                            <div>
                                <h3 className={`text-xl font-bold uppercase mb-2 transition-colors ${expandedId === job.id ? 'text-electric-cyan' : 'text-deep-void'}`}>
                                    {job.title}
                                </h3>
                                <div className="flex items-center gap-4 text-sm text-gray-500 font-medium">
                                    <span>{job.department}</span>
                                    <span className="w-1.5 h-1.5 rounded-full bg-gray-300" />
                                    <span>{job.type}</span>
                                    <span className="w-1.5 h-1.5 rounded-full bg-gray-300" />
                                    <span>{job.location}</span>
                                </div>
                            </div>
                            <div className={`w-12 h-12 rounded-full border flex items-center justify-center transition-all ${expandedId === job.id
                                ? 'bg-electric-cyan text-white border-electric-cyan rotate-180'
                                : 'border-gray-100 group-hover:bg-electric-cyan/5'
                                }`}>
                                <ArrowDown className="w-5 h-5" />
                            </div>
                        </button>

                        <AnimatePresence>
                            {expandedId === job.id && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.3, ease: "easeInOut" }}
                                >
                                    <div className="px-8 pb-8 pt-0 border-t border-gray-100 mt-2">
                                        <div className="pt-6 grid md:grid-cols-2 gap-8">
                                            <div>
                                                <h4 className="font-monument text-sm uppercase mb-4 text-deep-void">About The Role</h4>
                                                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                                                    {job.description}
                                                </p>
                                            </div>
                                            <div>
                                                <h4 className="font-monument text-sm uppercase mb-4 text-deep-void">Requirements</h4>
                                                <ul className="space-y-3">
                                                    {job.requirements.map((req, i) => (
                                                        <li key={i} className="flex items-start gap-3 text-sm text-gray-600">
                                                            <CheckCircle2 className="w-4 h-4 text-electric-cyan shrink-0 mt-0.5" />
                                                            {req}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>

                                        <div className="mt-8 pt-6 border-t border-gray-100 flex justify-end">
                                            <a
                                                href={`mailto:careers@webantsdigital.com?subject=Application for ${job.title}`}
                                                className="inline-flex items-center gap-2 bg-black text-white px-8 py-3 rounded-full font-bold uppercase tracking-wider text-xs hover:bg-electric-cyan hover:text-black transition-all"
                                            >
                                                Apply via Email <ArrowUpRight className="w-4 h-4" />
                                            </a>
                                        </div>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                ))}
            </div>
        </div>
    );
}
