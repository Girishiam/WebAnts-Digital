
'use client';

import { motion } from 'framer-motion';
import { Star, Crown, MapPin, Clock, Briefcase, Award, CheckCircle2, ShieldCheck, ExternalLink } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function CEOMessage() {
    return (
        <section className="relative w-full max-w-[1700px] mx-auto px-4 md:px-6 mb-24">

            <div className="relative rounded-[3rem] bg-white overflow-hidden p-8 md:p-16 border border-gray-100 shadow-xl shadow-gray-200/50">
                {/* Background Decoration */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-[#14a800]/5 to-transparent rounded-full blur-[100px] pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-[#14a800]/5 to-transparent rounded-full blur-[100px] pointer-events-none" />

                <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">

                    {/* Left: Text & Pitch */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="flex-1 text-center lg:text-left"
                    >
                        <h2 className="text-3xl md:text-5xl font-monument uppercase leading-[1.1] mb-6 text-deep-void">
                            Proven <span className="text-[#14a800]">Excellence</span>
                        </h2>
                        <p className="text-lg md:text-xl text-gray-500 mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0">
                            Work with a **Top Rated Plus** talent. We don't just deliver code; we deliver verified success, backed by thousands of hours of high-impact engineering.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
                            <Link
                                href="https://www.upwork.com/freelancers/mdmunibfuyad"
                                target="_blank"
                                className="px-8 py-4 bg-[#14a800] text-white rounded-full font-bold text-lg hover:bg-[#14a800]/90 transition-all shadow-lg shadow-[#14a800]/30 flex items-center gap-2"
                            >
                                Hire on Upwork <ExternalLink className="w-5 h-5" />
                            </Link>
                            <div className="flex items-center -space-x-3">
                                {[1, 2, 3, 4].map(i => (
                                    <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-gray-200 relative overflow-hidden">
                                        <Image src={`https://randomuser.me/api/portraits/men/${i + 20}.jpg`} alt="" fill className="object-cover" />
                                    </div>
                                ))}
                                <div className="w-10 h-10 rounded-full border-2 border-white bg-gray-100 flex items-center justify-center text-xs font-bold text-gray-500">
                                    +2k
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right: The Profile Card */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative w-full max-w-2xl"
                    >
                        {/* Glass Card Container */}
                        <div className="relative bg-white rounded-[2rem] border border-gray-200 p-8 shadow-2xl overflow-hidden group hover:shadow-[0_20px_60px_-15px_rgba(20,168,0,0.15)] transition-shadow duration-500">

                            {/* Header Section */}
                            <div className="flex flex-col md:flex-row gap-8 items-start mb-8 border-b border-gray-100 pb-8">
                                <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-full border-4 border-white shadow-lg overflow-hidden shrink-0">
                                    {/* Placeholder for Profile Pic - using a generic pro avatar or the one referencing the user if I had the URL. Using a placeholder for now. */}
                                    <Image src="/upwork.png" alt="MD Munib F." fill className="object-cover" />
                                    <div className="absolute bottom-2 right-2 w-5 h-5 bg-[#14a800] border-2 border-white rounded-full" />
                                </div>

                                <div className="flex-1 w-full">
                                    <div className="flex flex-wrap items-center justify-between gap-4 mb-2">
                                        <h3 className="text-3xl font-monument uppercase text-deep-void">MD Munib F.</h3>
                                        <div className="hidden md:flex items-center gap-2 text-[#14a800] font-bold text-sm bg-[#14a800]/10 px-3 py-1 rounded-full">
                                            <ShieldCheck className="w-4 h-4" /> Verified
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-2 text-gray-500 mb-6">
                                        <MapPin className="w-4 h-4" />
                                        <span>Gaibandha, Bangladesh</span>
                                    </div>

                                    {/* Badges */}
                                    <div className="flex flex-wrap gap-4">
                                        <div className="flex items-center gap-2 bg-[#F06292] text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-md shadow-[#F06292]/30">
                                            <Star className="w-3.5 h-3.5 fill-current" /> Top Rated Plus
                                        </div>
                                        <div className="flex items-center gap-2 bg-blue-500 text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-md shadow-blue-500/30">
                                            <Crown className="w-3.5 h-3.5 fill-current" /> 95% Job Success
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Stats Grid */}
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                                <div className="bg-gray-50 rounded-2xl p-4 text-center">
                                    <h4 className="text-2xl font-bold text-deep-void mb-1">273</h4>
                                    <p className="text-xs font-bold uppercase tracking-widest text-gray-400">Total Jobs</p>
                                </div>
                                <div className="bg-gray-50 rounded-2xl p-4 text-center">
                                    <h4 className="text-2xl font-bold text-deep-void mb-1">3,574</h4>
                                    <p className="text-xs font-bold uppercase tracking-widest text-gray-400">Total Hours</p>
                                </div>
                                <div className="bg-gray-50 rounded-2xl p-4 text-center md:col-span-2 flex flex-col justify-center items-center">
                                    <div className="flex items-center gap-2 text-[#14a800] font-bold mb-1">
                                        <Clock className="w-4 h-4" /> Fast Response
                                    </div>
                                    <p className="text-xs font-bold uppercase tracking-widest text-gray-400">&lt; 24 Hrs Response Time</p>
                                </div>
                            </div>

                            {/* Additional Info */}
                            <div className="space-y-4">
                                <div className="flex items-center gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors cursor-default">
                                    <div className="w-10 h-10 rounded-full bg-deep-void text-white flex items-center justify-center shrink-0">
                                        <Briefcase className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h5 className="font-bold text-deep-void">Associated with WebAnts</h5>
                                        <p className="text-sm text-gray-500">Website Design & Development Experts</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors cursor-default">
                                    <div className="w-10 h-10 rounded-full bg-amber-500 text-white flex items-center justify-center shrink-0">
                                        <Award className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h5 className="font-bold text-deep-void">Professional Graphic Designer</h5>
                                        <p className="text-sm text-gray-500">ICT Division, Bangladesh</p>
                                    </div>
                                </div>
                            </div>

                        </div>

                        {/* Decorative floating elements */}
                        <div className="absolute -top-6 -right-6 w-20 h-20 bg-[#14a800] rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg animate-bounce delay-700">
                            100%
                        </div>

                    </motion.div>

                </div>
            </div>
        </section>
    );
}
