'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Menu, X, ChevronDown
} from 'lucide-react';
import { navbarDropdowns } from '@/data/navigation';

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
                <Link href="/" className="flex items-center gap-3 z-50">
                    <Image
                        src="/WebAnts.svg"
                        alt="WebAnts Logo"
                        width={180}
                        height={50}
                        className="w-32 md:w-40 h-auto object-contain"
                        priority
                    />
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden xl:flex items-center gap-2">
                    <NavLink href="/" label="Home" active={pathname === '/'} />

                    {navbarDropdowns.map((dropdown) => (
                        <NavDropdown
                            key={dropdown.id}
                            label={dropdown.label}
                            id={dropdown.id}
                            activeId={activeDropdown}
                            setActive={setActiveDropdown}
                            variants={dropdownVariants}
                        >
                            <div className="grid grid-cols-2 gap-8 w-[800px] p-2">
                                {dropdown.sections.map((section, idx) => (
                                    <div key={idx}>
                                        <DropdownSectionTitle icon={<section.icon />} title={section.title} />
                                        {section.links.map((link, linkIdx) => (
                                            <ServiceLink
                                                key={linkIdx}
                                                href={link.href}
                                                title={link.title}
                                                desc={link.desc}
                                            />
                                        ))}
                                    </div>
                                ))}
                            </div>
                        </NavDropdown>
                    ))}

                    <NavLink href="/case-studies" label="Case Study" active={pathname === '/case-studies'} />
                    <NavLink href="/about" label="About" active={pathname === '/about'} />
                    <NavLink href="/blog" label="Blog" active={pathname === '/blog'} />
                </nav>

                {/* Right Side: CTA */}
                <div className="hidden md:flex items-center gap-6">
                    <Link
                        href="/contact"
                        className="relative px-6 py-3 group overflow-hidden rounded-xl bg-electric-cyan text-white font-monument text-xs tracking-wider hover:shadow-[0_0_20px_rgba(90,90,255,0.5)] transition-all duration-300"
                    >
                        <span className="relative z-10">Get Proposal</span>
                        <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
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
                                    className="block w-full py-4 bg-electric-cyan text-white font-monument text-sm uppercase rounded-xl"
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
                relative px-2 py-1 text-[11px] lg:text-xs font-monument uppercase tracking-wider transition-all duration-200
                ${active
                    ? 'text-electric-cyan font-bold scale-105'
                    : 'text-gray-600 hover:text-electric-cyan'
                }
            `}
        >
            {label}
            {active && (
                <motion.span
                    layoutId="underline"
                    className="absolute left-0 right-0 -bottom-1 h-0.5 bg-electric-cyan"
                    initial={{ width: 0 }}
                    animate={{ width: '100%' }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
            )}
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
                flex items-center gap-1 px-2 py-1 text-[11px] lg:text-xs font-monument uppercase tracking-wider transition-all duration-200
                ${isActive
                    ? 'text-electric-cyan'
                    : 'text-gray-600 hover:text-electric-cyan'
                }
            `}>
                {label}
                <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${isActive ? 'rotate-180 text-electric-cyan' : ''}`} />
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
