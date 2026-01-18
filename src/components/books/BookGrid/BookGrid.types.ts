export type Book = {
    id: string;
    title: string;
    author: string;
    price: number;
    imageUrl: string;
    href: string;
    badge?: string;
};

export type BookGridProps = {
    books: Book[];
    title?: string;
    description?: string;
};
