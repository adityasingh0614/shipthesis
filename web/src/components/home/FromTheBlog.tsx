"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { getAllPosts } from "@/lib/blog-data";
import styles from "./FromTheBlog.module.css";

export function FromTheBlog() {
  const reduceMotion = useReducedMotion();
  // Exactly three boxes, latest three blog posts on the home page
  const posts = getAllPosts().slice(0, 3);

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
          {posts.map((post, i) => {
            const formattedDate = new Date(post.datePublished).toLocaleDateString(
              "en-US",
              { month: "short", day: "numeric", year: "numeric" }
            );

            return (
              <motion.li
                key={post.slug}
                className={styles.card}
                initial={reduceMotion ? false : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "150px 0px" }}
                transition={{
                  duration: 0.4,
                  delay: i * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <Link href={`/blog/${post.slug}`} className={styles.cardLink}>
                  <div className={styles.cover}>
                    <Image
                      src={post.heroImage}
                      alt={post.title}
                      className={styles.coverImage}
                      width={1200}
                      height={675}
                      priority={i === 0}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 380px"
                    />
                  </div>
                  <div className={styles.body}>
                    <span className={styles.date}>{formattedDate}</span>
                    <h3 className={styles.postTitle}>{post.title}</h3>
                    <p className={styles.excerpt}>{post.description}</p>
                  </div>
                </Link>
              </motion.li>
            );
          })}
        </ul>

        <Link href="/blog" className={styles.link}>
          See all posts
          <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true">
            <path
              d="M3.75 9h10.5M9.75 4.5l4.5 4.5-4.5 4.5"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>
      </div>
    </section>
  );
}
