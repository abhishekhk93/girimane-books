export type Price = {
    value: number;
    currency: string;
    uom: string;
};

export type Inventory = {
    quantity: number;
    active: boolean;
};

export type Category = {
    name: string;
    displayName: string;
    primary: boolean;
};

export type BookImage = {
    url: string;
    isPrimary: boolean;
};

export type Reviews = {
    totalNumberOfReviews: number;
    maxRating: number;
    avgRatingReceived: number;
    comments?: unknown[];
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

export type AdditionalAttribute = {
    attributeName: string;
    attributeValue: string | number;
    isDisplayAttribute: boolean;
};

export type BookDetail = {
    bookId: string;
    title: string;
    shortDescription: string;
    longDescription: string;
    isbn: string;
    label?: string;
    price: Price;
    inventory: Inventory;
    categories: Category[];
    images: BookImage[];
    reviews: Reviews;
    offers: Offer[];
    additional_attributes: AdditionalAttribute[];
};

export type BookDetailProps = {
    book: BookDetail;
};
