"use client";

import { useEffect } from "react";
import { getCalApi } from "@calcom/embed-react";
import { siWhatsapp } from "simple-icons";
import styles from "./Contact.module.css";

export function Contact() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({});
      cal("ui", {
        theme: "light",
        styles: { branding: { brandColor: "#0a7f55" } },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, []);

  return (
    <div className={styles.wrapper}>
      <section id="contact" className={styles.section} aria-labelledby="contact-title">
        
        {/* Top Header */}
        <div className={styles.header}>
          <h2 id="contact-title" className={styles.headerTitle}>Contact Us</h2>
          <p className={styles.headerSub}>Bring your idea as it is. We'll tell you honestly if we're the right fit.</p>
        </div>

        <div className={styles.grid}>
          
          {/* Left Column: CTA & Timeline */}
          <div className={styles.leftCol}>
            <h3 className={styles.title}>Ready to ship your next product?</h3>
            <p className={styles.lede}>
              Book a discovery call to get an honest technical assessment of your idea and a timeline for your first build.
            </p>

            <button data-cal-link="shipthesis/discovery" data-cal-config='{"layout":"month_view"}' className={styles.buttonPrimary}>
              <span>Book a Discovery Call</span>
            </button>

            <div className={styles.timeline}>
              <div className={styles.step}>
                <div className={styles.stepNum}>01</div>
                <span className={styles.stepText}>Pitch your product idea</span>
              </div>
              <div className={styles.step}>
                <div className={styles.stepNum}>02</div>
                <span className={styles.stepText}>Map the architecture &amp; timeline</span>
              </div>
              <div className={styles.step}>
                <div className={styles.stepNum}>03</div>
                <span className={styles.stepText}>Start your first weekly build</span>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Methods Card */}
          <div className={styles.card}>
            <h4 className={styles.cardTitle}>Direct Channels</h4>
            <div className={styles.divider} />
            
            <ul className={styles.methods}>
              <li className={styles.method}>
                <span className={styles.methodIcon} aria-hidden="true">
                  <svg width="20" height="20" viewBox="0 0 24 24">
                    <path d={siWhatsapp.path} fill={"#${siWhatsapp.hex}"} />
                  </svg>
                </span>
                <div className={styles.methodContent}>
                  <span className={styles.methodLabel}>WhatsApp</span>
                  <a
                    href="https://wa.me/918816955217"
                    className={styles.methodValue}
                    target="_blank"
                    rel="noreferrer"
                  >
                    +91 88169 55217
                  </a>
                </div>
              </li>

              <li className={styles.method}>
                <span className={styles.methodIcon} aria-hidden="true">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="14" height="20" x="5" y="2" rx="2" ry="2"></rect>
                    <path d="M12 18h.01"></path>
                  </svg>
                </span>
                <div className={styles.methodContent}>
                  <span className={styles.methodLabel}>Phone</span>
                  <a href="tel:+918816955217" className={styles.methodValue}>
                    +91 88169 55217
                  </a>
                </div>
              </li>

              <li className={styles.method}>
                <span className={styles.methodIcon} aria-hidden="true">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" strokeLinecap="round">
                    <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                  </svg>
                </span>
                <div className={styles.methodContent}>
                  <span className={styles.methodLabel}>Email</span>
                  <a href="mailto:hello@shipthesis.com" className={styles.methodValue}>
                    hello@shipthesis.com
                  </a>
                </div>
              </li>

              <li className={styles.method}>
                <span className={styles.methodIcon} aria-hidden="true">
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
                <div className={styles.methodContent}>
                  <span className={styles.methodLabel}>Location</span>
                  <span className={styles.methodValue}>Working remotely worldwide</span>
                </div>
              </li>
            </ul>
          </div>

        </div>
      </section>
    </div>
  );
}
