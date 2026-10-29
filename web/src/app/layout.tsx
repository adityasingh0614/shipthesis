import type { Metadata } from "next";
import { Geist, JetBrains_Mono, Phudu } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { CalInitializer } from "@/components/CalInitializer";
import { MobileStickyCta } from "@/components/MobileStickyCta";

const geist = Geist({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});
const phudu = Phudu({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});
const mono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

const SITE_URL = "https://www.shipthesis.com";
const SITE_NAME = "Ship Thesis";
const HOME_TITLE = "Mobile App & SaaS MVP Development for Startups | Ship Thesis";
const SITE_DESCRIPTION =
  "Ship a mobile app or SaaS MVP with a founder-led product studio. Fixed-scope milestones, weekly working builds, and code you own.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: HOME_TITLE,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: HOME_TITLE,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    siteName: SITE_NAME,
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: HOME_TITLE,
    description: SITE_DESCRIPTION,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Organization", "ProfessionalService"],
      "@id": `${SITE_URL}/#organization`,
      name: SITE_NAME,
      url: SITE_URL,
      logo: `${SITE_URL}/icon.svg`,
      description: SITE_DESCRIPTION,
      email: "hello@shipthesis.com",
      founder: {
        "@type": "Person",
        name: "Aditya Singh",
      },
      serviceType: [
        "Mobile App Development",
        "SaaS Development",
        "AI Feature Integration",
        "UX / UI Design",
      ],
      areaServed: "Worldwide",
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: SITE_NAME,
      publisher: {
        "@id": `${SITE_URL}/#organization`,
      },
    },
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geist.variable} ${phudu.variable} ${mono.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      {/* Browser extensions (e.g. Grammarly) add attributes to <body>. */}
      <body suppressHydrationWarning>
        <CalInitializer />
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
        <MobileStickyCta />
      </body>
    </html>
  );
}
