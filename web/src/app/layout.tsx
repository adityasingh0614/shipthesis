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
const HOME_TITLE = "Ship Thesis | Mobile Apps and SaaS for US Founders";
const SITE_DESCRIPTION =
  "Mobile apps and SaaS for US founders. Simple, well-built software, a working build every week, and code you own. Nothing flashy.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: HOME_TITLE,
    template: `%s · ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-48x48.png", sizes: "48x48", type: "image/png" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
  },
  openGraph: {
    title: HOME_TITLE,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    siteName: SITE_NAME,
    type: "website",
    locale: "en_US",
    images: [
      {
        url: `${SITE_URL}/opengraph-image.png`,
        width: 1200,
        height: 630,
        alt: HOME_TITLE,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: HOME_TITLE,
    description: SITE_DESCRIPTION,
    images: [`${SITE_URL}/opengraph-image.png`],
  },
  verification: {
    other: {
      ...(process.env.BING_SITE_VERIFICATION || process.env.NEXT_PUBLIC_BING_VERIFICATION
        ? { "msvalidate.01": process.env.BING_SITE_VERIFICATION || process.env.NEXT_PUBLIC_BING_VERIFICATION }
        : {}),
    },
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
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/icon-512.png`,
        width: 512,
        height: 512,
      },
      image: `${SITE_URL}/icon-512.png`,
      description: SITE_DESCRIPTION,
      email: "info@shipthesis.com",
      serviceType: [
        "Mobile App Development",
        "SaaS Development",
        "AI Feature Integration",
        "UX / UI Design",
      ],
      areaServed: "Worldwide",
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer service",
        email: "info@shipthesis.com",
        url: "https://cal.com/shipthesis/20min",
      },
      sameAs: [
        "https://github.com/adityasingh0614",
        "https://cal.com/shipthesis/20min",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: SITE_NAME,
      description: SITE_DESCRIPTION,
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
