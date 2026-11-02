"use server";

import { headers } from "next/headers";
import {
  LeadPayloadSchema,
  LeadPayload,
  LeadSubmissionResult,
} from "@/lib/validations/lead";
import { checkRateLimit } from "@/lib/rateLimit";
import { sendLeadEmails } from "@/lib/email";

export async function submitLead(
  rawPayload: unknown
): Promise<LeadSubmissionResult> {
  try {
    // 1. IP extraction & Rate limiting
    const headerList = await headers();
    const forwardedFor = headerList.get("x-forwarded-for");
    const realIp = headerList.get("x-real-ip");
    const clientIp = forwardedFor
      ? forwardedFor.split(",")[0].trim()
      : realIp || "127.0.0.1";

    const { allowed } = checkRateLimit(clientIp, 6, 300);
    if (!allowed) {
      return {
        success: false,
        message: "Too many requests. Please wait a few moments before trying again.",
      };
    }

    // 2. Validate payload with Zod
    const validationResult = LeadPayloadSchema.safeParse(rawPayload);
    if (!validationResult.success) {
      const fieldErrors = validationResult.error.flatten().fieldErrors;
      return {
        success: false,
        message: "Please check the highlighted form fields.",
        errors: fieldErrors,
      };
    }

    const payload: LeadPayload = validationResult.data;

    // 3. Honeypot check: If bot filled the hidden honeypot field, drop silently with success message
    if (payload.honeypot && payload.honeypot.trim().length > 0) {
      return {
        success: true,
        message: "Thank you. Your inquiry has been safely received.",
      };
    }

    // 4. Send transactional emails via Resend
    await sendLeadEmails(payload);

    // 5. Post to external webhook if configured (Google Sheet or CRM)
    const webhookUrl = process.env.LEADS_WEBHOOK_URL;
    if (webhookUrl) {
      try {
        await fetch(webhookUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ...payload,
            submittedAt: new Date().toISOString(),
          }),
        });
      } catch {
        // Webhook failure is non-blocking to user experience
      }
    }

    return {
      success: true,
      message: "You are on the list. We will be in touch soon.",
    };
  } catch {
    return {
      success: false,
      message: "An unexpected error occurred. Please try again later.",
    };
  }
}
