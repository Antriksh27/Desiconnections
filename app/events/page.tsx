import { Metadata } from "next";
import { eventsContent } from "@/content/events";
import { EventDirectory } from "@/components/events/EventDirectory";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Past Concerts & Showcase Archive | The Desi Connections",
  description:
    "Explore our archive of past concerts, theatrical productions, and cultural galas hosted in Columbus, Ohio. Active members receive 2 complimentary tickets each year for sponsored shows.",
};

export default function EventsPage() {
  return (
    <div className="py-12 sm:py-20 px-6 sm:px-12 max-w-[1280px] mx-auto space-y-12">
      <SectionHeading
        eyebrow="Showcase Archive"
        titleBefore="Past Concerts &amp;"
        titleItalic="Live Productions"
        description="Explore past landmark tours, symphony concerts, and cultural gatherings hosted in Columbus, Ohio and sponsored tour cities."
      />

      <EventDirectory initialEvents={eventsContent} />
    </div>
  );
}
