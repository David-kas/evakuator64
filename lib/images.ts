export type Photo = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

const portrait = { width: 1200, height: 1600 };

export const photos = {
  hero: {
    src: "/images/hero.jpg",
    alt: "Эвакуатор в Балашове перевозит кроссовер на платформе — круглосуточная эвакуация автомобилей",
    ...portrait,
  },
  sedan: {
    src: "/images/sedan.jpg",
    alt: "Эвакуация легкового автомобиля в Саратовской области — эвакуатор 64 загрузил седан на платформу",
    ...portrait,
  },
  uaz: {
    src: "/images/uaz.jpg",
    alt: "Эвакуатор для внедорожника: перевозка УАЗ на эвакуаторе в Балашове и Саратовской области",
    ...portrait,
  },
  crossover: {
    src: "/images/crossover.jpg",
    alt: "Бережная эвакуация кроссовера эвакуатором в Балашове",
    ...portrait,
  },
  van: {
    src: "/images/van.jpg",
    alt: "Эвакуация коммерческого транспорта: микроавтобус на эвакуаторе в Саратовской области",
    ...portrait,
  },
  loader: {
    src: "/images/loader.jpg",
    alt: "Перевозка техники эвакуатором — мини-погрузчик на платформе эвакуатора 64",
    ...portrait,
  },
  minivan: {
    src: "/images/minivan.jpg",
    alt: "Эвакуация минивэна в Балашове — срочный вызов эвакуатора 24/7",
    ...portrait,
  },
  rangeRover: {
    src: "/images/range-rover.jpg",
    alt: "Перевозка автомобиля эвакуатором: внедорожник на платформе в Саратовской области",
    ...portrait,
  },
  fleet: {
    src: "/images/fleet.jpg",
    alt: "Эвакуаторы 64 в Балашове — техника для круглосуточной эвакуации автомобилей",
    ...portrait,
  },
  city: {
    src: "/images/city.jpg",
    alt: "Эвакуатор в городе: выезд эвакуатора по Саратовской области",
    ...portrait,
  },
  ready: {
    src: "/images/ready.jpg",
    alt: "Срочный эвакуатор готов к выезду в Балашове — платформа РУСЬ, регион 164",
    ...portrait,
  },
  trailer: {
    src: "/images/trailer.jpg",
    alt: "Эвакуатор перевозит прицеп — услуги эвакуатора в Балашове и области",
    ...portrait,
  },
  street: {
    src: "/images/street.jpg",
    alt: "Эвакуатор на улице населённого пункта Саратовской области, готов принять заявку",
    ...portrait,
  },
  chassis: {
    src: "/images/chassis.jpg",
    alt: "Эвакуация коммерческого шасси — перевозка транспорта эвакуатором 64",
    ...portrait,
  },
  standby: {
    src: "/images/standby.jpg",
    alt: "Круглосуточный эвакуатор 24 часа на связи в Балашове",
    ...portrait,
  },
  work01: {
    src: "/images/work-01.jpg",
    alt: "Эвакуатор 64 в работе: перевозка кабины коммерческого транспорта",
    ...portrait,
  },
  work02: {
    src: "/images/work-02.jpg",
    alt: "Эвакуация внедорожника на трассе Саратовской области",
    ...portrait,
  },
  work03: {
    src: "/images/work-03.jpg",
    alt: "Эвакуация минивэна эвакуатором в Балашовском районе",
    ...portrait,
  },
} as const satisfies Record<string, Photo>;

export const gallery: Photo[] = [
  photos.sedan,
  photos.uaz,
  photos.van,
  photos.rangeRover,
  photos.crossover,
  photos.loader,
  photos.minivan,
  photos.fleet,
  photos.trailer,
  photos.city,
  photos.chassis,
  photos.work02,
];
