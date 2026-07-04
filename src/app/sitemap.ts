import type { MetadataRoute } from "next";

import { SITE_URL } from "@/constants/seo";

const routes = [
  { path: "/", priority: 1 },
  { path: "/about/story", priority: 0.8 },
  { path: "/about/process", priority: 0.8 },
  { path: "/recommend/art", priority: 0.7 },
  { path: "/recommend/space", priority: 0.7 },
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return routes.map(route => ({
    url: `${SITE_URL}${route.path}`,
    lastModified,
    changeFrequency: "weekly",
    priority: route.priority,
  }));
}
