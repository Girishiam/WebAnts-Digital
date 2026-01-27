import type { Metadata } from 'next';
import Hero from "@/components/ui/Hero";
import TechStack from "@/components/ui/TechStack";
import ServicesSection from "@/components/ui/ServicesSection";
import TestimonialsSection from "@/components/ui/TestimonialsSection";
import WhyChooseUs from "@/components/ui/WhyChooseUs";
import CaseStudySection from "@/components/ui/CaseStudySection";
import CEOMessage from "@/components/ui/CEOMessage";
import MeetExpertsCTA from "@/components/ui/MeetExpertsCTA";
import FAQSection from "@/components/ui/FAQSection";
import BlogSection from "@/components/ui/BlogSection";
import ContactSection from "@/components/ui/ContactSection";
import NewsletterSection from "@/components/ui/NewsletterSection";

export const metadata: Metadata = {
  title: "WebAnts: Your Digital Growth Partner for Top Rankings & Conversions",
  description: "WebAnts is a premier digital marketing agency offering SEO services, PPC campaigns, and UI/UX design. We are your growth partner for real results.",
  keywords: ["digital marketing agency", "SEO services", "PPC campaigns", "web design agency", "UI UX design company", "WebAnts", "Growth Partner"],
};

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "name": "WebAnts",
        "url": "https://webants.digital",
        "description": "Digital Marketing Agency & Growth Partner",
        "sameAs": [
          "https://www.linkedin.com/company/webants",
          "https://twitter.com/webants"
        ]
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
