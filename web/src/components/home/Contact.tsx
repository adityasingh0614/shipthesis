import { BookingCta } from "@/components/BookingCta";
import styles from "./Contact.module.css";

export function Contact() {
  return (
    <div className={styles.wrapper}>
      <section id="contact" className={styles.section} aria-labelledby="contact-title">
        <div className={styles.grid}>
          
          {/* Left Column: CTA & Timeline */}
          <div className={styles.leftCol}>
            <h2 className={styles.title}>Ready to ship your next product?</h2>
            <p className={styles.lede}>
              Book a free 20-minute call to get an honest technical assessment of your idea and a timeline for your first build.
            </p>

            <BookingCta location="final" variant="button" />

            <div className={styles.timeline}>
              <div className={styles.step}>
                <div className={styles.stepNum}>01</div>
                <span className={styles.stepText}>Tell us what you're building</span>
              </div>
              <div className={styles.step}>
                <div className={styles.stepNum}>02</div>
                <span className={styles.stepText}>Talk through the product</span>
              </div>
              <div className={styles.step}>
                <div className={styles.stepNum}>03</div>
                <span className={styles.stepText}>Decide the next step</span>
              </div>
            </div>
          </div>

          {/* Right Column: Partnership & Comms Card */}
          <div className={styles.card}>
            <h4 className={styles.cardTitle}>Founder Partnership &amp; Comms</h4>
            
            {/* TODO(owner): name and photo */}
            <div className={styles.founderBox}>
              <div className={styles.founderAvatar} aria-hidden="true">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
              </div>
              <div className={styles.founderInfo}>
                <span className={styles.founderName}>Aditya</span>
                <span className={styles.founderTagline}>You&apos;ll talk to Aditya, who builds it</span>
              </div>
            </div>

            <div className={styles.divider} />
            
            <ul className={styles.methods}>
              <li className={styles.method}>
                <span className={styles.methodIcon} aria-hidden="true">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" strokeLinecap="round">
                    <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                  </svg>
                </span>
                <div className={styles.methodContent}>
                  <span className={styles.methodLabel}>Direct Email</span>
                  <a href="mailto:hello@shipthesis.com" className={styles.methodValue}>
                    hello@shipthesis.com
                  </a>
                </div>
              </li>

              <li className={styles.method}>
                <span className={styles.methodIcon} aria-hidden="true">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                </span>
                <div className={styles.methodContent}>
                  <span className={styles.methodLabel}>Time Zone Alignment</span>
                  <span className={styles.methodValue}>Calls scheduled in your time zone</span>
                </div>
              </li>

              <li className={styles.method}>
                <span className={styles.methodIcon} aria-hidden="true">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                  </svg>
                </span>
                <div className={styles.methodContent}>
                  <span className={styles.methodLabel}>Sprint Communication</span>
                  <span className={styles.methodValue}>Private Slack Connect channel &amp; weekly video sync</span>
                </div>
              </li>

              <li className={styles.method}>
                <span className={styles.methodIcon} aria-hidden="true">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                </span>
                <div className={styles.methodContent}>
                  <span className={styles.methodLabel}>Code &amp; IP Ownership</span>
                  <span className={styles.methodValue}>Your GitHub, stores &amp; cloud accounts from day one</span>
                </div>
              </li>
            </ul>
          </div>

        </div>
      </section>
    </div>
  );
}
