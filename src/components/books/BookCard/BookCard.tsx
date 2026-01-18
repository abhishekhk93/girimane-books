import Image from "next/image";
import Link from "next/link";
import styles from "./BookCard.module.css";
import { BookCardProps } from "./BookCard.types";

export function BookCard({
  id,
  title,
  author,
  price,
  imageUrl,
  href,
  badge,
}: BookCardProps) {
  return (
    <Link href={href} className={styles.root}>
      <div className={styles.imageWrapper}>
        {badge && <span className={styles.badge}>{badge}</span>}
        <Image
          src={imageUrl}
          alt={title}
          fill
          className={styles.image}
          sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
        />
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.author}>{author}</p>
        <p className={styles.price}>₹{price.toLocaleString()}</p>
      </div>
    </Link>
  );
}


