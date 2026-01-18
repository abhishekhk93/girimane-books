import styles from "./FormInput.module.css";

type FormInputProps = {
    label: string;
    name: string;
    type?: "text" | "number" | "url";
    value: string | number;
    onChange: (value: string) => void;
    placeholder?: string;
    required?: boolean;
    error?: string;
};

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
