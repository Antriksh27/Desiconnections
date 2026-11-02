# DesiConnections

> **Meet. Connect. Celebrate.**
> A private club for premier South Asian entertainment, executive networking, and exclusive member privileges across the United States.

[![Next.js 16](https://img.shields.io/badge/Next.js-16.4.3-black?logo=next.js)](https://nextjs.org/)
[![React 19](https://img.shields.io/badge/React-19.3.0-blue?logo=react)](https://react.dev/)
[![Tailwind CSS v4](https://img.shields.io/badge/Tailwind-v4-38bdf8?logo=tailwindcss)](https://tailwindcss.com/)
[![Deployed on Vercel](https://img.shields.io/badge/Vercel-Deployed-black?logo=vercel)](https://vercel.com/)

---

## Overview

DesiConnections connects members across major US metro hubs (New York, San Francisco, Los Angeles, Chicago, Dallas) with three prioritized privileges:

1. **Entertainment First**: Front-row arena allocations, backstage artist lounges, and private meet-and-greets for touring Bollywood and subcontinent headliners.
2. **Connections Second**: Curated diaspora salons, private founder dinners, and rooftop mixers connecting executives, physicians, creators, and entrepreneurs.
3. **Everyday Benefits**: Quiet member savings through licensed utility partners (Switch n Save) and curated fine dining privileges.

---

## Tech Stack

- **Framework**: Next.js 16.4.3 (App Router, Turbopack, React Server Components by default)
- **Library**: React 19
- **Styling**: Tailwind CSS v4 with bespoke Eventin design tokens (`app/globals.css`)
- **Animation**: Motion (Framer Motion) + Lenis smooth scroll + GSAP ScrollTrigger
- **Form Handling**: React Hook Form + Zod server validation
- **Email / Notifications**: Resend API
- **Testing**: Vitest (`pnpm test`)

---

## Getting Started

### 1. Install Dependencies
```bash
pnpm install
```

### 2. Configure Environment
Copy `.env.example` to `.env.local`:
```bash
cp .env.example .env.local
```

| Variable | Description |
| :--- | :--- |
| `RESEND_API_KEY` | Optional API key for sending confirmation emails |
| `LEADS_WEBHOOK_URL` | Optional webhook URL for CRM / Google Sheets lead ingestion |
| `TEAM_NOTIFICATION_EMAIL` | Concierge inbox receiving member applications |

### 3. Run Development Server
```bash
pnpm dev
```
Open [http://localhost:3000](http://localhost:3000) to view the application.

---

## Build & Test Scripts

```bash
# Run unit & clearance tests
pnpm test

# Run TypeScript check
pnpm typecheck

# Run ESLint
pnpm lint

# Production build with Turbopack
pnpm build
```

---

## Deployment on Vercel

This repository is optimized for zero-config deployment on Vercel:
1. Import repository `https://github.com/Antriksh27/Desiconnections`.
2. Framework preset: **Next.js**.
3. Package manager: **pnpm**.
4. Configure environment variables in Vercel project settings (`RESEND_API_KEY`, etc.).
5. Automatic redeployments trigger on every push to `main`.
