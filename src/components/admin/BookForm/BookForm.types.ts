export type Category = {
    name: string;
    displayName: string;
    primary: boolean;
};

export type ImageEntry = {
    url: string;
    isPrimary: boolean;
};

export type AdditionalAttribute = {
    attributeName: string;
    attributeValue: string;
    displayAttribute: boolean;
};

export type BookFormData = {
    title: string;
    shortDescription: string;
    longDescription: string;
    isbn: string;
    label: string;
    tags: string[];
    price: {
        value: number | "";
        currency: string;
        uom: string;
    };
    inventory: {
        quantity: number | "";
        active: boolean;
    };
    categories: Category[];
    images: ImageEntry[];
    additional_attributes: AdditionalAttribute[];
};
