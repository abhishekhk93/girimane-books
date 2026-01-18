import styles from "./FormInput.module.css";
import { FormInputProps } from "./FormInput.types";

export function FormInput({
    label,
    name,
    type = "text",
    value,
    onChange,
    placeholder,
    required = false,
    error,
}: FormInputProps) {
    return (
        <div className={styles.field}>
            <label htmlFor={name} className={styles.label}>
                {label}
                {required && <span className={styles.required}>*</span>}
            </label>
            <input
                id={name}
                name={name}
                type={type}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder={placeholder}
                className={`${styles.input} ${error ? styles.inputError : ""}`}
                required={required}
            />
            {error && <span className={styles.error}>{error}</span>}
        </div>
    );
}
