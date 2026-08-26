import Link from "next/link";
import { CoverImage } from "@/components/ui/CoverImage";
import { photos } from "@/lib/images";

const services = [
  {
    title: "Эвакуация легковых автомобилей",
    text: "После ДТП, поломки или невозможности продолжить движение. Эвакуатор для легкового автомобиля в Балашове и по области.",
    href: "/evakuaciya-avtomobilya",
    photo: photos.sedan,
    wide: true,
  },
  {
    title: "Эвакуация внедорожников",
    text: "Безопасная перевозка тяжёлых автомобилей и кроссоверов. Эвакуатор для внедорожника подбираем под задачу.",
    href: "/perevozka-avtomobilya",
    photo: photos.uaz,
  },
  {
    title: "Эвакуация после ДТП",
    text: "Аккуратная погрузка повреждённого автомобиля. Эвакуатор после ДТП работает круглосуточно.",
    href: "/evakuator-posle-dtp",
    photo: photos.minivan,
  },
  {
    title: "Перевозка автомобилей",
    text: "Доставка автомобиля в сервис, гараж, другой город или указанное место.",
    href: "/perevozka-avtomobilya",
    photo: photos.rangeRover,
  },
  {
    title: "Эвакуация коммерческого транспорта",
    text: "Перевозка лёгкого коммерческого транспорта при необходимости. Габариты уточняем до выезда.",
    href: "/evakuaciya-avtomobilya",
    photo: photos.van,
  },
  {
    title: "Срочный вызов эвакуатора",
    text: "Оперативный выезд после обращения. Эвакуатор круглосуточно, 24 часа, без выходных.",
    href: "/evakuator-kruglosutochno",
    photo: photos.standby,
  },
];

export function Services() {
  return (
    <section id="uslugi" className="mx-auto max-w-7xl px-4 py-24 sm:px-6">
      <div className="max-w-2xl">
        <p className="text-xs uppercase tracking-[0.22em] text-accent">Услуги</p>
        <h2 className="mt-3 font-display text-4xl sm:text-5xl">Какие автомобили эвакуируем</h2>
        <p className="mt-4 text-muted">
          Не шаблонные карточки «всё для всех», а реальные задачи: легковые, внедорожники,
          коммерческий транспорт и срочный вызов эвакуатора в Балашове.
        </p>
      </div>
      <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <Link
            key={service.title}
            href={service.href}
            className={`group relative isolate min-h-80 overflow-hidden rounded-[1.75rem] ${
              service.wide ? "md:col-span-2 lg:col-span-2" : ""
            }`}
          >
            <CoverImage
              photo={service.photo}
              className="absolute inset-0 h-full"
              rounded="rounded-none"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/10" />
            <div className="relative flex h-full min-h-80 flex-col justify-end p-6 sm:p-8">
              <h3 className="font-display text-2xl">{service.title}</h3>
              <p className="mt-3 max-w-md text-sm leading-6 text-white/75">{service.text}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
