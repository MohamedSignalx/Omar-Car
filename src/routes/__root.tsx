import { createRootRoute, HeadContent, Outlet, Scripts } from "@tanstack/react-router";
import { AuthProvider } from "@/lib/auth/provider";
import { LanguageProvider } from "@/lib/language";
import { PreviewHostBridge } from "@/components/preview-host-bridge";
import { Toaster } from "sonner";
import appCss from "../styles.css?url";

const APP_NAME = "ورشة بقعة ضوء — هندسة الدقة";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: APP_NAME },
      {
        name: "description",
        content:
          "ورشة بقعة ضوء، الرياض. متخصص هيونداي وكيا وجينيسيس. الكود أولاً. عمر — المدير العام والمستشار الفني. 059 664 8717",
      },
      { name: "theme-color", content: "#0C0D0F" },
    ],
    links: [
      { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Arabic:wght@400;500;600;700&display=swap",
      },
      { rel: "stylesheet", href: appCss },
      { rel: "manifest", href: "/__grok/manifest.webmanifest" },
      { rel: "apple-touch-icon", href: "/__grok/icon-180.png" },
    ],
  }),
  component: RootDocument,
});

function RootDocument() {
  return (
    <html lang="ar" dir="rtl" className="antialiased">
      <head>
        <HeadContent />
      </head>
      <body className="bg-background text-foreground">
        <PreviewHostBridge />
        <AuthProvider>
          <LanguageProvider>
            <Outlet />
            <Toaster
              position="top-center"
              theme="dark"
              toastOptions={{
                className:
                  "font-[inherit] bg-card text-foreground border-border",
              }}
            />
          </LanguageProvider>
        </AuthProvider>
        <Scripts />
      </body>
    </html>
  );
}
