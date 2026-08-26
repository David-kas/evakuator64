import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { cities, getCity } from "@/lib/cities";
import { getServicePage, servicePages } from "@/lib/services";
import { CityLanding } from "@/components/pages/CityLanding";
import { ServiceLanding } from "@/components/pages/ServiceLanding";
import { pageMeta } from "@/lib/seo";

export const dynamicParams = false;

export function generateStaticParams() {
  return [
    ...cities.map((city) => ({ slug: city.slug })),
    ...servicePages.map((page) => ({ slug: page.slug })),
  ];
}

export async function generateMetadata({
  params,
}: PageProps<"/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const city = getCity(slug);
  if (city) {
    return pageMeta({
      title: city.title,
      description: city.description,
      path: `/${city.slug}`,
    });
  }
  const service = getServicePage(slug);
  if (service) {
    return pageMeta({
      title: service.title,
      description: service.description,
      path: `/${service.slug}`,
    });
  }
  return {};
}

export default async function SlugPage({ params }: PageProps<"/[slug]">) {
  const { slug } = await params;
  const city = getCity(slug);
  if (city) return <CityLanding city={city} />;
  const service = getServicePage(slug);
  if (service) return <ServiceLanding page={service} />;
  notFound();
}
