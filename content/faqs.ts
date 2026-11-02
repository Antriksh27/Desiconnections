import { z } from "zod";

export const FaqCategorySchema = z.enum([
  "general",
  "membership",
  "events",
  "benefits",
]);

export const FaqItemSchema = z.object({
  id: z.string(),
  category: FaqCategorySchema,
  question: z.string(),
  answer: z.string(),
});

export type FaqCategory = z.infer<typeof FaqCategorySchema>;
export type FaqItem = z.infer<typeof FaqItemSchema>;

// TODO: Review FAQ answers with legal and membership committee
export const faqsContent: FaqItem[] = [
  {
    id: "what-is-desiconnections",
    category: "general",
    question: "What is DesiConnections?",
    answer: "DesiConnections is a private club celebrating desi entertainment, cultural concerts, and meaningful community networking across the United States.",
  },
  {
    id: "how-to-join",
    category: "membership",
    question: "How do I become a member?",
    answer: "Submit a short invite request through our Join form. Our team reviews applications weekly to ensure a balanced, vibrant community.",
  },
  {
    id: "ticket-booking",
    category: "events",
    question: "How do tickets work on this site?",
    answer: "DesiConnections secures priority allocations for our members. Tickets link out to verified ticketing partners or are arranged directly via member concierge.",
  },
  {
    id: "switch-n-save-details",
    category: "benefits",
    question: "How does the Switch n Save energy perk work?",
    answer: "Switch n Save is a member perk provided through accredited utility partners. Submit your details through our Deals page, and a partner specialist will review your current bill to find suitable rates.",
  },
];
