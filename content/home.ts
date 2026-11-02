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

// TODO: Review Home quotes and statistics with US marketing team
export const homeContent: HomeContent = {
  hero: {
    eyebrow: "The Premier US Club for Desi Entertainment & Connections",
    headlinePart1: "Meet.",
    headlineItalic: "Connect.",
    headlinePart2: "Celebrate.",
    supportCopy: "Where South Asian entertainment meets genuine opportunity, friendships become connections, and membership brings everyday benefits across the United States.",
    primaryCtaText: "Join the club",
    primaryCtaHref: "/join",
    secondaryCtaText: "Explore US Events",
    secondaryCtaHref: "/events",
  },
  stats: [
    { value: "5,400+", label: "Verified Members across the United States" },
    { value: "32", label: "Headline Arena Tours & Exclusive Galas" },
    { value: "6", label: "Major Hubs: New York, Bay Area, Los Angeles, Chicago, Dallas" },
  ],
  quotes: [
    {
      // TODO: Replace with authenticated member testimonials
      quote: "Attending the Arijit Singh after-party through DesiConnections felt like being invited to a private friend's penthouse in Manhattan. The room was electric.",
      name: "Rohan Kapoor",
      title: "Fintech Founder",
      city: "New York",
      avatarUrl: "/images/member_rohan.jpg",
      memberTier: "Club Member",
    },
    {
      // TODO: Replace with authenticated member testimonials
      quote: "Finally, a cultural club that feels refined without losing the warmth and energy of our roots. Met my startup co-founder at our San Francisco mixer.",
      name: "Dr. Tanya Sen",
      title: "Biotech Founder & Investor",
      city: "San Francisco",
      avatarUrl: "/images/member_tanya.jpg",
      memberTier: "Inner Circle",
    },
    {
      // TODO: Replace with authenticated member testimonials
      quote: "The concert allocations alone make membership worthwhile. The Switch n Save bill check was an effortless bonus.",
      name: "Vikram Nambiar",
      title: "Creative Director",
      city: "Dallas",
      avatarUrl: "/images/member_vikram.jpg",
      memberTier: "Club Member",
    },
  ],
  professions: [
    "Founders",
    "Creators",
    "Doctors",
    "Lawyers",
    "Artists",
    "Engineers",
    "Investors",
    "Consultants",
  ],
};
