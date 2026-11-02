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
});

export type DealOffer = z.infer<typeof DealOfferSchema>;

// Seeded 3 partner offers including Switch n Save
// NOTE: AGENTS.md strictly dictates: No hard-coded savings figures. Always show partner disclosure and terms link.
// TODO: Replace partner agreements with live affiliate contracts once legally vetted.
export const dealsContent: DealOffer[] = [
  {
    // TODO: Verify national retail energy partner license
    partner: "Switch n Save",
    slug: "switch-n-save",
    title: "Member Energy Comparison & Switching",
    summary: "Review your electricity and gas plans with an accredited utility specialist. Members receive dedicated support and access to negotiated group tariff plans.",
    termsLink: "/terms#switch-n-save",
    disclosureText: "Switch n Save offers are provided by licensed US energy brokerage partners. Actual plan rates, eligibility, and utility terms vary by state and deregulated market.",
    isSwitchNSave: true,
    category: "Utilities & Home",
  },
  {
    // TODO: Confirm partner venue participating locations in NY, SF, LA, and Dallas
    partner: "Spice & Saffron Dining Collective",
    slug: "spice-saffron-dining",
    title: "Curated Member Dining Privileges",
    summary: "Enjoy priority table reservations and a complimentary signature cocktail or dessert across our network of award-winning desi dining rooms.",
    termsLink: "/terms#dining-partners",
    disclosureText: "Dining privileges are provided directly by participating restaurant partners upon presentation of an active DesiConnections member card.",
    isSwitchNSave: false,
    category: "Hospitality & Dining",
  },
  {
    // TODO: Finalize corporate travel agency partnership
    partner: "Subcontinent Express Travel",
    slug: "subcontinent-express-travel",
    title: "India & Diaspora Travel Concierge",
    summary: "Access preferred fare structures and extra baggage allowances on selected international carriers connecting the United States and India.",
    termsLink: "/terms#travel-partners",
    disclosureText: "Airline fares and baggage allowances are subject to carrier availability and individual ticket booking conditions.",
    isSwitchNSave: false,
    category: "Travel & Lifestyle",
  },
];
