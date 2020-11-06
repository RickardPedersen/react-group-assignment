import React from "react";
import InputComponent from "../components/partials/InputComponent";
import { getFormattedLabel, getFormFields } from "../util";

export default function InputWrapper(props) {
  const { formData, setFormData, formSettings } = props;

  function handleOnChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function shouldRender(item) {
	return typeof getFormFields().empty()[item] == 'string'
  }

  return (
    <>
      {Object.keys(formData)
        .filter(shouldRender)
        .map((inputNameItem, index) => {
          const formattedLabel = getFormattedLabel(inputNameItem);
          return (
            <InputComponent
              key={index}
              type={formSettings[inputNameItem].type || "text"}
              required={formSettings[inputNameItem].required || false}
              name={inputNameItem}
              value={formData[inputNameItem] || ""}
              placeholder={`Enter ${formattedLabel}`}
              label={formattedLabel}
              handleOnChange={handleOnChange}
            />
          );
        })}
    </>
  );
}
