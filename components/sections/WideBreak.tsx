import { CoverImage } from "@/components/ui/CoverImage";
import { photos } from "@/lib/images";

export function WideBreak({
  which = "chassis",
}: {
  which?: "chassis" | "loader" | "street";
}) {
  const photo = photos[which];
  return (
    <div className="mx-auto max-w-[1400px] px-4 sm:px-6">
      <CoverImage photo={photo} className="aspect-[21/9] min-h-56" sizes="100vw" rounded="rounded-[2rem]" />
    </div>
  );
}
