# DesiConnections: Antigravity Prompt List (Front-Facing Site)

Scope: marketing site only. No booking, no auth, no member login, no database.
Run in order. DESIGN.md and AGENTS.md must be in the repo root first.

**Setup**
1. Create an empty folder `desiconnections` and open it in Antigravity.
2. Drop `DESIGN.md` and `AGENTS.md` into the root.
3. Mode guide: **P** = Planning mode, **F** = Fast mode. Run prompts 5 to 9 in parallel in Manager view once 1 to 4 are done.
4. After every prompt: check the review artifact and the 390px and 1440px screenshots, then commit.

---

## Phase A: Foundation

### Prompt 1 (P): Scaffold and design tokens
```
Read DESIGN.md and AGENTS.md fully. Scaffold a Next.js App Router project in this folder with TypeScript strict, Tailwind v4, shadcn/ui, ESLint and pnpm.

1. Map every color, gradient, radius, spacing and typography token from the DESIGN.md front matter into app/globals.css using @theme and CSS variables. Dark theme only.
2. Load Fraunces and Manrope with next/font/google, exposed as --font-display and --font-body.
3. Create site.config.ts: brandName, tagline, nav links, social links, contact email, WhatsApp number placeholder, leadsWebhookUrl (env).
4. Create a content/ folder with empty typed modules: home, events, stars, membership, deals, about, faqs.
5. Build a /styleguide route showing every token, type style, button, input and card variant.

Build no real pages yet. Finish with /styleguide screenshots at 390px and 1440px.
```
**Done when:** /styleguide shows ink background, Fraunces headlines, gold pill buttons, and `pnpm build` passes.

### Prompt 2 (P): Core UI kit
```
Using DESIGN.md section 7, build the component kit in components/ui and components/brand:
- Wordmark (Desi in ivory, Connections in gold-light italic)
- Button (gold-foil pill, ghost pill, text link with animated underline)
- Chip, StatusChip (Selling fast, Few left, Sold out, Members first)
- Input, Textarea, Select, Checkbox, Switch with floating labels and gold focus ring
- Card base with hairline border, hover glow, image zoom
- ImageSlot: art-directed gradient placeholder with overlay label, props for aspect ratio and tone (crowd, portrait, stage, venue)
- SectionHeading (eyebrow label + display title with one italic word)
- Marquee (pauses on hover, static under reduced motion)
- Reveal wrapper for text line rise and image clip-path unmask using Motion
- MembershipShowpieceCard: decorative gold-foil card with sample name and number, pointer tilt on desktop, no real data
Add all to /styleguide. Keep components server-safe unless they need client state.
```

### Prompt 3 (P): Layout shell
```
Build the global layout:
- Navbar: transparent over hero, blurred ink after 24px scroll. Links: Events, Bollywood Stars, Membership, Deals, About, and a gold "Join Now" pill linking to /join. "Deals" must be styled exactly like the other links.
- Mobile menu: full-screen ink sheet, large Fraunces links, staggered reveal, focus trap, ESC closes.
- Footer: large wordmark, link columns, social icons, newsletter field, legal links, and the line "Switch n Save offers are provided by partners. Terms apply."
- Lenis smooth scroll provider, disabled under prefers-reduced-motion.
- Grain overlay component (4% opacity, off under reduced motion).
- Page transition fade with Motion.
- Metadata base: title template "%s | DesiConnections", OpenGraph defaults, favicon placeholder, sitemap and robots.
Verify keyboard navigation and screen reader labels.
```

