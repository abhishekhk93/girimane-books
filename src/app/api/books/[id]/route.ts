import { NextResponse } from "next/server";

// Mock data - this would typically come from a database
const mockBooks = [
    {
        id: "1",
        title: "The Journey of Words",
        author: "Sri Girimane Shyamarao",
        price: 450,
        imageUrl: "/images/books/book-1.jpg",
        href: "/books/1",
        badge: "New",
        description: "A profound exploration of language and its transformative power. This book takes readers on an enlightening journey through the evolution of words, their meanings, and their impact on human consciousness. Through captivating narratives and insightful analysis, the author reveals how words shape our reality and connect us to deeper truths.",
        isbn: "978-81-234-5678-1",
        pages: 320,
        language: "English",
        publishedYear: 2023,
    },
    {
        id: "2",
        title: "Tales from the Heartland",
        author: "Sri Girimane Shyamarao",
        price: 550,
        imageUrl: "/images/books/book-2.jpg",
        href: "/books/2",
        description: "Immerse yourself in the rich tapestry of stories that emerge from the heartland of India. This collection brings together timeless tales that capture the essence of rural life, traditional values, and the wisdom passed down through generations. Each story is a window into a world where simplicity meets profound insight.",
        isbn: "978-81-234-5678-2",
        pages: 380,
        language: "English",
        publishedYear: 2022,
    },
    {
        id: "3",
        title: "Echoes of Tradition",
        author: "Sri Girimane Shyamarao",
        price: 480,
        imageUrl: "/images/books/book-3.jpg",
        href: "/books/3",
        badge: "Bestseller",
        description: "Discover the enduring power of tradition in this compelling work that bridges the past and present. The author masterfully weaves together historical narratives, cultural practices, and contemporary reflections to show how traditions continue to resonate in modern life. A must-read for anyone seeking to understand the roots of cultural identity.",
        isbn: "978-81-234-5678-3",
        pages: 350,
        language: "English",
        publishedYear: 2023,
    },
    {
        id: "4",
        title: "Voices of the Past",
        author: "Sri Girimane Shyamarao",
        price: 520,
        imageUrl: "/images/books/book-4.jpg",
        href: "/books/4",
        description: "Listen to the voices that have shaped our history and continue to guide us today. This remarkable collection brings to life the stories, teachings, and wisdom of ancestors, showing how their insights remain relevant in our contemporary world. A tribute to the enduring legacy of those who came before us.",
        isbn: "978-81-234-5678-4",
        pages: 365,
        language: "English",
        publishedYear: 2022,
    },
    {
        id: "5",
        title: "Stories of Wisdom",
        author: "Sri Girimane Shyamarao",
        price: 490,
        imageUrl: "/images/books/book-5.jpg",
        href: "/books/5",
        description: "A treasury of wisdom stories that illuminate life's deepest truths. Through parables, anecdotes, and narratives drawn from various traditions, this book offers practical guidance for navigating life's challenges. Each story is carefully crafted to inspire reflection and personal growth.",
        isbn: "978-81-234-5678-5",
        pages: 340,
        language: "English",
        publishedYear: 2023,
    },
    {
        id: "6",
        title: "The Cultural Tapestry",
        author: "Sri Girimane Shyamarao",
        price: 600,
        imageUrl: "/images/books/book-6.jpg",
        href: "/books/6",
        badge: "Featured",
        description: "Explore the intricate threads that weave together the rich cultural fabric of our society. This comprehensive work examines the interplay between art, literature, music, and social customs, revealing how they collectively form a vibrant cultural identity. An essential read for cultural enthusiasts and scholars alike.",
        isbn: "978-81-234-5678-6",
        pages: 420,
        language: "English",
        publishedYear: 2024,
    },
    {
        id: "7",
        title: "Legacy of Words",
        author: "Sri Girimane Shyamarao",
        price: 470,
        imageUrl: "/images/books/book-7.jpg",
        href: "/books/7",
        description: "Examine the lasting impact of words and literature on human civilization. This thoughtful exploration delves into how great works of literature have shaped societies, influenced thought, and preserved knowledge across generations. A celebration of the written word and its enduring power.",
        isbn: "978-81-234-5678-7",
        pages: 330,
        language: "English",
        publishedYear: 2022,
    },
    {
        id: "8",
        title: "Timeless Narratives",
        author: "Sri Girimane Shyamarao",
        price: 530,
        imageUrl: "/images/books/book-8.jpg",
        href: "/books/8",
        description: "Journey through narratives that transcend time and place, speaking to universal human experiences. This collection of stories demonstrates how certain themes and truths remain constant across cultures and eras, offering readers a sense of connection to the broader human story.",
        isbn: "978-81-234-5678-8",
        pages: 375,
        language: "English",
        publishedYear: 2023,
    },
];

type RouteParams = {
    params: {
        id: string;
    };
};

export async function GET(request: Request, { params }: RouteParams) {
    const book = mockBooks.find((b) => b.id === params.id);

    if (!book) {
        return NextResponse.json(
            { error: "Book not found" },
            { status: 404 }
        );
    }

    return NextResponse.json(book);
}
