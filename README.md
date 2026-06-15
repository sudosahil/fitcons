# Tushar Menath — Premium Coaching Landing Page

A luxury, dark-themed fitness coaching landing page for natural bodybuilding
athlete & ICN Classic / Men's Physique Champion 2025 **Tushar Menath**.
Built to generate qualified coaching applications.

> Brand mindset: **I AM > I WAS**

## Stack

- **Next.js 16** (App Router, Turbopack) · **React 19** · **TypeScript**
- **Tailwind CSS v4** — custom black / white / gold design system
- **Framer Motion** — scroll reveals, animated counters, page transitions
- **Zod** — request validation at the API boundary

## Sections

Hero · Marquee · About Tushar · What You Get · Why This Works ·
Coaching Quiz (multi-step) · Client Results · Why People Apply · FAQ ·
Final CTA · Footer.

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run lint     # eslint
```

## Where to edit things

| What | File |
| --- | --- |
| All copy, stats, FAQs, transformations, quiz options | `lib/data.ts` |
| Brand links (Instagram / YouTube / WhatsApp / email) | `lib/data.ts` → `BRAND` |
| Colors, fonts, buttons, cards, effects | `app/globals.css` (`@theme`) |
| Application form fields & validation | `lib/schema.ts` + `components/sections/Quiz.tsx` |
| Lead handling on submit | `app/api/apply/route.ts` |

### Images

Decorative photos are duotone-treated (`.duotone`) so any source blends into
the brand. Replace the Unsplash placeholders in `lib/data.ts` (`IMAGES` and
`TRANSFORMATIONS[].image`) with Tushar's real physique / transformation photos.
External hosts must be whitelisted in `next.config.ts` → `images.remotePatterns`.

## Wiring up real leads

`POST /api/apply` validates the application, currently `console.log`s it, and
returns a plan recommendation. To capture leads, forward `application` inside
`app/api/apply/route.ts` to your destination, e.g.:

- Email (Resend / Nodemailer)
- Google Sheet / Airtable / Notion
- A CRM (HubSpot, etc.)
- WhatsApp Business API

## Deploy

Optimized for Vercel — push to a Git repo and import, or run `vercel`.
No environment variables are required out of the box.
