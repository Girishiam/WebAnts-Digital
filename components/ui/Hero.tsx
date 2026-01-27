import Link from 'next/link';
import HoneycombPattern from './HoneycombPattern';
import { ArrowRight, Phone } from 'lucide-react';

const techLogos = [
    { name: 'React', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'Next.js', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
    { name: 'TypeScript', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
    { name: 'Node.js', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
    { name: 'Python', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
    { name: 'Django', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg' },
    { name: 'FastAPI', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg' },
    { name: 'Docker', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
    { name: 'MongoDB', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
    { name: 'JavaScript', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    { name: 'Redux', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg' },
    { name: 'GraphQL', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg' },
    { name: 'AWS', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg' },
    { name: 'Kubernetes', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg' },
    { name: 'Tailwind', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
    { name: 'Three.js', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/threejs/threejs-original.svg' }
];

function TechLogoBackground() {
    return (
        <div className="absolute left-0 top-0 bottom-0 w-full md:w-[50%] overflow-hidden pointer-events-none z-0">
            {/* Gradient Fade Mask - Fade out towards center */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#02182B]/60 to-[#02182B] z-10" />

            <div className="w-full h-full flex flex-wrap content-center gap-8 p-10 opacity-35 rotate-6 scale-125 origin-left -translate-x-10">
                {techLogos.map((tech, i) => (
                    <div key={tech.name} className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center grayscale contrast-200 brightness-150" style={{ transform: `translateY(${i % 2 === 0 ? '30px' : '-30px'})` }}>
                        <img src={tech.src} alt={tech.name} className="w-full h-full object-contain drop-shadow-[0_0_5px_rgba(255,255,255,0.4)]" />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default function Hero() {
    return (
        <section className="relative w-full max-w-[1700px] mx-auto mt-32 px-4 md:px-6 mb-12">
            <div className="relative rounded-[2.5rem] bg-[#02182B] overflow-hidden min-h-[70vh] flex flex-col items-center justify-center py-20 px-6">

                {/* Tech Logos - Left Side */}
                <TechLogoBackground />

                {/* Background Pattern - Right Side Only & Brand Color */}
                <div className="absolute right-0 top-0 bottom-0 w-3/4 md:w-1/2 opacity-60 mix-blend-screen pointer-events-none">
                    <div className="absolute inset-0 bg-gradient-to-r from-[#02182B] to-transparent z-10" />
                    <HoneycombPattern color="#00f3ff" opacity={0.08} scale={40} className="mask-image-linear-fade" />
                </div>

                {/* Main Middle Content */}
                <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center max-w-5xl mx-auto">

                    {/* Intro Text */}
                    <h2 className="text-electric-cyan text-sm md:text-base font-semibold tracking-wide mb-6 uppercase drop-shadow-[0_0_10px_rgba(0,243,255,0.3)]">
                        Welcome to WebAnts
                    </h2>

                    {/* Main Headline */}
                    <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-[1.1] mb-10 drop-shadow-xl font-sans">
                        Your Digital Growth Partner <br className="hidden md:block" />
                        <span className="text-electric-cyan">For Top Rankings & Conversions</span>
                    </h1>

                    {/* Buttons */}
                    <div className="flex flex-col md:flex-row items-center gap-6">
                        <Link
                            href="/contact"
                            className="group flex items-center gap-3 px-8 py-4 rounded-full border border-white text-white hover:bg-white hover:text-[#02182B] transition-all duration-300 font-semibold uppercase tracking-wider text-sm"
                        >
                            <Phone className="w-5 h-5" />
                            <span>Schedule A Call</span>
                        </Link>

                        <Link
                            href="/services"
                            className="group flex items-center gap-3 px-8 py-4 rounded-full border border-white text-white hover:bg-white hover:text-[#02182B] transition-all duration-300 font-semibold uppercase tracking-wider text-sm"
                        >
                            <span>Explore More</span>
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
