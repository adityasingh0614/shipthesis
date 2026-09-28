import { siWhatsapp } from "simple-icons";
import styles from "./Contact.module.css";

// Facts: .agents/product-marketing.md (Booking & Location). No Cal.com
// embed yet (needs the founder's Cal.com link); email and WhatsApp are the
// working channels until that's wired in. Home's closing section: every
// "Book a Discovery Call" on the site links to #contact, so this stays a
// single card, not a repeat of the pitch already told earlier on the page.
export function Contact() {
  return (
    <section
      id="contact"
      className={styles.section}
      aria-labelledby="contact-title"
    >
      <div className={styles.inner}>
        <div className={styles.head}>
          <h2 id="contact-title" className={styles.title}>
            Get in touch
          </h2>
          <p className={styles.lede}>
            Bring your idea as it is. We&apos;ll tell you honestly if
            we&apos;re the right fit.
          </p>
        </div>

        <ul className={styles.methods}>
          <li className={styles.method}>
            <span className={styles.icon} aria-hidden="true">
              <svg width="20" height="20" viewBox="0 0 20 20">
                <path
                  d="M3 5.5h14v9H3z"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinejoin="round"
                />
                <path
                  d="m3.5 6 6.5 5 6.5-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <span>
              <span className={styles.methodLabel}>Email</span>
              <a href="mailto:hello@shipthesis.com" className={styles.methodValue}>
                hello@shipthesis.com
              </a>
            </span>
          </li>

          <li className={styles.method}>
            <span className={styles.icon} aria-hidden="true">
              <svg width="20" height="20" viewBox="0 0 24 24">
                <path d={siWhatsapp.path} fill={`#${siWhatsapp.hex}`} />
              </svg>
            </span>
            <span>
              <span className={styles.methodLabel}>WhatsApp</span>
              <a
                href="https://wa.me/918816955217"
                className={styles.methodValue}
                target="_blank"
                rel="noreferrer"
              >
                +91 88169 55217
              </a>
            </span>
          </li>

          <li className={styles.method}>
            <span className={styles.icon} aria-hidden="true">
              <svg width="20" height="20" viewBox="0 0 20 20">
                <path
                  d="M10 18s6-5.1 6-9.6A6 6 0 0 0 4 8.4C4 12.9 10 18 10 18Z"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinejoin="round"
                />
                <circle
                  cx="10"
                  cy="8.4"
                  r="2.1"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                />
              </svg>
            </span>
            <span>
              <span className={styles.methodLabel}>Location</span>
              <span className={styles.methodValue}>Remote only</span>
            </span>
          </li>
        </ul>

        <a href="mailto:hello@shipthesis.com" className="btn">
          Email us
        </a>
      </div>
    </section>
  );
}
