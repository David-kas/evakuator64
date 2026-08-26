import type { Metadata, Viewport } from "next";
import { Manrope, Unbounded } from "next/font/google";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { MobileBar } from "@/components/layout/MobileBar";
import { SITE } from "@/lib/site";
import "./globals.css";

const display = Unbounded({
  subsets: ["cyrillic", "latin"],
  variable: "--font-unbounded",
  display: "swap",
  weight: ["500", "600", "700"],
});

const sans = Manrope({
  subsets: ["cyrillic", "latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "Эвакуатор в Балашове 24/7 — вызов эвакуатора | Саратовская область",
    template: "%s",
  },
  description:
    "Эвакуатор в Балашове и Саратовской области круглосуточно. Выезд в Самойловку, Аркадак, Романовку, Калининск, Турки, Ртищево и другие населённые пункты. Вызвать эвакуатор: 8 992 6666 200.",
  applicationName: SITE.name,
  authors: [{ name: SITE.name }],
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: SITE.locale,
    url: SITE.url,
    siteName: SITE.name,
  },
};

export const viewport: Viewport = {
  themeColor: "#070708",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ru" className={`${display.variable} ${sans.variable} h-full antialiased`}>
      <body className="min-h-full bg-bg text-text">
        <Header />
        <main>{children}</main>
        <Footer />
        <MobileBar />
      </body>
    </html>
  );
}
