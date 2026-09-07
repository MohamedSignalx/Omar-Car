import { MessageCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  CAMPAIGN,
  LINKS,
  OMAR,
  PHONE_DISPLAY,
  ROLE,
  SHOP,
  WA_INTAKE,
  address,
} from "@/lib/campaign";
import { useLang } from "@/lib/language";

export function SiteHeader() {
  const { lang, toggle, t } = useLang();

  return (
    <header className="sticky top-0 z-30 flex h-header items-center justify-between gap-3 bg-background px-3 sm:px-5">
      <div className="flex min-w-0 items-center gap-3">
        <img
          src="/media/omar-portrait.jpg"
          alt={OMAR[lang]}
          className="media-frame size-10 shrink-0 rounded-full object-cover sm:size-11"
        />
        <div className="min-w-0 leading-tight">
          <p className="text-2xs font-semibold tracking-kicker text-primary uppercase">
            {t(CAMPAIGN)}
          </p>
          <p className="truncate text-sm font-semibold">{t(SHOP)}</p>
        </div>
      </div>
      <div className="flex shrink-0 items-center gap-2">
        <a
          href={WA_INTAKE}
          className="inline-flex h-11 items-center gap-2 rounded-full bg-primary px-3.5 text-sm font-semibold text-primary-foreground shadow-cta transition-[scale,opacity] duration-150 ease-out hover:opacity-90 active:scale-95 sm:px-4"
        >
          <Phone className="size-4" />
          <span className="num">{PHONE_DISPLAY}</span>
        </a>
        <button
          type="button"
          onClick={toggle}
          className="size-11 rounded-full bg-card text-sm font-semibold shadow-[var(--shadow-border)] transition-[box-shadow,scale] duration-150 ease-out hover:shadow-[var(--shadow-border-hover)] active:scale-95"
          aria-label={lang === "ar" ? "Switch to English" : "التبديل إلى العربية"}
        >
          {lang === "ar" ? "EN" : "ع"}
        </button>
      </div>
    </header>
  );
}

export function StickyWhatsApp() {
  const { lang } = useLang();
  return (
    <a
      href={WA_INTAKE}
      className="fixed bottom-4 z-20 inline-flex min-h-12 items-center gap-2 rounded-full bg-primary px-4 text-sm font-semibold text-primary-foreground shadow-cta transition-[scale,opacity] duration-150 ease-out hover:opacity-90 active:scale-95 end-4 lg:hidden"
    >
      <MessageCircle className="size-4" />
      WhatsApp
      <span className="num">{PHONE_DISPLAY}</span>
      <span className="sr-only">
        {lang === "ar" ? "راسل الورشة" : "Message the shop"}
      </span>
    </a>
  );
}

export function SiteFooter() {
  const { t, lang } = useLang();
  return (
    <footer className="border-t border-border px-4 py-10 sm:px-6">
      <div className="mx-auto flex max-w-7xl flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-2xs font-semibold tracking-kicker text-primary uppercase">
            {lang === "ar" ? "العنوان" : "Address"}
          </p>
          <h2 className="mt-1 text-lg font-semibold">
            {t(SHOP)} — {t(address.area)}
          </h2>
          <address className="mt-1 text-sm not-italic text-muted-foreground">
            {t(address.street)}
          </address>
          <p className="mt-3 max-w-prose text-sm text-muted-foreground">
            {t({
              ar: "لسنا وكالة رسمية. متخصص هيونداي وكيا وجينيسيس — الكود أولاً.",
              en: "Not an official dealer. Hyundai, Kia and Genesis specialist — code first.",
            })}
          </p>
          <p className="mt-2 text-xs text-muted-foreground">
            {OMAR[lang]} · {ROLE[lang]}
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <Button asChild size="lg">
            <a href={WA_INTAKE}>
              WhatsApp · <span className="num">{PHONE_DISPLAY}</span>
            </a>
          </Button>
          <Button asChild variant="secondary" size="lg">
            <a href={LINKS.maps} target="_blank" rel="noreferrer">
              {lang === "ar" ? "الخريطة" : "Map"}
            </a>
          </Button>
        </div>
      </div>
    </footer>
  );
}
