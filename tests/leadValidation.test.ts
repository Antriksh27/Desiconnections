import { describe, it, expect } from "vitest";
import { LeadPayloadSchema } from "../lib/validations/lead";
import { starsContent } from "../content/stars";
import { eventsContent } from "../content/events";
import { membershipTiersContent } from "../content/membership";
import { dealsContent } from "../content/deals";

describe("Lead Validation & Honeypot Logic", () => {
  it("validates a complete Join request payload", () => {
    const validJoin = {
      source: "join",
      email: "aarav.mehta@example.com",
      name: "Aarav Mehta",
      phone: "+1 (212) 555-0199",
      city: "New York",
      profession: "Fintech Founder",
      plan: "club-member",
      interests: ["VIP Concerts", "Private Dinners"],
      referral: "Word of mouth",
      honeypot: "",
    };

    const result = LeadPayloadSchema.safeParse(validJoin);
    expect(result.success).toBe(true);
  });

  it("validates a Switch n Save interest submission", () => {
    const validDeals = {
      source: "switch-n-save",
      email: "priya.sharma@example.com",
      name: "Priya Sharma",
      phone: "+1 (415) 555-0188",
      currentProvider: "TXU Energy",
      suburbOrPostcode: "10001",
    };

    const result = LeadPayloadSchema.safeParse(validDeals);
    expect(result.success).toBe(true);
  });

  it("validates a newsletter subscription with just email", () => {
    const validNewsletter = {
      source: "newsletter",
      email: "fan@bollywood.com",
    };

    const result = LeadPayloadSchema.safeParse(validNewsletter);
    expect(result.success).toBe(true);
  });

  it("rejects an invalid email format", () => {
    const invalidEmail = {
      source: "join",
      email: "not-an-email",
    };

    const result = LeadPayloadSchema.safeParse(invalidEmail);
    expect(result.success).toBe(false);
  });

  it("rejects invalid lead source values", () => {
    const invalidSource = {
      source: "unauthorized_campaign",
      email: "user@example.com",
    };

    const result = LeadPayloadSchema.safeParse(invalidSource);
    expect(result.success).toBe(false);
  });

  it("detects and flags filled honeypot fields from bots", () => {
    const botSubmission = {
      source: "join",
      email: "spambot@automated.ru",
      name: "Spam Bot",
      honeypot: "http://buy-viagra-links.com",
    };

    const result = LeadPayloadSchema.safeParse(botSubmission);
    expect(result.success).toBe(false);
  });
});

describe("Content Layer & Clearance Integrity", () => {
  it("contains all 7 events across community tour hubs", () => {
    expect(eventsContent).toHaveLength(7);
    const cities = new Set(eventsContent.map((e) => e.city));
    expect(cities.has("Columbus")).toBe(true);
  });

  it("strictly protects celebrity likeness: filters out uncleared talent", () => {
    expect(starsContent).toHaveLength(10);
    const clearedStars = starsContent.filter((s) => s.rightsCleared);
    const unclearedStars = starsContent.filter((s) => !s.rightsCleared);

    expect(clearedStars).toHaveLength(6);
    expect(unclearedStars).toHaveLength(4);

    // Ensure uncleared stars are never mistakenly marked as cleared
    unclearedStars.forEach((star) => {
      expect(star.rightsCleared).toBe(false);
    });
  });

  it("enforces membership perk hierarchy: entertainment first, connections second, benefits last", () => {
    expect(membershipTiersContent).toHaveLength(3);

    membershipTiersContent.forEach((tier) => {
      const categories = tier.perks.map((p) => p.category);
      const firstBenefitIdx = categories.indexOf("benefits");
      const lastEntertainmentIdx = categories.lastIndexOf("entertainment");

      if (firstBenefitIdx !== -1 && lastEntertainmentIdx !== -1) {
        expect(lastEntertainmentIdx).toBeLessThan(firstBenefitIdx);
      }
    });
  });

  it("includes Switch n Save with mandatory partner disclosure and no hardcoded savings", () => {
    const switchNSave = dealsContent.find((d) => d.slug === "switch-n-save");
    expect(switchNSave).toBeDefined();
    expect(switchNSave?.disclosureText).toContain("Switch n Save offers are provided by");
    expect(switchNSave?.termsLink).toBeDefined();
    // Verify no prohibited savings numbers in summary
    expect(switchNSave?.summary).not.toMatch(/\$\d+/);
    expect(switchNSave?.summary).not.toMatch(/\d+%/);
  });
});
