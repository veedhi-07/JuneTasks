import type { FormField } from "../../types";
interface Props {
  field: FormField;
  values: Record<string, string>;
  errors: Record<string, string | undefined>;
  handleChange: (e: React.ChangeEvent<any>) => void;
}

export default function DynamicFields({
  field,
  values,
  errors,
  handleChange,
}: Props) {
  console.log("Values:", values);
  switch (field.type) {
    case "text":
      return (
        <div>
          <label>{field.label}:</label>
          <input
            type="text"
            placeholder={field.placeholder}
            name={field.id}
            value={values[field.id] as string}
            onChange={handleChange}
          />

          {errors[field.id] && (
            <p className="text-red-500 text-sm">{errors[field.id]}</p>
          )}
        </div>
      );
    case "password":
      return (
        <div>
          <label>{field.label}:</label>
          <input
            type="password"
            placeholder={field.placeholder}
            name={field.id}
            value={values[field.id] || ""}
            onChange={handleChange}
          />
          {errors[field.id] && (
            <p className="text-red-500 text-sm">{errors[field.id]}</p>
          )}
        </div>
      );
    case "email":
      return (
        <div>
          <label>{field.label}:</label>
          <input
            type="email"
            placeholder={field.placeholder}
            name={field.id}
            value={values[field.id] || ""}
            onChange={handleChange}
          />
          {errors[field.id] && (
            <p className="text-red-500 text-sm">{errors[field.id]}</p>
          )}
        </div>
      );
    case "checkbox":
      return (
        <div>
          <label>{field.label}:</label>
          <input
            type="checkbox"
            name={field.id}
            checked={Boolean(values[field.id])}
            onChange={handleChange}
          />
          {errors[field.id] && (
            <p className="text-red-500 text-sm">{errors[field.id]}</p>
          )}
        </div>
      );

    case "radio":
      return (
        <div>
          <label>{field.label}:</label>
          <input
            type="radio"
            name={field.id}
            checked={Boolean(values[field.id])}
            onChange={handleChange}
          />
          {errors[field.id] && (
            <p className="text-red-500 text-sm">{errors[field.id]}</p>
          )}
        </div>
      );
    case "select":
      return (
        <div>
          <label>{field.label}:</label>
          <select
            name={field.id}
            value={values[field.id] || ""}
            onChange={handleChange}
          >
            <option value="">Select an option</option>
            {field.options?.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          {errors[field.id] && (
            <p className="text-red-500 text-sm">{errors[field.id]}</p>
          )}
        </div>
      );
    default:
      return null;
  }
}

// const str = JSON.stringify("users", null, 2);
// const blob = new blob([str], { type: "application/JSON" });
// const url = URL.createObjectURL(blob);
// const a = document.createElement("a");
// a.href = url;
// a.download = "users.json";
// a.click();
// URL.revokeObjectURL(url);
