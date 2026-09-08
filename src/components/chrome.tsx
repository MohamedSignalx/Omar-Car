import { MessageCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  CAMPAIGN,
  CONTACT,
  HANDLE,
  LINKS,
  OMAR,
  OMAR_FULL,
  PHONE_DISPLAY,
  ROLE,
  SHOP,
  SOCIALS,
  WA_INTAKE,
  address,
} from "@/lib/campaign";
import { useLang } from "@/lib/language";

export function SocialDock({ compact = false }: { compact?: boolean }) {
  const { lang } = useLang();

  return (
    <nav
      aria-label={lang === "ar" ? "وسائل التواصل" : "Social links"}
      className={
        compact
          ? "hidden items-center gap-1.5 lg:flex"
          : "flex flex-wrap items-center gap-3"
      }
    >
      {SOCIALS.map((item) => (
        <a
          key={item.id}
          href={item.href}
          target={item.href.startsWith("http") ? "_blank" : undefined}
          rel={item.href.startsWith("http") ? "noreferrer" : undefined}
          className={
            compact
              ? "inline-flex size-11 items-center justify-center overflow-hidden rounded-full bg-card shadow-[var(--shadow-border)] transition-[box-shadow,scale] duration-150 ease-out hover:shadow-[var(--shadow-border-hover)] active:scale-95"
              : "inline-flex size-14 items-center justify-center overflow-hidden rounded-2xl bg-card shadow-[var(--shadow-border)] transition-[box-shadow,scale] duration-150 ease-out hover:shadow-[var(--shadow-border-hover)] active:scale-95"
          }
          aria-label={lang === "ar" ? item.ar : item.en}
        >
          <img
            src={item.icon}
            alt=""
            className="size-full object-cover"
          />
        </a>
      ))}
    </nav>
  );
}

export function SiteHeader() {
  const { lang, toggle, t } = useLang();

  return (
    <header className="sticky top-0 z-30 bg-background">
      <div className="flex h-header items-center justify-between gap-3 px-3 sm:px-5">
      <div className="flex min-w-0 items-center gap-3">
        <img
          src="/media/omar-scan-poster.jpg"
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
        <SocialDock compact />
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
      </div>
      <div className="flex justify-center border-t border-border px-3 py-2 lg:hidden">
        <SocialDock />
      </div>
    </header>
  );
}

export function ContactBand() {
  const { t, lang } = useLang();

  return (
    <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
      <div className="overflow-hidden rounded-2xl bg-card shadow-[var(--shadow-border)]">
        <div className="grid gap-6 p-5 sm:p-7 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-center">
          <div className="flex items-center gap-4">
            <img
              src="/media/omar-scan-poster.jpg"
              alt={t(OMAR_FULL)}
              className="media-frame size-20 shrink-0 rounded-2xl object-cover sm:size-24"
            />
            <div className="min-w-0">
              <p className="text-2xs font-semibold tracking-kicker text-primary uppercase">
                {t(CONTACT.title)}
              </p>
              <h2 className="mt-1 text-2xl font-semibold leading-tight">
                {t(OMAR_FULL)}
              </h2>
              <p className="mt-1 text-sm text-muted-foreground">
                {HANDLE} · {t(ROLE)}
              </p>
              <a
                href={LINKS.call}
                className="mt-2 inline-block text-base font-semibold"
              >
                <span className="num">{PHONE_DISPLAY}</span>
              </a>
            </div>
          </div>
          <div>
            <p className="mb-3 text-sm text-muted-foreground">{t(CONTACT.sub)}</p>
            <SocialDock />
          </div>
        </div>
      </div>
    </section>
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
      <div className="mx-auto flex max-w-7xl flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
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
            {OMAR[lang]} · {ROLE[lang]} · {HANDLE}
          </p>
        </div>
        <div className="flex flex-col items-start gap-4">
          <SocialDock />
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
      </div>
    </footer>
  );
}
