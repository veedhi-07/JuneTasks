import { createContext, useContext, useState, type ReactNode } from "react";
import type { FieldType, FormField, ValidationRules } from "../../types/index";

type FormContextType = {
  fields: FormField[];
  addField: (
    type: FieldType,
    label: string,
    placeholder?: string,
    options?: string[],
    validation?: ValidationRules,
  ) => void;
  removeField: (id: string) => void;
};

const FormContext = createContext<FormContextType | null>(null);

type FormProviderProps = {
  children: ReactNode;
};

export function FormProvider({ children }: FormProviderProps) {
  const [fields, setFields] = useState<FormField[]>([]);

  const addField = (
    type: FieldType,
    label: string,
    placeholder?: string,
    options?: string[],
    validation?: ValidationRules,
  ) => {
    setFields((prev) => [
      ...prev,
      {
        id: String(Date.now()),
        type,
        label,
        placeholder,
        options,
        validation,
      },
    ]);
  };

  const removeField = (id: string) => {
    setFields((prev) => prev.filter((field) => field.id !== id));
  };

  return (
    <FormContext.Provider
      value={{
        fields,
        addField,
        removeField,
      }}
    >
      {children}
    </FormContext.Provider>
  );
}
export function useFormBuilder() {
  const context = useContext(FormContext);

  if (!context) {
    throw new Error("useFormBuilder must be used within FormProvider");
  }
  return context;
}
