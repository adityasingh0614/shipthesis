"use client";

import Link from "next/link";
import Image from "next/image";
import { CASE_STUDIES } from "@/content/case-studies";
import {
  useEffect,
  useRef,
  useState,
  useSyncExternalStore,
  type CSSProperties,
} from "react";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "motion/react";
import { CarouselDots } from "@/components/motion-ui/carousel-controls";
import { navHideLock } from "@/components/motion-ui/nav-hide-lock";
import styles from "./OurWork.module.css";

/** Tools with no src render as a text-only chip. */
type Tech = { src?: string; label: string };

type Project = {
  name: string;
  /** Two-colour title: `name` split into [project colour, ink]; keep the space in part two. */
  title: [string, string];
  type: string;
  /** Project accent: the name here, and the case study page's primary colour. */
  color: string;
  /** Subheading under the name. */
  description: string;
  client: string;
  stack: Tech[];
  time?: string;
  status: string;
  slug: string;
};

// Facts: .agents/product-marketing.md, home-brief §2. Stacks: founder's top six, checked against docs/case-studies/*-raw.md.
// Logos are Simple Icons placeholders until the founder's logo files arrive.
/** slug -> case study page, resolved on the server. */
type Hrefs = Record<string, string | undefined>;

const PROJECTS: Project[] = [
  {
    name: "Assess Yourself",
    title: ["Assess", " Yourself"],
    type: "Mobile app",
    color: "#283593",
    description:
      "A government exam-prep app built in Flutter, with exam discovery, timed tests, live tests and Razorpay subscriptions on a Node.js/Express REST API.",
    client: "Client: Aptellic",
    // Pending: founder will supply the final Assess Yourself stack.
    stack: [
      { src: "/logo/flutter-svgrepo-com.svg", label: "Flutter" },
      { src: "/logo/nodejs-logo-svgrepo-com.svg", label: "Node.js" },
      { src: "/logo/Express.svg", label: "Express" },
      { src: "/logo/Firebase.svg", label: "Firebase" },
      { src: "/logo/razorpay-icon.svg", label: "Razorpay" },
    ],
    time: "3-4 weeks",
    status: "Delivered, launching soon",
    slug: "assess-yourself",
  },
  {
    name: "EHS Training Platform",
    title: ["EHS Training", " Platform"],
    type: "Web platform",
    color: "#00674C",
    description:
      "A dedicated, brand-first LMS built for live cohort-based learning.",
    client: "Client: EHS Guru",
    stack: [
      { src: "/logo/next-dot-js-svgrepo-com.svg", label: "Next.js" },
      { src: "/logo/supabase.svg", label: "Supabase" },
      { src: "/logo/zoom.svg", label: "Zoom API" },
      { src: "/logo/typescript.svg", label: "TypeScript" },
      { src: "/logo/sentry.svg", label: "Sentry" },
      { src: "/logo/tailwindcss.svg", label: "Tailwind CSS" },
    ],
    time: "Since May 2026",
    status: "Live, on our maintenance plan",
    slug: "safety-training-platform",
  },
  {
    name: "Poststeady Client Reporting Tool",
    title: ["Poststeady Client", " Reporting Tool"],
    type: "SaaS",
    color: "#1A5BFA",
    description:
      "A client-reporting SaaS that turns messy CSV exports into a branded report, with the analysis written, not just charted.",
    client: "Our own product",
    stack: [
      { src: "/logo/next-dot-js-svgrepo-com.svg", label: "Next.js" },
      { src: "/logo/supabase.svg", label: "Supabase" },
      { src: "/logo/typescript.svg", label: "TypeScript" },
      { src: "/logo/tailwindcss.svg", label: "Tailwind CSS" },
      { src: "/logo/dodopayments.svg", label: "Dodo Payments" },
      { src: "/logo/puppeteer.svg", label: "Puppeteer" },
    ],
    status: "Live",
    slug: "poststeady",
  },
  {
    name: "ChromaLayer",
    title: ["Chroma", "Layer"],
    type: "Windows app",
    color: "#1c2450",
    description:
      "A native Windows utility for advanced, system-wide display color and temperature control.",
    client: "Our own product",
    stack: [
      { src: "/logo/Microsoft_.NET_logo.svg", label: "C# / .NET / WPF" },
      { label: "Magnification API" },
      { src: "/logo/velopack-icon.svg", label: "Velopack" },
      { src: "/logo/astro.svg", label: "Astro" },
      { src: "/logo/tailwindcss.svg", label: "Tailwind CSS" },
      { src: "/logo/dodopayments.svg", label: "Dodo Payments" },
      { src: "/logo/cloudflareworkers.svg", label: "Cloudflare Workers" },
    ],
    status: "Live",
    slug: "chromalayer",
  },
];

