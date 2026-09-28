"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import styles from "./FromTheBlog.module.css";

// Placeholders only (docs/design/home-brief.md §7): no posts yet.
// page.tsx keeps this section off the live site until a blog automation
// fills three real posts: title, excerpt, date, cover image, link.
const POSTS = [1, 2, 3];

export function FromTheBlog() {
  const reduceMotion = useReducedMotion();

  return (
    <section className={styles.section} aria-labelledby="blog-title">
      <div className={styles.inner}>
        <div className={styles.head}>
          <h2 id="blog-title" className={styles.title}>
            From the blog
          </h2>
          <p className={styles.lede}>
            Notes on building and shipping apps, from the projects we&apos;re
            working on right now.
          </p>
        </div>

        <ul className={styles.grid}>
          {POSTS.map((n, i) => (
            <motion.li
              key={n}
              className={styles.card}
              initial={reduceMotion ? false : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.5,
                delay: i * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <div className={styles.cover}>
                <span>Cover image</span>
              </div>
              <div className={styles.body}>
                <span className={styles.date}>Month DD, YYYY</span>
                <h3 className={styles.postTitle}>Post title placeholder</h3>
                <p className={styles.excerpt}>
                  A one or two line excerpt summarising the post goes here
                  once it&apos;s written.
                </p>
              </div>
            </motion.li>
          ))}
        </ul>

        <Link href="/blog" className={styles.link}>
          See all posts
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
        </Link>
      </div>
    </section>
  );
}
