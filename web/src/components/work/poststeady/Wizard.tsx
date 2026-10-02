"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import styles from "./Poststeady.module.css";

// Facts: the Poststeady repo's own five-step wizard (app/reports/new/
// step-1..5, docs/01-product-truth.md §4), then the PDF or share link. Every screen is a placeholder until captured from
// a demo account with made-up clients.
const STEPS = [
  { n: "01", title: "Pick the client and the month", body: "Their logo and brand colour come along automatically.", shot: ["Setup step", "Client and reporting month"], img: "/work/poststeady/step1.webp" },
  { n: "02", title: "Upload the exports", body: "The files each platform already gives you, no social-account logins. Rows, dates and platform are checked as they land. Add last month's too, for a real comparison.", shot: ["Upload step", "File checks: rows, dates, platform"], img: "/work/poststeady/step2.webp" },
  { n: "03", title: "Confirm the matches", body: "Columns are pre-matched from 175 known names; you confirm or correct them.", shot: ["Column matching screen", "Pre-filled matches"], img: "/work/poststeady/step3.webp" },
  { n: "04", title: "Check the numbers", body: "Every imported number, by platform. Fix any value, or hide what this client doesn\u2019t need.", shot: ["Metrics review", "Numbers by platform"], img: "/work/poststeady/step4.webp" },
  { n: "05", title: "Edit the summary", body: "The AI drafts it from the real figures; you edit any line before it goes out.", shot: ["Review step", "AI summary, editable"], img: "/work/poststeady/r1.webp" },
  { n: "06", title: "Send it", body: "A branded three-page PDF, or a link the client opens in any browser, with no login.", shot: ["Finished report, page 1", "Branded, made-up client"], img: "/work/poststeady/r2.webp" },
];

// The browser frame stays pinned while the steps scroll past; the step
// crossing the upper half lights up and the frame's label follows it.
export function Wizard() {
  const [active, setActive] = useState(0);
  const listRef = useRef<HTMLOListElement | null>(null);

  useEffect(() => {
    let raf = 0;

    const update = () => {
      raf = 0;
      const list = listRef.current;
      if (!list) return;
      const r = list.getBoundingClientRect();
      const line = window.innerHeight * 0.5;
      const p = (line - r.top) / r.height;
      const idx = Math.min(STEPS.length - 1, Math.max(0, Math.floor(p * STEPS.length)));
      setActive(idx);
    };

    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);



  return (
    <div className={styles.wizard}>
      <div className={styles.pin}>
        <div className={styles.screenWrap}>
          <Image
            src={STEPS[active].img}
            alt={STEPS[active].shot.join(", ")}
            width={800}
            height={500}
            className={styles.screenImg}
            priority
          />
        </div>
      </div>
      <ol className={styles.steps} ref={listRef}>
        {STEPS.map((s, i) => (
          <li
            key={s.n}
            className={`${styles.step} ${i <= active ? styles.done : ""} ${i === active ? styles.on : ""}`}
            
          >
            <span className={styles.sn}>{s.n}</span>
            <div>
              <h3>{s.title}</h3>
              <p>{s.body}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
