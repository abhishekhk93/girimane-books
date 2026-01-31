import styles from "./FormTextArea.module.css";
import { FormTextAreaProps } from "./FormTextArea.types";

export function FormTextArea({
    label,
    name,
    value,
    onChange,
    placeholder,
    required = false,
    rows = 4,
    error,
}: FormTextAreaProps) {
    return (
        <div className={styles.field}>
            <label htmlFor={name} className={styles.label}>
                {label}
                {required && <span className={styles.required}>*</span>}
            </label>
            <textarea
                id={name}
                name={name}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder={placeholder}
                className={`${styles.textarea} ${error ? styles.textareaError : ""}`}
                required={required}
                rows={rows}
            />
            {error && <span className={styles.error}>{error}</span>}
        </div>
    );
}
