import Image from "next/image";
import styles from "./AuthorHero.module.css";
import { AuthorHeroProps } from "./AuthorHero.types";

export function AuthorHero({
  name,
  tagline,
  description,
  imgSrc,
}: AuthorHeroProps) {
  return (
    <section className={styles.root} aria-labelledby="author-hero-heading">
      <div className={styles.imageWrapper}>
        <Image
          src={imgSrc}
          alt={name}
          width={896}
          height={1152}
          priority
          className={styles.image}
          sizes="(max-width: 768px) 80vw, 320px"
        />
      </div>

      <div className={styles.content}>
        <p className={styles.eyebrow}>{tagline}</p>
        <h1 id="author-hero-heading" className={styles.title}>
          {name}
        </h1>
        <p className={styles.description}>{description}</p>
      </div>
    </section>
  );
}

