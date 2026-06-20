import type { MetadataRoute } from "next";

const DOMAIN = "https://my-portfolio-five-gamma-96.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: DOMAIN,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
