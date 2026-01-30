import Link from 'next/link';
import Image from 'next/image';
import { caseStudies } from '@/data/caseStudies';
import { ArrowUpRight } from 'lucide-react';

export const metadata = {
    title: "Case Studies | WebAnts Digital Success Stories",
    description: "See how WebAnts drives results. Real case studies on SEO growth, high-performance web development, and PPC campaigns.",
};

export default function CaseStudiesPage() {
    return (
        <main className="min-h-screen bg-starlight-white text-deep-void pt-32 pb-24 px-6 md:px-12 font-inter relative overflow-hidden">
            {/* Smooth Background Gradient */}
            <div className="fixed inset-0 pointer-events-none z-0">
                <div className="absolute top-[-20%] right-[-20%] w-[1000px] h-[1000px] bg-electric-cyan/5 rounded-full blur-[150px]" />
                <div className="absolute bottom-[-20%] left-[-20%] w-[800px] h-[800px] bg-ants-blue/5 rounded-full blur-[150px]" />
            </div>

            <div className="max-w-[1400px] mx-auto relative z-10">
                <header className="mb-24 text-center">
                    <h1 className="font-monument text-5xl md:text-8xl uppercase leading-[0.9] mb-8 text-deep-void">
                        Selected <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-cyan to-ants-blue">Works</span>
                    </h1>
                    <p className="text-xl text-gray-500 max-w-2xl mx-auto font-light">
                        Explore our portfolio of digital masterpieces, engineered for performance and impact.
                    </p>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {caseStudies.map((project, index) => (
                        <Link
                            key={project.id}
                            href={`/case-studies/${project.slug}`}
                            className="group block relative"
                        >
                            <div className="relative aspect-[4/3] rounded-[2rem] overflow-hidden mb-6 bg-gray-100 border border-gray-200 group-hover:border-electric-cyan/50 transition-colors">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />

                                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest text-deep-void border border-gray-200">
                                    {project.category}
                                </div>

                                <div className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                                    <ArrowUpRight className="w-5 h-5 text-deep-void" />
                                </div>
                            </div>

                            <div className="px-2">
                                <h3 className="font-monument text-2xl uppercase leading-tight mb-3 group-hover:text-electric-cyan transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-gray-500 text-sm line-clamp-2 mb-4">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {project.techStack.slice(0, 3).map(tag => (
                                        <span key={tag} className="text-[10px] font-bold uppercase tracking-wider text-gray-400 border border-gray-200 px-2 py-1 rounded-full">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </main>
    );
}
