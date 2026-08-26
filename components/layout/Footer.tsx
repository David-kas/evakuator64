import Link from "next/link";
import { SERVICE_LINKS, SITE } from "@/lib/site";
import { cities } from "@/lib/cities";
import { PhoneLink } from "@/components/ui/PhoneLink";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black pb-24 lg:pb-0">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <Logo />
          <p className="mt-5 max-w-sm text-sm leading-7 text-muted">
            Круглосуточная эвакуация автомобилей в Балашове и Саратовской области.
            Срочный выезд, бережная погрузка, понятные условия.
          </p>
          <p className="mt-6 text-xs uppercase tracking-[0.2em] text-accent">Телефон 24/7</p>
          <PhoneLink className="mt-2 block font-display text-3xl hover:text-accent" />
        </div>
        <div>
          <p className="text-sm uppercase tracking-[0.18em] text-white/40">Услуги</p>
          <ul className="mt-4 grid gap-2 text-sm text-muted">
            {SERVICE_LINKS.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-accent">
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/ceny" className="hover:text-accent">
                Стоимость
              </Link>
            </li>
            <li>
              <Link href="/kontakty" className="hover:text-accent">
                Контакты
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-sm uppercase tracking-[0.18em] text-white/40">Города</p>
          <ul className="mt-4 grid gap-2 text-sm text-muted">
            {cities.map((city) => (
              <li key={city.slug}>
                <Link href={`/${city.slug}`} className="hover:text-accent">
                  Эвакуатор {city.prep}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 px-4 py-5 text-center text-xs text-white/35">
        © {new Date().getFullYear()} {SITE.name}. Эвакуатор в Балашове и Саратовской области.
      </div>
    </footer>
  );
}
