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
      <button className="bg-blue-300 h-11 w-30 ml-2 mb-2 mt-2">Submit</button>
    </>
  );
}
