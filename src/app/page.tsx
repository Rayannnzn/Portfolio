import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Stack } from "@/components/sections/Stack";
import { Work } from "@/components/sections/Work";
import { Experience } from "@/components/sections/Experience";
import { Contact } from "@/components/sections/Contact";
import { Leadership } from "@/components/sections/Leadership";
import { Collaborators } from "@/components/sections/Collaborators";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Ahmad Akbar",
  jobTitle: "Gateway Manager / Tech Lead / Software Engineer",
  url: "https://ahmad-akbar-portfolio.vercel.app",
  email: "ahmad294b4@gmail.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Lahore",
    addressCountry: "PK",
  },
  sameAs: [
    "https://www.linkedin.com/in/ahmad-akbar-038570180/",
    "https://www.upwork.com/freelancers/~01dcd77201c06bb9d8",
  ],
  worksFor: {
    "@type": "Organization",
    name: "Zenithal OÜ",
    address: {
      "@type": "PostalAddress",
      addressCountry: "EE",
    },
  },
  alumniOf: [
    {
      "@type": "Organization",
      name: "Developers Studio",
      address: { "@type": "PostalAddress", addressLocality: "Lahore", addressCountry: "PK" },
    },
    {
      "@type": "Organization",
      name: "QuickBit",
    },
    {
      "@type": "Organization",
      name: "Valuno",
    },
    {
      "@type": "Organization",
      name: "Programmers Force",
      address: { "@type": "PostalAddress", addressLocality: "Lahore", addressCountry: "PK" },
    },
  ],
  hasOccupation: [
    {
      "@type": "Occupation",
      name: "Gateway Manager",
      occupationLocation: { "@type": "Country", name: "Estonia" },
      description: "Managing white-label payment solutions, PSP integrations, and fiat-to-crypto gateway infrastructure for European fintech clients.",
    },
    {
      "@type": "Occupation",
      name: "Tech Lead",
      occupationLocation: { "@type": "City", name: "Lahore" },
      description: "Led backend engineering teams building payment orchestration platforms, affiliate portals, and AI-driven fraud detection systems.",
    },
  ],
  knowsAbout: [
    "Payment Gateway Architecture",
    "White-label Payment Solutions",
    "PSP Integration",
    "Open Banking",
    "Fiat to Crypto Gateway",
    "Crypto Payment Infrastructure",
    "Payment Orchestration",
    "Wallet Infrastructure",
    "AI Fraud Detection",
    "AI Fraud Intelligence Platforms",
    "Quant Trading Systems",
    "iGaming Payment Infrastructure",
    "Affiliate Portal Development",
    "PCI DSS Compliance",
    "KYC / AML Workflows",
    "Laravel",
    "PHP",
    "PostgreSQL",
    "Redis",
    "REST API Design",
    "Microservices Architecture",
    "Fintech Europe",
    "Remote Engineering Leadership",
  ],
};

const organizationLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Ahmad Akbar — Selected Projects",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "RIDM.IO — Real-Time Risk & Decision Engine",
      description: "AI-driven fraud intelligence and real-time transaction scoring platform.",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "CardEye — Card Fraud Intelligence",
      description: "ML-powered card fraud detection and chargeback prevention system.",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "INCHARGE — White-label Payment Gateway",
      description: "Full-stack white-label payment gateway with multi-PSP routing and iGaming support.",
    },
    {
      "@type": "ListItem",
      position: 4,
      name: "QuickBit — Crypto Payment Gateway",
      description: "Fiat-to-crypto payment gateway and affiliate portal built at QuickBit/Valuno.",
    },
    {
      "@type": "ListItem",
      position: 5,
      name: "FlowSoftware — Payment Orchestration",
      description: "Payment orchestration layer with smart routing, fallback logic, and reconciliation.",
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationLd) }}
      />
      <main>
        <Hero />
        <About />
        <Stack />
        <Work />
        <Experience />
        <Collaborators />
        <Leadership />
        <Contact />
      </main>
    </>
  );
}
