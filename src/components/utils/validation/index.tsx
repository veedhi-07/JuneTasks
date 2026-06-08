import * as Yup from "yup";
import type { FormField } from "../../../types";

export const createValidationSchema = (fields: FormField[]) => {
  const schemaFields: Record<string, Yup.AnySchema> = {};

  fields.forEach((field) => {
    let validator = Yup.string();

    if (field.validation?.required) {
      validator = validator.required(`${field.label} is required`);
    }

    if (field.validation?.minLength) {
      validator = validator.min(
        field.validation.minLength,
        `${field.label} must be at least ${field.validation.minLength} characters`,
      );
    }

    if (field.validation?.maxLength) {
      validator = validator.max(
        field.validation.maxLength,
        `${field.label} must be at most ${field.validation.maxLength} characters`,
      );
    }


    if (field.type === "email") {
      validator = validator
        .required("Email is required")
        .email("Invalid email");
    }

    schemaFields[field.id] = validator;
  });

  return Yup.object(schemaFields);
};
