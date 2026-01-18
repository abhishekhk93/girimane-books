export type Price = {
    value: number;
    currency: string;
    uom: string;
};

export type Inventory = {
    quantity: number;
    active: boolean;
};

export type Reviews = {
    totalNumberOfReviews: number;
    maxRating: number;
    avgRatingReceived: number;
};

export type OfferPrice = {
    value: number;
    discountValue: number;
    discountType: string;
    discountAmount: number;
    currency: string;
    uom: string;
    valueAfterDiscount: number;
};

export type Offer = {
    id: string;
    title: string;
    description: string;
    offerPrice: OfferPrice;
};

export type Book = {
    bookId: string;
    title: string;
    shortDescription: string;
    label?: string;
    price: Price;
    inventory: Inventory;
    primaryImageUrl: string;
    reviews: Reviews;
    offers: Offer[];
};

export type BookCardProps = {
    book: Book;
};
