import { ScrollText } from 'lucide-react';

export const metadata = {
    title: "Terms and Conditions | WebAnts Digital",
    description: "Our terms of service outline the rules and regulations for the use of WebAnts Digital's Website.",
};

export default function TermsPage() {
    return (
        <main className="min-h-screen bg-starlight-white text-deep-void pt-32 pb-24 px-4 md:px-8 relative overflow-hidden">
            {/* Background Ambience */}
            <div className="fixed inset-0 pointer-events-none z-0 opacity-30">
                <div className="absolute top-[-10%] right-[-10%] w-[800px] h-[800px] bg-linear-to-b from-electric-cyan/5 to-transparent rounded-full blur-[150px]" />
            </div>

            <div className="max-w-4xl mx-auto relative z-10">
                <div className="mb-16">
                    <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-electric-cyan/5 border border-electric-cyan/10 text-electric-cyan mb-6">
                        <ScrollText className="w-4 h-4" />
                        <span className="text-xs font-monument uppercase tracking-wider">Legal</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-monument uppercase mb-6">Terms & <span className="text-transparent bg-clip-text bg-linear-to-r from-electric-cyan to-ants-blue">Conditions</span></h1>
                    <p className="text-gray-500">Last Updated: January 2026</p>
                </div>

                <div className="prose prose-lg prose-gray max-w-none">
                    <section className="mb-12">
                        <h2 className="text-2xl font-monument uppercase mb-4">1. Introduction</h2>
                        <p className="text-gray-600 leading-relaxed mb-4">
                            Welcome to WebAnts Digital. By accessing our website and using our services, you agree to be bound by these Terms and Conditions. Please read them carefully. If you do not agree with any part of these terms, you may not use our services.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-monument uppercase mb-4">2. Intellectual Property</h2>
                        <p className="text-gray-600 leading-relaxed mb-4">
                            The content, design, graphics, and code on this website are the intellectual property of WebAnts Digital, unless otherwise stated. You are granted a limited license only for purposes of viewing the material contained on this website.
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                            <li>You may not republish material from this website.</li>
                            <li>You may not sell, rent, or sub-license material from the website.</li>
                            <li>You may not reproduce, duplicate, or copy material from this website.</li>
                        </ul>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-monument uppercase mb-4">3. Services & Engagement</h2>
                        <p className="text-gray-600 leading-relaxed mb-4">
                            Our services are provided on a contractual basis. Specific deliverables, timelines, and payment terms will be outlined in a separate Statement of Work (SOW) or Service Agreement signed by both parties.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-monument uppercase mb-4">4. Limitation of Liability</h2>
                        <p className="text-gray-600 leading-relaxed mb-4">
                            In no event shall WebAnts Digital, nor any of its officers, directors, and employees, be held liable for anything arising out of or in any way connected with your use of this website.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-monument uppercase mb-4">5. Governing Law</h2>
                        <p className="text-gray-600 leading-relaxed mb-4">
                            These Terms will be governed by and interpreted in accordance with the laws of the State of Jurisdiction, and you submit to the non-exclusive jurisdiction of the state and federal courts located in us for the resolution of any disputes.
                        </p>
                    </section>
                </div>
            </div>
        </main>
    );
}

