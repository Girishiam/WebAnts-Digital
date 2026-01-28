import { notFound } from 'next/navigation';
import { servicesData } from '@/data/services';
import { ArrowLeft, CheckCircle2, ArrowRight, Layers, FileText, Settings, Rocket } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

// Generate metadata dynamically
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const service = servicesData[slug];
    if (!service) return { title: 'Service Not Found | WebAnts Digital' };

    return {
        title: `${service.title} | WebAnts Digital Services`,
        description: service.description,
    };
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const service = servicesData[slug];

    if (!service) {
        notFound();
    }

    const Icon = service.icon;

    return (
        <main className="min-h-screen bg-starlight-white text-deep-void pt-32 pb-24 relative overflow-hidden">

            <div className="max-w-[1700px] mx-auto px-4 md:px-6">

                {/* Main Card Container */}
                <div className="relative rounded-[2.5rem] bg-white shadow-2xl shadow-electric-cyan/5 overflow-hidden p-8 md:p-16 border border-gray-100">

                    {/* Background Pattern */}
                    <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
                        <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-linear-to-br from-electric-cyan/10 to-transparent rounded-full blur-[100px]" />
                        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-linear-to-tr from-ants-blue/5 to-transparent rounded-full blur-[100px]" />
                        <div className="absolute inset-0"
                            style={{ backgroundImage: 'radial-gradient(#e5e7eb 1px, transparent 1px)', backgroundSize: '30px 30px' }}
                        />
                    </div>

                    <div className="relative z-10">
                        {/* Back Link */}
                        <Link href="/services" className="inline-flex items-center gap-2 text-gray-500 hover:text-electric-cyan transition-colors mb-12 uppercase tracking-widest text-xs font-bold group">
                            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back to Services
                        </Link>

                        {/* Hero Section */}
                        <div className="flex flex-col lg:flex-row items-center gap-16 mb-24">
                            <div className="max-w-4xl flex-1">
                                <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-electric-cyan/5 border border-electric-cyan/10 text-electric-cyan mb-8">
                                    <Icon className="w-5 h-5" />
                                    <span className="text-xs font-monument uppercase tracking-wider">{service.title}</span>
                                </div>
                                <h1 className="text-4xl md:text-7xl font-monument uppercase leading-[1.1] mb-8 text-deep-void">
                                    {service.subtitle}
                                </h1>
                                <p className="text-xl md:text-2xl text-gray-600 leading-relaxed font-light border-l-4 border-electric-cyan pl-6">
                                    {service.description}
                                </p>
                            </div>

                            {/* Hero Image */}
                            {service.image && (
                                <div className="flex-1 w-full relative h-[400px] md:h-[500px] rounded-3xl overflow-hidden shadow-2xl shadow-electric-cyan/20 group">
                                    <Image
                                        src={service.image}
                                        alt={service.title}
                                        fill
                                        className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-linear-to-tr from-electric-cyan/10 to-transparent mix-blend-overlay" />
                                </div>
                            )}
                        </div>

                        {/* Main Grid Layout */}
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-24">

                            {/* Left Column: Features (Span 7) */}
                            <div className="lg:col-span-7">
                                <h2 className="text-2xl font-monument uppercase mb-12 flex items-center gap-4">
                                    <span className="text-electric-cyan">01.</span> Core Features
                                </h2>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {service.features.map((feature: any, idx: number) => (
                                        <div key={idx} className="group p-8 rounded-3xl bg-gray-50 border border-transparent hover:border-electric-cyan/20 hover:bg-white hover:shadow-xl hover:shadow-electric-cyan/5 transition-all duration-300 hover:-translate-y-1">
                                            <h3 className="text-lg font-bold uppercase mb-3 text-deep-void group-hover:text-electric-cyan transition-colors">{feature.title}</h3>
                                            <p className="text-gray-500 text-sm leading-relaxed">{feature.description}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Right Column: Key Benefits (Span 5) */}
                            <div className="lg:col-span-5">
                                <div className="bg-deep-void text-white p-10 rounded-[2.5rem] relative overflow-hidden">
                                    <div className="absolute top-0 right-0 w-64 h-64 bg-electric-cyan/10 rounded-full blur-[80px]" />

                                    <h2 className="text-xl font-monument uppercase mb-8 relative z-10">Why This Matters</h2>

                                    <ul className="space-y-6 relative z-10">
                                        {service.benefits.map((benefit: string, idx: number) => (
                                            <li key={idx} className="flex items-start gap-4">
                                                <div className="mt-1 p-1 bg-electric-cyan/20 rounded-full text-electric-cyan">
                                                    <CheckCircle2 className="w-4 h-4" />
                                                </div>
                                                <span className="text-gray-300 font-medium">{benefit}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    <div className="mt-12 pt-8 border-t border-white/10">
                                        <h3 className="text-xs font-monument uppercase text-gray-400 mb-4">Powered By</h3>
                                        <div className="flex flex-wrap gap-2">
                                            {service.techStack.map((tech: string) => (
                                                <span key={tech} className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs font-medium tracking-wide text-electric-cyan hover:bg-white/10 transition-colors cursor-default">
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Process Section */}
                        {service.process && (
                            <div className="mb-24">
                                <h2 className="text-2xl font-monument uppercase mb-16 text-center">
                                    How We <span className="text-transparent bg-clip-text bg-linear-to-r from-electric-cyan to-ants-blue">Execute</span>
                                </h2>

                                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                                    {service.process.map((step: any, idx: number) => (
                                        <div key={idx} className="relative">
                                            {/* Connecting Line */}
                                            {idx < service.process.length - 1 && (
                                                <div className="hidden md:block absolute top-8 left-[50%] w-full h-[2px] bg-gray-100 z-0" />
                                            )}

                                            <div className="relative z-10 bg-white p-6 rounded-2xl border border-gray-100 hover:border-electric-cyan/30 hover:shadow-lg transition-all text-center group">
                                                <div className="w-16 h-16 mx-auto mb-6 bg-gray-50 rounded-2xl flex items-center justify-center text-electric-cyan text-xl font-bold border border-gray-100 group-hover:bg-electric-cyan group-hover:text-white transition-colors duration-300">
                                                    0{idx + 1}
                                                </div>
                                                <h3 className="font-bold uppercase mb-2 text-sm">{step.title}</h3>
                                                <p className="text-xs text-gray-500 leading-relaxed">{step.description}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Deliverables & Final CTA */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">

                            {/* Deliverables */}
                            <div className="bg-gray-50 rounded-3xl p-10 border border-gray-100">
                                <h3 className="text-lg font-monument uppercase mb-8 flex items-center gap-3">
                                    <Layers className="w-5 h-5 text-electric-cyan" />
                                    What You Get
                                </h3>
                                <ul className="grid grid-cols-1 gap-4">
                                    {service.deliverables?.map((item: string, idx: number) => (
                                        <li key={idx} className="flex items-center gap-3 bg-white p-4 rounded-xl border border-gray-100 shadow-sm text-sm font-medium text-gray-600">
                                            <CheckCircle2 className="w-4 h-4 text-green-500" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* CTA */}
                            <div className="bg-linear-to-br from-[#02182B] to-black rounded-3xl p-10 text-center flex flex-col justify-center items-center relative overflow-hidden group">
                                <div className="absolute inset-0 bg-noise opacity-10" />
                                <div className="absolute top-0 right-0 w-full h-full bg-linear-to-b from-electric-cyan/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                <h3 className="text-2xl font-monument uppercase text-white mb-4 relative z-10">Ready to Start?</h3>
                                <p className="text-gray-400 mb-8 max-w-sm mx-auto relative z-10">
                                    Let's build something extraordinary together. Schedule a free consultation today.
                                </p>

                                <Link
                                    href="/contact"
                                    className="relative z-10 px-8 py-4 bg-electric-cyan text-white font-bold uppercase tracking-wider rounded-full hover:bg-white hover:text-black transition-all duration-300 shadow-[0_0_20px_rgba(90,90,255,0.4)] hover:shadow-white/20"
                                >
                                    Get Proposal
                                </Link>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </main>
    );
}
