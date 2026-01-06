import { BookCard } from "../BookCard/BookCard";
import styles from "./BookGrid.module.css";

type Book = {
  id: string;
  title: string;
  author: string;
  price: number;
  imageUrl: string;
  href: string;
  badge?: string;
};

type BookGridProps = {
  books: Book[];
  title?: string;
  description?: string;
};

export function BookGrid({ books, title, description }: BookGridProps) {
  return (
    <section className={styles.root}>
      {(title || description) && (
        <div className={styles.header}>
          {title && <h1 className={styles.title}>{title}</h1>}
          {description && <p className={styles.description}>{description}</p>}
        </div>
      )}

      {books.length > 0 ? (
        <div className={styles.grid}>
          {books.map((book) => (
            <BookCard key={book.id} {...book} />
          ))}
        </div>
      ) : (
        <div className={styles.empty}>
          <p className={styles.emptyText}>No books found</p>
        </div>
      )}
    </section>
  );
}


