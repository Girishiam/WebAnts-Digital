import { ArrowUpRight, Briefcase, Zap, Heart, Coffee, Globe } from 'lucide-react';
import Link from 'next/link';
import JobBoard from '@/components/ui/JobBoard';

export const metadata = {
    title: "Careers | WebAnts Digital",
    description: "Join our team of dreamers, builders, and innovators. We are shaping the future of digital experiences.",
};

const benefits = [
    { title: "Remote-First", description: "Work from anywhere in the world. We focus on output, not hours.", icon: Globe },
    { title: "Competitive Pay", description: "Top-tier salaries and equity packages for top-tier talent.", icon: Zap },
    { title: "Health & Wellness", description: "Comprehensive health coverage and wellness stipends.", icon: Heart },
    { title: "Learning Budget", description: "Annual budget for courses, books, and conferences.", icon: Briefcase },
];

export default function CareersPage() {
    return (
        <main className="min-h-screen bg-starlight-white text-deep-void pt-32 pb-24 px-4 md:px-8 relative overflow-hidden">
            {/* Background Ambience */}
            <div className="fixed inset-0 pointer-events-none z-0 opacity-40">
                <div className="absolute top-0 left-[20%] w-[600px] h-[600px] bg-electric-cyan/5 rounded-full blur-[100px]" />
                <div className="absolute bottom-0 right-[20%] w-[500px] h-[500px] bg-ants-blue/5 rounded-full blur-[100px]" />
            </div>

            <div className="max-w-[1200px] mx-auto relative z-10">

                {/* Hero */}
                <div className="text-center max-w-3xl mx-auto mb-24">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black/5 border border-black/10 text-deep-void mb-8">
                        <Briefcase className="w-4 h-4" />
                        <span className="text-xs font-bold uppercase tracking-widest">We Are Hiring</span>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-monument uppercase leading-[1.1] mb-8 text-black">
                        Build The <span className="text-transparent bg-clip-text bg-linear-to-r from-electric-cyan to-ants-blue">Future</span>
                    </h1>
                    <p className="text-xl text-gray-600 leading-relaxed font-light">
                        We're looking for relentless problem-solvers and creative visionaries to join our mission of engineering the next generation of the web.
                    </p>
                </div>

                {/* Benefits Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-32">
                    {benefits.map((benefit, idx) => (
                        <div key={idx} className="bg-white p-8 rounded-3xl border border-gray-100 shadow-xl shadow-black/5 flex flex-col items-center text-center hover:-translate-y-1 transition-transform cursor-default">
                            <div className="w-12 h-12 bg-electric-cyan/10 text-electric-cyan rounded-2xl flex items-center justify-center mb-6">
                                <benefit.icon className="w-6 h-6" />
                            </div>
                            <h3 className="text-lg font-bold uppercase mb-3 text-deep-void">{benefit.title}</h3>
                            <p className="text-sm text-gray-500 leading-relaxed">{benefit.description}</p>
                        </div>
                    ))}
                </div>

                {/* Open Positions - Interactive Board */}
                <JobBoard />

                {/* Values CTA */}
                <div className="mt-32 text-center">
                    <p className="text-gray-500 mb-8">Don't see a role that fits?</p>
                    <a href="mailto:careers@webantsdigital.com" className="inline-block border-b-2 border-electric-cyan text-deep-void font-bold uppercase tracking-wider pb-1 hover:text-electric-cyan transition-colors">
                        Pitch us your role
                    </a>
                </div>

            </div>
        </main>
    );
}
