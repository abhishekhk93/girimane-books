"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./BookDetail.module.css";

type ImageGalleryProps = {
    images: { url: string; isPrimary: boolean }[];
    title: string;
    label?: string;
    discountText?: string;
};

export function ImageGallery({
    images,
    title,
    label,
    discountText,
}: ImageGalleryProps) {
    const primaryImage = images.find((img) => img.isPrimary) || images[0];
    const [selectedImage, setSelectedImage] = useState(primaryImage?.url || "");

    return (
        <div className={styles.imageSection}>
            <div className={styles.imageWrapper}>
                {label && <span className={styles.badge}>{label}</span>}
                {discountText && (
                    <span className={styles.discount}>{discountText}</span>
                )}
                <Image
                    src={selectedImage || "/images/placeholder.jpg"}
                    alt={title}
                    fill
                    className={styles.image}
                    sizes="(max-width: 768px) 100vw, 400px"
                    priority
                />
            </div>
            {images.length > 1 && (
                <div className={styles.thumbnails}>
                    {images.map((img, index) => (
                        <div
                            key={index}
                            className={`${styles.thumbnail} ${selectedImage === img.url ? styles.thumbnailActive : ""}`}
                            onClick={() => setSelectedImage(img.url)}
                            role="button"
                            tabIndex={0}
                            onKeyDown={(e) => e.key === "Enter" && setSelectedImage(img.url)}
                        >
                            <Image
                                src={img.url}
                                alt={`${title} - ${index + 1}`}
                                fill
                                className={styles.thumbnailImage}
                            />
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
