import { ShieldCheck } from 'lucide-react';

export const metadata = {
    title: "Privacy Policy | WebAnts Digital",
    description: "We are committed to protecting your privacy and ensuring your data is handled securely.",
};

export default function PrivacyPage() {
    return (
        <main className="min-h-screen bg-starlight-white text-deep-void pt-32 pb-24 px-4 md:px-8 relative overflow-hidden">
            {/* Background Ambience */}
            <div className="fixed inset-0 pointer-events-none z-0 opacity-30">
                <div className="absolute bottom-[-10%] left-[-10%] w-[800px] h-[800px] bg-linear-to-tr from-ants-blue/5 to-transparent rounded-full blur-[150px]" />
            </div>

            <div className="max-w-4xl mx-auto relative z-10">
                <div className="mb-16">
                    <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-electric-cyan/5 border border-electric-cyan/10 text-electric-cyan mb-6">
                        <ShieldCheck className="w-4 h-4" />
                        <span className="text-xs font-monument uppercase tracking-wider">Privacy</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-monument uppercase mb-6">Privacy <span className="text-transparent bg-clip-text bg-linear-to-r from-electric-cyan to-ants-blue">Policy</span></h1>
                    <p className="text-gray-500">Last Updated: January 2026</p>
                </div>

                <div className="prose prose-lg prose-gray max-w-none">
                    <section className="mb-12">
                        <h2 className="text-2xl font-monument uppercase mb-4">1. Information We Collect</h2>
                        <p className="text-gray-600 leading-relaxed mb-4">
                            We collect information to provide better services to all our users. This includes:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4 mb-4">
                            <li><strong>Personal Information:</strong> Name, email address, phone number, etc., that you voluntarily provide via forms.</li>
                            <li><strong>Usage Data:</strong> Information on how you interact with our website, such as IP address, browser type, and pages visited.</li>
                        </ul>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-monument uppercase mb-4">2. How We Use Information</h2>
                        <p className="text-gray-600 leading-relaxed mb-4">
                            We use the information we collect to:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                            <li>Provide, maintain, and protect our services.</li>
                            <li>Communicate with you about project updates or inquiries.</li>
                            <li>Improve our website and user experience.</li>
                        </ul>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-monument uppercase mb-4">3. Data Security</h2>
                        <p className="text-gray-600 leading-relaxed mb-4">
                            We implement a variety of security measures to maintain the safety of your personal information. However, no method of transmission over the Internet is 100% secure.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-monument uppercase mb-4">4. Cookies</h2>
                        <p className="text-gray-600 leading-relaxed mb-4">
                            Our website uses "cookies" to enhance user experience. You may choose to set your web browser to refuse cookies, or to alert you when cookies are being sent.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-monument uppercase mb-4">5. Contact Us</h2>
                        <p className="text-gray-600 leading-relaxed mb-4">
                            If you have any questions about this Privacy Policy, please contact us at: <a href="mailto:privacy@webantsdigital.com" className="text-electric-cyan hover:underline">privacy@webantsdigital.com</a>
                        </p>
                    </section>
                </div>
            </div>
        </main>
    );
}
