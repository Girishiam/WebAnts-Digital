import { ArrowUpRight, Code, Bot, TrendingUp, Users, Database, Globe, Cpu, Smartphone, Search, BarChart, Zap, Shield } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
    title: "Our Services | WebAnts Digital",
    description: "Explore our comprehensive suite of digital services: Web Engineering, Artificial Intelligence, and Growth Marketing. We build systems that scale.",
};

const serviceCategories = [
    {
        id: "web-engineering",
        title: "Web Engineering",
        subtitle: "High-Performance Digital Infrastructure",
        description: "We don't just build websites; we architect scalable digital ecosystems using bleeding-edge technologies.",
        icon: <Code className="w-6 h-6" />,
        color: "text-blue-600",
        services: [
            {
                title: "Frontend Engineering",
                description: "Pixel-perfect, responsive interfaces with Next.js, React, and GSAP for fluid animations.",
                tech: ["Next.js", "React", "GSAP", "Tailwind"],
                link: "/services/frontend"
            },
            {
                title: "Backend Infrastructure",
                description: "Robust, scalable server-side systems designed for high concurrency and security.",
                tech: ["Django", "FastAPI", "Node.js", "Go"],
                link: "/services/backend"
            },
            {
                title: "Database Architecture",
                description: "Optimized data storage solutions ensures speed, reliability, and data integrity.",
                tech: ["PostgreSQL", "Redis", "MongoDB", "Supabase"],
                link: "/services/databases"
            },
            {
                title: "DevOps & Cloud",
                description: "Automated CI/CD pipelines and containerized deployment for zero-downtime scalability.",
                tech: ["AWS", "Docker", "Kubernetes", "Terraform"],
                link: "/services/devops"
            },
            {
                title: "Real-time Systems",
                description: "Interactive applications with WebSockets and WebRTC for live data streaming.",
                tech: ["Socket.io", "WebRTC", "Kafka"],
                link: "/services/realtime"
            },
            {
                title: "SaaS Development",
                description: "End-to-end multi-tenant architecture for modern software-as-a-service platforms.",
                tech: ["Stripe", "Auth0", "Multi-tenancy"],
                link: "/services/saas"
            }
        ]
    },
    {
        id: "artificial-intelligence",
        title: "Artificial Intelligence",
        subtitle: "The Future of Automation & Cognition",
        description: "Harness the power of LLMs and autonomous agents to revolutionize your business workflows.",
        icon: <Bot className="w-6 h-6" />,
        color: "text-purple-600",
        services: [
            {
                title: "Custom LLM Chatbots",
                description: "Context-aware AI assistants trained on your specific business data and knowledge base.",
                tech: ["RAG", "OpenAI", "Pinecone"],
                link: "/services/chatbots"
            },
            {
                title: "AI Agents & Automation",
                description: "Autonomous workflows that handle complex tasks without human intervention.",
                tech: ["AutoGPT", "LangChain", "n8n"],
                link: "/services/agents"
            },
            {
                title: "RAG Systems",
                description: "Retrieval-Augmented Generation systems for accurate, data-driven AI responses.",
                tech: ["Vector DBs", "LlamaIndex", "Embeddings"],
                link: "/services/rag"
            },
            {
                title: "Predictive Analytics",
                description: "Machine learning models to forecast trends and optimize decision-making processes.",
                tech: ["Python", "TensorFlow", "Scikit-learn"],
                link: "/services/analytics"
            }
        ]
    },
    {
        id: "growth-marketing",
        title: "Growth & Marketing",
        subtitle: "Data-Driven Revenue Acceleration",
        description: "Strategic acquisition channels optimized for maximum ROI and brand authority.",
        icon: <TrendingUp className="w-6 h-6" />,
        color: "text-orange-600",
        services: [
            {
                title: "Advanced SEO",
                description: "Technical and content strategies to dominate search engine results pages.",
                tech: ["Technical SEO", "Content Strategy", "Link Building"],
                link: "/services/seo"
            },
            {
                title: "Local Dominance",
                description: "Capture local market share with optimized Google Maps and local listings.",
                tech: ["GMB", "Local Citations", "Reviews"],
                link: "/services/local-seo"
            },
            {
                title: "Performance PPC",
                description: "High-conversion paid campaigns on Google, Meta, and LinkedIn ads.",
                tech: ["Google Ads", "Meta Ads", "Retargeting"],
                link: "/services/ppc"
            },
            {
                title: "Future-Ready AEO",
                description: "Answer Engine Optimization to rank in AI-generated search results (ChatGPT, Gemini).",
                tech: ["AI Search", "Voice Search", "Snippets"],
                link: "/services/aeo"
            }
        ]
    }
];

