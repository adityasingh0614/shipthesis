import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { getVisibleCaseStudy } from "@/content/case-studies";
import { BriefFacts } from "../BriefFacts";
import { Reveal } from "../Reveal";
import { GoLive } from "./GoLive";
import styles from "./SafetyTraining.module.css";

// EHS Training Platform, below the hero. Its own world: "The Session
// Console", live-broadcast language (run sheet, cues, on air, logs), in
// EHS green (approved design: web/public/_design/safety-training-platform.html).
// Facts: docs/case-studies/ehs-training-platform-raw.md, [EVIDENCE]/[FOUNDER] only.

const MARQUEE = [
  "One-click classes",
  "Automatic attendance",
  "Every class recorded",
  "Engagement analytics",
  "Free webinars",
  "Email and WhatsApp reminders",
];

function Asterisk() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true">
      <path
        d="M10 1v18M1 10h18M3.6 3.6l12.8 12.8M16.4 3.6 3.6 16.4"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
    </svg>
  );
}

function Head({ label, id, children }: { label: string; id: string; children: ReactNode }) {
  return (
    <>
      <p className={styles.label}>{label}</p>
      <h2 id={id} className={styles.h2}>
        {children}
      </h2>
    </>
  );
}

const A = ({ children }: { children: ReactNode }) => (
  <span className={styles.accent}>{children}</span>
);

