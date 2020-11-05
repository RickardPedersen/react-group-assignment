import React, { useContext, useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { CustomerContext } from "../contexts/CustomerContext";
import { H3, P, Div, Button, H1 } from "../components/partials/GeneralStyles";
import Container from "../components/partials/Container";
import CustomerKit from "./../data/CustomerKit";
import Modal from "../components/partials/Modal";

export default function CustomerDetailPage() {
  const { id } = useParams();
  const history = useHistory();

  const { customerDataList } = useContext(CustomerContext);
  const [customer, setCustomer] = useState(null);
  const [editModalOpen, setEditModalOpen] = useState(false);

  useEffect(() => {
    const index = customerDataList.findIndex((customer) => customer.id == id);
    setCustomer(customerDataList[index]);
    console.log(index);
  }, []);

  const handleDelete = () => {
    CustomerKit.deleteCustomer(id)
      .then(() => {
        // redirect
        history.push("/home");
      })
      .catch((e) => console.error(e));
  };

  const handleEdit = () => {
    // CustomerKit.editCustomer(payload, id);
    // render changes
  };

  const handleEditModalClose = () => {
    setEditModalOpen(false);
  };

  const handleEditModalOpen = () => {
    setEditModalOpen(true);
  };

  const renderDeleteEditButtons = () => {
    return (
      <Div flex>
        <Button
          onClick={handleDelete}
          background="danger"
          width="50%"
          margin="0 xl 0 0"
        >
          Delete
        </Button>

        <Button onClick={handleEditModalOpen} background="success" width="50%">
          Edit
        </Button>
      </Div>
    );
  };

  const renderEditModal = () => {
    return (
      <Modal open={editModalOpen}>
        <Div flex direction="column" width="100%" padding="m">
          <H3 margin="0" padding="0 0 m 0">Edit Customer</H3>
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
        </Div>
      </Modal>
    );
  };

  return (
    <Container>
      {customer && (
        <Div background="gray1" padding="xl" borderRadius="borderRadius">
          <H3 margin="0 0 m 0">{customer.name}</H3>

          {Object.entries(customer).map((entry, index) => {
            if (typeof entry[1] == "string") {
              return <P key={index}>{`${entry[0]}: ${entry[1]}`}</P>;
            }
          })}
          {renderDeleteEditButtons()}
        </Div>
      )}
      {renderEditModal()}
    </Container>
  );
}
