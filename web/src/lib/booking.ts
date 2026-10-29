/**
 * Central booking URL and click-tracking helper for Ship Thesis.
 * Reads target booking calendar from NEXT_PUBLIC_BOOKING_URL.
 */

export const DEFAULT_BOOKING_URL = "https://cal.com/aditya-kumar-singh/20min";
export const DEFAULT_CAL_LINK_SLUG = "aditya-kumar-singh/20min";

export type BookingLocation =
  | "header"
  | "hero"
  | "process"
  | "final"
  | "sticky"
  | "case-study-top"
  | "case-study-mid"
  | "case-study-end"
  | "services"
  | "faq";

export function getCalLinkSlug(): string {
  const raw = process.env.NEXT_PUBLIC_BOOKING_URL || DEFAULT_BOOKING_URL;
  try {
    const url = new URL(raw);
    return url.pathname.replace(/^\/+/, "");
  } catch {
    return DEFAULT_CAL_LINK_SLUG;
  }
}

export function getBookingUrl(location?: BookingLocation | string): string {
  const baseUrl = process.env.NEXT_PUBLIC_BOOKING_URL || DEFAULT_BOOKING_URL;

  if (!location) return baseUrl;

  try {
    const url = new URL(baseUrl);
    url.searchParams.set("location", location);
    return url.toString();
  } catch {
    const separator = baseUrl.includes("?") ? "&" : "?";
    return `${baseUrl}${separator}location=${encodeURIComponent(location)}`;
  }
}

export function trackBookingClick(location: BookingLocation | string) {
  if (typeof window === "undefined") return;

  // Custom event for telemetry
  window.dispatchEvent(
    new CustomEvent("booking_cta_click", {
      detail: { location, timestamp: Date.now() },
    })
  );

  // DataLayer hook if GTM / GA4 is installed
  const win = window as Window & { dataLayer?: Record<string, unknown>[] };
  if (Array.isArray(win.dataLayer)) {
    win.dataLayer.push({
      event: "booking_cta_click",
      booking_location: location,
    });
  }
}
