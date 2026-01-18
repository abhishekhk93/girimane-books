export type Book = {
    id: string;
    title: string;
    author: string;
    price: number;
    imageUrl: string;
    href: string;
    badge?: string;
    description?: string;
    isbn?: string;
    pages?: number;
    language?: string;
    publishedYear?: number;
};

export type BookDetailProps = {
    book: Book;
};
