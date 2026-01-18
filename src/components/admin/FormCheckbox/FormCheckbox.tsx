import styles from "./FormCheckbox.module.css";
import { FormCheckboxProps } from "./FormCheckbox.types";

export function FormCheckbox({
    label,
    name,
    checked,
    onChange,
}: FormCheckboxProps) {
    return (
        <label className={styles.field}>
            <input
                type="checkbox"
                name={name}
                checked={checked}
                onChange={(e) => onChange(e.target.checked)}
                className={styles.checkbox}
            />
            <span className={styles.checkmark}></span>
            <span className={styles.label}>{label}</span>
        </label>
    );
}
