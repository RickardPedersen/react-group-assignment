import React, { useState, useContext } from "react";
import { Button, Div, H3 } from "./partials/GeneralStyles";
import Modal from "./partials/Modal";
import FormComponent from "../components/partials/FormComponent";
import InputWrapper from "./InputWrapper";
import CustomerKit from "../data/CustomerKit";
import { getFormFields } from "../util";

export default function CreateCustomer(props) {
  const [formData, setFormData] = useState(getFormFields().empty());
  const [fieldTypes] = useState(getFormFields().fieldTypes());
  const [isOpen, setIsOpen] = useState(false);

  function handleOnSubmit() {
    if (formData.name.length > 0) {
      CustomerKit.postNewCustomer(formData)
        .then((res) => res.json())
        .then((data) => {
          setFormData(getFormFields().empty());
          props.fetchCustomers();
        });
    }

    setIsOpen(false);
  }

  function handleOnClick() {
    setIsOpen(true);
  }
  return (
    <div>
      <Button onClick={handleOnClick}>Add Customer</Button>
      {isOpen && (
        <Modal open={isOpen} setOpen={setIsOpen} title="Add customer">
            <FormComponent handleOnSubmit={handleOnSubmit}>
              <InputWrapper setFormData={setFormData} formData={formData} fieldTypes={fieldTypes}/>
            </FormComponent>
        </Modal>
      )}
    </div>
  );
}
