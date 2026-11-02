import { z } from "zod";

export const TeamMemberSchema = z.object({
  name: z.string(),
  role: z.string(),
  bio: z.string(),
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

// TODO: Replace founder bios with confirmed team bios
export const aboutContent: AboutContent = {
  headline: "Where Entertainment Meets Opportunity",
  story: [
    "DesiConnections started with a simple belief: the desi community in the United States deserves a private-club experience that matches the energy of our culture.",
    "For years, getting tickets to headline Bollywood concerts meant chaotic queues, generic arenas, and zero personal hospitality. Networking meant dull business breakfasts in stale conference rooms.",
    "We built DesiConnections to change that: front-row seats to premier entertainment, a room full of people you actually want to meet, and everyday benefits that give back to our members.",
  ],
  pillars: [
    {
      title: "Entertainment Dominates",
      description: "Front-row nights, intimate meet-and-greets, and private club galas.",
    },
    {
      title: "Curated Connections",
      description: "Founders, creators, doctors, dancers, and leaders sharing genuine connections.",
    },
    {
      title: "Everyday Benefits",
      description: "Member energy deals and dining perks that make membership effortlessly rewarding.",
    },
  ],
  team: [
    {
      // TODO: Replace with executive founder bio
      name: "Kabir Malhotra",
      role: "Co-Founder & Head of Talent",
      bio: "Former tour promoter connecting subcontinent artists with North American arenas for over a decade.",
    },
    {
      // TODO: Replace with executive community lead bio
      name: "Ananya Roy",
      role: "Co-Founder & Community Director",
      bio: "Tech entrepreneur and cultural strategist passionate about diaspora networks and arts patrons.",
    },
  ],
  communityGuidelines: [
    "Respect the room: every member is here to celebrate culture and connect with integrity.",
    "No commercial spamming: connections happen naturally through conversation, not sales pitches.",
    "Discretion and privacy: keep backstage and private lounge moments among members.",
  ],
};
