import { Code, Target, Database, Bot, Cloud, Share2, Network, Zap } from 'lucide-react';

export const navbarLinks = [
    { label: "Home", href: "/" },
    { label: "Case Study", href: "/case-studies" },
    { label: "About", href: "/about" },
    { label: "Blog", href: "/blog" }
];

export const navbarDropdowns = [
    {
        id: "web-dev",
        label: "Web Development",
        sections: [
            {
                title: "Core Stack",
                icon: Code,
                links: [
                    { title: "Frontend Engineering", href: "/services/frontend", desc: "Next.js, React, Tailwind, GSAP" },
                    { title: "Backend Infrastructure", href: "/services/backend", desc: "Django, FastAPI, Node.js" },
                    { title: "Database Architecture", href: "/services/databases", desc: "PostgreSQL, Redis, MongoDB" }
                ]
            },
            {
                title: "Advanced Systems",
                icon: Network,
                links: [
                    { title: "Task Scheduling", href: "/services/task-scheduling", desc: "Celery, Distributed Queues" },
                    { title: "Async & WebRTC", href: "/services/realtime", desc: "WebSockets, Real-time Streaming" },
                    { title: "DevOps & Cloud", href: "/services/devops", desc: "AWS, Docker, Kubernetes" }
                ]
            }
        ]
    },
    {
        id: "ai",
        label: "Artificial Intelligence",
        sections: [
            {
                title: "Generative AI",
                icon: Bot,
                links: [
                    { title: "AI Chatbots", href: "/services/chatbots", desc: "Custom RAG, Context Systems" },
                    { title: "LLM Ecosystem", href: "/services/llm", desc: "LangChain, LangGraph, LlamaIndex" },
                    { title: "RAG Systems", href: "/services/rag", desc: "Vector Databases, Hybrid Search" }
                ]
            },
            {
                title: "Automation",
                icon: Zap,
                links: [
                    { title: "Workflow Automation", href: "/services/n8n", desc: "n8n, Zapier, Make.com" },
                    { title: "AI Agents", href: "/services/agents", desc: "Botpress, AutoGPT Integration" },
                    { title: "AI Consulting", href: "/services/consulting", desc: "Strategy & Implementation" }
                ]
            }
        ]
    },
    {
        id: "marketing",
        label: "Digital Marketing & Growth",
        sections: [
            {
                title: "Search Authority",
                icon: Target,
                links: [
                    { title: "Advanced SEO", href: "/services/seo", desc: "Technical, On-Page, Off-Page" },
                    { title: "Future-Ready AEO", href: "/services/aeo", desc: "Answer Engine Optimization (AI)" },
                    { title: "Local Dominance", href: "/services/local-seo", desc: "GMB & Local Pack Ranking" }
                ]
            },
            {
                title: "Growth Engineering",
                icon: Share2,
                links: [
                    { title: "Paid Media (PPC)", href: "/services/ppc", desc: "Google Ads, Meta High-ROI" },
                    { title: "Social & Content", href: "/services/social", desc: "LinkedIn, Instagram, Facebook" },
                    { title: "Outreach", href: "/services/outreach", desc: "Cold Email & Lead Gen" }
                ]
            }
        ]
    }
];

export const footerLinks = {
    services: [
        { label: 'Custom Software Development', href: '/services/web' },
        { label: 'Cloud Infrastructure', href: '/services/devops' },
        { label: 'QA & Support', href: '/services/web' },
        { label: 'Next-Gen Technologies', href: '/services/ai' },
        { label: 'Digital Marketing', href: '/services/marketing' },
        { label: 'Staff Augmentation', href: '/contact' }
    ],
    company: [
        { label: 'About Us', href: '/about' },
        { label: 'Case Studies', href: '/case-studies' },
        { label: 'Careers', href: '/careers' },
        { label: 'Contact Us', href: '/contact' },
        { label: 'Terms and Conditions', href: '/terms' },
        { label: 'Privacy Policy', href: '/privacy' }
    ]
};