export default function ServicesPage() {
    return (
        <main className="min-h-screen bg-starlight-white text-deep-void pt-32 pb-24 px-4 md:px-8 relative overflow-hidden">

            {/* Ambient Background Pattern */}
            <div className="fixed inset-0 pointer-events-none z-0 opacity-40">
                <div className="absolute top-[-10%] left-[-10%] w-[800px] h-[800px] bg-linear-to-br from-electric-cyan/10 to-transparent rounded-full blur-[150px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-linear-to-tl from-ants-blue/5 to-transparent rounded-full blur-[150px]" />
                <div className="absolute inset-0"
                    style={{ backgroundImage: 'radial-gradient(#e5e7eb 1px, transparent 1px)', backgroundSize: '30px 30px' }}>
                </div>
            </div>

            <div className="max-w-[1400px] mx-auto relative z-10">

                {/* Hero Header */}
                <div className="text-center max-w-4xl mx-auto mb-24">
                    <h1 className="text-5xl md:text-7xl font-monument uppercase leading-[1.1] mb-8 text-black">
                        Our <span className="text-transparent bg-clip-text bg-linear-to-r from-electric-cyan to-ants-blue">Expertise</span>
                    </h1>
                    <p className="text-xl text-gray-600 leading-relaxed font-light">
                        We offer a holistic suite of digital services designed to transform your business from every angle—Code, Cognition, and Conversion.
                    </p>
                </div>

                {/* Categories */}
                <div className="space-y-32">
                    {serviceCategories.map((category, index) => (
                        <section key={category.id} id={category.id} className="scroll-mt-32">

                            {/* Section Header */}
                            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 border-b border-gray-200 pb-8">
                                <div>
                                    <div className={`p-4 rounded-2xl bg-white border border-gray-100 shadow-lg shadow-black/5 w-fit mb-6 ${category.color}`}>
                                        {category.icon}
                                    </div>
                                    <h2 className="text-3xl md:text-5xl font-monument uppercase mb-3 text-black">{category.title}</h2>
                                    <p className="text-xl text-gray-500 font-medium">{category.subtitle}</p>
                                </div>
                                <p className="text-gray-600 max-w-md text-sm md:text-base leading-relaxed">
                                    {category.description}
                                </p>
                            </div>

                            {/* Service Cards Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {category.services.map((service, idx) => (
                                    <div
                                        key={idx}
                                        className="group relative p-8 rounded-[2rem] bg-white border border-gray-100 shadow-xl shadow-black/[0.02] hover:shadow-electric-cyan/10 hover:border-electric-cyan/30 transition-all duration-300 hover:-translate-y-1 flex flex-col h-full overflow-hidden"
                                    >
                                        <div className="absolute top-0 right-0 w-32 h-32 bg-linear-to-br from-electric-cyan/5 to-transparent rounded-bl-[100px] -mr-8 -mt-8 transition-transform group-hover:scale-110" />

                                        <div className="relative z-10 mb-6">
                                            <h3 className="text-xl font-bold font-monument uppercase mb-3 text-deep-void group-hover:text-electric-cyan transition-colors">{service.title}</h3>
                                            <p className="text-gray-500 text-sm leading-relaxed mb-6">{service.description}</p>

                                            {/* Tech Tags */}
                                            <div className="flex flex-wrap gap-2 mb-8">
                                                {service.tech.map(tech => (
                                                    <span key={tech} className="text-[10px] uppercase font-bold tracking-wider px-3 py-1 rounded-full bg-gray-50 text-gray-500 border border-gray-100 group-hover:bg-white group-hover:border-electric-cyan/20 transition-colors">
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="relative z-10 mt-auto">
                                            <Link
                                                href={service.link}
                                                className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-electric-cyan hover:text-ants-blue transition-colors"
                                            >
                                                Learn More <ArrowUpRight className="w-4 h-4" />
                                            </Link>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className="mt-32 p-12 md:p-20 rounded-[3rem] bg-linear-to-br from-[#02182B] to-black border border-white/10 text-center relative overflow-hidden group shadow-2xl shadow-blue-900/20">
                    <div className="absolute inset-0 bg-noise opacity-[0.05]" />
                    <div className="absolute -top-[50%] -left-[50%] w-[200%] h-[200%] bg-linear-to-br from-transparent via-electric-cyan/10 to-transparent rotate-45 animate-pulse-slow pointer-events-none" />

                    <div className="relative z-10">
                        <h2 className="text-4xl md:text-6xl font-monument uppercase mb-8 text-white">Ready To <span className="text-electric-cyan">Scale?</span></h2>
                        <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-12">
                            Transform your digital presence with our end-to-end solutions. Let's architect your success story.
                        </p>
                        <Link
                            href="/contact"
                            className="inline-flex px-10 py-5 bg-electric-cyan text-white rounded-full font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-all duration-300 shadow-[0_0_40px_rgba(90,90,255,0.4)] hover:shadow-white/20"
                        >
                            Start Your Project
                        </Link>
                    </div>
                </div>

            </div>
        </main>
    );
}
