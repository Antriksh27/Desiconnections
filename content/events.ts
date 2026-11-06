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

// Authentic past events hosted and sponsored by The Desi Connections in Columbus, OH
export const eventsContent: EventItem[] = [
  {
    slug: "shreya-ghoshal-unstoppable-tour",
    title: "Shreya Ghoshal: The Unstoppable Tour Live",
    date: "Saturday, 28 October 2023",
    city: "Columbus",
    venue: "Nationwide Arena, Columbus OH",
    category: "Live Concert",
    status: "past",
    priceFrom: "$85",
    memberPassEligible: true,
    imageUrl: "/images/event_shreya_ghoshal_tour.jpg",
    lineup: ["Shreya Ghoshal", "Grand Symphony Strings"],
    schedule: [
      { time: "6:30 PM", activity: "Doors opened for club member priority check-in" },
      { time: "7:30 PM", activity: "Acoustic orchestral overture" },
      { time: "8:45 PM", activity: "Shreya Ghoshal headline concert set" },
    ],
    faq: [
      {
        question: "Did club members receive complimentary tickets?",
        answer: "Yes, verified members received 2 complimentary tickets for this sponsored tour date in Columbus.",
      },
      {
        question: "Where were member passes distributed?",
        answer: "Passes were allocated at the private member concierge desk inside the venue lobby.",
      },
    ],
    imageSlotTone: "stage",
  },
  {
    slug: "kumar-sanu-live-columbus",
    title: "Kumar Sanu Live: The Golden 90s Era",
    date: "Sunday, 17 September 2023",
    city: "Columbus",
    venue: "Southern Theatre, Columbus OH",
    category: "Live Concert",
    status: "past",
    priceFrom: "$65",
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
        question: "Was there a meet and greet opportunity?",
        answer: "Club members holding verified passes enjoyed priority access to the backstage photo reception.",
      },
      {
        question: "Where were member seats allocated?",
        answer: "Prime orchestra and lower-tier rows were reserved exclusively for community pass holders.",
      },
    ],
    imageSlotTone: "stage",
  },
  {
    slug: "udit-narayan-symphony-columbus",
    title: "Udit Narayan Live in Symphony",
    date: "Saturday, 12 August 2023",
    city: "Columbus",
    venue: "Palace Theatre, Columbus OH",
    category: "Live Concert",
    status: "past",
    priceFrom: "$75",
    memberPassEligible: true,
    imageUrl: "/images/event_udit_narayan_redcarpet.jpg",
    lineup: ["Udit Narayan", "Aditya Narayan", "Live Grand Symphony Strings"],
    schedule: [
      { time: "6:30 PM", activity: "Doors opened for club member priority check-in" },
      { time: "7:30 PM", activity: "Romantic 90s and 2000s classics orchestral overture" },
      { time: "9:00 PM", activity: "Udit Narayan headline set and evergreen hits" },
    ],
    faq: [
      {
        question: "Did members receive complimentary tickets?",
        answer: "Yes, active community members received 2 complimentary tickets for this sponsored Columbus performance.",
      },
      {
        question: "Where did members check in?",
        answer: "Reserved tickets were allocated at the private member concierge desk inside the venue lobby.",
      },
    ],
    imageSlotTone: "stage",
  },
  {
    slug: "anupam-kher-theatre-columbus",
    title: "Anupam Kher in Mera Woh Matlab Nahi Tha",
    date: "Friday, 18 September 2015",
    city: "Columbus",
    venue: "Davidson Theatre, Columbus OH",
    category: "Live Theatre",
    status: "past",
    priceFrom: "$55",
    memberPassEligible: true,
    imageUrl: "/images/event_anupam_kher_theatre.jpg",
    lineup: ["Anupam Kher", "Neena Gupta", "Directed by Rakesh Bedi"],
    schedule: [
      { time: "6:30 PM", activity: "Doors opened and member reception" },
      { time: "7:30 PM", activity: "Mera Woh Matlab Nahi Tha (Act 1)" },
      { time: "8:45 PM", activity: "Intermission followed by dramatic Act 2 finale" },
    ],
    faq: [
      {
        question: "Was the play performed in Hindi?",
        answer: "Yes, the theatrical production was staged in conversational Hindi with rich dialogue and music.",
      },
      {
        question: "Were seats reserved together for families?",
        answer: "Yes, member allocations kept group reservations seated together in prime centre rows.",
      },
    ],
    imageSlotTone: "stage",
  },
  {
    slug: "diaspora-business-forum-columbus",
    title: "Diaspora Business & Leadership Forum",
    date: "Thursday, 12 October 2023",
    city: "Columbus",
    venue: "The Exchange at Bridge Park, Dublin OH",
    category: "Networking",
    status: "past",
    priceFrom: "$90",
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
        question: "Who attended this forum?",
        answer: "Entrepreneurs, business buyers, property sellers, and professionals from the South Asian diaspora.",
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
    date: "Friday, 17 November 2023",
    city: "Columbus",
    venue: "Grand Ballroom, Columbus OH",
    category: "Club Gala",
    status: "past",
    priceFrom: "$60",
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
        question: "Was banquet dinner included?",
        answer: "Yes, full banquet dining and refreshments were provided for all pass holders.",
      },
      {
        question: "Were private booths available?",
        answer: "Private banquet booths were reserved for member groups.",
      },
    ],
    imageSlotTone: "crowd",
  },
  {
    slug: "columbus-community-diwali-celebration",
    title: "Columbus Community Diwali Banquet",
    date: "Saturday, 24 October 2020",
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
        question: "Does this celebration return each year?",
        answer: "Yes, our annual Columbus Diwali banquet returns every autumn for the community.",
      },
    ],
    imageSlotTone: "venue",
  },
];
