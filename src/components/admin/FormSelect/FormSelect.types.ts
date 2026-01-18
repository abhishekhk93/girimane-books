export type Option = {
    value: string;
    label: string;
};

export type FormSelectProps = {
    label: string;
    name: string;
    value: string;
    onChange: (value: string) => void;
    options: Option[];
    required?: boolean;
    error?: string;
};
