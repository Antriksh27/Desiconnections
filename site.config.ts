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
  phoneNumbers: string[];
  contactPerson: string;
  operatedBy: string;
  leadsWebhookUrl: string;
}

export const siteConfig: SiteConfig = {
  brandName: "The Desi Connections",
  tagline: "Meet. Connect. Celebrate.",
  description:
    "Connecting communities, empowering growth. A private club for premier South Asian entertainment, North American business referrals, and expert energy advisory operated by Switch n Save LLC.",
  navLinks: [
    { label: "Home", href: "/" },
    { label: "Events", href: "/events" },
    { label: "Bollywood Stars", href: "/stars" },
    { label: "Deals", href: "/deals" },
    { label: "Membership", href: "/membership" },
    { label: "About", href: "/about" },
    { label: "Join Now", href: "/join", isCta: true },
  ],
  socialLinks: [
    { platform: "Instagram", url: "https://instagram.com/thedesiconnections" },
    { platform: "Facebook", url: "https://facebook.com/thedesiconnections" },
    { platform: "LinkedIn", url: "https://linkedin.com/company/thedesiconnections" },
    { platform: "TikTok", url: "https://tiktok.com/@thedesiconnections" },
  ],
  contactEmail: "info@thedesiconnections.com",
  whatsAppNumber: "+1 (614) 772-2247",
  phoneNumbers: ["614-772-2247", "614-745-7133"],
  contactPerson: "Mr. Ketan Patel",
  operatedBy: "Switch n Save LLC",
  leadsWebhookUrl: process.env.LEADS_WEBHOOK_URL || "",
};
