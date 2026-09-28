import styles from "./page.module.css";

// No posts yet; a blog automation fills this later (docs/design/home-brief.md §7).
export default function Blog() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <h1 className={styles.title}>From the blog</h1>
        <p className={styles.lede}>
          We&apos;re not publishing yet. Check back soon for notes on
          building and shipping apps.
        </p>
      </div>
    </section>
  );
}
