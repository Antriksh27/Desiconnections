import { z } from "zod";

export const LeadSourceSchema = z.enum([
  "join",
  "deals",
  "switch-n-save",
  "contact",
  "newsletter",
]);

export const LeadPayloadSchema = z.object({
  source: LeadSourceSchema,
  email: z.string().trim().email("Please provide a valid email address"),
  name: z.string().trim().optional(),
  phone: z.string().trim().optional(),
  city: z.string().trim().optional(),
  profession: z.string().trim().optional(),
  plan: z.string().trim().optional(),
  eventSlug: z.string().trim().optional(),
  currentProvider: z.string().trim().optional(),
  suburbOrPostcode: z.string().trim().optional(),
  message: z.string().trim().optional(),
  referral: z.string().trim().optional(),
  interests: z.array(z.string()).optional(),
  // Honeypot field: must be empty if submitted by a human
  honeypot: z.string().max(0, "Invalid form submission").optional().or(z.literal("")),
});

export type LeadPayload = z.infer<typeof LeadPayloadSchema>;

export interface LeadSubmissionResult {
  success: boolean;
  message: string;
  errors?: Record<string, string[]>;
}
