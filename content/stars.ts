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

// Verified stars with authentic photographic provenance and community clearances.
// NOTE: AGENTS.md strictly dictates: only render stars where rightsCleared is true.
export const starsContent: StarItem[] = [
  // 1. Cleared - Playback Icon
  {
    name: "Shreya Ghoshal",
    slug: "shreya-ghoshal",
    role: "Five-Time National Award Playback Vocalist",
    bio: "One of Indian cinema's most revered voices, headlined global arenas on The Unstoppable Tour with timeless melodies and classical precision.",
    status: "past",
    rightsCleared: true,
    linkedEventSlug: "shreya-ghoshal-unstoppable-tour",
    imageUrl: "/images/star_shreya_ghoshal.jpg",
    imageTone: "portrait",
  },
  // 2. Cleared - 90s Golden Era Icon
  {
    name: "Kumar Sanu",
    slug: "kumar-sanu",
    role: "Legendary 90s Playback Icon & Record Holder",
    bio: "The undisputed king of 90s Bollywood romance, five-time consecutive Filmfare winner bringing unforgettable melodies to live US stages.",
    status: "past",
    rightsCleared: true,
    linkedEventSlug: "kumar-sanu-live-columbus",
    imageUrl: "/images/star_kumar_sanu.jpg",
    imageTone: "portrait",
  },
  // 3. Cleared - Master Actor & Theatre Icon
  {
    name: "Anupam Kher",
    slug: "anupam-kher",
    role: "Padma Bhushan Actor & Theatrical Maestro",
    bio: "Veteran actor with over 500 films and two National Film Awards, headlining acclaimed live theatre productions including Mera Woh Matlab Nahi Tha.",
    status: "past",
    rightsCleared: true,
    linkedEventSlug: "anupam-kher-theatre-columbus",
    imageUrl: "/images/star_anupam_kher.jpg",
    imageTone: "portrait",
  },
  // 4. Cleared - Legendary Playback Star
  {
    name: "Udit Narayan",
    slug: "udit-narayan",
    role: "Four-Time National Award Playback Vocalist",
    bio: "Recipient of the Padma Bhushan and the golden voice behind Bollywood's most celebrated romantic cinema eras, performing alongside son Aditya Narayan.",
    status: "past",
    rightsCleared: true,
    linkedEventSlug: "udit-narayan-symphony-columbus",
    imageUrl: "/images/star_udit_narayan.jpg",
    imageTone: "portrait",
  },
  // 5. Cleared - Keynote Speaker & Ohio Entrepreneur
  {
    name: "Vivek Ramaswamy",
    slug: "vivek-ramaswamy",
    role: "Keynote Speaker, Entrepreneur & Author",
    bio: "Ohio native and entrepreneur engaging diaspora business owners, hotel operators, and investors on leadership and commercial growth.",
    status: "past",
    rightsCleared: true,
    linkedEventSlug: "diaspora-business-forum-columbus",
    imageUrl: "/images/star_vivek_ramaswamy.jpg",
    imageTone: "portrait",
  },
  // 6. Cleared - Resident DJ & High-Energy Fusion Performer
  {
    name: "DJ Yangkee",
    slug: "dj-yangkee",
    role: "High-Energy Club Resident & Fusion Performer",
    bio: "Dynamic resident DJ delivering high-tempo Bollywood fusion, live dhol rhythms, and electric dance floor sets across gala celebrations.",
    status: "past",
    rightsCleared: true,
    linkedEventSlug: "desi-nights-gala-columbus",
    imageUrl: "/images/star_dj_yangkee.jpg",
    imageTone: "portrait",
  },
  // 7. Uncleared (Must NEVER render on public routes or sitemaps)
  {
    name: "Shah Rukh Khan",
    slug: "shah-rukh-khan",
    role: "Global Cinema Icon",
    bio: "King of Bollywood.",
    status: "announced",
    rightsCleared: false,
    imageTone: "portrait",
  },
  // 8. Uncleared
  {
    name: "Deepika Padukone",
    slug: "deepika-padukone",
    role: "Acclaimed Actor & Producer",
    bio: "Leading international actor.",
    status: "announced",
    rightsCleared: false,
    imageTone: "portrait",
  },
  // 9. Uncleared
  {
    name: "Ranveer Singh",
    slug: "ranveer-singh",
    role: "Bollywood Powerhouse",
    bio: "Dynamic screen and stage performer.",
    status: "announced",
    rightsCleared: false,
    imageTone: "portrait",
  },
  // 10. Uncleared
  {
    name: "Alia Bhatt",
    slug: "alia-bhatt",
    role: "Celebrated Screen Artist",
    bio: "Acclaimed contemporary actor.",
    status: "announced",
    rightsCleared: false,
    imageTone: "portrait",
  },
];
