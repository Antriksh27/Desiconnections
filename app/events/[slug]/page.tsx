import { notFound } from "next/navigation";
import Link from "next/link";
import { Metadata } from "next";
import {
  ArrowLeft,
  Calendar,
  MapPin,
  Clock,
  ShieldCheck,
  Sparkles,
  Ticket,
  ExternalLink,
} from "lucide-react";
import { eventsContent } from "@/content/events";
import { StatusChip } from "@/components/ui/StatusChip";
import { ImageSlot } from "@/components/ui/ImageSlot";
import { Button } from "@/components/ui/Button";
import { EventFaqAccordion } from "@/components/events/EventFaqAccordion";
import { StickyMobileTicketBar } from "@/components/events/StickyMobileTicketBar";

interface EventDetailPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return eventsContent.map((event) => ({
    slug: event.slug,
  }));
}

export async function generateMetadata({
  params,
}: EventDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const event = eventsContent.find((e) => e.slug === slug);

  if (!event) {
    return { title: "Event Not Found" };
  }

  return {
    title: `${event.title} | Event Archive`,
    description: `${event.title} presented at ${event.venue}, ${event.city} on ${event.date}. Archive of private lounge check-in and stage highlights for DesiConnections members.`,
    openGraph: {
      title: `${event.title} | DesiConnections`,
      description: `${event.date} at ${event.venue}, ${event.city}.`,
    },
  };
}

