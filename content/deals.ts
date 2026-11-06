import { z } from "zod";

export const DealOfferSchema = z.object({
  partner: z.string(),
  slug: z.string(),
  title: z.string(),
  summary: z.string(),
  termsLink: z.string(),
  disclosureText: z.string(),
  isSwitchNSave: z.boolean().optional(),
  category: z.string(),
  experienceBadge: z.string().optional(),
});

export type DealOffer = z.infer<typeof DealOfferSchema>;

// Verified partner offers including Switch n Save LLC.
// NOTE: AGENTS.md strictly dictates: No hard-coded savings figures. Always show partner disclosure and terms link.
export const dealsContent: DealOffer[] = [
  {
    partner: "Switch n Save LLC",
    slug: "switch-n-save",
    title: "Electricity & Natural Gas Advisory",
    summary:
      "Access over 70 years of combined energy advisory experience. We help residential and commercial members evaluate utility rate structures, demand charges, and competitive supplier tariffs.",
    termsLink: "/terms#switch-n-save",
    disclosureText:
      "Switch n Save offers are provided by licensed energy partners and certified utility advisors operated by Switch n Save LLC. Tariff availability and contract terms vary by utility territory and state regulations. We do not guarantee specific savings amounts.",
    isSwitchNSave: true,
    category: "Energy & Utilities",
    experienceBadge: "70+ Years Combined Experience",
  },
  {
    partner: "North America Hospitality Exchange",
    slug: "hospitality-exchange",
    title: "Commercial Property Referral Network",
    summary:
      "A community-driven marketplace for buying and selling motels, convenience stores, and commercial real estate across the USA and Canada with zero platform listing fees.",
    termsLink: "/terms#marketplace",
    disclosureText:
      "Marketplace listings are shared peer-to-peer among verified community members. Buyers and sellers are responsible for independent legal and financial due diligence.",
    isSwitchNSave: false,
    category: "Business Marketplace",
  },
  {
    partner: "Desi Community Talent Board",
    slug: "community-talent-board",
    title: "Employment Opportunities Exchange",
    summary:
      "Post hiring requirements or discover career openings within trusted diaspora-led businesses without paying third-party recruiting commissions.",
    termsLink: "/terms#employment",
    disclosureText:
      "Employment postings are submitted directly by verified members. Employment terms and wage agreements remain strictly between the employer and candidate.",
    isSwitchNSave: false,
    category: "Career & Staffing",
  },
];
