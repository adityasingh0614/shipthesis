import type { Metadata } from "next";
import { ServicePageLayout } from "@/components/services/ServicePageLayout";

export const metadata: Metadata = {
  title: "Flutter App Development for Startups and MVPs",
  description:
    "Flutter apps for iOS and Android from one codebase. A working build on your phone every Friday, offline persistence, and code you own from day one.",
  alternates: {
    canonical: "/flutter-app-development",
  },
  openGraph: {
    title: "Flutter App Development for Startups and MVPs · Ship Thesis",
    description:
      "Flutter apps for iOS and Android from one codebase. A working build on your phone every Friday, offline persistence, and code you own from day one.",
    url: "https://www.shipthesis.com/flutter-app-development",
    siteName: "Ship Thesis",
    type: "website",
    images: [
      {
        url: "https://www.shipthesis.com/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Ship Thesis - Flutter App Development for Startups and MVPs",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Flutter App Development for Startups and MVPs · Ship Thesis",
    description:
      "Flutter apps for iOS and Android from one codebase. A working build on your phone every Friday, offline persistence, and code you own from day one.",
    images: ["https://www.shipthesis.com/opengraph-image.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://www.shipthesis.com/flutter-app-development/#service",
      name: "Flutter Mobile App Development",
      provider: {
        "@type": "Organization",
        name: "Ship Thesis",
        url: "https://www.shipthesis.com",
      },
      serviceType: "Mobile Application Development",
      description:
        "Cross-platform iOS and Android mobile apps engineered with Flutter, offline persistence, weekly working builds, and clean code architecture.",
      areaServed: "Worldwide",
    },
  ],
};

export default function FlutterAppDevelopmentPage() {
  return (
    <ServicePageLayout
      breadcrumbTitle="Flutter Mobile Apps"
      title={
        <>
          <span style={{ whiteSpace: "nowrap" }}>Flutter app development </span>
          <br />
          for founders
        </>
      }
      lede="One codebase for iOS and Android. A working build on your phone every Friday, and code you own from day one."
      ctaPrefix="flutter"
      faqLede="Direct, honest answers on Flutter, offline persistence, timelines, and post-launch maintenance."
      heroImage={{
        src: "/work/assess-yourself/hero.webp",
        alt: "AssessYourself offline-first Flutter mobile app preview on phone",
        width: 1400,
        height: 1496,
        deviceType: "phone",
      }}
      who={{
        for: [
          {
            title: "Founders launching on iOS and Android together",
            desc: "Reach App Store and Google Play users from day one without paying for two separate apps or managing two development teams.",
          },
          {
            title: "Apps that must work with a weak signal",
            desc: "Exam tools, field checklists, inventory trackers, and notes apps keep working offline and sync automatically when the connection returns.",
          },
          {
            title: "Founders who want to test on a real phone",
            desc: "Every Friday a new build lands on your phone through TestFlight (iPhone) or a download link (Android), so you judge real software, not mockups.",
          },
          {
            title: "First-time founders who want clear next steps",
            desc: "We explain technical choices in plain language, agree on deliverables in writing, and keep communication clear throughout.",
          },
        ],
        notFor: [
          {
            title: "Heavy 3D games",
            desc: "Games with custom graphics engines, physics simulations, or 3D world rendering are better built in Unity or Unreal Engine.",
          },
          {
            title: "Apps for Apple devices only",
            desc: "If you only need iPhone or Apple Vision Pro with proprietary SDKs, native Swift may be the better fit.",
          },
          {
            title: "A website in an app wrapper",
            desc: "We build real Flutter apps with local persistence and native feel, not a website packed into a shell.",
          },
          {
            title: "The lowest hourly rate",
            desc: "You'll find cheaper hourly developers. We offer a fixed scope, a build every week, and code you own.",
          },
        ],
      }}
      caseStudy={{
        client: "Aptellic",
        title: "Assess Yourself: Offline-First Mobile Exam App",
        lede: "An exam-prep app for Aptellic. Students need practice tests to keep working with a weak signal or a dead battery, so the app saves progress on the phone and restores a timed test exactly where it stopped. Delivered in 3 to 4 weeks.",
        timeline: "3–4 Weeks",
        stack: ["Flutter", "Node.js", "Firebase", "Offline SQLite"],
        metrics: [
          { num: "3–4 wks", label: "Idea to Delivery" },
          { num: "iOS & Android", label: "One Codebase" },
          { num: "Crash-safe", label: "Timed Test Restoration" },
        ],
        screenshots: [
          {
            src: "/work/assess-yourself/exam-categories.webp",
            alt: "Exam categories and discovery interface",
            caption: "Curated exam discovery and syllabus indexing",
            width: 1000,
            height: 2068,
          },
          {
            src: "/work/assess-yourself/exam-list.webp",
            alt: "Full paper examination catalogue",
            caption: "Full exam catalogue and offline question papers",
            width: 1000,
            height: 2064,
          },
          {
            src: "/work/assess-yourself/analytics.webp",
            alt: "Student performance analytics and score breakdown",
            caption: "Instant student analytics & performance breakdown",
            width: 964,
            height: 1990,
          },
        ],
        whatShipped: [
          "Crash-resilient offline SQLite engine that preserves all exam state locally",
          "Millisecond-accurate countdown timer with background synchronization",
          "Dual submission setup for Apple App Store and Google Play",
        ],
        caseStudyHref: "/work/assess-yourself",
      }}
      deliverables={[
        {
          tag: "FRIDAY RELEASES",
          title: "A build every Friday",
          desc: "A fresh version on your phone through TestFlight and a download link for Android, so you test real progress on real hardware.",
        },
        {
          tag: "STORE SUBMISSION",
          title: "Store submission handled",
          desc: "We set up your developer accounts, signing and store listing, submit the app, and fix review issues until it is approved.",
        },
        {
          tag: "FULL OWNERSHIP",
          title: "Your code from day one",
          desc: "A clean, documented project in your company's GitHub, with all the intellectual property assigned to you.",
        },
        {
          tag: "OFFLINE ARCHITECTURE",
          title: "Works offline",
          desc: "Data is saved on the phone first and syncs automatically when the network signal returns.",
        },
      ]}
      faqs={[
        {
          q: "Why Flutter instead of separate iPhone and Android apps?",
          a: "Native apps need two separate codebases and two rounds of testing. Flutter lets us build one app for both platforms, which means lower cost and faster delivery with a smooth, native feel.",
        },
        {
          q: "How long does it take?",
          a: "In weeks, not months. In every case, we start with an upfront planning sprint to lock the screens and offline sync rules, and you test a working build on your phone every Friday.",
        },
        {
          q: "How does the fixed-price milestone model work?",
          a: "We agree on a clear written scope and screen specification before writing any code. Payments are divided into three milestones: 30% at kickoff, 40% when the halfway build runs on your phone, and 30% upon store approval and final release. You only release payments after testing working software on real hardware.",
        },
        {
          q: "Will it work offline?",
          a: "Yes, if your product needs it. The app saves your data on the phone first, keeps working without internet, and syncs automatically when the connection comes back.",
        },
        {
          q: "How does App Store and Play Store approval work?",
          a: "We handle the whole submission: developer accounts, signing keys, privacy details, screenshots and the review itself. If Apple or Google ask for changes, we make them.",
        },
        {
          q: "Do I own 100% of the mobile app code and intellectual property?",
          a: "Yes, unconditionally. We build directly in your company's private GitHub repository from day one. All Flutter source code, native iOS and Android build configurations, and assets belong 100% to you.",
        },
        {
          q: "Do you sign an NDA before we share our app idea?",
          a: "Yes. We sign mutual NDAs before reviewing your product specifications, wireframes, or business logic. We can sign your company's NDA or provide our standard mutual NDA.",
        },
        {
          q: "Can you build from my designer's Figma?",
          a: "Yes. We build to your design and flag anything that won't work on a phone before we start.",
        },
        {
          q: "Where are you based and how do we collaborate across time zones?",
          a: "We work remotely from India. Calls are scheduled in your time zone, with a private Slack Connect channel and fresh TestFlight and Android builds every Friday with video demo walkthroughs.",
        },
        {
          q: "What happens after launch?",
          a: "Every project includes a 30-day warranty for bugs and unexpected problems, at no cost. After that you can keep us on a maintenance plan for new features, or take the documented codebase in-house.",
        },
      ]}
      ctaTitle="Ready to build your mobile app?"
      ctaLede="Book a free 20-minute call to talk through your app idea, whether it needs to work offline, and what a first version should include."
      jsonLd={jsonLd}
    />
  );
}
