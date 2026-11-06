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
  memberPassEligible: z.boolean().optional(),
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

export const eventsContent: EventItem[] = [
  {
    slug: "shreya-ghoshal-unstoppable-tour",
    title: "Shreya Ghoshal: The Unstoppable Tour Live",
    date: "Saturday, 28 November 2026",
    city: "Columbus",
    venue: "Nationwide Arena, Columbus OH",
    category: "Live Concert",
    status: "selling-fast",
    priceFrom: "$85",
    ticketUrl: "https://tickets.example.com/shreya-columbus",
    memberPassEligible: true,
    imageUrl: "/images/event_shreya_ghoshal_tour.jpg",
    lineup: ["Shreya Ghoshal", "Grand Symphony Strings"],
    schedule: [
      { time: "6:30 PM", activity: "Doors open for club member priority check-in" },
      { time: "7:30 PM", activity: "Acoustic orchestral overture" },
      { time: "8:45 PM", activity: "Shreya Ghoshal headline concert set" },
    ],
    faq: [
      {
        question: "Can members claim complimentary tickets for this show?",
        answer: "Yes, verified members receive 2 complimentary tickets each year for sponsored concerts in Columbus.",
      },
      {
        question: "Where do we pick up member tickets?",
        answer: "Reserved tickets are allocated at the private member concierge desk inside the venue lobby.",
      },
    ],
    imageSlotTone: "stage",
  },
  {
    slug: "kumar-sanu-live-columbus",
    title: "Kumar Sanu Live: The Golden 90s Era",
    date: "Sunday, 13 December 2026",
    city: "Columbus",
    venue: "Southern Theatre, Columbus OH",
    category: "Live Concert",
    status: "few-left",
    priceFrom: "$65",
    ticketUrl: "https://tickets.example.com/sanu-columbus",
    memberPassEligible: true,
    imageUrl: "/images/event_kumar_sanu_live.jpg",
    lineup: ["Kumar Sanu", "Golden 90s Rhythm Section"],
    schedule: [
      { time: "5:30 PM", activity: "Member reception and welcome mixer" },
      { time: "7:00 PM", activity: "Evergreen 90s romance classics live set" },
      { time: "9:30 PM", activity: "Kumar Sanu encore and VIP patron greeting" },
    ],
    faq: [
      {
        question: "Is there a meet and greet opportunity?",
        answer: "Club members holding verified passes have priority access to the backstage photo reception.",
      },
      {
        question: "Where are member seats located?",
        answer: "Prime orchestra and lower-tier rows are reserved exclusively for community pass holders.",
      },
    ],
    imageSlotTone: "stage",
  },
  {
    slug: "udit-narayan-symphony-columbus",
    title: "Udit Narayan Live in Symphony",
    date: "Saturday, 14 November 2026",
    city: "Columbus",
    venue: "Palace Theatre, Columbus OH",
    category: "Live Concert",
    status: "selling-fast",
    priceFrom: "$75",
    ticketUrl: "https://tickets.example.com/udit-columbus",
    memberPassEligible: true,
    imageUrl: "/images/event_udit_narayan_redcarpet.jpg",
    lineup: ["Udit Narayan", "Aditya Narayan", "Live Grand Symphony Strings"],
    schedule: [
      { time: "6:30 PM", activity: "Doors open for club member priority check-in" },
      { time: "7:30 PM", activity: "Romantic 90s and 2000s classics orchestral overture" },
      { time: "9:00 PM", activity: "Udit Narayan headline set and evergreen hits" },
    ],
    faq: [
      {
        question: "Can members claim complimentary tickets for this show?",
        answer: "Yes, verified members receive 2 complimentary tickets each year for sponsored concerts in Columbus.",
      },
      {
        question: "Where do we pick up member tickets?",
        answer: "Reserved tickets are allocated at the private member concierge desk inside the venue lobby.",
      },
    ],
    imageSlotTone: "stage",
  },
  {
    slug: "anupam-kher-theatre-columbus",
    title: "Anupam Kher in Mera Woh Matlab Nahi Tha",
    date: "Friday, 15 January 2027",
    city: "Columbus",
    venue: "Davidson Theatre, Columbus OH",
    category: "Live Theatre",
    status: "announced",
    priceFrom: "$55",
    ticketUrl: "https://tickets.example.com/anupam-columbus",
    memberPassEligible: true,
    imageUrl: "/images/event_anupam_kher_theatre.jpg",
    lineup: ["Anupam Kher", "Neena Gupta", "Directed by Rakesh Bedi"],
    schedule: [
      { time: "6:30 PM", activity: "Doors open and member reception" },
      { time: "7:30 PM", activity: "Mera Woh Matlab Nahi Tha (Act 1)" },
      { time: "8:45 PM", activity: "Intermission followed by dramatic Act 2 finale" },
    ],
    faq: [
      {
        question: "Is the play performed in Hindi?",
        answer: "Yes, the theatrical production is in conversational Hindi with rich dialogue and music.",
      },
      {
        question: "Are seats reserved together for families?",
        answer: "Yes, member allocations keep group reservations seated together in prime centre rows.",
      },
    ],
    imageSlotTone: "stage",
  },
  {
    slug: "diaspora-business-forum-columbus",
    title: "Diaspora Business & Leadership Forum",
    date: "Thursday, 28 January 2027",
    city: "Columbus",
    venue: "The Exchange at Bridge Park, Dublin OH",
    category: "Networking",
    status: "announced",
    priceFrom: "$90",
    ticketUrl: "https://tickets.example.com/business-forum-columbus",
    memberPassEligible: true,
    imageUrl: "/images/event_vivek_ramaswamy_reception.jpg",
    lineup: ["Vivek Ramaswamy", "Ohio Business Founders", "Commercial Operators"],
    schedule: [
      { time: "5:30 PM", activity: "Private welcome reception and executive mixer" },
      { time: "6:45 PM", activity: "Keynote address on entrepreneurship and diaspora commerce" },
      { time: "8:00 PM", activity: "Deal-making lounge and commercial marketplace briefings" },
    ],
    faq: [
      {
        question: "Who can attend this forum?",
        answer: "Entrepreneurs, business buyers, property sellers, and professionals from the diaspora.",
      },
      {
        question: "Is there a fee to present commercial listings?",
        answer: "Club members present commercial listings and real estate opportunities with zero broker commission.",
      },
    ],
    imageSlotTone: "venue",
  },
  {
    slug: "desi-nights-gala-columbus",
    title: "Desi Nights Ballroom Gala & Dance Fusion",
    date: "Friday, 19 February 2027",
    city: "Columbus",
    venue: "Grand Ballroom, Columbus OH",
    category: "Club Gala",
    status: "selling-fast",
    priceFrom: "$60",
    ticketUrl: "https://tickets.example.com/desi-nights-columbus",
    memberPassEligible: false,
    imageUrl: "/images/event_dj_yangkee_stage.jpg",
    lineup: ["DJ Yangkee", "DJ MAVI Production", "Live Dhol Fusion"],
    schedule: [
      { time: "7:30 PM", activity: "Red carpet entrance, banquet dinner, and cultural performances" },
      { time: "9:30 PM", activity: "High-tempo Bollywood mashups and stage fusion with DJ Yangkee" },
      { time: "11:30 PM", activity: "Midnight dance floor celebration" },
    ],
    faq: [
      {
        question: "Is dinner included with the ticket?",
        answer: "Yes, full banquet dining and refreshments are included for all pass holders.",
      },
      {
        question: "Is there table service?",
        answer: "Private banquet booths can be reserved for member groups.",
      },
    ],
    imageSlotTone: "crowd",
  },
  {
    slug: "columbus-community-diwali-celebration",
    date: "Saturday, 24 October 2026",
    title: "Columbus Community Diwali Banquet",
    city: "Columbus",
    venue: "Ohio Union Grand Ballroom, Columbus OH",
    category: "Cultural Gala",
    status: "past",
    priceFrom: "$95",
    memberPassEligible: true,
    imageUrl: "/images/event_anupam_kher_stage.jpg",
    lineup: ["Diaspora Community Leaders", "Mr. Ketan Patel", "Cultural Performers"],
    schedule: [
      { time: "6:00 PM", activity: "Diya lighting ceremony and welcome canapés" },
      { time: "7:30 PM", activity: "Community awards and banquet dinner" },
    ],
    faq: [
      {
        question: "Will this event return next year?",
        answer: "Yes, our annual Columbus Diwali banquet returns every autumn.",
      },
    ],
    imageSlotTone: "venue",
  },
];
