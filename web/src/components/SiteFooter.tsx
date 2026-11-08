import Link from "next/link";
import styles from "./SiteFooter.module.css";

export function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <div className={styles.box}>
        <div className={styles.topGrid}>
          {/* Brand Col (Spans 2) */}
          <div className={styles.brandCol}>
            <div className={styles.brandHeader}>
              <div className={styles.logoBox}>
                <img src="/logo/logo-light.svg" alt="Ship Thesis" width={143} height={40} />
              </div>
            </div>
            <p className={styles.brandDesc}>
              Mobile apps and SaaS for early-stage founders: a new build on your phone every week, and code you own.
            </p>
            <div className={styles.socialRow}>
              <a
                href="https://github.com/adityasingh0614"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialIcon}
                aria-label="GitHub"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/company/shipthesis"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialIcon}
                aria-label="LinkedIn"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9h2.77v8.37H6.46v-8.37M7.84 6.82a1.62 1.62 0 1 0 0 3.24 1.62 1.62 0 0 0 0-3.24z" />
                </svg>
              </a>
              <a
                href="https://x.com/shipthesis"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialIcon}
                aria-label="X (Twitter)"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Links Grid (Spans 3, contains 3 cols) */}
          <div className={styles.linksContainer}>
            {/* Product */}
            <div>
              <p className={styles.colTitle}>Product</p>
              <ul className={styles.linkList}>
                <li><Link href="/" className={styles.link}>Home</Link></li>
                <li><Link href="/#work" className={styles.link}>Case Studies</Link></li>
                <li><Link href="/#services" className={styles.link}>Services Overview</Link></li>
                <li><Link href="/#process" className={styles.link}>How It Works</Link></li>
                <li><Link href="/#contact" className={styles.link}>Contact Us</Link></li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <p className={styles.colTitle}>Services</p>
              <ul className={styles.linkList}>
                <li><Link href="/mvp-development" className={styles.link}>MVP Development</Link></li>
                <li><Link href="/flutter-app-development" className={styles.link}>Flutter Development</Link></li>
                <li><Link href="/saas-development" className={styles.link}>SaaS Development</Link></li>
                <li><Link href="/ai-product-development" className={styles.link}>AI Product Development</Link></li>
                <li><Link href="/#services" className={styles.link}>UX / UI Design</Link></li>
                <li><Link href="/#services" className={styles.link}>App Maintenance</Link></li>
                <li><Link href="/saas-development" className={styles.link}>Backend Development</Link></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <p className={styles.colTitle}>Contact Info</p>
              <ul className={styles.linkList}>
                <li>
                  <a href="mailto:info@shipthesis.com" className={styles.link}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
                    info@shipthesis.com
                  </a>
                </li>
                <li>
                  <div className={styles.link}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                    Working remotely worldwide
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className={styles.bottomRow}>
          <p className={styles.copyright}>
            &copy; {new Date().getFullYear()} Ship Thesis . All rights reserved.
          </p>
          <div className={styles.legalLinks}>
            <Link href="/terms" className={styles.legalLink}>Terms</Link>
            <Link href="/privacy" className={styles.legalLink}>Privacy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
