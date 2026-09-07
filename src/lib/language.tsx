import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export type Lang = "ar" | "en";
export type Copy = { ar: string; en: string };

const STORAGE_KEY = "baqat-lang";

type LanguageValue = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  toggle: () => void;
  t: (copy: Copy) => string;
};

const LanguageContext = createContext<LanguageValue | null>(null);

function applyDocumentLang(lang: Lang) {
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("ar");

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === "en" || stored === "ar") {
      setLangState(stored);
      applyDocumentLang(stored);
    } else {
      applyDocumentLang("ar");
    }
  }, []);

  const setLang = useCallback((next: Lang) => {
    setLangState(next);
    window.localStorage.setItem(STORAGE_KEY, next);
    applyDocumentLang(next);
  }, []);

  const toggle = useCallback(() => {
    setLang(lang === "ar" ? "en" : "ar");
  }, [lang, setLang]);

  const t = useCallback((copy: Copy) => copy[lang], [lang]);

  const value = useMemo(
    () => ({ lang, setLang, toggle, t }),
    [lang, setLang, toggle, t],
  );

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLang must be used within LanguageProvider");
  return ctx;
}