### Prompt 4 (P): Content layer and lead capture
```
Create the typed content layer and the only interactive backend piece.

Content (content/*.ts, fully typed with Zod schemas):
- events: slug, title, date, city, venue, category, status (selling-fast | few-left | sold-out | announced | past), priceFrom (string, optional), ticketUrl (optional external link), lineup[], schedule[], faq[], image slot tone
- stars: name, slug, role, bio, status (confirmed | announced | past), rightsCleared (boolean), linkedEventSlug
- offers: partner, slug, title, summary, terms link, disclosure text
- tiers: name, tagline, perks[] ordered entertainment first, then connections, then everyday benefits
Seed realistic placeholder content: 6 events across 3 cities, 8 stars (4 with rightsCleared false), 3 tiers (Guest Pass, Club Member, Inner Circle), 3 offers including Switch n Save. Mark every placeholder with a TODO comment.

Lead capture:
- One server action submitLead(payload) used by Join, Deals interest, Contact and newsletter forms. Zod validation, honeypot field, simple IP rate limit.
- Send a team notification and a warm auto-reply via Resend using React Email templates styled to DESIGN.md.
- If LEADS_WEBHOOK_URL is set, also POST the payload there (Google Sheet or CRM).
- No database. Add .env.example. Unit-test the validation and the honeypot.
```

---

## Phase B: Pages (run in parallel in Manager view)

### Prompt 5 (P): Home
```
Build the Home page following DESIGN.md section 11 "Home" in order. Content comes from content/.

1. Hero: full-bleed looping video with poster fallback (gradient ImageSlot if no video), scrim, eyebrow "The club for desi entertainment and connections", display-xl headline "Meet. Connect. Celebrate." with "Connect." italic and a gold underline draw, one line of support copy, buttons "Join the club" (to /join) and "See what's on" (to /events), bottom next-event ticker from content/events.
2. Moment marquee of past event photos with city names.
3. Three pillars with UNEQUAL weight: Entertainment largest, Connections medium, Everyday benefits smallest and lowest. Use the copy lines in DESIGN.md section 10.
4. Upcoming events carousel, 4 to 6 cards, link to detail pages.
5. Bollywood Stars spotlight, horizontal scroll, rightsCleared stars only.
6. "Who you will meet": profession chips, three member quotes, count-up numerals (placeholder values flagged in content).
7. Membership teaser with three tier cards and the showpiece card.
8. Everyday benefits strip: one row, Switch n Save card plus two other offers, volt accent only inside cards, at most a third of the viewport height.
9. Final CTA with stage-glow and an email capture using submitLead.
Use GSAP ScrollTrigger for exactly one pinned moment (pillars, desktop only). Everything else uses Motion. Respect reduced motion. Report Lighthouse LCP and CLS.
```
**Done when:** Switch n Save appears only in section 8 and the footer line, and Entertainment clearly dominates.

### Prompt 6 (P): Events
```
Build /events and /events/[slug].

/events: featured banner, filter bar (city, month, type) driven by URL search params, grid and list toggle, empty state "No events match. Try another city.".
/events/[slug] (static params from content): poster hero, key facts (date, venue, doors, age policy), lineup, schedule timeline, venue map placeholder, ticket info, FAQ accordion, mobile sticky "Get tickets" bar.
Get tickets behavior: if ticketUrl exists, open it in a new tab with rel="noopener". If not, show "Enquire" which goes to /join?event=slug and prefills the form. Sold-out events show a "Join the waitlist" button that does the same.
No checkout, no inventory logic. Add Event JSON-LD and OpenGraph image via next/og.
```

### Prompt 7 (P): Bollywood Stars
```
Build /stars and /stars/[slug]. Render only stars where rightsCleared is true. Editorial grid with arch-top portraits (ImageSlot "portrait" until real images exist), filter upcoming vs past, detail page with bio, linked event card, and a meet-and-greet callout that links to the event's Get tickets or Enquire action. Add the small line "Appearances subject to confirmation." If the filtered list is empty show "Lineups drop soon" with email capture. Add a test proving a star with rightsCleared false never appears in any route, sitemap entry or JSON-LD.
```

