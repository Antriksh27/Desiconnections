import { Metadata } from "next";
import { starsContent } from "@/content/stars";
import { StarDirectory } from "@/components/stars/StarDirectory";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Touring Artists & Cultural Talent | The Desi Connections",
  description:
    "Discover legendary vocalists, actors, and keynote leaders headlining The Desi Connections tours, including Shreya Ghoshal, Kumar Sanu, Anupam Kher, and Udit Narayan.",
};

export default function StarsPage() {
  return (
    <div className="py-12 sm:py-20 px-6 sm:px-12 max-w-[1280px] mx-auto space-y-12">
      <SectionHeading
        eyebrow="Talent Roster"
        titleBefore="Headline Artists"
        titleItalic="&amp; Cultural"
        titleAfter="Legends"
        description="Exclusive meet-and-greets, soundcheck walkthroughs, and VIP lounge access for The Desi Connections community members."
      />

      <StarDirectory initialStars={starsContent} />
    </div>
  );
}
