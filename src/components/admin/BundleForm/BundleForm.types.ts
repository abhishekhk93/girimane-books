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

export type BundleFormData = {
    title: string;
    shortDescription: string;
    longDescription: string;
    label: string;
    tags: string[];
    active: boolean;
    price: {
        value: number | "";
        currency: string;
        uom: string;
    };
    categories: Category[];
    images: ImageEntry[];
    books: string[];
    additional_attributes: AdditionalAttribute[];
};