### Prompt 8 (P): Membership and Deals
```
/membership: hero with the showpiece card, tier overview for Guest Pass, Club Member, Inner Circle (what each will include, no prices unless present in content), highlight the middle tier, "what you get" listed in this order: events, meet-and-greets, networking, then everyday benefits last, FAQ, CTA "Request your invite" to /join?plan=slug.

/deals: heading "Everyday benefits for members". Switch n Save panel with a 3-step "how it works", eligibility notes, partner disclosure block and an interest form (name, email, phone, suburb or postcode, current provider) using submitLead with source "switch-n-save". Show no savings figures. Below it, a grid of other member offers from content. Legal block with terms and privacy links. Volt accent only inside offer cards.
```

### Prompt 9 (P): About, Join, legal, 404
```
Build:
- /about: story, what DesiConnections stands for (the three pillars as values), community guidelines, team placeholders, contact form via submitLead.
- /join: one-screen "Request your invite" form: name, email, phone, city, profession, interest chips, preferred plan (from ?plan=), event (from ?event=), "How did you hear about us". Success state "You're on the list. We'll be in touch soon." with the showpiece card animating in. No account, no payment.
- /privacy, /terms, /community-guidelines from content with placeholder text clearly marked REVIEW WITH LAWYER. Include a short data-use note under every form.
- Custom 404 and error pages in brand voice.
```

---

## Phase C: Polish and launch

### Prompt 10 (F): Motion pass
```
Review every page against DESIGN.md section 8. Add anything missing: hero word-by-word entrance, image clip-path unmask on scroll, card hover glow, desktop-only gold ring cursor, magnetic primary buttons, count-ups. Remove anything animating layout properties. Confirm prefers-reduced-motion disables all of it. Report bundle size changes.
```

### Prompt 11 (F): Accessibility and performance
```
Run Lighthouse and axe on every route at mobile and desktop. Fix all serious and critical issues. Targets: Performance 90+, Accessibility 100, SEO 100, LCP under 2.5s, CLS under 0.05. Check contrast of gold and muted text on every surface. Verify keyboard flows in nav, filters and forms. Output a short before and after report.
```

### Prompt 12 (F): SEO and analytics
```
Add per-page metadata, JSON-LD (Organization, Event, BreadcrumbList), sitemap, robots and canonical URLs. Add privacy-friendly analytics (Plausible or PostHog) behind a consent banner styled to the design system. Track CTA clicks: Join the club, Get tickets, Enquire, Switch n Save interest.
```

### Prompt 13 (F): QA with the browser subagent
```
Walk these journeys at 390px and 1440px with screenshots: Home to Events to event detail to Get tickets; Home to Join form submit; Membership to Join with plan prefilled; Deals interest form; Stars list and detail. Log every visual bug against DESIGN.md (spacing, token misuse, contrast, overflow). Fix all, rerun, and produce a final QA artifact.
```

### Prompt 14 (F): Deploy readiness
```
Prepare for Vercel: environment variable checklist (RESEND_API_KEY, LEADS_WEBHOOK_URL, analytics key), image remote patterns, security headers (CSP, HSTS, Referrer-Policy), custom domain notes, and a pre-launch checklist in docs/LAUNCH.md. Do not deploy.
```

---

## Reusable fix prompts

**More premium**
```
Audit this page against DESIGN.md. Reduce visual noise, add whitespace, remove anything not earning its place, and make photography carry the color. Show before and after screenshots.
```

**Rebalance hierarchy**
```
Check this page for brand hierarchy. Entertainment dominates, Connections is second, Everyday benefits is last and smallest. If Switch n Save or savings language is more prominent than events or networking, demote it and explain what changed.
```

**Copy humanizer**
```
Rewrite all visible copy on this page to sound like a warm, well-connected friend. Short sentences, no em dashes, none of the banned words in AGENTS.md. Keep the meaning, cut filler.
```

**Mobile fix**
```
Open this page at 390px and 360px in the browser subagent. Fix overflow, tap targets under 44px, lines over 72 characters, and anything hidden behind the sticky bar. Show screenshots.
```
