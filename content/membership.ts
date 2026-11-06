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
  requirement: z.string(),
  isPopular: z.boolean().optional(),
  price: z.string(),
  period: z.string().optional(),
  badge: z.string().optional(),
  perks: z.array(MembershipPerkSchema),
});

export const MarketplaceCategorySchema = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string(),
  tag: z.string(),
  highlights: z.array(z.string()),
});

export const EmploymentFeatureSchema = z.object({
  title: z.string(),
  description: z.string(),
});

export type MembershipTier = z.infer<typeof MembershipTierSchema>;
export type MarketplaceCategory = z.infer<typeof MarketplaceCategorySchema>;
export type EmploymentFeature = z.infer<typeof EmploymentFeatureSchema>;

// Seeded real community tiers: Residential Pass, Commercial Pass, Patron Circle
// Note: Perks MUST follow the strict hierarchy: 1. Entertainment, 2. Connections, 3. Everyday benefits
export const membershipTiersContent: MembershipTier[] = [
  {
    id: "residential-pass",
    slug: "residential-pass",
    name: "Residential Pass",
    tagline: "For homeowners and families looking for premier concerts and community gatherings.",
    requirement: "Activated with a recent residential electric bill copy",
    isPopular: false,
    price: "Complimentary",
    period: "with bill verification",
    badge: "Community Pass",
    perks: [
      // 1. Entertainment First
      { category: "entertainment", text: "2 complimentary tickets each year for sponsored concerts in Columbus" },
      { category: "entertainment", text: "Priority access to Navratri Dandiya and cultural gala allocations" },
      { category: "entertainment", text: "Valid for up to 10 years of ongoing community event privileges" },
      // 2. Connections Second
      { category: "connections", text: "Invitations to community socials and festival celebrations" },
      // 3. Everyday Benefits Last
      { category: "benefits", text: "Free residential electric bill analysis by Switch n Save advisors" },
    ],
  },
  {
    id: "commercial-member",
    slug: "commercial-member",
    name: "Commercial Member",
    tagline: "For business operators, hospitality leaders, and property owners across the USA and Canada.",
    requirement: "Activated with a commercial electric or natural gas bill copy",
    isPopular: true,
    price: "Zero Fees",
    period: "with commercial account",
    badge: "Most Popular",
    perks: [
      // 1. Entertainment First
      { category: "entertainment", text: "2 complimentary VIP concert passes per year with preferred seating" },
      { category: "entertainment", text: "Invitations to artist meet-and-greets when sponsored in your city" },
      // 2. Connections Second
      { category: "connections", text: "Free unlimited listings on the USA & Canada Business & Property Marketplace" },
      { category: "connections", text: "Free postings on the Community Employment Exchange to hire talent" },
      { category: "connections", text: "Direct introductions to active commercial buyers and verified investors" },
      // 3. Everyday Benefits Last
      { category: "benefits", text: "Comprehensive utility procurement review backed by 70+ years of advisory experience" },
    ],
  },
  {
    id: "patron-circle",
    slug: "patron-circle",
    name: "Patron Circle",
    tagline: "For major event sponsors, philanthropists, and community founders.",
    requirement: "By community referral or headline concert sponsorship",
    isPopular: false,
    price: "By Invitation",
    period: "annual patron partnership",
    badge: "Patron Access",
    perks: [
      // 1. Entertainment First
      { category: "entertainment", text: "Reserved VIP table for your party at all headline concert galas" },
      { category: "entertainment", text: "Backstage green room walkthroughs and personal artist introductions" },
      // 2. Connections Second
      { category: "connections", text: "Private leadership dinners with touring talent and corporate executives" },
      { category: "connections", text: "Prominent brand recognition across tour marketing and stage backdrops" },
      // 3. Everyday Benefits Last
      { category: "benefits", text: "Dedicated executive energy advisory and custom procurement strategy" },
    ],
  },
];

// Major Section: Business & Property Marketplace (USA & Canada)
export const marketplaceCategoriesContent: MarketplaceCategory[] = [
  {
    id: "hospitality-motels",
    title: "Hotels, Motels & Lodging",
    description: "Connect directly with motel operators, franchised hotel owners, and independent lodging buyers across high-traffic corridors.",
    tag: "Hospitality Assets",
    highlights: ["Midscale franchised properties", "Independent roadside motels", "Joint venture acquisitions"],
  },
  {
    id: "retail-convenience-gas",
    title: "Gas Stations & Convenience",
    description: "Explore established retail operations with verified cash flow, branded fuel stations, and convenience stores with lottery licenses.",
    tag: "Retail & Petroleum",
    highlights: ["Operating gas stations", "Turnkey convenience marts", "Commercial strip anchor stores"],
  },
  {
    id: "commercial-land-plazas",
    title: "Commercial Land & Strip Malls",
    description: "Purchase or lease prime real estate, retail shopping centers, and development-ready commercial parcels in high-growth metropolitan areas.",
    tag: "Commercial Real Estate",
    highlights: ["Neighborhood retail plazas", "Zoned commercial development land", "Industrial flex and warehouse space"],
  },
  {
    id: "professional-practices",
    title: "Enterprises & Professional Practices",
    description: "A confidential exchange for pharmacies, logistics operations, dental clinics, and technology service companies.",
    tag: "Operating Businesses",
    highlights: ["Independent pharmacies & clinics", "Trucking & logistics fleets", "IT consultancy practices"],
  },
];

// Major Section: Community Employment Exchange
export const employmentFeaturesContent: EmploymentFeature[] = [
  {
    title: "Zero Recruitment Agency Markups",
    description: "Post open positions directly to our verified community network without paying thousands in recruiter finder fees.",
  },
  {
    title: "Motivated Community Talent",
    description: "Find general managers, hospitality supervisors, retail clerks, accountants, and software professionals from within the diaspora.",
  },
  {
    title: "Direct Owner Contact",
    description: "Job seekers connect directly with business decision-makers. No automated resume black holes or endless screening filters.",
  },
  {
    title: "Midwest & National Reach",
    description: "Post opportunities locally in Columbus, Ohio or recruit nationally across the United States and Canada.",
  },
];
