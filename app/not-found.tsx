import Link from "next/link";
import { SITE } from "@/lib/site";
import { CallButton } from "@/components/ui/CallButton";

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[70vh] max-w-3xl flex-col justify-center px-4 pt-28 text-center">
      <p className="text-accent">404</p>
      <h1 className="mt-3 font-display text-4xl">Страница не найдена</h1>
      <p className="mt-4 text-muted">
        Нужен эвакуатор? Позвоните {SITE.phoneDisplay} или вернитесь на главную.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <CallButton desktopHref="/" />
        <Link href="/" className="rounded-full border border-white/15 px-5 py-3">
          На главную
        </Link>
      </div>
    </div>
  );
}
