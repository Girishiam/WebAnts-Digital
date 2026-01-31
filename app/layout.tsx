import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import SmoothScroller from "@/components/SmoothScroller";
import ScrollToTop from "@/components/ui/ScrollToTop";
import GlobalLoader from "@/components/ui/GlobalLoader";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"], // Full range for that "Gotham" feel
});

export const metadata: Metadata = {
  title: "WebAnts Digital | Future-Ready Web Agency",
  description: "WebAnts Digital is a premium web agency specializing in 3D experiences, Next.js development, and biomechanical design. We build the future of the web.",
  keywords: ["Web Agency", "3D Website", "Next.js", "React Three Fiber", "Web Design", "Creative Developer"],
  openGraph: {
    title: "WebAnts Digital | Future-Ready Web Agency",
    description: "Experience the digital hive. Premium 3D web development and design.",
    type: "website",
    locale: "en_US",
    siteName: "WebAnts Digital"
  },
  metadataBase: new URL("https://webantsdigital.com"),

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} font-sans antialiased bg-starlight-white text-deep-void`}
      >
        <GlobalLoader />
        <SmoothScroller />
        <Navbar />
        {children}
        <ScrollToTop />
        <Footer />
      </body>
    </html>
  );
}
