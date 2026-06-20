---
name: portfolio-seo
description: Add and maintain SEO for Ahmad Akbar's Next.js (App Router) portfolio — page metadata, titles and descriptions, Open Graph and Twitter share cards, JSON-LD structured data (Person schema), canonical URLs, sitemap, and robots. Use whenever creating or editing a page's title/description, social share preview, structured data, sitemap/robots, or when asked to make a page SEO-friendly, discoverable, or shareable.
---

Standing SEO rules for Ahmad Akbar's Next.js App Router portfolio. Apply whenever creating or editing pages, share previews, structured data, sitemap, or robots.

## Deployed domain

`https://ahmad-akbar-portfolio.vercel.app`

## Page metadata (Metadata API)

Root `src/app/layout.tsx` baseline (already set — do not regress):
```ts
export const metadata = {
  metadataBase: new URL("https://ahmad-akbar-portfolio.vercel.app"),
  title: {
    default: "Ahmad Akbar — Gateway Manager | Tech Lead | Fintech & Payment Infrastructure",
    template: "%s — Ahmad Akbar",
  },
  description:
    "Ahmad Akbar — Gateway Manager and Tech Lead with 6+ years building white-label payment solutions, fiat-to-crypto gateways, PSP integrations, open banking, and AI-driven fraud detection systems. Formerly at Developers Studio, QuickBit, Valuno, and Programmers Force. Now Gateway Manager at Zenithal OÜ. Based in Lahore, Pakistan.",
  openGraph: {
    type: "website",
    siteName: "Ahmad Akbar",
    images: ["/opengraph-image"],
  },
  twitter: { card: "summary_large_image" },
};
```

Each route: `export const metadata` (or `generateMetadata`) with a unique `title`, a `description` under ~155 characters, and `alternates: { canonical: "/path" }`.

Write descriptions like a human would. Never keyword-stuff.

## Share image

`src/app/opengraph-image.tsx` at **1200×630**, dark theme with signal-lime (`#B6FF3C`) accent so link previews match the site. Currently implemented — do not remove.

## Structured data (JSON-LD)

Two schemas on the home page (already in `src/app/page.tsx`):

**Person schema:**
```json
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Ahmad Akbar",
  "jobTitle": "Gateway Manager / Tech Lead / Software Engineer",
  "url": "https://ahmad-akbar-portfolio.vercel.app",
  "email": "ahmad294b4@gmail.com",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Lahore",
    "addressCountry": "PK"
  },
  "sameAs": [
    "https://www.linkedin.com/in/ahmad-akbar-038570180/",
    "https://www.upwork.com/freelancers/~01dcd77201c06bb9d8"
  ],
  "worksFor": {
    "@type": "Organization",
    "name": "Zenithal OÜ",
    "address": { "@type": "PostalAddress", "addressCountry": "EE" }
  },
  "knowsAbout": [
    "Payment Gateway Architecture", "White-label Payment Solutions",
    "PSP Integration", "Open Banking", "Fiat to Crypto Gateway",
    "Crypto Payment Infrastructure", "Payment Orchestration",
    "Wallet Infrastructure", "AI Fraud Detection",
    "iGaming Payment Infrastructure", "PCI DSS Compliance",
    "Laravel", "PHP", "PostgreSQL", "Redis", "Microservices Architecture"
  ]
}
```

**ItemList schema (projects):**
```json
{
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Ahmad Akbar — Selected Projects",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "RIDM.IO — Real-Time Risk & Decision Engine" },
    { "@type": "ListItem", "position": 2, "name": "CardEye — Card Fraud Intelligence" },
    { "@type": "ListItem", "position": 3, "name": "INCHARGE — White-label Payment Gateway" },
    { "@type": "ListItem", "position": 4, "name": "QuickBit — Crypto Payment Gateway" },
    { "@type": "ListItem", "position": 5, "name": "FlowSoftware — Payment Orchestration" }
  ]
}
```

## Core keywords (use naturally in meta copy)

Ahmad Akbar · Gateway Manager · Tech Lead · Zenithal OÜ · Developers Studio · QuickBit · Valuno · Programmers Force · White-label Payment Solutions · PSP Integration · Fiat to Crypto Gateway · Open Banking · AI Fraud Detection · iGaming Payment Infrastructure · PCI DSS · Lahore Pakistan · Fintech Europe · Payment Orchestration · Wallet Infrastructure

## Sitemap & robots

- `src/app/sitemap.ts` — export every public route.
- `src/app/robots.ts` — allow all; point `sitemap` at `https://ahmad-akbar-portfolio.vercel.app/sitemap.xml`.
- Google verification token: `do-ZKUQo7teVhv90n9q-rDg2nUW0FvIgRH4rBwEEfs0`

## On-page essentials

- Exactly one `<h1>` per page; headings in order, no skipped levels.
- Descriptive `alt` on every meaningful image; use `next/image`.
- Profile image alt: `"Ahmad Akbar — Gateway Manager & Tech Lead"` — never a different name.
- `<html lang="en">` (already set in layout shell).
- Favicon/icons via `src/app/icon.tsx` and `src/app/apple-icon.tsx`.

Keep metadata accurate to the page's actual content — mismatched titles/descriptions hurt ranking and trust.
