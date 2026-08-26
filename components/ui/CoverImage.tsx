import Image from "next/image";
import type { Photo } from "@/lib/images";

type Props = {
  photo: Photo;
  className?: string;
  sizes?: string;
  preload?: boolean;
  rounded?: string;
};

export function CoverImage({
  photo,
  className = "",
  sizes = "(max-width: 768px) 100vw, 50vw",
  preload = false,
  rounded = "rounded-2xl",
}: Props) {
  return (
    <div className={`relative overflow-hidden ${rounded} ${className}`}>
      <Image
        src={photo.src}
        alt={photo.alt}
        fill
        sizes={sizes}
        preload={preload}
        className="img-zoom object-cover"
      />
    </div>
  );
}
