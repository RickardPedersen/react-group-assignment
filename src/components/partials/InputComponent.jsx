import React, { useState } from "react";
import * as Styled from "./GeneralStyles";

export default function InputComponent(props) {
  const {
    type,
    name,
    value,
    handleOnChange,
    placeholder,
    label,
    required,
    validation,
  } = props;

  const [valid, setValid] = useState(true);

  function validate(e) {
    if (validation) {
        setValid(validation.callback(e.target.value));
	}
	
	handleOnChange(e);
  }
  return (
    <>
      {label && (
        <Styled.P fontSize="0.8em" bold margin="0 0 xs 0">{`${label}${
          required ? " *" : ""
        }`}</Styled.P>
      )}
      {!valid && validation && (
        <Styled.P fontSize="0.8em" bold margin="0 0 xs 0" color="danger">
          {validation.message}
        </Styled.P>
      )}
      <Styled.Input
        type={type ? type : "text"}
        name={name}
        value={value}
        margin="0 0 m 0"
        required={required}
        placeholder={placeholder}
        onChange={validate}
      />
    </>
  );
}
