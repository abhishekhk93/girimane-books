import { api } from "./client";

// Sample: Get all books
export function getBooks() {
    return api("/api/books");
}

// Sample: Get book by ID
export function getBookById(id: string) {
    return api(`/api/books/${id}`);
}

// Sample: Get cart
export function getCart() {
    return api("/api/cart");
}

// Sample: Add to cart
export function addToCart(bookId: string, quantity = 1) {
    return api("/api/cart/items", {
        method: "POST",
        body: JSON.stringify({ bookId, quantity }),
    });
}
