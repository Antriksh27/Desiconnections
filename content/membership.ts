import { z } from "zod";

export const PerkCategorySchema = z.enum([
  "entertainment",
  "connections",
  "benefits",
]);

export const MembershipPerkSchema = z.object({
  category: PerkCategorySchema,
  text: z.string(),
});

export const MembershipTierSchema = z.object({
  id: z.string(),
  slug: z.string(),
  name: z.string(),
  tagline: z.string(),
  isPopular: z.boolean().optional(),
  price: z.string().optional(),
  period: z.string().optional(),
  perks: z.array(MembershipPerkSchema),
});

export type MembershipTier = z.infer<typeof MembershipTierSchema>;

// Seeded 3 membership tiers
// Note: Perks MUST follow the strict hierarchy: 1. Entertainment, 2. Connections, 3. Everyday benefits
// TODO: Confirm tier annual pricing and guest pass allocation with executive committee.
export const membershipTiersContent: MembershipTier[] = [
  {
    // TODO: Review guest pass perks
    id: "guest-pass",
    slug: "guest-pass",
    name: "Guest Pass",
    tagline: "For occasional concertgoers wanting priority ticket drops.",
    isPopular: false,
    price: "Complimentary",
    period: "with application approval",
    perks: [
      // 1. Entertainment First
      { category: "entertainment", text: "24-hour advance access to headline tour tickets" },
      { category: "entertainment", text: "Invitations to open club party nights" },
      // 2. Connections Second
      { category: "connections", text: "Access to city social mixers and community announcements" },
      // 3. Everyday Benefits Last
      { category: "benefits", text: "Standard access to partner dining deals" },
    ],
  },
  {
    // TODO: Confirm club member welcome gift
    id: "club-member",
    slug: "club-member",
    name: "Club Member",
    tagline: "The premier experience for culture lovers and ambitious professionals.",
    isPopular: true,
    price: "$49",
    period: "per month",
    perks: [
      // 1. Entertainment First
      { category: "entertainment", text: "Priority access to front-row seats and backstage artist lounges" },
      { category: "entertainment", text: "Two complimentary tickets to annual DesiConnections Gala" },
      { category: "entertainment", text: "Exclusive member meet-and-greet reservations" },
      // 2. Connections Second
      { category: "connections", text: "Private founder and creator rooftop mixers" },
      { category: "connections", text: "Curated introductions to professionals in your city" },
      // 3. Everyday Benefits Last
      { category: "benefits", text: "Switch n Save energy partnership deals with member rates" },
      { category: "benefits", text: "Discounts at curated partner restaurants and wellness clubs" },
    ],
  },
  {
    // TODO: Legal review on inner circle concierge allocation
    id: "inner-circle",
    slug: "inner-circle",
    name: "Inner Circle",
    tagline: "Private patron tier for leaders, sponsors, and community pillars.",
    isPopular: false,
    price: "$149",
    period: "per month",
    perks: [
      // 1. Entertainment First
      { category: "entertainment", text: "Guaranteed VIP table at all headline concerts across the United States" },
      { category: "entertainment", text: "Direct backstage and soundcheck walkthroughs with touring stars" },
      { category: "entertainment", text: "Private green room access and premium champagne reception" },
      // 2. Connections Second
      { category: "connections", text: "Private quarterly dinners with keynote founders and executives" },
      { category: "connections", text: "Direct personal concierge support via dedicated WhatsApp line" },
      // 3. Everyday Benefits Last
      { category: "benefits", text: "Highest tier Switch n Save business and residential energy concierge" },
      { category: "benefits", text: "Airport lounge passes and private hospitality privileges" },
    ],
  },
];
