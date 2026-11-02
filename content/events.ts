import { z } from "zod";

export const EventStatusSchema = z.enum([
  "selling-fast",
  "few-left",
  "sold-out",
  "announced",
  "past",
]);

export const ImageToneSchema = z.enum(["crowd", "portrait", "stage", "venue"]);

export const EventScheduleItemSchema = z.object({
  time: z.string(),
  activity: z.string(),
});

export const EventFaqItemSchema = z.object({
  question: z.string(),
  answer: z.string(),
});

export const EventItemSchema = z.object({
  slug: z.string(),
  title: z.string(),
  date: z.string(),
  city: z.string(),
  venue: z.string(),
  category: z.string(),
  status: EventStatusSchema,
  priceFrom: z.string().optional(),
  ticketUrl: z.string().url().optional(),
  lineup: z.array(z.string()),
  schedule: z.array(EventScheduleItemSchema),
  faq: z.array(EventFaqItemSchema),
  imageSlotTone: ImageToneSchema,
  imageUrl: z.string().optional(),
});

export type EventStatus = z.infer<typeof EventStatusSchema>;
export type ImageTone = z.infer<typeof ImageToneSchema>;
export type EventFaqItem = z.infer<typeof EventFaqItemSchema>;
export type EventScheduleItem = z.infer<typeof EventScheduleItemSchema>;
export type EventItem = z.infer<typeof EventItemSchema>;