/** Pinned scroll-driven carousel only where it fits and motion is welcome. */
const PIN_QUERY =
  "(min-width: 861px) and (min-height: 720px) and (prefers-reduced-motion: no-preference)";

function usePinned() {
  return useSyncExternalStore(
    (onChange) => {
      const mq = matchMedia(PIN_QUERY);
      mq.addEventListener("change", onChange);
      return () => mq.removeEventListener("change", onChange);
    },
    () => matchMedia(PIN_QUERY).matches,
    () => false,
  );
}

function ProjectCard({
  project,
  i,
  href,
}: {
  project: Project;
  i: number;
  /** The case study page, when there is one. */
  href?: string;
}) {
  return (
    <article
      className={styles.card}
      style={{ "--accent": project.color } as CSSProperties}
      role="group"
      aria-roledescription="slide"
      aria-label={`${i + 1} of ${PROJECTS.length}: ${project.name}`}
    >
      <div className={styles.copy}>
        <span className={styles.tag}>{project.type}</span>
        <h3 className={styles.name} aria-label={project.name}>
          <span className={styles.nameAccent}>{project.title[0]}</span>
          {project.title[1]}
        </h3>
        <p className={styles.description}>{project.description}</p>

        <ul className={styles.stack} aria-label="Stack">
          {project.stack.map(({ src, label }) => (
            <li key={label} className={styles.chip}>
              {src && (
                <img src={src} alt="" width={16} height={16} aria-hidden="true" />
              )}
              {label}
            </li>
          ))}
        </ul>

        <p className={styles.meta}>
          <span className={styles.metaItem}>{project.client}</span>
          {project.time && (
            <span className={styles.metaItem}>
              <svg
                width="18"
                height="18"
                viewBox="0 0 20 20"
                aria-hidden="true"
              >
                <rect
                  x="3"
                  y="4.5"
                  width="14"
                  height="12.5"
                  rx="2"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                />
                <path
                  d="M3 8.5h14M7 2.5v4M13 2.5v4"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
              </svg>
              {project.time}
            </span>
          )}
          <span className={styles.metaItem}>
            <span className={styles.statusDot} aria-hidden="true" />
            {project.status}
          </span>
        </p>

        {href && (
          <Link href={href} className={styles.caseLink}>
            Read the case study
            <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true">
              <path
                d="M3 9h11m-4-4 4 4-4 4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        )}
      </div>

      {/* The hero image from the case study, or a placeholder if missing. */}
      <div className={`${styles.visual} ${(() => {
          const study = CASE_STUDIES.find((c) => c.slug === project.slug);
          const shot = study?.hero && "src" in study.hero ? study.hero : null;
          return shot ? styles.hasImg : "";
      })()}`}>
        {(() => {
          const study = CASE_STUDIES.find((c) => c.slug === project.slug);
          const shot = study?.hero && "src" in study.hero ? study.hero : null;
          return shot ? (
            <Image
              src={shot.src}
              alt={shot.alt || `${project.name} screens`}
              width={shot.width}
              height={shot.height}
              style={{ width: "100%", height: "auto", objectFit: "contain", padding: "24px", maxHeight: "280px" }}
            />
          ) : (
            <>
              <span>{project.name} screens</span>
              <span className={styles.visualNote}>Demo-data screenshots coming</span>
            </>
          );
        })()}
      </div>
    </article>
  );
}

const Heading = ({ pinned = false }: { pinned?: boolean }) => (
  <div className={pinned ? styles.headPinned : styles.head}>
    <h2 id="work-title" className={styles.title}>
      What we&apos;ve shipped
    </h2>
    <p className={styles.lede}>
      Apps we built for clients, and products we build and run ourselves. So we
      deal with the same releases, bugs, payments and support you will.
    </p>
  </div>
);

/** Desktop: the section pins and vertical scroll slides the cards sideways. */
function PinnedCarousel({ hrefs }: { hrefs: Hrefs }) {
  const pinRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);
  const last = PROJECTS.length - 1;

  const { scrollYProgress } = useScroll({
    target: pinRef,
    offset: ["start start", "end end"],
  });
  // Hold briefly on the first and last card.
  const progress = useTransform(scrollYProgress, [0.08, 0.92], [0, 1], {
    clamp: true,
  });
  useMotionValueEvent(progress, "change", (p) =>
    setIndex(Math.round(p * last)),
  );
  // Lock the nav's hide-on-scroll while this section is actively pinned:
  // strictly between 0 and 1 means the carousel currently owns the scroll,
  // 0 or 1 means it hasn't started yet or has fully handed scroll back.
  useMotionValueEvent(scrollYProgress, "change", (p) => {
    navHideLock.current = p > 0 && p < 1;
  });
  useEffect(
    () => () => {
      navHideLock.current = false;
    },
    [],
  );

  const scrollToCard = (i: number) => {
    const el = pinRef.current;
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY;
    const travel = el.offsetHeight - window.innerHeight;
    window.scrollTo({
      top: top + travel * (0.08 + (i / last) * 0.84),
      behavior: "smooth",
    });
  };

  return (
    <div
      ref={pinRef}
      className={styles.pin}
      style={{ height: `${100 + last * 90}vh` }}
    >
      <div className={styles.sticky}>
        <Heading pinned />
        <div
          className={styles.track}
          role="region"
          aria-roledescription="carousel"
          aria-label="Projects"
        >
          {/* Stepped: scroll picks the card, a fixed-duration ease slides it fully
              in, so no half cards and reversing scroll lands on the same
              card at the same point a spring's momentum would not give. */}
          <motion.div
            className={styles.rail}
            animate={{ x: `calc(${-index * 100}% - ${index * 32}px)` }}
            transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
          >
            {PROJECTS.map((p, i) => (
              <ProjectCard key={p.name} project={p} i={i} href={hrefs[p.slug]} />
            ))}
          </motion.div>
        </div>
        <div className={styles.controls}>
          <div className={styles.progressInd}>
            <span>0{index + 1} / 0{PROJECTS.length}</span>
            <span className={styles.progressLine}></span>
            <span>Scroll to explore</span>
          </div>
        </div>
      </div>
    </div>
  );
}

/** Phones, short screens and reduced motion: a native swipe row. */
function SwipeCarousel({ hrefs }: { hrefs: Hrefs }) {
  const rowRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);

  const onScroll = () => {
    const row = rowRef.current;
    if (!row) return;
    const card = row.firstElementChild as HTMLElement | null;
    if (card) setIndex(Math.round(row.scrollLeft / (card.offsetWidth + 16)));
  };

  const scrollToCard = (i: number) => {
    const card = rowRef.current?.children[i] as HTMLElement | undefined;
    card?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "start",
    });
  };

  return (
    <div className={styles.flow}>
      <div
        ref={rowRef}
        className={styles.row}
        role="region"
        aria-roledescription="carousel"
        aria-label="Projects"
        tabIndex={0}
        onScroll={onScroll}
      >
        {PROJECTS.map((p, i) => (
          <ProjectCard key={p.name} project={p} i={i} href={hrefs[p.slug]} />
        ))}
      </div>
      <div className={styles.controls}>
        <CarouselDots
          count={PROJECTS.length}
          index={index}
          labels={PROJECTS.map((p) => p.name)}
          onSelect={scrollToCard}
        />
      </div>
    </div>
  );
}

export function OurWork({ hrefs }: { hrefs: Hrefs }) {
  const pinned = usePinned();
  return (
    <section id="work" className={styles.section} aria-labelledby="work-title">
      {pinned ? (
        <PinnedCarousel hrefs={hrefs} />
      ) : (
        <>
          <Heading />
          <SwipeCarousel hrefs={hrefs} />
        </>
      )}
    </section>
  );
}
