import { BooksResponse } from "@/components/books/BookGrid/BookGrid.types";

// Base book templates
const baseBooks = [
    {
        title: "Pashchima Ghattada Tappalinalli",
        shortDescription: "A thrilling journey through the dense and mysterious forests of the Western Ghats.",
        label: "New",
        price: { value: 450, currency: "INR", uom: "EA" },
        inventory: { quantity: 40, active: true },
        primaryImageUrl: "/images/books/book1.jpg",
        reviews: { totalNumberOfReviews: 124, maxRating: 5, avgRatingReceived: 4.5 },
        offers: [],
    },
    {
        title: "Jenu Kallina Rahasya Kanive",
        shortDescription: "A suspense-filled tale unraveling secrets hidden in a rocky valley.",
        price: { value: 550, currency: "INR", uom: "EA" },
        inventory: { quantity: 25, active: true },
        primaryImageUrl: "/images/books/book2.jpg",
        reviews: { totalNumberOfReviews: 89, maxRating: 5, avgRatingReceived: 4.2 },
        offers: [
            {
                id: "offer-template",
                title: "10% off",
                description: "10% discount on Jenu Kallina Rahasya Kanive",
                offerPrice: {
                    value: 550,
                    discountValue: 10,
                    discountType: "percentage",
                    discountAmount: 55,
                    currency: "INR",
                    uom: "EA",
                    valueAfterDiscount: 495,
                },
            },
        ],
    },
    {
        title: "Hudugata Hudukata",
        shortDescription: "An adventurous search that blends innocence, courage, and curiosity.",
        label: "Bestseller",
        price: { value: 480, currency: "INR", uom: "EA" },
        inventory: { quantity: 60, active: true },
        primaryImageUrl: "/images/books/book3.jpg",
        reviews: { totalNumberOfReviews: 256, maxRating: 5, avgRatingReceived: 4.8 },
        offers: [],
    },
    {
        title: "Mungarina Kere",
        shortDescription: "A rain-soaked village tale where nature and mystery intertwine.",
        price: { value: 520, currency: "INR", uom: "EA" },
        inventory: { quantity: 35, active: true },
        primaryImageUrl: "/images/books/book4.jpg",
        reviews: { totalNumberOfReviews: 67, maxRating: 5, avgRatingReceived: 4.0 },
        offers: [],
    },
    {
        title: "Ondu Aaneya Sutta",
        shortDescription: "An engaging story where a single incident changes many lives.",
        label: "Trending",
        price: { value: 490, currency: "INR", uom: "EA" },
        inventory: { quantity: 45, active: true },
        primaryImageUrl: "/images/books/book5.jpg",
        reviews: { totalNumberOfReviews: 178, maxRating: 5, avgRatingReceived: 4.6 },
        offers: [
            {
                id: "offer-template",
                title: "15% off",
                description: "15% discount on Ondu Aaneya Sutta",
                offerPrice: {
                    value: 490,
                    discountValue: 15,
                    discountType: "percentage",
                    discountAmount: 73.5,
                    currency: "INR",
                    uom: "EA",
                    valueAfterDiscount: 416.5,
                },
            },
        ],
    },
    {
        title: "Kaadu Tilisida Satyagalu",
        shortDescription: "Truths revealed by the forest through silence and survival.",
        label: "Featured",
        price: { value: 600, currency: "INR", uom: "EA" },
        inventory: { quantity: 30, active: true },
        primaryImageUrl: "/images/books/book6.jpg",
        reviews: { totalNumberOfReviews: 145, maxRating: 5, avgRatingReceived: 4.7 },
        offers: [],
    },
    {
        title: "Anaatha Hakkiya Koogu",
        shortDescription: "A moving story of loss, resilience, and the call of the wild.",
        price: { value: 470, currency: "INR", uom: "EA" },
        inventory: { quantity: 50, active: true },
        primaryImageUrl: "/images/books/book7.jpg",
        reviews: { totalNumberOfReviews: 92, maxRating: 5, avgRatingReceived: 4.3 },
        offers: [],
    },
    {
        title: "Girikandara Estate",
        shortDescription: "An atmospheric tale set in a mist-covered Malenadu estate.",
        price: { value: 530, currency: "INR", uom: "EA" },
        inventory: { quantity: 28, active: true },
        primaryImageUrl: "/images/books/book8.jpg",
        reviews: { totalNumberOfReviews: 103, maxRating: 5, avgRatingReceived: 4.4 },
        offers: [],
    },
];

// Helper function to generate books for a specific page
const generatePageBooks = (pageNumber: number) => {
    const booksPerPage = 10;
    const startIndex = (pageNumber - 1) * booksPerPage;

    return Array.from({ length: booksPerPage }, (_, i) => {
        const bookIndex = i % 8;
        const baseBook = baseBooks[bookIndex];
        const bookId = String(startIndex + i + 1);

        return {
            ...baseBook,
            bookId,
            title: `P${pageNumber} - ${baseBook.title}`,
            offers: baseBook.offers.map(offer => ({
                ...offer,
                id: `offer-${bookId}`,
            })),
        };
    });
};

// Page 1 Mock Response
export const mockBooksPage1: BooksResponse = {
    pageNumber: 1,
    pageSize: 10,
    totalNumberOfPages: 7,
    books: generatePageBooks(1),
};

// Page 2 Mock Response
export const mockBooksPage2: BooksResponse = {
    pageNumber: 2,
    pageSize: 10,
    totalNumberOfPages: 7,
    books: generatePageBooks(2),
};

// Page 3 Mock Response
export const mockBooksPage3: BooksResponse = {
    pageNumber: 3,
    pageSize: 10,
    totalNumberOfPages: 7,
    books: generatePageBooks(3),
};

// Page 4 Mock Response
export const mockBooksPage4: BooksResponse = {
    pageNumber: 4,
    pageSize: 10,
    totalNumberOfPages: 7,
    books: generatePageBooks(4),
};

// Page 5 Mock Response
export const mockBooksPage5: BooksResponse = {
    pageNumber: 5,
    pageSize: 10,
    totalNumberOfPages: 7,
    books: generatePageBooks(5),
};

// Page 6 Mock Response
export const mockBooksPage6: BooksResponse = {
    pageNumber: 6,
    pageSize: 10,
    totalNumberOfPages: 7,
    books: generatePageBooks(6),
};

// Page 7 Mock Response (Books 61-70)
export const mockBooksPage7: BooksResponse = {
    pageNumber: 7,
    pageSize: 10,
    totalNumberOfPages: 7,
    books: generatePageBooks(7),
};

// Default export (Page 1)
export const mockBooksResponse = mockBooksPage1;

// Utility function to get mock data for a specific page
// This can be replaced with an API call later
export function getMockBooksForPage(pageNumber: number): BooksResponse {
    const pageMap: Record<number, BooksResponse> = {
        1: mockBooksPage1,
        2: mockBooksPage2,
        3: mockBooksPage3,
        4: mockBooksPage4,
        5: mockBooksPage5,
        6: mockBooksPage6,
        7: mockBooksPage7,
    };

    // Return requested page or default to page 1
    return pageMap[pageNumber] || mockBooksPage1;
}
