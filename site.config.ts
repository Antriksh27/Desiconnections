export interface NavLink {
  label: string;
  href: string;
  isCta?: boolean;
}

export interface SocialLink {
  platform: string;
  url: string;
}

export interface SiteConfig {
  brandName: string;
  tagline: string;
  description: string;
  navLinks: NavLink[];
  socialLinks: SocialLink[];
  contactEmail: string;
  whatsAppNumber: string;
  leadsWebhookUrl: string;
}

export const siteConfig: SiteConfig = {
  brandName: "DesiConnections",
  tagline: "Meet. Connect. Celebrate.",
  description:
    "A private club for desi entertainment, meaningful connections, and curated member benefits.",
  navLinks: [
    { label: "Events", href: "/events" },
    { label: "Bollywood Stars", href: "/stars" },
    { label: "Membership", href: "/membership" },
    { label: "Deals", href: "/deals" },
    { label: "About", href: "/about" },
    { label: "Join Now", href: "/join", isCta: true },
  ],
  socialLinks: [
    { platform: "Instagram", url: "https://instagram.com/desiconnections" },
    { platform: "Facebook", url: "https://facebook.com/desiconnections" },
    { platform: "LinkedIn", url: "https://linkedin.com/company/desiconnections" },
    { platform: "TikTok", url: "https://tiktok.com/@desiconnections" },
  ],
  contactEmail: "concierge@desiconnections.club",
  whatsAppNumber: "+1 (212) 555-0199",
  leadsWebhookUrl: process.env.LEADS_WEBHOOK_URL || "",
};
