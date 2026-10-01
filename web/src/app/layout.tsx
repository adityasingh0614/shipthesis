import type { Metadata } from "next";
import { Geist, JetBrains_Mono, Phudu } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

const geist = Geist({ variable: "--font-body", subsets: ["latin"] });
const phudu = Phudu({ variable: "--font-display", subsets: ["latin"] });
const mono = JetBrains_Mono({ variable: "--font-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ship Thesis | AI-powered apps and SaaS for founders",
  description:
    "AI-powered mobile apps and SaaS for founders: a new build on your phone every week, and code you own.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geist.variable} ${phudu.variable} ${mono.variable}`}
    >
      {/* Browser extensions (e.g. Grammarly) add attributes to <body>. */}
      <body suppressHydrationWarning>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
