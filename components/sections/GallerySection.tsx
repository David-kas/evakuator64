import { Gallery } from "@/components/ui/Gallery";
import { gallery } from "@/lib/images";

export function GallerySection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6">
      <div className="mb-10 max-w-2xl">
        <p className="text-xs uppercase tracking-[0.22em] text-accent">Работы</p>
        <h2 className="mt-3 font-display text-4xl sm:text-5xl">Наш эвакуатор в работе</h2>
        <p className="mt-4 text-muted">
          Реальные выезды: легковые автомобили, внедорожники, коммерческий транспорт.
          Нажмите на фото, чтобы открыть крупнее.
        </p>
      </div>
      <Gallery photos={gallery} />
    </section>
  );
}