// Seeded realistic events across top US hubs: New York, San Francisco, Los Angeles, Chicago, Dallas, and New Jersey
// TODO: Replace placeholder event dates and venues with verified US promoter contracts once tour dates are locked.
export const eventsContent: EventItem[] = [
  {
    // TODO: Verify ticket release dates with promoter
    slug: "bollywood-gala-new-york",
    title: "Bollywood Premiere Gala New York",
    date: "Saturday, 21 November 2026",
    city: "New York",
    venue: "Radio City Music Hall, Manhattan NY",
    category: "Club Gala",
    status: "selling-fast",
    priceFrom: "$99",
    ticketUrl: "https://tickets.example.com/nyc-gala",
    imageUrl: "/images/event_gala_nyc.jpg",
    lineup: ["DJ Shadow Dubai", "Priya Sen", "Acoustic Dhol Collective"],
    schedule: [
      { time: "7:00 PM", activity: "Red carpet arrivals & welcome cocktail reception" },
      { time: "8:30 PM", activity: "Live acoustic fusion & celebrity welcome" },
      { time: "10:00 PM", activity: "High-energy dance set & headline DJs" },
    ],
    faq: [
      {
        question: "What is the dress code?",
        answer: "Modern ethnic glam or black tie with a touch of shimmer.",
      },
      {
        question: "Is there a VIP lounge for club members?",
        answer: "Yes, Club Members and Inner Circle guests have private mezzanine lounge access.",
      },
    ],
    imageSlotTone: "stage",
  },
  {
    // TODO: Finalize external ticketing provider link
    slug: "arijit-singh-symphony-san-francisco",
    title: "Arijit Singh Symphony Live",
    date: "Friday, 4 December 2026",
    city: "San Francisco",
    venue: "SAP Center, San Jose CA",
    category: "Live Concert",
    status: "few-left",
    priceFrom: "$149",
    ticketUrl: "https://tickets.example.com/arijit-bay-area",
    imageUrl: "/images/event_symphony_sf.jpg",
    lineup: ["Arijit Singh", "Grand Philharmonic Strings"],
    schedule: [
      { time: "6:30 PM", activity: "Doors open for club priority line" },
      { time: "8:00 PM", activity: "Arijit Singh Symphony Part 1" },
      { time: "9:30 PM", activity: "Arijit Singh Symphony Part 2 & grand finale" },
    ],
    faq: [
      {
        question: "Can members get front-row allocations?",
        answer: "Club members receive first access to front-row stalls 48 hours before public release.",
      },
    ],
    imageSlotTone: "crowd",
  },
  {
    // TODO: Add waitlist provider integration
    slug: "diljit-dosanjh-arena-los-angeles",
    title: "Diljit Dosanjh Aura Tour",
    date: "Saturday, 12 December 2026",
    city: "Los Angeles",
    venue: "Kia Forum, Inglewood CA",
    category: "Live Concert",
    status: "sold-out",
    priceFrom: "$129",
    imageUrl: "/images/star_diljit.jpg",
    lineup: ["Diljit Dosanjh", "Special Guest Performers"],
    schedule: [
      { time: "6:00 PM", activity: "Gates open & festival warm-up" },
      { time: "7:30 PM", activity: "Diljit Dosanjh live stadium performance" },
    ],
    faq: [
      {
        question: "Are returns available for sold out shows?",
        answer: "Club members can join the priority waitlist for member re-allocation tickets.",
      },
    ],
    imageSlotTone: "stage",
  },
  {
    // TODO: Confirm speaker lineup for Founders & Creators panel
    slug: "founders-creators-mixer-chicago",
    title: "Founders & Creators Chicago Soirée",
    date: "Thursday, 14 January 2027",
    city: "Chicago",
    venue: "The Geraghty, Chicago IL",
    category: "Networking",
    status: "announced",
    priceFrom: "$65",
    imageUrl: "/images/event_mixer_chicago.jpg",
    lineup: ["Tech Founders", "Creative Directors", "Angel Investors"],
    schedule: [
      { time: "6:00 PM", activity: "Private networking & cocktail pairings" },
      { time: "7:15 PM", activity: "Fireside chat with prominent diaspora founders" },
      { time: "8:15 PM", activity: "Open connection lounge & DJ set" },
    ],
    faq: [
      {
        question: "Who attends this event?",
        answer: "Founders, tech leads, doctors, dancers, and creative entrepreneurs from the desi community.",
      },
    ],
    imageSlotTone: "venue",
  },
  {
    // TODO: Confirm rooftop terrace license
    slug: "retro-bollywood-social-dallas",
    title: "Retro Bollywood Vinyl Social",
    date: "Friday, 29 January 2027",
    city: "Dallas",
    venue: "Toyota Music Factory, Irving TX",
    category: "Club Night",
    status: "selling-fast",
    priceFrom: "$75",
    ticketUrl: "https://tickets.example.com/retro-dallas",
    imageUrl: "/images/star_dj_shadow.jpg",
    lineup: ["DJ Krish", "Live Saxophone by Aaron"],
    schedule: [
      { time: "8:00 PM", activity: "Classic 90s & 2000s Bollywood lounge vinyl set" },
      { time: "10:30 PM", activity: "Club anthems & dancefloor takeover" },
    ],
    faq: [
      {
        question: "Is there table service?",
        answer: "Private booths can be reserved with bottle service for member parties.",
      },
    ],
    imageSlotTone: "crowd",
  },
  {
    // TODO: Historical archive entry
    slug: "diwali-royale-banquet-new-jersey",
    title: "Diwali Royale Charity Banquet",
    date: "Saturday, 24 October 2026",
    city: "New Jersey",
    venue: "The Legacy Castle, Pompton Plains NJ",
    category: "Cultural Gala",
    status: "past",
    priceFrom: "$175",
    imageUrl: "/images/event_gala_nyc.jpg",
    lineup: ["Classical Sitar Ensemble", "Keynote Community Leaders"],
    schedule: [
      { time: "6:30 PM", activity: "Canapés on the castle terrace" },
      { time: "7:45 PM", activity: "Three-course banquet & fundraising auction" },
    ],
    faq: [
      {
        question: "Will this event return next year?",
        answer: "Yes, our annual Diwali Royale returns every October in the tri-state area.",
      },
    ],
    imageSlotTone: "venue",
  },
];
