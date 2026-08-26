import Link from "next/link";

export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <Link href="/" className="flex items-center gap-3 text-white">
      <span className="relative grid h-10 w-10 place-items-center rounded-xl bg-accent text-ink">
        <span className="font-display text-sm font-bold leading-none">64</span>
        <span className="absolute -right-1 -top-1 h-2 w-2 rounded-full bg-accent-2" />
      </span>
      <span className="font-display text-[12px] font-semibold tracking-[0.16em] sm:text-[13px] sm:tracking-[0.18em]">
        {compact ? (
          <>
            <span className="sm:hidden">ЭВАК 64</span>
            <span className="hidden sm:inline">ЭВАКУАТОР 64</span>
          </>
        ) : (
          "ЭВАКУАТОР 64"
        )}
      </span>
    </Link>
  );
}
