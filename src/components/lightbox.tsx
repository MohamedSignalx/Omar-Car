import { useEffect, useState } from "react";
import { Copy, Check, X } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { PHONE_DISPLAY, type Asset } from "@/lib/campaign";
import { useLang } from "@/lib/language";
import { copyText } from "@/lib/utils";

export function Lightbox({
  asset,
  onClose,
}: {
  asset: Asset;
  onClose: () => void;
}) {
  const { lang, t } = useLang();
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [onClose]);

  async function copyCaption() {
    const text = `${t(asset.title)}\n${t(asset.use)}\n${PHONE_DISPLAY}`;
    const ok = await copyText(text);
    if (ok) {
      setCopied(true);
      toast.success(lang === "ar" ? "تم النسخ" : "Copied");
      window.setTimeout(() => setCopied(false), 1400);
    } else {
      toast.error(lang === "ar" ? "تعذر النسخ" : "Could not copy");
    }
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-background/85 p-3 sm:p-6"
      onClick={onClose}
      role="presentation"
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label={t(asset.title)}
        className="relative w-full max-w-4xl overflow-hidden rounded-2xl bg-card shadow-[var(--shadow-border)]"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute top-3 end-3 z-10 flex size-11 items-center justify-center rounded-full bg-background/80 text-foreground shadow-[var(--shadow-border)] transition-[box-shadow,scale] duration-150 ease-out hover:shadow-[var(--shadow-border-hover)] active:scale-95"
          aria-label={lang === "ar" ? "إغلاق" : "Close"}
        >
          <X className="size-5" />
        </button>
        <div className="bg-muted">
          {asset.kind === "video" ? (
            <video
              key={asset.src}
              src={asset.src}
              poster={asset.poster}
              controls
              autoPlay
              muted
              playsInline
              className="mx-auto max-h-lightbox w-full object-contain"
            />
          ) : (
            <img
              src={asset.src}
              alt={t(asset.title)}
              className="mx-auto max-h-lightbox w-full object-contain"
            />
          )}
        </div>
        <div className="flex flex-col gap-3 p-4 sm:flex-row sm:items-center sm:justify-between sm:p-5">
          <div>
            <h3 className="text-lg font-semibold">{t(asset.title)}</h3>
            <p className="text-sm text-muted-foreground">{t(asset.use)}</p>
          </div>
          <Button type="button" variant="secondary" onClick={copyCaption}>
            {copied ? <Check className="size-4" /> : <Copy className="size-4" />}
            {copied
              ? t({ ar: "تم النسخ", en: "Copied" })
              : t({ ar: "نسخ الوصف", en: "Copy caption" })}
          </Button>
        </div>
      </div>
    </div>
  );
}
