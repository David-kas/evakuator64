import { SITE } from "@/lib/site";

export function MobileBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-white/10 bg-black/90 p-3 backdrop-blur-xl lg:hidden pb-[max(0.75rem,env(safe-area-inset-bottom))]">
      <div className="grid grid-cols-2 gap-2">
        <a
          href={`tel:${SITE.phoneTel}`}
          className="flex min-h-12 items-center justify-center rounded-2xl border border-white/15 text-sm font-semibold"
        >
          Позвонить
        </a>
        <a
          href={`tel:${SITE.phoneTel}`}
          className="flex min-h-12 items-center justify-center rounded-2xl bg-accent text-sm font-semibold text-ink"
        >
          Вызвать эвакуатор
        </a>
      </div>
    </div>
  );
}
