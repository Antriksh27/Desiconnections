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
  name: "DesiConnections",
  url: "https://desiconnections.club",
  logo: "https://desiconnections.club/icon.png",
  description:
    "The premier private club for South Asian entertainment, curated networking, and everyday member benefits across the United States.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "New York",
    addressRegion: "NY",
    addressCountry: "US",
  },
  sameAs: [
    "https://instagram.com/desiconnections",
    "https://facebook.com/desiconnections",
    "https://linkedin.com/company/desiconnections",
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
    default: "DesiConnections | Meet. Connect. Celebrate.",
    template: "%s | DesiConnections",
  },
  description: siteConfig.description,
  keywords: [
    "Desi entertainment USA",
    "Bollywood events New York",
    "Bollywood concerts San Francisco",
    "Los Angeles South Asian networking",
    "Chicago desi gala",
    "Dallas Bollywood events",
    "DesiConnections club",
  ],
  authors: [{ name: siteConfig.brandName }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://desiconnections.club",
    title: "DesiConnections | Meet. Connect. Celebrate.",
    description: siteConfig.description,
    siteName: siteConfig.brandName,
  },
  twitter: {
    card: "summary_large_image",
    title: "DesiConnections | Meet. Connect. Celebrate.",
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
