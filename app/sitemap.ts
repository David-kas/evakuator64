import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";
import { cities } from "@/lib/cities";
import { servicePages } from "@/lib/services";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticRoutes = ["/", "/ceny", "/kontakty", ...servicePages.map((p) => `/${p.slug}`)];
  return [
    ...staticRoutes.map((path) => ({
      url: path === "/" ? SITE.url : `${SITE.url}${path}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: path === "/" ? 1 : 0.8,
    })),
    ...cities.map((city) => ({
      url: `${SITE.url}/${city.slug}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: city.slug === "evakuator-balashov" ? 0.9 : 0.7,
    })),
  ];
}
