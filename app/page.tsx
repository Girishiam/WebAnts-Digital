import type { Metadata } from 'next';
import Hero from "@/components/ui/Hero";
import dynamic from 'next/dynamic';
import { seoData } from '@/data/company';

const TechStack = dynamic(() => import("@/components/ui/TechStack"));
const ServicesSection = dynamic(() => import("@/components/ui/ServicesSection"));
const TestimonialsSection = dynamic(() => import("@/components/ui/TestimonialsSection"));
const WhyChooseUs = dynamic(() => import("@/components/ui/WhyChooseUs"));
const CaseStudySection = dynamic(() => import("@/components/ui/CaseStudySection"));
const CEOMessage = dynamic(() => import("@/components/ui/CEOMessage"));
const MeetExpertsCTA = dynamic(() => import("@/components/ui/MeetExpertsCTA"));
const FAQSection = dynamic(() => import("@/components/ui/FAQSection"));
const BlogSection = dynamic(() => import("@/components/ui/BlogSection"));
const ContactSection = dynamic(() => import("@/components/ui/ContactSection"));
const NewsletterSection = dynamic(() => import("@/components/ui/NewsletterSection"));

export const metadata: Metadata = {
  title: seoData.title,
  description: seoData.description,
  keywords: seoData.keywords,
};

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "name": "WebAnts",
        "url": seoData.url,
        "description": "Digital Marketing Agency & Growth Partner",
        "sameAs": seoData.socialLinks
      },
      {
        "@type": "Service",
        "name": "SEO Services",
        "serviceType": "Search Engine Optimization",
        "provider": { "@type": "Organization", "name": "WebAnts" }
      },
      {
        "@type": "Service",
        "name": "PPC Campaigns",
        "serviceType": "Pay-Per-Click Advertising",
        "provider": { "@type": "Organization", "name": "WebAnts" }
      },
      {
        "@type": "Service",
        "name": "UI/UX Design",
        "serviceType": "User Interface & Experience Design",
        "provider": { "@type": "Organization", "name": "WebAnts" }
      },
      {
        "@type": "WebPage",
        "name": "WebAnts Digital Growth Partner",
        "description": "Achieve Digital Excellence with WebAnts: SEO, PPC & Design Experts."
      }
    ]
  };

  return (
    <main className="w-full min-h-screen bg-starlight-white relative">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <TechStack />
      <ServicesSection />
      <WhyChooseUs />
      <CaseStudySection />
      <CEOMessage />
      <MeetExpertsCTA />
      <FAQSection />
      <BlogSection />
      <TestimonialsSection />
      <ContactSection />
      <NewsletterSection />
    </main>
  );
}
