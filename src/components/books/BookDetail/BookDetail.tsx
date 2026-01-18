import Image from "next/image";
import styles from "./BookDetail.module.css";
import { BookDetailProps } from "./BookDetail.types";

export function BookDetail({ book }: BookDetailProps) {
  const primaryImage = book.images.find((img) => img.isPrimary) || book.images[0];
  const hasOffer = book.offers && book.offers.length > 0;
  const activeOffer = hasOffer ? book.offers[0] : null;
  const displayPrice = activeOffer
    ? activeOffer.offerPrice.valueAfterDiscount
    : book.price.value;

  // Get author from additional attributes
  const authorAttr = book.additional_attributes.find(
    (attr) => attr.attributeName === "Author"
  );
  const author = authorAttr ? String(authorAttr.attributeValue) : "";

  // Filter displayable attributes
  const displayAttributes = book.additional_attributes.filter(
    (attr) => attr.isDisplayAttribute
  );

  return (
    <section className={styles.root}>
      {/* Breadcrumb */}
      <nav className={styles.breadcrumb}>
        {book.categories.map((cat, index) => (
          <span key={cat.name}>
            {index > 0 && <span className={styles.breadcrumbSep}>/</span>}
            <span className={styles.breadcrumbItem}>{cat.displayName}</span>
          </span>
        ))}
        <span className={styles.breadcrumbSep}>/</span>
        <span className={styles.breadcrumbCurrent}>{book.title}</span>
      </nav>

      <div className={styles.content}>
        <div className={styles.imageSection}>
          <div className={styles.imageWrapper}>
            {book.label && <span className={styles.badge}>{book.label}</span>}
            {hasOffer && (
              <span className={styles.discount}>
                {activeOffer?.offerPrice.discountType === "percentage"
                  ? `${activeOffer.offerPrice.discountValue}% OFF`
                  : `₹${activeOffer?.offerPrice.discountAmount} OFF`}
              </span>
            )}
            <Image
              src={primaryImage?.url || "/images/placeholder.jpg"}
              alt={book.title}
              fill
              className={styles.image}
              sizes="(max-width: 768px) 100vw, 400px"
              priority
            />
          </div>
          {book.images.length > 1 && (
            <div className={styles.thumbnails}>
              {book.images.map((img, index) => (
                <div
                  key={index}
                  className={`${styles.thumbnail} ${img.isPrimary ? styles.thumbnailActive : ""}`}
                >
                  <Image
                    src={img.url}
                    alt={`${book.title} - ${index + 1}`}
                    fill
                    className={styles.thumbnailImage}
                  />
                </div>
              ))}
            </div>
          )}
        </div>

        <div className={styles.detailsSection}>
          <div className={styles.header}>
            <h1 className={styles.title}>{book.title}</h1>
            {author && <p className={styles.author}>By {author}</p>}
          </div>

          {/* Rating */}
          <div className={styles.ratingSection}>
            <div className={styles.rating}>
              <span className={styles.star}>★</span>
              <span className={styles.ratingValue}>
                {book.reviews.avgRatingReceived.toFixed(1)}
              </span>
              <span className={styles.ratingMax}>/ {book.reviews.maxRating}</span>
            </div>
            <span className={styles.reviewCount}>
              {book.reviews.totalNumberOfReviews} reviews
            </span>
          </div>

          {/* Price */}
          <div className={styles.priceSection}>
            <span className={styles.price}>
              ₹{displayPrice.toLocaleString()}
            </span>
            {hasOffer && (
              <>
                <span className={styles.originalPrice}>
                  ₹{book.price.value.toLocaleString()}
                </span>
                <span className={styles.offerBadge}>
                  {activeOffer?.title}
                </span>
              </>
            )}
          </div>

          {/* Offers list */}
          {book.offers.length > 1 && (
            <div className={styles.offersSection}>
              <h3 className={styles.offersTitle}>Available Offers</h3>
              <ul className={styles.offersList}>
                {book.offers.map((offer) => (
                  <li key={offer.id} className={styles.offerItem}>
                    <span className={styles.offerIcon}>🏷️</span>
                    <span>{offer.description}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Short Description */}
          <p className={styles.shortDescription}>{book.shortDescription}</p>

          {/* Description */}
          <div className={styles.descriptionSection}>
            <h2 className={styles.sectionTitle}>About this book</h2>
            <p className={styles.description}>{book.longDescription}</p>
          </div>

          {/* Book Details */}
          <div className={styles.metaSection}>
            <h2 className={styles.sectionTitle}>Book Details</h2>
            <dl className={styles.metaList}>
              <dt className={styles.metaLabel}>ISBN</dt>
              <dd className={styles.metaValue}>{book.isbn}</dd>
              {displayAttributes.map((attr) => (
                <div key={attr.attributeName} className={styles.metaItem}>
                  <dt className={styles.metaLabel}>{attr.attributeName}</dt>
                  <dd className={styles.metaValue}>{attr.attributeValue}</dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Inventory */}
          {book.inventory.active && (
            <div className={styles.stockInfo}>
              {book.inventory.quantity > 10 ? (
                <span className={styles.inStock}>In Stock</span>
              ) : book.inventory.quantity > 0 ? (
                <span className={styles.lowStock}>
                  Only {book.inventory.quantity} left
                </span>
              ) : (
                <span className={styles.outOfStock}>Out of Stock</span>
              )}
            </div>
          )}

          {/* Actions */}
          <div className={styles.actions}>
            <button
              className={styles.buyButton}
              disabled={!book.inventory.active || book.inventory.quantity === 0}
            >
              Add to Cart
            </button>
            <button className={styles.wishlistButton}>Add to Wishlist</button>
          </div>
        </div>
      </div>
    </section>
  );
}