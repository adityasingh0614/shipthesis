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
              AI-powered mobile apps and SaaS for founders: a new build on your phone every week, and code you own.
            </p>
            
            <div className={styles.socialRow}>
              {/* Twitter/X */}
              <a href="#" className={styles.socialIcon} aria-label="Twitter">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
              </a>
              {/* LinkedIn */}
              <a href="#" className={styles.socialIcon} aria-label="LinkedIn">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
              {/* Instagram */}
              <a href="#" className={styles.socialIcon} aria-label="Instagram">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
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
                <li><Link href="/services" className={styles.link}>Services</Link></li>
                <li><Link href="/#pricing" className={styles.link}>Pricing</Link></li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <p className={styles.colTitle}>Services</p>
              <ul className={styles.linkList}>
                <li><Link href="/services" className={styles.link}>Mobile Development</Link></li>
                <li><Link href="/services" className={styles.link}>SaaS Development</Link></li>
                <li><Link href="/services" className={styles.link}>UX / UI Design</Link></li>
                <li><Link href="/services" className={styles.link}>AI Integration</Link></li>
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
