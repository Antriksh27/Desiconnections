import { Button } from "@/components/ui/Button";

interface StickyMobileTicketBarProps {
  title: string;
  priceFrom?: string;
  ticketUrl?: string;
  isSoldOut: boolean;
  isPast?: boolean;
  slug: string;
}

export function StickyMobileTicketBar({
  title,
  priceFrom,
  ticketUrl,
  isSoldOut,
  isPast,
  slug,
}: StickyMobileTicketBarProps) {
  let ctaLabel = "Get tickets";
  let ctaHref = ticketUrl || `/join?event=${slug}`;
  let isExternal = Boolean(ticketUrl && !isSoldOut && !isPast);

  if (isPast) {
    ctaLabel = "Join club";
    ctaHref = "/join";
    isExternal = false;
  } else if (isSoldOut) {
    ctaLabel = "Join the waitlist";
    ctaHref = `/join?event=${slug}`;
    isExternal = false;
  } else if (!ticketUrl) {
    ctaLabel = "Enquire";
    ctaHref = `/join?event=${slug}`;
    isExternal = false;
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-ink/95 backdrop-blur-xl border-t border-hairline py-3 px-6 md:hidden shadow-[0_-8px_30px_rgba(0,0,0,0.8)]">
      <div className="flex items-center justify-between gap-4">
        <div className="truncate">
          <span className="text-[10px] uppercase font-bold tracking-wider text-muted block">
            {isPast ? "Past Showcase" : isSoldOut ? "Sold Out" : priceFrom ? `From ${priceFrom}` : "Member Access"}
          </span>
          <span className="text-xs font-display font-semibold text-ivory truncate block">
            {title}
          </span>
        </div>
        <Button
          variant="primary"
          size="sm"
          href={ctaHref}
          external={isExternal}
          className="shrink-0 whitespace-nowrap min-h-[44px]"
        >
          {ctaLabel}
        </Button>
      </div>
    </div>
  );
}
