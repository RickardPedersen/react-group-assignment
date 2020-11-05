import React from "react";

export default function InputWrapper(props) {
  const { formData, setFormData } = props;
  function handleOnChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }
  return (
    <>
      {Object.keys(formData).map((inputNameItem, index) => {
        return (
          <InputComponent
            key={index}
            type={"text"}
            name={inputNameItem}
            value={formData[inputNameItem]}
            placeholder={`enter ${inputNameItem}`}
            handleOnChange={handleOnChange}
          />
        );
      })}
    </>
  );
}
