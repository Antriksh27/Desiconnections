import { z } from "zod";

export const StarStatusSchema = z.enum(["confirmed", "announced", "past"]);

export const StarItemSchema = z.object({
  name: z.string(),
  slug: z.string(),
  role: z.string(),
  bio: z.string(),
  status: StarStatusSchema,
  rightsCleared: z.boolean(),
  linkedEventSlug: z.string().optional(),
  imageTone: z.literal("portrait").optional(),
  imageUrl: z.string().optional(),
});

export type StarStatus = z.infer<typeof StarStatusSchema>;
export type StarItem = z.infer<typeof StarItemSchema>;

// Seeded 8 stars: exactly 4 cleared, 4 uncleared (pending talent contract review)
// NOTE: AGENTS.md strictly dictates: only render stars where rightsCleared is true.
// TODO: Replace talent bios with agent-approved PR releases once likeness contracts are countersigned.
export const starsContent: StarItem[] = [
  // 1. Cleared
  {
    // TODO: Verify final meet-and-greet timing with artist management
    name: "Arijit Singh",
    slug: "arijit-singh",
    role: "Playback Icon & Vocalist",
    bio: "The voice of modern Indian cinema. Arijit brings his orchestral symphony tour to US arenas with unprecedented grand string production.",
    status: "confirmed",
    rightsCleared: true,
    linkedEventSlug: "arijit-singh-symphony-san-francisco",
    imageUrl: "/images/star_arijit.jpg",
    imageTone: "portrait",
  },
  // 2. Cleared
  {
    // TODO: Confirm tour VIP package allotment
    name: "Diljit Dosanjh",
    slug: "diljit-dosanjh",
    role: "Global Punjabi Superstar",
    bio: "Selling out US stadiums coast to coast, Diljit unites Punjabi folk energy with stadium-scale beats. Club members receive private lounge invitations.",
    status: "confirmed",
    rightsCleared: true,
    linkedEventSlug: "diljit-dosanjh-arena-los-angeles",
    imageUrl: "/images/star_diljit.jpg",
    imageTone: "portrait",
  },
  // 3. Cleared
  {
    // TODO: Confirm New York premiere afterparty presence
    name: "Priya Sen",
    slug: "priya-sen",
    role: "Electronic & Dhol Fusion Producer",
    bio: "Pioneering melodic deep house infused with classical sitar and live dhol. Headline act at our New York Premiere Gala at Radio City.",
    status: "confirmed",
    rightsCleared: true,
    linkedEventSlug: "bollywood-gala-new-york",
    imageUrl: "/images/star_priya_sen.jpg",
    imageTone: "portrait",
  },
  // 4. Cleared
  {
    // TODO: Contract countersign pending for Dallas set
    name: "DJ Shadow Dubai",
    slug: "dj-shadow-dubai",
    role: "Multi-Award Winning Global DJ",
    bio: "Official remixer to Bollywood's biggest chartbusters. Headlining our premiere dance arenas across New York and Dallas.",
    status: "confirmed",
    rightsCleared: true,
    linkedEventSlug: "bollywood-gala-new-york",
    imageUrl: "/images/star_dj_shadow.jpg",
    imageTone: "portrait",
  },
  // 5. Uncleared (Must NEVER render on public routes or sitemaps)
  {
    name: "Shah Rukh Khan",
    slug: "shah-rukh-khan",
    role: "Global Cinema Icon",
    bio: "King of Bollywood.",
    status: "announced",
    rightsCleared: false,
    imageTone: "portrait",
  },
  // 6. Uncleared
  {
    name: "Deepika Padukone",
    slug: "deepika-padukone",
    role: "Acclaimed Actor & Producer",
    bio: "Leading international actor.",
    status: "announced",
    rightsCleared: false,
    imageTone: "portrait",
  },
  // 7. Uncleared
  {
    name: "Ranveer Singh",
    slug: "ranveer-singh",
    role: "Bollywood Powerhouse",
    bio: "Dynamic performer.",
    status: "announced",
    rightsCleared: false,
    imageTone: "portrait",
  },
  // 8. Uncleared
  {
    name: "Alia Bhatt",
    slug: "alia-bhatt",
    role: "Celebrated Cinema Star",
    bio: "Award-winning actress.",
    status: "announced",
    rightsCleared: false,
    imageTone: "portrait",
  },
];
