import React, { useState, useEffect } from "react";

import { Div, Button } from "../components/partials/GeneralStyles";
import Modal from "./partials/Modal";
import InputWrapper from "./InputWrapper";
import CustomerKit from "./../data/CustomerKit";
import { getFormFields } from "../util";

export default function CustomerEditModal(props) {
  const { open, setOpen, customer, setCustomer } = props;
  const concatFormFields = () => {
    return {
      ...getFormFields().empty(),
      ...customer,
    };
  };

  const [formData, setFormData] = useState(concatFormFields());
  const [formSettings] = useState(getFormFields().settings());

  useEffect(() => {
    setFormData(concatFormFields());
  }, [customer]);

  const handleEdit = () => {
    CustomerKit.editCustomer(formData, formData.id)
      .then((res) => res.json)
      .then((data) => {
        setCustomer(formData);
      });
    handleEditModalClose();
  };

  const handleEditModalClose = () => {
    setOpen(false);
  };

  return (
    <Modal open={open} title="Edit customer" setOpen={setOpen} width="600px">
      <InputWrapper
        setFormData={setFormData}
        formData={formData}
        formSettings={formSettings}
      />
      <Div flex>
        <Button
          onClick={handleEditModalClose}
          background="danger"
          width="50%"
          margin="0 m 0 0"
        >
          Cancel
        </Button>

        <Button onClick={handleEdit} background="success" width="50%">
          Save
        </Button>
      </Div>
    </Modal>
  );
}
