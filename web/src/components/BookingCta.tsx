"use client";

import type { ReactNode } from "react";
import {
  getBookingUrl,
  getCalLinkSlug,
  trackBookingClick,
  type BookingLocation,
} from "@/lib/booking";
import styles from "./BookingCta.module.css";

interface BookingCtaProps {
  location: BookingLocation;
  variant?: "button" | "text";
  className?: string;
  prefix?: string;
  children?: ReactNode;
  showArrow?: boolean;
}

export function BookingCta({
  location,
  variant = "button",
  className = "",
  prefix,
  children,
  showArrow = true,
}: BookingCtaProps) {
  const url = getBookingUrl(location);
  const calLink = getCalLinkSlug();

  const handleClick = () => {
    trackBookingClick(location);
  };

  const ctaText = children || "Book a free 20-minute call";

  if (variant === "text") {
    return (
      <span className={className}>
        {prefix && <span className={styles.prefix}>{prefix} </span>}
        <a
          href={url}
          onClick={handleClick}
          data-cal-link={calLink}
          data-cal-config={`{"layout":"month_view","location":"${location}"}`}
          className={styles.textLink}
        >
          {ctaText}
          {showArrow && (
            <svg width="15" height="15" viewBox="0 0 18 18" aria-hidden="true">
              <path
                d="M3 9h11m-4-4 4 4-4 4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </a>
      </span>
    );
  }

  return (
    <a
      href={url}
      onClick={handleClick}
      data-cal-link={calLink}
      data-cal-config={`{"layout":"month_view","location":"${location}"}`}
      className={`btn ${className}`}
    >
      {ctaText}
      {showArrow && (
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
      )}
    </a>
  );
}
