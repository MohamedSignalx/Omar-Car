import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

type LoopClipProps = {
  src: string;
  poster: string;
  alt: string;
  className?: string;
  preload?: "none" | "metadata" | "auto";
};

export function LoopClip({
  src,
  poster,
  alt,
  className,
  preload = "metadata",
}: LoopClipProps) {
  const ref = useRef<HTMLVideoElement>(null);
  const [reduce, setReduce] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const apply = () => setReduce(mq.matches);
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el || reduce) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.play().catch(() => {});
        } else {
          el.pause();
        }
      },
      { threshold: 0.15 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [reduce, src]);

  if (reduce) {
    return (
      <img
        src={poster}
        alt={alt}
        className={cn("absolute inset-0 size-full object-cover", className)}
      />
    );
  }

  return (
    <video
      ref={ref}
      src={src}
      poster={poster}
      muted
      loop
      playsInline
      preload={preload}
      disablePictureInPicture
      className={cn("absolute inset-0 size-full object-cover", className)}
      aria-label={alt}
    />
  );
}
