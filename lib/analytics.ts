export type AnalyticsEvent =
  | "cta_join_the_club"
  | "cta_get_tickets"
  | "cta_enquire"
  | "cta_switch_n_save_interest"
  | "form_submit_lead";

export function trackEvent(
  event: AnalyticsEvent,
  properties?: Record<string, string | number | boolean>
) {
  if (typeof window === "undefined") return;

  const consent = localStorage.getItem("dc_analytics_consent");
  if (consent !== "granted") {
    // Privacy-first: strictly no tracking without explicit member consent
    return;
  }

  // Send to privacy-friendly analytics (Plausible / PostHog custom events)
  const plausible = (window as unknown as { plausible?: (event: string, options?: { props: unknown }) => void }).plausible;
  if (typeof plausible === "function") {
    plausible(event, { props: properties });
  } else {
    // Development or fallback log
    if (process.env.NODE_ENV !== "production") {
      console.log(`[Analytics Event: ${event}]`, properties);
    }
  }
}
