"use client";
import { motion, useReducedMotion } from "motion/react";

/* ─── Platform data ──────────────────────────────────────────── */
const PLATFORMS = [
  {
    name: "Intergiro",
    short: "INTG",
    category: "BAAS · Banking",
    description: "Swedish EMI-licensed Banking-as-a-Service platform — multi-currency IBANs, card issuing & acquiring across Europe.",
    color: "#4A9EFF",
    url: "https://intergiro.com",
  },
  {
    name: "CleanPay",
    short: "CLNP",
    category: "Fiat Gateway",
    description: "Payment gateway for fiat processing and merchant settlements, integrated via Cosmo infrastructure.",
    color: "#B6FF3C",
    url: "#",
  },
  {
    name: "PaySafe",
    short: "PSFE",
    category: "PSP · Payments",
    description: "Global payment platform enabling digital wallets, card processing and cash payments across 120+ countries.",
    color: "#FF6B4A",
    url: "https://paysafe.com",
  },
  {
    name: "SEON",
    short: "SEON",
    category: "Fraud · AML",
    description: "AI-powered fraud prevention and AML compliance — 300+ digital signals, real-time risk scoring & PEP screening.",
    color: "#FF4A8D",
    url: "https://seon.io",
  },
  {
    name: "SingleStore",
    short: "SSDB",
    category: "Real-time DB",
    description: "Unified real-time database for transactions + analytics — high-throughput SQL at scale for fintech workloads.",
    color: "#9B59FF",
    url: "https://singlestore.com",
  },
  {
    name: "Rendix",
    short: "RNDX",
    category: "Payments · BR",
    description: "Rendimentopay's Rendix platform — Brazilian payment infrastructure for fiat transaction processing.",
    color: "#34E0E0",
    url: "https://www.rendimentopay.com.br/en/rendix/",
  },
  {
    name: "Webcheque",
    short: "WCHQ",
    category: "Online Payments",
    description: "Digital cheque and online payment solution enabling secure electronic payment flows for merchants.",
    color: "#B6FF3C",
    url: "#",
  },
  {
    name: "TrustFlow",
    short: "TFLW",
    category: "Payment Flow",
    description: "Payment orchestration and trust-layer infrastructure for routing and optimising transaction flows.",
    color: "#4A9EFF",
    url: "#",
  },
  {
    name: "TrustPayments",
    short: "TPAY",
    category: "Card Acquiring",
    description: "European card acquiring and payment gateway — PCI-compliant processing for merchants across verticals.",
    color: "#FF8A3C",
    url: "https://trustpayments.com",
  },
  {
    name: "Coolbet",
    short: "CLBT",
    category: "iGaming · Sports",
    description: "Award-winning B2C iGaming operator with proprietary sportsbook tech across Northern Europe, Canada & LatAm.",
    color: "#34E0E0",
    url: "https://coolbet.com",
  },
  {
    name: "ComeOn Group",
    short: "CMGP",
    category: "iGaming · Operator",
    description: "Malta-based iGaming group operating 15+ licensed casino and sportsbook brands across regulated markets.",
    color: "#FF6B4A",
    url: "https://comeon-group.com",
  },
  {
    name: "Finera",
    short: "FNRA",
    category: "Orchestration",
    description: "Next-gen payment orchestration — card acquiring, open banking, payouts and crypto processing in one platform.",
    color: "#B6FF3C",
    url: "https://finera.com",
  },
  {
    name: "Madfin",
    short: "MDFN",
    category: "Fintech",
    description: "Fintech platform powering payment and financial infrastructure solutions for modern digital businesses.",
    color: "#9B59FF",
    url: "#",
  },
  {
    name: "Paytently",
    short: "PTLY",
    category: "PSP · Orchestration",
    description: "Malta-regulated payment institution connecting merchants to a global network of acquirers with AML controls.",
    color: "#4A9EFF",
    url: "https://paytently.com",
  },
  {
    name: "Akurateco",
    short: "AKRT",
    category: "White-label PSP",
    description: "White-label payment orchestration system — smart routing, cascading and analytics for payment providers.",
    color: "#FF4A8D",
    url: "https://akurateco.com",
  },
  {
    name: "Quantoz Payments",
    short: "QNTZ",
    category: "Crypto · Stablecoin",
    description: "Dutch-regulated crypto infrastructure provider — stablecoin issuance, custody and compliant digital asset payment rails.",
    color: "#4A9EFF",
    url: "https://www.quantoz.com",
  },
  {
    name: "Pagora",
    short: "PGRA",
    category: "PSP · Gibraltar",
    description: "Gibraltar-based payment institution providing card acquiring, online payment processing and merchant services.",
    color: "#34E0E0",
    url: "https://pagora.gi",
  },
  {
    name: "Quickbit",
    short: "QKBT",
    category: "Crypto · Exchange",
    description: "Swedish crypto company enabling consumers and merchants to buy, sell and use cryptocurrency for everyday payments.",
    color: "#B6FF3C",
    url: "https://qb-europe.com/int/en-us",
  },
  {
    name: "Risk Associates",
    short: "RISK",
    category: "Compliance · PCI",
    description: "Specialist compliance and cybersecurity firm — PCI DSS QSA, ASV scanning, ISO 27001 and financial risk advisory.",
    color: "#FF6B4A",
    url: "https://riskassociates.com",
  },
  {
    name: "Whitegallo",
    short: "WGLO",
    category: "Technology",
    description: "Technology services firm delivering software engineering, systems integration and digital transformation solutions.",
    color: "#F5F5F5",
    url: "https://whitegallo.com",
  },
  {
    name: "Blackgallo",
    short: "BGLO",
    category: "Technology",
    description: "Technology and software development company providing engineering expertise and product delivery services.",
    color: "#8492A6",
    url: "https://blackgallo.net",
  },
  {
    name: "Onfido",
    short: "ONFD",
    category: "KYC · Identity",
    description: "AI-powered identity verification platform — document checks, facial biometrics, liveness detection and AML watchlist screening for 1,200+ businesses globally.",
    color: "#4A9EFF",
    url: "https://onfido.com",
  },
  {
    name: "Alice Biometrics",
    short: "ALCE",
    category: "Biometric KYC",
    description: "Spanish-founded biometric identity verification — sub-second selfie + ID document matching with passive liveness detection for frictionless digital onboarding.",
    color: "#FF4A8D",
    url: "https://alicebiometrics.com",
  },
  {
    name: "MaxMind",
    short: "MXMD",
    category: "GeoIP · Fraud",
    description: "Industry-leading IP geolocation (GeoIP) and fraud prevention — minFraud transaction risk scoring, proxy detection and real-time threat intelligence since 2002.",
    color: "#FF6B4A",
    url: "https://www.maxmind.com",
  },
  {
    name: "Shufti Pro",
    short: "SHFT",
    category: "KYC · AML",
    description: "AI-powered KYC, AML and identity verification platform — 3,000+ document types, 230+ countries, real-time biometric checks and PEP/sanctions screening.",
    color: "#9B59FF",
    url: "https://shuftipro.com",
  },
  {
    name: "Worldpay",
    short: "WPLY",
    category: "Global PSP",
    description: "One of the world's largest payment processors — card acquiring, multi-currency processing and risk management across 146 countries for merchants of all sizes.",
    color: "#34E0E0",
    url: "https://www.worldpay.com",
  },
  {
    name: "Ekata",
    short: "EKAT",
    category: "Identity · Risk",
    description: "Mastercard-owned global identity verification network — phone, email, address and IP risk signals for real-time fraud prevention and customer onboarding.",
    color: "#FF8A3C",
    url: "https://ekata.com",
  },
  {
    name: "IVY",
    short: "IVY",
    category: "Open Banking",
    description: "Berlin-based instant bank payments API — A2A payments across 500M+ bank accounts in 50+ countries via open banking rails, cutting card fees and eliminating chargebacks.",
    color: "#B6FF3C",
    url: "https://getivy.io",
  },
  {
    name: "Checkout.com",
    short: "CHKT",
    category: "PSP · Global",
    description: "Unified global payment platform — card acquiring, alternative payment methods, issuing, fraud prevention and payouts for high-growth businesses in 45+ markets.",
    color: "#4A9EFF",
    url: "https://checkout.com",
  },
  {
    name: "Signicat",
    short: "SGNC",
    category: "Digital Identity",
    description: "European digital identity and e-signature platform — eIDAS-compliant eID authentication, document signing and KYC for regulated industries across 30+ countries.",
    color: "#34E0E0",
    url: "https://signicat.com",
  },
  {
    name: "IDology",
    short: "IDOL",
    category: "Identity · KYC",
    description: "US-based identity verification and fraud prevention — real-time ID document checks, database verification, age validation and step-up authentication workflows.",
    color: "#FF4A8D",
    url: "https://idology.com",
  },
];

