import type { Metadata } from "next";
import { Chakra_Petch, Sora, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { GrainOverlay } from "@/components/GrainOverlay";

const display = Chakra_Petch({
  weight: ["500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const bodyFont = Sora({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

const DOMAIN = "https://ahmad-akbar-portfolio.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(DOMAIN),
  title: {
    default: "Ahmad Akbar — Gateway Manager | Tech Lead | Fintech & Payment Infrastructure",
    template: "%s — Ahmad Akbar",
  },
  description:
    "Ahmad Akbar — Gateway Manager and Tech Lead with 6+ years building white-label payment solutions, fiat-to-crypto gateways, PSP integrations, open banking, and AI-driven fraud detection systems. Formerly at Developers Studio, QuickBit, Valuno, and Programmers Force. Now Gateway Manager at Zenithal OÜ. Based in Lahore, Pakistan.",
  keywords: [
    "Ahmad Akbar",
    "Ahmad Akbar Gateway Manager",
    "Ahmad Akbar Lahore",
    "Ahmad Akbar Fintech",
    "Ahmad Akbar Portfolio",
    "Zenithal OÜ",
    "Developers Studio",
    "QuickBit",
    "Valuno",
    "Programmers Force",
    "Gateway Manager",
    "Tech Lead",
    "Tech Manager",
    "Lead Software Engineer",
    "Backend Engineer Pakistan",
    "Software Engineer Lahore",
    "Payment Gateway Development",
    "White-label Payment Solutions",
    "PSP Integration",
    "Open Banking",
    "Fiat to Crypto Gateway",
    "Crypto Payment Gateway",
    "Payment Orchestration",
    "Wallet Infrastructure",
    "AI Fraud Detection",
    "AI Fraud Intelligence",
    "Quant Trading Systems",
    "iGaming Payment Infrastructure",
    "iGaming PSP",
    "Affiliate Portal",
    "Laravel",
    "PHP",
    "PostgreSQL",
    "Redis",
    "REST API",
    "Microservices",
    "PCI DSS Compliance",
    "Fintech Europe",
    "Remote Fintech Engineer",
    "Pakistan Software Engineer",
    "Lahore Developer",
  ],
  authors: [{ name: "Ahmad Akbar", url: DOMAIN }],
  creator: "Ahmad Akbar",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    siteName: "Ahmad Akbar",
    url: DOMAIN,
    title: "Ahmad Akbar — Gateway Manager | Fintech & Payment Infrastructure",
    description:
      "6+ years designing and managing white-label payment solutions, fiat-to-crypto gateways, PSP integrations, and AI-driven fraud detection. Available for senior fintech and AI-engineering roles.",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Ahmad Akbar — Gateway Manager & Tech Lead" }],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ahmad Akbar — Gateway Manager | Fintech & Payment Infrastructure",
    description:
      "6+ years building white-label payment solutions, PSP integrations, fiat-to-crypto gateways, and AI fraud detection. Lahore, Pakistan.",
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "do-ZKUQo7teVhv90n9q-rDg2nUW0FvIgRH4rBwEEfs0",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${bodyFont.variable} ${mono.variable}`}
    >
      <body>
        <GrainOverlay />
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
