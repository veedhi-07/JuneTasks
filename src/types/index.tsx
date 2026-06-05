export type FormField = {
  id: string;
  type: string;
  label: string;
  options?: string[];
  placeholder?: string;
  required?: boolean;
};

export type FieldType =
  | "text"
  | "dropdown"
  | "checkbox"
  | "radio"
  | "email"
  | "password";