/* ─── Tiny monogram logo ─────────────────────────────────────── */
function PlatformLogo({ short, color }: { short: string; color: string }) {
  return (
    <div
      style={{
        width: "44px",
        height: "44px",
        borderRadius: "6px",
        background: `${color}18`,
        border: `1px solid ${color}40`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
      }}
    >
      <span
        style={{
          fontFamily: "monospace",
          fontSize: "9px",
          fontWeight: 700,
          letterSpacing: "0.05em",
          color,
        }}
      >
        {short}
      </span>
    </div>
  );
}

/* ─── Section ────────────────────────────────────────────────── */
export function Collaborators() {
  const prefersReduced = useReducedMotion();
  const reduced = prefersReduced === true;

  const reveal = (delay = 0) => ({
    initial: { opacity: 0, y: reduced ? 0 : 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.06 },
    transition: {
      duration: 0.6,
      delay: reduced ? 0 : delay,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  });

  return (
    <section
      id="collaborators"
      className="py-24 md:py-32"
      style={{ borderTop: "1px solid var(--line)" }}
      aria-label="Platforms collaborated with"
    >
      <div className="mx-auto max-w-6xl px-6">

        {/* Eyebrow */}
        <motion.p
          {...reveal(0)}
          className="mono mb-10 text-xs tracking-[0.25em] uppercase"
          style={{ color: "var(--text-muted)" }}
        >
          // 05 — PLATFORMS & COLLABORATIONS
        </motion.p>

        {/* Heading */}
        <motion.h2
          {...reveal(0.06)}
          className="font-bold mb-4"
          style={{
            fontSize: "clamp(2rem, 5vw, 3.75rem)",
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
          }}
        >
          Built across the ecosystem.
        </motion.h2>

        <motion.p
          {...reveal(0.1)}
          className="mb-16 max-w-xl"
          style={{ color: "var(--text-muted)", fontSize: "1rem", lineHeight: 1.7 }}
        >
          Platforms, payment rails, fraud engines and gaming infrastructure I've
          integrated, operated and shipped against throughout my journey.
        </motion.p>

        {/* Grid */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {PLATFORMS.map((p, i) => (
            <motion.a
              key={p.name}
              href={p.url}
              target={p.url !== "#" ? "_blank" : undefined}
              rel="noopener noreferrer"
              {...reveal(0.08 + i * 0.03)}
              whileHover={reduced ? {} : { y: -3 }}
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "14px",
                padding: "20px",
                background: "var(--surface)",
                border: "1px solid var(--line)",
                borderRadius: "4px",
                textDecoration: "none",
                cursor: p.url !== "#" ? "pointer" : "default",
                transition: "border-color 0.2s ease, box-shadow 0.2s ease",
                position: "relative",
                overflow: "hidden",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = `${p.color}60`;
                el.style.boxShadow = `0 4px 24px ${p.color}12`;
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = "var(--line)";
                el.style.boxShadow = "none";
              }}
              aria-label={`${p.name} — ${p.category}`}
            >
              {/* Coloured top strip */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: "2px",
                  background: p.color,
                  opacity: 0.7,
                }}
                aria-hidden="true"
              />

              {/* Logo + name row */}
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <PlatformLogo short={p.short} color={p.color} />
                <div style={{ minWidth: 0 }}>
                  <p
                    className="font-bold"
                    style={{
                      fontSize: "0.95rem",
                      letterSpacing: "-0.01em",
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}
                  >
                    {p.name}
                  </p>
                  <span
                    className="mono"
                    style={{
                      fontSize: "0.65rem",
                      letterSpacing: "0.15em",
                      color: p.color,
                      textTransform: "uppercase",
                    }}
                  >
                    {p.category}
                  </span>
                </div>
              </div>

              {/* Description */}
              <p
                style={{
                  fontSize: "0.8rem",
                  lineHeight: 1.6,
                  color: "var(--text-muted)",
                  margin: 0,
                }}
              >
                {p.description}
              </p>

              {/* External link indicator */}
              {p.url !== "#" && (
                <span
                  className="mono"
                  style={{
                    fontSize: "0.65rem",
                    color: "var(--text-muted)",
                    opacity: 0.4,
                    letterSpacing: "0.08em",
                    marginTop: "auto",
                  }}
                >
                  ↗ {p.url.replace("https://", "").replace(/\/$/, "")}
                </span>
              )}
            </motion.a>
          ))}
        </div>

        {/* Footer note */}
        <motion.p
          {...reveal(0.2)}
          className="mono text-xs mt-12"
          style={{ color: "var(--text-muted)", opacity: 0.4, letterSpacing: "0.1em" }}
        >
          // {PLATFORMS.length} PLATFORMS · FINTECH · IGAMING · BAAS · KYC · AML · FRAUD · OPEN BANKING · CRYPTO
        </motion.p>

      </div>
    </section>
  );
}
