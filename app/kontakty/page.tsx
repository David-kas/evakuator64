import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { PhoneLink } from "@/components/ui/PhoneLink";
import { CallFormSection } from "@/components/sections/CallFormSection";
import { FinalCta } from "@/components/sections/FinalCta";
import { JsonLd } from "@/components/ui/JsonLd";
import { pageMeta } from "@/lib/seo";
import { SITE } from "@/lib/site";
import { cities } from "@/lib/cities";
import { graph, localBusinessSchema, webPageSchema } from "@/lib/schema";
import Link from "next/link";

export const metadata = pageMeta({
  title: "Контакты эвакуатора в Балашове — телефон 8 992 6666 200",
  description:
    "Контакты Эвакуатор 64: вызвать эвакуатор в Балашове и Саратовской области. Телефон 8 992 6666 200, форма заявки 24/7.",
  path: "/kontakty",
});

export default function ContactsPage() {
  return (
    <>
      <JsonLd
        data={graph([
          localBusinessSchema(),
          webPageSchema({
            path: "/kontakty",
            name: "Контакты эвакуатора в Балашове",
            description: "Телефон и форма вызова эвакуатора 24/7.",
          }),
        ])}
      />
      <div className="mx-auto max-w-7xl px-4 pb-8 pt-28 sm:px-6">
        <Breadcrumbs items={[{ name: "Контакты", path: "/kontakty" }]} />
        <h1 className="mt-8 font-display text-4xl sm:text-6xl">Контакты</h1>
        <p className="mt-5 max-w-2xl text-lg leading-8 text-white/70">
          Эвакуатор 64 — круглосуточная эвакуация автомобилей в Балашове и Саратовской
          области. Физический офисный адрес не указываем: заявки принимаем по телефону
          и через форму, выезд — к автомобилю.
        </p>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-8">
            <p className="text-xs uppercase tracking-[0.2em] text-accent">Телефон 24/7</p>
            <PhoneLink className="mt-4 block font-display text-4xl hover:text-accent" />
            <a
              href={`tel:${SITE.phoneTel}`}
              className="mt-6 inline-flex rounded-full bg-accent px-6 py-3 font-semibold text-ink"
            >
              Позвонить
            </a>
          </div>
          <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-8">
            <p className="text-xs uppercase tracking-[0.2em] text-accent">Зона работы</p>
            <p className="mt-4 leading-8 text-white/70">
              Балашов, Самойловка, Аркадак, Романовка, Калининск, Турки, Ртищево,
              Екатериновка, Петровск, выезд в Борисоглебск по согласованию. Саратовская
              область.
            </p>
          </div>
        </div>
      </div>
      <CallFormSection page="Контакты" />
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <h2 className="font-display text-3xl">Страницы городов</h2>
        <div className="mt-6 flex flex-wrap gap-2">
          {cities.map((city) => (
            <Link
              key={city.slug}
              href={`/${city.slug}`}
              className="rounded-full border border-white/10 px-4 py-2 text-sm hover:border-accent hover:text-accent"
            >
              Эвакуатор {city.prep}
            </Link>
          ))}
        </div>
      </section>
      <FinalCta />
    </>
  );
}
