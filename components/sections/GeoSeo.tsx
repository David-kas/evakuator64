import Link from "next/link";
import { cities } from "@/lib/cities";

const blocks = [
  {
    slug: "evakuator-balashov",
    title: "Эвакуатор в Балашове",
    text: "Эвакуатор Балашов, вызвать эвакуатор в Балашове, срочный эвакуатор Балашов, круглосуточный эвакуатор Балашов, эвакуация автомобиля в Балашове, эвакуатор Балашов 24 часа, недорогой эвакуатор Балашов, эвакуатор после ДТП Балашов, заказать эвакуатор Балашов.",
  },
  {
    slug: "evakuator-samoylovka",
    title: "Эвакуатор в Самойловке",
    text: "Эвакуатор Самойловка, вызвать эвакуатор Самойловка, эвакуатор круглосуточно Самойловка, эвакуация автомобиля Самойловка, срочный эвакуатор Самойловка.",
  },
  {
    slug: "evakuator-arkadak",
    title: "Эвакуатор в Аркадаке",
    text: "Эвакуатор Аркадак, вызвать эвакуатор Аркадак, эвакуатор Аркадак круглосуточно, эвакуация автомобиля Аркадак, срочный эвакуатор Аркадак.",
  },
  {
    slug: "evakuator-romanovka",
    title: "Эвакуатор в Романовке",
    text: "Эвакуатор Романовка, вызвать эвакуатор Романовка, эвакуатор Романовка круглосуточно, эвакуация автомобиля Романовка.",
  },
  {
    slug: "evakuator-kalininsk",
    title: "Эвакуатор в Калининске",
    text: "Эвакуатор Калининск, вызвать эвакуатор Калининск, эвакуатор Калининск круглосуточно, эвакуация автомобиля Калининск.",
  },
  {
    slug: "evakuator-turki",
    title: "Эвакуатор в Турках",
    text: "Эвакуатор Турки, вызвать эвакуатор Турки, эвакуатор Турки круглосуточно, эвакуация автомобиля в Турках.",
  },
  {
    slug: "evakuator-rtishchevo",
    title: "Эвакуатор в Ртищево",
    text: "Эвакуатор Ртищево, вызвать эвакуатор Ртищево, эвакуатор Ртищево круглосуточно, эвакуация автомобиля в Ртищево.",
  },
  {
    slug: "evakuator-ekaterinovka",
    title: "Эвакуатор в Екатериновке",
    text: "Эвакуатор Екатериновка, вызвать эвакуатор Екатериновка, эвакуация автомобиля Екатериновка.",
  },
  {
    slug: "evakuator-borisoglebsk",
    title: "Эвакуатор в Борисоглебске",
    text: "Эвакуатор Борисоглебск, вызвать эвакуатор Борисоглебск, межгородняя эвакуация из Балашова.",
  },
  {
    slug: "evakuator-petrovsk",
    title: "Эвакуатор в Петровске",
    text: "Эвакуатор Петровск, вызвать эвакуатор Петровск, эвакуация автомобиля Петровск, выезд по северу Саратовской области.",
  },
];

export function GeoSeo() {
  return (
    <section id="geo" className="border-t border-white/10 bg-black py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <h2 className="max-w-4xl font-display text-4xl sm:text-5xl">
          География работы эвакуатора
        </h2>
        <p className="mt-6 max-w-4xl text-base leading-8 text-white/70">
          Мы оказываем услуги эвакуатора в Балашове и выезжаем по Саратовской области.
          Можно вызвать эвакуатор в Балашове, Самойловке, Аркадаке, Романовке, Калининске,
          Турках, Ртищево, Екатериновке и других населённых пунктах. Работаем круглосуточно
          и принимаем заявки на срочную эвакуацию автомобилей, перевозку машин после ДТП,
          доставку автомобиля в автосервис и междугороднюю перевозку. Эвакуатор по
          Саратовской области, эвакуатор Саратовская область, помощь на дороге и
          эвакуатор 24/7 — через один номер 8 992 6666 200.
        </p>

        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {blocks.map((block) => (
            <Link
              key={block.slug}
              href={`/${block.slug}`}
              className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-accent/40"
            >
              <h3 className="font-display text-xl">{block.title}</h3>
              <p className="mt-3 text-sm leading-6 text-muted">{block.text}</p>
            </Link>
          ))}
        </div>

        <h3 className="mt-16 font-display text-2xl">Эвакуатор в городах и районах</h3>
        <div className="mt-6 flex flex-wrap gap-2">
          {cities.map((city) => (
            <Link
              key={city.slug}
              href={`/${city.slug}`}
              className="rounded-full border border-white/10 px-4 py-2 text-sm text-white/80 hover:border-accent hover:text-accent"
            >
              Эвакуатор {city.prep}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
