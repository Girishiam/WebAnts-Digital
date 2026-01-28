
'use client';

import { blogPosts } from '@/data/blog';
import { notFound, useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Twitter, Linkedin, Facebook, Clock } from 'lucide-react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useRef } from 'react';

export default function BlogPostPage() {
    const params = useParams();
    const slug = params?.slug as string;
    const post = blogPosts.find(p => p.slug === slug);

    if (!post) {
        return <div className="min-h-screen flex items-center justify-center">Post not found</div>;
    }

    const otherPosts = blogPosts.filter(p => p.slug !== slug).slice(0, 2);

    // Scroll Animations
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start start", "end end"]
    });

    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    const heroOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);
    const heroScale = useTransform(scrollYProgress, [0, 0.1], [1, 1.1]);
    const heroY = useTransform(scrollYProgress, [0, 0.1], [0, 100]);

    return (
        <article ref={targetRef} className="bg-starlight-white text-deep-void selection:bg-electric-cyan selection:text-white">

            {/* Reading Progress Bar (Fixed) */}
            <motion.div
                className="fixed top-0 left-0 right-0 h-1 bg-electric-cyan z-50 origin-left"
                style={{ scaleX }}
            />

            {/* Cinematic Hero (100vh) */}
            <div className="relative h-screen w-full overflow-hidden">
                <motion.div
                    style={{ opacity: heroOpacity, scale: heroScale, y: heroY }}
                    className="fixed inset-0 z-0 h-screen w-full"
                >
                    <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />
                </motion.div>

                <div className="relative z-10 h-full flex flex-col justify-end p-6 md:p-20 text-white pb-32">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="max-w-5xl"
                    >
                        <Link href="/blog" className="inline-flex items-center gap-2 text-white/70 hover:text-electric-cyan transition-colors mb-8 text-sm font-bold uppercase tracking-widest">
                            <ArrowLeft className="w-4 h-4" /> Back to Insights
                        </Link>

                        <div className="flex flex-wrap gap-4 mb-6">
                            {post.tags.map(tag => (
                                <span key={tag} className="border border-white/30 bg-white/10 backdrop-blur px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest">
                                    {tag}
                                </span>
                            ))}
                        </div>

                        <h1 className="text-4xl md:text-7xl lg:text-8xl font-monument uppercase leading-[0.9] mb-8 text-white text-shadow-lg">
                            {post.title}
                        </h1>

                        <div className="flex items-center gap-6 md:gap-12 text-sm font-medium text-white/80">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur border border-white/20" />
                                <span>{post.author}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="opacity-50">|</span>
                                <span>{post.date}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Clock className="w-4 h-4 text-electric-cyan" />
                                <span>{post.readTime}</span>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Scroll Indicator */}
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 text-xs font-bold uppercase track-widest z-20"
                >
                    Scroll to Read
                </motion.div>
            </div>

            {/* Content Container */}
            <div className="relative z-10 bg-starlight-white -mt-10 rounded-t-[3rem] pt-24 px-6 md:px-0 shadow-[0_-20px_50px_rgba(0,0,0,0.2)] min-h-screen">

                <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">

                    {/* Floating Share Bar (Now integrated in grid) */}
                    <div className="hidden lg:flex flex-col gap-4 lg:col-span-1 sticky top-32 h-min">
                        <button className="w-10 h-10 rounded-full border border-gray-200 bg-white hover:bg-black hover:text-white transition-all flex items-center justify-center text-gray-500">
                            <Twitter className="w-4 h-4" />
                        </button>
                        <button className="w-10 h-10 rounded-full border border-gray-200 bg-white hover:bg-blue-600 hover:text-white transition-all flex items-center justify-center text-gray-500">
                            <Linkedin className="w-4 h-4" />
                        </button>
                        <button className="w-10 h-10 rounded-full border border-gray-200 bg-white hover:bg-blue-500 hover:text-white transition-all flex items-center justify-center text-gray-500">
                            <Facebook className="w-4 h-4" />
                        </button>
                    </div>

                    {/* Main Content Area */}
                    <div className="lg:col-span-8 lg:col-start-3">
                        <div
                            className="prose prose-lg md:prose-xl max-w-none 
                            prose-headings:font-monument prose-headings:uppercase prose-headings:text-deep-void
                            prose-p:text-gray-700 prose-p:leading-loose prose-p:text-lg md:prose-p:text-xl
                            prose-a:text-electric-cyan prose-a:no-underline hover:prose-a:bg-electric-cyan/10
                            prose-strong:text-deep-void
                            prose-blockquote:text-2xl prose-blockquote:font-monument prose-blockquote:not-italic prose-blockquote:leading-tight prose-blockquote:text-electric-cyan prose-blockquote:border-none prose-blockquote:py-8 prose-blockquote:text-center
                            first-letter:text-7xl first-letter:font-bold first-letter:text-deep-void first-letter:mr-3 first-letter:float-left first-letter:leading-none"
                            dangerouslySetInnerHTML={{ __html: post.content }}
                        />
                    </div>
                </div>

                <div className="max-w-[1200px] mx-auto px-6 md:px-0">
                    <div className="my-24 h-px w-full bg-gray-200" />

                    <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-24">
                        <div className="text-center md:text-left">
                            <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Written By</p>
                            <h3 className="text-2xl font-monument uppercase">{post.author}</h3>
                            <p className="text-gray-500">{post.role}</p>
                        </div>
                        <Link href="/contact" className="px-8 py-4 bg-deep-void text-white rounded-full font-bold uppercase tracking-wider hover:bg-electric-cyan transition-colors">
                            Work with us
                        </Link>
                    </div>
                </div>

            </div>

            {/* Read Next (Horizontal Scroll) */}
            <div className="border-t border-gray-200 bg-gray-50 py-24">
                <div className="max-w-[1600px] mx-auto px-6">
                    <h3 className="text-4xl font-monument uppercase mb-12">Continue <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-cyan to-ants-blue">Thinking</span></h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {otherPosts.concat(otherPosts).slice(0, 3).map((op, idx) => (
                            <Link key={idx} href={`/blog/${op.slug}`} className="group bg-white p-2 rounded-[2rem] hover:shadow-xl transition-all duration-300">
                                <div className="relative h-64 rounded-[1.5rem] overflow-hidden mb-6">
                                    <Image src={op.image} alt={op.title} fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                                </div>
                                <div className="px-4 pb-4">
                                    <p className="text-[10px] font-bold uppercase tracking-widest text-electric-cyan mb-3">{op.tags[0]}</p>
                                    <h4 className="text-xl font-monument uppercase leading-tight mb-4 group-hover:text-electric-cyan transition-colors">{op.title}</h4>
                                    <div className="flex items-center justify-between border-t border-gray-100 pt-4">
                                        <span className="text-xs font-bold text-deep-void">{op.author}</span>
                                        <span className="text-xs text-gray-400">{op.readTime}</span>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>

        </article>
    );
}
