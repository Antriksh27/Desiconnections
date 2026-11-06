import type { Metadata, Viewport } from "next";
import { Outfit, Manrope } from "next/font/google";
import { siteConfig } from "@/site.config";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SmoothScroll } from "@/components/layout/SmoothScroll";
import { GrainOverlay } from "@/components/layout/GrainOverlay";
import { CursorFollower } from "@/components/brand/CursorFollower";
import { PageTransition } from "@/components/layout/PageTransition";
import { ConsentBanner } from "@/components/analytics/ConsentBanner";
import "./globals.css";

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "The Desi Connections",
  url: "https://desiconnections.club",
  logo: "https://desiconnections.club/images/logo.png",
  description:
    "Connecting communities, empowering growth. A private club for premier South Asian entertainment, North American business referrals, and expert energy advisory operated by Switch n Save LLC.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Columbus",
    addressRegion: "OH",
    addressCountry: "US",
  },
  telephone: "+1-614-772-2247",
  sameAs: [
    "https://instagram.com/thedesiconnections",
    "https://facebook.com/thedesiconnections",
    "https://linkedin.com/company/thedesiconnections",
  ],
};

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const viewport: Viewport = {
  themeColor: "#0B081E",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://desiconnections.club"),
  title: {
    default: "The Desi Connections | Meet. Connect. Celebrate.",
    template: "%s | The Desi Connections",
  },
  description: siteConfig.description,
  keywords: [
    "The Desi Connections",
    "Bollywood concerts Columbus Ohio",
    "Shreya Ghoshal Columbus concert",
    "Kumar Sanu live Columbus",
    "Udit Narayan concert Columbus",
    "Anupam Kher theatre Columbus",
    "Vivek Ramaswamy diaspora business forum",
    "South Asian business marketplace USA Canada",
    "Buy sell Indian business USA Canada",
    "Switch n Save LLC energy advisory",
    "Desi networking Columbus Ohio",
  ],
  authors: [{ name: siteConfig.brandName }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://desiconnections.club",
    title: "The Desi Connections | Meet. Connect. Celebrate.",
    description: siteConfig.description,
    siteName: siteConfig.brandName,
  },
  twitter: {
    card: "summary_large_image",
    title: "The Desi Connections | Meet. Connect. Celebrate.",
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} ${manrope.variable} dark`}>
      <body className="bg-ink text-ivory antialiased min-h-screen selection:bg-[#EC008C]/30 selection:text-white flex flex-col relative font-body">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <SmoothScroll>
          <GrainOverlay />
          <CursorFollower />
          <Navbar />
          <div className="flex-1 flex flex-col pt-20">
            <PageTransition>{children}</PageTransition>
          </div>
          <Footer />
          <ConsentBanner />
        </SmoothScroll>
      </body>
    </html>
  );
}
