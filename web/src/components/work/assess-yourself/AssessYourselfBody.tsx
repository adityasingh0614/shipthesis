import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { getCaseStudy } from "@/content/case-studies";
import { BriefFacts } from "../BriefFacts";
import { Reveal } from "../Reveal";
import { ExamDay } from "./ExamDay";
import styles from "./AssessYourself.module.css";

// Assess Yourself, below the hero. Its own world: an exam paper, in the
// app's indigo (approved design: web/public/_design/assess-yourself.html).
// Facts: docs/case-studies/acessyourself_raw.md, [EVIDENCE]/[FOUNDER] only.

const MARQUEE = [
  "Exam discovery",
  "Timed tests",
  "Previous-year papers",
  "Live tests",
  "Instant analysis",
  "Excel question import",
  "15-day free trial",
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

export function AssessYourselfBody() {
  const next = getCaseStudy("safety-training-platform");
  const showTestimonial = process.env.VERCEL_ENV !== "production";

  return (
    <>
      {/* Marquee: the whole product in one line */}
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

      {/* 01 · The brief, set as an answer paper */}
      <section className={styles.section} aria-labelledby="brief-title">
        <div className={styles.wrap}>
          <Head label="01 · The brief" id="brief-title">
            One app from <A>&ldquo;which exam?&rdquo;</A> to exam day
          </Head>
          <BriefFacts slug="assess-yourself" />
          <Reveal className={styles.paper}>
            <div className={styles.paperHead}>
              <span>Assess Yourself · Case paper</span>
              <span>Client: Aptellic</span>
              <span>Time allowed: 3-4 weeks</span>
            </div>
            {[
              ["Q1.", "What did Aptellic need?", "One app where students preparing for UPSC, SSC and MPSC could find an exam, check its details and practise, instead of gathering it all from many different places."],
              ["Q2.", "What made it hard?", "A large question bank lived in Excel files with two layouts, Marathi numerals and image-based answers. And a timed paper of 60+ questions couldn't be lost when the phone closed the app."],
              ["Q3.", "What shipped?", "A Flutter app with exam discovery, a full test engine, instant analysis and a 15-day free trial, plus an upload that turns Excel files into ready-to-use tests."],
            ].map(([n, q, a]) => (
              <div key={n} className={styles.q}>
                <div className={styles.qn}>{n}</div>
                <div className={styles.qb}>
                  <h3>{q}</h3>
                  <p className={styles.ans}>
                    <b>ANS.</b>
                    <span>{a}</span>
                  </p>
                </div>
              </div>
            ))}
          </Reveal>
          <ul className={styles.scores}>
            {[
              ["3-4", "weeks to deliver the app to Aptellic"],
              ["15", "REST APIs behind the content and tests"],
              ["60+", "questions in a single timed paper"],
              ["15", "day free trial, then Razorpay plans"],
            ].map(([num, cap], i) => (
              <Reveal as="li" key={cap} delay={i * 0.09} className={styles.score}>
                <div className={styles.num}>{num}</div>
                <p className={styles.scoreCap}>{cap}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* 02 · Exam discovery */}
      <section className={`${styles.section} ${styles.band}`} aria-labelledby="discovery-title">
        <div className={styles.wrap}>
          <Head label="02 · Exam discovery" id="discovery-title">
            Every government exam, one <A>student corner</A>
          </Head>
          <p className={styles.lede}>
            Students start from the exam, not a search bar. Central and state
            exams sit in one list, and each exam has its own page with the
            details, notices and study material they need before choosing a
            paper.
          </p>
          <div className={styles.phones}>
            {[
              { src: "exam-list.webp", w: 1000, h: 2064, cap: "Exam list", line: "UPSC, SSC, RRB and IBPS in one place.", alt: "Student corner listing central government exams: UPSC, SSC, RRB and IBPS" },
              { src: "exam-categories.webp", w: 1000, h: 2068, cap: "Exam categories", line: "Central, state and PSU, sorted the way students think.", alt: "Exam categories: central government, state and PSU" },
              { src: "exam-details.webp", w: 1000, h: 1406, cap: "Exam details", line: "Details, notices and study material before the paper.", alt: "Exam details with tabs for exam details, advertisements and study material", crop: true },
            ].map((p, i) => (
              <Reveal key={p.src} delay={i * 0.12} className={styles.phone}>
                <figure className={p.crop ? styles.crop : undefined}>
                  <Image src={`/work/assess-yourself/${p.src}`} width={p.w} height={p.h} alt={p.alt} sizes="(max-width: 719px) 280px, 300px" />
                </figure>
                <div className={styles.pcap}>
                  <small>{p.cap}</small>
                  <span>{p.line}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 03 · Exam day: pinned phone, steps fill like an answer sheet */}
      <section className={styles.section} aria-labelledby="day-title">
        <div className={styles.wrap}>
          <Head label="03 · Exam day" id="day-title">
            A timed paper that <A>survives the phone</A>
          </Head>
          <ExamDay />
        </div>
      </section>

      {/* 04 · The question bank */}
      <section className={`${styles.section} ${styles.band}`} aria-labelledby="bank-title">
        <div className={styles.wrap}>
          <Head label="04 · The question bank" id="bank-title">
            Excel in, <A>clean tests</A> out
          </Head>
          <ol className={styles.pipe}>
            {[
              { t: "Excel files", p: "From the content team, as they already keep them.", s: "2 layouts · Marathi numerals", icon: <><rect x="8" y="10" width="40" height="36" rx="4" /><path d="M8 22h40M8 34h40M22 10v36M35 10v36" /></> },
              { t: "Read both layouts", p: "Text and image-based answer options included.", s: "One importer", icon: <><path d="M12 18h32M12 28h32M12 38h20" /><path d="m38 34 6 4-6 4" strokeLinecap="round" strokeLinejoin="round" /></> },
              { t: "Check every row", p: "Rows that need a fix are listed; the rest carry on.", s: "Row-level error report", icon: <><path d="M14 20l5 5 9-10M14 36l5 5 9-10" strokeLinecap="round" strokeLinejoin="round" /><path d="M34 22h10M34 38h10" /></> },
              { t: "Ready-to-use tests", p: "Questions land in the app, grouped by exam and subject.", s: "No retyping", icon: <><rect x="14" y="8" width="28" height="40" rx="4" /><circle cx="21" cy="20" r="3" /><circle cx="21" cy="30" r="3" fill="currentColor" /><circle cx="21" cy="40" r="3" /><path d="M28 20h8M28 30h8M28 40h8" /></> },
            ].map((n, i) => (
              <Reveal as="li" key={n.t} delay={i * 0.14} className={styles.node}>
                <div className={styles.cell}>
                  <svg viewBox="0 0 56 56" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true">
                    {n.icon}
                  </svg>
                </div>
                <h3>{n.t}</h3>
                <p>{n.p}</p>
                <small>{n.s}</small>
              </Reveal>
            ))}
          </ol>
          <p className={styles.pipeNote}>
            The content team uploads a file. Anything that needs fixing is
            flagged by row; every other question goes live. That&apos;s how new
            exams reach students from a single upload.
          </p>
        </div>
      </section>

      {/* 05 · The hard parts, as a marking scheme */}
      <section className={styles.section} aria-labelledby="hard-title">
        <div className={styles.wrap}>
          <Head label="05 · The hard parts" id="hard-title">
            Three problems we <A>had to get right</A>
          </Head>
          <div className={styles.scheme}>
            <div className={styles.schemeHead} aria-hidden="true">
              <span>Question</span>
              <span>The problem</span>
              <span>What we did</span>
              <span>Why it matters to you</span>
            </div>
            {[
              ["Q1 · Reliability", "Tests that survive interruptions", "A long timed paper can't start over because the phone closed the app.", "Answers, review marks and elapsed time are saved on the phone after every tap.", "Students never lose a paper they've half finished."],
              ["Q2 · Content", "Messy spreadsheets in", "Question files came in two layouts, with Marathi numerals and image options.", "One importer reads both and flags bad rows without stopping the rest.", "New exams go live from one upload, not weeks of retyping."],
              ["Q3 · Payments", "One source of truth for plans", "Trial and plan status could disagree between the phone and the server.", "The server decides who's on a trial or a plan; the app only shows it.", "Every student always sees the right plan."],
            ].map(([tag, title, problem, did, win], i) => (
              <Reveal key={title} delay={i * 0.1} className={styles.row}>
                <div className={styles.rowTitle}>
                  <small>{tag}</small>
                  <h3>{title}</h3>
                </div>
                <div>
                  <span className={styles.k}>The problem</span>
                  <p>{problem}</p>
                </div>
                <div>
                  <span className={styles.k}>What we did</span>
                  <p>{did}</p>
                </div>
                <div>
                  <span className={styles.k}>Why it matters to you</span>
                  <p className={styles.win}>{win}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Mid-page call: right after the engineering proof, where a founder
          decides "they could build mine". The page's one full-bleed colour
          moment, in the brand's action green. */}
      <section className={styles.callBand} aria-labelledby="call-title">
        <div className={styles.wrap}>
          <Reveal>
            <h2 id="call-title">
              Want an app built
              <br />
              like this?
            </h2>
            <p>Start with a 30-minute call about your idea.</p>
            <Link href="/#contact" className={styles.callBtn}>
              Book a Discovery Call
            </Link>
          </Reveal>
        </div>
      </section>

      {/* 06 · What we chose not to build */}
      <section className={`${styles.section} ${styles.band}`} aria-labelledby="judgement-title">
        <div className={styles.wrap}>
          <Head label="06 · Judgement" id="judgement-title">
            What we <A>chose not</A> to build
          </Head>
          <ul className={styles.decisions}>
            {[
              ["Decision 01", "Recurring auto-pay, held back", "The renewal model wasn't decided yet, so we didn't hard-code a billing flow the client hadn't chosen."],
              ["Decision 02", "An importer that stops at row one", "Real files would fail it on the first bad row. Ours reports every bad row and keeps going."],
            ].map(([tag, title, why], i) => (
              <Reveal as="li" key={title} delay={i * 0.14} className={styles.decision}>
                <small>{tag}</small>
                <h3>{title}</h3>
                <p>{why}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* 07 · Result */}
      <section className={styles.section} aria-labelledby="result-title">
        <div className={styles.wrap}>
          <p className={styles.label} id="result-title">
            07 · Result
          </p>
          <div className={styles.result}>
            <Reveal>
              <div className={styles.big}>
                3-4
                <br />
                weeks
              </div>
              <p className={styles.bigLine}>to deliver the app to Aptellic.</p>
            </Reveal>
            <Reveal delay={0.14}>
              <ul className={styles.facts}>
                <li>
                  <small>Content</small>New exams go live from a single Excel upload.
                </li>
                <li>
                  <small>Students</small>Exam discovery, timed tests and instant analysis in one app.
                </li>
                <li>
                  <small>Status</small>Delivered, launching on the Play Store soon.
                </li>
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 08 · Under the hood */}
      <section className={`${styles.section} ${styles.hoodSection}`}>
        <div className={styles.wrap}>
          <details className={styles.hood} open>
            <summary>
              <div>
                <h2>Under the hood</h2>
                <p>Architecture and the decisions behind it.</p>
              </div>
            </summary>
            <div className={styles.hoodBody}>
              <ul className={styles.arch}>
                <li>Flutter app</li>
                <li>15 REST APIs</li>
                <li>Express on Firebase Functions</li>
                <li>Firestore</li>
              </ul>
              <ul className={styles.archSide}>
                <li>Excel importer</li>
                <li>Razorpay payments</li>
                <li>Test state saved on the phone</li>
              </ul>
              <ol className={styles.decis}>
                <li><b>Trial rules live on the server.</b> The app never decides who is on a trial.</li>
                <li><b>Row-level error reports on import.</b> One bad row never blocks an upload.</li>
                <li><b>Content linked by IDs.</b> Each screen fetches only the layer it needs.</li>
                <li><b>Test state saved after every tap.</b> A closed app resumes where it stopped.</li>
                <li><b>Uploads handled below Firebase&apos;s default parser.</b> Excel files arrive intact.</li>
              </ol>
            </div>
          </details>
        </div>
      </section>

      {/* 08 · Testimonial: placeholder, hidden on the live site until a
          real, approved quote from Aptellic exists (home-brief §0). */}
      {showTestimonial && (
        <section className={`${styles.section} ${styles.band}`} aria-labelledby="words-title">
          <div className={styles.wrap}>
            <Head label="08 · In their words" id="words-title">
              What <A>Aptellic</A> says
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
                  A short, approved quote from Aptellic about working with us
                  goes here, in their own words.
                </blockquote>
                <figcaption>
                  Name Surname<span>Role · Aptellic</span>
                </figcaption>
              </figure>
            </Reveal>
          </div>
        </section>
      )}

      {/* 09 · Conclusion: the paper's final answer, then the two calls */}
      <section className={`${styles.section} ${showTestimonial ? "" : styles.band}`} aria-labelledby="conclusion-title">
        <div className={styles.wrap}>
          <Head label={`${showTestimonial ? "09" : "08"} · Conclusion`} id="conclusion-title">
            What this build says about <A>yours</A>
          </Head>
          <Reveal className={styles.final}>
            <p className={styles.finalHead}>
              <span>Final answer</span>
              <span>Assess Yourself</span>
            </p>
            <ol className={styles.points}>
              {[
                ["i.", "We plan for how people really use your app", "Students close apps mid-exam, so the app saves every answer as they go."],
                ["ii.", "We build around the data you already have", "Aptellic kept its questions in Excel, so the upload reads their files instead of asking them to retype."],
                ["iii.", "We don't build decisions you haven't made", "Auto-pay was held back while the renewal model was still undecided."],
              ].map(([n, title, body]) => (
                <li key={n} className={styles.point}>
                  <small>{n}</small>
                  <h3>{title}</h3>
                  <p>{body}</p>
                </li>
              ))}
            </ol>
            <p className={styles.sum}>
              The same goes for your app: <b>a fixed quote</b> after a one-week
              Discovery Sprint, <b>a new build on your phone every week</b>, and{" "}
              <b>code you own</b>.
            </p>
          </Reveal>
          <div className={styles.finalActions}>
            <Link href="/#contact" className="btn">
              Book a Discovery Call
            </Link>
            <Link href="/#pricing" className={`btn ${styles.secondaryBtn}`}>
              See pricing
              <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true">
                <path d="M3 9h11m-4-4 4 4-4 4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Next project: the page turn, last thing on the page */}
      <section className={`${styles.section} ${showTestimonial ? styles.band : ""}`}>
        <div className={styles.wrap}>
          <Reveal>
            <Link className={styles.next} href={next ? `/work/${next.slug}` : "/#work"}>
              <div>
                <small className={styles.nextLabel}>Next project</small>
                <h2>
                  <span>EHS Training</span> Platform
                </h2>
                <p>
                  A custom training platform for EHS Guru: live Zoom classes,
                  automatic attendance and every class recorded.
                </p>
                <span className={styles.go}>
                  {next ? "View case study" : "See our work"}
                  <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true">
                    <path d="M3 9h11m-4-4 4 4-4 4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </div>
              <div className={styles.nextImg}>
                <Image
                  src="/work/safety-training-platform/sessions.webp"
                  width={1400}
                  height={824}
                  alt="EHS Training Platform: the admin training sessions list"
                  sizes="(max-width: 859px) 90vw, 600px"
                />
              </div>
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
