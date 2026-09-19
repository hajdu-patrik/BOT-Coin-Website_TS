import type { MetadataRoute } from "next";

const SITE_URL = "https://bot-coin.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${SITE_URL}/`,
    },
    {
      url: `${SITE_URL}/memegenerator`,
    },
  ];
}
