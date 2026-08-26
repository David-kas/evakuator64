import { SITE, pageUrl } from "./site";
import { areaServed, cities } from "./cities";
import type { FaqItem } from "./faq";

export function areaServedSchema() {
  return areaServed.map((name) => ({
    "@type": name === "Саратовская область" ? "AdministrativeArea" : "City",
    name,
  }));
}

export function localBusinessSchema() {
  return {
    "@type": ["LocalBusiness", "AutomotiveBusiness"],
    "@id": `${SITE.url}/#business`,
    name: SITE.name,
    url: SITE.url,
    telephone: SITE.phoneTel,
    image: `${SITE.url}/images/hero.jpg`,
    priceRange: "₽₽",
    address: {
      "@type": "PostalAddress",
      addressLocality: SITE.hub,
      addressRegion: SITE.region,
      addressCountry: "RU",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 51.5502,
      longitude: 43.1667,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "00:00",
      closes: "23:59",
    },
    areaServed: areaServedSchema(),
    serviceType: [
      "Эвакуация автомобилей",
      "Круглосуточный эвакуатор",
      "Эвакуация после ДТП",
      "Перевозка автомобиля",
    ],
  };
}

export function websiteSchema() {
  return {
    "@type": "WebSite",
    "@id": `${SITE.url}/#website`,
    url: SITE.url,
    name: SITE.name,
    inLanguage: "ru-RU",
    publisher: { "@id": `${SITE.url}/#business` },
  };
}

export function webPageSchema(opts: {
  path: string;
  name: string;
  description: string;
}) {
  return {
    "@type": "WebPage",
    "@id": `${pageUrl(opts.path)}#webpage`,
    url: pageUrl(opts.path),
    name: opts.name,
    description: opts.description,
    isPartOf: { "@id": `${SITE.url}/#website` },
    about: { "@id": `${SITE.url}/#business` },
    inLanguage: "ru-RU",
  };
}

export function serviceSchema(opts: {
  name: string;
  description: string;
  path: string;
}) {
  return {
    "@type": "Service",
    name: opts.name,
    description: opts.description,
    url: pageUrl(opts.path),
    provider: { "@id": `${SITE.url}/#business` },
    areaServed: areaServedSchema(),
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      url: pageUrl(opts.path),
      priceCurrency: "RUB",
      description:
        "Стоимость эвакуатора рассчитывается по расстоянию, типу автомобиля и сложности погрузки. Уточняется по телефону до выезда.",
    },
  };
}

export function faqSchema(items: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: pageUrl(item.path),
    })),
  };
}

export function graph(nodes: Record<string, unknown>[]) {
  return {
    "@context": "https://schema.org",
    "@graph": nodes,
  };
}

export const cityPaths = cities.map((city) => `/${city.slug}`);
