import { createContext, useContext, useState, type ReactNode } from "react";
import type { FieldType, FormField } from "../../types";

type FormContextType = {
  fields: FormField[];
  addField: (type: FieldType, label: string, placeholder?: string) => void;
};

const FormContext = createContext<FormContextType | null>(null);

type FormProviderProps = {
  children: ReactNode;
};

export function FormProvider({ children }: FormProviderProps) {
  const [fields, setFields] = useState<FormField[]>([]);

  const addField = (type: FieldType, label: string, placeholder?: string) => {
    setFields((prev) => [
      ...prev,
      {
        id: String(Date.now()),
        type,
        label,
        placeholder,
      },
    ]);
  };

  return (
    <FormContext.Provider
      value={{
        fields,
        addField,
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
