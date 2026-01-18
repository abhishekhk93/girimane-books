import { Book } from "../BookCard/BookCard.types";

export type BooksResponse = {
    pageNumber: number;
    pageSize: number;
    totalNumberOfPages: number;
    books: Book[];
};

export type BookGridProps = {
    books: Book[];
    title?: string;
    description?: string;
};
