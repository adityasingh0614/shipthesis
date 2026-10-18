"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import styles from "./SafetyTraining.module.css";

// Facts: docs/case-studies/ehs-training-platform-raw.md (reminder window
// time-zone-aware timing, host rename, portal join, one-step attendance, recording
// auto-restart with every segment kept, best file to R2, server-checked
// watch time).
const STEPS = [
  { tc: "Before", title: "Reminders go out", body: "Email and WhatsApp reminders land at the right time in each learner's time zone." },
  { tc: "T-0", title: "Admin clicks Start", body: "The Zoom meeting is ready, and it shows the trainer's name before they walk in." },
  { tc: "Join", title: "Learners join", body: "From the portal, in any browser. Their attendance starts counting the moment they click Join." },
  { tc: "Live", title: "Every minute counted", body: "Every join and leave is recorded in one step, so a duplicate notification from Zoom can never count twice." },
  { tc: "Pause", title: "Recording stops by accident", body: "It restarts on its own, and every segment of the class is kept, in order." },
  { tc: "After", title: "Class ends, video lands", body: "The best video file is copied into EHS Guru's own storage, published when the admin is ready, and watch time is checked on the server." },
];

// The sessions screen stays pinned while the cues scroll past; the cue
// crossing the upper half lights up and the class clock follows it.
export function GoLive() {
  const [active, setActive] = useState(0);
  const listRef = useRef<HTMLOListElement | null>(null);

  useEffect(() => {
    let raf = 0;

    const update = () => {
      raf = 0;
      const list = listRef.current;
      if (!list) return;

      const triggerLine = window.innerHeight * 0.45;
      const items = Array.from(list.children) as HTMLElement[];
      let closestIdx = 0;
      let minDistance = Infinity;

      items.forEach((item, i) => {
        const rect = item.getBoundingClientRect();
        const itemCenter = rect.top + rect.height * 0.5;
        const distance = Math.abs(itemCenter - triggerLine);
        if (distance < minDistance) {
          minDistance = distance;
          closestIdx = i;
        }
      });

      setActive(closestIdx);
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

  const handleStepClick = (idx: number) => {
    const list = listRef.current;
    if (!list) return;
    const item = list.children[idx] as HTMLElement;
    if (item) {
      item.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <div className={styles.golive}>
      <div className={styles.pin}>
        <Image
          src="/work/safety-training-platform/sessions.webp"
          width={1400}
          height={824}
          alt="Admin training sessions list"
          sizes="100vw"
        />
        <p className={styles.clock} aria-hidden="true">
          Class clock <b>{STEPS[active].tc.toUpperCase()}</b>
        </p>
      </div>
      <ol className={styles.cues} ref={listRef}>
        {STEPS.map((s, i) => (
          <li
            key={s.tc}
            onClick={() => handleStepClick(i)}
            className={`${styles.step} ${i <= active ? styles.done : ""} ${i === active ? styles.on : ""}`}
            tabIndex={0}
            role="button"
            aria-current={i === active ? "step" : undefined}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                handleStepClick(i);
              }
            }}
          >
            <span className={styles.tc}>{s.tc}</span>
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
