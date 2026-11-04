"use client";

import { useEffect, useState } from "react";
import { BookingCta } from "@/components/BookingCta";
import styles from "./MobileStickyCta.module.css";

export function MobileStickyCta() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Reveal sticky CTA once the user has scrolled past the top hero section
      setVisible(window.scrollY > 320);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className={styles.bar}>
      <BookingCta location="sticky" variant="button" className={styles.btn} />
    </div>
  );
}
