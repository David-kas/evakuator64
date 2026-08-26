export const SITE = {
  name: "Эвакуатор 64",
  brand: "ЭВАКУАТОР 64",
  domain: "evakuator-64.vercel.app",
  url: "https://evakuator-64.vercel.app",
  phoneDisplay: "8 992 6666 200",
  phoneTel: "+79926666200",
  phoneRaw: "89926666200",
  region: "Саратовская область",
  hub: "Балашов",
  locale: "ru_RU",
  lang: "ru",
} as const;

export const NAV = [
  { href: "/#uslugi", label: "Услуги" },
  { href: "/#process", label: "Как работаем" },
  { href: "/ceny", label: "Цены" },
  { href: "/#geo", label: "География" },
  { href: "/kontakty", label: "Контакты" },
] as const;

export const SERVICE_LINKS = [
  {
    href: "/evakuaciya-avtomobilya",
    label: "Эвакуация автомобиля",
  },
  {
    href: "/evakuator-kruglosutochno",
    label: "Круглосуточный эвакуатор",
  },
  {
    href: "/evakuator-posle-dtp",
    label: "Эвакуатор после ДТП",
  },
  {
    href: "/perevozka-avtomobilya",
    label: "Перевозка автомобиля",
  },
] as const;

export function pageUrl(path = "/") {
  if (path === "/") return SITE.url;
  return `${SITE.url}${path.startsWith("/") ? path : `/${path}`}`;
}
