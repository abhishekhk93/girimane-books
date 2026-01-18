"use client";

import { useState } from "react";
import { FormInput } from "../FormInput/FormInput";
import { FormTextArea } from "../FormTextArea/FormTextArea";
import { FormSelect } from "../FormSelect/FormSelect";
import { FormTagInput } from "../FormTagInput/FormTagInput";
import { FormCheckbox } from "../FormCheckbox/FormCheckbox";
import { FormSection } from "../FormSection/FormSection";
import styles from "./BookForm.module.css";

type Category = {
    name: string;
    displayName: string;
    primary: boolean;
};

type ImageEntry = {
    url: string;
    isPrimary: boolean;
};

type AdditionalAttribute = {
    attributeName: string;
    attributeValue: string;
    displayAttribute: boolean;
};

type BookFormData = {
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

const initialFormData: BookFormData = {
    title: "",
    shortDescription: "",
    longDescription: "",
    isbn: "",
    label: "",
    tags: [],
    price: {
        value: "",
        currency: "INR",
        uom: "EA",
    },
    inventory: {
        quantity: "",
        active: true,
    },
    categories: [{ name: "", displayName: "", primary: true }],
    images: [{ url: "", isPrimary: true }],
    additional_attributes: [
        { attributeName: "Number Of Pages", attributeValue: "", displayAttribute: true },
        { attributeName: "Author", attributeValue: "", displayAttribute: true },
        { attributeName: "Year Of Publication", attributeValue: "", displayAttribute: true },
        { attributeName: "Binding", attributeValue: "Paper Back", displayAttribute: true },
        { attributeName: "Weight", attributeValue: "", displayAttribute: true },
    ],
};

const CURRENCY_OPTIONS = [
    { value: "INR", label: "INR (₹)" },
    { value: "USD", label: "USD ($)" },
];

const UOM_OPTIONS = [
    { value: "EA", label: "Each (EA)" },
    { value: "BUNDLE", label: "Bundle" },
];

const BINDING_OPTIONS = [
    { value: "Paper Back", label: "Paperback" },
    { value: "Hard Cover", label: "Hardcover" },
    { value: "Leather Bound", label: "Leather Bound" },
];

export function BookForm() {
    const [formData, setFormData] = useState<BookFormData>(initialFormData);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const updateField = <K extends keyof BookFormData>(
        field: K,
        value: BookFormData[K]
    ) => {
        setFormData((prev) => ({ ...prev, [field]: value }));
    };

    const updatePrice = <K extends keyof BookFormData["price"]>(
        field: K,
        value: BookFormData["price"][K]
    ) => {
        setFormData((prev) => ({
            ...prev,
            price: { ...prev.price, [field]: value },
        }));
    };

    const updateInventory = <K extends keyof BookFormData["inventory"]>(
        field: K,
        value: BookFormData["inventory"][K]
    ) => {
        setFormData((prev) => ({
            ...prev,
            inventory: { ...prev.inventory, [field]: value },
        }));
    };

    // Category handlers
    const addCategory = () => {
        setFormData((prev) => ({
            ...prev,
            categories: [...prev.categories, { name: "", displayName: "", primary: false }],
        }));
    };

    const removeCategory = (index: number) => {
        setFormData((prev) => ({
            ...prev,
            categories: prev.categories.filter((_, i) => i !== index),
        }));
    };

    const updateCategory = (index: number, field: keyof Category, value: string | boolean) => {
        setFormData((prev) => ({
            ...prev,
            categories: prev.categories.map((cat, i) =>
                i === index ? { ...cat, [field]: value } : cat
            ),
        }));
    };

    // Image handlers
    const addImage = () => {
        setFormData((prev) => ({
            ...prev,
            images: [...prev.images, { url: "", isPrimary: false }],
        }));
    };

    const removeImage = (index: number) => {
        setFormData((prev) => ({
            ...prev,
            images: prev.images.filter((_, i) => i !== index),
        }));
    };

    const updateImage = (index: number, field: keyof ImageEntry, value: string | boolean) => {
        setFormData((prev) => ({
            ...prev,
            images: prev.images.map((img, i) => {
                if (field === "isPrimary" && value === true) {
                    // Only one image can be primary
                    return i === index ? { ...img, isPrimary: true } : { ...img, isPrimary: false };
                }
                return i === index ? { ...img, [field]: value } : img;
            }),
        }));
    };

    // Attribute handlers
    const updateAttribute = (
        index: number,
        field: keyof AdditionalAttribute,
        value: string | boolean
    ) => {
        setFormData((prev) => ({
            ...prev,
            additional_attributes: prev.additional_attributes.map((attr, i) =>
                i === index ? { ...attr, [field]: value } : attr
            ),
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Build the payload according to API contract
        const payload = {
            books: [
                {
                    ...formData,
                    price: {
                        ...formData.price,
                        value: Number(formData.price.value),
                    },
                    inventory: {
                        ...formData.inventory,
                        quantity: Number(formData.inventory.quantity),
                    },
                },
            ],
        };

        console.log("Submitting book:", JSON.stringify(payload, null, 2));

        // TODO: Replace with actual API call
        await new Promise((resolve) => setTimeout(resolve, 1000));

        setIsSubmitting(false);
        alert("Book created successfully! (Check console for payload)");
    };

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.header}>
                <h1 className={styles.title}>Create New Book</h1>
                <p className={styles.subtitle}>Fill in the details to add a new book to the catalog</p>
            </div>

            {/* Basic Information */}
            <FormSection title="Basic Information">
                <FormInput
                    label="Title"
                    name="title"
                    value={formData.title}
                    onChange={(value) => updateField("title", value)}
                    placeholder="Enter book title"
                    required
                />
                <FormInput
                    label="Short Description"
                    name="shortDescription"
                    value={formData.shortDescription}
                    onChange={(value) => updateField("shortDescription", value)}
                    placeholder="Brief summary of the book"
                    required
                />
                <FormTextArea
                    label="Long Description"
                    name="longDescription"
                    value={formData.longDescription}
                    onChange={(value) => updateField("longDescription", value)}
                    placeholder="Detailed description of the book"
                    rows={6}
                    required
                />
                <div className={styles.row}>
                    <FormInput
                        label="ISBN"
                        name="isbn"
                        value={formData.isbn}
                        onChange={(value) => updateField("isbn", value)}
                        placeholder="e.g., 0008736383"
                        required
                    />
                    <FormInput
                        label="Label"
                        name="label"
                        value={formData.label}
                        onChange={(value) => updateField("label", value)}
                        placeholder="e.g., New, Top Selling"
                    />
                </div>
                <FormTagInput
                    label="Tags"
                    name="tags"
                    tags={formData.tags}
                    onChange={(tags) => updateField("tags", tags)}
                    placeholder="Type a tag and press Enter"
                />
            </FormSection>

            {/* Pricing */}
            <FormSection title="Pricing">
                <div className={styles.row}>
                    <FormInput
                        label="Price"
                        name="priceValue"
                        type="number"
                        value={formData.price.value}
                        onChange={(value) => updatePrice("value", value === "" ? "" : Number(value))}
                        placeholder="e.g., 1000"
                        required
                    />
                    <FormSelect
                        label="Currency"
                        name="currency"
                        value={formData.price.currency}
                        onChange={(value) => updatePrice("currency", value)}
                        options={CURRENCY_OPTIONS}
                    />
                    <FormSelect
                        label="Unit of Measure"
                        name="uom"
                        value={formData.price.uom}
                        onChange={(value) => updatePrice("uom", value)}
                        options={UOM_OPTIONS}
                    />
                </div>
            </FormSection>

            {/* Inventory */}
            <FormSection title="Inventory">
                <div className={styles.row}>
                    <FormInput
                        label="Quantity"
                        name="quantity"
                        type="number"
                        value={formData.inventory.quantity}
                        onChange={(value) =>
                            updateInventory("quantity", value === "" ? "" : Number(value))
                        }
                        placeholder="e.g., 40"
                        required
                    />
                    <div className={styles.checkboxField}>
                        <FormCheckbox
                            label="Active"
                            name="active"
                            checked={formData.inventory.active}
                            onChange={(checked) => updateInventory("active", checked)}
                        />
                    </div>
                </div>
            </FormSection>

            {/* Categories */}
            <FormSection
                title="Categories"
                description="Define the category hierarchy for breadcrumb navigation"
            >
                {formData.categories.map((category, index) => (
                    <div key={index} className={styles.repeatableItem}>
                        <div className={styles.repeatableRow}>
                            <FormInput
                                label="Name"
                                name={`categoryName-${index}`}
                                value={category.name}
                                onChange={(value) => updateCategory(index, "name", value)}
                                placeholder="e.g., All Books"
                                required
                            />
                            <FormInput
                                label="Display Name"
                                name={`categoryDisplayName-${index}`}
                                value={category.displayName}
                                onChange={(value) => updateCategory(index, "displayName", value)}
                                placeholder="e.g., All Books / ಎಲ್ಲಾ ಪುಸ್ತಕಗಳು"
                                required
                            />
                        </div>
                        <div className={styles.repeatableActions}>
                            <FormCheckbox
                                label="Primary"
                                name={`categoryPrimary-${index}`}
                                checked={category.primary}
                                onChange={(checked) => updateCategory(index, "primary", checked)}
                            />
                            {formData.categories.length > 1 && (
                                <button
                                    type="button"
                                    className={styles.removeButton}
                                    onClick={() => removeCategory(index)}
                                >
                                    Remove
                                </button>
                            )}
                        </div>
                    </div>
                ))}
                <button type="button" className={styles.addButton} onClick={addCategory}>
                    + Add Category
                </button>
            </FormSection>

            {/* Images */}
            <FormSection title="Images" description="Add book cover images">
                {formData.images.map((image, index) => (
                    <div key={index} className={styles.repeatableItem}>
                        <FormInput
                            label="Image URL"
                            name={`imageUrl-${index}`}
                            type="url"
                            value={image.url}
                            onChange={(value) => updateImage(index, "url", value)}
                            placeholder="https://example.com/image.jpg"
                            required
                        />
                        <div className={styles.repeatableActions}>
                            <label className={styles.radioLabel}>
                                <input
                                    type="radio"
                                    name="primaryImage"
                                    checked={image.isPrimary}
                                    onChange={() => updateImage(index, "isPrimary", true)}
                                    className={styles.radio}
                                />
                                <span>Primary Image</span>
                            </label>
                            {formData.images.length > 1 && (
                                <button
                                    type="button"
                                    className={styles.removeButton}
                                    onClick={() => removeImage(index)}
                                >
                                    Remove
                                </button>
                            )}
                        </div>
                    </div>
                ))}
                <button type="button" className={styles.addButton} onClick={addImage}>
                    + Add Image
                </button>
            </FormSection>

            {/* Additional Attributes */}
            <FormSection
                title="Additional Attributes"
                description="Book details like pages, author, binding, etc."
            >
                <div className={styles.row}>
                    <FormInput
                        label="Number of Pages"
                        name="pages"
                        type="number"
                        value={formData.additional_attributes[0].attributeValue}
                        onChange={(value) => updateAttribute(0, "attributeValue", value)}
                        placeholder="e.g., 318"
                    />
                    <FormInput
                        label="Author"
                        name="author"
                        value={formData.additional_attributes[1].attributeValue}
                        onChange={(value) => updateAttribute(1, "attributeValue", value)}
                        placeholder="Author name"
                    />
                </div>
                <div className={styles.row}>
                    <FormInput
                        label="Year of Publication"
                        name="yearOfPublication"
                        value={formData.additional_attributes[2].attributeValue}
                        onChange={(value) => updateAttribute(2, "attributeValue", value)}
                        placeholder="e.g., 2025"
                    />
                    <FormSelect
                        label="Binding"
                        name="binding"
                        value={formData.additional_attributes[3].attributeValue}
                        onChange={(value) => updateAttribute(3, "attributeValue", value)}
                        options={BINDING_OPTIONS}
                    />
                </div>
                <FormInput
                    label="Weight"
                    name="weight"
                    value={formData.additional_attributes[4].attributeValue}
                    onChange={(value) => updateAttribute(4, "attributeValue", value)}
                    placeholder="e.g., 120gms"
                />
            </FormSection>

            {/* Submit */}
            <div className={styles.actions}>
                <button type="submit" className={styles.submitButton} disabled={isSubmitting}>
                    {isSubmitting ? "Creating..." : "Create Book"}
                </button>
            </div>
        </form>
    );
}
