/**
 * A section with its own scroll-driven behaviour (the Our work pinned
 * carousel) sets this while active, so ShrinkHeader's scroll-direction
 * hide/show doesn't react to that section's own back-and-forth scrolling —
 * flipping the nav in and out while you're just moving between cards reads
 * as broken, not responsive.
 *
 * Plain mutable ref, not a MotionValue: ShrinkHeader only needs to read the
 * current value inside its own scroll handler, never subscribe to changes.
 */
export const navHideLock = { current: false };
