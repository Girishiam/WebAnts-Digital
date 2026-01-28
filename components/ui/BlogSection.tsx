'use client';

import { motion } from 'framer-motion';
import { ArrowRight, ArrowUpRight, Calendar, User } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { blogPosts } from '@/data/blog';

const blogs = blogPosts.slice(0, 3);

export default function BlogSection() {
    return (
        <section className="relative w-full max-w-[1700px] mx-auto px-4 md:px-6 mb-24">

            <div className="relative rounded-[2.5rem] bg-[#02182B] overflow-hidden py-24 px-4 md:px-12">

                {/* Background Decor */}
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-electric-cyan/5 blur-[120px] rounded-full pointer-events-none" />

                <div className="relative z-10 max-w-[1400px] mx-auto">

                    {/* Header */}
                    <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                        <div>
                            <h2 className="text-electric-cyan font-bold tracking-widest uppercase mb-4 text-xs">
                                Latest Insights
                            </h2>
                            <h3 className="text-3xl md:text-5xl font-monument uppercase text-white leading-tight">
                                Intelligence <br />
                                <span className="text-transparent bg-clip-text bg-linear-to-r from-electric-cyan to-white">
                                    Hub
                                </span>
                            </h3>
                        </div>
                        <Link href="/blog" className="group inline-flex items-center gap-2 bg-white/5 border border-white/10 text-white px-6 py-3 rounded-full hover:bg-electric-cyan hover:text-black hover:border-electric-cyan transition-all duration-300 uppercase tracking-wider text-xs font-bold">
                            View All Articles
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>

                    {/* Blog Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {blogs.map((blog, index) => (
                            <motion.div
                                key={blog.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <Link
                                    href={`/blog/${blog.slug}`}
                                    className="block h-full group relative bg-[#031d34] rounded-4xl overflow-hidden border border-white/5 hover:border-electric-cyan/30 transition-all duration-300 hover:shadow-2xl hover:shadow-electric-cyan/5 flex flex-col"
                                >
                                    {/* Image Container */}
                                    <div className="relative h-64 overflow-hidden">
                                        <Image
                                            src={blog.image}
                                            alt={blog.title}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                        <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-md text-white/90 text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full border border-white/10">
                                            {blog.tags[0]}
                                        </div>
                                        <div className="absolute inset-0 bg-linear-to-t from-[#031d34] to-transparent opacity-60" />
                                    </div>

                                    {/* Content */}
                                    <div className="p-8 flex-1 flex flex-col">
                                        <div className="flex items-center gap-4 text-xs text-gray-400 mb-4 font-medium uppercase tracking-wide">
                                            <div className="flex items-center gap-1">
                                                <Calendar className="w-3 h-3 text-electric-cyan" />
                                                {blog.date}
                                            </div>
                                            <div className="w-1 h-1 rounded-full bg-gray-600" />
                                            <div className="flex items-center gap-1">
                                                <User className="w-3 h-3 text-electric-cyan" />
                                                {blog.author}
                                            </div>
                                        </div>

                                        <h4 className="text-xl font-bold font-monument text-white mb-4 leading-snug group-hover:text-electric-cyan transition-colors">
                                            {blog.title}
                                        </h4>

                                        <p className="text-gray-400 text-sm leading-relaxed mb-8 flex-1">
                                            {blog.excerpt}
                                        </p>

                                        <div className="flex items-center text-electric-cyan font-bold text-xs uppercase tracking-widest group-hover:underline decoration-electric-cyan underline-offset-4">
                                            Read More <ArrowUpRight className="w-3 h-3 ml-1" />
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}
