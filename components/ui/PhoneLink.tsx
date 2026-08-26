import { SITE } from "@/lib/site";

type Props = {
  className?: string;
};

export function PhoneLink({ className = "" }: Props) {
  return (
    <a
      href={`tel:${SITE.phoneTel}`}
      className={`whitespace-nowrap tracking-wide ${className}`}
    >
      {SITE.phoneDisplay}
    </a>
  );
}
