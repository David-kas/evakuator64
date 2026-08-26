import Link from "next/link";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { CoverImage } from "@/components/ui/CoverImage";
import { CallButton } from "@/components/ui/CallButton";
import { PhoneLink } from "@/components/ui/PhoneLink";
import { CallFormSection } from "@/components/sections/CallFormSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { FinalCta } from "@/components/sections/FinalCta";
import { JsonLd } from "@/components/ui/JsonLd";
import { cities, type City } from "@/lib/cities";
import { photos } from "@/lib/images";
import {
  graph,
  localBusinessSchema,
  serviceSchema,
  webPageSchema,
} from "@/lib/schema";

export function CityLanding({ city }: { city: City }) {
  const nearby = city.nearby
    .map((slug) => cities.find((item) => item.slug === slug))
    .filter(Boolean) as City[];

  return (
    <>
      <JsonLd
        data={graph([
          localBusinessSchema(),
          webPageSchema({
            path: `/${city.slug}`,
            name: city.title,
            description: city.description,
          }),
          serviceSchema({
            name: `Эвакуатор ${city.prep}`,
            description: city.description,
            path: `/${city.slug}`,
          }),
        ])}
      />
      <div className="mx-auto max-w-7xl px-4 pb-8 pt-28 sm:px-6">
        <Breadcrumbs items={[{ name: `Эвакуатор ${city.prep}`, path: `/${city.slug}` }]} />
        <div className="mt-8 grid items-end gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-accent">
              Саратовская область · 24/7
            </p>
            <h1 className="mt-3 max-w-4xl font-display text-4xl leading-tight sm:text-6xl">
              {city.h1}
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-white/70">{city.lead}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <CallButton />
              <PhoneLink className="inline-flex items-center rounded-full border border-white/15 px-5 py-3 font-display text-lg hover:text-accent" />
            </div>
          </div>
          <CoverImage photo={photos.street} className="aspect-[4/5] max-h-[520px]" sizes="50vw" />
        </div>
      </div>

      <CallFormSection page={city.name} />

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <p className="max-w-3xl text-lg leading-8 text-white/70">{city.highlight}</p>
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {city.situations.map((item) => (
            <p key={item} className="rounded-3xl border border-white/10 p-6 text-white/80">
              {item}
            </p>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6">
        <h2 className="font-display text-3xl sm:text-4xl">Особенности направления</h2>
        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          {city.specialties.map((item) => (
            <article key={item.title} className="rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-7">
              <h3 className="font-display text-xl">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-muted">{item.text}</p>
            </article>
          ))}
        </div>
        <h2 className="mt-16 font-display text-3xl">Маршруты и выезд</h2>
        <p className="mt-4 max-w-3xl leading-8 text-white/70">{city.routes}</p>
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {city.article.map((paragraph) => (
            <p key={paragraph.slice(0, 40)} className="leading-8 text-white/70">
              {paragraph}
            </p>
          ))}
        </div>
      </section>

      {nearby.length ? (
        <section className="mx-auto max-w-7xl px-4 pb-12 sm:px-6">
          <h2 className="font-display text-3xl">Ближайшие населённые пункты</h2>
          <div className="mt-6 flex flex-wrap gap-2">
            {nearby.map((item) => (
              <Link
                key={item.slug}
                href={`/${item.slug}`}
                className="rounded-full border border-white/10 px-4 py-2 text-sm hover:border-accent hover:text-accent"
              >
                Эвакуатор {item.prep}
              </Link>
            ))}
            <Link
              href="/evakuaciya-avtomobilya"
              className="rounded-full border border-white/10 px-4 py-2 text-sm hover:border-accent hover:text-accent"
            >
              Эвакуация автомобиля
            </Link>
            <Link
              href="/ceny"
              className="rounded-full border border-white/10 px-4 py-2 text-sm hover:border-accent hover:text-accent"
            >
              Стоимость
            </Link>
          </div>
        </section>
      ) : null}

      <FaqSection items={city.faq} title={`Вопросы про эвакуатор ${city.prep}`} />
      <FinalCta />
    </>
  );
}
