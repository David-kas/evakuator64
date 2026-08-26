"use client";

import { useState } from "react";
import type { FaqItem } from "@/lib/faq";

export function FaqList({ items }: { items: FaqItem[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="divide-y divide-white/10 rounded-3xl border border-white/10 bg-white/[0.03]">
      {items.map((item, index) => {
        const isOpen = open === index;
        return (
          <div key={item.q}>
            <button
              type="button"
              aria-expanded={isOpen}
              onClick={() => setOpen(isOpen ? null : index)}
              className="flex w-full items-start justify-between gap-6 px-5 py-5 text-left sm:px-7"
            >
              <span className="font-display text-base font-medium leading-snug sm:text-lg">
                {item.q}
              </span>
              <span
                aria-hidden
                className="mt-1 grid h-7 w-7 shrink-0 place-items-center rounded-full border border-accent/40 text-accent"
              >
                {isOpen ? "–" : "+"}
              </span>
            </button>
            <div
              className={`grid overflow-hidden px-5 transition-all duration-300 sm:px-7 ${
                isOpen ? "grid-rows-[1fr] pb-5 opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <p className="min-h-0 max-w-3xl text-sm leading-7 text-muted sm:text-base">
                {item.a}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
