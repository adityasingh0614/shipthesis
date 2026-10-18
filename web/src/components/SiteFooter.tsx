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
          </div>

          {/* Links Grid (Spans 3, contains 3 cols) */}
          <div className={styles.linksContainer}>
            {/* Product */}
            <div>
              <p className={styles.colTitle}>Product</p>
              <ul className={styles.linkList}>
                <li><Link href="/" className={styles.link}>Home</Link></li>
                <li><Link href="/#work" className={styles.link}>Case Studies</Link></li>
                <li><Link href="/#services" className={styles.link}>Services</Link></li>
                <li><Link href="/#process" className={styles.link}>How It Works</Link></li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <p className={styles.colTitle}>Services</p>
              <ul className={styles.linkList}>
                <li><Link href="/#services" className={styles.link}>Mobile Development</Link></li>
                <li><Link href="/#services" className={styles.link}>SaaS Development</Link></li>
                <li><Link href="/#services" className={styles.link}>UX / UI Design</Link></li>
                <li><Link href="/#services" className={styles.link}>AI Integration</Link></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <p className={styles.colTitle}>Contact Info</p>
              <ul className={styles.linkList}>
                <li>
                  <a href="mailto:hello@shipthesis.com" className={styles.link}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
                    hello@shipthesis.com
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
            &copy; {new Date().getFullYear()} Ship Thesis. All rights reserved.
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
