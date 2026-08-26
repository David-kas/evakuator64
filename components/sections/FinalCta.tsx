import { SITE } from "@/lib/site";
import { CallButton } from "@/components/ui/CallButton";
import { PhoneLink } from "@/components/ui/PhoneLink";
import Image from "next/image";
import { photos } from "@/lib/images";

export function FinalCta() {
  return (
    <section className="relative overflow-hidden py-28">
      <Image
        src={photos.city.src}
        alt={photos.city.alt}
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/80" />
      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6">
        <p className="text-xs uppercase tracking-[0.22em] text-accent">Срочный вызов</p>
        <h2 className="mt-4 font-display text-4xl sm:text-6xl">Нужен эвакуатор прямо сейчас?</h2>
        <p className="mx-auto mt-5 max-w-xl text-muted">
          Позвоните нам или оставьте номер телефона — свяжемся с вами и уточним детали.
        </p>
        <div className="mt-8 flex flex-col items-center gap-4">
          <CallButton className="min-h-14 px-10 text-base" />
          <PhoneLink className="font-display text-4xl hover:text-accent sm:text-6xl" />
          <p className="text-xs uppercase tracking-[0.2em] text-white/40">
            Эвакуатор {SITE.hub} · 24/7
          </p>
        </div>
      </div>
    </section>
  );
}
