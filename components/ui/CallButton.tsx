import { SITE } from "@/lib/site";

type Props = {
  className?: string;
  children?: React.ReactNode;
  desktopHref?: string;
};

export function CallButton({
  className = "",
  children = "Вызвать эвакуатор",
  desktopHref = "#zayavka",
}: Props) {
  const base =
    "items-center justify-center rounded-full bg-accent px-5 py-3 text-center text-sm font-semibold text-ink transition hover:bg-yellow-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";

  return (
    <>
      <a
        href={`tel:${SITE.phoneTel}`}
        className={`call-btn-mobile inline-flex ${base} ${className}`}
      >
        {children}
      </a>
      <a href={desktopHref} className={`call-btn-desktop ${base} ${className}`}>
        {children}
      </a>
    </>
  );
}
