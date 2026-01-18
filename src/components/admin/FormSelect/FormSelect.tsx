import styles from "./FormSelect.module.css";
import { FormSelectProps } from "./FormSelect.types";

export function FormSelect({
    label,
    name,
    value,
    onChange,
    options,
    required = false,
    error,
}: FormSelectProps) {
    return (
        <div className={styles.field}>
            <label htmlFor={name} className={styles.label}>
                {label}
                {required && <span className={styles.required}>*</span>}
            </label>
            <div className={styles.selectWrapper}>
                <select
                    id={name}
                    name={name}
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    className={`${styles.select} ${error ? styles.selectError : ""}`}
                    required={required}
                >
                    {options.map((option) => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>
                <span className={styles.arrow}>▾</span>
            </div>
            {error && <span className={styles.error}>{error}</span>}
        </div>
    );
}
