import Image from "next/image";
import styles from "./BookDetail.module.css";

type Book = {
  id: string;
  title: string;
  author: string;
  price: number;
  imageUrl: string;
  href: string;
  badge?: string;
  description?: string;
  isbn?: string;
  pages?: number;
  language?: string;
  publishedYear?: number;
};

type BookDetailProps = {
  book: Book;
};

export function BookDetail({ book }: BookDetailProps) {
  return (
    <section className={styles.root}>
      <div className={styles.content}>
        <div className={styles.imageSection}>
          <div className={styles.imageWrapper}>
            {book.badge && <span className={styles.badge}>{book.badge}</span>}
            <Image
              src={book.imageUrl}
              alt={book.title}
              fill
              className={styles.image}
              sizes="(max-width: 768px) 100vw, 400px"
              priority
            />
          </div>
        </div>

        <div className={styles.detailsSection}>
          <div className={styles.header}>
            <h1 className={styles.title}>{book.title}</h1>
            <p className={styles.author}>By {book.author}</p>
          </div>

          <div className={styles.priceSection}>
            <span className={styles.price}>₹{book.price.toLocaleString()}</span>
          </div>

          {book.description && (
            <div className={styles.descriptionSection}>
              <h2 className={styles.sectionTitle}>Description</h2>
              <p className={styles.description}>{book.description}</p>
            </div>
          )}

          <div className={styles.metaSection}>
            <h2 className={styles.sectionTitle}>Book Details</h2>
            <dl className={styles.metaList}>
              {book.isbn && (
                <>
                  <dt className={styles.metaLabel}>ISBN</dt>
                  <dd className={styles.metaValue}>{book.isbn}</dd>
                </>
              )}
              {book.pages && (
                <>
                  <dt className={styles.metaLabel}>Pages</dt>
                  <dd className={styles.metaValue}>{book.pages}</dd>
                </>
              )}
              {book.language && (
                <>
                  <dt className={styles.metaLabel}>Language</dt>
                  <dd className={styles.metaValue}>{book.language}</dd>
                </>
              )}
              {book.publishedYear && (
                <>
                  <dt className={styles.metaLabel}>Published</dt>
                  <dd className={styles.metaValue}>{book.publishedYear}</dd>
                </>
              )}
            </dl>
          </div>

          <div className={styles.actions}>
            <button className={styles.buyButton}>Add to Cart</button>
            <button className={styles.wishlistButton}>Add to Wishlist</button>
          </div>
        </div>
      </div>
    </section>
  );
}