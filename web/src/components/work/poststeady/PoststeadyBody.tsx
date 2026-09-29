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
  const showTestimonial = process.env.VERCEL_ENV !== "production";

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
            <dl className={styles.memoHead}>
              <div>
                <dt>To</dt>
                <dd>Every freelancer with a monthly report due</dd>
              </div>
              <div>
                <dt>From</dt>
                <dd>Ship Thesis</dd>
              </div>
              <div>
                <dt>Re</dt>
                <dd>Poststeady, 11 weeks</dd>
              </div>
            </dl>
            <div className={styles.memoCols}>
              <div className={styles.memoCol}>
                <small>The story</small>
                <p className={styles.lead}>
                  Social media freelancers send each client a report{" "}
                  <A>every month</A>.
                </p>
                <p className={styles.rest}>
                  The numbers come from Meta, Instagram, TikTok, LinkedIn and
                  Google Ads.
                </p>
              </div>
              <div className={styles.memoCol}>
                <small>The problem</small>
                <p className={styles.lead}>
                  Each platform exports them in its own format, with{" "}
                  <A>its own name for the same figure</A>.
                </p>
              </div>
              <div className={styles.memoCol}>
                <small>What ran</small>
                <p className={styles.lead}>
                  Upload the exports, get <A>
                    a branded <span className={styles.nowrap}>three-page</span> report
                  </A>{" "}
                  with a summary you can edit.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 02 · The centrepiece: 175 ways to say Spend */}
      <section className={`${styles.section} ${styles.band}`} aria-labelledby="spend-title">
        <div className={styles.wrap}>
          <Head label="02 · The centrepiece" id="spend-title">
            175 ways to say <A>&ldquo;Spend&rdquo;</A>
          </Head>
          <p className={styles.lede}>
            Every platform names the same number differently. The report needs
            one name, so Poststeady does the translating.
          </p>
          <Reveal>
            <SpendMerge />
          </Reveal>
          <Reveal className={styles.count}>
            <b>175</b>
            <span>
              column names Poststeady matches to the right metric, across every
              platform it reads.
            </span>
          </Reveal>
        </div>
      </section>

      {/* 03 · The wizard: pinned browser frame, steps light up */}
      <section className={styles.section} aria-labelledby="wizard-title">
        <div className={styles.wrap}>
          <Head label="03 · The wizard" id="wizard-title">
            One report, <A>start to finish</A>
          </Head>
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
              ["Asked, not guessed", "When a file could belong to two platforms", "Poststeady asks instead of guessing, so the report the client sees is accurate."],
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
          <Head label="05 · Judgement" id="judgement-title">
            Stories we <A>spiked</A>
          </Head>
          <p className={styles.lede}>
            The newsroom word for a story cut on purpose, not one that ran out
            of time.
          </p>
          <ul className={styles.spiked}>
            {[
              ["No social-account logins", "Works for clients whose accounts can’t be connected, and keeps working when platforms change their rules."],
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
              <div className={styles.big}>11 weeks</div>
              <p className={styles.bigLine}>with a working first version at the end of week 1.</p>
            </Reveal>
            <Reveal delay={0.14}>
              <ul className={styles.facts}>
                <li>
                  <small>Live</small>At{" "}
                  <a className={styles.out} href="https://www.poststeady.com" target="_blank" rel="noreferrer">
                    poststeady.com
                  </a>
                  .
                </li>
                <li>
                  <small>Plans</small>Free and Pro, both live.
                </li>
                <li>
                  <small>Tested</small>221 automated tests.
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
                <p>Architecture and the decisions behind it.</p>
              </div>
            </summary>
            <div className={styles.hoodBody}>
              <ul className={styles.flow}>
                <li>Browser, files read client-side</li>
                <li>Next.js on Vercel</li>
                <li>Supabase · RLS everywhere</li>
                <li>File storage</li>
              </ul>
              <ul className={styles.flow2}>
                <li>Gemini drafts the summary</li>
                <li>Headless Chrome prints the reviewed page</li>
                <li>PDF or share link</li>
                <li>Payments · signed webhook</li>
              </ul>
              <ol className={styles.decis}>
                <li><b>Plan limits enforced in the database.</b> The free quota can&apos;t be bypassed from the browser.</li>
                <li><b>One list of metrics everything reads from.</b> It replaced three copies that had drifted apart.</li>
                <li><b>Client text treated as data, never instructions.</b> Names and pasted notes can&apos;t redirect the AI.</li>
                <li><b>The AI model is pinned.</b> 4 out of 4 successes in testing, averaging 2.4 seconds.</li>
                <li><b>Quality:</b> 221 automated tests and two dated security audits.</li>
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
          <Head label={`${showTestimonial ? "08" : "07"} · Conclusion`} id="conclusion-title">
            What running our own product <A>means for yours</A>
          </Head>
          <Reveal className={styles.final}>
            <p className={styles.finalHead}>
              <span>The back page</span>
              <span>Poststeady</span>
            </p>
            <ol className={styles.points}>
              {[
                ["i.", "We live with what we ship", "Payments, support and two dated security audits: we carry the same weight your product will."],
                ["ii.", "We cut scope on purpose", "No social logins, no YouTube guessing, no scheduling. Three spiked stories, not three missed deadlines."],
                ["iii.", "We guard accuracy before polish", "The AI quotes only real figures. A number a client will see is checked before it looks good."],
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
              Discovery Sprint, <b>a new build every week</b>, and{" "}
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
