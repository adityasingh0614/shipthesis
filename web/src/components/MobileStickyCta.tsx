"use client";

import { BookingCta } from "@/components/BookingCta";
import styles from "./MobileStickyCta.module.css";

export function MobileStickyCta() {
  return (
    <div className={styles.bar}>
      <BookingCta location="sticky" variant="button" className={styles.btn} />
    </div>
  );
}
