import Overlay from "@/components/ui/Overlay";
import Link from 'next/link';

export const metadata = {
    title: "Local SEO Services | Dominate Google Maps with WebAnts",
    description: "Attract and convert local customers with WebAnts' data-driven Local SEO services. We help you dominate Google Maps, Local Pack, and search results.",
    alternates: {
        canonical: 'https://webants.digital/services/local-seo',
    },
    openGraph: {
        title: 'Local SEO Services | Dominate Google Maps with WebAnts',
        description: 'Attract and convert local customers with WebAnts\' data-driven Local SEO services.',
        url: 'https://webants.digital/services/local-seo',
        siteName: 'WebAnts Digital',
        locale: 'en_US',
        type: 'website',
    },
};

export default function LocalSEOPage() {
    return (
        <main className="min-h-screen bg-deep-void text-white font-sans selection:bg-electric-cyan selection:text-deep-void pt-24 pb-20 px-6 md:px-12 relative overflow-hidden">

            {/* Background Ambience */}
            <div className="fixed inset-0 pointer-events-none z-0">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-electric-cyan/5 rounded-full blur-[120px]" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-ants-blue/5 rounded-full blur-[120px]" />
                <div className="absolute inset-0 opacity-[0.03]"
                    style={{ backgroundImage: 'linear-gradient(#4b5563 1px, transparent 1px), linear-gradient(90deg, #4b5563 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
                </div>
            </div>

            <article className="max-w-4xl mx-auto relative z-10">

                {/* Hero Section */}
                <section className="mb-20 text-center md:text-left">
                    <div className="inline-block px-3 py-1 bg-electric-cyan/10 border border-electric-cyan/20 rounded text-electric-cyan text-xs font-mono tracking-widest mb-6">
                        SERVICE 3.1
                    </div>
                    <h1 className="font-monument text-3xl md:text-5xl uppercase leading-tight mb-6">
                        Local SEO <br /> <span className="text-electric-cyan">Services</span>
                    </h1>
                    <p className="text-xl text-gray-400 leading-relaxed max-w-2xl mb-8">
                        Attract & Convert Customers in Your Area. We don't just put you on the map; we make you the destination.
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <Link href="/contact" className="px-8 py-4 bg-electric-cyan text-deep-void font-bold uppercase tracking-wider hover:bg-white transition-all duration-300 rounded-lg">
                            Get a Free Audit
                        </Link>
                    </div>
                </section>

                {/* Purpose & Audience */}
                <section className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24 border-t border-white/10 pt-12">
                    <div className="bg-white/5 p-8 rounded-2xl border border-white/10 backdrop-blur-sm">
                        <h2 className="font-monument text-xl uppercase mb-4 text-white">Who It's For</h2>
                        <ul className="space-y-3 text-gray-400 text-sm">
                            <li className="flex items-center gap-2"><span className="text-electric-cyan">▹</span> Small to Medium Local Businesses</li>
                            <li className="flex items-center gap-2"><span className="text-electric-cyan">▹</span> Multi-location Enterprises</li>
                            <li className="flex items-center gap-2"><span className="text-electric-cyan">▹</span> Franchise Owners</li>
                            <li className="flex items-center gap-2"><span className="text-electric-cyan">▹</span> Brick & Mortar Stores</li>
                        </ul>
                    </div>
                    <div className="p-8">
                        <h2 className="font-monument text-xl uppercase mb-4 text-ants-blue">Our Approach</h2>
                        <p className="text-gray-400 leading-relaxed text-sm">
                            We optimize your digital footprint to ensure you dominate local search queries. From <strong>Google Map Pack</strong> dominance to hyper-local content strategies, we drive foot traffic and high-intent leads directly to your doorstep.
                        </p>
                    </div>
                </section>

                {/* Key Strategies */}
                <section className="mb-24">
                    <h2 className="font-monument text-2xl md:text-3xl uppercase mb-12 text-center">Dominate Your <span className="text-transparent bg-clip-text bg-linear-to-r from-electric-cyan to-ants-blue">Locale</span></h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            { title: 'GMB Optimization', desc: 'Complete profile auditing, category optimization, and engagement management for Google Business Profile.' },
                            { title: 'Local Citations', desc: 'Consistent NAP (Name, Address, Phone) across major directories to build high-authority trust signals.' },
                            { title: 'Geo-Targeted Content', desc: 'Creating location-specific landing pages and blog content to capture "near me" search intent.' },
                            { title: 'Review Management', desc: 'Strategies to generate authentic 5-star reviews and manage your reputation across platforms.' },
                            { title: 'Local Link Building', desc: 'Acquiring backlinks from local news sites, chambers of commerce, and community hubs.' },
                            { title: 'Schema Implementation', desc: 'Advanced JSON-LD LocalBusiness schema to help search engines understand your geo-relevance.' }
                        ].map((item, idx) => (
                            <div key={idx} className="group p-6 bg-white/2 border border-white/5 hover:border-electric-cyan/30 transition-all duration-300 hover:-translate-y-1 rounded-xl">
                                <h3 className="text-lg font-bold text-white mb-3 group-hover:text-electric-cyan transition-colors">{item.title}</h3>
                                <p className="text-sm text-gray-500 leading-relaxed group-hover:text-gray-300 transition-colors">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Structure Data / Schema Markup (Invisible but present for crawlers) */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "Service",
                            "name": "Local SEO Services",
                            "provider": {
                                "@type": "LocalBusiness",
                                "name": "WebAnts Digital"
                            },
                            "areaServed": "Worldwide",
                            "description": "Comprehensive Local SEO services including Google My Business optimization, local citations, and geo-targeted content strategies."
                        })
                    }}
                />
            </article>
        </main>
    )
}
