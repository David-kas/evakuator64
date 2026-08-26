import { CoverImage } from "@/components/ui/CoverImage";
import { photos } from "@/lib/images";

const steps = [
  { n: "01", t: "Вы звоните или оставляете заявку.", d: "Телефон 8 992 6666 200 или форма на сайте." },
  { n: "02", t: "Уточняем местоположение и тип автомобиля.", d: "Город, ориентир, марка, куда везти." },
  { n: "03", t: "Отправляем подходящий эвакуатор.", d: "Выезд из Балашова по Саратовской области." },
  { n: "04", t: "Аккуратно загружаем и доставляем автомобиль.", d: "Фиксация на платформе и перевозка по адресу." },
];

export function Process() {
  return (
    <section id="process" className="relative overflow-hidden py-24">
      <div className="absolute inset-x-0 top-1/2 h-px road-dash opacity-40" />
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="text-xs uppercase tracking-[0.22em] text-accent">Маршрут заявки</p>
          <h2 className="mt-3 font-display text-4xl sm:text-5xl">Как проходит эвакуация</h2>
          <p className="mt-4 max-w-md text-muted">
            Короткая цепочка без лишних статусов. Вызов эвакуатора должен быть понятен за минуту.
          </p>
          <CoverImage photo={photos.work02} className="mt-8 aspect-[4/5] max-w-md" sizes="(max-width: 1024px) 100vw, 40vw" />
        </div>
        <ol className="relative grid gap-6">
          {steps.map((step) => (
            <li
              key={step.n}
              className="relative rounded-3xl border border-white/10 bg-white/[0.03] p-6 sm:p-8"
            >
              <p className="font-display text-4xl text-accent">{step.n}</p>
              <h3 className="mt-3 font-display text-xl">{step.t}</h3>
              <p className="mt-2 text-sm text-muted">{step.d}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
