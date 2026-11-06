import { Marquee } from "@/components/ui/Marquee";

const marqueeMoments = [
  { city: "Columbus, OH", title: "Shreya Ghoshal: The Unstoppable Tour", venue: "Nationwide Arena" },
  { city: "Columbus, OH", title: "Kumar Sanu Live: Golden 90s Era", venue: "Southern Theatre" },
  { city: "Columbus, OH", title: "Udit Narayan Live in Symphony", venue: "Palace Theatre" },
  { city: "Columbus, OH", title: "Anupam Kher in Mera Woh Matlab Nahi Tha", venue: "Davidson Theatre" },
  { city: "Columbus, OH", title: "Diaspora Business Forum with Vivek Ramaswamy", venue: "The Exchange" },
  { city: "Columbus, OH", title: "Desi Nights Gala with DJ Yangkee", venue: "Grand Ballroom" },
  { city: "USA & Canada", title: "Free Business & Property Marketplace", venue: "North America Network" },
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
