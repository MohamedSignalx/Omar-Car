import { useMemo, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Play } from "lucide-react";
import { SiteFooter, SiteHeader, StickyWhatsApp, ContactBand, SocialDock } from "@/components/chrome";
import { CopyKit } from "@/components/copy-kit";
import { Lightbox } from "@/components/lightbox";
import { LoopClip } from "@/components/loop-clip";
import {
  CAPTION,
  HERO_OVERLAY,
  LIBRARY,
  LINKS,
  PHONE_DISPLAY,
  assets,
  filters,
  heroClips,
  matchFilter,
  type Asset,
  type FilterId,
} from "@/lib/campaign";
import { useLang } from "@/lib/language";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  const [filter, setFilter] = useState<FilterId>("all");
  const [open, setOpen] = useState<Asset | null>(null);
  const visible = useMemo(
    () => assets.filter((asset) => matchFilter(asset, filter)),
    [filter],
  );

  return (
    <div className="relative min-h-dvh bg-background pb-24 lg:pb-8">
      <SiteHeader />
      <main>
        <HeroMosaic />
        <ContactBand />
        <AssetLibrary
          filter={filter}
          onFilter={setFilter}
          items={visible}
          onOpen={setOpen}
        />
        <CopyKit />
      </main>
      <SiteFooter />
      <StickyWhatsApp />
      {open ? <Lightbox asset={open} onClose={() => setOpen(null)} /> : null}
    </div>
  );
}

function HeroMosaic() {
  const { t } = useLang();

  return (
    <section className="relative">
      <div className="grid grid-cols-2 gap-1 p-1 lg:grid-cols-hero lg:grid-rows-2 lg:h-hero">
        <div className="relative col-span-2 min-h-0 overflow-hidden bg-muted aspect-featured lg:col-span-1 lg:row-span-2 lg:h-full lg:aspect-auto">
          <LoopClip
            src={heroClips.featured.src}
            poster={heroClips.featured.poster}
            alt={t(HERO_OVERLAY.name)}
            preload="auto"
            className="absolute inset-0 size-full"
          />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-background via-background/75 to-transparent px-5 pb-6 pt-16 sm:px-7 lg:pb-8">
            <p className="text-sm font-medium text-primary">
              {t(HERO_OVERLAY.kicker)}
            </p>
            <p className="mt-1 text-5xl font-semibold leading-none tracking-tight sm:text-6xl">
              {t(HERO_OVERLAY.name)}
            </p>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-foreground sm:text-base">
              {t(HERO_OVERLAY.bio)}
            </p>
          </div>
        </div>
        <div className="relative min-h-0 overflow-hidden bg-muted aspect-photo lg:h-full lg:aspect-auto">
          <LoopClip
            src={heroClips.greeting.src}
            poster={heroClips.greeting.poster}
            alt={t({ ar: "استقبال السطحة", en: "Tow-in welcome" })}
            className="absolute inset-0 size-full media-face"
          />
        </div>
        <div className="relative min-h-0 overflow-hidden bg-muted aspect-photo lg:h-full lg:aspect-auto">
          <LoopClip
            src={heroClips.bay.src}
            poster={heroClips.bay.poster}
            alt={t({ ar: "جولة الورشة", en: "Bay walkthrough" })}
            className="absolute inset-0 size-full media-face"
          />
        </div>
      </div>
      <CaptionStrip />
    </section>
  );
}

function CaptionStrip() {
  const { t } = useLang();
  const chip =
    "flex min-h-12 items-center justify-center rounded-xl bg-card px-4 text-center text-sm font-medium shadow-[var(--shadow-border)]";

  return (
    <div className="space-y-1 px-1 pb-1">
      <div className="grid grid-cols-1 gap-1 sm:grid-cols-3">
        <p className={chip}>{t(CAPTION.role)}</p>
        <p className={chip}>{t(CAPTION.done)}</p>
        <a href={LINKS.call} className={chip}>
          <span className="num">{PHONE_DISPLAY}</span>
        </a>
      </div>
      <div className="flex min-h-16 items-center justify-center rounded-xl bg-card px-3 py-2 shadow-[var(--shadow-border)]">
        <SocialDock />
      </div>
    </div>
  );
}

function AssetLibrary({
  filter,
  onFilter,
  items,
  onOpen,
}: {
  filter: FilterId;
  onFilter: (id: FilterId) => void;
  items: Asset[];
  onOpen: (asset: Asset) => void;
}) {
  const { lang, t } = useLang();

  return (
    <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <h2 className="text-2xl font-semibold sm:text-3xl">{t(LIBRARY.title)}</h2>
          <p className="mt-1 max-w-xl text-sm text-muted-foreground">
            {t(LIBRARY.sub)}
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          {filters.map((item) => {
            const active = filter === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => onFilter(item.id)}
                className={cn(
                  "inline-flex h-11 items-center rounded-full px-4 text-sm font-medium transition-[background-color,color,box-shadow,scale] duration-150 ease-out active:scale-95",
                  active
                    ? "bg-foreground text-background"
                    : "bg-transparent text-muted-foreground shadow-[var(--shadow-border)] hover:text-foreground hover:shadow-[var(--shadow-border-hover)]",
                )}
              >
                {lang === "ar" ? item.ar : item.en}
              </button>
            );
          })}
        </div>
      </div>
      {items.length === 0 ? (
        <p className="mt-10 text-sm text-muted-foreground">
          {t({ ar: "لا توجد أصول في هذا التصنيف.", en: "Nothing in this filter." })}
        </p>
      ) : (
        <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((asset) => (
            <AssetCard key={asset.id} asset={asset} onOpen={onOpen} />
          ))}
        </div>
      )}
    </section>
  );
}

function AssetCard({
  asset,
  onOpen,
}: {
  asset: Asset;
  onOpen: (asset: Asset) => void;
}) {
  const { t } = useLang();

  return (
    <button
      type="button"
      onClick={() => onOpen(asset)}
      className="group overflow-hidden rounded-2xl bg-card text-start shadow-[var(--shadow-border)] transition-[box-shadow,transform] duration-150 ease-out hover:shadow-[var(--shadow-border-hover)] active:scale-95"
    >
      <div className="relative aspect-photo overflow-hidden bg-muted">
        <img
          src={asset.poster ?? asset.src}
          alt=""
          className="size-full object-cover transition-transform duration-300 ease-out group-hover:scale-105"
        />
        {asset.kind === "video" ? (
          <span className="absolute top-3 start-3 inline-flex items-center gap-1 rounded-full bg-background/80 px-2.5 py-1 text-2xs font-semibold">
            {asset.duration}
            <Play className="size-3 fill-foreground" />
          </span>
        ) : null}
      </div>
      <div className="p-4">
        <h3 className="font-semibold leading-snug">{t(asset.title)}</h3>
        <p className="mt-1 text-sm text-muted-foreground">{t(asset.use)}</p>
      </div>
    </button>
  );
}
