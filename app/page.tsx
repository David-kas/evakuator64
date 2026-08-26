import { Hero, LiveStrip } from "@/components/sections/Hero";
import { CallFormSection } from "@/components/sections/CallFormSection";
import { Services } from "@/components/sections/Services";
import { Process } from "@/components/sections/Process";
import { Advantages } from "@/components/sections/Advantages";
import { GallerySection } from "@/components/sections/GallerySection";
import { SeoArticle } from "@/components/sections/SeoArticle";
import { GeoSeo } from "@/components/sections/GeoSeo";
import { FaqSection } from "@/components/sections/FaqSection";
import { FinalCta } from "@/components/sections/FinalCta";
import { WideBreak } from "@/components/sections/WideBreak";
import { JsonLd } from "@/components/ui/JsonLd";
import { homeFaq } from "@/lib/faq";
import { pageMeta } from "@/lib/seo";
import {
  graph,
  localBusinessSchema,
  serviceSchema,
  webPageSchema,
  websiteSchema,
} from "@/lib/schema";

export const metadata = pageMeta({
  title: "Эвакуатор в Балашове 24/7 — вызов эвакуатора | Саратовская область",
  description:
    "Эвакуатор в Балашове и Саратовской области круглосуточно. Выезд в Самойловку, Аркадак, Романовку, Калининск, Турки, Ртищево и другие населённые пункты. Вызвать эвакуатор: 8 992 6666 200.",
  path: "/",
  absolute: true,
  keywords: [
    "эвакуатор Балашов",
    "вызвать эвакуатор Балашов",
    "эвакуатор Балашов круглосуточно",
    "эвакуация автомобиля Балашов",
    "эвакуатор 24 часа Балашов",
    "срочный эвакуатор Балашов",
  ],
});

export default function Home() {
  return (
    <>
      <JsonLd
        data={graph([
          localBusinessSchema(),
          websiteSchema(),
          webPageSchema({
            path: "/",
            name: "Эвакуатор в Балашове 24/7",
            description:
              "Круглосуточный эвакуатор в Балашове и Саратовской области. Вызвать эвакуатор 8 992 6666 200.",
          }),
          serviceSchema({
            name: "Круглосуточная эвакуация автомобилей",
            description:
              "Эвакуатор в Балашове 24/7: эвакуация легковых автомобилей, внедорожников и коммерческого транспорта.",
            path: "/",
          }),
        ])}
      />
      <Hero />
      <LiveStrip />
      <CallFormSection page="Главная" />
      <Services />
      <WideBreak which="loader" />
      <Process />
      <Advantages />
      <GallerySection />
      <SeoArticle />
      <GeoSeo />
      <FaqSection items={homeFaq} />
      <FinalCta />
    </>
  );
}
