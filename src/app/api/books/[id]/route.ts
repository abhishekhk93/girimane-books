import { NextResponse } from "next/server";
import { BookDetail } from "@/components/books/BookDetail/BookDetail.types";

// Mock data - this would typically come from a database
const mockBooks: BookDetail[] = [
    {
        bookId: "1",
        title: "Pashchima Ghattada Tappalinalli",
        shortDescription:
            "A mysterious journey deep into the rain-soaked trails of the Western Ghats.",
        longDescription:
            "Set against the dense forests and mist-covered hills of the Western Ghats, this story unfolds as an intense exploration of human courage, fear, and curiosity. Through vivid storytelling, the author captures the raw beauty of Malenadu while unraveling secrets hidden within its untouched landscapes.",
        isbn: "978-81-234-5678-1",
        label: "New",
        price: { value: 450, currency: "INR", uom: "EA" },
        inventory: { quantity: 40, active: true },
        categories: [
            { name: "All Books", displayName: "All Books / ಎಲ್ಲಾ ಪುಸ್ತಕಗಳು", primary: true },
            { name: "Literature", displayName: "Literature", primary: true },
        ],
        images: [
            { url: "/images/books/book1.jpg", isPrimary: true },
            { url: "/images/books/book1-back.jpg", isPrimary: false },
        ],
        reviews: { totalNumberOfReviews: 124, maxRating: 5, avgRatingReceived: 4.5, comments: [] },
        offers: [],
        additional_attributes: [
            { attributeName: "Number Of Pages", attributeValue: 320, isDisplayAttribute: true },
            { attributeName: "Author", attributeValue: "Sri Girimane Shyamarao", isDisplayAttribute: true },
            { attributeName: "Year Of Publication", attributeValue: "2023", isDisplayAttribute: true },
            { attributeName: "Binding", attributeValue: "Paper Back", isDisplayAttribute: true },
            { attributeName: "Weight", attributeValue: "280gms", isDisplayAttribute: true },
        ],
    },
    {
        bookId: "2",
        title: "Jenu Kallina Rahasya Kanive",
        shortDescription:
            "An intriguing mystery hidden within the rocky valleys of Malenadu.",
        longDescription:
            "This gripping tale takes readers into a secluded valley where nature guards an ancient secret. As events unfold, the narrative blends folklore, suspense, and local wisdom, creating a compelling mystery deeply rooted in the Malenadina landscape.",
        isbn: "978-81-234-5678-2",
        price: { value: 550, currency: "INR", uom: "EA" },
        inventory: { quantity: 25, active: true },
        categories: [
            { name: "All Books", displayName: "All Books / ಎಲ್ಲಾ ಪುಸ್ತಕಗಳು", primary: true },
            { name: "Fiction", displayName: "Fiction", primary: true },
        ],
        images: [{ url: "/images/books/book2.jpg", isPrimary: true }],
        reviews: { totalNumberOfReviews: 89, maxRating: 5, avgRatingReceived: 4.2, comments: [] },
        offers: [
            {
                id: "offer-2",
                title: "10% discount",
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
        additional_attributes: [
            { attributeName: "Number Of Pages", attributeValue: 380, isDisplayAttribute: true },
            { attributeName: "Author", attributeValue: "Sri Girimane Shyamarao", isDisplayAttribute: true },
            { attributeName: "Year Of Publication", attributeValue: "2022", isDisplayAttribute: true },
            { attributeName: "Binding", attributeValue: "Paper Back", isDisplayAttribute: true },
            { attributeName: "Weight", attributeValue: "320gms", isDisplayAttribute: true },
        ],
    },
    {
        bookId: "3",
        title: "Hudugata Hudukata",
        shortDescription:
            "A reflective story of childhood curiosity and inner discovery.",
        longDescription:
            "Blending innocence with emotional depth, this narrative explores the playful yet profound journey of growing up in Malenadu. Through simple moments and meaningful encounters, the story reveals how childhood experiences shape identity and purpose.",
        isbn: "978-81-234-5678-3",
        label: "Bestseller",
        price: { value: 480, currency: "INR", uom: "EA" },
        inventory: { quantity: 60, active: true },
        categories: [
            { name: "All Books", displayName: "All Books / ಎಲ್ಲಾ ಪುಸ್ತಕಗಳು", primary: true },
            { name: "Culture", displayName: "Culture", primary: true },
        ],
        images: [{ url: "/images/books/book3.jpg", isPrimary: true }],
        reviews: { totalNumberOfReviews: 256, maxRating: 5, avgRatingReceived: 4.8, comments: [] },
        offers: [],
        additional_attributes: [
            { attributeName: "Number Of Pages", attributeValue: 350, isDisplayAttribute: true },
            { attributeName: "Author", attributeValue: "Sri Girimane Shyamarao", isDisplayAttribute: true },
            { attributeName: "Year Of Publication", attributeValue: "2023", isDisplayAttribute: true },
            { attributeName: "Binding", attributeValue: "Hard Cover", isDisplayAttribute: true },
            { attributeName: "Weight", attributeValue: "450gms", isDisplayAttribute: true },
        ],
    },
    {
        bookId: "4",
        title: "Mungarina Kere",
        shortDescription:
            "A serene yet suspenseful tale set around a monsoon-fed lake.",
        longDescription:
            "As monsoon clouds gather over Malenadu, a quiet lake becomes the center of unexpected events. This story captures the rhythm of village life, blending nature, memory, and mystery into a deeply atmospheric reading experience.",
        isbn: "978-81-234-5678-4",
        price: { value: 520, currency: "INR", uom: "EA" },
        inventory: { quantity: 35, active: true },
        categories: [
            { name: "All Books", displayName: "All Books / ಎಲ್ಲಾ ಪುಸ್ತಕಗಳು", primary: true },
            { name: "History", displayName: "History", primary: true },
        ],
        images: [{ url: "/images/books/book4.jpg", isPrimary: true }],
        reviews: { totalNumberOfReviews: 67, maxRating: 5, avgRatingReceived: 4.0, comments: [] },
        offers: [],
        additional_attributes: [
            { attributeName: "Number Of Pages", attributeValue: 365, isDisplayAttribute: true },
            { attributeName: "Author", attributeValue: "Sri Girimane Shyamarao", isDisplayAttribute: true },
            { attributeName: "Year Of Publication", attributeValue: "2022", isDisplayAttribute: true },
            { attributeName: "Binding", attributeValue: "Paper Back", isDisplayAttribute: true },
            { attributeName: "Weight", attributeValue: "300gms", isDisplayAttribute: true },
        ],
    },
    {
        bookId: "5",
        title: "Ondu Aaneya Sutta",
        shortDescription:
            "A symbolic tale revolving around an unforgettable incident.",
        longDescription:
            "This powerful story unfolds around a single incident that leaves a lasting impression on everyone involved. Rich in symbolism and emotional depth, it reflects the subtle complexities of human behavior within Malenadina society.",
        isbn: "978-81-234-5678-5",
        label: "Trending",
        price: { value: 490, currency: "INR", uom: "EA" },
        inventory: { quantity: 45, active: true },
        categories: [
            { name: "All Books", displayName: "All Books / ಎಲ್ಲಾ ಪುಸ್ತಕಗಳು", primary: true },
            { name: "Philosophy", displayName: "Philosophy", primary: true },
        ],
        images: [{ url: "/images/books/book5.jpg", isPrimary: true }],
        reviews: { totalNumberOfReviews: 178, maxRating: 5, avgRatingReceived: 4.6, comments: [] },
        offers: [],
        additional_attributes: [
            { attributeName: "Number Of Pages", attributeValue: 340, isDisplayAttribute: true },
            { attributeName: "Author", attributeValue: "Sri Girimane Shyamarao", isDisplayAttribute: true },
            { attributeName: "Year Of Publication", attributeValue: "2023", isDisplayAttribute: true },
            { attributeName: "Binding", attributeValue: "Paper Back", isDisplayAttribute: true },
            { attributeName: "Weight", attributeValue: "290gms", isDisplayAttribute: true },
        ],
    },
    {
        bookId: "6",
        title: "Kaadu Tilisida Satyagalu",
        shortDescription:
            "Truths revealed through the silence and strength of the forest.",
        longDescription:
            "Deep within the forests of Malenadu, nature becomes the teacher. This thought-provoking narrative reveals life lessons through forest encounters, solitude, and survival, offering a profound connection between humans and the natural world.",
        isbn: "978-81-234-5678-6",
        label: "Featured",
        price: { value: 600, currency: "INR", uom: "EA" },
        inventory: { quantity: 30, active: true },
        categories: [
            { name: "All Books", displayName: "All Books / ಎಲ್ಲಾ ಪುಸ್ತಕಗಳು", primary: true },
            { name: "Culture", displayName: "Culture", primary: true },
        ],
        images: [{ url: "/images/books/book6.jpg", isPrimary: true }],
        reviews: { totalNumberOfReviews: 145, maxRating: 5, avgRatingReceived: 4.7, comments: [] },
        offers: [],
        additional_attributes: [
            { attributeName: "Number Of Pages", attributeValue: 420, isDisplayAttribute: true },
            { attributeName: "Author", attributeValue: "Sri Girimane Shyamarao", isDisplayAttribute: true },
            { attributeName: "Year Of Publication", attributeValue: "2024", isDisplayAttribute: true },
            { attributeName: "Binding", attributeValue: "Hard Cover", isDisplayAttribute: true },
            { attributeName: "Weight", attributeValue: "520gms", isDisplayAttribute: true },
        ],
    },
    {
        bookId: "7",
        title: "Anaatha Hakkiya Koogu",
        shortDescription:
            "A moving story echoing loss, resilience, and hope.",
        longDescription:
            "This emotionally rich narrative follows voices often unheard, portraying solitude and resilience through a deeply human lens. Rooted in Malenadina settings, the story resonates with compassion and quiet strength.",
        isbn: "978-81-234-5678-7",
        price: { value: 470, currency: "INR", uom: "EA" },
        inventory: { quantity: 50, active: true },
        categories: [
            { name: "All Books", displayName: "All Books / ಎಲ್ಲಾ ಪುಸ್ತಕಗಳು", primary: true },
            { name: "Literature", displayName: "Literature", primary: true },
        ],
        images: [{ url: "/images/books/book7.jpg", isPrimary: true }],
        reviews: { totalNumberOfReviews: 92, maxRating: 5, avgRatingReceived: 4.3, comments: [] },
        offers: [],
        additional_attributes: [
            { attributeName: "Number Of Pages", attributeValue: 330, isDisplayAttribute: true },
            { attributeName: "Author", attributeValue: "Sri Girimane Shyamarao", isDisplayAttribute: true },
            { attributeName: "Year Of Publication", attributeValue: "2022", isDisplayAttribute: true },
            { attributeName: "Binding", attributeValue: "Paper Back", isDisplayAttribute: true },
            { attributeName: "Weight", attributeValue: "275gms", isDisplayAttribute: true },
        ],
    },
    {
        bookId: "8",
        title: "Girikandara Estate",
        shortDescription:
            "A suspense-filled narrative set in a remote plantation estate.",
        longDescription:
            "Set within the secluded Girikandara estate, this story weaves suspense, human drama, and the quiet menace of isolation. As events unfold, the estate itself becomes a character, revealing hidden truths and unexpected turns.",
        isbn: "978-81-234-5678-8",
        price: { value: 530, currency: "INR", uom: "EA" },
        inventory: { quantity: 28, active: true },
        categories: [
            { name: "All Books", displayName: "All Books / ಎಲ್ಲಾ ಪುಸ್ತಕಗಳು", primary: true },
            { name: "Fiction", displayName: "Fiction", primary: true },
        ],
        images: [{ url: "/images/books/book8.jpg", isPrimary: true }],
        reviews: { totalNumberOfReviews: 103, maxRating: 5, avgRatingReceived: 4.4, comments: [] },
        offers: [],
        additional_attributes: [
            { attributeName: "Number Of Pages", attributeValue: 375, isDisplayAttribute: true },
            { attributeName: "Author", attributeValue: "Sri Girimane Shyamarao", isDisplayAttribute: true },
            { attributeName: "Year Of Publication", attributeValue: "2023", isDisplayAttribute: true },
            { attributeName: "Binding", attributeValue: "Paper Back", isDisplayAttribute: true },
            { attributeName: "Weight", attributeValue: "310gms", isDisplayAttribute: true },
        ],
    },
];


type RouteParams = {
    params: {
        id: string;
    };
};

export async function GET(request: Request, { params }: RouteParams) {
    const book = mockBooks.find((b) => b.bookId === params.id);

    if (!book) {
        return NextResponse.json({ error: "Book not found" }, { status: 404 });
    }

    return NextResponse.json(book);
}
