import Image from "next/image";
import Link from "next/link";
import styles from "./BookCard.module.css";
import { BookCardProps } from "./BookCard.types";

export function BookCard({ book }: BookCardProps) {
  const hasOffer = book.offers && book.offers.length > 0;
  const activeOffer = hasOffer ? book.offers[0] : null;
  const displayPrice = activeOffer
    ? activeOffer.offerPrice.valueAfterDiscount
    : book.price.value;
  const originalPrice = book.price.value;

  return (
    <Link href={`/books/${book.bookId}`} className={styles.root}>
      <div className={styles.imageWrapper}>
        {book.label && <span className={styles.badge}>{book.label}</span>}
        {hasOffer && (
          <span className={styles.discount}>
            {activeOffer?.offerPrice.discountValue}% OFF
          </span>
        )}
        <Image
          src={book.primaryImageUrl}
          alt={book.title}
          fill
          className={styles.image}
          sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
        />
      </div>

      <div className={styles.content}>
        <h3 className={styles.title}>{book.title}</h3>
        <p className={styles.description}>{book.shortDescription}</p>

        <div className={styles.meta}>
          <div className={styles.rating}>
            <span className={styles.star}>★</span>
            <span className={styles.ratingValue}>
              {book.reviews.avgRatingReceived.toFixed(1)}
            </span>
            <span className={styles.reviewCount}>
              ({book.reviews.totalNumberOfReviews})
            </span>
          </div>
        </div>

        <div className={styles.priceRow}>
          <span className={styles.price}>
            ₹{displayPrice.toLocaleString()}
          </span>
          {hasOffer && (
            <span className={styles.originalPrice}>
              ₹{originalPrice.toLocaleString()}
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}
