import { useState } from "react";
import { Check, Copy } from "lucide-react";
import { toast } from "sonner";
import { COPY_SECTION, posts } from "@/lib/campaign";
import { useLang } from "@/lib/language";
import { copyText } from "@/lib/utils";

export function CopyKit() {
  const { lang, t } = useLang();
  const [copied, setCopied] = useState<string | null>(null);

  async function copyPost(id: string, text: string) {
    const ok = await copyText(text);
    if (ok) {
      setCopied(id);
      toast.success(lang === "ar" ? "تم النسخ" : "Copied");
      window.setTimeout(() => setCopied(null), 1400);
    } else {
      toast.error(lang === "ar" ? "تعذر النسخ" : "Could not copy");
    }
  }

  return (
    <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6">
      <h2 className="text-2xl font-semibold sm:text-3xl">{t(COPY_SECTION.title)}</h2>
      <p className="mt-1 text-sm text-muted-foreground">{t(COPY_SECTION.sub)}</p>
      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        {posts.map((post) => {
          const text = post[lang];
          const isCopied = copied === post.id;
          return (
            <article
              key={post.id}
              className="flex flex-col rounded-2xl bg-card p-5 shadow-[var(--shadow-border)]"
            >
              <div className="flex items-center justify-between gap-3">
                <p className="text-sm font-semibold text-primary">
                  {post.label[lang]}
                </p>
                <button
                  type="button"
                  onClick={() => copyPost(post.id, text)}
                  className="inline-flex h-11 items-center gap-1.5 rounded-full px-3 text-sm text-muted-foreground transition-[color,background-color,scale] duration-150 ease-out hover:bg-muted hover:text-foreground active:scale-95"
                >
                  {isCopied ? (
                    <Check className="size-4" />
                  ) : (
                    <Copy className="size-4" />
                  )}
                  {isCopied
                    ? t({ ar: "تم", en: "Done" })
                    : t({ ar: "نسخ", en: "Copy" })}
                </button>
              </div>
              <pre className="mt-3 whitespace-pre-wrap font-sans text-sm leading-relaxed text-foreground">
                {text}
              </pre>
            </article>
          );
        })}
      </div>
    </section>
  );
}
