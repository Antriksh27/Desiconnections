import { z } from "zod";

export const LegalSectionSchema = z.object({
  title: z.string(),
  body: z.array(z.string()),
});

export const LegalDocumentSchema = z.object({
  title: z.string(),
  lastUpdated: z.string(),
  summary: z.string(),
  disclaimer: z.string(),
  sections: z.array(LegalSectionSchema),
});

export type LegalDocument = z.infer<typeof LegalDocumentSchema>;

// REVIEW WITH LAWYER: California Consumer Privacy Act (CCPA/CPRA) and US Federal Trade Commission (FTC) compliance
export const privacyContent: LegalDocument = {
  title: "Privacy Policy",
  lastUpdated: "October 2026",
  summary: "We take your privacy seriously. We only collect details needed to review membership invitations, share event updates, and connect you with verified partners when you explicitly ask us to.",
  disclaimer: "REVIEW WITH LAWYER: Standard policy drafted for United States commercial operations. Requires independent legal sign-off prior to commercial transaction processing.",
  sections: [
    {
      title: "1. Information We Collect",
      body: [
        "When you request an invitation, enquire about an event, or submit interest in member perks, we collect your contact information (name, email address, phone number, city, profession, and referral source).",
        "If you enquire about Switch n Save, we collect your 5-digit ZIP code and current electricity or natural gas utility provider to help our licensed energy brokerage partners review your rate tariff.",
        "We do not collect credit card numbers, bank details, or social security numbers on this site. Phase 1 is strictly informational and inquiry-based.",
      ],
    },
    {
      title: "2. How We Use Your Data",
      body: [
        "We use your details strictly to assess membership eligibility, respond to event enquiries, send concierge updates, and curate club experiences.",
        "We never sell, rent, or trade your personal information to third-party marketers or advertisers (satisfying CCPA/CPRA requirements).",
        "Data submitted through our forms is processed securely via TLS encrypted channels and stored temporarily in accordance with applicable US federal and state privacy standards.",
      ],
    },
    {
      title: "3. Partner Programs & Disclosures",
      body: [
        "Our Switch n Save service is provided in partnership with licensed US energy brokerage partners operating in deregulated retail power markets.",
        "We only transmit your utility inquiry to authorized licensed brokers when you specifically complete and submit the Switch n Save interest form.",
      ],
    },
    {
      title: "4. Your Rights & Contact",
      body: [
        "Under California CCPA/CPRA and other state consumer privacy laws, you may request access to your details, ask for corrections, or request complete deletion from our inquiry list at any time by emailing concierge@desiconnections.club.",
      ],
    },
  ],
};

// REVIEW WITH LAWYER: US Federal Trade Commission (FTC) guidelines and state entertainment ticketing regulations
export const termsContent: LegalDocument = {
  title: "Terms of Service",
  lastUpdated: "October 2026",
  summary: "Welcome to DesiConnections. By accessing our site or requesting an invitation, you agree to these terms.",
  disclaimer: "REVIEW WITH LAWYER: Draft terms for private club marketing and ticketing referral services under US law. Formal legal review required before commercial launch.",
  sections: [
    {
      title: "1. Membership & Invitations",
      body: [
        "DesiConnections is a private community. Requesting an invitation does not guarantee admission or membership approval.",
        "Our membership committee reviews applications based on community integrity, professional alignment, and room capacity across our US tour hubs.",
      ],
    },
    {
      title: "2. Ticketing & External Bookings",
      body: [
        "Official event tickets are fulfilled by authorized external ticketing partners (e.g., Ticketmaster, AXS, or venue box offices). Your ticket purchases are subject to the terms and refund policies of those respective ticketing providers.",
        "DesiConnections does not process payments or issue ticket inventory directly through this website.",
      ],
    },
    {
      title: "3. Artist Appearances",
      body: [
        "All headline talent appearances, meet-and-greets, and tour lineups are subject to artist confirmation, US visa approvals, and touring schedules.",
        "We only promote artists under active agency agreements where likeness and performance rights have been verified.",
      ],
    },
    {
      title: "4. Everyday Benefits & Partner Offers",
      body: [
        "Switch n Save and partner lifestyle perks are provided by independent third parties. DesiConnections is not a public utility, retail energy supplier, or financial advisor.",
        "Terms and eligibility criteria apply to all partner promotions across participating US states.",
      ],
    },
  ],
};

// REVIEW WITH LAWYER: Club bylaws and member conduct agreement
export const communityGuidelinesContent: LegalDocument = {
  title: "Community Guidelines",
  lastUpdated: "October 2026",
  summary: "DesiConnections brings together people who celebrate our culture and value genuine connection. These guidelines keep our spaces welcoming, inspiring, and discreet.",
  disclaimer: "REVIEW WITH LAWYER: Club code of conduct and event admittance agreement.",
  sections: [
    {
      title: "1. Respect the Room",
      body: [
        "Every event is designed as an intimate celebration of South Asian culture and achievement across our US chapters.",
        "Treat every guest, performer, and staff member with warmth and courtesy. Harassment, discrimination, or disruptive conduct will result in immediate removal and membership revocation.",
      ],
    },
    {
      title: "2. Connect Naturally, No Hard Selling",
      body: [
        "Our community includes founders, artists, healthcare leaders, and executives. Conversations should be authentic.",
        "Aggressive pitching, unsolicited product sales, and commercial spamming are strictly against club culture.",
      ],
    },
    {
      title: "3. Privacy & Discretion",
      body: [
        "Private club lounges, backstage areas, and dinner conversations must remain confidential.",
        "Do not photograph or record members or visiting artists in private areas without explicit verbal consent.",
      ],
    },
  ],
};
