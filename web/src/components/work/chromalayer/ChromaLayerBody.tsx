import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { getVisibleCaseStudy } from "@/content/case-studies";
import { BriefFacts } from "../BriefFacts";
import { Reveal } from "../Reveal";
import { Fight } from "./Fight";
import { Lab } from "./Lab";
import styles from "./ChromaLayer.module.css";

// ChromaLayer, below the hero. Its own world: "The Colour Lab", a
// display-calibration bench (approved design: web/public/_design/
// chromalayer.html). Facts: docs/case-studies/chromalayer-raw.md and the
// product repo (chromalayerlab/Chromalayer: docs/product-truth.md, verified
// against the code). No price, no installer details, no user numbers, no
// "calibrated" or "eye health" claims. The real-hardware before/after photo
// and the testimonial are placeholders, so the page is hidden on production
// (hiddenOnProduction in the content file).

const CONTROLS = ["Vibrancy", "Warmth", "Brightness", "Contrast", "Hue", "Black level", "White point"];

function Star() {
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

const A = ({ children }: { children: ReactNode }) => <span className={styles.accent}>{children}</span>;

const Arrow = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true">
    <path d="M3 9h11m-4-4 4 4-4 4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export function ChromaLayerBody() {
  const next = getVisibleCaseStudy("assess-yourself");
  const showPlaceholders = process.env.VERCEL_ENV !== "production";

  return (
    <>
      {/* Marquee: the seven controls */}
      <div className={styles.marquee} aria-hidden="true">
        <div className={styles.track}>
          {[0, 1].map((copy) => (
            <span key={copy}>
              {CONTROLS.map((c) => (
                <span key={c} className={styles.item}>
                  {c} <Star />
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>

      {/* 01 · The brief, as a calibration report */}
      <section className={styles.section} aria-labelledby="brief-title">
        <div className={styles.wrap}>
          <Head label="01 · The brief" id="brief-title">
            A laptop screen that <A>stays how you set it</A>
          </Head>
          <BriefFacts slug="chromalayer" />
          <Reveal className={styles.sheet}>
            <div className={styles.sheetHead}>
              <span>Calibration report · ChromaLayer</span>
              <span>Subject: built-in laptop screens</span>
            </div>
            {[
              ["Why we built it", "Changing colours with Intel’s own software was frustrating, and it never gave full control over the screen. We wanted one tool that works on Intel, AMD and NVIDIA, not just one brand of graphics."],
              ["What we observed", "Colours look washed out or too yellow, Windows has no proper colour controls for the built-in screen, and the settings that do exist quietly reset after a restart."],
              ["What shipped", "Seven colour controls and five presets, from one small window in the system tray, on Intel, AMD and NVIDIA graphics, re-applied after every restart, sleep, sign-in and display change."],
            ].map(([k, body]) => (
              <div key={k} className={styles.row}>
                <small>{k}</small>
                <p>{body}</p>
              </div>
            ))}
          </Reveal>
          {/* Verified in the product repo (docs/product-truth.md, 2026-09-02):
              7 controls, 5 presets, 9 recovery checkpoints, no elevation and
              no kernel driver. */}
          <ul className={styles.stats}>
            {[
              ["7", "colour controls, combined into one", "#8f9fe8"],
              ["5", "ready-made presets", "#8f9fe8"],
              ["9", "re-checks in the 25 seconds after each sign-in", "#8f9fe8"],
              ["0", "admin rights or drivers needed", "#8f9fe8"],
            ].map(([num, cap, sw], i) => (
              <Reveal as="li" key={cap} delay={i * 0.09} className={styles.stat} style={{ "--sw": sw } as React.CSSProperties}>
                <b>{num}</b>
                <span>{cap}</span>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* 02 · The centrepiece: seven dials, one picture */}
      <section className={`${styles.section} ${styles.band}`} aria-labelledby="dials-title">
        <div className={styles.wrap}>
          <Head label="02 · The centrepiece" id="dials-title">
            Seven dials, <A>one picture</A>
          </Head>
          <p className={styles.lede}>
            Every control becomes one small piece of maths, and all seven are
            combined into a single change to the screen. Pick a preset, move any
            dial, then drag the divider.
          </p>
          <Reveal>
            <Lab />
          </Reveal>
        </div>
      </section>

      {/* 03 · The fight for your screen: pinned test screen, 0-25 s ruler */}
      <section className={styles.section} aria-labelledby="fight-title">
        <div className={styles.wrap}>
          <Head label="03 · The fight for your screen" id="fight-title">
            Sign in, and <A>Windows resets you</A>
          </Head>
          <p className={styles.lede}>
            The hard part wasn&apos;t changing the colours. It was keeping them
            after Windows quietly undoes them.
          </p>
          <Fight />
        </div>
      </section>

      {/* 04 · The hard parts, as lab notes */}
      <section className={`${styles.section} ${styles.band}`} aria-labelledby="hard-title">
        <div className={styles.wrap}>
          <Head label="04 · The hard parts" id="hard-title">
            Lab <A>notes</A>
          </Head>
          <p className={styles.lede}>
            A colour tool that breaks your screen is worse than no tool. These
            are the three things it could never get wrong.
          </p>
          <ul className={styles.notes}>
            {[
              ["Greys stay grey", "Boosting colour usually tints whites and greys too.", "The vibrancy control is built so black, grey and white never shift, however far you push it.", "Richer colour, clean whites."],
              ["Restore always works", "If a colour app crashes, you can be stuck with a strange screen.", "One shortcut, the tray menu or the main window puts the original colours back, and they’re restored even if the app crashes.", "You can always get back."],
              ["Startup never waits", "The window used to wait up to 10 seconds on a licence check.", "Startup no longer waits on the network, and if the first colour change fails, it tries again up to 5 times.", "Colours on as soon as you sign in."],
            ].map(([title, obs, fix, result], i) => (
              <Reveal as="li" key={title} delay={i * 0.12} className={styles.lnote}>
                <h3>{title}</h3>
                <dl>
                  <dt>Observation</dt>
                  <dd>{obs}</dd>
                  <dt>Fix</dt>
                  <dd>{fix}</dd>
                  <dt>Result</dt>
                  <dd className={styles.ok}>{result}</dd>
                </dl>
              </Reveal>
            ))}
          </ul>
          <Reveal className={styles.count}>
            <b>25 s</b>
            <span>the window after every sign-in, wake and display change that the app watches over.</span>
          </Reveal>
        </div>
      </section>

      {/* Mid-page call: the page's one full-bleed brand-green moment. */}
      <section className={styles.callBand} aria-labelledby="call-title">
        <div className={styles.wrap}>
          <Reveal>
            <h2 id="call-title">
              Want an app that
              <br />
              just keeps working?
            </h2>
            <p>Start with a 30-minute call about your idea.</p>
            <Link href="/#contact" className={styles.callBtn}>
              Book a Discovery Call
            </Link>
          </Reveal>
        </div>
      </section>

      {/* 05 · Judgement */}
      <section className={styles.section} aria-labelledby="judgement-title">
        <div className={styles.wrap}>
          <Head label="05 · Judgement" id="judgement-title">
            What we <A>left out</A>, on purpose
          </Head>
          <ul className={styles.cuts}>
            {[
              ["No overlay, no driver", "It uses the same built-in Windows feature as its own accessibility colour filters, so it needs no admin rights and installs nothing deep in the system."],
              ["One screen, done well", "No HDR, multiple monitors or ARM laptops in version one. The built-in screen had to be right first."],
              ["No health claims", "No “eye health”, no “calibrated”. It makes the screen look better, and says only that."],
            ].map(([title, why], i) => (
              <Reveal as="li" key={title} delay={i * 0.12} className={styles.cut}>
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
          <Reveal className={styles.result}>
            <div className={styles.big}>Live</div>
            <p className={styles.bigLine}>Our own Windows app, running today.</p>
          </Reveal>
          <ul className={styles.facts}>
            {[
              ["Live", "#8f9fe8", <>At{" "}<a className={styles.out} href="https://chromalayer.app" target="_blank" rel="noreferrer">chromalayer.app</a>.</>],
              ["Works on", "#8f9fe8", "Intel, AMD and NVIDIA graphics, tested on each."],
              ["Built in", "#8f9fe8", "A 14-day free trial and licensing."],
              ["Updates", "#8f9fe8", "Installs and updates through its own release channel."],
            ].map(([k, sw, body], i) => (
              <Reveal as="li" key={k as string} delay={i * 0.09} style={{ "--sw": sw } as React.CSSProperties}>
                <small>{k}</small>
                {body}
              </Reveal>
            ))}
          </ul>
          {showPlaceholders && (
            <Reveal className={styles.photo}>
              <div className={styles.ph} role="img" aria-label="Placeholder: real-hardware photo, the same laptop screen before and after">
                <span>
                  Real-hardware photo: the same laptop screen, before and after
                  <br />
                  (founder&apos;s phone, once taken)
                </span>
              </div>
            </Reveal>
          )}
        </div>
      </section>

      {/* Under the hood: open by default, same band as the result */}
      <section className={`${styles.section} ${styles.band} ${styles.hoodSection}`}>
        <div className={styles.wrap}>
          <details className={styles.hood} open>
            <summary>
              <div>
                <h2>Under the hood</h2>
                <p>How it&apos;s built, in plain words.</p>
              </div>
            </summary>
            <div className={styles.hoodBody}>
              <ol className={styles.stack}>
                <li><div><b>The tray app</b><br /><small>WPF</small></div><span>The window, the sliders and the presets.</span></li>
                <li><div><b>Settings and licensing</b><br /><small>Application layer</small></div><span>Saves your profile safely and runs the trial.</span></li>
                <li><div><b>The colour maths</b><br /><small>ColorEngine · one 5×5 matrix</small></div><span>Turns seven sliders into one change. No Windows code, so it&apos;s fully testable.</span></li>
                <li><div><b>The screen</b><br /><small>Windows Magnification API</small></div><span>Applies the change, watched by the watchdog and the sign-in and wake monitor.</span></li>
              </ol>
              <ul className={styles.side}>
                <li>Licence check · Cloudflare Workers</li>
                <li>Updates · GitHub Releases + Velopack</li>
              </ul>
              <ol className={styles.decis}>
                <li><b>One combined change per adjustment.</b> Seven controls never fight each other. <small>(single colour matrix)</small></li>
                <li><b>Colour maths kept apart from Windows.</b> It can be tested on its own, and moved to another platform later.</li>
                <li><b>Never block startup on the network.</b> Your colours don&apos;t wait for a server.</li>
                <li><b>Settings saved in one step.</b> A crash mid-save can&apos;t leave a half-written file. <small>(atomic write)</small></li>
              </ol>
            </div>
          </details>
        </div>
      </section>

      {/* 07 · Testimonial: placeholder, hidden on the live site until a
          real, approved quote exists (home-brief §0). */}
      {showPlaceholders && (
        <section className={styles.section} aria-labelledby="words-title">
          <div className={styles.wrap}>
            <Head label="07 · In their words" id="words-title">
              What <A>users</A> say
            </Head>
            <Reveal className={styles.panel}>
              <div className={`${styles.ph} ${styles.phPage}`} role="img" aria-label="Placeholder: user photo, once approved">
                <span>
                  User photo
                  <br />
                  (once approved)
                </span>
              </div>
              <figure className={styles.quote}>
                <span className={styles.mark} aria-hidden="true">
                  &ldquo;
                </span>
                <span className={styles.placeholder}>Placeholder · hidden on the live site until real</span>
                <blockquote>A short, approved quote from a ChromaLayer user goes here, in their own words.</blockquote>
                <figcaption>
                  Name Surname<span>Role</span>
                </figcaption>
              </figure>
            </Reveal>
          </div>
        </section>
      )}

      {/* 08 · Conclusion: the final reading, then the two calls */}
      <section className={`${styles.section} ${showPlaceholders ? styles.band : ""}`} aria-labelledby="conclusion-title">
        <div className={styles.wrap}>
          <Head label={`${showPlaceholders ? "08" : "07"} · Conclusion`} id="conclusion-title">
            Why a Windows app is on a <A>mobile studio&apos;s</A> site
          </Head>
          <Reveal className={styles.final}>
            <p className={styles.finalHead}>
              <span>Final reading</span>
              <span>ChromaLayer</span>
            </p>
            <ol className={styles.points}>
              {[
                ["i.", "Staying right is the hard part", "Here, Windows resets the colours. On phones, it’s the system closing your app or an update changing the rules. Same fight."],
                ["ii.", "We design for the real system", "The 25-second window comes from how Windows actually behaves after a sign-in, not from a guess."],
                ["iii.", "We ship updates safely", "Its own release channel, and a way back to the original screen that always works."],
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

      {/* Next project: wraps to the first case study */}
      <section className={`${styles.section} ${showPlaceholders ? "" : styles.band}`}>
        <div className={styles.wrap}>
          <Reveal>
            <Link className={styles.next} href={next ? `/work/${next.slug}` : "/#work"}>
              <div>
                <small className={styles.nextLabel}>Next project</small>
                <h2>
                  <span>Assess</span> Yourself
                </h2>
                <p>A government exam-prep app built in Flutter, with timed tests, live tests and subscriptions.</p>
                <span className={styles.go}>
                  View case study <Arrow />
                </span>
              </div>
              {next && "src" in next.hero && (
                <Image
                  className={styles.nextImg}
                  src={next.hero.src}
                  width={next.hero.width}
                  height={next.hero.height}
                  alt=""
                  sizes="(max-width: 860px) 90vw, 520px"
                />
              )}
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
