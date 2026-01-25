import Link from 'next/link';
import HoneycombPattern from "@/components/ui/HoneycombPattern";
import OrigamiCard from "@/components/ui/OrigamiCard";

export const metadata = {
    title: "Case Studies | WebAnts Digital Success Stories",
    description: "See how WebAnts drives results. Real case studies on SEO growth, high-performance web development, and PPC campaigns.",
};

export default function CaseStudiesPage() {
    return (
        <main className="min-h-screen bg-starlight-white text-deep-void pt-24 pb-20 px-6 md:px-12 font-inter">
            {/* Background Ambience */}
            {/* <HoneycombPattern className="opacity-40" /> */}
            <div className="fixed inset-0 pointer-events-none">
                <div className="absolute top-20 left-20 w-[600px] h-[600px] bg-electric-cyan/5 rounded-full blur-[150px]" />
            </div>

            <div className="max-w-6xl mx-auto relative z-10">
                <header className="mb-20 text-center">
                    <h1 className="font-monument text-4xl md:text-7xl uppercase leading-tight mb-6">
                        Proven <span className="text-ants-blue">Results</span>
                    </h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        We believe in data, not fluff. Explore how we've helped brands scale through biomechanical engineering and strategic marketing.
                    </p>
                </header>

                {/* Case Study Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="col-span-1 md:col-span-2">
                        <OrigamiCard className="h-full">
                            <div className="relative z-10">
                                <span className="text-electric-cyan font-mono text-xs tracking-widest uppercase mb-2 block">E-commerce • SEO</span>
                                <h3 className="font-monument text-3xl md:text-4xl uppercase mb-4 group-hover:text-ants-blue transition-colors">Project: Neon Commerce</h3>
                                <p className="text-gray-600 mb-8 max-w-xl">
                                    How we increased organic traffic by 250% and doubled conversion rates for a national lifestyle brand using Next.js and programmatic SEO.
                                </p>
                                <ul className="flex flex-wrap gap-4 text-xs font-mono text-deep-void/60">
                                    <li className="px-3 py-1 border border-deep-void/10 rounded-full">Next.js</li>
                                    <li className="px-3 py-1 border border-deep-void/10 rounded-full">Shopify Headless</li>
                                    <li className="px-3 py-1 border border-deep-void/10 rounded-full">Technical SEO</li>
                                </ul>
                            </div>
                        </OrigamiCard>
                    </div>

                    <ProjectCard title="FinTech Dashboard" category="Web App • Fintech" desc="Designing a high-performance analytics dashboard processing real-time data for 50k+ users." tags={["React", "D3.js", "Python"]} />
                    <ProjectCard title="Local Domination" category="Local SEO • Dental" desc="Ranking #1 in 3 major cities for competitive dental keywords, driving a 40% increase in appointments." tags={["Local SEO", "GMB", "CRO"]} />
                </div>
            </div>
        </main>
    );
}

function ProjectCard({ title, category, desc, tags }: any) {
    return (
        <OrigamiCard className="h-full">
            <span className="text-ants-blue font-mono text-xs tracking-widest uppercase mb-2 block">{category}</span>
            <h3 className="font-monument text-2xl uppercase mb-4">{title}</h3>
            <p className="text-gray-600 text-sm mb-6">{desc}</p>
            <ul className="flex flex-wrap gap-2 text-[10px] font-mono text-deep-void/40">
                {tags.map((tag: string) => (
                    <li key={tag} className="px-2 py-1 border border-deep-void/10 rounded-full">{tag}</li>
                ))}
            </ul>
        </OrigamiCard>
    )
}
