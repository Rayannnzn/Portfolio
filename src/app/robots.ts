import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://my-portfolio-five-gamma-96.vercel.app/sitemap.xml",
  };
}
