import React from "react";
import InputComponent from "../components/partials/InputComponent";
import { getFormattedLabel } from "../util";

export default function InputWrapper(props) {
  const { formData, setFormData, formSettings, formTemplate } = props;

  function handleOnChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  return (
    <>
      {Object.keys(formTemplate)
        .map((inputNameItem, index) => {
          const formattedLabel = getFormattedLabel(inputNameItem);
          return (
            <InputComponent
              key={index}
              type={formSettings[inputNameItem].type || "text"}
              required={formSettings[inputNameItem].required || false}
              name={inputNameItem}
              value={formData[inputNameItem] || ""}
              validation = {formSettings[inputNameItem].validation}
              placeholder={`Enter ${formattedLabel}`}
              label={formattedLabel}
              handleOnChange={handleOnChange}
            />
          );
        })}
    </>
  );
}
