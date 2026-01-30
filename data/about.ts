import { Zap, Globe, Users, Trophy, CheckCircle2 } from 'lucide-react';

export const aboutPageData = {
    hero: {
        title: "Engineering The Future",
        subtitle: "We are a digital product agency that combines data-driven strategy with world-class engineering to build brands that matter.",
        establishedYear: "2020"
    },
    stats: [
        { label: 'Years Experience', value: '6+' },
        { label: 'Projects Delivered', value: '120+' },
        { label: 'Industries Catered', value: '18+' },
        { label: 'Client Satisfaction', value: '98%' },
    ],
    timeline: [
        {
            year: '2020',
            title: 'The Inception',
            description: 'WebAnts born with a singular vision: to bridge the gap between aesthetic design and robust engineering. We started as a small team of three, working out of a shared garage, fueled by caffeine and big dreams.',
            icon: Zap
        },
        {
            year: '2021',
            title: 'Global Expansion',
            description: 'Our commitment to quality quickly crossed borders. We secured our first international enterprise clients and expanded our team to 15 specialists, establishing a 24/7 workflow to serve global time zones.',
            icon: Globe
        },
        {
            year: '2022',
            title: 'AI Integration',
            description: 'Recognizing the shift in the digital landscape, we pivoted early to integrate Artificial Intelligence into our workflow. We launched our first AI-powered chatbot solutions and automated internal processes.',
            icon: Users
        },
        {
            year: '2023',
            title: 'Enterprise Excellence',
            description: 'Scaled our operations to handle high-concurrency applications. Partnered with major tech firms to deliver mission-critical infrastructure. Our code now powers platforms used by millions daily.',
            icon: Trophy
        },
        {
            year: '2024',
            title: 'Top Rated Plus',
            description: 'Achieved "Top Rated Plus" status on major platforms, placing us in the top 3% of global talent. We continue to push boundaries with Next.js 14, RAG Systems, and immersive 3D web experiences.',
            icon: CheckCircle2
        }
    ],
    cta: {
        title: "Ready to write History?",
        subtitle: "Join the hundreds of brands that have trusted WebAnts to architect their digital future.",
        buttonText: "Start a Project",
        link: "/contact"
    }
};
