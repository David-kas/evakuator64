import Link from "next/link";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { CoverImage } from "@/components/ui/CoverImage";
import { CallButton } from "@/components/ui/CallButton";
import { PhoneLink } from "@/components/ui/PhoneLink";
import { CallFormSection } from "@/components/sections/CallFormSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { FinalCta } from "@/components/sections/FinalCta";
import { JsonLd } from "@/components/ui/JsonLd";
import type { ServicePage } from "@/lib/services";
import {
  graph,
  localBusinessSchema,
  serviceSchema,
  webPageSchema,
} from "@/lib/schema";

export function ServiceLanding({ page }: { page: ServicePage }) {
  return (
    <>
      <JsonLd
        data={graph([
          localBusinessSchema(),
          webPageSchema({
            path: `/${page.slug}`,
            name: page.title,
            description: page.description,
          }),
          serviceSchema({
            name: page.h1,
            description: page.description,
            path: `/${page.slug}`,
          }),
        ])}
      />
      <div className="mx-auto max-w-7xl px-4 pb-8 pt-28 sm:px-6">
        <Breadcrumbs items={[{ name: page.h1, path: `/${page.slug}` }]} />
        <div className="mt-8 grid items-center gap-10 lg:grid-cols-2">
          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-accent">{page.kicker}</p>
            <h1 className="mt-3 font-display text-4xl leading-tight sm:text-6xl">{page.h1}</h1>
            <p className="mt-5 text-lg leading-8 text-white/70">{page.lead}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <CallButton />
              <PhoneLink className="inline-flex items-center rounded-full border border-white/15 px-5 py-3 font-display text-lg hover:text-accent" />
            </div>
          </div>
          <CoverImage photo={page.image} className="aspect-[4/5]" sizes="50vw" />
        </div>
      </div>
      <CallFormSection page={page.h1} />
      <article className="mx-auto max-w-3xl px-4 py-20 sm:px-6">
        {page.sections.map((section) => (
          <section key={section.h2} className="mb-12">
            <h2 className="font-display text-3xl">{section.h2}</h2>
            {section.paragraphs.map((text) => (
              <p key={text.slice(0, 32)} className="mt-4 leading-8 text-white/70">
                {text}
              </p>
            ))}
            {section.list ? (
              <ul className="mt-4 list-disc space-y-2 pl-5 text-white/70">
                {section.list.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            ) : null}
          </section>
        ))}
        <h2 className="font-display text-3xl">Связанные услуги</h2>
        <div className="mt-6 flex flex-wrap gap-2">
          {page.related.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full border border-white/10 px-4 py-2 text-sm hover:border-accent hover:text-accent"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </article>
      <FaqSection items={page.faq} />
      <FinalCta />
    </>
  );
}
