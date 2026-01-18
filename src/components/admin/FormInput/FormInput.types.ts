export type FormInputProps = {
    label: string;
    name: string;
    type?: "text" | "number" | "url";
    value: string | number;
    onChange: (value: string) => void;
    placeholder?: string;
    required?: boolean;
    error?: string;
};
