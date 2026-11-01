import type { Metadata } from "next";
import { ServicePageLayout } from "@/components/services/ServicePageLayout";

export const metadata: Metadata = {
  title: "Offline-First Flutter Mobile App Development for Founders",
  description:
    "Cross-platform Flutter mobile apps for founders. Built with offline-first SQLite persistence, 60fps native feel, weekly builds on your phone, and App Store approval guarantee.",
  alternates: {
    canonical: "/flutter-app-development",
  },
  openGraph: {
    title: "Offline-First Flutter Mobile App Development for Founders",
    description:
      "Cross-platform Flutter mobile apps for founders. Built with offline-first SQLite persistence, 60fps native feel, weekly builds on your phone, and App Store approval guarantee.",
    url: "https://www.shipthesis.com/flutter-app-development",
  },
  twitter: {
    card: "summary_large_image",
    title: "Offline-First Flutter Mobile App Development for Founders",
    description:
      "Cross-platform Flutter mobile apps for founders. Built with offline-first SQLite persistence, 60fps native feel, weekly builds on your phone, and App Store approval guarantee.",
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
        "High-performance cross-platform iOS and Android mobile apps engineered with Flutter, offline-first SQLite persistence, and guaranteed App Store submission.",
      areaServed: "Worldwide",
    },
  ],
};

export default function FlutterAppDevelopmentPage() {
  return (
    <ServicePageLayout
      breadcrumbTitle="Flutter Mobile Apps"
      badgeText="Status: 1 Sprint Slot Open"
      title="Offline-first mobile apps for founders"
      lede="High-performance iOS and Android apps from a single codebase. A working build on your phone every Friday, 60fps native feel, and zero data loss offline."
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
            title: "Founders shipping to both iOS and Android simultaneously",
            desc: "You need to reach both App Store and Google Play users from day one without hiring two separate engineering teams or doubling your budget.",
          },
          {
            title: "Products where offline reliability is mission-critical",
            desc: "Exam engines, field assessment tools, inventory trackers, or notes apps where poor cell connectivity, subway tunnels, or sudden device reboots cannot cause data loss.",
          },
          {
            title: "Founders who test progress on their actual phones",
            desc: "You want a working build installed on your physical device via TestFlight and Android APK every Friday, so you evaluate real software instead of mockups.",
          },
        ],
        notFor: [
          {
            title: "Heavy 3D games or spatial physics engines",
            desc: "If your core product requires custom shaders, physics engines, or 3D world rendering, you should build directly in Unity, Unreal Engine, or native C++.",
          },
          {
            title: "Single-platform niche hardware hacks",
            desc: "If your app relies exclusively on proprietary Apple-only visionOS spatial computing or low-level kernel extensions, native Swift is the right choice.",
          },
          {
            title: "Low-budget throwaway WebView wrappers",
            desc: "We engineer genuine native Flutter applications with offline SQLite databases and 60fps animations, not packaged website frames.",
          },
        ],
      }}
      caseStudy={{
        client: "Aptellic",
        title: "AssessYourself: 10,000+ Students, Zero Exam Data Loss",
        lede: "An offline-first mobile testing app for competitive government exams. Even if an incoming phone call interrupts a student or their battery dies mid-test, the timer and answer state recover down to the exact second upon reboot.",
        timeline: "3–4 Weeks",
        stack: ["Flutter", "Node.js", "Firebase", "Offline SQLite"],
        metrics: [
          { num: "10,000+", label: "Verified Students" },
          { num: "0 ms", label: "Recovery Data Loss" },
          { num: "100%", label: "App Store Approval" },
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
          "Dual submission to Apple App Store and Google Play with zero rejection cycles",
        ],
        caseStudyHref: "/work/assess-yourself",
      }}
      deliverables={[
        {
          tag: "FRIDAY RELEASES",
          title: "Weekly working build on your phone",
          desc: "Every Friday afternoon, a fresh build is pushed to your phone via TestFlight (iOS) and downloadable APK (Android). You touch, test, and validate progress on physical hardware.",
        },
        {
          tag: "STORE GUARANTEE",
          title: "App Store & Play Store submission",
          desc: "We manage the entire release pipeline: developer accounts, signing certificates, privacy manifests, store screenshots, and compliance review guidelines until approved.",
        },
        {
          tag: "FULL OWNERSHIP",
          title: "100% Code in your GitHub from Day 1",
          desc: "Clean, documented Flutter architecture created directly in your company GitHub organization. Complete intellectual property assignment with zero agency lock-in.",
        },
        {
          tag: "OFFLINE ARCHITECTURE",
          title: "Production SQLite & state persistence",
          desc: "Local SQLite database caching, optimistic UI updates, and an automated background synchronization queue that handles unreliable networks gracefully.",
        },
      ]}
      faqs={[
        {
          q: "Flutter vs native: Why Flutter instead of native Swift and Kotlin?",
          a: "Building separate native apps in Swift and Kotlin requires two distinct codebases, two engineering skill sets, and twice the QA effort. Flutter compiles directly to ARM machine code using Google's Impeller rendering engine, delivering genuine 60fps native performance, platform-native gestures, and full hardware access while saving ~50% in engineering overhead.",
        },
        {
          q: "Does it really work offline?",
          a: "Yes. We design mobile applications with an offline-first architecture. All app state, question banks, drafts, and user actions are written directly to a local SQLite database on the device first. The app functions seamlessly without internet, queues operations locally, and synchronizes to your backend automatically when connectivity resumes.",
        },
        {
          q: "How does App Store and Play Store approval work?",
          a: "We manage the entire submission lifecycle. This includes generating Apple Developer certificates and provisioning profiles, setting up Android signing keys, completing privacy manifests and age ratings, taking compliant App Store screenshots, and submitting the app for review. If Apple or Google requests adjustments, we resolve them until approved.",
        },
        {
          q: "What happens after launch?",
          a: "Every project includes a 30-day post-launch warranty where we fix any functional bugs or unexpected platform regressions at zero cost. After launch, you can keep us on a flexible maintenance retainer for new feature iterations, or take the codebase entirely in-house with our thorough architecture and onboarding documentation.",
        },
      ]}
      ctaTitle="Ready to ship your mobile app?"
      ctaLede="Book a free 20-minute call to discuss your mobile app concept, offline requirements, and project scope."
      jsonLd={jsonLd}
    />
  );
}