const Arrow = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true">
    <path d="M3 9h11m-4-4 4 4-4 4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export function SafetyTrainingBody() {
  const next = getVisibleCaseStudy("poststeady");
  const isProduction = process.env.VERCEL_ENV === "production";
  const showTestimonial = !isProduction;

  return (
    <>
      {/* Marquee: the whole platform in one line */}
      <div className={styles.marquee} aria-hidden="true">
        <div className={styles.track}>
          {[0, 1].map((copy) => (
            <span key={copy}>
              {MARQUEE.map((m) => (
                <span key={m} className={styles.item}>
                  {m} <Asterisk />
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>

      {/* 01 · The brief, set as a broadcast run sheet */}
      <section className={styles.section} aria-labelledby="brief-title">
        <div className={styles.wrap}>
          <Head label="01 · The brief" id="brief-title">
            Live classes, run on <A>their own platform</A>
          </Head>
          <BriefFacts slug="safety-training-platform" />
          <Reveal className={styles.sheet}>
            <div className={styles.sheetHead}>
              <div>
                Run sheet<b>EHS Training Platform</b>
              </div>
              <div>
                Client<b>EHS Guru</b>
              </div>
              <div>
                Status<b>Live since May 2026</b>
              </div>
            </div>
            {[
              ["What they needed", "What EHS Guru needed", "EHS Guru is an environment, health and safety company that creates its own courses and teaches them live on Zoom, in batches of nearly 80 learners. Their off-the-shelf learning platform came loaded with features they never used, at a price to match, under someone else\u2019s brand. They wanted only the core, on their own domain, so they decided to build their own and came to us."],
              ["What made it hard", "The problem with Zoom", "The class itself happens inside Zoom, so attendance and recordings have to be rebuilt from Zoom\u2019s notifications, which can arrive late, twice or out of order."],
              ["What we built", "What went live", "One platform for admins, trainers, learners and webinar guests: courses, modules and batches, one-click Zoom classes, automatic attendance, every class recorded into a private library, assignments that trainers review, engagement analytics, and free webinars that bring in new learners."],
            ].map(([n, title, body]) => (
              <div key={n} className={styles.cue}>
                <div className={styles.cueN}>
                  {n}
                </div>
                <div className={styles.cueB}>
                  <h3>{title}</h3>
                  <p>{body}</p>
                </div>
              </div>
            ))}
          </Reveal>
          <ul className={styles.stats}>
            {[
              ["4", "audiences — admin, trainer, learner, guest"],
              ["~80", "learners in a single live class"],
              ["7", "integrations — Zoom, email, WhatsApp and more"],
              ["Live", "since May 2026"],
            ].map(([num, cap], i) => (
              <Reveal as="li" key={cap} delay={i * 0.09} className={styles.stat}>
                <b>{num}</b>
                <span>{cap}</span>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* 02 · Four audiences, one system */}
      <section className={`${styles.section} ${styles.band}`} aria-labelledby="platform-title">
        <div className={styles.wrap}>
          <Head label="02 · The platform" id="platform-title">
            Four audiences, <A>one system</A>
          </Head>
          <p className={styles.lede}>
            Admins run the schedule, trainers teach, learners join from any
            browser, and guests come in through free webinars. Each sees only
            what they need.
          </p>
          <div className={styles.grid4}>
            {[
              { src: "sessions.webp", who: "Admin", strong: "One-click classes.", line: "Schedule a session and the Zoom meeting is created for you.", alt: "Admin training sessions list with Start Session buttons" },
              { src: "trainer1.webp", who: "Trainer", strong: "Your classes, your students.", line: "See who attended, review assignments, and find your recordings in one place.", alt: "Trainer dashboard showing class roster and assignments" },
              { src: "learner.webp", who: "Learner", strong: "Join from the portal.", line: "Nothing to install, no Zoom sign-up. Your progress, recordings and assignments in one place.", alt: "Learner dashboard with progress, upcoming sessions and recordings" },
              { src: "users.webp", who: "Admin", strong: "Everyone in one place.", line: "Roles, batches and bulk CSV import.", alt: "Admin user management with roles and CSV import" },
              { src: "webinars.webp", who: "Guest", strong: "Free webinars.", line: "Sign up without an account, get reminders, come back as a learner.", alt: "Free sessions portal for webinar guests" },
            ].map((a, i) => (
              <Reveal key={a.src} delay={i % 2 ? 0.12 : 0} className={styles.aud}>
                <figure>
                  <Image
                    src={`/work/safety-training-platform/${a.src}`}
                    width={1400}
                    height={824}
                    alt={a.alt}
                    sizes="100vw"
                  />
                  <figcaption className={styles.audCap}>
                    <small>{a.who}</small>
                    <span>
                      <strong>{a.strong}</strong> {a.line}
                    </span>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 03 · Showtime: pinned screen, cues light up */}
      <section className={styles.section} aria-labelledby="live-title">
        <div className={styles.wrap}>
          <Head label="03 · Showtime" id="live-title">
            What happens when a class <A>goes live</A>
          </Head>
          <GoLive />
        </div>
      </section>

      {/* 04 · The hard parts, as a status-page reliability log */}
      <section className={`${styles.section} ${styles.band}`} aria-labelledby="hard-title">
        <div className={styles.wrap}>
          <Head label="04 · The hard parts" id="hard-title">
            The <A>reliability log</A>
          </Head>
          <p className={styles.lede}>
            Zoom sits at the centre of every class, and it doesn&apos;t always
            behave. These are the problems we designed for before a single paid
            class ran.
          </p>
          <Reveal className={styles.log}>
            <div className={styles.logHead}>
              <span>ehs-training-platform · status</span>
              <span className={styles.ok}>
                <i aria-hidden="true" />
                Recording safeguards on
              </span>
            </div>
            {[
              { area: "Recording", when: "during class", title: "A recording stops mid-class", cause: "Trainers pause, or stop by accident, and Zoom splits the recording.", fix: "Recording restarts automatically, and every segment is kept in order." },
              { area: "Attendance", when: "on join", title: "“Who is ‘John’ in Zoom?”", cause: "People type their names differently when they join.", fix: "Matched by email first, then by name within the enrolled batch." },
              { area: "Session", when: "on leave", title: "A class that ends too early", cause: "A learner joining early and leaving, or a trainer testing the link.", fix: "The class ends only when it really ends." },
              { area: "Watch time", when: "recordings", title: "Watch time that can\u2019t be faked", cause: "A learner could skip ahead, or leave a recording playing in a background tab.", fix: "Skipped parts never count, the video pauses when the tab is hidden, and the server rejects any stretch it couldn\u2019t have played." },
            ].map((e) => (
              <div key={e.area} className={styles.entry}>
                <div className={styles.ts}>
                  <b>{e.area}</b>
                  {e.when}
                </div>
                <div>
                  <h3>{e.title}</h3>
                  <dl>
                    <dt>Cause</dt>
                    <dd>{e.cause}</dd>
                    <dt>Fix</dt>
                    <dd>{e.fix}</dd>
                  </dl>
                </div>
                <span className={styles.chip}>Resolved</span>
              </div>
            ))}
            <div className={`${styles.entry} ${styles.entryBig}`}>
              <div className={styles.ts}>
                <b>Playback</b>library
              </div>
              <div>
                <h3>Class videos loading slowly</h3>
                <dl>
                  <dt>Fix</dt>
                  <dd>Moved playback to a fast delivery network, measured before choosing: 0.12 → 0.90 MB/s.</dd>
                </dl>
              </div>
              <div className={styles.x}>
                7.5×<small>faster video playback</small>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Mid-page call: right after the engineering proof. The page's one
          full-bleed brand-green moment. */}
      <section className={styles.callBand} aria-labelledby="call-title">
        <div className={styles.wrap}>
          <Reveal>
            <h2 id="call-title">
              Want a platform
              <br />
              built like this?
            </h2>
            <p>Start with a 30-minute call about your idea.</p>
            <Link href="/#contact" className={styles.callBtn}>
              Book a Discovery Call
            </Link>
          </Reveal>
        </div>
      </section>

      {/* 05 · Judgement: what we left out, on purpose */}
      <section className={styles.section} aria-labelledby="judgement-title">
        <div className={styles.wrap}>
          <Head label="05 · Judgement" id="judgement-title">
            What we <A>left out</A>, on purpose
          </Head>
          <ul className={styles.cuts}>
            {[
              ["Cut 01", "Payments, kept offline", "EHS Guru\u2019s choice. It kept the build on teaching, not billing."],
              ["Cut 02", "Waiting for WhatsApp", "Email went live first. WhatsApp followed once Meta approved the templates, so launch was never held."],
              ["Cut 03", "No mobile app", "The platform works in any browser on any device. A native app wasn\u2019t necessary for launch \u2014 and would have doubled the build time for the same result."],
            ].map(([tag, title, why], i) => (
              <Reveal as="li" key={title} delay={i * 0.12} className={styles.cut}>
                <small>{tag}</small>
                <h3>{title}</h3>
                <p>{why}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* 06 · Result */}
      <section className={`${styles.section} ${styles.band}`} aria-labelledby="result-title">
        <div className={styles.wrap}>
          <p className={styles.label} id="result-title">
            06 · Result
          </p>
          <div className={styles.result}>
            <Reveal className={styles.resultLeft}>
              <div className={styles.big}>
                Live since
                <br />
                May 2026
              </div>
            </Reveal>
            <Reveal delay={0.14}>
              <ul className={styles.facts}>
                <li>
                  <small>Classes</small>Runs EHS Guru&apos;s paid live classes, in batches of nearly 80.
                </li>
                <li>
                  <small>Brand</small>On their own domain, under their own name.
                </li>
                <li>
                  <small>After launch</small>Still on our monthly maintenance plan.
                </li>
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Under the hood: open by default, same band as the result */}
      <section className={`${styles.section} ${styles.band} ${styles.hoodSection}`}>
        <div className={styles.wrap}>
          <details className={styles.hood} open>
            <summary>
              <div>
                <h2>Under the hood</h2>
                <p>How it works, in plain words, with the technical name underneath.</p>
              </div>
            </summary>
            <div className={styles.hoodBody}>
              <ul className={styles.flow}>
                <li>Opens in any browser<small>Browser</small></li>
                <li>The platform itself<small>Next.js on Vercel</small></li>
                <li>Everything the screens ask for<small>52 API routes</small></li>
                <li>Learners, batches, attendance, videos<small>Supabase, 27 tables</small></li>
              </ul>
              <ul className={styles.flow2}>
                <li>Zoom reports who joined and left<small>Zoom events</small></li>
                <li>Every message kept on record<small>Webhook log</small></li>
                <li>Minutes counted once<small>Attendance in one step</small></li>
                <li>The best video file chosen<small>Recording picker</small></li>
                <li>Kept in EHS Guru&apos;s own storage<small>Cloudflare R2</small></li>
              </ul>
              <ol className={styles.decis}>
                <li><b>Every minute counted once.</b> When Zoom repeats a message or sends it late, attendance still adds up exactly.</li>
                <li><b>Recordings copied into EHS Guru&apos;s own storage.</b> Their video library doesn&apos;t depend on Zoom&apos;s.</li>
                <li><b>Every Zoom event logged.</b> Any class&apos;s full history can be traced.</li>
                <li><b>Who can see what is checked three times.</b> At the door, on every page, and in the login itself.</li>
                <li><b>Quality:</b> automated tests on the Zoom and recording logic, an alert whenever something breaks, and limits that stop repeated login attempts.</li>
              </ol>
            </div>
          </details>
        </div>
      </section>

      {/* 07 · Testimonial: placeholder, hidden on the live site until a
          real, approved quote from EHS Guru exists (home-brief §0). */}
      {showTestimonial && (
        <section className={styles.section} aria-labelledby="words-title">
          <div className={styles.wrap}>
            <Head label="07 · In their words" id="words-title">
              What <A>EHS Guru</A> says
            </Head>
            <Reveal className={styles.panel}>
              <div className={styles.video}>
                <span className={styles.videoTag}>Video testimonial</span>
                <span className={styles.play} aria-hidden="true">
                  <svg width="26" height="26" viewBox="0 0 24 24">
                    <path d="M8 5.5v13l10.5-6.5z" fill="currentColor" />
                  </svg>
                </span>
              </div>
              <figure className={styles.quote}>
                <span className={styles.mark} aria-hidden="true">
                  &ldquo;
                </span>
                <span className={styles.placeholder}>Placeholder · hidden on the live site until real</span>
                <blockquote>
                  A short, approved quote from EHS Guru about working with us
                  goes here, in their own words.
                </blockquote>
                <figcaption>
                  Name Surname<span>Role · EHS Guru</span>
                </figcaption>
              </figure>
            </Reveal>
          </div>
        </section>
      )}

      {/* 08 · Conclusion: the end-of-show log, then the two calls */}
      <section className={`${styles.section} ${showTestimonial ? styles.band : ""}`} aria-labelledby="conclusion-title">
        <div className={styles.wrap}>
          <Head label={`${showTestimonial ? "08" : "07"} · Conclusion`} id="conclusion-title">
            What this build says about <A>yours</A>
          </Head>
          <Reveal className={styles.final}>
            <p className={styles.finalHead}>
              <span>End of show</span>
              <span className={styles.off}>
                <i aria-hidden="true" />
                Off air · still running
              </span>
            </p>
            <ol className={styles.points}>
              {[
                ["i.", "We stay after launch", "EHS Guru is still on our maintenance plan, and the platform keeps improving alongside real classes. Our work doesn\u2019t stop when the first version goes live."],
                ["ii.", "We make the tools you already use dependable", "Zoom, email and WhatsApp stayed. We built the platform that makes them work together reliably."],
                ["iii.", "We measure before we choose", "Video playback was tested before choosing the implementation \u2014 resulting in 7.5\u00d7 faster delivery."],
              ].map(([n, title, body]) => (
                <li key={n} className={styles.point}>
                  <small>{n}</small>
                  <h3>{title}</h3>
                  <p>{body}</p>
                </li>
              ))}
            </ol>
            <p className={styles.sum}>
              The same goes for your product: <b>a clear scope</b>,{" "}
              <b>a new working build every week</b>, and{" "}
              <b>code you own</b>.
            </p>
          </Reveal>
          <div className={styles.finalActions}>
            <Link href="/#contact" className="btn">
              Book a Discovery Call
            </Link>
            <Link href="/#pricing" className={`btn ${styles.secondaryBtn}`}>
              See pricing <Arrow />
            </Link>
          </div>
        </div>
      </section>

      {/* Next project: the page turn. Poststeady's page isn't built yet, so
          the card falls back to Home's work carousel. */}
      <section className={`${styles.section} ${showTestimonial ? "" : styles.band}`}>
        <div className={styles.wrap}>
          <Reveal>
            <Link className={`${styles.next} ${isProduction ? styles.nextSolo : ""}`} href={next ? `/work/${next.slug}` : "/#work"}>
              <div>
                <small className={styles.nextLabel}>Next project</small>
                <h2>
                  <span>Poststeady</span> Client Reporting Tool
                </h2>
                <p>
                  Our own product: it turns the analytics files social media
                  freelancers already download into a branded monthly report.
                </p>
                <span className={styles.go}>
                  {next ? "View case study" : "See our work"} <Arrow />
                </span>
              </div>
              {(() => {
                const shot = next?.hero && "src" in next.hero ? next.hero : null;
                return shot ? (
                  <div className={styles.nextImg} aria-hidden="true" style={{ width: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <Image
                      src={shot.src}
                      alt={shot.alt || "Next project"}
                      width={shot.width}
                      height={shot.height}
                      style={{ width: "100%", height: "auto", objectFit: "contain", maxHeight: "220px", transform: "scale(0.85)" }}
                    />
                  </div>
                ) : (
                  !isProduction && <div className={styles.phFrame}>Poststeady screen, once captured</div>
                );
              })()}
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
