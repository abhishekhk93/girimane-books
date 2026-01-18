"use client";

import { useState } from "react";
import { FormInput } from "../FormInput/FormInput";
import { FormTextArea } from "../FormTextArea/FormTextArea";
import { FormSelect } from "../FormSelect/FormSelect";
import { FormTagInput } from "../FormTagInput/FormTagInput";
import { FormCheckbox } from "../FormCheckbox/FormCheckbox";
import { FormSection } from "../FormSection/FormSection";
import styles from "./BundleForm.module.css";
import { Category, ImageEntry, AdditionalAttribute, BundleFormData } from "./BundleForm.types";

const initialFormData: BundleFormData = {
    title: "",
    shortDescription: "",
    longDescription: "",
    label: "",
    tags: [],
    active: true,
    price: {
        value: "",
        currency: "INR",
        uom: "BUNDLE",
    },
    categories: [{ name: "All Bundles", displayName: "All Bundles", primary: true }],
    images: [{ url: "", isPrimary: true }],
    books: [],
    additional_attributes: [
        { attributeName: "Number Of Books", attributeValue: "", displayAttribute: true },
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

export function BundleForm() {
    const [formData, setFormData] = useState<BundleFormData>(initialFormData);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [bookIdInput, setBookIdInput] = useState("");

    const updateField = <K extends keyof BundleFormData>(
        field: K,
        value: BundleFormData[K]
    ) => {
        setFormData((prev) => ({ ...prev, [field]: value }));
    };

    const updatePrice = <K extends keyof BundleFormData["price"]>(
        field: K,
        value: BundleFormData["price"][K]
    ) => {
        setFormData((prev) => ({
            ...prev,
            price: { ...prev.price, [field]: value },
        }));
    };

    // Book ID handlers
    const addBookId = () => {
        if (bookIdInput.trim() && !formData.books.includes(bookIdInput.trim())) {
            setFormData((prev) => ({
                ...prev,
                books: [...prev.books, bookIdInput.trim()],
            }));
            setBookIdInput("");
        }
    };

    const removeBookId = (bookId: string) => {
        setFormData((prev) => ({
            ...prev,
            books: prev.books.filter((id) => id !== bookId),
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
            ...formData,
            price: {
                ...formData.price,
                value: Number(formData.price.value),
            },
        };

        console.log("Submitting bundle:", JSON.stringify(payload, null, 2));

        // TODO: Replace with actual API call
        await new Promise((resolve) => setTimeout(resolve, 1000));

        setIsSubmitting(false);
        alert("Bundle created successfully! (Check console for payload)");
    };

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.header}>
                <h1 className={styles.title}>Create New Bundle</h1>
                <p className={styles.subtitle}>Group multiple books together as a bundle</p>
            </div>

            {/* Basic Information */}
            <FormSection title="Basic Information">
                <FormInput
                    label="Title"
                    name="title"
                    value={formData.title}
                    onChange={(value) => updateField("title", value)}
                    placeholder="Enter bundle title"
                    required
                />
                <FormInput
                    label="Short Description"
                    name="shortDescription"
                    value={formData.shortDescription}
                    onChange={(value) => updateField("shortDescription", value)}
                    placeholder="Brief summary of the bundle"
                    required
                />
                <FormTextArea
                    label="Long Description"
                    name="longDescription"
                    value={formData.longDescription}
                    onChange={(value) => updateField("longDescription", value)}
                    placeholder="Detailed description of the bundle"
                    rows={6}
                    required
                />
                <div className={styles.row}>
                    <FormInput
                        label="Label"
                        name="label"
                        value={formData.label}
                        onChange={(value) => updateField("label", value)}
                        placeholder="e.g., New, Top Selling"
                    />
                    <div className={styles.checkboxField}>
                        <FormCheckbox
                            label="Active"
                            name="active"
                            checked={formData.active}
                            onChange={(checked) => updateField("active", checked)}
                        />
                    </div>
                </div>
                <FormTagInput
                    label="Tags"
                    name="tags"
                    tags={formData.tags}
                    onChange={(tags) => updateField("tags", tags)}
                    placeholder="Type a tag and press Enter"
                />
            </FormSection>

            {/* Books in Bundle */}
            <FormSection title="Books in Bundle" description="Add book IDs to include in this bundle">
                <div className={styles.bookInputRow}>
                    <FormInput
                        label="Book ID"
                        name="bookId"
                        value={bookIdInput}
                        onChange={setBookIdInput}
                        placeholder="Enter book ID"
                    />
                    <button type="button" className={styles.addBookButton} onClick={addBookId}>
                        Add Book
                    </button>
                </div>
                {formData.books.length > 0 && (
                    <div className={styles.bookList}>
                        {formData.books.map((bookId) => (
                            <span key={bookId} className={styles.bookChip}>
                                {bookId}
                                <button
                                    type="button"
                                    className={styles.removeBookChip}
                                    onClick={() => removeBookId(bookId)}
                                    aria-label={`Remove ${bookId}`}
                                >
                                    ×
                                </button>
                            </span>
                        ))}
                    </div>
                )}
            </FormSection>

            {/* Pricing */}
            <FormSection
                title="Pricing"
                description="Price defaults to sum of all books if left empty"
            >
                <div className={styles.row}>
                    <FormInput
                        label="Price (optional)"
                        name="priceValue"
                        type="number"
                        value={formData.price.value}
                        onChange={(value) => updatePrice("value", value === "" ? "" : Number(value))}
                        placeholder="e.g., 1000"
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
                                placeholder="e.g., All Bundles"
                                required
                            />
                            <FormInput
                                label="Display Name"
                                name={`categoryDisplayName-${index}`}
                                value={category.displayName}
                                onChange={(value) => updateCategory(index, "displayName", value)}
                                placeholder="e.g., All Bundles"
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
            <FormSection title="Images" description="Add bundle cover images">
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
                description="Bundle details like number of books, author, binding, etc."
            >
                <div className={styles.row}>
                    <FormInput
                        label="Number of Books"
                        name="numBooks"
                        type="number"
                        value={formData.additional_attributes[0].attributeValue}
                        onChange={(value) => updateAttribute(0, "attributeValue", value)}
                        placeholder="e.g., 5"
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
                    placeholder="e.g., 5kgs"
                />
            </FormSection>

            {/* Submit */}
            <div className={styles.actions}>
                <button type="submit" className={styles.submitButton} disabled={isSubmitting}>
                    {isSubmitting ? "Creating..." : "Create Bundle"}
                </button>
            </div>
        </form>
    );
}
