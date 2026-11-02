import { notFound } from "next/navigation";
import Link from "next/link";
import { Metadata } from "next";
import { ArrowLeft, Sparkles, Calendar, MapPin, ArrowRight, ShieldCheck } from "lucide-react";
import { starsContent } from "@/content/stars";
import { eventsContent } from "@/content/events";
import { ImageSlot } from "@/components/ui/ImageSlot";
import { Button } from "@/components/ui/Button";

interface StarDetailPageProps {
  params: Promise<{ slug: string }>;
}

// CRITICAL: Generate static params ONLY for talent with cleared rights
export async function generateStaticParams() {
  return starsContent
    .filter((star) => star.rightsCleared)
    .map((star) => ({
      slug: star.slug,
    }));
}

export async function generateMetadata({
  params,
}: StarDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const star = starsContent.find((s) => s.slug === slug);

  // If star is uncleared, do not leak metadata
  if (!star || !star.rightsCleared) {
    return { title: "Star Not Found" };
  }

  return {
    title: `${star.name} | Bollywood Stars`,
    description: `${star.name} (${star.role}) on tour with DesiConnections across the United States. Private meet-and-greets and VIP lounges for club members.`,
    openGraph: {
      title: `${star.name} | DesiConnections`,
      description: `${star.role}. Confirmed appearance with DesiConnections.`,
    },
  };
}

export default async function StarDetailPage({ params }: StarDetailPageProps) {
  const { slug } = await params;
  const star = starsContent.find((s) => s.slug === slug);

  // STRICT RULE: If star is missing or uncleared, return 404 immediately
  if (!star || !star.rightsCleared) {
    notFound();
  }

  // Find linked event if one exists
  const linkedEvent = star.linkedEventSlug
    ? eventsContent.find((e) => e.slug === star.linkedEventSlug)
    : null;

  // Person JSON-LD schema
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: star.name,
    jobTitle: star.role,
    description: star.bio,
    url: `https://desiconnections.club/stars/${star.slug}`,
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
        name: "Bollywood Stars",
        item: "https://desiconnections.club/stars",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: star.name,
        item: `https://desiconnections.club/stars/${star.slug}`,
      },
    ],
  };

  return (
    <div className="pb-28">
      {/* Person and Breadcrumb JSON-LD Scripts */}
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
          href="/stars"
          className="text-xs uppercase tracking-widest text-mist hover:text-gold transition-colors inline-flex items-center gap-1.5"
        >
          <ArrowLeft className="w-3.5 h-3.5" /> Back to all talent
        </Link>
      </div>

      <main className="max-w-[1280px] mx-auto px-6 sm:px-12 space-y-16">
        {/* Profile Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Arch-Top Portrait (5 cols) */}
          <div className="lg:col-span-5">
            <div className="bg-midnight border border-hairline rounded-[36px] p-4 shadow-2xl">
              <ImageSlot
                src={star.imageUrl}
                alt={star.name}
                tone="portrait"
                aspectRatio="portrait"
                archTop
                label={`Portrait: ${star.name}`}
                className="shadow-inner"
              >
                <div className="inline-flex items-center gap-1 text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-gold/20 text-gold-light border border-gold/40">
                  <Sparkles className="w-3 h-3 fill-gold-light" /> Confirmed Headliner
                </div>
              </ImageSlot>
            </div>
          </div>

          {/* Artist Bio & Profile (7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-3">
              <span className="label-caps text-gold-light tracking-widest text-xs">
                {star.role}
              </span>
              <h1 className="display-lg text-ivory">
                {star.name}
              </h1>
              <p className="body-lg text-mist leading-relaxed pt-2">
                {star.bio}
              </p>
            </div>

            {/* Meet-and-Greet Callout */}
            <div className="bg-gradient-to-br from-plum via-midnight to-ink border border-gold/40 rounded-3xl p-6 sm:p-8 space-y-4 shadow-xl relative overflow-hidden">
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold/15 text-gold-light text-xs font-bold uppercase tracking-wider border border-gold/30">
                  <ShieldCheck className="w-3.5 h-3.5" /> Club Member Privilege
                </span>
                <span className="text-[11px] text-muted uppercase font-mono">
                  Limited Allocation
                </span>
              </div>

              <h2 className="text-xl font-display text-ivory">
                VIP Artist Meet &amp; Greet Lounge
              </h2>

              <p className="text-xs text-mist leading-relaxed">
                Club Members and Inner Circle patrons receive dedicated invitations to the private green room reception and commemorative photo opportunity.
              </p>

              <div className="pt-2">
                {linkedEvent ? (
                  <Button
                    variant="primary"
                    size="md"
                    href={linkedEvent.ticketUrl || `/join?event=${linkedEvent.slug}`}
                    external={Boolean(linkedEvent.ticketUrl && linkedEvent.status !== "sold-out")}
                  >
                    {linkedEvent.status === "sold-out"
                      ? "Join Meet & Greet Waitlist"
                      : linkedEvent.ticketUrl
                      ? "Reserve Meet & Greet Pass"
                      : "Enquire for Lounge Access"}
                  </Button>
                ) : (
                  <Button variant="primary" size="md" href="/join">
                    Request Member Access
                  </Button>
                )}
              </div>
            </div>

            {/* Linked Event Card */}
            {linkedEvent && (
              <div className="space-y-4">
                <span className="label-caps text-muted">Touring With DesiConnections</span>
                <Link
                  href={`/events/${linkedEvent.slug}`}
                  className="group block bg-midnight border border-hairline rounded-3xl p-5 sm:p-6 hover:border-gold/40 transition-all duration-300 hover:shadow-lg"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="space-y-1.5">
                      <div className="flex items-center gap-2 text-xs text-gold-light font-semibold">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>{linkedEvent.date}</span>
                      </div>
                      <h3 className="text-lg font-display text-ivory group-hover:text-gold-light transition-colors">
                        {linkedEvent.title}
                      </h3>
                      <div className="flex items-center gap-2 text-xs text-mist">
                        <MapPin className="w-3.5 h-3.5 text-muted" />
                        <span>{linkedEvent.venue}</span>
                        <span>&bull;</span>
                        <span className="text-gold-light font-medium">{linkedEvent.city}</span>
                      </div>
                    </div>

                    <span className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-gold group-hover:translate-x-1 transition-transform self-start sm:self-auto">
                      <span>View Tour Details</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </Link>
              </div>
            )}

            {/* Mandatory Disclaimer */}
            <p className="text-[11px] text-muted pt-2">
              Appearances subject to confirmation and touring promoter agreements.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
