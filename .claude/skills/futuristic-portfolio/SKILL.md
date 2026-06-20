---
name: futuristic-portfolio
description: Build and style Ahmad Akbar's personal portfolio website with a consistent engineering-grade futuristic aesthetic. Use whenever creating, editing, or styling the portfolio site, its pages, sections, or components — hero, about, skills/stack, project case studies, experience, collaborators, leadership, contact, or any landing page, React component, or HTML/CSS for the portfolio. Locks in a single cohesive dark/futuristic visual system, motion conventions, and Ahmad's real bio and projects so output stays consistent across sessions instead of restarting the design each time.
---

This skill defines the locked design system and real content for Ahmad Akbar's portfolio site. Apply it on top of standard frontend-design principles — that skill handles craft and anti-generic execution; THIS skill removes the guesswork by fixing the specific decisions so every regenerated section matches the rest of the site.

## Aesthetic direction (commit to this — do not reinterpret per session)

**"Engineering-grade futurism."** Deep, instrument-panel dark. Restrained, precise, and senior — the portfolio of a Gateway Manager and Tech Lead who ships production fintech and payment infrastructure, NOT a gamer/cyberpunk neon page. Think mission-control telemetry, terminal phosphor, and high-density technical readouts treated with refinement. One sharp signal color against deep ink. Generous negative space, sharp type, subtle motion. Avoid: purple-on-white gradients, glassmorphism overload, rainbow neon, Inter/Roboto/Arial, and anything that reads as a generic SaaS template.

## Color tokens (CSS variables — use verbatim)

```css
:root {
  --ink:        #080B11;  /* page base, near-black blue */
  --surface:    #0E131C;  /* cards, panels */
  --surface-2:  #161D2A;  /* elevated / hover */
  --line:       #1F2937;  /* hairline borders */
  --text:       #E8EEF5;  /* primary text */
  --text-muted: #8492A6;  /* secondary text, labels */
  --signal:     #B6FF3C;  /* THE accent — signal lime. Use sparingly + boldly */
  --signal-dim: #6F8F2E;  /* muted accent for borders/states */
  --cyan:       #34E0E0;  /* tertiary, links/details ONLY — rare */
  --warn:       #FF6B4A;  /* errors/destructive only */
}
```

Rule: `--signal` is the single hero accent (one or two uses per viewport — a key CTA, an active state, a hairline glow). Everything else is ink + text scale. To re-theme the whole site, swapping `--signal` is a one-line change; keep it to one accent.

## Typography

- **Display / headings:** `Chakra Petch` (technical, angular, futuristic but readable). Weights 600–700, tight tracking on large sizes.
- **Body / UI:** `Sora` (geometric, clean). Weights 400–600.
- **Mono / labels / code / metrics:** `JetBrains Mono`. Use for section eyebrows (e.g. `// 01 — SELECTED WORK`), stat readouts, code snippets, and tech tags — this mono texture is the signature "engineer" detail.

Load from Google Fonts. Never substitute Inter, Roboto, Arial, or Space Grotesk.

## Motion conventions

- **Page load:** ONE orchestrated entrance — staggered reveals (60–90ms stagger), elements rising 12–20px with opacity fade. High impact once, not scattered everywhere.
- **Scroll:** reveal sections on enter via `whileInView` (Motion) or IntersectionObserver. Trigger once, ~15% threshold.
- **Hover:** subtle and precise — 150–250ms ease-out. Magnetic/lift on cards and CTAs, signal-colored hairline that draws in.
- **Signature touches (use 1–2, not all):** faint animated grain/noise overlay; a single soft signal-lime glow behind the hero; animated gradient hairline borders on key cards; an optional terminal-style typed line in the hero.
- **Always** wrap in `@media (prefers-reduced-motion: reduce)` to disable transforms/animation.
- **Libraries:** React → Motion (`motion/react`). Complex timelines → GSAP. Plain HTML artifacts → CSS-only. Don't pull a library the page doesn't need.

## Layout / texture

Dark base with hairline (`--line`) borders and generous spacing. Favor asymmetry and a clear grid that's occasionally broken by one element. Mono eyebrows + large display headings. Optional 1px grid or dotted background at low opacity for the "instrument" feel. Cards: `--surface` fill, `--line` border, signal accent only on hover/active.

## Content — use Ahmad's real details (no lorem ipsum)

