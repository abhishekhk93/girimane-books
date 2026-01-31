import Link from "next/link";
import styles from "./Pagination.module.css";
import { PaginationProps } from "./Pagination.types";

export function Pagination({ currentPage, totalPages, baseUrl }: PaginationProps) {
    if (totalPages <= 1) return null;

    const getPageUrl = (page: number) => {
        return page === 1 ? baseUrl : `${baseUrl}?page=${page}`;
    };

    // Generate page numbers to display
    const getPageNumbers = () => {
        const pages: (number | "...")[] = [];
        const maxVisible = 5;

        if (totalPages <= maxVisible + 2) {
            // Show all pages if total is small
            for (let i = 1; i <= totalPages; i++) {
                pages.push(i);
            }
        } else {
            // Always show first page
            pages.push(1);

            if (currentPage > 3) {
                pages.push("...");
            }

            // Show pages around current
            const start = Math.max(2, currentPage - 1);
            const end = Math.min(totalPages - 1, currentPage + 1);

            for (let i = start; i <= end; i++) {
                pages.push(i);
            }

            if (currentPage < totalPages - 2) {
                pages.push("...");
            }

            // Always show last page
            pages.push(totalPages);
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
                    ← Previous
                </Link>
            ) : (
                <span className={`${styles.navButton} ${styles.disabled}`}>
                    ← Previous
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
                    Next →
                </Link>
            ) : (
                <span className={`${styles.navButton} ${styles.disabled}`}>
                    Next →
                </span>
            )}
        </nav>
    );
}
