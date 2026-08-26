"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { NAV, SITE } from "@/lib/site";
import { CallButton } from "@/components/ui/CallButton";
import { PhoneLink } from "@/components/ui/PhoneLink";
import { Logo } from "./Logo";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 24);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition ${
        scrolled || open
          ? "border-b border-white/10 bg-black/80 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Logo compact />
        <nav className="hidden items-center gap-6 text-sm text-white/70 lg:flex">
          {NAV.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-white">
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-5 lg:flex">
          <div className="text-right">
            <p className="text-[11px] uppercase tracking-[0.2em] text-accent">Работаем 24/7</p>
            <PhoneLink className="font-display text-lg text-white hover:text-accent" />
          </div>
          <CallButton />
        </div>
        <div className="flex items-center gap-2 lg:hidden">
          <a
            href={`tel:${SITE.phoneTel}`}
            className="rounded-full bg-accent px-4 py-2 text-sm font-semibold text-ink"
          >
            Позвонить
          </a>
          <button
            type="button"
            aria-expanded={open}
            aria-label={open ? "Закрыть меню" : "Открыть меню"}
            onClick={() => setOpen((value) => !value)}
            className="grid h-10 w-10 place-items-center rounded-full border border-white/15"
          >
            <span className="sr-only">Меню</span>
            <span className="flex h-3.5 w-4 flex-col justify-between">
              <span className={`h-px bg-white transition ${open ? "translate-y-1.5 rotate-45" : ""}`} />
              <span className={`h-px bg-white transition ${open ? "opacity-0" : ""}`} />
              <span className={`h-px bg-white transition ${open ? "-translate-y-1.5 -rotate-45" : ""}`} />
            </span>
          </button>
        </div>
      </div>
      {open ? (
        <div className="border-t border-white/10 bg-black/95 px-4 py-6 lg:hidden">
          <nav className="grid gap-4 text-lg">
            {NAV.map((item) => (
              <Link key={item.href} href={item.href} onClick={() => setOpen(false)}>
                {item.label}
              </Link>
            ))}
          </nav>
          <p className="mt-6 text-xs uppercase tracking-[0.2em] text-accent">Работаем 24/7</p>
          <PhoneLink className="mt-2 block font-display text-2xl" />
        </div>
      ) : null}
    </header>
  );
}
