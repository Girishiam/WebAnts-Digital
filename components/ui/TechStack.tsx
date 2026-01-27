'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const techData = {
    "Frame Works": [
        { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
        { name: 'Angular', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg' },
        { name: 'Vue.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg' },
        { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
        { name: 'jQuery', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original.svg' },
        { name: '.NET', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg' },
        { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
        { name: 'NestJS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-original.svg' },
        { name: 'Spring', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg' },
        { name: 'Laravel', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg' },
        { name: 'Rails', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rails/rails-plain.svg' },
        { name: 'Flutter', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg' },
        { name: 'Xamarin', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/xamarin/xamarin-original.svg' },
        { name: 'React Native', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
        { name: '.NET MAUI', icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/.NET_Core_Logo.svg/1024px-.NET_Core_Logo.svg.png' },
    ],
    "Programming Languages": [
        { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
        { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
        { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
        { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
        { name: 'C#', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg' },
        { name: 'PHP', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg' },
        { name: 'Go', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg' },
        { name: 'Swift', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg' },
    ],
    "Platforms": [
        { name: 'AWS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg' },
        { name: 'Azure', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg' },
        { name: 'Google Cloud', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg' },
        { name: 'Firebase', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg' },
        { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
        { name: 'Kubernetes', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg' },
    ],
    "Database": [
        { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
        { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
        { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
        { name: 'Redis', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg' },
        { name: 'SQLite', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg' },
    ]
};

const categories = Object.keys(techData);

export default function TechStack() {
    const [activeTab, setActiveTab] = useState(categories[0]);

    return (
        <section className="w-full py-20 bg-starlight-white relative overflow-hidden">

            <div className="w-full max-w-[1700px] mx-auto px-2 md:px-6 text-center relative z-10">

                {/* Section Title */}
                <h2 className="text-3xl md:text-5xl font-bold text-deep-void mb-4">
                    We Offer <span className="text-electric-cyan">Full-stack Expertise</span> At
                </h2>
                <h2 className="text-3xl md:text-5xl font-bold text-deep-void mb-8">
                    Every Step Of The Process
                </h2>
                <p className="text-gray-500 max-w-2xl mx-auto mb-12 px-2">
                    We leverage cutting-edge frameworks and scalable architecture to build high-performance digital solutions tailored to your growth.
                </p>

                {/* Tabs */}
                <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12 md:mb-16">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveTab(cat)}
                            className={`
                                relative px-4 py-2 md:px-6 md:py-3 rounded-full text-xs md:text-sm font-semibold transition-all duration-300
                                ${activeTab === cat
                                    ? 'bg-ants-blue text-white shadow-lg shadow-ants-blue/30'
                                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                }
                            `}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Grid */}
                <motion.div
                    layout
                    className="flex flex-wrap justify-center gap-6"
                >
                    <AnimatePresence mode='wait'>
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{ duration: 0.3 }}
                            className="grid grid-cols-3 gap-1.5 md:flex md:flex-wrap md:justify-center md:gap-6 w-full"
                        >
                            {techData[activeTab as keyof typeof techData].map((tech) => (
                                <div
                                    key={tech.name}
                                    className="group w-full aspect-square md:w-40 md:h-28 md:aspect-auto bg-white border border-gray-100 rounded-xl md:rounded-2xl flex flex-col items-center justify-center gap-1 md:gap-3 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 p-1 md:p-2"
                                >
                                    <div className="w-12 h-12 md:w-12 md:h-12 relative flex items-center justify-center shrink-0">
                                        <img src={tech.icon} alt={tech.name} className="w-full h-full object-contain p-1" />
                                    </div>
                                    <span className="text-xs md:text-sm font-medium text-gray-700 group-hover:text-electric-cyan transition-colors text-center w-full leading-tight line-clamp-2 px-1">
                                        {tech.name}
                                    </span>
                                </div>
                            ))}
                        </motion.div>
                    </AnimatePresence>
                </motion.div>

            </div>
        </section>
    );
}
