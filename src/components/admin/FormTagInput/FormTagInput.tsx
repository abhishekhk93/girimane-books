"use client";

import { useState, KeyboardEvent } from "react";
import styles from "./FormTagInput.module.css";

type FormTagInputProps = {
    label: string;
    name: string;
    tags: string[];
    onChange: (tags: string[]) => void;
    placeholder?: string;
    required?: boolean;
};

export function FormTagInput({
    label,
    name,
    tags,
    onChange,
    placeholder = "Type and press Enter",
    required = false,
}: FormTagInputProps) {
    const [inputValue, setInputValue] = useState("");

    const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter" && inputValue.trim()) {
            e.preventDefault();
            if (!tags.includes(inputValue.trim())) {
                onChange([...tags, inputValue.trim()]);
            }
            setInputValue("");
        } else if (e.key === "Backspace" && !inputValue && tags.length > 0) {
            onChange(tags.slice(0, -1));
        }
    };

    const removeTag = (tagToRemove: string) => {
        onChange(tags.filter((tag) => tag !== tagToRemove));
    };

    return (
        <div className={styles.field}>
            <label htmlFor={name} className={styles.label}>
                {label}
                {required && <span className={styles.required}>*</span>}
            </label>
            <div className={styles.tagContainer}>
                {tags.map((tag) => (
                    <span key={tag} className={styles.tag}>
                        {tag}
                        <button
                            type="button"
                            className={styles.removeTag}
                            onClick={() => removeTag(tag)}
                            aria-label={`Remove ${tag}`}
                        >
                            ×
                        </button>
                    </span>
                ))}
                <input
                    id={name}
                    name={name}
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder={tags.length === 0 ? placeholder : ""}
                    className={styles.input}
                />
            </div>
        </div>
    );
}
