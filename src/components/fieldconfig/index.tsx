// components/FieldConfig.tsx

import { useState } from "react";
import { useFormBuilder } from "../../context/useFormBuilder";
import type { FieldType } from "../../types";

interface FieldConfigProps {
  type: FieldType;
  hasPlaceholder?: boolean;
  hasLabel?: boolean;
}

export default function FieldConfig({
  type,
  hasPlaceholder = false,
  hasLabel = false,
}: FieldConfigProps) {
  const { addField } = useFormBuilder();

  const [label, setLabel] = useState("");
  const [placeholder, setPlaceholder] = useState("");

  const handleAdd = () => {
    if (!label.trim()) return;

    addField(type, label, placeholder);

    setLabel("");
    setPlaceholder("");
  };

  return (
    <div className="flex flex-col gap-2">
      <button className="inpbtn" onClick={handleAdd}>
        Add {type}
      </button>
      {hasLabel && (
        <input
          type="text"
          placeholder="Enter Label"
          value={label}
          onChange={(e) => setLabel(e.target.value)}
          className="border p-2"
        />
      )}

      {hasPlaceholder && (
        <input
          type="text"
          placeholder="Enter Placeholder"
          value={placeholder}
          onChange={(e) => setPlaceholder(e.target.value)}
          className="border p-2"
        />
      )}
    </div>
  );
}
