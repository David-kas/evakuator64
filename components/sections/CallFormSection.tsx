import { CallForm } from "@/components/ui/CallForm";
import { PhoneLink } from "@/components/ui/PhoneLink";
import { CoverImage } from "@/components/ui/CoverImage";
import { photos } from "@/lib/images";

export function CallFormSection({ page }: { page: string }) {
  return (
    <section id="zayavka" className="relative z-10 mx-auto -mt-10 max-w-7xl px-4 sm:px-6">
      <div className="grid overflow-hidden rounded-[2rem] border border-white/10 bg-card lg:grid-cols-[1.1fr_0.9fr]">
        <div className="p-6 sm:p-10">
          <p className="text-xs uppercase tracking-[0.22em] text-accent">Заявка</p>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl">Нужен эвакуатор?</h2>
          <p className="mt-3 max-w-md text-muted">
            Оставьте номер — перезвоним и уточним детали. Или сразу звоните:
          </p>
          <PhoneLink className="mt-2 inline-block font-display text-2xl hover:text-accent" />
          <div className="mt-8">
            <CallForm page={page} />
          </div>
        </div>
        <CoverImage
          photo={photos.ready}
          className="min-h-72 lg:min-h-full"
          rounded="rounded-none"
          sizes="(max-width: 1024px) 100vw, 40vw"
        />
      </div>
    </section>
  );
}
