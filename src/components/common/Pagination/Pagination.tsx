import Link from "next/link";
import styles from "./Pagination.module.css";
import { PaginationProps } from "./Pagination.types";

export function Pagination({ currentPage, totalPages, baseUrl }: PaginationProps) {
    if (totalPages <= 1) return null;

    const getPageUrl = (page: number) => {
        return page === 1 ? baseUrl : `${baseUrl}?page=${page}`;
    };

    // Generate page numbers to display - Strictly previous, current, next
    const getPageNumbers = () => {
        const pages: (number | "...")[] = [];

        // Calculate the range of numbers to show
        const range: number[] = [];
        if (currentPage > 1) range.push(currentPage - 1);
        range.push(currentPage);
        if (currentPage < totalPages) range.push(currentPage + 1);

        // Add start ellipsis if needed
        if (range[0] > 1) {
            pages.push("...");
        }

        // Add the range
        pages.push(...range);

        // Add end ellipsis if needed
        if (range[range.length - 1] < totalPages) {
            pages.push("...");
        }

        return pages;
    };

    const pageNumbers = getPageNumbers();

    return (
        <nav className={styles.pagination} aria-label="Pagination">
            {/* Previous Button */}
            {currentPage > 1 ? (
                <Link
                    href={getPageUrl(currentPage - 1)}
                    className={styles.navButton}
                    aria-label="Previous page"
                >
                    <span className={styles.icon}>←</span>
                    <span className={styles.text}>Previous</span>
                </Link>
            ) : (
                <span className={`${styles.navButton} ${styles.disabled}`}>
                    <span className={styles.icon}>←</span>
                    <span className={styles.text}>Previous</span>
                </span>
            )}

            {/* Page Numbers */}
            <div className={styles.pages}>
                {pageNumbers.map((page, index) =>
                    page === "..." ? (
                        <span key={`ellipsis-${index}`} className={styles.ellipsis}>
                            ...
                        </span>
                    ) : (
                        <Link
                            key={page}
                            href={getPageUrl(page)}
                            className={`${styles.pageLink} ${page === currentPage ? styles.active : ""
                                }`}
                            aria-current={page === currentPage ? "page" : undefined}
                        >
                            {page}
                        </Link>
                    )
                )}
            </div>

            {/* Next Button */}
            {currentPage < totalPages ? (
                <Link
                    href={getPageUrl(currentPage + 1)}
                    className={styles.navButton}
                    aria-label="Next page"
                >
                    <span className={styles.text}>Next</span>
                    <span className={styles.icon}>→</span>
                </Link>
            ) : (
                <span className={`${styles.navButton} ${styles.disabled}`}>
                    <span className={styles.text}>Next</span>
                    <span className={styles.icon}>→</span>
                </span>
            )}
        </nav>
    );
}
