export interface FormField {
  id: string;
  type: string;
  label: string;
  options?: string[];
  placeholder?: string;
  required?: boolean;
  validation?: ValidationRules;
}
export interface ValidationRules {
  required?: boolean;
  minLength?: number;
  maxLength?: number;
}

export type FieldType =
  | "text"
  | "select"
  | "checkbox"
  | "radio"
  | "email"
  | "password";
