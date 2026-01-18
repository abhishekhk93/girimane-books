import { ReactNode } from "react";
import styles from "./FormSection.module.css";

type FormSectionProps = {
    title: string;
    children: ReactNode;
    description?: string;
};

export function FormSection({ title, children, description }: FormSectionProps) {
    return (
        <section className={styles.section}>
            <div className={styles.header}>
                <h3 className={styles.title}>{title}</h3>
                {description && <p className={styles.description}>{description}</p>}
            </div>
            <div className={styles.content}>{children}</div>
        </section>
    );
}
