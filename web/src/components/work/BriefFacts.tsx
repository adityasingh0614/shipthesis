import { getCaseStudy } from "@/content/case-studies";
import styles from "./BriefFacts.module.css";

// The facts the hero leaves out (Industry, Service), set once under the
// brief's heading so they still sit one scroll from the top.
export function BriefFacts({ slug }: { slug: string }) {
  const more = getCaseStudy(slug)?.card.more;
  if (!more) return null;
  return (
    <dl className={styles.facts}>
      {more.map(([k, v]) => (
        <div key={k}>
          <dt>{k}</dt>
          <dd>{v}</dd>
        </div>
      ))}
    </dl>
  );
}
