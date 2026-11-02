# AGENTS.md: DesiConnections

Standing rules for every agent working in this repo. Read DESIGN.md before touching any UI.

## Scope
Phase 1 is a front-facing marketing site only. Do NOT build: event booking, checkout, payments, user accounts, authentication, member login, dashboards, or a database. If a task seems to need one of these, stop and ask.

Where interaction is needed, use only:
- External links (ticketing pages) stored in content files
- One lead form (invite request, enquiry, newsletter) handled by a server action that emails the team via Resend and optionally posts to a webhook (Google Sheet or CRM)

## Product
DesiConnections is a private-club style site for desi entertainment and networking. Members get three things, in this priority order:
1. Entertainment (events, Bollywood stars, concerts, meet-and-greets)
2. Connections (entrepreneurs, professionals, influencers, like-minded people)
3. Everyday benefits (Switch n Save electricity deals plus other member offers)

Tagline: DesiConnections. Meet. Connect. Celebrate.
Switch n Save is a perk, never the headline. Never mention electricity, bills or savings in the hero, nav highlight or primary CTA.

## Stack
- Next.js (latest stable, App Router), TypeScript strict, React Server Components by default
- Tailwind CSS v4 with tokens from DESIGN.md mapped in `app/globals.css` using `@theme`
- shadcn/ui primitives restyled to DESIGN.md tokens
- Motion (framer-motion) for UI animation, Lenis for smooth scroll, GSAP ScrollTrigger only for the Home pinned section
- Zod + React Hook Form for the lead form, Resend for email
- All content in typed files under `content/` (events, stars, offers, tiers, FAQs). No CMS and no database in phase 1
- Deploy on Vercel

## Code rules
- No `any`. Validate every form input with Zod on the server.
- Components grouped by feature in `components/` (`ui`, `brand`, `home`, `events`, `stars`, `membership`, `deals`).
- Pages are statically generated where possible. Event and star detail pages use `generateStaticParams` from content files.
- Use `next/image`, `next/font`, `next/link`. Every image has alt text.
- Accessibility: semantic landmarks, visible focus ring, 44px tap targets, WCAG AA contrast, `prefers-reduced-motion` respected.
- Performance: LCP under 2.5s on mobile, CLS under 0.05, animate transform and opacity only.
- Lead form: honeypot field, server-side rate limit by IP, no personal data logged. Never commit secrets. Provide `.env.example`.

## Content rules
- No em dashes in any site copy or UI text.
- Copy is warm, short, human. Banned words: unlock, revolutionize, seamless, world-class, elevate.
- Star entries render only when `rightsCleared: true`. Use `ImageSlot` placeholders until real licensed photography exists.
- Switch n Save and any partner offer must show a partner disclosure and terms link. No hard-coded savings figures.

## Workflow
- Planning mode for page-level or multi-file work, Fast mode for small fixes.
- After each task run `pnpm lint`, `pnpm typecheck`, `pnpm build`, then check the page in the browser subagent at 390px and 1440px and attach screenshots.
- Do not change DESIGN.md tokens unless asked. If a token is missing, propose it first.

<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
