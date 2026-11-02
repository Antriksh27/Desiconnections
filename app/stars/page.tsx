import { Metadata } from "next";
import { starsContent } from "@/content/stars";
import { StarDirectory } from "@/components/stars/StarDirectory";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Bollywood Stars & Talent",
  description:
    "Meet confirmed subcontinent playback legends, producers, and performers headlining DesiConnections tours across the United States.",
};

export default function StarsPage() {
  return (
    <div className="py-12 sm:py-20 px-6 sm:px-12 max-w-[1280px] mx-auto space-y-12">
      <SectionHeading
        eyebrow="Talent Roster"
        titleBefore="Bollywood"
        titleItalic="Headliners"
        titleAfter="&amp; Guests"
        description="Exclusive meet-and-greets, soundcheck walkthroughs, and VIP lounge access for DesiConnections members."
      />

      <StarDirectory initialStars={starsContent} />
    </div>
  );
}
