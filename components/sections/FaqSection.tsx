import { FaqList } from "@/components/ui/FaqList";
import { JsonLd } from "@/components/ui/JsonLd";
import { faqSchema } from "@/lib/schema";
import type { FaqItem } from "@/lib/faq";

export function FaqSection({
  items,
  title = "Частые вопросы",
}: {
  items: FaqItem[];
  title?: string;
}) {
  return (
    <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6">
      <JsonLd data={faqSchema(items)} />
      <div className="mb-10 max-w-2xl">
        <p className="text-xs uppercase tracking-[0.22em] text-accent">FAQ</p>
        <h2 className="mt-3 font-display text-4xl sm:text-5xl">{title}</h2>
      </div>
      <FaqList items={items} />
    </section>
  );
}
