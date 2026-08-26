import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { CallButton } from "@/components/ui/CallButton";
import { PhoneLink } from "@/components/ui/PhoneLink";
import { CallFormSection } from "@/components/sections/CallFormSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { FinalCta } from "@/components/sections/FinalCta";
import { JsonLd } from "@/components/ui/JsonLd";
import { CoverImage } from "@/components/ui/CoverImage";
import { photos } from "@/lib/images";
import { pageMeta } from "@/lib/seo";
import {
  graph,
  localBusinessSchema,
  serviceSchema,
  webPageSchema,
} from "@/lib/schema";
import Link from "next/link";

export const metadata = pageMeta({
  title: "Цены на эвакуатор в Балашове — стоимость эвакуации автомобиля",
  description:
    "Стоимость эвакуатора в Балашове и Саратовской области. От чего зависит цена, как заказать недорогой эвакуатор. Телефон 8 992 6666 200.",
  path: "/ceny",
});

const faq = [
  {
    q: "Почему нет прайса «эвакуатор от 1500»?",
    a: "Потому что километраж, тип автомобиля и сложность погрузки разные. Назвать одну цифру на все случаи — значит потом добирать скрытыми доплатами. Мы считаем до выезда.",
  },
  {
    q: "Можно ли узнать цену по телефону?",
    a: "Да. Назовите адрес подачи, пункт назначения и тип автомобиля — озвучим ориентир. Телефон 8 992 6666 200.",
  },
  {
    q: "Дороже ли эвакуатор ночью?",
    a: "Ночной режим сам по себе не «штраф». На цену сильнее влияют расстояние и сложность. Условия согласуем заранее.",
  },
  {
    q: "Сколько стоит эвакуатор в Самойловку или Аркадак?",
    a: "Это выезд из Балашова по области. Стоимость выше городской подачи. Точную сумму назовём по адресу.",
  },
];

export default function PricesPage() {
  return (
    <>
      <JsonLd
        data={graph([
          localBusinessSchema(),
          webPageSchema({
            path: "/ceny",
            name: "Цены на эвакуатор в Балашове",
            description:
              "Факторы стоимости эвакуации автомобиля в Балашове и Саратовской области.",
          }),
          serviceSchema({
            name: "Эвакуация автомобилей",
            description: "Расчёт стоимости эвакуатора до выезда.",
            path: "/ceny",
          }),
        ])}
      />
      <div className="mx-auto max-w-7xl px-4 pb-8 pt-28 sm:px-6">
        <Breadcrumbs items={[{ name: "Цены", path: "/ceny" }]} />
        <div className="mt-8 grid gap-10 lg:grid-cols-2">
          <div>
            <h1 className="font-display text-4xl sm:text-6xl">
              Стоимость эвакуатора в Балашове
            </h1>
            <p className="mt-5 text-lg leading-8 text-white/70">
              Цена эвакуации автомобиля зависит от расстояния, типа машины и сложности
              погрузки. Мы не публикуем фейковый прайс «для всех городов». Согласуем
              условия до выезда — это честнее, чем мелкий шрифт после работы.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <CallButton />
              <PhoneLink className="inline-flex items-center rounded-full border border-white/15 px-5 py-3 font-display text-lg hover:text-accent" />
            </div>
          </div>
          <CoverImage photo={photos.loader} className="aspect-[4/5]" sizes="50vw" />
        </div>
      </div>
      <CallFormSection page="Цены" />
      <article className="mx-auto max-w-3xl px-4 py-20 sm:px-6">
        <h2 className="font-display text-3xl">Что влияет на стоимость</h2>
        <ul className="mt-6 space-y-4 text-white/75">
          <li>
            <strong className="text-white">Расстояние.</strong> Подача по Балашову короче,
            чем эвакуатор в Самойловку, Аркадак, Калининск или Ртищево.
          </li>
          <li>
            <strong className="text-white">Тип автомобиля.</strong> Легковой, кроссовер,
            внедорожник, лёгкий коммерческий транспорт.
          </li>
          <li>
            <strong className="text-white">Сложность погрузки.</strong> Заблокированные
            колёса, тесный двор, кювет, повреждённый кузов после ДТП.
          </li>
          <li>
            <strong className="text-white">Пункт назначения.</strong> Сервис в городе,
            перевозка между населёнными пунктами, межгород в Борисоглебск.
          </li>
        </ul>
        <h2 className="mt-12 font-display text-3xl">Как получить расчёт</h2>
        <p className="mt-4 leading-8 text-white/70">
          Позвоните 8 992 6666 200 или оставьте заявку. Назовите, откуда забрать
          автомобиль и куда везти. Недорогой эвакуатор — это понятная сумма заранее,
          а не аукцион на месте. Смотрите также{" "}
          <Link href="/evakuaciya-avtomobilya" className="text-accent hover:underline">
            эвакуацию автомобиля
          </Link>{" "}
          и{" "}
          <Link href="/evakuator-balashov" className="text-accent hover:underline">
            эвакуатор в Балашове
          </Link>
          .
        </p>
      </article>
      <FaqSection items={faq} title="Вопросы о цене" />
      <FinalCta />
    </>
  );
}
