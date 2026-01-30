import { Facebook, Twitter, Instagram, Linkedin, MapPin, Phone, Mail } from 'lucide-react';

export const companyDetails = {
    name: "WebAnts Digital",
    tagline: "Engineering The Future",
    description: "We build future-ready digital experiences using 3D technologies, AI, and biomechanical design principles.",
    contact: {
        address: "Dhaka, Bangladesh",
        email: "hello@webantsdigital.com",
        phone: "(+92) 326-000-0401", // Verify this regional code
        googleMapLink: "#"
    },
    socials: [
        { name: 'Facebook', icon: Facebook, href: '#' },
        { name: 'Twitter', icon: Twitter, href: '#' },
        { name: 'Instagram', icon: Instagram, href: '#' },
        { name: 'LinkedIn', icon: Linkedin, href: '#' },
    ]
};

export const seoData = {
    title: "WebAnts: Your Digital Growth Partner for Top Rankings & Conversions",
    description: "WebAnts is a premier digital marketing agency offering SEO services, PPC campaigns, and UI/UX design. We are your growth partner for real results.",
    keywords: ["digital marketing agency", "SEO services", "PPC campaigns", "web design agency", "UI UX design company", "WebAnts", "Growth Partner"],
    url: "https://webants.digital",
    socialLinks: [
        "https://www.linkedin.com/company/webants",
        "https://twitter.com/webants"
    ]
};
