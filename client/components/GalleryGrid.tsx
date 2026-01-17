import { cn } from "@/lib/utils";

export interface GalleryImage {
  src: string;
  alt: string;
  className?: string;
}

interface GalleryGridProps {
  images: GalleryImage[];
  columns?: string;
  className?: string;
  itemClassName?: string;
  imageClassName?: string;
}

export function GalleryGrid({
  images,
  columns = "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
  className,
  itemClassName,
  imageClassName,
}: GalleryGridProps) {
  return (
    <div className={cn("grid gap-4", columns, className)}>
      {images.filter(Boolean).map((image, idx) => (
        <div
          key={`${image.src}-${idx}`}
          className={cn(
            "overflow-hidden rounded-xl border border-[#3F6B4F] bg-[#3F6B4F]/10",
            itemClassName,
            image?.className
          )}
        >
          <img
            src={image.src}
            alt={image.alt}
            loading="lazy"
            decoding="async"
            className={cn("h-full w-full object-cover", imageClassName)}
          />
        </div>
      ))}
    </div>
  );
}
