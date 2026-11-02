# DesiConnections: Production Launch Readiness Guide

This document outlines the deployment configuration, environment variables, security headers, and pre-launch checklists for deploying DesiConnections to Vercel.

---

## 1. Environment Variables Checklist

Set these variables in the **Vercel Project Settings &rarr; Environment Variables**:

| Variable Name | Environment | Purpose | Required? | Example Value |
| :--- | :--- | :--- | :--- | :--- |
| `RESEND_API_KEY` | Production / Preview | Sends lead inquiry notification and user auto-reply | **Yes** | `re_123456789...` |
| `TEAM_NOTIFICATION_EMAIL` | Production / Preview | Recipient inbox for member applications & enquiries | **Yes** | `concierge@desiconnections.club` |
| `LEADS_WEBHOOK_URL` | Production / Preview | Webhook to sync leads to Google Sheets / CRM | Optional | `https://script.google.com/macros/s/...` |
| `NEXT_PUBLIC_ANALYTICS_DOMAIN` | Production | Privacy-first analytics domain (Plausible / PostHog) | Optional | `desiconnections.club` |

> [!NOTE]
> In local development, if `RESEND_API_KEY` is not provided, the application simulates dispatch gracefully and logs payload details without crashing.

---

## 2. Security Headers & CSP Configuration

Configured in `next.config.ts` for all routes (`/:path*`):

- **Content-Security-Policy (CSP)**: Restricts scripts, styles, fonts, frames, and connections strictly to trusted endpoints (`self`, Resend, Plausible, PostHog, Google Fonts).
- **Strict-Transport-Security (HSTS)**: `max-age=63072000; includeSubDomains; preload` enforces SSL across all subdomains.
- **X-Frame-Options**: `DENY` prevents clickjacking and iframe embedding.
- **X-Content-Type-Options**: `nosniff` prevents MIME-type sniffing.
- **Referrer-Policy**: `strict-origin-when-cross-origin` protects user privacy when navigating out to ticketing partners.
- **Permissions-Policy**: Disables unnecessary hardware APIs (`camera=(), microphone=(), geolocation=()`).

---

## 3. Custom Domain & DNS Setup

Primary domain: `desiconnections.club`

Configure the following records in your DNS provider (e.g. Cloudflare, Namecheap, GoDaddy):

| Record Type | Name | Content / Target | Proxy Status |
| :--- | :--- | :--- | :--- |
| **A** | `@` | `76.76.21.21` | DNS Only (if Cloudflare) |
| **CNAME** | `www` | `cname.vercel-dns.com.` | DNS Only |

Ensure redirect is configured from `www.desiconnections.club` &rarr; `https://desiconnections.club`.

---

## 4. Pre-Launch Verification Checklist

### 4.1 Brand Law & Hierarchy
- [x] Entertainment dominates hero, primary navigation, and card counts.
- [x] Curated Connections represents the secondary pillar.
- [x] Everyday benefits (*Switch n Save*) appears strictly last and is never featured as the main headline.
- [x] No hardcoded savings figures anywhere on the site (no "$X saved" or percentage promises).
- [x] Mandatory partner disclosure appears on footer and deals pages.

### 4.2 Content & Likeness Clearances
- [x] Zero em dashes across all copy and UI text.
- [x] Banned words strictly avoided (*unlock, revolutionize, seamless, world-class, elevate*).
- [x] Only cleared talent (`rightsCleared: true`) render on public routes, sitemaps, and search engines.
- [x] Legal pages ([/privacy](file:///privacy), [/terms](file:///terms), [/community-guidelines](file:///community-guidelines)) marked with prominent `REVIEW WITH LAWYER` notices.

### 4.3 Technical & Performance Guardrails
- [x] 100% test pass rate on Vitest suite (`pnpm test`).
- [x] Zero TypeScript errors (`pnpm typecheck`).
- [x] Zero ESLint warnings (`pnpm lint`).
- [x] 28/28 routes compile and prerender statically (`pnpm build`).
- [x] All interactive buttons have minimum 44px tap targets for mobile usability.
- [x] Animate transform and opacity only (zero cumulative layout shift).
- [x] `prefers-reduced-motion` respected across Lenis, GrainOverlay, CursorFollower, and Motion components.
