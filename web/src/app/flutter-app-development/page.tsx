import type { Metadata } from "next";
import { ServicePageLayout } from "@/components/services/ServicePageLayout";

export const metadata: Metadata = {
  title: "Flutter App Development Agency | iOS & Android Apps | Ship Thesis",
  description:
    "Cross-platform Flutter app development for founders. Ship high-performance iOS and Android apps from a single codebase in 4-8 weeks with offline persistence.",
  alternates: {
    canonical: "/flutter-app-development",
  },
  openGraph: {
    title: "Flutter App Development Agency | iOS & Android Apps | Ship Thesis",
    description:
      "Cross-platform Flutter app development for founders. Ship high-performance iOS and Android apps from a single codebase in 4-8 weeks with offline persistence.",
    url: "https://www.shipthesis.com/flutter-app-development",
  },
  twitter: {
    card: "summary_large_image",
    title: "Flutter App Development Agency | iOS & Android Apps | Ship Thesis",
    description:
      "Cross-platform Flutter app development for founders. Ship high-performance iOS and Android apps from a single codebase in 4-8 weeks with offline persistence.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Flutter App Development Agency",
  serviceType: "Mobile App Development",
  provider: {
    "@type": "Organization",
    name: "Ship Thesis",
    url: "https://www.shipthesis.com",
  },
  areaServed: "Worldwide",
  description:
    "High-performance cross-platform Flutter mobile app development for iOS and Android. Single codebase, offline-first data caching, and app-store delivery.",
  offers: {
    "@type": "Offer",
    priceCurrency: "USD",
    description: "Fixed-price Flutter mobile app milestone development",
  },
};

export default function FlutterAppDevelopmentPage() {
  return (
    <ServicePageLayout
      badge="Cross-Platform Mobile Engineering"
      title="One Codebase. Two Native Stores. Zero Compromise."
      lede="Stop paying two separate engineering teams for iOS and Android. We build fluid 60fps mobile applications using Flutter and Dart that look, feel, and perform like native code across both platforms."
      bookingLocation="services"
      jsonLd={jsonLd}
      metrics={[
        { value: "1 Codebase", label: "iOS & Android parity" },
        { value: "60 FPS", label: "Smooth rendering engine" },
        { value: "Offline-First", label: "SQLite / Hive persistence" },
        { value: "Weekly", label: "TestFlight & APK drops" },
      ]}
      featuresPre="Mobile Architecture"
      featuresTitle="Engineered for Real-World Mobile Edge Cases"
      featuresLede="Mobile apps run in the wild: spotty cellular connections, unexpected OS process terminations, and varying screen ratios. We engineer resilient systems that never lose user state."
      features={[
        {
          title: "Offline-First Data Architecture",
          desc: "Local SQLite or Hive caching enables uninterrupted user workflows even when airplane mode or flaky subway tunnels strike. Changes queue and sync automatically upon reconnection.",
        },
        {
          title: "Crash & Interruption Resilience",
          desc: "Timed workflows, active exam sessions, and form entries persist instantly to non-volatile device storage, recovering seamlessly even if the OS terminates the app in the background.",
        },
        {
          title: "Pixel-Perfect Custom UI Systems",
          desc: "Bespoke animations and brand design tokens built with Flutter's Skia/Impeller rendering pipeline. Flawless responsive scaling across hundreds of Android screen sizes and modern iOS notches.",
        },
        {
          title: "Native Device Hardware Integration",
          desc: "Deep integration with native hardware APIs: camera capture, biometric authentication (FaceID / Fingerprint), accelerometer, local push notifications, and background location services.",
        },
        {
          title: "In-App Purchases & Monetization",
          desc: "Unified payment integrations: Apple StoreKit 2, Google Play Billing, and in-app checkout gateways like Razorpay or Stripe for physical/digital goods.",
        },
        {
          title: "App Store & Play Store Approval",
          desc: "We manage the entire submission pipeline: privacy manifest compliance, metadata generation, screenshot assets, TestFlight deployment, and Apple/Google review resolution.",
        },
      ]}
      timelinePre="Milestones"
      timelineTitle="From Design to App Store Submission"
      timelineLede="Weekly TestFlight builds on your physical device ensure you test real interactions before launch day."
      timeline={[
        {
          step: "Week 01",
          title: "Mobile Architecture & App Shell",
          desc: "Setup state management (Bloc / Riverpod), repository layer, theme definitions, and navigation graph.",
          deliverable: "Initial runnable build installed on your physical smartphone",
        },
        {
          step: "Week 02",
          title: "Offline Engine & Core Screens",
          desc: "Implementation of SQLite database tables, local caching policies, user onboarding, and core functional flows.",
          deliverable: "Functional prototype operating fully offline on TestFlight",
        },
        {
          step: "Week 03",
          title: "API Sync, Auth & In-App Purchases",
          desc: "Secure token management, backend API endpoints integration, biometric locks, and store billing hooks.",
          deliverable: "Complete end-to-end user loop with payment capability",
        },
        {
          step: "Week 04",
          title: "Store Submission & Launch Polish",
          desc: "Performance profiling, memory leak audits, crash reporting (Sentry/Firebase), and submission for store review.",
          deliverable: "Live listing submitted to Apple App Store and Google Play",
        },
      ]}
      proofPre="Case Study"
      proofTitle="Assess Yourself: Built in Flutter in 3-4 Weeks"
      proofLede="A live demonstration of our offline-first Flutter architecture surviving extreme edge cases in production."
      caseStudies={[
        {
          badge: "Mobile Case Study",
          title: "Assess Yourself",
          desc: "Built for Aptellic in 3-4 weeks. An offline-first mobile testing app where students take timed 2-hour exams. Even if a phone call interrupts or battery dies, the timer and answer state recover down to the exact second upon reboot.",
          href: "/work/assess-yourself",
          stats: [
            { value: "3-4 Wks", label: "Turnaround Time" },
            { value: "0%", label: "Data Loss on Crash" },
            { value: "Flutter + SQLite", label: "Offline Tech" },
          ],
        },
        {
          badge: "Desktop Utility",
          title: "ChromaLayer",
          desc: "A native Windows display calibration and color tuning utility built with high-performance C# and native APIs, demonstrating our deep expertise across operating system boundaries.",
          href: "/work/chromalayer",
          stats: [
            { value: "Native C#", label: "Performance" },
            { value: "7 Controls", label: "Calibration" },
            { value: "Zero Delay", label: "OS Startup" },
          ],
        },
      ]}
      stackTitle="Mobile Engineering Ecosystem"
      stack={[
        "Flutter 3.x",
        "Dart",
        "SQLite (sqflite)",
        "Hive Local Storage",
        "Riverpod / Bloc State Management",
        "Firebase Cloud Messaging",
        "Apple StoreKit & Google Play Billing",
        "Fastlane CI/CD",
        "TestFlight & Google Play Console",
      ]}
      faqTitle="Founder FAQs About Flutter App Development"
      faqItems={[
        {
          q: "Why choose Flutter over native Swift/Kotlin or React Native?",
          a: "Flutter compiles directly to native ARM machine code and renders its own canvas without relying on an interpreted JavaScript bridge. This guarantees true 60fps animations, eliminates platform-specific UI bugs, and reduces initial development and ongoing maintenance budgets by nearly 50% compared to dual native teams.",
        },
        {
          q: "Will Apple or Google reject apps built in Flutter?",
          a: "No. Thousands of top apps in both stores—including Google Ads, Nubank, BMW, and Alibaba—are built on Flutter. We adhere strictly to Apple Human Interface Guidelines and Android Material Design, as well as current iOS privacy manifests and permission requirements.",
        },
        {
          q: "Can Flutter apps communicate with native SDKs and hardware?",
          a: "Yes. Flutter uses Platform Channels to communicate directly with native Swift, Objective-C, Kotlin, and Java APIs. If your app requires a custom Bluetooth protocol, camera hardware, or specialized hardware accessory, we bridge it seamlessly.",
        },
        {
          q: "How will I test the app during the build?",
          a: "Every week, you receive an automated TestFlight invitation for iOS devices and an APK or Google Play Internal Testing link for Android. You test real builds on your physical handset from Week 1.",
        },
      ]}
      ctaTitle="Ready to launch on iOS and Android simultaneously?"
      ctaLede="Book a free 20-minute mobile architecture call. We'll evaluate your concept, identify hardware or API requirements, and give you a clear fixed milestone quote."
    />
  );
}

