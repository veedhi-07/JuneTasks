import { useState } from "react";
import { useFormBuilder } from "../../context/useFormBuilder";
import type { FieldType } from "../../types";

export default function Sidebar() {
  const { addField } = useFormBuilder();

  const [type, setType] = useState<FieldType>("text");
  const [label, setLabel] = useState("");
  const [placeholder, setPlaceholder] = useState("");
  const [options, setOptions] = useState("");

  const [required, setRequired] = useState(false);
  const [minLength, setMinLength] = useState("");
  const [maxLength, setMaxLength] = useState("");

  const handleAdd = () => {
    if (!label.trim()) return;

    addField(
      type,
      label,
      placeholder,
      options
        .split(",")
        .map((item) => item.trim())
        .filter(Boolean),
      {
        required,
        minLength: minLength ? Number(minLength) : undefined,
        maxLength: maxLength ? Number(maxLength) : undefined,
      },
    );

    setLabel("");
    setPlaceholder("");
    setOptions("");
    setRequired(false);
    setMinLength("");
    setMaxLength("");
  };

  return (
    <div className="w-80 p-4 flex flex-col space-x-5 gap-5 h-screen bg-linear-to-b from-rose-200 via-pink-100 to-purple-200">
      <h1>
        <strong>Slect Field To Add In Form</strong>
      </h1>
      <select
        value={type}
        onChange={(e) => setType(e.target.value as FieldType)}
      >
        <option value="text">Text</option>
        <option value="email">Email</option>
        <option value="password">Password</option>
        <option value="select">Select</option>
        <option value="checkbox">Checkbox</option>
        <option value="radio">Radio</option>
      </select>

      <input
        type="text"
        placeholder="Label"
        value={label}
        onChange={(e) => setLabel(e.target.value)}
      />

      {type !== "checkbox" && type !== "radio" && (
        <input
          type="text"
          placeholder="Placeholder"
          value={placeholder}
          onChange={(e) => setPlaceholder(e.target.value)}
        />
      )}

      {type === "select" && (
        <input
          type="text"
          placeholder="Option1, Option2, Option3"
          value={options}
          onChange={(e) => setOptions(e.target.value)}
        />
      )}

      <label>
        <input
          type="checkbox"
          checked={required}
          onChange={(e) => setRequired(e.target.checked)}
        />
        Required
      </label>

      {type !== "checkbox" && type !== "radio" && (
        <>
          <input
            type="number"
            placeholder="Min Length"
            value={minLength}
            onChange={(e) => setMinLength(e.target.value)}
          />

          <input
            type="number"
            placeholder="Max Length"
            value={maxLength}
            onChange={(e) => setMaxLength(e.target.value)}
          />
        </>
      )}

      <button
        className="bg-blue-300 h-11 w-30 ml-2 mb-2 mt-2"
        onClick={handleAdd}
      >
        Add Field
      </button>
    </div>
  );
}
