export type FormTagInputProps = {
    label: string;
    name: string;
    tags: string[];
    onChange: (tags: string[]) => void;
    placeholder?: string;
    required?: boolean;
};
