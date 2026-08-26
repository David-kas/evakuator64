import { SITE } from "@/lib/site";
import { photos } from "@/lib/images";
import { CallButton } from "@/components/ui/CallButton";
import Image from "next/image";

const perks = [
  "24/7 круглосуточно",
  "Быстрый выезд",
  "Бережная погрузка",
  "Честная цена",
];

export function Hero() {
  return (
    <section className="relative min-h-[100svh] overflow-hidden">
      <Image
        src={photos.hero.src}
        alt={photos.hero.alt}
        fill
        preload
        fetchPriority="high"
        sizes="100vw"
        className="object-cover object-[62%_50%]"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/78 to-black/25" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40" />
      <div className="tech-grid pointer-events-none absolute inset-0 opacity-40 mix-blend-overlay" />

      <div className="relative mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-end px-4 pb-24 pt-28 sm:px-6 lg:justify-center lg:pb-16">
        <div className="max-w-3xl">
          <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-accent/30 bg-black/40 px-4 py-2 text-xs uppercase tracking-[0.22em] text-accent">
            <span className="relative flex h-2.5 w-2.5">
              <span className="pulse-ring absolute inset-0 rounded-full bg-accent" />
              <span className="relative h-2.5 w-2.5 rounded-full bg-accent" />
            </span>
            На связи 24/7 · Балашов
          </div>
          <p className="text-sm uppercase tracking-[0.28em] text-white/50">Экстренный выезд</p>
          <h1 className="mt-3 font-display text-5xl font-semibold leading-[0.95] sm:text-7xl lg:text-8xl">
            Эвакуатор{" "}
            <span className="block text-accent">24/7</span>
          </h1>
          <h2 className="mt-6 max-w-xl font-display text-xl font-medium leading-snug text-white sm:text-3xl">
            Быстро приедем и безопасно доставим автомобиль
          </h2>
          <p className="mt-5 max-w-lg text-base leading-7 text-white/70">
            Эвакуация легковых автомобилей, внедорожников и коммерческого транспорта.
            Работаем круглосуточно в Балашове и по Саратовской области.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <CallButton className="min-h-14 px-7 text-base" />
            <a
              href={`tel:${SITE.phoneTel}`}
              className="inline-flex min-h-14 items-center justify-center rounded-full border border-white/20 px-7 text-base hover:border-accent hover:text-accent"
            >
              Позвонить: {SITE.phoneDisplay}
            </a>
          </div>
          <ul className="mt-10 grid grid-cols-2 gap-3 text-sm text-white/80 sm:flex sm:flex-wrap">
            {perks.map((item) => (
              <li
                key={item}
                className="rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export function LiveStrip() {
  const items = [
    "ЭВАКУАТОР БАЛАШОВ",
    "ВЫЗОВ 24/7",
    SITE.phoneDisplay,
    "ЭКСТРЕННЫЙ ВЫЕЗД",
    "САРАТОВСКАЯ ОБЛАСТЬ",
    "НА СВЯЗИ 24/7",
  ];
  return (
    <div className="overflow-hidden border-y border-white/10 bg-black py-3">
      <div className="marquee-track flex w-max gap-10 text-xs uppercase tracking-[0.32em] text-white/45">
        {[...items, ...items].map((item, index) => (
          <span key={`${item}-${index}`} className="flex items-center gap-10">
            {item}
            <span className="text-accent">/</span>
          </span>
        ))}
      </div>
    </div>
  );
}
