import { z } from "zod";

export const TeamMemberSchema = z.object({
  name: z.string(),
  role: z.string(),
  bio: z.string(),
  phone: z.string().optional(),
});

export const AboutContentSchema = z.object({
  headline: z.string(),
  story: z.array(z.string()),
  pillars: z.array(
    z.object({
      title: z.string(),
      description: z.string(),
    })
  ),
  team: z.array(TeamMemberSchema),
  communityGuidelines: z.array(z.string()),
});

export type TeamMember = z.infer<typeof TeamMemberSchema>;
export type AboutContent = z.infer<typeof AboutContentSchema>;

export const aboutContent: AboutContent = {
  headline: "Connecting Communities, Empowering Growth",
  story: [
    "The Desi Connections was created with a clear purpose: to bring the South Asian diaspora together through unforgettable cultural experiences, peer-to-peer business opportunities, and practical everyday savings.",
    "For years, accessing top-tier cultural concerts meant dealing with high broker fees and generic venues with zero personal hospitality. Buying or selling a commercial business meant steep commissions. Navigating energy bills meant dealing with complex utility statements.",
    "Operated by Switch n Save LLC and rooted in Columbus, Ohio, The Desi Connections brings these priorities together under one roof. Members receive complimentary annual concert tickets, direct access to buy and sell businesses and properties across the USA and Canada at no cost, and over 70 years of combined energy advisory experience.",
  ],
  pillars: [
    {
      title: "Entertainment Dominates",
      description: "Complimentary concert passes for icons like Udit Narayan, Falguni Pathak, and Bhavin Shastri.",
    },
    {
      title: "Community Commerce",
      description: "A free referral platform to buy and sell businesses, properties, and post career openings across North America.",
    },
    {
      title: "Everyday Energy Advisory",
      description: "Over 70 years of combined electricity and gas expertise through Switch n Save LLC to manage costs.",
    },
  ],
  team: [
    {
      name: "Mr. Ketan Patel",
      role: "Community Director & Utility Advisor",
      bio: "Dedicated community organizer and energy specialist based in Columbus, Ohio. Committed to cultural sponsorship, commercial real estate networking, and utility management for families and businesses.",
      phone: "614-772-2247 / 614-745-7133",
    },
    {
      name: "Switch n Save Advisory Group",
      role: "Energy Advisory Partner",
      bio: "Over 70 years of combined experience in deregulated electricity and natural gas markets, helping commercial operators and households secure transparent rate structures.",
    },
  ],
  communityGuidelines: [
    "Respect the room: every member is here to celebrate culture and connect with integrity.",
    "No commercial spamming: connections happen naturally through conversation and trusted referrals.",
    "Discretion and privacy: utility bills and proprietary business listings are kept confidential.",
  ],
};