- **Name / role:** Ahmad Akbar — Gateway Manager / Tech Lead / Software Engineer.
- **Current employer:** Zenithal OÜ (Estonian company, remote from Lahore, Pakistan). Started May 2026.
- **Contact:** ahmad294b4@gmail.com · +92 3174007369 · Gulberg III, Lahore, Pakistan.
- **LinkedIn:** https://www.linkedin.com/in/ahmad-akbar-038570180/
- **Upwork:** https://www.upwork.com/freelancers/~01dcd77201c06bb9d8
- **Positioning headline:** Gateway Manager and Tech Lead with 6+ years designing white-label payment solutions, fiat-to-crypto gateways, PSP integrations, open banking, and AI-driven fraud detection systems for European fintech and iGaming clients.
- **Key metrics:** 6+ years engineering · ~1M transactions/month · 10K+ MAU · 150+ high-impact features engineered.
- **Specialisations:** White-label payment solutions · PSP integrations · Fiat-to-crypto gateways · Open banking · PCI DSS compliance · iGaming payment infrastructure · AI fraud detection · Wallet infrastructure · Payment orchestration.

## Work history

| Period | Title | Company | Location |
|--------|-------|---------|----------|
| May 2026 – Present | Gateway Manager / Tech Manager | Zenithal OÜ | Remote · Estonia |
| Jan 2021 – Apr 2026 | Tech Lead | Developers Studio | Lahore, Pakistan |
| Jan 2021 – Jun 2023 | Lead Software Engineer | Valuno (formerly Quickbit) | Remote · Sweden |
| Jan 2020 – Dec 2020 | Associate Software Engineer | Programmers Force | Lahore, Pakistan |

## Selected projects (case-study cards)

- **RIDM.IO** — AI-driven fraud intelligence and real-time transaction scoring platform. PSP integrations, open banking, fiat-to-crypto flows. Feb 2024 – Present.
- **CardEye** — ML-powered card fraud detection and chargeback prevention. PCI compliance achieved. Led from inception through delivery. Feb 2022 – Present.
- **INCHARGE / Blixtpay** — Full-stack white-label payment gateway with multi-PSP routing, iGaming support, and Intergiro BAAS payout integration.
- **FlowSoftware** — Payment orchestration layer: Quantoz crypto endpoints + CleanPay (Cosmo) fiat gateway + Redoc API documentation.
- **Quickbit / Valuno** — Legacy affiliate, account management, and crypto payment gateway platform serving live European traffic. Jan 2021 – Feb 2022.
- **FarmTech** — Pest risk prediction system. IoT temperature sensor data, Farmbot integration, React Native mobile app. Aug – Nov 2021.
- **WhistleIt.io** — Real-time team collaboration platform. Backend message retrieval module; scalable architecture for multiple core modules. Oct – Dec 2020.

## Collaborator platforms (31 total — Collaborators section)

Intergiro, SEON, Onfido, Checkout.com, Worldpay, Stripe, Adyen, Klarna, Trustly, Paysafe, Nuvei, Modulr, ClearBank, Paydock, Quantoz, CleanPay (Cosmo), OpenPayd, Railsr, Volt, TrueLayer, Plaid, Yapily, Saltedge, Sumsub, Veriff, ComplyAdvantage, Jumio, Sardine, Featurespace, Kount, Emailage.

## Section order

1. **Hero** — name, role tagline, signal CTA, orchestrated entrance, profile photo with corner-bracket reticle.
2. **About** — "Fintech depth. AI velocity." narrative + stat panel.
3. **Stack** — grouped tech tags in mono (Backend / Integrations / AI & Data / DevOps).
4. **Work** — project case-study cards with panoramic SVG illustrations.
5. **Experience** — timeline of 4 roles.
6. **Collaborators** — 31 platform logos/tags.
7. **Leadership** — team photos section.
8. **Contact** — mailto form + social links.

## Tech stack used in the site

Next.js 14 (App Router) · TypeScript · Tailwind CSS · Framer Motion (`motion/react`) · Google Fonts (Chakra Petch, Sora, JetBrains Mono).

## Guardrails

- Do not invent contact info, employers, dates, or project metrics not listed here — leave clearly marked placeholders and ask.
- Never use first-person ("I") in copy — keep tone third-person and authoritative.
- Keep the system cohesive: one accent, the three fonts above, the token palette. If a request needs a new color or font, add it as a documented token rather than ad-hoc.
- Production-grade, accessible (focus states, contrast, semantic HTML, reduced-motion), and responsive by default.
- Profile image alt must always be "Ahmad Akbar — Gateway Manager & Tech Lead".
