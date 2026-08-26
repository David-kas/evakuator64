"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import type { Photo } from "@/lib/images";

export function Gallery({ photos }: { photos: Photo[] }) {
  const [active, setActive] = useState<number | null>(null);

  useEffect(() => {
    if (active === null) return;
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") setActive(null);
      if (event.key === "ArrowRight") {
        setActive((value) => (value === null ? value : (value + 1) % photos.length));
      }
      if (event.key === "ArrowLeft") {
        setActive((value) =>
          value === null ? value : (value - 1 + photos.length) % photos.length,
        );
      }
    }
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [active, photos.length]);

  return (
    <>
      <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
        {photos.map((photo, index) => (
          <button
            key={photo.src}
            type="button"
            onClick={() => setActive(index)}
            className={`group mb-4 w-full break-inside-avoid overflow-hidden rounded-3xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ${
              index % 3 === 0 ? "aspect-[3/4]" : index % 3 === 1 ? "aspect-[4/5]" : "aspect-[3/4]"
            }`}
          >
            <span className="relative block h-full w-full">
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="img-zoom object-cover"
              />
              <span className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 transition group-hover:opacity-100" />
            </span>
          </button>
        ))}
      </div>

      {active !== null ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Просмотр фотографии"
          className="fixed inset-0 z-[80] flex items-center justify-center bg-black/90 p-4"
          onClick={() => setActive(null)}
        >
          <button
            type="button"
            className="absolute right-4 top-4 rounded-full border border-white/20 px-4 py-2 text-sm"
            onClick={() => setActive(null)}
          >
            Закрыть
          </button>
          <div
            className="relative h-[min(86vh,900px)] w-full max-w-5xl"
            onClick={(event) => event.stopPropagation()}
          >
            <Image
              src={photos[active].src}
              alt={photos[active].alt}
              fill
              sizes="100vw"
              className="rounded-2xl object-contain"
            />
          </div>
        </div>
      ) : null}
    </>
  );
}
