'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Menu, X, ChevronDown, Code, Target, Database, Bot, Cloud, Cpu,
    Share2, Search, Globe, ShoppingBag, Zap, Server, Network,
    Boxes, Layers, MessageSquare, Briefcase, Activity
} from 'lucide-react';

export default function Navbar() {
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    // Framer Motion Variants
    const navbarVariants: any = {
        hidden: { y: -100, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { type: "spring", stiffness: 100, damping: 20, delay: 0.5 }
        }
    };

    const dropdownVariants: any = {
        hidden: { opacity: 0, y: 10, scale: 0.95, filter: "blur(10px)" },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            filter: "blur(0px)",
            transition: { type: "spring", stiffness: 200, damping: 20 }
        },
        exit: { opacity: 0, y: 10, scale: 0.95, filter: "blur(10px)", transition: { duration: 0.2 } }
    };

    return (
        <motion.header
            initial="hidden"
            animate="visible"
            variants={navbarVariants}
            className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 transition-all duration-300"
        >
            <div className="relative flex items-center justify-between px-6 md:px-10 py-4 w-full max-w-[1700px] mx-auto">

                {/* Logo Section */}
                <Link href="/" className="flex items-center gap-3 group z-50">
                    <div className="relative w-10 h-10 flex items-center justify-center rounded-lg bg-gradient-to-tr from-ants-blue/20 to-electric-cyan/20 border border-deep-void/5 group-hover:border-electric-cyan/50 transition-colors">
                        <span className="font-monument text-electric-cyan text-sm group-hover:drop-shadow-[0_0_8px_rgba(0,240,255,0.8)] transition-all">W</span>
                        <span className="absolute top-1 right-1 w-1.5 h-1.5 bg-electric-cyan rounded-full animate-pulse shadow-[0_0_5px_#00F0FF]" />
                    </div>
                    <div className="flex flex-col">
                        <span className="font-monument text-sm uppercase tracking-widest text-deep-void group-hover:text-electric-cyan transition-colors">WebAnts</span>
                    </div>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden xl:flex items-center gap-2">
                    <NavLink href="/" label="Home" active={pathname === '/'} />

                    {/* 1. WEB DEVELOPMENT */}
                    <NavDropdown
                        label="Web Development"
                        id="web-dev"
                        activeId={activeDropdown}
                        setActive={setActiveDropdown}
                        variants={dropdownVariants}
                    >
                        <div className="grid grid-cols-2 gap-8 w-[800px] p-2">
                            <div>
                                <DropdownSectionTitle icon={<Code />} title="Core Stack" />
                                <ServiceLink href="/services/frontend" title="Frontend Engineering" desc="Next.js, React, Tailwind, GSAP" />
                                <ServiceLink href="/services/backend" title="Backend Infrastructure" desc="Django, FastAPI, Node.js" />
                                <ServiceLink href="/services/databases" title="Database Architecture" desc="PostgreSQL, Redis, MongoDB" />
                            </div>
                            <div>
                                <DropdownSectionTitle icon={<Network />} title="Advanced Systems" />
                                <ServiceLink href="/services/task-scheduling" title="Task Scheduling" desc="Celery, Distributed Queues" />
                                <ServiceLink href="/services/realtime" title="Async & WebRTC" desc="WebSockets, Real-time Streaming" />
                                <ServiceLink href="/services/devops" title="DevOps & Cloud" desc="AWS, Docker, Kubernetes" />
                            </div>
                        </div>
                    </NavDropdown>

                    {/* 2. ARTIFICIAL INTELLIGENCE */}
                    <NavDropdown
                        label="Artificial Intelligence"
                        id="ai"
                        activeId={activeDropdown}
                        setActive={setActiveDropdown}
                        variants={dropdownVariants}
                    >
                        <div className="grid grid-cols-2 gap-8 w-[800px] p-2">
                            <div>
                                <DropdownSectionTitle icon={<Bot />} title="Generative AI" />
                                <ServiceLink href="/services/chatbots" title="AI Chatbots" desc="Custom RAG, Context Systems" />
                                <ServiceLink href="/services/llm" title="LLM Ecosystem" desc="LangChain, LangGraph, LlamaIndex" />
                                <ServiceLink href="/services/rag" title="RAG Systems" desc="Vector Databases, Hybrid Search" />
                            </div>
                            <div>
                                <DropdownSectionTitle icon={<Zap />} title="Automation" />
                                <ServiceLink href="/services/n8n" title="Workflow Automation" desc="n8n, Zapier, Make.com" />
                                <ServiceLink href="/services/agents" title="AI Agents" desc="Botpress, AutoGPT Integration" />
                                <ServiceLink href="/services/consulting" title="AI Consulting" desc="Strategy & Implementation" />
                            </div>
                        </div>
                    </NavDropdown>

                    {/* 3. DIGITAL MARKETING */}
                    <NavDropdown
                        label="Digital Marketing & Growth"
                        id="marketing"
                        activeId={activeDropdown}
                        setActive={setActiveDropdown}
                        variants={dropdownVariants}
                    >
                        <div className="grid grid-cols-2 gap-8 w-[850px] p-2">
                            <div>
                                <DropdownSectionTitle icon={<Target />} title="Search Authority" />
                                <ServiceLink href="/services/seo" title="Advanced SEO" desc="Technical, On-Page, Off-Page" />
                                <ServiceLink href="/services/aeo" title="Future-Ready AEO" desc="Answer Engine Optimization (AI)" />
                                <ServiceLink href="/services/local-seo" title="Local Dominance" desc="GMB & Local Pack Ranking" />
                            </div>
                            <div>
                                <DropdownSectionTitle icon={<Share2 />} title="Growth Engineering" />
                                <ServiceLink href="/services/ppc" title="Paid Media (PPC)" desc="Google Ads, Meta High-ROI" />
                                <ServiceLink href="/services/social" title="Social & Content" desc="LinkedIn, Instagram, Facebook" />
                                <ServiceLink href="/services/outreach" title="Outreach" desc="Cold Email & Lead Gen" />
                            </div>
                        </div>
                    </NavDropdown>

                    <NavLink href="/case-studies" label="Case Study" active={pathname === '/case-studies'} />
                    <NavLink href="/about" label="About" active={pathname === '/about'} />
                    <NavLink href="/blog" label="Blog" active={pathname === '/blog'} />
                </nav>

                {/* Right Side: CTA */}
                <div className="hidden md:flex items-center gap-6">
                    <Link
                        href="/contact"
                        className="relative px-6 py-2 group overflow-hidden rounded-full bg-ants-blue text-white font-monument text-xs tracking-wider hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] transition-all duration-300"
                    >
                        <span className="relative z-10">Get Proposal</span>
                        <div className="absolute inset-0 bg-linear-to-r from-electric-cyan to-ants-blue opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </Link>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className="xl:hidden p-2 text-deep-void hover:text-electric-cyan transition-colors"
                >
                    {isMobileMenuOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="fixed inset-0 z-[60] bg-starlight-white/95 backdrop-blur-2xl px-6 h-screen overflow-y-auto pb-32 flex flex-col items-center justify-center"
                    >
                        {/* Explicit Close Button for UX - High Visibility */}
                        <button
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="absolute top-8 right-6 p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors shadow-sm"
                        >
                            <X className="w-8 h-8 text-deep-void" />
                        </button>

                        <nav className="flex flex-col gap-6 items-center text-center w-full mt-12">
                            <MobileNavLink href="/" label="Home" onClick={() => setIsMobileMenuOpen(false)} />
                            <MobileNavLink href="/services/web" label="Web Development" onClick={() => setIsMobileMenuOpen(false)} />
                            <MobileNavLink href="/services/ai" label="AI Solutions" onClick={() => setIsMobileMenuOpen(false)} />
                            <MobileNavLink href="/services/marketing" label="Digital Marketing" onClick={() => setIsMobileMenuOpen(false)} />
                            <MobileNavLink href="/case-studies" label="Case Study" onClick={() => setIsMobileMenuOpen(false)} />
                            <MobileNavLink href="/about" label="About" onClick={() => setIsMobileMenuOpen(false)} />
                            <MobileNavLink href="/blog" label="Blog" onClick={() => setIsMobileMenuOpen(false)} />
                            <div className="pt-8 w-full max-w-xs">
                                <Link
                                    href="/contact"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="block w-full py-4 bg-ants-blue text-white font-monument text-sm uppercase rounded-full"
                                >
                                    Get Proposal
                                </Link>
                            </div>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
}

// --- Sub-Components ---

function NavLink({ href, label, active = false }: { href: string, label: string, active?: boolean }) {
    return (
        <Link
            href={href}
            className={`
                relative px-4 py-2 rounded-full text-[11px] lg:text-xs font-monument uppercase tracking-wider transition-all duration-200
                ${active
                    ? 'bg-deep-void text-white shadow-md'
                    : 'text-gray-600 hover:text-deep-void hover:bg-gray-100'
                }
            `}
        >
            {label}
        </Link>
    );
}

function NavDropdown({ label, id, activeId, setActive, children, variants }: any) {
    const isActive = activeId === id;

    return (
        <div
            className="relative"
            onMouseEnter={() => setActive(id)}
            onMouseLeave={() => setActive(null)}
        >
            <button className={`
                flex items-center gap-1 px-4 py-2 rounded-full text-[11px] lg:text-xs font-monument uppercase tracking-wider transition-all duration-200
                ${isActive
                    ? 'bg-gray-100 text-deep-void'
                    : 'text-gray-600 hover:text-deep-void hover:bg-gray-100'
                }
            `}>
                {label}
                <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${isActive ? 'rotate-180' : ''}`} />
            </button>

            <AnimatePresence>
                {isActive && (
                    <motion.div
                        variants={variants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        style={{ willChange: "opacity, transform" }}
                        className="absolute top-full left-1/2 -translate-x-1/2 pt-4 w-auto min-w-[200px]"
                    >
                        <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-xl relative overflow-hidden">
                            <div className="absolute top-0 left-0 right-0 h-1 bg-ants-blue" />
                            {children}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

function DropdownSectionTitle({ icon, title }: { icon: any, title: string }) {
    return (
        <div className="flex items-center gap-2 mb-4 pb-2 border-b border-deep-void/5">
            <div className="text-electric-cyan w-4 h-4">{icon}</div>
            <span className="text-[10px] font-monument uppercase tracking-widest text-gray-500">{title}</span>
        </div>
    );
}

function ServiceLink({ href, title, desc }: { href: string, title: string, desc: string }) {
    return (
        <Link href={href} className="group block p-3 rounded-lg hover:bg-deep-void/5 transition-all">
            <div className="font-bold text-xs text-deep-void group-hover:text-electric-cyan transition-colors mb-0.5 font-inter uppercase tracking-wide">
                {title}
            </div>
            <div className="text-[10px] text-gray-500 group-hover:text-deep-void/70 transition-colors font-inter">
                {desc}
            </div>
        </Link>
    );
}

function MobileNavLink({ href, label, onClick }: { href: string, label: string, onClick: () => void }) {
    return (
        <Link
            href={href}
            onClick={onClick}
            className="block py-4 text-sm font-monument uppercase tracking-widest text-gray-600 hover:text-deep-void transition-colors"
        >
            {label}
        </Link>
    );
}
