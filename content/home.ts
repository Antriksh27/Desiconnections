import { z } from "zod";

export const HomeHeroSchema = z.object({
  eyebrow: z.string(),
  headlinePart1: z.string(),
  headlineItalic: z.string(),
  headlinePart2: z.string(),
  supportCopy: z.string(),
  primaryCtaText: z.string(),
  primaryCtaHref: z.string(),
  secondaryCtaText: z.string(),
  secondaryCtaHref: z.string(),
});

export const HomeStatSchema = z.object({
  value: z.string(),
  label: z.string(),
});

export const HomeMemberQuoteSchema = z.object({
  quote: z.string(),
  name: z.string(),
  title: z.string(),
  city: z.string(),
  avatarUrl: z.string().optional(),
  memberTier: z.string().optional(),
});

export const HomeContentSchema = z.object({
  hero: HomeHeroSchema,
  stats: z.array(HomeStatSchema),
  quotes: z.array(HomeMemberQuoteSchema),
  professions: z.array(z.string()),
});

export type HomeContent = z.infer<typeof HomeContentSchema>;

export const homeContent: HomeContent = {
  hero: {
    eyebrow: "The Community Network for Culture and Connections",
    headlinePart1: "Meet.",
    headlineItalic: "Connect.",
    headlinePart2: "Celebrate.",
    supportCopy:
      "Complimentary concert passes for top live tours, direct business and property referrals across the United States and Canada, and expert energy advisory backed by over 70 years of experience.",
    primaryCtaText: "Join the club",
    primaryCtaHref: "/join",
    secondaryCtaText: "Explore Concerts",
    secondaryCtaHref: "/events",
  },
  stats: [
    { value: "2 Passes", label: "Complimentary Annual Concert Tickets for Members" },
    { value: "10 Years", label: "Ongoing Event Privileges Upon Account Verification" },
    { value: "70+ Years", label: "Combined Energy & Utility Advisory Experience" },
  ],
  quotes: [
    {
      quote:
        "Having free tickets to see Udit Narayan right here in Columbus felt incredible. Sharing our electric bill was simple, and the concert pass was delivered smoothly.",
      name: "Sanjay Patel",
      title: "Retail Business Owner",
      city: "Columbus, OH",
      avatarUrl: "/images/member_rohan.jpg",
      memberTier: "Commercial Member",
    },
    {
      quote:
        "We listed our motel acquisition opportunity through the community marketplace and connected directly with qualified buyers within three weeks. Zero broker commissions.",
      name: "Pooja Shah",
      title: "Hospitality Operator",
      city: "Cleveland, OH",
      avatarUrl: "/images/member_tanya.jpg",
      memberTier: "Commercial Member",
    },
    {
      quote:
        "The Desi Connections makes cultural events accessible for our entire family. The bill review even helped us understand our utility rate structure.",
      name: "Amitabh Joshi",
      title: "Healthcare Consultant",
      city: "Dublin, OH",
      avatarUrl: "/images/member_vikram.jpg",
      memberTier: "Residential Pass",
    },
  ],
  professions: [
    "Business Owners",
    "Hotel Operators",
    "Founders",
    "Retailers",
    "Doctors",
    "Engineers",
    "Investors",
    "Consultants",
  ],
};
