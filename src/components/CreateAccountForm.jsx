import React, { useState } from "react";
import FormComponent from "./partials/FormComponent";
import InputComponent from "./partials/InputComponent";
import UserKit from "../data/UserKit";
import { H1, Button, P } from "./partials/GeneralStyles";

export default function CreateAccountForm(props) {
  const { toggle, show } = props;
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    organisationName: "",
    organisationKind: "",
  });

  const passwordValidation = {
    callback: (value) => {
      return value.length == 0 || value.match(/^(?=.*\d)(?=.*[a-zA-Z]).{8,}$/);
    },
    message: "Must be at least 8 characters with letters and numbers.",
  };

  function handleOnChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleOnSubmit() {
    UserKit.createAccount(formData).then((res) => {
      if (res.status === 201) {
        console.log("Account created! Please activate account.");
      }
    });
  }

  function handleToggle() {
    toggle(!show);
  }

  return (
    <FormComponent handleOnSubmit={handleOnSubmit}>
      <H1>Create Account</H1>
      <InputComponent
        required={true}
        name="email"
        label="E-mail"
        placeholder="killenmedallt@hotmail.com"
        value={formData.email}
        handleOnChange={handleOnChange}
      />
      <InputComponent
        required={true}
        name="password"
        label="Password"
        type="password"
        validation={passwordValidation}
        placeholder="Enter password..."
        value={formData.password}
        handleOnChange={handleOnChange}
      />
      <InputComponent
        name="firstName"
        label="First Name"
        placeholder="Enter first name..."
        value={formData.firstName}
        handleOnChange={handleOnChange}
      />
      <InputComponent
        name="lastName"
        label="Last Name"
        placeholder="Enter last name..."
        value={formData.lastName}
        handleOnChange={handleOnChange}
      />
      <InputComponent
        required={true}
        name="organisationName"
        label="Organisation Name"
        placeholder="Enter Organisation Name..."
        value={formData.organisationName}
        handleOnChange={handleOnChange}
      />
      <InputComponent
        required={true}
        name="organisationKind"
        label="Organisation Kind"
        placeholder="Ex. 0, 1, 2"
        value={formData.organisationKind}
        handleOnChange={handleOnChange}
      />
      <P>Already have an account?</P>
      <Button margin="0 0 5px" type="button" onClick={handleToggle}>
        Log In
      </Button>
    </FormComponent>
  );
}
