import type { FormField } from "../../types";
interface Props {
  field: FormField;
}

export default function DynamicFields({ field }: Props) {
  switch (field.type) {
    case "text":
      return (
        <div>
          <label>{field.label}:</label>
          <input type="text" placeholder={field.placeholder} />
        </div>
      );
    case "password":
      return (
        <div>
          <label>{field.label}:</label>
          <input type="password" placeholder={field.placeholder} />
        </div>
      );
    case "email":
      return (
        <div>
          <label>{field.label}:</label>
          <input type="email" placeholder={field.placeholder} />
        </div>
      );
    case "checkbox":
      return (
        <div>
          <label>{field.label}:</label>
          <input type="checkbox" />
         
        </div>
      );

    case "radio":
      return (
        <div>
          <label>{field.label}:</label>
          {/* {field.options?.map((option) => ( */}
          {/* <div key={option}> */}
          <input type="radio" />
          {/* {option} */}
          {/* </div> */}
          {/* ))} */}
        </div>
      );
    default:
      return null;
  }
}
