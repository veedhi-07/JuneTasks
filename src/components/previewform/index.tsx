import { useFormBuilder } from "../../context/useFormBuilder";
import DynamicFields from "../dynamicfield";
import { Formik, Form } from "formik";
import { createValidationSchema } from "../utils/validation";
import { useState, useMemo } from "react";

export default function PreviewForm() {
  const { fields, removeField } = useFormBuilder();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const validationSchema = useMemo(
    () => createValidationSchema(fields),
    [fields],
  );

  const initialValues = useMemo(
    () =>
      fields.reduce(
        (acc, field) => {
          acc[field.id] = "";
          return acc;
        },
        {} as Record<string, string>,
      ),
    [fields],
  );  
  console.log(fields);
  console.log(validationSchema);
  if (isSubmitted) {
    return (
      <div className="h-700px flex items-center justify-center bg-white">
        <div className="text-center">
          <h1 className="text-4xl font-bold">Thank You!</h1>
          <p className="mt-4 text-gray-600">
            Your form has been submitted successfully.
          </p>
        </div>
      </div>
    );
  }
  return (
    <>
      <Formik
        enableReinitialize
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          console.log(values);
          setIsSubmitted(true);
        }}
      >
        {({ values, errors, handleChange }) => (
          <Form>
            {fields.map((field) => (
              <div key={field.id} className="flex flex-col">
                <div className="flex p-3">
                  <button
                    type="button"
                    onClick={() => removeField(field.id)}
                    className="
                      group
                      relative
                      border
                      rounded-md
                      hover:border-red-300
                      transition-colors
                      h-6 w-6
                      mr-2
                    "
                  >
                    ✕
                  </button>
                  <DynamicFields
                    field={field}
                    values={values}
                    errors={errors}
                    handleChange={handleChange}
                  />
                </div>
              </div>
            ))}
            <button
              className="bg-blue-300 h-11 w-30 ml-2 mb-2 mt-2"
              type="submit"
            >
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </>
  );
}
