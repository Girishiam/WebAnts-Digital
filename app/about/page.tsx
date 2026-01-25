import Overlay from "@/components/ui/Overlay";
import HoneycombPattern from "@/components/ui/HoneycombPattern";
import OrigamiCard from "@/components/ui/OrigamiCard";
import Link from 'next/link';

export const metadata = {
    title: "About WebAnts | Trusted Digital Growth Partner Since 2020",
    description: "Learn about WebAnts, a leading digital marketing agency and web engineering firm. See our history, mission, and team experts.",
};

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-starlight-white text-deep-void pt-24 pb-20 px-6 md:px-12 font-inter">
            {/* Background Ambience & Texture */}
            {/* <HoneycombPattern className="opacity-40" /> */}
            <div className="fixed inset-0 pointer-events-none">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-electric-cyan/5 rounded-full blur-[120px]" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-ants-blue/5 rounded-full blur-[120px]" />
            </div>

            <div className="max-w-4xl mx-auto relative z-10">
                {/* Header */}
                <section className="mb-20">
                    <div className="inline-block px-3 py-1 bg-ants-blue/10 border border-ants-blue/20 rounded text-ants-blue text-xs font-mono tracking-widest mb-6">
                        SINCE 2020
                    </div>
                    <h1 className="font-monument text-4xl md:text-6xl uppercase leading-tight mb-6">
                        About <span className="text-electric-cyan">WebAnts</span>
                    </h1>
                    <p className="text-xl text-gray-600 leading-relaxed">
                        Your trusted digital growth partner. We combine biomechanical precision in engineering with creative dominance in marketing to deliver real, measurable results.
                    </p>
                </section>

                {/* Mission */}
                <section className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
                    <OrigamiCard>
                        <h2 className="font-monument text-2xl uppercase mb-4 text-ants-blue">Our Mission</h2>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            To empower businesses with future-ready digital solutions. We don't just build websites; we build engines of growth that rank, convert, and scale.
                        </p>
                    </OrigamiCard>
                    <OrigamiCard>
                        <h2 className="font-monument text-2xl uppercase mb-4 text-electric-cyan">Our Vision</h2>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            A web where design meets intelligence. We envision a digital landscape where every interaction is optimized by AI and grounded in human creativity.
                        </p>
                    </OrigamiCard>
                </section>

                {/* Stats */}
                <section className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-24 border-t border-deep-void/10 pt-12">
                    <Stat number="1500+" label="Projects Delivered" />
                    <Stat number="98%" label="Client Retention" />
                    <Stat number="50M+" label="Leads Generated" />
                    <Stat number="50+" label="Team Experts" />
                </section>

                {/* Call to Action */}
                <section className="text-center py-20 bg-gradient-to-b from-transparent to-ants-blue/10 rounded-3xl border border-deep-void/5">
                    <h2 className="font-monument text-3xl md:text-4xl uppercase mb-6">Ready to Scale?</h2>
                    <p className="text-gray-600 mb-8 max-w-lg mx-auto">
                        Join the hive. Let's build something extraordinary together.
                    </p>
                    <Link href="/contact" className="px-8 py-4 bg-ants-blue text-white font-monument text-sm uppercase rounded-full hover:bg-electric-cyan transition-all">
                        Get a Proposal
                    </Link>
                </section>
            </div>
        </main>
    );
}

function Stat({ number, label }: { number: string, label: string }) {
    return (
        <div className="text-center">
            <div className="font-monument text-3xl md:text-5xl text-transparent bg-clip-text bg-gradient-to-b from-deep-void to-deep-void/50 mb-2">
                {number}
            </div>
            <div className="font-mono text-xs text-ants-blue tracking-widest uppercase">
                {label}
            </div>
        </div>
    )
}
