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

const DOMAIN = "https://muhammad-rayan-portfolio.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(DOMAIN),
  title: {
    default: "Muhammad Rayan — Full Stack Developer | React · Node.js · Next.js",
    template: "%s — Muhammad Rayan",
  },
  description:
    "Muhammad Rayan — Full Stack Developer based in Lahore, Pakistan. Building production web apps with React, Next.js, Node.js, TypeScript and Web3. Currently at BIG O SOFT. BSE student at UMT.",
  keywords: [
    "Muhammad Rayan",
    "Muhammad Rayan Developer",
    "Muhammad Rayan Lahore",
    "Muhammad Rayan Portfolio",
    "Full Stack Developer Pakistan",
    "React Developer Lahore",
    "Next.js Developer",
    "Node.js Developer",
    "TypeScript Developer",
    "Web3 Developer",
    "Solidity Developer",
    "BIG O SOFT",
    "InvoZone",
    "Villaex Technologies",
    "Software Engineer Lahore",
    "React.js",
    "Next.js",
    "Node.js",
    "Express.js",
    "Tailwind CSS",
    "PostgreSQL",
    "MongoDB",
    "Ethers.js",
    "Prisma",
    "shadcn ui",
    "Vercel",
    "Pakistan Software Engineer",
    "Lahore Developer",
  ],
  authors: [{ name: "Muhammad Rayan", url: DOMAIN }],
  creator: "Muhammad Rayan",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    siteName: "Muhammad Rayan",
    url: DOMAIN,
    title: "Muhammad Rayan — Full Stack Developer | React · Node.js · Next.js",
    description:
      "Full Stack Developer building production web apps with React, Next.js, Node.js, TypeScript and Web3. Based in Lahore, Pakistan.",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Muhammad Rayan — Full Stack Developer" }],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Rayan — Full Stack Developer | React · Node.js · Next.js",
    description:
      "Full Stack Developer building production web apps with React, Next.js, Node.js, TypeScript and Web3. Lahore, Pakistan.",
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
