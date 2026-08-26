import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Эвакуатор 64",
    short_name: "Эвакуатор 64",
    description: "Круглосуточный эвакуатор в Балашове и Саратовской области",
    start_url: "/",
    display: "standalone",
    background_color: "#07080b",
    theme_color: "#07080b",
    lang: "ru",
  };
}
