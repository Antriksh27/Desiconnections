import { z } from "zod";

export const FaqCategorySchema = z.enum([
  "general",
  "membership",
  "events",
  "benefits",
  "marketplace",
]);

export const FaqItemSchema = z.object({
  id: z.string(),
  category: FaqCategorySchema,
  question: z.string(),
  answer: z.string(),
});

export type FaqCategory = z.infer<typeof FaqCategorySchema>;
export type FaqItem = z.infer<typeof FaqItemSchema>;

export const faqsContent: FaqItem[] = [
  {
    id: "what-is-the-desi-connections",
    category: "general",
    question: "What is The Desi Connections?",
    answer:
      "The Desi Connections is a private community club operated by Switch n Save LLC. We connect the South Asian diaspora through sponsored concert passes, a peer-to-peer business and property marketplace across the USA and Canada, and dedicated energy advisory.",
  },
  {
    id: "how-do-free-passes-work",
    category: "events",
    question: "How do the complimentary concert passes work?",
    answer:
      "When we sponsor entertainment or cultural tours in Columbus or partner cities, active members receive two complimentary entry tickets each year for one or two events of our choosing for up to 10 years or more. Past featured stars include Shreya Ghoshal, Kumar Sanu, Udit Narayan, and Anupam Kher.",
  },
  {
    id: "why-share-utility-bill",
    category: "membership",
    question: "Why do I need to share a utility bill to become a member?",
    answer:
      "Rather than charging monthly club dues or upfront registration fees, membership is activated through our energy advisory arm. Sharing a recent residential electric bill or commercial electric/gas bill allows our advisory team to review your rate structure. In return, you receive full member privileges at zero membership cost.",
  },
  {
    id: "bill-privacy-security",
    category: "membership",
    question: "Is my utility statement kept secure and confidential?",
    answer:
      "Yes. Your bill is used strictly by licensed utility analysts at Switch n Save LLC to verify your service territory and examine rate structures. We never sell your personal contact information or account numbers to third-party telemarketers.",
  },
  {
    id: "how-does-marketplace-work",
    category: "marketplace",
    question: "How does the Business & Property Marketplace work?",
    answer:
      "Commercial members can list businesses or properties for sale across the United States and Canada with zero platform or broker listing fees. Listings are shared directly with verified community buyers on a referral basis.",
  },
  {
    id: "how-to-contact-concierge",
    category: "general",
    question: "How do I reach the team directly?",
    answer:
      "You can call, text, or WhatsApp your recent bill copy directly to Mr. Ketan Patel at 614-772-2247 or 614-745-7133, or submit your details through our on-site Join form.",
  },
  {
    id: "switch-n-save-advisory-experience",
    category: "benefits",
    question: "What is Switch n Save LLC's background in energy advisory?",
    answer:
      "Switch n Save LLC brings together over 70 years of combined experience in deregulated electricity and natural gas markets. We assist commercial enterprises (motels, convenience stores, gas stations, restaurants) and residential homeowners in making informed utility decisions.",
  },
];
