import { useFormBuilder } from "../../context/useFormBuilder";
import DynamicFields from "../dynamicfield";

export default function PreviewForm() {
  const { fields } = useFormBuilder();

  return (
    <>
      {fields.map((field) => (
        <div key={field.id} className="flex flex-col">
          <div className="flex">
            <DynamicFields field={field} />
          </div>
        </div>
      ))}
    </>
  );
}
