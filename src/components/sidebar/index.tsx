import { useState } from "react";
import { useFormBuilder } from "../../context/useFormBuilder";
import FieldConfig from "../fieldconfig";
export default function Sidebar() {
  const { addField } = useFormBuilder();

  return (
    <>
      <div className="container flex justify-center items-center bg-linear-to-b from-rose-200 via-pink-100 to-purple-200 h-screen w-96">
        <div className="buttons flex flex-col space-y-10">
          <FieldConfig type="text" hasPlaceholder={true} hasLabel={true} />

          <FieldConfig type="checkbox" hasLabel={true} />

          <FieldConfig type="radio" hasPlaceholder={false} hasLabel={true} />

          <FieldConfig type="email" hasPlaceholder={true} hasLabel={true} />

          <FieldConfig type="password" hasPlaceholder={true} hasLabel={true} />
        </div>
      </div>
    </>
  );
}
