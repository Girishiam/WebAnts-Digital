'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Facebook, Twitter, Instagram, Linkedin, Send, MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="relative bg-[#00101d] text-white pt-24 pb-12 overflow-hidden mt-12">

            {/* Background Creative Elements */}
            <div className="absolute inset-0 pointer-events-none">
                {/* Large W Logo Watermark */}
                <div className="absolute -top-20 -right-20 text-[20rem] font-monument text-electric-cyan/5 select-none blur-sm opacity-50">
                    W
                </div>
                {/* Glow Spread */}
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-electric-cyan/5 blur-[120px] rounded-full" />
            </div>

            <div className="relative z-10 max-w-[1700px] mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-20">

                    {/* Column 1: Brand & Contact */}
                    <div className="space-y-8">
                        <Link href="/" className="inline-block group">
                            <Image
                                src="/WebAnts.svg"
                                alt="WebAnts"
                                width={180}
                                height={60}
                                className="h-12 w-auto object-contain bg-white rounded-xl px-2 py-1 border border-white/10"
                            />
                        </Link>
                        <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
                            We build future-ready digital experiences using 3D technologies, AI, and biomechanical design principles.
                        </p>

                        <div className="space-y-4">
                            <div className="flex items-start gap-3 text-gray-400 hover:text-white transition-colors">
                                <MapPin className="w-5 h-5 text-electric-cyan shrink-0 mt-0.5" />
                                <span className="text-sm">Dhaka, Bangladesh</span>
                            </div>
                            <a href="mailto:hello@webantsdigital.com" className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors">
                                <Mail className="w-5 h-5 text-electric-cyan shrink-0" />
                                <span className="text-sm">hello@webantsdigital.com</span>
                            </a>
                            <a href="tel:+923260000401" className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors">
                                <Phone className="w-5 h-5 text-electric-cyan shrink-0" />
                                <span className="text-sm">(+92) 326-000-0401</span>
                            </a>
                        </div>

                        <div className="flex gap-4">
                            {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                                <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-electric-cyan hover:text-black transition-all duration-300">
                                    <Icon className="w-5 h-5" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Column 2: Services */}
                    <div>
                        <h4 className="font-monument text-sm uppercase tracking-wider text-white mb-8">Services</h4>
                        <ul className="space-y-4">
                            {['Custom Software Development', 'Cloud Infrastructure', 'QA & Support', 'Next-Gen Technologies', 'Digital Marketing', 'Staff Augmentation'].map((item) => (
                                <li key={item}>
                                    <Link href="#" className="text-gray-400 hover:text-electric-cyan transition-colors text-sm block">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: Company */}
                    <div>
                        <h4 className="font-monument text-sm uppercase tracking-wider text-white mb-8">Company</h4>
                        <ul className="space-y-4">
                            {['Product', 'Case Studies', 'About Us', 'Careers', 'Contact Us', 'Terms and Conditions', 'Privacy Policy'].map((item) => (
                                <li key={item}>
                                    <Link href="#" className="text-gray-400 hover:text-electric-cyan transition-colors text-sm block">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 4: Newsletter Mini */}
                    <div>
                        <h4 className="font-monument text-sm uppercase tracking-wider text-white mb-8">Subscribe</h4>
                        <p className="text-gray-400 text-sm mb-6">
                            Get exclusive insights, curated resources and expert guidance.
                        </p>
                        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                            <input
                                type="email"
                                placeholder="Email"
                                className="w-full bg-white/5 border border-white/10 rounded-full px-5 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-electric-cyan focus:bg-white/10 transition-colors text-sm"
                            />
                            <button className="bg-electric-cyan text-black px-6 py-2.5 rounded-full font-bold uppercase tracking-wider text-xs hover:bg-white transition-colors w-max">
                                Subscribe
                            </button>
                        </form>
                    </div>

                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
                    <p>© 2026 WebAnts Digital | All Rights Reserved</p>
                    <div className="flex gap-8">
                        <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
