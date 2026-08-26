import type { Metadata } from "next";
import { SITE, pageUrl } from "./site";

export function pageMeta(opts: {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  absolute?: boolean;
}): Metadata {
  const url = pageUrl(opts.path);
  return {
    title: opts.absolute ? { absolute: opts.title } : opts.title,
    description: opts.description,
    keywords: opts.keywords,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      locale: SITE.locale,
      url,
      siteName: SITE.name,
      title: opts.title,
      description: opts.description,
      images: [
        {
          url: pageUrl("/images/hero.jpg"),
          width: 1200,
          height: 1600,
          alt: "Эвакуатор 64 в Балашове",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: opts.title,
      description: opts.description,
      images: [pageUrl("/images/hero.jpg")],
    },
  };
}
