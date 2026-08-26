import { CoverImage } from "@/components/ui/CoverImage";
import { photos } from "@/lib/images";

const items = [
  {
    t: "Работаем круглосуточно",
    d: "Помощь в любое время суток. Эвакуатор 24 часа в Балашове и выезды по области.",
  },
  {
    t: "Быстрый выезд",
    d: "Стараемся максимально быстро отправить эвакуатор после уточнения адреса.",
  },
  {
    t: "Бережная погрузка",
    d: "Аккуратно работаем с автомобилем: фиксация на платформе, без лишней спешки.",
  },
  {
    t: "Прозрачная стоимость",
    d: "Согласовываем условия до выполнения заказа. Без сюрпризов после погрузки.",
  },
  {
    t: "Разные типы автомобилей",
    d: "Подберём подходящий вариант эвакуации: легковые, внедорожники, лёгкий коммерческий транспорт.",
  },
];

export function Advantages() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6">
      <div className="grid items-end gap-8 lg:grid-cols-[1.2fr_0.8fr]">
        <div>
          <p className="text-xs uppercase tracking-[0.22em] text-accent">Почему мы</p>
          <h2 className="mt-3 max-w-3xl font-display text-4xl leading-tight sm:text-6xl">
            Когда машина не едет — мы уже в пути
          </h2>
        </div>
        <CoverImage photo={photos.fleet} className="aspect-[5/4]" sizes="(max-width: 1024px) 100vw, 40vw" />
      </div>
      <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {items.map((item, index) => (
          <article
            key={item.t}
            className={`rounded-[1.75rem] border border-white/10 p-7 ${
              index === 0 ? "bg-accent text-ink md:col-span-2 lg:col-span-1" : "bg-white/[0.03]"
            }`}
          >
            <p className={`font-display text-sm ${index === 0 ? "text-ink/60" : "text-accent"}`}>
              0{index + 1}
            </p>
            <h3 className="mt-4 font-display text-2xl">{item.t}</h3>
            <p className={`mt-3 text-sm leading-6 ${index === 0 ? "text-ink/80" : "text-muted"}`}>
              {item.d}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
