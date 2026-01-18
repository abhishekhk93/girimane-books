import Link from "next/link";
import styles from "./EventBanner.module.css";
import { EventBannerProps } from "./EventBanner.types";

export function EventBanner({
  title,
  subtitle,
  ctaLabel,
  href,
  badge = "Limited period offer",
}: EventBannerProps) {
  return (
    <section className={styles.root} aria-label="Current offers">
      <div className={styles.content}>
        {badge && <span className={styles.badge}>{badge}</span>}

        <h2 className={styles.title}>{title}</h2>
        <p className={styles.subtitle}>{subtitle}</p>

        <div className={styles.actions}>
          <Link href={href} className={styles.cta}>
            <span>{ctaLabel}</span>
            <span aria-hidden="true">↗</span>
          </Link>
          <span className={styles.hint}>
            Tap to explore curated titles and special bundles.
          </span>
        </div>
      </div>
    </section>
  );
}

