import { BookCard } from "../BookCard/BookCard";
import { Pagination } from "@/components/common/Pagination/Pagination";
import styles from "./BookGrid.module.css";
import { BookGridProps } from "./BookGrid.types";

export function BookGrid({ books, title, description, currentPage, totalPages }: BookGridProps) {
  const showPagination = currentPage !== undefined && totalPages !== undefined && totalPages > 1;

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
            <BookCard key={book.bookId} book={book} />
          ))}
        </div>
      ) : (
        <div className={styles.empty}>
          <p className={styles.emptyText}>No books found</p>
        </div>
      )}

      {showPagination && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          baseUrl="/books"
        />
      )}
    </section>
  );
}
