import { Resend } from "resend";
import { LeadPayload } from "@/lib/validations/lead";

const resendApiKey = process.env.RESEND_API_KEY;
const resend = resendApiKey ? new Resend(resendApiKey) : null;
const teamEmail = process.env.TEAM_NOTIFICATION_EMAIL || "concierge@desiconnections.club";

export async function sendLeadEmails(lead: LeadPayload): Promise<{
  teamSent: boolean;
  userSent: boolean;
}> {
  if (!resend) {
    // In local dev without key, log simulated dispatch
    return { teamSent: true, userSent: true };
  }

  try {
    // 1. Team Notification Email
    const teamPromise = resend.emails.send({
      from: "DesiConnections Concierge <notifications@desiconnections.club>",
      to: teamEmail,
      subject: `New ${lead.source.toUpperCase()} Submission: ${lead.name || lead.email}`,
      html: `
        <div style="background-color: #0B0710; color: #F7F1E8; font-family: sans-serif; padding: 24px; border-radius: 12px; border: 1px solid rgba(247,241,232,0.12);">
          <h2 style="color: #D9A441; margin-top: 0;">New Lead Received</h2>
          <p><strong>Source:</strong> ${lead.source}</p>
          <p><strong>Email:</strong> ${lead.email}</p>
          ${lead.name ? `<p><strong>Name:</strong> ${lead.name}</p>` : ""}
          ${lead.phone ? `<p><strong>Phone:</strong> ${lead.phone}</p>` : ""}
          ${lead.city ? `<p><strong>City:</strong> ${lead.city}</p>` : ""}
          ${lead.profession ? `<p><strong>Profession:</strong> ${lead.profession}</p>` : ""}
          ${lead.plan ? `<p><strong>Selected Plan:</strong> ${lead.plan}</p>` : ""}
          ${lead.eventSlug ? `<p><strong>Event:</strong> ${lead.eventSlug}</p>` : ""}
          ${lead.currentProvider ? `<p><strong>Current Provider:</strong> ${lead.currentProvider}</p>` : ""}
          ${lead.suburbOrPostcode ? `<p><strong>Postcode:</strong> ${lead.suburbOrPostcode}</p>` : ""}
          ${lead.interests && lead.interests.length ? `<p><strong>Interests:</strong> ${lead.interests.join(", ")}</p>` : ""}
          ${lead.referral ? `<p><strong>Referral Source:</strong> ${lead.referral}</p>` : ""}
          ${lead.message ? `<p><strong>Message:</strong> ${lead.message}</p>` : ""}
        </div>
      `,
    });

    // 2. Warm User Auto-Reply Email
    const userPromise = resend.emails.send({
      from: "DesiConnections <welcome@desiconnections.club>",
      to: lead.email,
      subject: "You are on the list | DesiConnections",
      html: `
        <div style="background-color: #0B0710; color: #F7F1E8; font-family: Georgia, serif; padding: 40px 24px; max-width: 600px; margin: 0 auto; border-radius: 16px; border: 1px solid rgba(247,241,232,0.15);">
          <div style="text-align: center; margin-bottom: 24px;">
            <h1 style="color: #F7F1E8; font-size: 28px; margin: 0;">
              Desi<span style="color: #F1D08A; font-style: italic;">Connections</span>
            </h1>
            <p style="color: #8E849B; font-size: 12px; letter-spacing: 2px; text-transform: uppercase; margin-top: 8px;">
              Meet. Connect. Celebrate.
            </p>
          </div>
          
          <div style="background-color: #140C1F; padding: 24px; border-radius: 12px; border: 1px solid rgba(247,241,232,0.1); margin-bottom: 24px; font-family: sans-serif; font-size: 14px; line-height: 1.6; color: #CFC6D6;">
            <p style="color: #F7F1E8; font-size: 16px; margin-top: 0;">
              Hello ${lead.name || "there"},
            </p>
            <p>
              Thank you for reaching out to DesiConnections. We have safely received your request regarding <strong>${lead.source}</strong>.
            </p>
            <p>
              Our membership committee reviews applications and inquiries weekly to curate intimate, memorable experiences for our community across the United States.
            </p>
            <p>
              A member of our concierge team will be in touch shortly with next steps.
            </p>
          </div>

          <div style="text-align: center; font-size: 12px; color: #8E849B; font-family: sans-serif;">
            <p style="margin: 0;">DesiConnections &bull; New York &bull; San Francisco &bull; Los Angeles &bull; Chicago &bull; Dallas</p>
            <p style="font-size: 10px; margin-top: 8px; opacity: 0.8;">
              Switch n Save offers are provided by partners. Terms apply.
            </p>
          </div>
        </div>
      `,
    });

    await Promise.allSettled([teamPromise, userPromise]);
    return { teamSent: true, userSent: true };
  } catch {
    return { teamSent: false, userSent: false };
  }
}
