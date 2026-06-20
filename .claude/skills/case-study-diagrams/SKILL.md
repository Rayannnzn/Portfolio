---
name: case-study-diagrams
description: Create architecture, system, data-flow, and sequence diagrams for Ahmad Akbar's portfolio project case studies using Mermaid, themed to match the dark/futuristic site. Use when illustrating how a project works — for example the RIDM.IO fraud engine architecture, the INCHARGE multi-PSP routing flow, or the CardEye fraud detection pipeline — or when asked for a diagram, flowchart, architecture, or sequence visual inside a case study.
---

Create diagrams for Ahmad Akbar's portfolio case studies with Mermaid, themed to match the dark/futuristic site (colors below mirror the portfolio tokens). Use when illustrating how a project works.

## Setup

- `npm install mermaid`
- Render in a client component. Minimal pattern:
  ```tsx
  "use client";
  import { useEffect, useRef } from "react";
  import mermaid from "mermaid";

  mermaid.initialize({
    startOnLoad: false,
    theme: "base",
    themeVariables: {
      background: "transparent",
      primaryColor: "#0E131C",
      primaryBorderColor: "#1F2937",
      primaryTextColor: "#E8EEF5",
      lineColor: "#34E0E0",
      fontFamily: "var(--font-mono), monospace",
    },
  });

  export default function Diagram({ chart }: { chart: string }) {
    const ref = useRef<HTMLDivElement>(null);
    useEffect(() => {
      const id = "d" + Math.random().toString(36).slice(2);
      mermaid.render(id, chart).then(({ svg }) => {
        if (ref.current) ref.current.innerHTML = svg;
      });
    }, [chart]);
    return <div ref={ref} />;
  }
  ```
- Highlight the key node(s) with signal lime using a `classDef`:
  `classDef hot fill:#B6FF3C,stroke:#B6FF3C,color:#080B11;` then `NODE:::hot`

## Which diagram for which story

- **System architecture** → `graph TD` / `graph LR` with a `subgraph` per layer (Client / API / Services / Data).
- **Pipeline or data flow** (e.g. fraud scoring pipeline) → `graph LR`.
- **Payment or request lifecycle** → `sequenceDiagram`.
- Keep each diagram to ~5–9 nodes. If it's bigger, split it into two.

## Accessibility

Always pair each diagram with a one-paragraph plain-text summary, so the case study reads fully without the SVG and works for screen readers.

## Starter diagrams (Ahmad's real systems — adjust as needed)

**RIDM.IO — Real-time fraud & decision engine:**
```
graph LR
  TXN[Incoming Transaction] --> SCORE[Risk Scoring Engine]
  SCORE --> RULES[Rules Layer]
  SCORE --> ML[ML Fraud Model]
  RULES --> DEC{Decision}
  ML --> DEC
  DEC -->|Approve| PSP[PSP / Acquiring Bank]
  DEC -->|Review| REVIEW[Manual Review Queue]
  DEC -->|Block| BLOCK[Block + Alert]
  SCORE:::hot
  classDef hot fill:#B6FF3C,stroke:#B6FF3C,color:#080B11;
```

**INCHARGE — Multi-PSP payment gateway routing:**
```
graph LR
  MER[Merchant] --> GW[INCHARGE Gateway]
  GW --> ROUTE[Smart Router]
  ROUTE --> PSP1[PSP 1]
  ROUTE --> PSP2[PSP 2]
  ROUTE --> PSP3[PSP 3 — Fallback]
  GW --> IGAMING[iGaming Flow]
  GW --> PAYOUT[Payout — Intergiro BAAS]
  ROUTE:::hot
  classDef hot fill:#B6FF3C,stroke:#B6FF3C,color:#080B11;
```

**CardEye — Card fraud detection pipeline:**
```
graph LR
  CARD[Card Transaction] --> INGEST[Ingest Layer]
  INGEST --> FE[Feature Extraction]
  FE --> ML[ML Fraud Model]
  ML --> CB{Chargeback Risk?}
  CB -->|High| BLOCK[Block + Flag]
  CB -->|Low| AUTH[Authorise]
  BLOCK --> REPORT[Report & Audit Trail]
  ML:::hot
  classDef hot fill:#B6FF3C,stroke:#B6FF3C,color:#080B11;
```

**FlowSoftware — Payment orchestration:**
```
graph LR
  CLIENT[Client App] --> API[Laravel REST API]
  API --> CRYPTO[Quantoz Crypto Endpoint]
  API --> FIAT[CleanPay / Cosmo Gateway]
  API --> WALLET[WalletAPI — Redoc]
  CRYPTO --> CHAIN[Blockchain]
  FIAT --> BANK[Acquiring Bank]
  API:::hot
  classDef hot fill:#B6FF3C,stroke:#B6FF3C,color:#080B11;
```
