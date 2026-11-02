---
version: alpha
name: "DesiConnections"
tagline: "Meet. Connect. Celebrate."
description: >-
  A private-club feel for desi entertainment and networking. Dark, warm, photography-led.
  Gold is the signature, marigold and rani pink are used like stage lighting, and the
  Switch n Save perk zone gets its own quiet teal-green so it reads as a benefit, never the brand.

colors:
  ink: "#0B0710"
  midnight: "#140C1F"
  plum: "#231433"
  plum-soft: "#2E1C42"
  ivory: "#F7F1E8"
  mist: "#CFC6D6"
  muted: "#8E849B"
  gold: "#D9A441"
  gold-light: "#F1D08A"
  gold-deep: "#8A6420"
  marigold: "#FF9F1C"
  rani: "#D6336C"
  volt: "#4FE3B0"
  danger: "#FF5C5C"
  hairline: "rgba(247,241,232,0.12)"
  hairline-strong: "rgba(247,241,232,0.24)"

gradients:
  gala: "linear-gradient(135deg, #D6336C 0%, #FF9F1C 100%)"
  gold-foil: "linear-gradient(120deg, #8A6420 0%, #F1D08A 35%, #D9A441 60%, #8A6420 100%)"
  stage-glow: "radial-gradient(60% 50% at 50% 0%, rgba(214,51,108,0.35) 0%, rgba(11,7,16,0) 70%)"
  scrim: "linear-gradient(180deg, rgba(11,7,16,0) 0%, rgba(11,7,16,0.85) 100%)"

