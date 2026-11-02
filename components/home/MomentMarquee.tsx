import { Marquee } from "@/components/ui/Marquee";

const marqueeMoments = [
  { city: "New York", title: "Bollywood Gala Premiere", venue: "Radio City Music Hall" },
  { city: "San Francisco", title: "Arijit Singh Symphony Tour", venue: "SAP Center" },
  { city: "Los Angeles", title: "Diljit Dosanjh VIP Green Room", venue: "Kia Forum" },
  { city: "Chicago", title: "Founders & Creators Mixer", venue: "The Geraghty" },
  { city: "Dallas", title: "Retro Bollywood Vinyl Social", venue: "Toyota Music Factory" },
  { city: "New Jersey", title: "Diwali Royale Charity Banquet", venue: "The Legacy Castle" },
];

export function MomentMarquee() {
  return (
    <section className="py-4 border-y border-white/10 bg-[#0E0824] overflow-hidden">
      <Marquee speed={32}>
        {marqueeMoments.map((moment, idx) => (
          <div
            key={idx}
            className="flex items-center gap-3 px-5 py-2 rounded-full bg-[#130D2E] border border-white/10 hover:border-[#EC008C]/50 transition-colors whitespace-nowrap cursor-default mx-2"
          >
            <span className="w-2 h-2 rounded-full bg-[#FF2A85] animate-pulse" />
            <span className="text-xs font-extrabold uppercase tracking-widest text-white font-display">
              {moment.city}
            </span>
            <span className="text-white/30 text-xs">&bull;</span>
            <span className="text-xs text-ivory font-semibold">{moment.title}</span>
            <span className="text-[10px] text-[#00E5FF] font-mono px-2 py-0.5 rounded bg-white/5 border border-white/10">
              {moment.venue}
            </span>
          </div>
        ))}
      </Marquee>
    </section>
  );
}
