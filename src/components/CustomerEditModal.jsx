import React, { useState } from "react";
import { Div, Button } from "../components/partials/GeneralStyles";
import Modal from "./partials/Modal";
import InputWrapper from "./InputWrapper";
import { getFormFields } from '../util';

export default function CustomerEditModal(props) {
  const { open, setOpen } = props;

  const [formData, setFormData] = useState(getFormFields());

  const handleEdit = () => {
    // CustomerKit.editCustomer(payload, id);
    // render changes
  };

  const handleEditModalClose = () => {
    setOpen(false);
  };

  return (
    <Modal open={open} title="Edit customer" setOpen={setOpen}>
      <InputWrapper setFormData={setFormData} formData={formData} />    
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
