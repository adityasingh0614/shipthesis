import type { ReactNode } from "react";
import Link from "next/link";
import { getVisibleCaseStudy } from "@/content/case-studies";
import { Reveal } from "../Reveal";
import { SpendMerge } from "./SpendMerge";
import { Wizard } from "./Wizard";
import styles from "./Poststeady.module.css";

// Poststeady, below the hero. Its own world: "The Press Room", an editorial
// desk and a print run, in Poststeady blue (approved design:
// web/public/_design/poststeady.html). Facts: docs/case-studies/
// poststeady-raw.md, [EVIDENCE]/[FOUNDER] only. No prices, no user or
// revenue numbers, no past bugs. Every screen is a placeholder frame, so the
// page is hidden on production (hiddenOnProduction in the content file).

const MARQUEE = ["Meta", "Instagram", "TikTok", "LinkedIn", "Google Ads", "GA4"];

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

const Check = () => (
  <svg viewBox="0 0 16 16" aria-hidden="true">
    <circle cx="8" cy="8" r="7" fill="none" stroke="currentColor" strokeWidth="1.6" />
    <path d="m4.6 8.2 2.2 2.2 4.6-4.6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export function PoststeadyBody() {
  // ChromaLayer's page isn't built yet, so the card falls back to Home's
  // work carousel until it exists and is visible.
  const next = getVisibleCaseStudy("chromalayer");
  const showTestimonial = false; // Hidden until a real quote exists


  return (
    <>
      {/* Marquee: the platforms it reads */}
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

      {/* 01 · The brief, set as an assignment memo */}
      <section className={styles.section} aria-labelledby="brief-title">
        <div className={styles.wrap}>
          <Head label="01 · The brief" id="brief-title">
            One report, from <A>whatever they export</A>
          </Head>
          <Reveal className={styles.memo}>
            <div className={styles.memoHead}>
              <div>
                Built for<b>Social media freelancers</b>
              </div>
              <div>
                Built by<b>Ship Thesis</b>
              </div>
              <div>
                Timeline<b>11 weeks</b>
              </div>
            </div>
            {[
              ["The problem", "Why we built it", "Reporting was still manual. Freelancers downloaded files from multiple platforms, reconciled different column names, rewrote commentary, and formatted the final report every month."],
              ["The solution", "Not another dashboard", "The obvious solution wasn't another analytics dashboard. It was a faster way to turn the exports they already had into something client-ready."],
              ["What ran", "What we built", "Upload the exports, get a branded three-page report with a summary you can edit."],
            ].map(([k, title, body]) => (
              <div key={k} className={styles.memoRow}>
                <div className={styles.memoK}>{k}</div>
                <div className={styles.memoB}>
                  <h3>{title}</h3>
                  <p>{body}</p>
                </div>
              </div>
            ))}
          </Reveal>
          {/* Verified in the Poststeady repo (2026-09-29): 21 page files, a
              3-page report canvas, 230 passing tests, 2 dated audits. */}
          <ul className={styles.stats}>
            {[
              ["21", "screens, app and website together"],
              ["3", "pages in every finished report"],
              ["230", "automated tests"],
              ["2", "dated security audits"],
            ].map(([num, cap], i) => (
              <Reveal as="li" key={cap} delay={i * 0.09} className={styles.stat}>
                <b>{num}</b>
                <span>{cap}</span>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* 02 · The centrepiece: 175 ways to say Spend */}
      <section className={`${styles.section} ${styles.band}`} aria-labelledby="spend-title">
        <div className={styles.wrap}>
          <Head label="02 · The centrepiece" id="spend-title">
            175 ways to say <A>&ldquo;Spend&rdquo;</A>
          </Head>
          <p className={styles.lede}>
            Meta says <b>Amount Spent</b>. Another export says <b>Cost</b>. Another says <b>Total Spend</b>. Poststeady turns them all into <b>Spend</b>.
          </p>
          <Reveal>
            <SpendMerge />
          </Reveal>
          <Reveal className={styles.count}>
            <b>175</b>
            <span>
              column variations matched automatically.
            </span>
          </Reveal>
        </div>
      </section>

      {/* 03 · The wizard: pinned browser frame, steps light up */}
      <section className={styles.section} aria-labelledby="wizard-title">
        <div className={styles.wrap}>
          <Head label="03 · The wizard" id="wizard-title">
            From export to <A>client-ready report</A>
          </Head>
          {/* Founder's design story (2026-09-29). */}
          <p className={styles.lede}>
            The first version asked freelancers to connect their social
            accounts. We cut it before it shipped: those accounts belong to
            their clients, who don&apos;t want to share logins, and platform
            rules change without warning. So the wizard works from the files
            each platform already gives you. Columns are matched automatically from 175 known variations; you confirm or correct them. It runs once a month, with
            nothing to set up.
          </p>
          <Wizard />
        </div>
      </section>

      {/* 04 · The hard parts, as a fact-check desk */}
      <section className={`${styles.section} ${styles.band}`} aria-labelledby="hard-title">
        <div className={styles.wrap}>
          <Head label="04 · The hard parts" id="hard-title">
            The <A><span className={styles.nowrap}>fact-check</span> desk</A>
          </Head>
          <p className={styles.lede}>
            The output is a document a freelancer&apos;s client reads. A silent
            mistake costs trust twice, so nothing ships unchecked.
          </p>
          <Reveal className={styles.desk}>
            {[
              ["Asked, not guessed", "When a file could belong to two platforms", "Poststeady doesn't guess. You pick the platform in one click, so the report the client sees is accurate."],
              ["Facts only", "What the AI is allowed to say", "It quotes only real figures and never states a cause it can’t know. Jumps over 300% are flagged before it sees the data."],
              ["What you see prints", "One design, three outputs", "The screen, the share link and the PDF render from the same design, so they can never drift apart."],
            ].map(([mark, title, body]) => (
              <div key={mark} className={styles.deskItem}>
                <span className={styles.proofMark}>
                  <Check />
                  {mark}
                </span>
                <h3>{title}</h3>
                <p>{body}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* Mid-page call: right after the engineering proof. The page's one
          full-bleed brand-green moment. */}
      <section className={styles.callBand} aria-labelledby="call-title">
        <div className={styles.wrap}>
          <Reveal>
            <h2 id="call-title">
              Want a product
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

      {/* 05 · Judgement: stories we spiked */}
      <section className={styles.section} aria-labelledby="judgement-title">
        <div className={styles.wrap}>
          <Head label="05 · Product decisions" id="judgement-title">
            What we <A>left out</A>
          </Head>
          <p className={styles.lede}>
            Three features cut on purpose to keep scope tight and focus on the core problem.
          </p>
          <ul className={styles.spiked}>
            {[
              ["No social-account logins", "It was in the first version, and we cut it before launch. The accounts belong to the freelancer’s clients, who don’t want to share logins, and platform rules change without warning."],
              ["No YouTube auto-detection", "Its export looks identical to Meta’s, and a wrong guess would corrupt a client’s report."],
              ["No scheduling or live dashboard", "Scope stays tight on the report, not a broader analytics product."],
            ].map(([title, why], i) => (
              <Reveal as="li" key={title} delay={i * 0.12} className={styles.spike}>
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
            <Reveal>
              <div className={styles.big}>Live</div>
              <p className={styles.bigLine}>in 11 weeks.</p>
            </Reveal>
            <Reveal delay={0.14}>
              <ul className={styles.facts}>
                <li>
                  <small>Speed</small>Working first version by week 1.
                </li>
                <li>
                  <small>Quality</small>230 automated tests and 2 dated security audits.
                </li>
                <li>
                  <small>Business</small>Live product with Free and Pro plans.
                </li>
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 07 · Under the hood: separated from result */}
      <section className={`${styles.section} ${styles.hoodSection}`} aria-labelledby="hood-title">
        <div className={styles.wrap}>
          <details className={styles.hood} open>
            <summary>
              <div>
                <h2 id="hood-title">07 · Under the hood</h2>
                <p>How it works, in plain words, with the technical name underneath.</p>
              </div>
            </summary>
            <div className={styles.hoodBody}>
              <ul className={styles.flow}>
                <li>Files are processed on your computer first<small>Browser processing</small></li>
                <li>Each account sees only its own data<small>Supabase · Row-level security</small></li>
                <li>The PDF uses the page you approved<small>Headless Chrome</small></li>
                <li>AI drafts the summary<small>Gemini</small></li>
              </ul>
              <ol className={styles.decis}>
                <li><b>Plan limits are counted on the server.</b> The free allowance can&apos;t be switched off from the browser.</li>
                <li><b>One list of metrics, read by every screen.</b> The upload, the review and the finished report always agree.</li>
                <li><b>Client text treated as data, never instructions.</b> Names and pasted notes can&apos;t redirect the AI.</li>
                <li><b>The AI model is fixed.</b> We tested model versions for speed and consistency before choosing one, so its behavior doesn&apos;t silently change underneath the product.</li>
              </ol>
            </div>
          </details>
        </div>
      </section>

      {/* 07 · Testimonial: placeholder, hidden on the live site until a
          real, approved quote exists (home-brief §0). */}
      {showTestimonial && (
        <section className={styles.section} aria-labelledby="words-title">
          <div className={styles.wrap}>
            <Head label="07 · In their words" id="words-title">
              What <A>freelancers</A> say
            </Head>
            <Reveal className={styles.panel}>
              <div className={`${styles.ph} ${styles.phPage}`} role="img" aria-label="Placeholder: client photo or logo, once approved">
                <span>
                  Client photo or logo
                  <br />
                  (once approved)
                </span>
              </div>
              <figure className={styles.quote}>
                <span className={styles.mark} aria-hidden="true">
                  &ldquo;
                </span>
                <span className={styles.placeholder}>Placeholder · hidden on the live site until real</span>
                <blockquote>
                  A short, approved quote from a freelancer about using
                  Poststeady goes here, in their own words.
                </blockquote>
                <figcaption>
                  Name Surname<span>Role · Client</span>
                </figcaption>
              </figure>
            </Reveal>
          </div>
        </section>
      )}

      {/* 08 · Conclusion: the back page, then the two calls */}
      <section className={`${styles.section} ${showTestimonial ? styles.band : ""}`} aria-labelledby="conclusion-title">
        <div className={styles.wrap}>
          <Head label="08 · Conclusion" id="conclusion-title">
            What running our own product <A>means for yours</A>
          </Head>
          <Reveal className={styles.final}>
            <p className={styles.finalHead}>
              <span>The back page</span>
              <span>Poststeady</span>
            </p>
            <ol className={styles.points}>
              {[
                ["i.", "We live with what we ship", "We don't just build and hand over a product. We run one ourselves — including payments, support, testing, security, and everything that happens after launch."],
                ["ii.", "We cut scope on purpose", "Poststeady shipped without social logins, scheduling, or a live dashboard because they weren't necessary to solve the core problem."],
                ["iii.", "We build for the real world", "Messy files, permissions, payments, AI output, edge cases and maintenance are part of the product too."],
              ].map(([n, title, body]) => (
                <li key={n} className={styles.point}>
                  <small>{n}</small>
                  <h3>{title}</h3>
                  <p>{body}</p>
                </li>
              ))}
            </ol>
            <p className={styles.sum}>
              The same approach goes into every product we build: <b>clear scope</b>, <b>working builds every week</b>, and{" "}
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

      {/* Next project: the page turn, last thing on the page */}
      <section className={`${styles.section} ${showTestimonial ? "" : styles.band}`}>
        <div className={styles.wrap}>
          <Reveal>
            <Link className={styles.next} href={next ? `/work/${next.slug}` : "/#work"}>
              <div>
                <small className={styles.nextLabel}>Next project</small>
                <h2>
                  <span>Chroma</span>Layer
                </h2>
                <p>
                  Our own Windows app: seven colour controls for laptop screens
                  that stay applied after every restart, sleep and sign-in.
                </p>
                <span className={styles.go}>
                  {next ? "View case study" : "See our work"} <Arrow />
                </span>
              </div>
              {/* Dashed frame until a ChromaLayer screen is captured. */}
              <div className={`${styles.ph} ${styles.phBrowser}`} aria-hidden="true">
                <span>ChromaLayer screen, once captured</span>
              </div>
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
