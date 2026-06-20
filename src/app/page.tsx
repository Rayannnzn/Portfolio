import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Stack } from "@/components/sections/Stack";
import { Work } from "@/components/sections/Work";
import { Experience } from "@/components/sections/Experience";
import { Contact } from "@/components/sections/Contact";
import { Collaborators } from "@/components/sections/Collaborators";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Muhammad Rayan",
  jobTitle: "Full Stack Developer",
  url: "https://muhammad-rayan-portfolio.vercel.app",
  email: "rayan.muhammadzzz31@gmail.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Lahore",
    addressCountry: "PK",
  },
  sameAs: [
    "https://www.linkedin.com/in/muhammad-rayan",
    "https://github.com/Rayannnzn",
  ],
  worksFor: {
    "@type": "Organization",
    name: "BIG O SOFT",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Lahore",
      addressCountry: "PK",
    },
  },
  alumniOf: [
    {
      "@type": "Organization",
      name: "InvoZone",
      address: { "@type": "PostalAddress", addressLocality: "Lahore", addressCountry: "PK" },
    },
    {
      "@type": "Organization",
      name: "Villaex Technologies",
      address: { "@type": "PostalAddress", addressLocality: "Lahore", addressCountry: "PK" },
    },
    {
      "@type": "EducationalOrganization",
      name: "University of Management and Technology",
    },
  ],
  knowsAbout: [
    "React.js",
    "Next.js",
    "Node.js",
    "TypeScript",
    "JavaScript",
    "Express.js",
    "REST API Design",
    "PostgreSQL",
    "MongoDB",
    "Tailwind CSS",
    "Web3 Development",
    "Solidity",
    "Ethers.js",
    "Prisma ORM",
    "shadcn/ui",
    "Vercel Deployment",
    "Full Stack Development",
  ],
};

const organizationLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Muhammad Rayan — Selected Projects",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "HireMyRoom — Full-Stack Rental Platform",
      description: "End-to-end room rental platform with user auth, property listings, booking system and RESTful API.",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Alpha Pulse — Production SaaS Dashboard",
      description: "Next.js and TypeScript SaaS dashboard with Vercel Cron jobs and shadcn/ui component library.",
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
        <Contact />
      </main>
    </>
  );
}