typography:
  display-xl: { fontFamily: "Fraunces", fontSize: "clamp(3.5rem, 9vw, 7.5rem)", fontWeight: 400, lineHeight: 0.98, letterSpacing: "-0.03em" }
  display-lg: { fontFamily: "Fraunces", fontSize: "clamp(2.5rem, 5.5vw, 4.5rem)", fontWeight: 400, lineHeight: 1.02, letterSpacing: "-0.02em" }
  display-md: { fontFamily: "Fraunces", fontSize: "clamp(1.75rem, 3.2vw, 2.75rem)", fontWeight: 400, lineHeight: 1.1 }
  display-italic: { fontFamily: "Fraunces", fontStyle: italic, fontWeight: 300 }
  body-lg: { fontFamily: "Manrope", fontSize: "1.25rem", fontWeight: 400, lineHeight: 1.6 }
  body: { fontFamily: "Manrope", fontSize: "1rem", fontWeight: 400, lineHeight: 1.65 }
  body-sm: { fontFamily: "Manrope", fontSize: "0.875rem", fontWeight: 500, lineHeight: 1.5 }
  label: { fontFamily: "Manrope", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.18em", textTransform: uppercase }
  numeral: { fontFamily: "Fraunces", fontSize: "clamp(3rem, 7vw, 6rem)", fontWeight: 300, fontFeature: "lnum" }

rounded:
  none: 0px
  sm: 8px
  md: 16px
  lg: 28px
  pill: 999px

spacing:
  unit: 8px
  section-y: "clamp(96px, 12vw, 176px)"
  container: "1280px"
  gutter: "clamp(20px, 4vw, 48px)"

components:
  button-primary: { background: "{gradients.gold-foil}", color: "{colors.ink}", rounded: "{rounded.pill}", paddingX: 32px, paddingY: 16px, typography: "{typography.label}" }
  button-ghost: { background: transparent, border: "1px solid {colors.hairline-strong}", color: "{colors.ivory}", rounded: "{rounded.pill}" }
  card-event: { background: "{colors.midnight}", border: "1px solid {colors.hairline}", rounded: "{rounded.lg}" }
  card-star: { rounded: "{rounded.lg}", overlay: "{gradients.scrim}" }
  card-perk: { background: "{colors.plum}", rounded: "{rounded.md}", accent: "{colors.volt}" }
  membership-card: { background: "{gradients.gold-foil}", rounded: "{rounded.lg}", aspectRatio: "1.586" }
  input: { background: "{colors.midnight}", border: "1px solid {colors.hairline-strong}", rounded: "{rounded.md}", focusRing: "2px solid {colors.gold}" }
---

# DesiConnections Design System

## 1. Overview

DesiConnections is a private-club experience for people who love desi entertainment and want better company. The site should feel like walking into a members' lounge after a premiere: dark room, warm light, good faces, a little glitter. It must not feel like a ticketing marketplace, a wedding mandap template, or a utilities comparison site.

**Brand idea:** Where entertainment meets opportunity, friendships become connections, and membership brings everyday benefits.

**Hierarchy of what the brand sells (this order is law):**
1. Entertainment: events, Bollywood stars, concerts, meet-and-greets (largest visual weight)
2. Connections: the people in the room (second)
3. Everyday benefits: Switch n Save and partner offers (smallest, always a "plus", never a headline)

**Personality:** confident, warm, a little cheeky, never loud. Think private members' club with a dhol in the next room.

**Reference pattern (researched):** Soho House's marketing site lets photography carry all the color and keeps UI chrome neutral, pairs one editorial serif with one clean sans, and uses a single pill CTA shape. We borrow that discipline but swap the cool monochrome for a warm plum-black base with gold and festival color accents, so it reads as desi and nightlife rather than heritage hospitality.

## Scope: phase 1 is front-facing only

This phase is a marketing site. There is no event booking, no payments, no sign-in, no member login and no dashboard. Anything that would need those becomes one of two things: a link out to an external ticketing page, or a simple enquiry or invite form. Keep the visual language ready for a later member area, but build none of it now.

## 2. Colors

| Role | Token | Use |
|---|---|---|
| Page base | `ink` #0B0710 | Default background |
| Raised surface | `midnight` #140C1F, `plum` #231433 | Cards, sections, form panels |
| Primary text | `ivory` #F7F1E8 | Headlines, body on dark |
| Secondary text | `mist` #CFC6D6, `muted` #8E849B | Captions, meta (muted only for 14px+ non-essential text) |
| Signature | `gold` #D9A441, `gold-light` #F1D08A | CTAs, key numerals, hairline accents, membership card |
| Stage light | `rani` #D6336C, `marigold` #FF9F1C | Glows, gradient highlights, event category tags. Max 10% of any viewport |
| Perk zone | `volt` #4FE3B0 | ONLY inside Deals and perk cards. Signals "benefit" |
| Lines | `hairline` / `hairline-strong` | 1px dividers and card borders |

Rules:
- Photography is the main color. UI stays in ink, ivory and gold.
- Gradients `gala` and `gold-foil` are for one hero element per screen at most.
- `volt` never appears in the hero, the nav, or the primary CTA.
- All text pairs meet WCAG AA on their surface. Ivory on ink and gold on ink pass comfortably; never put gold text on plum below 18px.

## 3. Typography

- **Display: Fraunces** (variable, use the optical size axis). Headlines, big numerals, pull quotes. Italic weight 300 for one emphasized word per headline, for example "Meet. *Connect.* Celebrate."
- **Body and UI: Manrope.** Navigation, forms, buttons, paragraphs.
- Load both with `next/font/google`, `display: swap`, subset latin. Add `Noto Serif Devanagari` and `Noto Sans Devanagari` fallbacks only if Hindi content is added later.
- Labels are uppercase with wide tracking. Never uppercase anything longer than five words.
- Headlines max 12 words. Body line length 60 to 72 characters.

## 4. Layout

- 12-column grid, container 1280px, fluid gutters. Hero and gallery sections break out full-bleed.
- 8px spacing base. Section vertical rhythm uses `section-y`.
- Mobile first. Design at 390px, then 768, 1024, 1440. Thumb-reachable primary actions; sticky bottom "Get tickets" bar on event pages for mobile.
- Asymmetry is welcome: overlap images over text blocks, offset cards on a staggered 2-column rhythm. Avoid three equal boxes in a row except on the pillars section where they are deliberately unequal in weight.
- Navigation: transparent over hero, turns to blurred ink (`backdrop-blur`, 80% ink) after 24px scroll. Links: Events, Bollywood Stars, Membership, Deals, About. "Join Now" is a gold pill at far right. "Deals" is styled the same as the other links, never highlighted.

## 5. Elevation and depth

Depth comes from light, not shadow.
- Cards: 1px hairline border plus a soft inner top highlight (`inset 0 1px 0 rgba(247,241,232,0.06)`).
- Hover: border moves to `gold` at 40% opacity, a faint `stage-glow` blooms behind the card, image scales 1.04.
- Modals and drawers: `plum` surface, `backdrop-blur-xl`, ink 60% overlay.
- Optional grain overlay at 4% opacity over hero and section backgrounds for a printed-poster feel. Disable for reduced-motion and low-power devices.

## 6. Shapes

- Buttons and chips: pill.
- Cards: 28px radius for media cards, 16px for dense UI (forms, perk cards), 8px for small inputs inside cards.
- Images: share the card radius. Occasional arch-top crop (`border-radius: 999px 999px 28px 28px`) on star portraits as a quiet nod to jharokha arches. Use at most once per section.
- Decorative motifs: fine gold line ornaments and a subtle jaali pattern at 3 to 5% opacity as section texture. No paisley clip art, no stock mandalas.

## 7. Components

**Navbar:** wordmark left, links center, Join Now pill right. Mobile: full-screen ink sheet with large Fraunces links and staggered reveal.

**Wordmark:** "DesiConnections" set in Fraunces, with the "&" style ligature avoided. Two-tone: "Desi" in ivory, "Connections" in gold-light italic. A small gold dot after it is optional.

**Hero:** full-bleed looping video (muted, 8 to 12s, poster fallback), `scrim` gradient, eyebrow label "The club for desi entertainment and connections", headline `display-xl` "Meet. Connect. Celebrate.", one sentence of support copy, two buttons (Join the club, See upcoming events). A thin "next event" ticker anchors the bottom edge.

**Event card:** poster image (4:5), date block in `numeral` style, city, category tag, price from, status chip (Selling fast, Few left, Sold out, Members first). Whole card is a link. Hover lifts and reveals "Get tickets".

**Star card:** tall portrait with arch crop, name in `display-md`, what they are doing ("Live in concert", "Meet and greet"), event date. Only confirmed talent, see content rules.

**Pillar block:** three panels with unequal weight, Entertainment largest, Connections medium, Everyday benefits smallest and lowest. Each has an icon, a one-line promise, and a text link.

**Perk card (Switch n Save):** `plum` surface, `volt` hairline accent, small icon, plain-language promise, "Members only" chip, disclosure link. Quiet, no flashing, no countdown timers.

**Membership tier card:** three tiers side by side, middle highlighted with a gold border and "Most popular" chip. Feature rows use gold ticks. Entertainment and networking perks listed first, everyday benefits last.

**Membership card (showpiece):** a decorative credit-card-ratio card with a `gold-foil` face, sample name in Fraunces and a sample member number. Used on the Membership and Join pages as the visual hook. No real data, no QR. Subtle pointer-tilt on desktop.

**Forms:** floating labels, 56px tall inputs, inline validation, gold focus ring. Every form fits on one screen: name, email, phone, city, plus a few optional fields. Success state is a warm full-card message, no redirect.

**Toasts, empty states:** short, human copy. Example empty state: "Nothing here yet. The next lineup drops soon."

**Footer:** large wordmark, link columns, social icons, newsletter, legal. Include a small line: "Switch n Save offers are provided by partners. Terms apply."

## 8. Motion

- Library: Motion (Framer Motion) for component and route transitions, Lenis for smooth scroll, GSAP ScrollTrigger only for the one pinned storytelling section on Home.
- Easing: `cubic-bezier(0.22, 1, 0.36, 1)`. Durations 400 to 700ms for reveals, 200ms for hover.
- Reveal pattern: text lines rise 24px and fade, 60ms stagger. Images unmask with a clip-path wipe.
- Hero headline: word-by-word entrance, "Connect." italic lands last with a gold underline draw.
- Marquee of past event moments, slow, pauses on hover.
- Cursor: soft gold ring follower on desktop only, hides on touch.
- Respect `prefers-reduced-motion`: replace everything with simple fades, stop video autoplay, stop marquee.
- Performance budget: LCP under 2.5s on 4G mobile, CLS under 0.05, total JS on Home under 180KB gzipped excluding the hero video. Animate transform and opacity only.

## 9. Imagery and content rules

- Photography direction: warm tungsten and stage light, candid crowd energy, close faces, laughter, hands in the air, sparkle on sleeves. Shot at eye level, shallow depth of field. Avoid stock-photo handshakes.
- Real photography goes in `/public/images/`. Until supplied, use the `ImageSlot` component: art-directed gradient plus label "Image: crowd at night, warm light". Never ship random stock images of recognizable people.
- **Celebrity and artist likeness:** show a star on the site only when there is a signed agreement or written approval. No implied endorsement. Stars pages must be driven by a `status` field (`confirmed`, `announced`, `past`) and render only those that are cleared. Add an internal `rightsCleared: boolean` guard.
- Sponsor and partner logos (including Switch n Save) only appear with permission, in monochrome ivory at 60% opacity.

## 10. Copy voice

Warm, quick, a bit playful. Short sentences. Talk like a well-connected friend, not a brochure.

- Tagline: **DesiConnections. Meet. Connect. Celebrate.**
- Central message: Where entertainment meets opportunity, friendships become connections, and membership brings everyday benefits.
- Entertainment line: "Front-row nights. Bollywood up close."
- Connections line: "Founders, creators, doctors, dancers. Your kind of crowd."
- Benefits line: "And a few everyday wins, because membership should pay you back."
- Primary CTA: "Join the club". Secondary: "See what's on".
- Avoid: "unlock", "revolutionize", "seamless", "world-class", "elevate your experience". Avoid exclamation marks except on sold-out and confirmation moments.
- No em dashes in any site copy.

## 11. Page blueprints

**Home** (order matters)
1. Hero (see Components)
2. Moment marquee: past event photos, city names
3. Three pillars (Entertainment largest, Connections, Everyday benefits smallest)
4. Upcoming events carousel, 4 to 6 cards, "See all events"
5. Bollywood Stars spotlight, horizontal scroll, only cleared talent
6. The people: "Who you will meet" with profession chips (Founders, Creators, Doctors, Lawyers, Artists, Investors), three member quotes, attendee-count numerals
7. Membership teaser: three tier cards, "Compare plans"
8. Everyday benefits strip: one row, Switch n Save card plus two other partner offer cards, one-third viewport width at most
9. Final CTA with stage-glow, email capture
10. Footer

**Events:** filter bar (city, month, type), grid and list toggle, featured event banner. **Event detail:** poster hero, key facts, lineup, schedule, venue, ticket info, FAQ, sticky "Get tickets" bar on mobile. The Get tickets button opens the external ticketing link from content when one exists. If there is none yet it becomes "Enquire" and opens the Join form with the event prefilled. No checkout on this site.

**Bollywood Stars:** editorial grid, filter by upcoming or past, star detail with bio, linked event, meet-and-greet callout.

**Membership:** hero with the showpiece card, tier overview (what each level will include), "what you get" in the three-pillar order, FAQ, "Request your invite" CTA. No pricing checkout and no login.

**Deals:** intro "Everyday benefits for members", Switch n Save panel (how it works in three steps, eligibility, partner disclosure, interest form that only collects contact details), other member offers grid, legal block.

**About:** story, what DesiConnections stands for, values, team, community guidelines, contact.

**Join Now (request your invite):** one-screen form: name, email, phone, city, profession, interests chips, preferred plan, "How did you hear about us". Success state: "You're on the list. We'll be in touch soon."

## 12. Do and Don't

Do
- Let photography and light carry the color.
- Keep Entertainment and Connections first in every list, card order and nav emphasis.
- Show real social proof (attendee counts, city names) once supplied.
- Make getting tickets one tap from any event card.
- Add clear partner and terms disclosure wherever Switch n Save appears.

Don't
- Don't use electricity, savings, bills or percentages in the hero, the tagline or the primary CTA.
- Don't promise specific savings numbers. Published savings from switching vary widely by household and market, so claims must come from the partner and carry their terms.
- Don't use more than one gradient hero element per screen.
- Don't use stock Bollywood clichés (marigold garlands, clip-art mandalas, Comic-style fonts).
- Don't show any star without cleared rights.
- Don't use pure #000 or pure #FFF. Use ink and ivory.
