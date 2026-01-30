'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail } from 'lucide-react';
import { companyDetails } from '@/data/company';
import { footerLinks } from '@/data/navigation';

import { useState } from 'react';
import { useEmail } from '@/hooks/use-email';
import { Loader2, Check } from 'lucide-react';

function NewsletterForm() {
    const [email, setEmail] = useState('');
    const { sendNewsletterSignup, isLoading, status, resetStatus } = useEmail();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!email) return;
        const success = await sendNewsletterSignup({ email });
        if (success) {
            setEmail('');
            setTimeout(resetStatus, 5000);
        }
    };

    if (status === 'success') {
        return (
            <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4 text-green-400 text-sm flex items-center gap-2">
                <Check className="w-4 h-4" />
                <span>Thanks for subscribing!</span>
            </div>
        );
    }

    return (
        <form className="space-y-4" onSubmit={handleSubmit}>
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full bg-white/5 border border-white/10 rounded-full px-5 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-electric-cyan focus:bg-white/10 transition-colors text-sm"
            />
            <button
                disabled={isLoading}
                className="bg-electric-cyan text-black px-6 py-2.5 rounded-full font-bold uppercase tracking-wider text-xs hover:bg-white transition-colors w-max disabled:opacity-50 flex items-center gap-2"
            >
                {isLoading ? (
                    <>
                        <Loader2 className="w-3 h-3 animate-spin" />
                        Sending...
                    </>
                ) : (
                    'Subscribe'
                )}
            </button>
            {status === 'error' && (
                <p className="text-red-400 text-xs">Failed to subscribe. Try again.</p>
            )}
        </form>
    );
}

export default function Footer() {
    return (
        <footer className="relative bg-[#00101d] text-white pt-24 pb-12 overflow-hidden">

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
                            {companyDetails.description}
                        </p>

                        <div className="space-y-4">
                            <div className="flex items-start gap-3 text-gray-400 hover:text-white transition-colors">
                                <MapPin className="w-5 h-5 text-electric-cyan shrink-0 mt-0.5" />
                                <span className="text-sm">{companyDetails.contact.address}</span>
                            </div>
                            <a href={`mailto:${companyDetails.contact.email}`} className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors">
                                <Mail className="w-5 h-5 text-electric-cyan shrink-0" />
                                <span className="text-sm">{companyDetails.contact.email}</span>
                            </a>
                            <a href={`tel:${companyDetails.contact.phone}`} className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors">
                                <Phone className="w-5 h-5 text-electric-cyan shrink-0" />
                                <span className="text-sm">{companyDetails.contact.phone}</span>
                            </a>
                        </div>

                        <div className="flex gap-4">
                            {companyDetails.socials.map((social, i) => (
                                <a key={i} href={social.href} className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-electric-cyan hover:text-black transition-all duration-300">
                                    <social.icon className="w-5 h-5" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Column 2: Services */}
                    <div>
                        <h4 className="font-monument text-sm uppercase tracking-wider text-white mb-8">Services</h4>
                        <ul className="space-y-4">
                            {footerLinks.services.map((item) => (
                                <li key={item.label}>
                                    <Link href={item.href} className="text-gray-400 hover:text-electric-cyan transition-colors text-sm block">
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: Company */}
                    <div>
                        <h4 className="font-monument text-sm uppercase tracking-wider text-white mb-8">Company</h4>
                        <ul className="space-y-4">
                            {footerLinks.company.map((item) => (
                                <li key={item.label}>
                                    <Link href={item.href} className="text-gray-400 hover:text-electric-cyan transition-colors text-sm block">
                                        {item.label}
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
                        <NewsletterForm />
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
