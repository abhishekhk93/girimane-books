import { NextResponse } from "next/server";
import { BookDetail } from "@/components/books/BookDetail/BookDetail.types";

// Mock data - this would typically come from a database
const mockBooks: BookDetail[] = [
    {
        bookId: "1",
        title: "The Journey of Words",
        shortDescription: "A profound exploration of language and its transformative power.",
        longDescription: "This book takes readers on an enlightening journey through the evolution of words, their meanings, and their impact on human consciousness. Through captivating narratives and insightful analysis, the author reveals how words shape our reality and connect us to deeper truths.",
        isbn: "978-81-234-5678-1",
        label: "New",
        price: { value: 450, currency: "INR", uom: "EA" },
        inventory: { quantity: 40, active: true },
        categories: [
            { name: "All Books", displayName: "All Books / ಎಲ್ಲಾ ಪುಸ್ತಕಗಳು", primary: true },
            { name: "Literature", displayName: "Literature", primary: true },
        ],
        images: [
            { url: "/images/books/book-1.jpg", isPrimary: true },
            { url: "/images/books/book-1-back.jpg", isPrimary: false },
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
        title: "Tales from the Heartland",
        shortDescription: "Timeless tales capturing the essence of rural life.",
        longDescription: "Immerse yourself in the rich tapestry of stories that emerge from the heartland of India. This collection brings together timeless tales that capture the essence of rural life, traditional values, and the wisdom passed down through generations.",
        isbn: "978-81-234-5678-2",
        price: { value: 550, currency: "INR", uom: "EA" },
        inventory: { quantity: 25, active: true },
        categories: [
            { name: "All Books", displayName: "All Books / ಎಲ್ಲಾ ಪುಸ್ತಕಗಳು", primary: true },
            { name: "Fiction", displayName: "Fiction", primary: true },
        ],
        images: [
            { url: "/images/books/book-2.jpg", isPrimary: true },
        ],
        reviews: { totalNumberOfReviews: 89, maxRating: 5, avgRatingReceived: 4.2, comments: [] },
        offers: [
            {
                id: "offer-2",
                title: "10% discount",
                description: "10% discount on Tales from the Heartland",
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
        title: "Echoes of Tradition",
        shortDescription: "Bridging the past and present through cultural narratives.",
        longDescription: "Discover the enduring power of tradition in this compelling work that bridges the past and present. The author masterfully weaves together historical narratives, cultural practices, and contemporary reflections to show how traditions continue to resonate in modern life.",
        isbn: "978-81-234-5678-3",
        label: "Bestseller",
        price: { value: 480, currency: "INR", uom: "EA" },
        inventory: { quantity: 60, active: true },
        categories: [
            { name: "All Books", displayName: "All Books / ಎಲ್ಲಾ ಪುಸ್ತಕಗಳು", primary: true },
            { name: "Culture", displayName: "Culture", primary: true },
        ],
        images: [
            { url: "/images/books/book-3.jpg", isPrimary: true },
        ],
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
        title: "Voices of the Past",
        shortDescription: "Stories and teachings from ancestors that remain relevant today.",
        longDescription: "Listen to the voices that have shaped our history and continue to guide us today. This remarkable collection brings to life the stories, teachings, and wisdom of ancestors, showing how their insights remain relevant in our contemporary world.",
        isbn: "978-81-234-5678-4",
        price: { value: 520, currency: "INR", uom: "EA" },
        inventory: { quantity: 35, active: true },
        categories: [
            { name: "All Books", displayName: "All Books / ಎಲ್ಲಾ ಪುಸ್ತಕಗಳು", primary: true },
            { name: "History", displayName: "History", primary: true },
        ],
        images: [
            { url: "/images/books/book-4.jpg", isPrimary: true },
        ],
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
        title: "Stories of Wisdom",
        shortDescription: "A treasury of wisdom stories illuminating life's deepest truths.",
        longDescription: "A treasury of wisdom stories that illuminate life's deepest truths. Through parables, anecdotes, and narratives drawn from various traditions, this book offers practical guidance for navigating life's challenges.",
        isbn: "978-81-234-5678-5",
        label: "Trending",
        price: { value: 490, currency: "INR", uom: "EA" },
        inventory: { quantity: 45, active: true },
        categories: [
            { name: "All Books", displayName: "All Books / ಎಲ್ಲಾ ಪುಸ್ತಕಗಳು", primary: true },
            { name: "Philosophy", displayName: "Philosophy", primary: true },
        ],
        images: [
            { url: "/images/books/book-5.jpg", isPrimary: true },
        ],
        reviews: { totalNumberOfReviews: 178, maxRating: 5, avgRatingReceived: 4.6, comments: [] },
        offers: [
            {
                id: "offer-5a",
                title: "15% off",
                description: "15% discount on Stories of Wisdom",
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
            {
                id: "offer-5b",
                title: "₹100 off on bundle",
                description: "₹100 off when bought with any other book",
                offerPrice: {
                    value: 490,
                    discountValue: 100,
                    discountType: "flat",
                    discountAmount: 100,
                    currency: "INR",
                    uom: "EA",
                    valueAfterDiscount: 390,
                },
            },
        ],
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
        title: "The Cultural Tapestry",
        shortDescription: "Exploring the intricate threads of our cultural fabric.",
        longDescription: "Explore the intricate threads that weave together the rich cultural fabric of our society. This comprehensive work examines the interplay between art, literature, music, and social customs, revealing how they collectively form a vibrant cultural identity.",
        isbn: "978-81-234-5678-6",
        label: "Featured",
        price: { value: 600, currency: "INR", uom: "EA" },
        inventory: { quantity: 30, active: true },
        categories: [
            { name: "All Books", displayName: "All Books / ಎಲ್ಲಾ ಪುಸ್ತಕಗಳು", primary: true },
            { name: "Culture", displayName: "Culture", primary: true },
        ],
        images: [
            { url: "/images/books/book-6.jpg", isPrimary: true },
        ],
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
        title: "Legacy of Words",
        shortDescription: "Examining the lasting impact of literature on civilization.",
        longDescription: "Examine the lasting impact of words and literature on human civilization. This thoughtful exploration delves into how great works of literature have shaped societies, influenced thought, and preserved knowledge across generations.",
        isbn: "978-81-234-5678-7",
        price: { value: 470, currency: "INR", uom: "EA" },
        inventory: { quantity: 50, active: true },
        categories: [
            { name: "All Books", displayName: "All Books / ಎಲ್ಲಾ ಪುಸ್ತಕಗಳು", primary: true },
            { name: "Literature", displayName: "Literature", primary: true },
        ],
        images: [
            { url: "/images/books/book-7.jpg", isPrimary: true },
        ],
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
        title: "Timeless Narratives",
        shortDescription: "Narratives that transcend time and speak to universal experiences.",
        longDescription: "Journey through narratives that transcend time and place, speaking to universal human experiences. This collection of stories demonstrates how certain themes and truths remain constant across cultures and eras.",
        isbn: "978-81-234-5678-8",
        price: { value: 530, currency: "INR", uom: "EA" },
        inventory: { quantity: 28, active: true },
        categories: [
            { name: "All Books", displayName: "All Books / ಎಲ್ಲಾ ಪುಸ್ತಕಗಳು", primary: true },
            { name: "Fiction", displayName: "Fiction", primary: true },
        ],
        images: [
            { url: "/images/books/book-8.jpg", isPrimary: true },
        ],
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