export default async function EventDetailPage({ params }: EventDetailPageProps) {
  const { slug } = await params;
  const event = eventsContent.find((e) => e.slug === slug);

  if (!event) {
    notFound();
  }

  const isPast = event.status === "past";
  const isSoldOut = event.status === "sold-out";
  let ctaLabel = "Get tickets";
  let ctaHref = event.ticketUrl || `/join?event=${event.slug}`;
  let isExternal = Boolean(event.ticketUrl && !isSoldOut && !isPast);

  if (isPast) {
    ctaLabel = "Join club for future events";
    ctaHref = "/join";
    isExternal = false;
  } else if (isSoldOut) {
    ctaLabel = "Join the waitlist";
    ctaHref = `/join?event=${event.slug}`;
    isExternal = false;
  } else if (!event.ticketUrl) {
    ctaLabel = "Enquire for access";
    ctaHref = `/join?event=${event.slug}`;
    isExternal = false;
  }

  // Event JSON-LD schema
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Event",
    name: event.title,
    startDate: event.date,
    eventStatus:
      event.status === "sold-out"
        ? "https://schema.org/EventCancelled"
        : "https://schema.org/EventScheduled",
    location: {
      "@type": "Place",
      name: event.venue,
      address: {
        "@type": "PostalAddress",
        addressLocality: event.city,
        addressCountry: "US",
      },
    },
    offers: {
      "@type": "Offer",
      price: event.priceFrom ? event.priceFrom.replace("$", "") : "0",
      priceCurrency: "USD",
      availability:
        event.status === "sold-out"
          ? "https://schema.org/SoldOut"
          : "https://schema.org/InStock",
      url: event.ticketUrl || `https://desiconnections.club/events/${event.slug}`,
    },
    performer: event.lineup.map((artist) => ({
      "@type": "PerformingGroup",
      name: artist,
    })),
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://desiconnections.club",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Events",
        item: "https://desiconnections.club/events",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: event.title,
        item: `https://desiconnections.club/events/${event.slug}`,
      },
    ],
  };

  return (
    <div className="pb-28">
      {/* Event and Breadcrumb JSON-LD Scripts */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      {/* Top Breadcrumb */}
      <div className="max-w-[1280px] mx-auto px-6 sm:px-12 pt-6 pb-4">
        <Link
          href="/events"
          className="text-xs uppercase tracking-widest text-mist hover:text-gold transition-colors inline-flex items-center gap-1.5"
        >
          <ArrowLeft className="w-3.5 h-3.5" /> Back to all events
        </Link>
      </div>

      <main className="max-w-[1280px] mx-auto px-6 sm:px-12 space-y-16">
        {/* Poster Hero Banner */}
        <section className="relative rounded-[32px] overflow-hidden bg-gradient-to-br from-plum via-midnight to-ink border border-gold/30 shadow-2xl p-6 sm:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="flex flex-wrap items-center gap-3">
                <StatusChip status={event.status} />
                <span className="text-xs font-semibold text-mist bg-plum px-3 py-1 rounded-full border border-hairline">
                  {event.category}
                </span>
                <span className="text-xs font-bold text-gold-light tracking-wider uppercase">
                  {event.city}
                </span>
              </div>

              <h1 className="display-lg text-ivory">
                {event.title}
              </h1>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="flex items-center gap-3 text-xs text-mist bg-midnight/80 p-3.5 rounded-2xl border border-hairline">
                  <Calendar className="w-4 h-4 text-gold-light shrink-0" />
                  <div>
                    <span className="text-[10px] text-muted block uppercase font-bold">Date</span>
                    <span className="text-ivory font-semibold">{event.date}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-xs text-mist bg-midnight/80 p-3.5 rounded-2xl border border-hairline">
                  <MapPin className="w-4 h-4 text-gold-light shrink-0" />
                  <div className="truncate">
                    <span className="text-[10px] text-muted block uppercase font-bold">Venue</span>
                    <span className="text-ivory font-semibold truncate block">{event.venue}</span>
                  </div>
                </div>
              </div>

              {/* Desktop CTA Row */}
              <div className="flex items-center gap-4 pt-4">
                <Button
                  variant="primary"
                  size="lg"
                  href={ctaHref}
                  external={isExternal}
                  className="shadow-xl"
                >
                  <span>{ctaLabel}</span>
                  {isExternal && <ExternalLink className="w-3.5 h-3.5 ml-1" />}
                </Button>
                {isPast ? (
                  <div className="text-xs text-mist">
                    <span className="text-[10px] text-muted block uppercase">Tour Status</span>
                    <span className="text-base font-bold text-ivory">Showcase Concluded</span>
                  </div>
                ) : event.priceFrom && (
                  <div className="text-xs text-mist">
                    <span className="text-[10px] text-muted block uppercase">Tickets from</span>
                    <span className="text-base font-bold text-ivory">{event.priceFrom}</span>
                  </div>
                )}
              </div>
            </div>

            <div className="lg:col-span-5">
              <ImageSlot
                src={event.imageUrl}
                alt={event.title}
                tone={event.imageSlotTone}
                aspectRatio="4:5"
                label={`Stage: ${event.title}`}
                className="shadow-2xl"
              />
            </div>
          </div>
        </section>

        {/* Content Columns: Details & Timeline / Map */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Key Facts, Lineup, Schedule */}
          <div className="lg:col-span-7 space-y-12">
            {/* Key Facts */}
            <section className="bg-midnight border border-hairline rounded-3xl p-6 sm:p-8 space-y-6">
              <h2 className="text-xl font-display text-ivory">Essential Details</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 text-xs">
                <div className="space-y-1">
                  <span className="text-muted uppercase font-bold text-[10px]">Doors Open</span>
                  <p className="text-ivory font-semibold flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-gold-light" />
                    <span>6:30 PM</span>
                  </p>
                </div>
                <div className="space-y-1">
                  <span className="text-muted uppercase font-bold text-[10px]">Age Policy</span>
                  <p className="text-ivory font-semibold">18+ Photo ID Required</p>
                </div>
                <div className="space-y-1">
                  <span className="text-muted uppercase font-bold text-[10px]">Dress Code</span>
                  <p className="text-ivory font-semibold">Glam &bull; Touch of Gold</p>
                </div>
              </div>
            </section>

            {/* Lineup */}
            <section className="bg-midnight border border-hairline rounded-3xl p-6 sm:p-8 space-y-4">
              <h2 className="text-xl font-display text-ivory">Artist Lineup</h2>
              <div className="flex flex-wrap gap-3">
                {event.lineup.map((artist, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-plum/70 border border-hairline"
                  >
                    <Sparkles className="w-3 h-3 text-gold-light" />
                    <span className="text-xs font-bold text-ivory">{artist}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Schedule Timeline */}
            <section className="bg-midnight border border-hairline rounded-3xl p-6 sm:p-8 space-y-6">
              <h2 className="text-xl font-display text-ivory">Event Schedule</h2>
              <div className="space-y-4 border-l border-gold/30 pl-6 ml-2">
                {event.schedule.map((item, idx) => (
                  <div key={idx} className="relative space-y-1">
                    <span className="absolute -left-[31px] top-1.5 w-2.5 h-2.5 rounded-full bg-gold ring-4 ring-midnight" />
                    <span className="text-xs font-mono font-bold text-gold-light">
                      {item.time}
                    </span>
                    <p className="text-xs text-mist font-medium">
                      {item.activity}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* FAQs Accordion */}
            <section className="space-y-4">
              <h2 className="text-xl font-display text-ivory">Event Inquiries &amp; FAQ</h2>
              <EventFaqAccordion faqs={event.faq} />
            </section>
          </div>

          {/* Right Column: Ticket Privileges & Venue Card */}
          <div className="lg:col-span-5 space-y-8 lg:sticky lg:top-28">
            {/* Member Ticket Box */}
            <div className="bg-plum/60 border border-gold/40 rounded-3xl p-6 sm:p-8 space-y-6 shadow-xl">
              <div className="space-y-2">
                <span className="label-caps text-gold-light">Member Privileges</span>
                <h3 className="text-2xl font-display text-ivory">Priority Admission</h3>
                <p className="text-xs text-mist leading-relaxed">
                  DesiConnections members enjoy dedicated door lanes, mezzanine bar passes, and artist lounge invitations.
                </p>
              </div>

              <div className="space-y-3 pt-2 border-t border-hairline text-xs text-mist">
                <div className="flex items-center gap-2 text-ivory">
                  <ShieldCheck className="w-4 h-4 text-gold shrink-0" />
                  <span>Express entry line with digital member card</span>
                </div>
                <div className="flex items-center gap-2 text-ivory">
                  <Ticket className="w-4 h-4 text-gold shrink-0" />
                  <span>Guaranteed table allocation for Club Members</span>
                </div>
              </div>

              <div className="pt-4">
                <Button
                  variant="primary"
                  size="md"
                  href={ctaHref}
                  external={isExternal}
                  className="w-full shadow-lg"
                >
                  <span>{ctaLabel}</span>
                  {isExternal && <ExternalLink className="w-3.5 h-3.5 ml-1" />}
                </Button>
                <p className="text-[10px] text-muted text-center mt-2.5">
                  No booking fees for verified club members.
                </p>
              </div>
            </div>

            {/* Venue Map Placeholder */}
            <div className="bg-midnight border border-hairline rounded-3xl p-6 space-y-4">
              <div className="space-y-1">
                <span className="label-caps text-muted">Venue &amp; Location</span>
                <h4 className="text-base font-display text-ivory">{event.venue}</h4>
                <p className="text-xs text-mist">{event.city}, United States</p>
              </div>

              <div className="h-44 rounded-2xl bg-gradient-to-br from-plum to-midnight border border-hairline flex flex-col items-center justify-center text-center p-4 relative overflow-hidden">
                <MapPin className="w-6 h-6 text-gold-light mb-1" />
                <span className="text-xs font-semibold text-ivory">Interactive Map Area</span>
                <span className="text-[11px] text-muted">Transport &bull; Parking &bull; Valet</span>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Sticky Mobile Ticket Bar */}
      <StickyMobileTicketBar
        title={event.title}
        priceFrom={event.priceFrom}
        ticketUrl={event.ticketUrl}
        isSoldOut={isSoldOut}
        isPast={isPast}
        slug={event.slug}
      />
    </div>
  );
}
