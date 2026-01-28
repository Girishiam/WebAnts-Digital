
'use client';

import { blogPosts } from '@/data/blog';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight, ArrowDown, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

// Animation variants
const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const } }
};

const staggerContainer = {
    visible: { transition: { staggerChildren: 0.1 } }
};

export default function BlogListingPage() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const featuredPost = blogPosts[0];
    const otherPosts = blogPosts.slice(1);

    return (
        <main ref={containerRef} className="min-h-screen bg-[#F0F0F0] text-deep-void relative overflow-hidden selection:bg-electric-cyan selection:text-white">

            {/* Smooth Background Gradient */}
            <div className="fixed inset-0 pointer-events-none z-0">
                <div className="absolute top-[-20%] right-[-20%] w-[1000px] h-[1000px] bg-electric-cyan/5 rounded-full blur-[150px]" />
                <div className="absolute bottom-[-20%] left-[-20%] w-[800px] h-[800px] bg-ants-blue/5 rounded-full blur-[150px]" />
            </div>

            <div className="relative z-10 max-w-[1600px] mx-auto px-4 md:px-8 pt-32 md:pt-48 pb-24">

                {/* Massive Typographic Header */}
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={staggerContainer}
                    className="mb-32 md:mb-48 border-b border-deep-void/10 pb-12"
                >
                    <motion.div variants={fadeInUp} className="flex flex-col md:flex-row md:items-end justify-between gap-8">
                        <h1 className="text-[12vw] leading-[0.85] font-monument uppercase tracking-[-0.03em] text-deep-void">
                            Insights
                        </h1>
                        <div className="md:mb-6 flex flex-col items-start gap-4">
                            <p className="max-w-xs text-sm md:text-base font-medium text-gray-500">
                                Curated thinking on Artificial Intelligence, Design Systems, and the Future of Web.
                            </p>
                            <div className="w-12 h-12 rounded-full border border-deep-void/20 flex items-center justify-center animate-bounce">
                                <ArrowDown className="w-5 h-5 text-deep-void" />
                            </div>
                        </div>
                    </motion.div>
                </motion.div>

                {/* Featured "Magazine Cover" Post */}
                <motion.section
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                    className="mb-32 group relative"
                >
                    <Link href={`/blog/${featuredPost.slug}`} className="block">
                        <div className="relative h-[60vh] md:h-[85vh] w-full rounded-[3rem] overflow-hidden">
                            <Image
                                src={featuredPost.image}
                                alt={featuredPost.title}
                                fill
                                className="object-cover transition-transform duration-[1.5s] group-hover:scale-105 will-change-transform"
                                priority
                            />
                            <div className="absolute inset-0 bg-linear-to-t from-deep-void/80 via-transparent to-transparent opacity-60" />

                            <div className="absolute bottom-0 left-0 w-full p-8 md:p-16 text-white">
                                <div className="flex items-center gap-4 mb-6">
                                    <span className="bg-electric-cyan px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest text-white">
                                        Editor's Choice
                                    </span>
                                    <span className="uppercase text-xs font-medium tracking-widest opacity-80">{featuredPost.readTime}</span>
                                </div>
                                <h2 className="text-3xl md:text-6xl lg:text-7xl font-monument uppercase leading-[0.9] max-w-5xl mb-8 group-hover:underline decoration-2 underline-offset-8 transition-all">
                                    {featuredPost.title}
                                </h2>
                                <p className="text-lg md:text-xl text-gray-200 max-w-2xl font-light line-clamp-2 md:line-clamp-none">
                                    {featuredPost.excerpt}
                                </p>
                            </div>

                            <div className="absolute top-8 right-8 md:top-16 md:right-16 bg-white/10 backdrop-blur-md border border-white/20 w-32 h-32 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                                <ArrowUpRight className="w-10 h-10 text-white" />
                            </div>
                        </div>
                    </Link>
                </motion.section>

                {/* Uniform Grid - Same Height & Width */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
                    {otherPosts.map((post, idx) => (
                        <motion.div
                            key={post.id}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6, delay: idx * 0.1 }}
                            className="group flex flex-col h-full bg-white rounded-4xl p-4 border border-deep-void/5 hover:border-electric-cyan/20 hover:shadow-xl hover:shadow-electric-cyan/5 transition-all duration-500"
                        >
                            <Link href={`/blog/${post.slug}`} className="flex flex-col h-full">
                                <div className="relative h-[300px] w-full rounded-3xl overflow-hidden mb-6 bg-gray-100">
                                    <Image
                                        src={post.image}
                                        alt={post.title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                                    />
                                    <div className="absolute top-4 left-4">
                                        <span className="bg-white/90 backdrop-blur px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest text-deep-void">
                                            {post.tags[0]}
                                        </span>
                                    </div>
                                </div>

                                <div className="flex flex-col flex-1 px-2 pb-2">
                                    <div className="flex items-center justify-between border-b border-deep-void/5 pb-4 mb-4">
                                        <span className="text-xs font-monument text-gray-400">{post.date}</span>
                                        <span className="text-xs font-medium tracking-wide text-gray-400">{post.readTime}</span>
                                    </div>
                                    <h3 className="text-xl font-monument uppercase leading-[1.2] mb-4 group-hover:text-electric-cyan transition-colors line-clamp-2 min-h-12">
                                        {post.title}
                                    </h3>
                                    <p className="text-sm text-gray-500 line-clamp-3 leading-relaxed mb-6">
                                        {post.excerpt}
                                    </p>

                                    <div className="mt-auto pt-4 border-t border-deep-void/5 flex items-center justify-between">
                                        <span className="text-xs font-bold text-deep-void">{post.author}</span>
                                        <span className="text-electric-cyan opacity-0 group-hover:opacity-100 transition-opacity -translate-x-2 group-hover:translate-x-0 duration-300">
                                            <ArrowUpRight className="w-5 h-5" />
                                        </span>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>

                {/* Pagination */}
                <div className="flex items-center justify-center gap-4 mb-32">
                    <button className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:border-deep-void hover:text-deep-void transition-colors disabled:opacity-50" disabled>
                        <ChevronLeft className="w-5 h-5" />
                    </button>

                    <button className="w-12 h-12 rounded-full bg-deep-void text-white font-monument text-sm flex items-center justify-center hover:bg-electric-cyan transition-colors">
                        1
                    </button>
                    <button className="w-12 h-12 rounded-full border border-gray-200 text-gray-500 font-monument text-sm flex items-center justify-center hover:border-deep-void hover:text-deep-void transition-colors">
                        2
                    </button>
                    <button className="w-12 h-12 rounded-full border border-gray-200 text-gray-500 font-monument text-sm flex items-center justify-center hover:border-deep-void hover:text-deep-void transition-colors">
                        3
                    </button>

                    <button className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:border-deep-void hover:text-deep-void transition-colors">
                        <ChevronRight className="w-5 h-5" />
                    </button>
                </div>

                {/* Newsletter / CTA */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="py-24 border-t border-deep-void/10 text-center bg-white rounded-[3rem] mx-4"
                >
                    <h2 className="text-4xl md:text-6xl font-monument uppercase mb-8">Stay <span className="text-electric-cyan">Ahead</span></h2>
                    <p className="max-w-md mx-auto text-gray-500 mb-12">
                        Get the latest insights on AI and Web Engineering delivered directly to your inbox. No spam, just signal.
                    </p>
                    <form className="max-w-md mx-auto flex gap-2">
                        <input
                            type="email"
                            placeholder="Type your email..."
                            className="flex-1 bg-gray-50 border border-gray-200 rounded-full px-6 py-4 focus:outline-none focus:border-electric-cyan focus:bg-white transition-colors"
                        />
                        <button className="bg-deep-void text-white px-8 py-4 rounded-full font-bold uppercase tracking-wider hover:bg-electric-cyan transition-colors">
                            Join
                        </button>
                    </form>
                </motion.div>

            </div>
        </main>
    );
}
